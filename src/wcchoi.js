//var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
//if(ENVIRONMENT_IS_WORKER) importScripts('libunrar.js')

// wcchoi Code:
/* ----------------
 * CONSTANTS (from dll.hpp)
 * -------------- */

'use strict'

var ERAR_SUCCESS = 0
var ERAR_END_ARCHIVE = 10
var ERAR_NO_MEMORY = 11
var ERAR_BAD_DATA = 12
var ERAR_BAD_ARCHIVE = 13
var ERAR_UNKNOWN_FORMAT = 14
var ERAR_EOPEN = 15
var ERAR_ECREATE = 16
var ERAR_ECLOSE = 17
var ERAR_EREAD = 18
var ERAR_EWRITE = 19
var ERAR_SMALL_BUF = 20
var ERAR_UNKNOWN = 21
var ERAR_MISSING_PASSWORD = 22
var ERAR_EREFERENCE = 23
var ERAR_BAD_PASSWORD = 24

var RAR_OM_LIST = 0
var RAR_OM_EXTRACT = 1
var RAR_OM_LIST_INCSPLIT = 2

var RAR_SKIP = 0
var RAR_TEST = 1
var RAR_EXTRACT = 2

var RAR_VOL_ASK = 0
var RAR_VOL_NOTIFY = 1

var RAR_DLL_VERSION = 6

var RAR_HASH_NONE = 0
var RAR_HASH_CRC32 = 1
var RAR_HASH_BLAKE2 = 2

var RHDF_SPLITBEFORE = 0x01
var RHDF_SPLITAFTER = 0x02
var RHDF_ENCRYPTED = 0x04
var RHDF_SOLID = 0x10
var RHDF_DIRECTORY = 0x20

var UCM_CHANGEVOLUME = 0
var UCM_PROCESSDATA = 1
var UCM_NEEDPASSWORD = 2
var UCM_CHANGEVOLUMEW = 3
var UCM_NEEDPASSWORDW = 4

/* -----------------
 * Error Reporting
 * ---------------- */

var reportOpenError = function (code) {
  switch (code) {
    case ERAR_NO_MEMORY:
      throw 'Not enough memory to initialize data structures'
      break
    case ERAR_BAD_DATA:
      throw 'Archive header broken'
      break
    case ERAR_UNKNOWN_FORMAT:
      throw 'Unknown encryption used for archive headers'
      break
    case ERAR_EOPEN:
      throw 'File open error'
      break
    case ERAR_BAD_PASSWORD:
      throw 'Entered password is invalid. This code is returned only for archives in RAR 5.0 format'
      break
    case ERAR_BAD_ARCHIVE:
      throw 'Bad archive'
      break
    default:
      throw 'Unknown open error code'
      break
  }
}

var reportReadHeaderError = function (code) {
  switch (code) {
    case ERAR_BAD_DATA:
      throw 'File header broken'
      break
    case ERAR_MISSING_PASSWORD:
      throw 'Password was not provided for encrypted file header'
      break
    case ERAR_BAD_PASSWORD:
      throw 'Bad password'
      break
    default:
      throw 'Unknown read header error code'
      break
  }
}

var reportProcessFileError = function (code) {
  switch (code) {
    case ERAR_BAD_DATA:
      throw 'File CRC error'
      break
    case ERAR_UNKNOWN_FORMAT:
      throw 'Unknown archive format'
      break
    case ERAR_EOPEN:
      throw 'Volume open error'
      break
    case ERAR_ECREATE:
      throw 'File create error'
      break
    case ERAR_ECLOSE:
      throw 'File close error'
      break
    case ERAR_EREAD:
      throw 'Read error'
      break
    case ERAR_EWRITE:
      throw 'Write error'
      break
    case ERAR_NO_MEMORY:
      throw 'Not enough memory'
      break
    case ERAR_EREFERENCE:
      throw 'When attempting to unpack a reference record (see RAR -oi switch), source file for this reference was not found. Entire archive needs to be unpacked to properly create file references. This error is returned when attempting to unpack the reference record without its source file.'
      break
    case ERAR_BAD_PASSWORD:
      throw 'Entered password is invalid. This code is returned only for archives in RAR 5.0 format'
      break
    case ERAR_MISSING_PASSWORD:
      throw 'Missing password'
      break
    default:
      throw 'Unknown Process File error code'
      break
  }
}

/* --------------------------
 * Actual extraction code
 *------------------------- */
/**
 Get the content of file(s) inside a RAR archive or archives(for multi-part RAR)

 @param data: Array of {name:filename in string, content: UTF8string|ArrayBufferView for non WorkerFS version, or File|Blob for WorkerFS version}
 In case of single RAR archive, data = [
 {name: 'test.rar', content: content of test.rar}
 ]
 In case of multi-part RAR, it would be like this:
 [
 {name: 'test.part1.rar', content: content of test.part1.rar},
 ...
 {name: 'test.partN.rar', content: content of test.partN.rar}
 ]
 @param password: string
 @param callbackFn: function(currFileName, currFileSize, currProcessed)
 It is used to show progress(of a single file only, whole archive progress not implemented)

 Result is an array of JS Object representing RAR archive content
 @fullFileName "full file name including the directory path"
 @is_file true -file, false-directory
 @name "FileName"
 @readData Uint8Array or promise returning Uint8Array
 @size_compressed
 @size_uncompressed
 */

/**WORKERFS version, only works in web workers.
 //data: Array of [{ name: 'arc_name.txt', content: File|Blob }] */
let start=false;
var readRARContentWorkerFS = function (data, password,callbackFn) {
  if(data == null || data.length==0 || data.length<1) return null;
  let files=[];
  let blobs=[];
  for (let d of data) if(d.content instanceof File) files.push(d.content); else blobs.push({ name: d.name, data: d.content });
  if(!start) Module.FS.mkdir('/x')
  Module.FS.mount(Module.WORKERFS, {
    files: files,
    blobs: blobs,
    encoding: 'binary',
    canOwn: true,
    flags: 'w+'
  }, '/x')
  if(!start) Module.FS.chdir('/x');
  start = true;
  return _readRARContent(data, password,'W',callbackFn)
}

/**Everything is loaded to the memory so make sure you have enough free memory to hold BOTH the RAR file AND the decompressed content
 data: Array of [{ name: 'arc_name.txt', content: UTF8string|ArrayBufferView }] */
var readRARContent = function (data, password, callbackFn) {
  if(data == null || data.length==0 || data.length<1) return null;
  // write the byte arrays to a file first
  // because the library operates on files
  // the canOwn flag reduces the memory usage
  for (var i = 0; i < data.length; i++) {
    Module.FS.writeFile(data[i].name, data[i].content, { encoding: 'binary', canOwn: true, flags: 'w+' })
  }
  return _readRARContent(data, password,'',callbackFn)
}

//-----------------------------------------------------
//data = array of (File | {name:"filename", content:UTF8string|ArrayBufferView} )
//string|ArrayBufferView
var _readRARContent = function (data, password,type,callbackFn) {
  var data = data
  //console.log('Current working directory: ', Module.FS.cwd())

  var returnVal = []
  var arcData = new Module.RAROpenArchiveDataEx()
  arcData.set_ArcName(data[0].name)
  arcData.set_OpenMode(RAR_OM_EXTRACT)

  var pars= {
    password:password,
    currFileName:null,
    currFileSize:null,
    currPackedFileSize:null,
    currFileBuffer:null,
    currFileBufferEnd:null,
    currFileFlags:null,
  }

  var cb = Module.addFunction(RARcb(pars,callbackFn), 'iiiii')
  arcData.set_Callback(cb)

  var handle = Module._RAROpenArchiveEx(Module.getPointer(arcData))

  var or = arcData.get_OpenResult()
  if (or !== ERAR_SUCCESS || !handle) {
    cleanup(data,handle,cb,type)
    reportOpenError(or)
    return null
  }

  //ShowArcInfo(arcData.get_Flags())
  if (password) {
    Module._RARSetPassword(handle, Module.ensureString(password))
  }

  var header = new Module.RARHeaderDataEx()
  var res = Module._RARReadHeaderEx(handle, Module.getPointer(header))
  let i=0;
  while (res === ERAR_SUCCESS) { i++
    pars.currFileName = header.get_FileNameW()// getFileName()
    if(i % 1000 ==0){console.log('filename: ', pars.currFileName);console.log(i);}
    pars.currFileSize = header.get_UnpSize()
    pars.currPackedFileSize = header.get_PackSize()
    pars.currFileBuffer = new ArrayBuffer(pars.currFileSize)
    pars.currFileBufferEnd = 0

    pars.currFileFlags = header.get_Flags()
    //console.log('File continued from previous volume? ', pars.currFileFlags & RHDF_SPLITBEFORE ? 'yes' : 'no')
    //console.log('File continued on next volume? ', pars.currFileFlags & RHDF_SPLITAFTER ? 'yes' : 'no')
    //console.log('Previous files data is used (solid flag)? ', pars.currFileFlags & RHDF_SOLID ? 'yes' : 'no')

    // ***process file***
    // use RAR_TEST instead of RAR_EXTRACT
    // because there is some problem reading from
    // the extracted file in Emscripten file system
    var PFCode = Module._RARProcessFileW(handle, RAR_TEST, 0, 0)
    if (PFCode === ERAR_SUCCESS) {
      returnVal.push({
        type: (pars.currFileFlags & RHDF_DIRECTORY) ? 'dir' : 'file',
        fileName: pars.currFileName,
        fileNameSplit: pars.currFileName.split('/'),
        fileSize: pars.currFileSize,
        packedFileSize: pars.currPackedFileSize,
        content: new Uint8Array(pars.currFileBuffer)
      })
    } else {
      cleanup(data,handle,cb,type)
      reportProcessFileError(PFCode)
      return null
    }
    res = Module._RARReadHeaderEx(handle, Module.getPointer(header))
  }
  //console.log(res)
  if (res !== ERAR_END_ARCHIVE) {
    cleanup(data,handle,cb,type)
    reportReadHeaderError(res)
    return null
  }

  cleanup(data,handle,cb,type)
  return makeDirTree(returnVal)
}

function cleanup (data,handle,cb,type) {
  Module._RARCloseArchive(handle)
  if(type=='W') Module.FS.unmount('/x')
  else for (var i = 0; i < data.length; i++) {
    Module.FS.unlink(data[i].name)
  }
  Module.removeFunction(cb)
}

// build up a directory tree-like structure
function makeDirTree(returnVal){
  var dirs = returnVal.filter(function (en) { return en.type === 'dir' }).sort(function (a, b) { return a.fileNameSplit.length - b.fileNameSplit.length })
  var files = returnVal.filter(function (en) { return en.type === 'file' }).sort(function (a, b) { return a.fileNameSplit.length - b.fileNameSplit.length })

  var rootDir = { type: 'dir', ls: {} }
  var mkdir = function (path) {
    var dir = rootDir
    path.forEach(function (p) {
      if (!(p in dir.ls)) {
        dir.ls[p] = {
          type: 'dir',
          ls: {}
        }
      }
      dir = dir.ls[p]
    })
  }
  dirs.forEach(function (e) { mkdir(e.fileNameSplit) })

  var putFile = function (entry) {
    var fileName = entry.fileNameSplit.pop()
    var dir = rootDir
    entry.fileNameSplit.forEach(function (p) {
      dir = dir.ls[p]
    })
    dir.ls[fileName] = {
      type: 'file',
      fullFileName: entry.fileName,
      fileSize: entry.fileSize,
      packedFileSize: entry.packedFileSize,
      fileContent: entry.content
    }
  }
  files.forEach(putFile)

  //console.log(rootDir)
  return rootDir
}

function RARcb(pars,callbackFn) {
  return function (msg, UserData, P1, P2) {
    // volume change event
    if (msg === UCM_CHANGEVOLUMEW) return 0
    if (msg === UCM_CHANGEVOLUME) {
      if (P2 === RAR_VOL_ASK) {
        return -1
      } else if (P2 === RAR_VOL_NOTIFY) {
        console.log('... volume is :', /* Pointer_stringify */ Module.UTF8ToString(P1))
        return 1
      }
      throw 'Unknown P2 value in volume change event'
    }

    if (msg === UCM_NEEDPASSWORDW) return 0
    if (msg === UCM_NEEDPASSWORD) {
      if (pars.password) {
        Module.stringToUTF8(pars.password, P1, P2)
        return 1
      } else return -1
    }

    if (msg !== UCM_PROCESSDATA) {
      return -1 // abort operation
    }

    if(callbackFn){callbackFn(pars.currFileName, pars.currFileSize, pars.currFileBufferEnd)}

    // directly access the HEAP
    var block = Module.HEAPU8.subarray(P1, P1 + P2)
    var view = new Uint8Array(pars.currFileBuffer, pars.currFileBufferEnd, P2)
    view.set(block)
    pars.currFileBufferEnd += P2

    return 1
  }
}

function ShowArcInfo(Flags) {
  // console.log("\nArchive %s\n",ArcName);
  console.log('Volume:\t\t%s', (Flags & 1) ? 'yes' : 'no')
  console.log('Comment:\t%s', (Flags & 2) ? 'yes' : 'no')
  console.log('Locked:\t\t%s', (Flags & 4) ? 'yes' : 'no')
  console.log('Solid:\t\t%s', (Flags & 8) ? 'yes' : 'no')
  console.log('New naming:\t%s', (Flags & 16) ? 'yes' : 'no')
  console.log('Recovery:\t%s', (Flags & 64) ? 'yes' : 'no')
  console.log('Encr.headers:\t%s', (Flags & 128) ? 'yes' : 'no')
  console.log('First volume:\t%s', (Flags & 256) ? 'yes' : 'no or older than 3.0')
  console.log('---------------------------\n')
}

// export
if (typeof process === 'object' && typeof require === 'function') { // NODE
  module.exports = readRARContent
} else if (typeof define === 'function' && define.amd) { // AMD
  define('readRARContent', [], function () { return readRARContent })
} else if (typeof window === 'object') { // WEB
  window['readRARContent'] = readRARContent
} else if (typeof importScripts === 'function') { // WORKER
  this['readRARContent'] = readRARContent
  this['readRARContentWorkerFS'] = readRARContentWorkerFS
}


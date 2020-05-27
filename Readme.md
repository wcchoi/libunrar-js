new_wasm
libunrar.js  
===========  
  
Emscripten port of RARLab's open-source unrar library  
  
# Changes  
Compiled with unrar v5.8.5, support RAR 5 format.  
Added WorkerFS version.  
  
# How to use  
1. Visit http://wcchoi.github.io/libunrar-js/  
2. Drag the RAR file to the box or select from the file chooser then click **Unrar**.   
3. For multi-part RAR, drag/select ALL the parts (part1.rar to partN.rar).   
4. If you get a password error, fill in the password then click **Unrar**.   
5. Wait for the decompression to complete and click on the file name to download the decompressed content.  
  
# Caveat  
1. For non WorkerFS version everything is loaded to the memory so make sure you have enough free memory to hold BOTH the RAR file AND the decompressed content (although only the decompressed content will keep in memory after decompression) , otherwise your browser page may crash.  
2. WorkerFS version 15x time slower with many small files.  
2. Slow, especially for password-protected RAR  
3. Memory leak in IE, no problem in Chrome  
  
# WHY?  
If you are in node.js environment then this is probably useless for you because you can call the native unrar utility/library. I made this for using on my Chromebook because ChromeOS does not yet support extracting password-protected RAR archive or multi-part RAR archives(.part1.rar - .partN.rar files) in the file manager, and using crouton/android apk for that task is an overkill.  
  
Tested on latest version of Chrome(chromebook, PC, android), though it also somehow works in IE11(desktop). Not tested on other browsers.  
  
# How to use the code  
Include libunrar.js.  
call readRARContent or readRARContentWorkerFS function  
**@param data**: Array of {name, content}  
name -filename in string  
content: UTF8string|ArrayBufferView for non WorkerFS version, or File|Blob for WorkerFS version  
  
In case of single RAR archive, data = [{name: 'test.rar', content: content of test.rar}]  
In case of multi-part RAR, it would be like this: [{name: 'test.part1.rar', content: content of test.part1.rar}, ..., name: 'test.partN.rar', content: content of test.partN.rar}]  
 
**@param password**: string  
**@param callbackFn**: function(currFileName, currFileSize, currProcessed)  
 It is used to show progress(of a single file only, whole archive progress not implemented)  
  
 Result is an array of JS Object representing RAR archive content  
 **fullFileName** "full file name including the directory path"  
 **is_file** true -file, false-directory  
 **name** "FileName"  
 **readData** Uint8Array or promise returning Uint8Array  
 **size_compressed**  
 **size_uncompressed**  
    
# How to Compile  
1. run  build.sh <path_to_emsdk(def ~)>  
  
2. Result will be in dist folder
  
# Licence  
MIT, also see license.txt for the C code's license  
  
# Acknowledgement  
Alexander L. Roshal from RARLab for the C/C++ Code  
  
[seikichi/unrar.js](https://github.com/seikichi/unrar.js) - which does not support RAR5 format - for the index.html code

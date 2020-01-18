libunrar.js
===========

Emscripten port of RARLab's open-source unrar library

# Changes
Compiled with unrar v5.8.5, support RAR 5 format.

# How to use
1. Visit http://wcchoi.github.io/libunrar-js/
2. Drag the RAR file to the box or select from the file chooser then click **Unrar**. 
3. For multi-part RAR, drag/select ALL the parts (part1.rar to partN.rar). 
4. If you get a password error, fill in the password then click **Unrar**. 
5. Wait for the decompression to complete and click on the file name to download the decompressed content.

# Caveat
1. Everything is loaded to the memory so make sure you have enough free memory to hold BOTH the RAR file AND the decompressed content (although only the decompressed content will keep in memory after decompression) , otherwise your browser page may crash.
2. Slow, especially for password-protected RAR
3. Memory leak in IE, no problem in Chrome

# WHY?
If you are in node.js environment then this is probably useless for you because you can call the native unrar utility/library. I made this for using on my Chromebook because ChromeOS does not yet support extracting password-protected RAR archive or multi-part RAR archives(.part1.rar - .partN.rar files) in the file manager, and using crouton/android apk for that task is an overkill.

Tested on latest version of Chrome(chromebook, PC, android), though it also somehow works in IE11(desktop). Not tested on other browsers.

# How to use the code
Include libunrar.js, also need libunrar.wasm.
call *readRARContent* function
const result = readRARContent([{name: filename, content: Uint8Array} , ...], [password]);
result will contain unpacked content

# How to Compile
1. Install emscripten   https://emscripten.org/docs/getting_started/downloads.html

2. Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh

3. Unpack src/unrarsrc-5.8.5.tar.gz(original unrar sources) and add files from src folder. Two files (dll.hpp, uowners.cpp) was changed.

4. generate glue.js & glue.cpp from gluei.idl
python /home/kol/emsdk/upstream/emscripten/tools/webidl_binder.py gluei.idl glue
5. attach _.js content to the end of glue.js. Rmove from glue.cpp functions that already defined in glue_wrapper.cpp

6.compile
emcc glue_wrapper.cpp rar.cpp strlist.cpp strfn.cpp pathfn.cpp smallfn.cpp global.cpp file.cpp filefn.cpp filcreat.cpp \\
archive.cpp arcread.cpp unicode.cpp system.cpp isnt.cpp crypt.cpp crc.cpp rawread.cpp encname.cpp resource.cpp \\
match.cpp timefn.cpp rdwrfn.cpp consio.cpp options.cpp errhnd.cpp rarvm.cpp secpassword.cpp rijndael.cpp getbits.cpp \\
sha1.cpp sha256.cpp blake2s.cpp hash.cpp extinfo.cpp extract.cpp volume.cpp list.cpp find.cpp unpack.cpp headers.cpp \\
threadpool.cpp rs16.cpp cmddata.cpp ui.cpp filestr.cpp scantree.cpp dll.cpp qopen.cpp \\
-s "EXPORTED_FUNCTIONS=['_RAROpenArchiveEx','_RARCloseArchive','_RARReadHeaderEx','_RARProcessFileW', '_RARSetPassword']" \\
-s EXTRA_EXPORTED_RUNTIME_METHODS=['getPointer','addFunction','removeFunction','FS','ensureString','UTF8ToString'] \\
-o libunrar.js  --post-js glue.js -DRARDLL -s RESERVED_FUNCTION_POINTERS=20 -s NO_EXIT_RUNTIME=1  \\
-O3 -s WASM=1 -Wno-dangling-else --closure 1

7. resulting libunrar.js wil contain:  pre.js + libunrar.js + (glue.js + _.js) + wcchoi.js
cat pre.js libunrar.js wcchoi.js > res.js
mv res.js libunrar.js -f

use  libunrar.js & libunrar.wasm

# Licence
MIT, also see license.txt for the C code's license

# Acknowledgement
Alexander L. Roshal from RARLab for the C/C++ Code

[seikichi/unrar.js](https://github.com/seikichi/unrar.js) - which does not support RAR5 format - for the index.html code

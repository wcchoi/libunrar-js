libunrar.js
===========

Emscripten port of RARLab's open-source unrar library

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
Load libunrar.js in a web-worker and call *readRARContent* function, read the source code for parameter/return value. Also read worker.js, index.html for usage example.

# Licence
MIT, also see license.txt for the C code's license

# Acknowledgement
Alexander L. Roshal from RARLab for the C/C++ Code

[seikichi/unrar.js](https://github.com/seikichi/unrar.js) - which does not support RAR5 format - for the index.html code
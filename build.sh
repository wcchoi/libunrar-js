# @param1 path to Emscripten emsdk folder. By default used ~.

v1=${1:-~}

cd "$v1" || exit

if [ ! -d "emsdk" ]
then
  git clone https://github.com/emscripten-core/emsdk.git
  cd emsdk || exit
  git pull
  ./emsdk install latest
  ./emsdk activate latest
  cd ..
fi

source ./emsdk/emsdk_env.sh

SRC=${BASH_SOURCE[0]}
if [ "$SRC" = "" ]; then
  SRC="$0"
fi

cd "$(dirname "$SRC")"  || exit
rm build -rf ;  mkdir build
rm dist -rf ;  mkdir dist

#download from https://www.rarlab.com/rar_add.htm
tar -xf src/unrarsrc-5.9.2.tar.gz -C build  --strip=1

#To generate glue.js & glue.cpp from gluei.idl
# python ~/emsdk/upstream/emscripten/tools/webidl_binder.py gluei.idl glue
# Remove from glue.cpp functions that already defined in glue_wrapper.cpp

cat src/glue.js src/_.js > build/glue_r.js
cp src/glue_wrapper.cpp build/glue_wrapper.cpp
cp src/glue.cpp build/glue.cpp


cd  build || exit
emcc glue_wrapper.cpp rar.cpp strlist.cpp strfn.cpp pathfn.cpp smallfn.cpp global.cpp file.cpp filefn.cpp filcreat.cpp \
archive.cpp arcread.cpp unicode.cpp system.cpp isnt.cpp crypt.cpp crc.cpp rawread.cpp encname.cpp resource.cpp \
match.cpp timefn.cpp rdwrfn.cpp consio.cpp options.cpp errhnd.cpp rarvm.cpp secpassword.cpp rijndael.cpp getbits.cpp \
sha1.cpp sha256.cpp blake2s.cpp hash.cpp extinfo.cpp extract.cpp volume.cpp list.cpp find.cpp unpack.cpp headers.cpp \
threadpool.cpp rs16.cpp cmddata.cpp ui.cpp filestr.cpp scantree.cpp dll.cpp qopen.cpp \
-s "EXPORTED_FUNCTIONS=['_RAROpenArchiveEx','_RARCloseArchive','_RARReadHeaderEx','_RARProcessFileW', '_RARSetPassword']" \
-s EXTRA_EXPORTED_RUNTIME_METHODS=['addFunction','removeFunction','FS','UTF8ToString','stringToUTF8','ensureString','WORKERFS','mount','unmount'] \
-o libunrar.js  --post-js glue_r.js -DRARDLL -s RESERVED_FUNCTION_POINTERS=20 -s NO_EXIT_RUNTIME=1  \
-O3 -s ALLOW_MEMORY_GROWTH=1 --closure 1 -s ASSERTIONS=0 \
-s WASM=1 -Wno-dangling-else -s FORCE_FILESYSTEM=1 -lworkerfs.js

cd .. || exit

cat src/pre.js build/libunrar.js src/wcchoi.js > dist/libunrar.js
cp build/libunrar.wasm dist/libunrar.wasm
cp -f dist/libunrar.wasm libunrar.wasm
cp -f dist/libunrar.js libunrar.js


echo 'done'


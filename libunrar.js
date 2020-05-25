var Module = {
    'print': function(text) { console.log('stdout: ' + text) },
    'printErr': function(text) {  console.log('stderr: ' + text) }
};

var c;c||(c=typeof Module !== 'undefined' ? Module : {});var ba={},g;for(g in c)c.hasOwnProperty(g)&&(ba[g]=c[g]);var ca="./this.program",da=!1,m=!1,ea=!1,fa=!1;da="object"===typeof window;m="function"===typeof importScripts;ea="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;fa=!da&&!ea&&!m;var p="",r,ha,ia,ja;
if(ea)p=m?require("path").dirname(p)+"/":__dirname+"/",r=function(a,b){ia||(ia=require("fs"));ja||(ja=require("path"));a=ja.normalize(a);return ia.readFileSync(a,b?null:"utf8")},ha=function(a){a=r(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),"undefined"!==typeof module&&(module.exports=c),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",u),c.inspect=function(){return"[Emscripten Module object]"};
else if(fa)"undefined"!=typeof read&&(r=function(a){return read(a)}),ha=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(da||m)m?p=self.location.href:document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,
p.lastIndexOf("/")+1):"",r=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},m&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ka=c.print||console.log.bind(console),v=c.printErr||console.warn.bind(console);for(g in ba)ba.hasOwnProperty(g)&&(c[g]=ba[g]);ba=null;c.thisProgram&&(ca=c.thisProgram);var la=[],x,ma;c.wasmBinary&&(ma=c.wasmBinary);var noExitRuntime;
c.noExitRuntime&&(noExitRuntime=c.noExitRuntime);"object"!==typeof WebAssembly&&v("no native wasm support detected");var y,z=new WebAssembly.Table({initial:38,maximum:58,element:"anyfunc"}),na=!1;function assert(a,b){a||u("Assertion failed: "+b)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b,d){var e=b+d;for(d=b;a[d]&&!(d>=e);)++d;if(16<d-b&&a.subarray&&oa)return oa.decode(a.subarray(b,d));for(e="";b<d;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|h);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|k:(f&7)<<18|h<<12|k<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}function F(a,b){return a?D(pa,a,b):""}
function qa(a,b,d,e){if(!(0<e))return 0;var f=d;e=d+e-1;for(var h=0;h<a.length;++h){var k=a.charCodeAt(h);if(55296<=k&&57343>=k){var l=a.charCodeAt(++h);k=65536+((k&1023)<<10)|l&1023}if(127>=k){if(d>=e)break;b[d++]=k}else{if(2047>=k){if(d+1>=e)break;b[d++]=192|k>>6}else{if(65535>=k){if(d+2>=e)break;b[d++]=224|k>>12}else{if(d+3>=e)break;b[d++]=240|k>>18;b[d++]=128|k>>12&63}b[d++]=128|k>>6&63}b[d++]=128|k&63}}b[d]=0;return d-f}function ra(a,b,d){return qa(a,pa,b,d)}
function sa(a){for(var b=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}function ta(a){var b=sa(a)+1,d=ua(b);d&&qa(a,G,d,b);return d}var va,G,pa,H;
function wa(a){va=a;c.HEAP8=G=new Int8Array(a);c.HEAP16=new Int16Array(a);c.HEAP32=H=new Int32Array(a);c.HEAPU8=pa=new Uint8Array(a);c.HEAPU16=new Uint16Array(a);c.HEAPU32=new Uint32Array(a);c.HEAPF32=new Float32Array(a);c.HEAPF64=new Float64Array(a)}var xa=c.INITIAL_MEMORY||16777216;c.wasmMemory?y=c.wasmMemory:y=new WebAssembly.Memory({initial:xa/65536,maximum:32768});y&&(va=y.buffer);xa=va.byteLength;wa(va);H[16788]=5310192;
function ya(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(c);else{var d=b.Hc;"number"===typeof d?void 0===b.qb?c.dynCall_v(d):c.dynCall_vi(d,b.qb):d(void 0===b.qb?null:b.qb)}}}var za=[],Aa=[],Ba=[],Ca=[],Da=!1;function Ea(){var a=c.preRun.shift();za.unshift(a)}var Fa=Math.abs,Ga=Math.ceil,Ha=Math.floor,Ia=Math.min,K=0,Ja=null,Ka=null;function La(){K++;c.monitorRunDependencies&&c.monitorRunDependencies(K)}
function Ma(){K--;c.monitorRunDependencies&&c.monitorRunDependencies(K);if(0==K&&(null!==Ja&&(clearInterval(Ja),Ja=null),Ka)){var a=Ka;Ka=null;a()}}c.preloadedImages={};c.preloadedAudios={};function u(a){if(c.onAbort)c.onAbort(a);ka(a);v(a);na=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Na(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Oa(){return Na("data:application/octet-stream;base64,")}
var L="libunrar.wasm";if(!Oa()){var Pa=L;L=c.locateFile?c.locateFile(Pa,p):p+Pa}function Qa(){try{if(ma)return new Uint8Array(ma);if(ha)return ha(L);throw"both async and sync fetching of the wasm failed";}catch(a){u(a)}}function Ra(){return ma||!da&&!m||"function"!==typeof fetch||Na("file://")?new Promise(function(a){a(Qa())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Qa()})}
var M,N;Aa.push({Hc:function(){Sa()}});function Ta(a){return a.replace(/\b_Z[\w\d_]+/g,function(b){return b===b?b:b+" ["+b+"]"})}function Ua(){return 0<Ua.Da}function Va(a,b){for(var d=0,e=a.length-1;0<=e;e--){var f=a[e];"."===f?a.splice(e,1):".."===f?(a.splice(e,1),d++):d&&(a.splice(e,1),d--)}if(b)for(;d;d--)a.unshift("..");return a}
function O(a){var b="/"===a.charAt(0),d="/"===a.substr(-1);(a=Va(a.split("/").filter(function(e){return!!e}),!b).join("/"))||b||(a=".");a&&d&&(a+="/");return(b?"/":"")+a}function Wa(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function P(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}
function Xa(){var a=Array.prototype.slice.call(arguments,0);return O(a.join("/"))}function Q(a,b){return O(a+"/"+b)}function Ya(a){return H[Za()>>2]=a}function R(){for(var a="",b=!1,d=arguments.length-1;-1<=d&&!b;d--){b=0<=d?arguments[d]:S.cwd();if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Va(a.split("/").filter(function(e){return!!e}),!b).join("/");return(b?"/":"")+a||"."}
function $a(a,b){function d(k){for(var l=0;l<k.length&&""===k[l];l++);for(var q=k.length-1;0<=q&&""===k[q];q--);return l>q?[]:k.slice(l,q-l+1)}a=R(a).substr(1);b=R(b).substr(1);a=d(a.split("/"));b=d(b.split("/"));for(var e=Math.min(a.length,b.length),f=e,h=0;h<e;h++)if(a[h]!==b[h]){f=h;break}e=[];for(h=f;h<a.length;h++)e.push("..");e=e.concat(b.slice(f));return e.join("/")}var ab=[];function bb(a,b){ab[a]={input:[],output:[],Sa:b};S.Gb(a,cb)}
var cb={open:function(a){var b=ab[a.node.rdev];if(!b)throw new S.qa(43);a.tty=b;a.seekable=!1},close:function(a){a.tty.Sa.flush(a.tty)},flush:function(a){a.tty.Sa.flush(a.tty)},read:function(a,b,d,e){if(!a.tty||!a.tty.Sa.dc)throw new S.qa(60);for(var f=0,h=0;h<e;h++){try{var k=a.tty.Sa.dc(a.tty)}catch(l){throw new S.qa(29);}if(void 0===k&&0===f)throw new S.qa(6);if(null===k||void 0===k)break;f++;b[d+h]=k}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,d,e){if(!a.tty||!a.tty.Sa.Cb)throw new S.qa(60);
try{for(var f=0;f<e;f++)a.tty.Sa.Cb(a.tty,b[d+f])}catch(h){throw new S.qa(29);}e&&(a.node.timestamp=Date.now());return f}},eb={dc:function(a){if(!a.input.length){var b=null;if(ea){var d=Buffer.Da?Buffer.Da(256):new Buffer(256),e=0;try{e=ia.readSync(process.stdin.fd,d,0,256,null)}catch(f){if(-1!=f.toString().indexOf("EOF"))e=0;else throw f;}0<e?b=d.slice(0,e).toString("utf-8"):b=null}else"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==
typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=db(b,!0)}return a.input.shift()},Cb:function(a,b){null===b||10===b?(ka(D(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(ka(D(a.output,0)),a.output=[])}},fb={Cb:function(a,b){null===b||10===b?(v(D(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(v(D(a.output,0)),a.output=[])}},T={La:null,za:function(){return T.createNode(null,
"/",16895,0)},createNode:function(a,b,d,e){if(S.Kc(d)||S.isFIFO(d))throw new S.qa(63);T.La||(T.La={dir:{node:{Fa:T.sa.Fa,Ba:T.sa.Ba,lookup:T.sa.lookup,Ja:T.sa.Ja,rename:T.sa.rename,unlink:T.sa.unlink,rmdir:T.sa.rmdir,readdir:T.sa.readdir,symlink:T.sa.symlink},stream:{Ga:T.ta.Ga}},file:{node:{Fa:T.sa.Fa,Ba:T.sa.Ba},stream:{Ga:T.ta.Ga,read:T.ta.read,write:T.ta.write,Wa:T.ta.Wa,$a:T.ta.$a,cb:T.ta.cb}},link:{node:{Fa:T.sa.Fa,Ba:T.sa.Ba,readlink:T.sa.readlink},stream:{}},Rb:{node:{Fa:T.sa.Fa,Ba:T.sa.Ba},
stream:S.wc}});d=S.createNode(a,b,d,e);S.Aa(d.mode)?(d.sa=T.La.dir.node,d.ta=T.La.dir.stream,d.ra={}):S.isFile(d.mode)?(d.sa=T.La.file.node,d.ta=T.La.file.stream,d.ya=0,d.ra=null):S.Ra(d.mode)?(d.sa=T.La.link.node,d.ta=T.La.link.stream):S.ib(d.mode)&&(d.sa=T.La.Rb.node,d.ta=T.La.Rb.stream);d.timestamp=Date.now();a&&(a.ra[b]=d);return d},ed:function(a){if(a.ra&&a.ra.subarray){for(var b=[],d=0;d<a.ya;++d)b.push(a.ra[d]);return b}return a.ra},gd:function(a){return a.ra?a.ra.subarray?a.ra.subarray(0,
a.ya):new Uint8Array(a.ra):new Uint8Array(0)},$b:function(a,b){var d=a.ra?a.ra.length:0;d>=b||(b=Math.max(b,d*(1048576>d?2:1.125)>>>0),0!=d&&(b=Math.max(b,256)),d=a.ra,a.ra=new Uint8Array(b),0<a.ya&&a.ra.set(d.subarray(0,a.ya),0))},Uc:function(a,b){if(a.ya!=b)if(0==b)a.ra=null,a.ya=0;else{if(!a.ra||a.ra.subarray){var d=a.ra;a.ra=new Uint8Array(b);d&&a.ra.set(d.subarray(0,Math.min(b,a.ya)))}else if(a.ra||(a.ra=[]),a.ra.length>b)a.ra.length=b;else for(;a.ra.length<b;)a.ra.push(0);a.ya=b}},sa:{Fa:function(a){var b=
{};b.dev=S.ib(a.mode)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;S.Aa(a.mode)?b.size=4096:S.isFile(a.mode)?b.size=a.ya:S.Ra(a.mode)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.Pb=4096;b.blocks=Math.ceil(b.size/b.Pb);return b},Ba:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&T.Uc(a,b.size)},lookup:function(){throw S.tb[44];},Ja:function(a,
b,d,e){return T.createNode(a,b,d,e)},rename:function(a,b,d){if(S.Aa(a.mode)){try{var e=S.Ma(b,d)}catch(h){}if(e)for(var f in e.ra)throw new S.qa(55);}delete a.parent.ra[a.name];a.name=d;b.ra[d]=a;a.parent=b},unlink:function(a,b){delete a.ra[b]},rmdir:function(a,b){var d=S.Ma(a,b),e;for(e in d.ra)throw new S.qa(55);delete a.ra[b]},readdir:function(a){var b=[".",".."],d;for(d in a.ra)a.ra.hasOwnProperty(d)&&b.push(d);return b},symlink:function(a,b,d){a=T.createNode(a,b,41471,0);a.link=d;return a},readlink:function(a){if(!S.Ra(a.mode))throw new S.qa(28);
return a.link}},ta:{read:function(a,b,d,e,f){var h=a.node.ra;if(f>=a.node.ya)return 0;a=Math.min(a.node.ya-f,e);if(8<a&&h.subarray)b.set(h.subarray(f,f+a),d);else for(e=0;e<a;e++)b[d+e]=h[f+e];return a},write:function(a,b,d,e,f,h){b.buffer===G.buffer&&(h=!1);if(!e)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.ra||a.ra.subarray)){if(h)return a.ra=b.subarray(d,d+e),a.ya=e;if(0===a.ya&&0===f)return a.ra=b.slice(d,d+e),a.ya=e;if(f+e<=a.ya)return a.ra.set(b.subarray(d,d+e),f),e}T.$b(a,f+
e);if(a.ra.subarray&&b.subarray)a.ra.set(b.subarray(d,d+e),f);else for(h=0;h<e;h++)a.ra[f+h]=b[d+h];a.ya=Math.max(a.ya,f+e);return e},Ga:function(a,b,d){1===d?b+=a.position:2===d&&S.isFile(a.node.mode)&&(b+=a.node.ya);if(0>b)throw new S.qa(28);return b},Wa:function(a,b,d){T.$b(a.node,b+d);a.node.ya=Math.max(a.node.ya,b+d)},$a:function(a,b,d,e,f,h,k){if(!S.isFile(a.node.mode))throw new S.qa(43);a=a.node.ra;if(k&2||a.buffer!==b.buffer){if(0<f||f+e<a.length)a.subarray?a=a.subarray(f,f+e):a=Array.prototype.slice.call(a,
f,f+e);f=!0;k=b.buffer==G.buffer;e=ua(e);if(!e)throw new S.qa(48);(k?G:b).set(a,e)}else f=!1,e=a.byteOffset;return{ua:e,bd:f}},cb:function(a,b,d,e,f){if(!S.isFile(a.node.mode))throw new S.qa(43);if(f&2)return 0;T.ta.write(a,b,0,e,d,!1);return 0}}},U={nb:16895,Ua:33279,Eb:null,za:function(a){function b(h){h=h.split("/");for(var k=e,l=0;l<h.length-1;l++){var q=h.slice(0,l+1).join("/");f[q]||(f[q]=U.createNode(k,h[l],U.nb,0));k=f[q]}return k}function d(h){h=h.split("/");return h[h.length-1]}assert(m);
U.Eb||(U.Eb=new FileReaderSync);var e=U.createNode(null,"/",U.nb,0),f={};Array.prototype.forEach.call(a.Bb.files||[],function(h){U.createNode(b(h.name),d(h.name),U.Ua,0,h,h.lastModifiedDate)});(a.Bb.blobs||[]).forEach(function(h){U.createNode(b(h.name),d(h.name),U.Ua,0,h.data)});(a.Bb.packages||[]).forEach(function(h){h.metadata.files.forEach(function(k){var l=k.filename.substr(1);U.createNode(b(l),d(l),U.Ua,0,h.blob.slice(k.start,k.end))})});return e},createNode:function(a,b,d,e,f,h){e=S.createNode(a,
b,d);e.mode=d;e.sa=U.sa;e.ta=U.ta;e.timestamp=(h||new Date).getTime();assert(U.Ua!==U.nb);d===U.Ua?(e.size=f.size,e.ra=f):(e.size=4096,e.ra={});a&&(a.ra[b]=e);return e},sa:{Fa:function(a){return{dev:1,ino:a.id,mode:a.mode,nlink:1,uid:0,gid:0,rdev:void 0,size:a.size,atime:new Date(a.timestamp),mtime:new Date(a.timestamp),ctime:new Date(a.timestamp),Pb:4096,blocks:Math.ceil(a.size/4096)}},Ba:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp)},lookup:function(){throw new S.qa(44);
},Ja:function(){throw new S.qa(63);},rename:function(){throw new S.qa(63);},unlink:function(){throw new S.qa(63);},rmdir:function(){throw new S.qa(63);},readdir:function(a){var b=[".",".."],d;for(d in a.ra)a.ra.hasOwnProperty(d)&&b.push(d);return b},symlink:function(){throw new S.qa(63);},readlink:function(){throw new S.qa(63);}},ta:{read:function(a,b,d,e,f){if(f>=a.node.size)return 0;a=a.node.ra.slice(f,f+e);e=U.Eb.readAsArrayBuffer(a);b.set(new Uint8Array(e),d);return a.size},write:function(){throw new S.qa(29);
},Ga:function(a,b,d){1===d?b+=a.position:2===d&&S.isFile(a.node.mode)&&(b+=a.node.size);if(0>b)throw new S.qa(28);return b}}},S={root:null,bb:[],Yb:{},streams:[],Pc:1,Ka:null,Xb:"/",wb:!1,ic:!0,Ca:{},nc:{lc:{rc:1,sc:2}},qa:null,tb:{},Ec:null,mb:0,Jc:function(a){if(!(a instanceof S.qa)){a:{var b=Error();if(!b.stack){try{throw Error();}catch(d){b=d}if(!b.stack){b="(no stack trace available)";break a}}b=b.stack.toString()}c.extraStackTrace&&(b+="\n"+c.extraStackTrace());b=Ta(b);throw a+" : "+b;}return Ya(a.va)},
wa:function(a,b){a=R(S.cwd(),a);b=b||{};if(!a)return{path:"",node:null};var d={sb:!0,Fb:0},e;for(e in d)void 0===b[e]&&(b[e]=d[e]);if(8<b.Fb)throw new S.qa(32);a=Va(a.split("/").filter(function(k){return!!k}),!1);var f=S.root;d="/";for(e=0;e<a.length;e++){var h=e===a.length-1;if(h&&b.parent)break;f=S.Ma(f,a[e]);d=Q(d,a[e]);S.Oa(f)&&(!h||h&&b.sb)&&(f=f.ab.root);if(!h||b.Ea)for(h=0;S.Ra(f.mode);)if(f=S.readlink(d),d=R(Wa(d),f),f=S.wa(d,{Fb:b.Fb}).node,40<h++)throw new S.qa(32);}return{path:d,node:f}},
Ia:function(a){for(var b;;){if(S.jb(a))return a=a.za.kc,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}},vb:function(a,b){for(var d=0,e=0;e<b.length;e++)d=(d<<5)-d+b.charCodeAt(e)|0;return(a+d>>>0)%S.Ka.length},fc:function(a){var b=S.vb(a.parent.id,a.name);a.Qa=S.Ka[b];S.Ka[b]=a},hc:function(a){var b=S.vb(a.parent.id,a.name);if(S.Ka[b]===a)S.Ka[b]=a.Qa;else for(b=S.Ka[b];b;){if(b.Qa===a){b.Qa=a.Qa;break}b=b.Qa}},Ma:function(a,b){var d=S.Mc(a);if(d)throw new S.qa(d,a);for(d=
S.Ka[S.vb(a.id,b)];d;d=d.Qa){var e=d.name;if(d.parent.id===a.id&&e===b)return d}return S.lookup(a,b)},createNode:function(a,b,d,e){a=new S.pc(a,b,d,e);S.fc(a);return a},rb:function(a){S.hc(a)},jb:function(a){return a===a.parent},Oa:function(a){return!!a.ab},isFile:function(a){return 32768===(a&61440)},Aa:function(a){return 16384===(a&61440)},Ra:function(a){return 40960===(a&61440)},ib:function(a){return 8192===(a&61440)},Kc:function(a){return 24576===(a&61440)},isFIFO:function(a){return 4096===(a&
61440)},isSocket:function(a){return 49152===(a&49152)},Fc:{r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218},Oc:function(a){var b=S.Fc[a];if("undefined"===typeof b)throw Error("Unknown file open mode: "+a);return b},ac:function(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b},Na:function(a,b){if(S.ic)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return 2}else return 2;
return 0},Mc:function(a){var b=S.Na(a,"x");return b?b:a.sa.lookup?0:2},Ab:function(a,b){try{return S.Ma(a,b),20}catch(d){}return S.Na(a,"wx")},kb:function(a,b,d){try{var e=S.Ma(a,b)}catch(f){return f.va}if(a=S.Na(a,"wx"))return a;if(d){if(!S.Aa(e.mode))return 54;if(S.jb(e)||S.Ia(e)===S.cwd())return 10}else if(S.Aa(e.mode))return 31;return 0},Nc:function(a,b){return a?S.Ra(a.mode)?32:S.Aa(a.mode)&&("r"!==S.ac(b)||b&512)?31:S.Na(a,S.ac(b)):44},qc:4096,Qc:function(a,b){b=b||S.qc;for(a=a||0;a<=b;a++)if(!S.streams[a])return a;
throw new S.qa(33);},Xa:function(a){return S.streams[a]},Dc:function(a,b,d){S.ob||(S.ob=function(){},S.ob.prototype={object:{get:function(){return this.node},set:function(h){this.node=h}}});var e=new S.ob,f;for(f in a)e[f]=a[f];a=e;b=S.Qc(b,d);a.fd=b;return S.streams[b]=a},xc:function(a){S.streams[a]=null},wc:{open:function(a){a.ta=S.Ic(a.node.rdev).ta;a.ta.open&&a.ta.open(a)},Ga:function(){throw new S.qa(70);}},zb:function(a){return a>>8},kd:function(a){return a&255},Pa:function(a,b){return a<<8|
b},Gb:function(a,b){S.Yb[a]={ta:b}},Ic:function(a){return S.Yb[a]},cc:function(a){var b=[];for(a=[a];a.length;){var d=a.pop();b.push(d);a.push.apply(a,d.bb)}return b},mc:function(a,b){function d(k){S.mb--;return b(k)}function e(k){if(k){if(!e.Da)return e.Da=!0,d(k)}else++h>=f.length&&d(null)}"function"===typeof a&&(b=a,a=!1);S.mb++;1<S.mb&&v("warning: "+S.mb+" FS.syncfs operations in flight at once, probably just doing extra work");var f=S.cc(S.root.za),h=0;f.forEach(function(k){if(!k.type.mc)return e(null);
k.type.mc(k,a,e)})},za:function(a,b,d){var e="/"===d,f=!d;if(e&&S.root)throw new S.qa(10);if(!e&&!f){var h=S.wa(d,{sb:!1});d=h.path;h=h.node;if(S.Oa(h))throw new S.qa(10);if(!S.Aa(h.mode))throw new S.qa(54);}b={type:a,Bb:b,kc:d,bb:[]};a=a.za(b);a.za=b;b.root=a;e?S.root=a:h&&(h.ab=b,h.za&&h.za.bb.push(b));return a},Yc:function(a){a=S.wa(a,{sb:!1});if(!S.Oa(a.node))throw new S.qa(28);a=a.node;var b=a.ab,d=S.cc(b);Object.keys(S.Ka).forEach(function(e){for(e=S.Ka[e];e;){var f=e.Qa;-1!==d.indexOf(e.za)&&
S.rb(e);e=f}});a.ab=null;a.za.bb.splice(a.za.bb.indexOf(b),1)},lookup:function(a,b){return a.sa.lookup(a,b)},Ja:function(a,b,d){var e=S.wa(a,{parent:!0}).node;a=P(a);if(!a||"."===a||".."===a)throw new S.qa(28);var f=S.Ab(e,a);if(f)throw new S.qa(f);if(!e.sa.Ja)throw new S.qa(63);return e.sa.Ja(e,a,b,d)},create:function(a,b){return S.Ja(a,(void 0!==b?b:438)&4095|32768,0)},mkdir:function(a,b){return S.Ja(a,(void 0!==b?b:511)&1023|16384,0)},ld:function(a,b){a=a.split("/");for(var d="",e=0;e<a.length;++e)if(a[e]){d+=
"/"+a[e];try{S.mkdir(d,b)}catch(f){if(20!=f.va)throw f;}}},lb:function(a,b,d){"undefined"===typeof d&&(d=b,b=438);return S.Ja(a,b|8192,d)},symlink:function(a,b){if(!R(a))throw new S.qa(44);var d=S.wa(b,{parent:!0}).node;if(!d)throw new S.qa(44);b=P(b);var e=S.Ab(d,b);if(e)throw new S.qa(e);if(!d.sa.symlink)throw new S.qa(63);return d.sa.symlink(d,b,a)},rename:function(a,b){var d=Wa(a),e=Wa(b),f=P(a),h=P(b);try{var k=S.wa(a,{parent:!0});var l=k.node;k=S.wa(b,{parent:!0});var q=k.node}catch(t){throw new S.qa(10);
}if(!l||!q)throw new S.qa(44);if(l.za!==q.za)throw new S.qa(75);k=S.Ma(l,f);e=$a(a,e);if("."!==e.charAt(0))throw new S.qa(28);e=$a(b,d);if("."!==e.charAt(0))throw new S.qa(55);try{var n=S.Ma(q,h)}catch(t){}if(k!==n){d=S.Aa(k.mode);if(f=S.kb(l,f,d))throw new S.qa(f);if(f=n?S.kb(q,h,d):S.Ab(q,h))throw new S.qa(f);if(!l.sa.rename)throw new S.qa(63);if(S.Oa(k)||n&&S.Oa(n))throw new S.qa(10);if(q!==l&&(f=S.Na(l,"w")))throw new S.qa(f);try{S.Ca.willMovePath&&S.Ca.willMovePath(a,b)}catch(t){v("FS.trackingDelegate['willMovePath']('"+
a+"', '"+b+"') threw an exception: "+t.message)}S.hc(k);try{l.sa.rename(k,q,h)}catch(t){throw t;}finally{S.fc(k)}try{if(S.Ca.onMovePath)S.Ca.onMovePath(a,b)}catch(t){v("FS.trackingDelegate['onMovePath']('"+a+"', '"+b+"') threw an exception: "+t.message)}}},rmdir:function(a){var b=S.wa(a,{parent:!0}).node,d=P(a),e=S.Ma(b,d),f=S.kb(b,d,!0);if(f)throw new S.qa(f);if(!b.sa.rmdir)throw new S.qa(63);if(S.Oa(e))throw new S.qa(10);try{S.Ca.willDeletePath&&S.Ca.willDeletePath(a)}catch(h){v("FS.trackingDelegate['willDeletePath']('"+
a+"') threw an exception: "+h.message)}b.sa.rmdir(b,d);S.rb(e);try{if(S.Ca.onDeletePath)S.Ca.onDeletePath(a)}catch(h){v("FS.trackingDelegate['onDeletePath']('"+a+"') threw an exception: "+h.message)}},readdir:function(a){a=S.wa(a,{Ea:!0}).node;if(!a.sa.readdir)throw new S.qa(54);return a.sa.readdir(a)},unlink:function(a){var b=S.wa(a,{parent:!0}).node,d=P(a),e=S.Ma(b,d),f=S.kb(b,d,!1);if(f)throw new S.qa(f);if(!b.sa.unlink)throw new S.qa(63);if(S.Oa(e))throw new S.qa(10);try{S.Ca.willDeletePath&&
S.Ca.willDeletePath(a)}catch(h){v("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+h.message)}b.sa.unlink(b,d);S.rb(e);try{if(S.Ca.onDeletePath)S.Ca.onDeletePath(a)}catch(h){v("FS.trackingDelegate['onDeletePath']('"+a+"') threw an exception: "+h.message)}},readlink:function(a){a=S.wa(a).node;if(!a)throw new S.qa(44);if(!a.sa.readlink)throw new S.qa(28);return R(S.Ia(a.parent),a.sa.readlink(a))},stat:function(a,b){a=S.wa(a,{Ea:!b}).node;if(!a)throw new S.qa(44);if(!a.sa.Fa)throw new S.qa(63);
return a.sa.Fa(a)},lstat:function(a){return S.stat(a,!0)},chmod:function(a,b,d){var e;"string"===typeof a?e=S.wa(a,{Ea:!d}).node:e=a;if(!e.sa.Ba)throw new S.qa(63);e.sa.Ba(e,{mode:b&4095|e.mode&-4096,timestamp:Date.now()})},lchmod:function(a,b){S.chmod(a,b,!0)},fchmod:function(a,b){a=S.Xa(a);if(!a)throw new S.qa(8);S.chmod(a.node,b)},chown:function(a,b,d,e){var f;"string"===typeof a?f=S.wa(a,{Ea:!e}).node:f=a;if(!f.sa.Ba)throw new S.qa(63);f.sa.Ba(f,{timestamp:Date.now()})},lchown:function(a,b,d){S.chown(a,
b,d,!0)},fchown:function(a,b,d){a=S.Xa(a);if(!a)throw new S.qa(8);S.chown(a.node,b,d)},truncate:function(a,b){if(0>b)throw new S.qa(28);var d;"string"===typeof a?d=S.wa(a,{Ea:!0}).node:d=a;if(!d.sa.Ba)throw new S.qa(63);if(S.Aa(d.mode))throw new S.qa(31);if(!S.isFile(d.mode))throw new S.qa(28);if(a=S.Na(d,"w"))throw new S.qa(a);d.sa.Ba(d,{size:b,timestamp:Date.now()})},Gc:function(a,b){a=S.Xa(a);if(!a)throw new S.qa(8);if(0===(a.flags&2097155))throw new S.qa(28);S.truncate(a.node,b)},Zc:function(a,
b,d){a=S.wa(a,{Ea:!0}).node;a.sa.Ba(a,{timestamp:Math.max(b,d)})},open:function(a,b,d,e,f){if(""===a)throw new S.qa(44);b="string"===typeof b?S.Oc(b):b;d=b&64?("undefined"===typeof d?438:d)&4095|32768:0;if("object"===typeof a)var h=a;else{a=O(a);try{h=S.wa(a,{Ea:!(b&131072)}).node}catch(l){}}var k=!1;if(b&64)if(h){if(b&128)throw new S.qa(20);}else h=S.Ja(a,d,0),k=!0;if(!h)throw new S.qa(44);S.ib(h.mode)&&(b&=-513);if(b&65536&&!S.Aa(h.mode))throw new S.qa(54);if(!k&&(d=S.Nc(h,b)))throw new S.qa(d);
b&512&&S.truncate(h,0);b&=-131713;e=S.Dc({node:h,path:S.Ia(h),flags:b,seekable:!0,position:0,ta:h.ta,Xc:[],error:!1},e,f);e.ta.open&&e.ta.open(e);!c.logReadFiles||b&1||(S.Db||(S.Db={}),a in S.Db||(S.Db[a]=1,v("FS.trackingDelegate error on read file: "+a)));try{S.Ca.onOpenFile&&(f=0,1!==(b&2097155)&&(f|=S.nc.lc.rc),0!==(b&2097155)&&(f|=S.nc.lc.sc),S.Ca.onOpenFile(a,f))}catch(l){v("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+l.message)}return e},close:function(a){if(S.Za(a))throw new S.qa(8);
a.ub&&(a.ub=null);try{a.ta.close&&a.ta.close(a)}catch(b){throw b;}finally{S.xc(a.fd)}a.fd=null},Za:function(a){return null===a.fd},Ga:function(a,b,d){if(S.Za(a))throw new S.qa(8);if(!a.seekable||!a.ta.Ga)throw new S.qa(70);if(0!=d&&1!=d&&2!=d)throw new S.qa(28);a.position=a.ta.Ga(a,b,d);a.Xc=[];return a.position},read:function(a,b,d,e,f){if(0>e||0>f)throw new S.qa(28);if(S.Za(a))throw new S.qa(8);if(1===(a.flags&2097155))throw new S.qa(8);if(S.Aa(a.node.mode))throw new S.qa(31);if(!a.ta.read)throw new S.qa(28);
var h="undefined"!==typeof f;if(!h)f=a.position;else if(!a.seekable)throw new S.qa(70);b=a.ta.read(a,b,d,e,f);h||(a.position+=b);return b},write:function(a,b,d,e,f,h){if(0>e||0>f)throw new S.qa(28);if(S.Za(a))throw new S.qa(8);if(0===(a.flags&2097155))throw new S.qa(8);if(S.Aa(a.node.mode))throw new S.qa(31);if(!a.ta.write)throw new S.qa(28);a.seekable&&a.flags&1024&&S.Ga(a,0,2);var k="undefined"!==typeof f;if(!k)f=a.position;else if(!a.seekable)throw new S.qa(70);b=a.ta.write(a,b,d,e,f,h);k||(a.position+=
b);try{if(a.path&&S.Ca.onWriteToFile)S.Ca.onWriteToFile(a.path)}catch(l){v("FS.trackingDelegate['onWriteToFile']('"+a.path+"') threw an exception: "+l.message)}return b},Wa:function(a,b,d){if(S.Za(a))throw new S.qa(8);if(0>b||0>=d)throw new S.qa(28);if(0===(a.flags&2097155))throw new S.qa(8);if(!S.isFile(a.node.mode)&&!S.Aa(a.node.mode))throw new S.qa(43);if(!a.ta.Wa)throw new S.qa(138);a.ta.Wa(a,b,d)},$a:function(a,b,d,e,f,h,k){if(0!==(h&2)&&0===(k&2)&&2!==(a.flags&2097155))throw new S.qa(2);if(1===
(a.flags&2097155))throw new S.qa(2);if(!a.ta.$a)throw new S.qa(43);return a.ta.$a(a,b,d,e,f,h,k)},cb:function(a,b,d,e,f){return a&&a.ta.cb?a.ta.cb(a,b,d,e,f):0},md:function(){return 0},jc:function(a,b,d){if(!a.ta.jc)throw new S.qa(59);return a.ta.jc(a,b,d)},readFile:function(a,b){b=b||{};b.flags=b.flags||"r";b.encoding=b.encoding||"binary";if("utf8"!==b.encoding&&"binary"!==b.encoding)throw Error('Invalid encoding type "'+b.encoding+'"');var d,e=S.open(a,b.flags);a=S.stat(a).size;var f=new Uint8Array(a);
S.read(e,f,0,a,0);"utf8"===b.encoding?d=D(f,0):"binary"===b.encoding&&(d=f);S.close(e);return d},writeFile:function(a,b,d){d=d||{};d.flags=d.flags||"w";a=S.open(a,d.flags,d.mode);if("string"===typeof b){var e=new Uint8Array(sa(b)+1);b=qa(b,e,0,e.length);S.write(a,e,0,b,void 0,d.vc)}else if(ArrayBuffer.isView(b))S.write(a,b,0,b.byteLength,void 0,d.vc);else throw Error("Unsupported data type");S.close(a)},cwd:function(){return S.Xb},chdir:function(a){a=S.wa(a,{Ea:!0});if(null===a.node)throw new S.qa(44);
if(!S.Aa(a.node.mode))throw new S.qa(54);var b=S.Na(a.node,"x");if(b)throw new S.qa(b);S.Xb=a.path},zc:function(){S.mkdir("/tmp");S.mkdir("/home");S.mkdir("/home/web_user")},yc:function(){S.mkdir("/dev");S.Gb(S.Pa(1,3),{read:function(){return 0},write:function(e,f,h,k){return k}});S.lb("/dev/null",S.Pa(1,3));bb(S.Pa(5,0),eb);bb(S.Pa(6,0),fb);S.lb("/dev/tty",S.Pa(5,0));S.lb("/dev/tty1",S.Pa(6,0));if("object"===typeof crypto&&"function"===typeof crypto.getRandomValues){var a=new Uint8Array(1);var b=
function(){crypto.getRandomValues(a);return a[0]}}else if(ea)try{var d=require("crypto");b=function(){return d.randomBytes(1)[0]}}catch(e){}b||(b=function(){u("random_device")});S.Ha("/dev","random",b);S.Ha("/dev","urandom",b);S.mkdir("/dev/shm");S.mkdir("/dev/shm/tmp")},Bc:function(){S.mkdir("/proc");S.mkdir("/proc/self");S.mkdir("/proc/self/fd");S.za({za:function(){var a=S.createNode("/proc/self","fd",16895,73);a.sa={lookup:function(b,d){var e=S.Xa(+d);if(!e)throw new S.qa(8);b={parent:null,za:{kc:"fake"},
sa:{readlink:function(){return e.path}}};return b.parent=b}};return a}},{},"/proc/self/fd")},Cc:function(){c.stdin?S.Ha("/dev","stdin",c.stdin):S.symlink("/dev/tty","/dev/stdin");c.stdout?S.Ha("/dev","stdout",null,c.stdout):S.symlink("/dev/tty","/dev/stdout");c.stderr?S.Ha("/dev","stderr",null,c.stderr):S.symlink("/dev/tty1","/dev/stderr");S.open("/dev/stdin","r");S.open("/dev/stdout","w");S.open("/dev/stderr","w")},Zb:function(){S.qa||(S.qa=function(a,b){this.node=b;this.Vc=function(d){this.va=d};
this.Vc(a);this.message="FS error"},S.qa.prototype=Error(),S.qa.prototype.constructor=S.qa,[44].forEach(function(a){S.tb[a]=new S.qa(a);S.tb[a].stack="<generic error, no stack>"}))},Wc:function(){S.Zb();S.Ka=Array(4096);S.za(T,{},"/");S.zc();S.yc();S.Bc();S.Ec={MEMFS:T,WORKERFS:U}},Ya:function(a,b,d){S.Ya.wb=!0;S.Zb();c.stdin=a||c.stdin;c.stdout=b||c.stdout;c.stderr=d||c.stderr;S.Cc()},quit:function(){S.Ya.wb=!1;var a=c._fflush;a&&a(0);for(a=0;a<S.streams.length;a++){var b=S.streams[a];b&&S.close(b)}},
hb:function(a,b){var d=0;a&&(d|=365);b&&(d|=146);return d},hd:function(a,b){a=Xa.apply(null,a);b&&"/"==a[0]&&(a=a.substr(1));return a},ad:function(a,b){return R(b,a)},od:function(a){return O(a)},dd:function(a,b){a=S.pb(a,b);if(a.exists)return a.object;Ya(a.error);return null},pb:function(a,b){try{var d=S.wa(a,{Ea:!b});a=d.path}catch(f){}var e={jb:!1,exists:!1,error:0,name:null,path:null,object:null,Rc:!1,Tc:null,Sc:null};try{d=S.wa(a,{parent:!0}),e.Rc=!0,e.Tc=d.path,e.Sc=d.node,e.name=P(a),d=S.wa(a,
{Ea:!b}),e.exists=!0,e.path=d.path,e.object=d.node,e.name=d.node.name,e.jb="/"===d.path}catch(f){e.error=f.va}return e},Sb:function(a,b,d,e){a=Q("string"===typeof a?a:S.Ia(a),b);return S.mkdir(a,S.hb(d,e))},Vb:function(a,b){a="string"===typeof a?a:S.Ia(a);for(b=b.split("/").reverse();b.length;){var d=b.pop();if(d){var e=Q(a,d);try{S.mkdir(e)}catch(f){}a=e}}return e},Ac:function(a,b,d,e,f){a=Q("string"===typeof a?a:S.Ia(a),b);return S.create(a,S.hb(e,f))},gb:function(a,b,d,e,f,h){a=b?Q("string"===
typeof a?a:S.Ia(a),b):a;e=S.hb(e,f);f=S.create(a,e);if(d){if("string"===typeof d){a=Array(d.length);b=0;for(var k=d.length;b<k;++b)a[b]=d.charCodeAt(b);d=a}S.chmod(f,e|146);a=S.open(f,"w");S.write(a,d,0,d.length,0,h);S.close(a);S.chmod(f,e)}return f},Ha:function(a,b,d,e){a=Q("string"===typeof a?a:S.Ia(a),b);b=S.hb(!!d,!!e);S.Ha.zb||(S.Ha.zb=64);var f=S.Pa(S.Ha.zb++,0);S.Gb(f,{open:function(h){h.seekable=!1},close:function(){e&&e.buffer&&e.buffer.length&&e(10)},read:function(h,k,l,q){for(var n=0,t=
0;t<q;t++){try{var w=d()}catch(C){throw new S.qa(29);}if(void 0===w&&0===n)throw new S.qa(6);if(null===w||void 0===w)break;n++;k[l+t]=w}n&&(h.node.timestamp=Date.now());return n},write:function(h,k,l,q){for(var n=0;n<q;n++)try{e(k[l+n])}catch(t){throw new S.qa(29);}q&&(h.node.timestamp=Date.now());return n}});return S.lb(a,b,f)},Ub:function(a,b,d){a=Q("string"===typeof a?a:S.Ia(a),b);return S.symlink(d,a)},bc:function(a){if(a.xb||a.Lc||a.link||a.ra)return!0;var b=!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
if(r)try{a.ra=db(r(a.url),!0),a.ya=a.ra.length}catch(d){b=!1}else throw Error("Cannot load without read() or XMLHttpRequest.");b||Ya(29);return b},Tb:function(a,b,d,e,f){function h(){this.yb=!1;this.Da=[]}h.prototype.get=function(n){if(!(n>this.length-1||0>n)){var t=n%this.chunkSize;return this.ec(n/this.chunkSize|0)[t]}};h.prototype.eb=function(n){this.ec=n};h.prototype.Qb=function(){var n=new XMLHttpRequest;n.open("HEAD",d,!1);n.send(null);if(!(200<=n.status&&300>n.status||304===n.status))throw Error("Couldn't load "+
d+". Status: "+n.status);var t=Number(n.getResponseHeader("Content-length")),w,C=(w=n.getResponseHeader("Accept-Ranges"))&&"bytes"===w;n=(w=n.getResponseHeader("Content-Encoding"))&&"gzip"===w;var B=1048576;C||(B=t);var A=this;A.eb(function(I){var J=I*B,aa=(I+1)*B-1;aa=Math.min(aa,t-1);if("undefined"===typeof A.Da[I]){var bc=A.Da;if(J>aa)throw Error("invalid range ("+J+", "+aa+") or no bytes requested!");if(aa>t-1)throw Error("only "+t+" bytes available! programmer error!");var E=new XMLHttpRequest;
E.open("GET",d,!1);t!==B&&E.setRequestHeader("Range","bytes="+J+"-"+aa);"undefined"!=typeof Uint8Array&&(E.responseType="arraybuffer");E.overrideMimeType&&E.overrideMimeType("text/plain; charset=x-user-defined");E.send(null);if(!(200<=E.status&&300>E.status||304===E.status))throw Error("Couldn't load "+d+". Status: "+E.status);J=void 0!==E.response?new Uint8Array(E.response||[]):db(E.responseText||"",!0);bc[I]=J}if("undefined"===typeof A.Da[I])throw Error("doXHR failed!");return A.Da[I]});if(n||!t)B=
t=1,B=t=this.ec(0).length,ka("LazyFiles on gzip forces download of the whole file when length is accessed");this.uc=t;this.tc=B;this.yb=!0};if("undefined"!==typeof XMLHttpRequest){if(!m)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var k=new h;Object.defineProperties(k,{length:{get:function(){this.yb||this.Qb();return this.uc}},chunkSize:{get:function(){this.yb||this.Qb();return this.tc}}});k={xb:!1,ra:k}}else k={xb:!1,url:d};
var l=S.Ac(a,b,k,e,f);k.ra?l.ra=k.ra:k.url&&(l.ra=null,l.url=k.url);Object.defineProperties(l,{ya:{get:function(){return this.ra.length}}});var q={};Object.keys(l.ta).forEach(function(n){var t=l.ta[n];q[n]=function(){if(!S.bc(l))throw new S.qa(29);return t.apply(null,arguments)}});q.read=function(n,t,w,C,B){if(!S.bc(l))throw new S.qa(29);n=n.node.ra;if(B>=n.length)return 0;C=Math.min(n.length-B,C);if(n.slice)for(var A=0;A<C;A++)t[w+A]=n[B+A];else for(A=0;A<C;A++)t[w+A]=n.get(B+A);return C};l.ta=q;
return l},Wb:function(a,b,d,e,f,h,k,l,q,n){function t(B){function A(J){n&&n();l||S.gb(a,b,J,e,f,q);h&&h();Ma(C)}var I=!1;c.preloadPlugins.forEach(function(J){!I&&J.canHandle(w)&&(J.handle(B,w,A,function(){k&&k();Ma(C)}),I=!0)});I||A(B)}gb.Ya();var w=b?R(Q(a,b)):a,C="cp "+w;La(C);"string"==typeof d?gb.cd(d,function(B){t(B)},k):t(d)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},Nb:function(){return"EM_FS_"+window.location.pathname},Ob:20,
Ta:"FILE_DATA",nd:function(a,b,d){b=b||function(){};d=d||function(){};var e=S.indexedDB();try{var f=e.open(S.Nb(),S.Ob)}catch(h){return d(h)}f.onupgradeneeded=function(){ka("creating db");f.result.createObjectStore(S.Ta)};f.onsuccess=function(){var h=f.result.transaction([S.Ta],"readwrite"),k=h.objectStore(S.Ta),l=0,q=0,n=a.length;a.forEach(function(t){t=k.put(S.pb(t).object.ra,t);t.onsuccess=function(){l++;l+q==n&&(0==q?b():d())};t.onerror=function(){q++;l+q==n&&(0==q?b():d())}});h.onerror=d};f.onerror=
d},jd:function(a,b,d){b=b||function(){};d=d||function(){};var e=S.indexedDB();try{var f=e.open(S.Nb(),S.Ob)}catch(h){return d(h)}f.onupgradeneeded=d;f.onsuccess=function(){var h=f.result;try{var k=h.transaction([S.Ta],"readonly")}catch(w){d(w);return}var l=k.objectStore(S.Ta),q=0,n=0,t=a.length;a.forEach(function(w){var C=l.get(w);C.onsuccess=function(){S.pb(w).exists&&S.unlink(w);S.gb(Wa(w),P(w),C.result,!0,!0,!0);q++;q+n==t&&(0==n?b():d())};C.onerror=function(){n++;q+n==t&&(0==n?b():d())}});k.onerror=
d};f.onerror=d}},hb=511;
function ib(a,b,d){try{var e=a(b)}catch(f){if(f&&f.node&&O(b)!==O(S.Ia(f.node)))return-54;throw f;}H[d>>2]=e.dev;H[d+4>>2]=0;H[d+8>>2]=e.ino;H[d+12>>2]=e.mode;H[d+16>>2]=e.nlink;H[d+20>>2]=e.uid;H[d+24>>2]=e.gid;H[d+28>>2]=e.rdev;H[d+32>>2]=0;N=[e.size>>>0,(M=e.size,1<=+Fa(M)?0<M?(Ia(+Ha(M/4294967296),4294967295)|0)>>>0:~~+Ga((M-+(~~M>>>0))/4294967296)>>>0:0)];H[d+40>>2]=N[0];H[d+44>>2]=N[1];H[d+48>>2]=4096;H[d+52>>2]=e.blocks;H[d+56>>2]=e.atime.getTime()/1E3|0;H[d+60>>2]=0;H[d+64>>2]=e.mtime.getTime()/
1E3|0;H[d+68>>2]=0;H[d+72>>2]=e.ctime.getTime()/1E3|0;H[d+76>>2]=0;N=[e.ino>>>0,(M=e.ino,1<=+Fa(M)?0<M?(Ia(+Ha(M/4294967296),4294967295)|0)>>>0:~~+Ga((M-+(~~M>>>0))/4294967296)>>>0:0)];H[d+80>>2]=N[0];H[d+84>>2]=N[1];return 0}var jb=void 0;function kb(a){a=S.Xa(a);if(!a)throw new S.qa(8);return a}var lb={};
function mb(){if(!nb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in lb)a[b]=lb[b];var d=[];for(b in a)d.push(b+"="+a[b]);nb=d}return nb}var nb;ra("GMT",67216,4);
function ob(){function a(h){return(h=h.toTimeString().match(/\(([A-Za-z ]+)\)$/))?h[1]:"GMT"}if(!pb){pb=!0;H[qb()>>2]=60*(new Date).getTimezoneOffset();var b=(new Date).getFullYear(),d=new Date(b,0,1);b=new Date(b,6,1);H[rb()>>2]=Number(d.getTimezoneOffset()!=b.getTimezoneOffset());var e=a(d),f=a(b);e=ta(e);f=ta(f);b.getTimezoneOffset()<d.getTimezoneOffset()?(H[sb()>>2]=e,H[sb()+4>>2]=f):(H[sb()>>2]=f,H[sb()+4>>2]=e)}}var pb;
function tb(a,b,d,e){a||(a=this);this.parent=a;this.za=a.za;this.ab=null;this.id=S.Pc++;this.name=b;this.mode=d;this.sa={};this.ta={};this.rdev=e}Object.defineProperties(tb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Lc:{get:function(){return S.Aa(this.mode)}},xb:{get:function(){return S.ib(this.mode)}}});S.pc=tb;S.Wc();var gb;
c.FS_createFolder=S.Sb;c.FS_createPath=S.Vb;c.FS_createDataFile=S.gb;c.FS_createPreloadedFile=S.Wb;c.FS_createLazyFile=S.Tb;c.FS_createLink=S.Ub;c.FS_createDevice=S.Ha;c.FS_unlink=S.unlink;function db(a,b){var d=Array(sa(a)+1);a=qa(a,d,0,d.length);b&&(d.length=a);return d}
var ub={b:function(a){return ua(a)},a:function(a){"uncaught_exception"in Ua?Ua.Da++:Ua.Da=1;throw a;},u:function(a,b){try{a=F(a);if(b&-8)var d=-28;else{var e;(e=S.wa(a,{Ea:!0}).node)?(a="",b&4&&(a+="r"),b&2&&(a+="w"),b&1&&(a+="x"),d=a&&S.Na(e,a)?-2:0):d=-44}return d}catch(f){return"undefined"!==typeof S&&f instanceof S.qa||u(f),-f.va}},F:function(a,b){try{return a=F(a),S.chmod(a,b),0}catch(d){return"undefined"!==typeof S&&d instanceof S.qa||u(d),-d.va}},w:function(a){try{var b=kb(a);return S.open(b.path,
b.flags,0).fd}catch(d){return"undefined"!==typeof S&&d instanceof S.qa||u(d),-d.va}},t:function(a,b,d){try{return S.Gc(a,d),0}catch(e){return"undefined"!==typeof S&&e instanceof S.qa||u(e),-e.va}},c:function(){return 42},v:function(a,b,d){try{return a=F(a),S.chown(a,b,d),0}catch(e){return"undefined"!==typeof S&&e instanceof S.qa||u(e),-e.va}},r:function(){return-34},E:function(a,b){try{return a=F(a),ib(S.lstat,a,b)}catch(d){return"undefined"!==typeof S&&d instanceof S.qa||u(d),-d.va}},i:function(a,
b){try{return a=F(a),a=O(a),"/"===a[a.length-1]&&(a=a.substr(0,a.length-1)),S.mkdir(a,b,0),0}catch(d){return"undefined"!==typeof S&&d instanceof S.qa||u(d),-d.va}},D:function(a,b,d){jb=d;try{var e=F(a);jb+=4;return S.open(e,b,H[jb-4>>2]).fd}catch(f){return"undefined"!==typeof S&&f instanceof S.qa||u(f),-f.va}},x:function(a,b,d){try{var e=kb(a);return S.read(e,G,b,d)}catch(f){return"undefined"!==typeof S&&f instanceof S.qa||u(f),-f.va}},A:function(a){try{return a=F(a),S.rmdir(a),0}catch(b){return"undefined"!==
typeof S&&b instanceof S.qa||u(b),-b.va}},j:function(a,b){try{return a=F(a),ib(S.stat,a,b)}catch(d){return"undefined"!==typeof S&&d instanceof S.qa||u(d),-d.va}},s:function(a,b){try{return a=F(a),b=F(b),S.symlink(a,b),0}catch(d){return"undefined"!==typeof S&&d instanceof S.qa||u(d),-d.va}},G:function(a){try{var b=hb;hb=a;return b}catch(d){return"undefined"!==typeof S&&d instanceof S.qa||u(d),-d.va}},B:function(a){try{return a=F(a),S.unlink(a),0}catch(b){return"undefined"!==typeof S&&b instanceof S.qa||
u(b),-b.va}},o:function(){u()},m:function(a,b,d){pa.copyWithin(a,b,b+d)},n:function(a){a>>>=0;var b=pa.length;if(2147483648<a)return!1;for(var d=1;4>=d;d*=2){var e=b*(1+.2/d);e=Math.min(e,a+100663296);e=Math.max(16777216,a,e);0<e%65536&&(e+=65536-e%65536);a:{try{y.grow(Math.min(2147483648,e)-va.byteLength+65535>>>16);wa(y.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},p:function(a,b){var d=0;mb().forEach(function(e,f){var h=b+d;f=H[a+4*f>>2]=h;for(h=0;h<e.length;++h)G[f++>>0]=
e.charCodeAt(h);G[f>>0]=0;d+=e.length+1});return 0},q:function(a,b){var d=mb();H[a>>2]=d.length;var e=0;d.forEach(function(f){e+=f.length+1});H[b>>2]=e;return 0},C:function(a){try{var b=kb(a);S.close(b);return 0}catch(d){return"undefined"!==typeof S&&d instanceof S.qa||u(d),d.va}},y:function(a,b){try{var d=kb(a);G[b>>0]=d.tty?2:S.Aa(d.mode)?3:S.Ra(d.mode)?7:4;return 0}catch(e){return"undefined"!==typeof S&&e instanceof S.qa||u(e),e.va}},l:function(a,b,d,e,f){try{var h=kb(a);a=4294967296*d+(b>>>0);
if(-9007199254740992>=a||9007199254740992<=a)return-61;S.Ga(h,a,e);N=[h.position>>>0,(M=h.position,1<=+Fa(M)?0<M?(Ia(+Ha(M/4294967296),4294967295)|0)>>>0:~~+Ga((M-+(~~M>>>0))/4294967296)>>>0:0)];H[f>>2]=N[0];H[f+4>>2]=N[1];h.ub&&0===a&&0===e&&(h.ub=null);return 0}catch(k){return"undefined"!==typeof S&&k instanceof S.qa||u(k),k.va}},z:function(a,b,d,e){try{a:{for(var f=kb(a),h=a=0;h<d;h++){var k=S.write(f,G,H[b+8*h>>2],H[b+(8*h+4)>>2],void 0);if(0>k){var l=-1;break a}a+=k}l=a}H[e>>2]=l;return 0}catch(q){return"undefined"!==
typeof S&&q instanceof S.qa||u(q),q.va}},H:function(){return 0},d:function(){throw"getpwnam: TODO";},g:function(a){ob();a=new Date(1E3*H[a>>2]);H[16792]=a.getSeconds();H[16793]=a.getMinutes();H[16794]=a.getHours();H[16795]=a.getDate();H[16796]=a.getMonth();H[16797]=a.getFullYear()-1900;H[16798]=a.getDay();var b=new Date(a.getFullYear(),0,1);H[16799]=(a.getTime()-b.getTime())/864E5|0;H[16801]=-(60*a.getTimezoneOffset());var d=(new Date(a.getFullYear(),6,1)).getTimezoneOffset();b=b.getTimezoneOffset();
a=(d!=b&&a.getTimezoneOffset()==Math.min(b,d))|0;H[16800]=a;a=H[sb()+(a?4:0)>>2];H[16802]=a;return 67168},memory:y,f:function(a){ob();var b=new Date(H[a+20>>2]+1900,H[a+16>>2],H[a+12>>2],H[a+8>>2],H[a+4>>2],H[a>>2],0),d=H[a+32>>2],e=b.getTimezoneOffset(),f=new Date(b.getFullYear(),0,1),h=(new Date(b.getFullYear(),6,1)).getTimezoneOffset(),k=f.getTimezoneOffset(),l=Math.min(k,h);0>d?H[a+32>>2]=Number(h!=k&&l==e):0<d!=(l==e)&&(h=Math.max(k,h),b.setTime(b.getTime()+6E4*((0<d?l:h)-e)));H[a+24>>2]=b.getDay();
H[a+28>>2]=(b.getTime()-f.getTime())/864E5|0;return b.getTime()/1E3|0},e:function(){},table:z,k:function(a){var b=Date.now()/1E3|0;a&&(H[a>>2]=b);return b},h:function(a,b){b?(b=H[b+4>>2],b*=1E3):b=Date.now();a=F(a);try{return S.Zc(a,b,b),0}catch(d){return S.Jc(d),-1}}},vb=function(){function a(f){c.asm=f.exports;Ma("wasm-instantiate")}function b(f){a(f.instance)}function d(f){return Ra().then(function(h){return WebAssembly.instantiate(h,e)}).then(f,function(h){v("failed to asynchronously prepare wasm: "+
h);u(h)})}var e={a:ub};La("wasm-instantiate");if(c.instantiateWasm)try{return c.instantiateWasm(e,a)}catch(f){return v("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(ma||"function"!==typeof WebAssembly.instantiateStreaming||Oa()||Na("file://")||"function"!==typeof fetch)return d(b);fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(h){v("wasm streaming compile failed: "+h);v("falling back to ArrayBuffer instantiation");
d(b)})})})();return{}}();c.asm=vb;
var Sa=c.___wasm_call_ctors=function(){return(Sa=c.___wasm_call_ctors=c.asm.I).apply(null,arguments)},wb=c._emscripten_bind_RARHeaderDataEx_RARHeaderDataEx_0=function(){return(wb=c._emscripten_bind_RARHeaderDataEx_RARHeaderDataEx_0=c.asm.J).apply(null,arguments)},xb=c._emscripten_bind_RARHeaderDataEx_set_UnpSize_1=function(){return(xb=c._emscripten_bind_RARHeaderDataEx_set_UnpSize_1=c.asm.K).apply(null,arguments)},yb=c._emscripten_bind_RARHeaderDataEx_set_PackSize_1=function(){return(yb=c._emscripten_bind_RARHeaderDataEx_set_PackSize_1=
c.asm.L).apply(null,arguments)},zb=c._emscripten_bind_RARHeaderDataEx_get_Flags_0=function(){return(zb=c._emscripten_bind_RARHeaderDataEx_get_Flags_0=c.asm.M).apply(null,arguments)},Ab=c._emscripten_bind_RARHeaderDataEx_set_Flags_1=function(){return(Ab=c._emscripten_bind_RARHeaderDataEx_set_Flags_1=c.asm.N).apply(null,arguments)},Bb=c._emscripten_bind_RARHeaderDataEx___destroy___0=function(){return(Bb=c._emscripten_bind_RARHeaderDataEx___destroy___0=c.asm.O).apply(null,arguments)},Cb=c._emscripten_bind_RAROpenArchiveDataEx_RAROpenArchiveDataEx_0=
function(){return(Cb=c._emscripten_bind_RAROpenArchiveDataEx_RAROpenArchiveDataEx_0=c.asm.P).apply(null,arguments)},Db=c._emscripten_bind_RAROpenArchiveDataEx_get_ArcName_0=function(){return(Db=c._emscripten_bind_RAROpenArchiveDataEx_get_ArcName_0=c.asm.Q).apply(null,arguments)},Eb=c._emscripten_bind_RAROpenArchiveDataEx_set_ArcName_1=function(){return(Eb=c._emscripten_bind_RAROpenArchiveDataEx_set_ArcName_1=c.asm.R).apply(null,arguments)},Fb=c._emscripten_bind_RAROpenArchiveDataEx_get_OpenMode_0=
function(){return(Fb=c._emscripten_bind_RAROpenArchiveDataEx_get_OpenMode_0=c.asm.S).apply(null,arguments)},Gb=c._emscripten_bind_RAROpenArchiveDataEx_set_OpenMode_1=function(){return(Gb=c._emscripten_bind_RAROpenArchiveDataEx_set_OpenMode_1=c.asm.T).apply(null,arguments)},Hb=c._emscripten_bind_RAROpenArchiveDataEx_get_Callback_0=function(){return(Hb=c._emscripten_bind_RAROpenArchiveDataEx_get_Callback_0=c.asm.U).apply(null,arguments)},Ib=c._emscripten_bind_RAROpenArchiveDataEx_set_Callback_1=function(){return(Ib=
c._emscripten_bind_RAROpenArchiveDataEx_set_Callback_1=c.asm.V).apply(null,arguments)},Jb=c._emscripten_bind_RAROpenArchiveDataEx_get_OpenResult_0=function(){return(Jb=c._emscripten_bind_RAROpenArchiveDataEx_get_OpenResult_0=c.asm.W).apply(null,arguments)},Kb=c._emscripten_bind_RAROpenArchiveDataEx_set_OpenResult_1=function(){return(Kb=c._emscripten_bind_RAROpenArchiveDataEx_set_OpenResult_1=c.asm.X).apply(null,arguments)},Lb=c._emscripten_bind_RAROpenArchiveDataEx_get_Flags_0=function(){return(Lb=
c._emscripten_bind_RAROpenArchiveDataEx_get_Flags_0=c.asm.Y).apply(null,arguments)},Mb=c._emscripten_bind_RAROpenArchiveDataEx_set_Flags_1=function(){return(Mb=c._emscripten_bind_RAROpenArchiveDataEx_set_Flags_1=c.asm.Z).apply(null,arguments)},Nb=c._emscripten_bind_RAROpenArchiveDataEx___destroy___0=function(){return(Nb=c._emscripten_bind_RAROpenArchiveDataEx___destroy___0=c.asm._).apply(null,arguments)},Ob=c._emscripten_bind_VoidPtr___destroy___0=function(){return(Ob=c._emscripten_bind_VoidPtr___destroy___0=
c.asm.$).apply(null,arguments)},Pb=c._emscripten_bind_RARHeaderDataEx_get_FileNameW_0=function(){return(Pb=c._emscripten_bind_RARHeaderDataEx_get_FileNameW_0=c.asm.aa).apply(null,arguments)},Qb=c._emscripten_bind_RARHeaderDataEx_set_FileNameW_1=function(){return(Qb=c._emscripten_bind_RARHeaderDataEx_set_FileNameW_1=c.asm.ba).apply(null,arguments)},Rb=c._emscripten_bind_RARHeaderDataEx_get_UnpSize_0=function(){return(Rb=c._emscripten_bind_RARHeaderDataEx_get_UnpSize_0=c.asm.ca).apply(null,arguments)},
Sb=c._emscripten_bind_RARHeaderDataEx_get_PackSize_0=function(){return(Sb=c._emscripten_bind_RARHeaderDataEx_get_PackSize_0=c.asm.da).apply(null,arguments)};c._free=function(){return(c._free=c.asm.ea).apply(null,arguments)};var ua=c._malloc=function(){return(ua=c._malloc=c.asm.fa).apply(null,arguments)},Za=c.___errno_location=function(){return(Za=c.___errno_location=c.asm.ga).apply(null,arguments)};c._RAROpenArchiveEx=function(){return(c._RAROpenArchiveEx=c.asm.ha).apply(null,arguments)};
c._RARCloseArchive=function(){return(c._RARCloseArchive=c.asm.ia).apply(null,arguments)};c._RARReadHeaderEx=function(){return(c._RARReadHeaderEx=c.asm.ja).apply(null,arguments)};c._RARProcessFileW=function(){return(c._RARProcessFileW=c.asm.ka).apply(null,arguments)};c._RARSetPassword=function(){return(c._RARSetPassword=c.asm.la).apply(null,arguments)};
var sb=c.__get_tzname=function(){return(sb=c.__get_tzname=c.asm.ma).apply(null,arguments)},rb=c.__get_daylight=function(){return(rb=c.__get_daylight=c.asm.na).apply(null,arguments)},qb=c.__get_timezone=function(){return(qb=c.__get_timezone=c.asm.oa).apply(null,arguments)};c.dynCall_vi=function(){return(c.dynCall_vi=c.asm.pa).apply(null,arguments)};c.asm=vb;c.getMemory=function(a){if(Da)a=ua(a);else{var b=H[16788];H[16788]=b+a+15&-16;a=b}return a};c.UTF8ToString=F;c.stringToUTF8=ra;
c.addRunDependency=La;c.removeRunDependency=Ma;c.FS_createFolder=S.Sb;c.FS_createPath=S.Vb;c.FS_createDataFile=S.gb;c.FS_createPreloadedFile=S.Wb;c.FS_createLazyFile=S.Tb;c.FS_createLink=S.Ub;c.FS_createDevice=S.Ha;c.FS_unlink=S.unlink;
c.addFunction=function(a,b){if(!x){x=new WeakMap;for(var d=0;d<z.length;d++){var e=z.get(d);e&&x.set(e,d)}}if(x.has(a))a=x.get(a);else{if(la.length)d=la.pop();else{d=z.length;try{z.grow(1)}catch(l){if(!(l instanceof RangeError))throw l;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";}}try{z.set(d,a)}catch(l){if(!(l instanceof TypeError))throw l;if("function"===typeof WebAssembly.Function){var f={i:"i32",j:"i64",f:"f32",d:"f64"},h={parameters:[],results:"v"==b[0]?[]:[f[b[0]]]};for(e=1;e<
b.length;++e)h.parameters.push(f[b[e]]);b=new WebAssembly.Function(h,a)}else{f=[1,0,1,96];h=b.slice(0,1);b=b.slice(1);var k={i:127,j:126,f:125,d:124};f.push(b.length);for(e=0;e<b.length;++e)f.push(k[b[e]]);"v"==h?f.push(0):f=f.concat([1,k[h]]);f[1]=f.length-2;b=new Uint8Array([0,97,115,109,1,0,0,0].concat(f,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0]));b=new WebAssembly.Module(b);b=(new WebAssembly.Instance(b,{e:{f:a}})).exports.f}z.set(d,b)}x.set(a,d);a=d}return a};
c.removeFunction=function(a){x.delete(z.get(a));la.push(a)};c.FS=S;c.WORKERFS=U;var Tb;Ka=function Ub(){Tb||Vb();Tb||(Ka=Ub)};
function Vb(){function a(){if(!Tb&&(Tb=!0,c.calledRun=!0,!na)){Da=!0;c.noFSInit||S.Ya.wb||S.Ya();ya(Aa);S.ic=!1;ya(Ba);if(c.onRuntimeInitialized)c.onRuntimeInitialized();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var b=c.postRun.shift();Ca.unshift(b)}ya(Ca)}}if(!(0<K)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)Ea();ya(za);0<K||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},
1);a()},1)):a())}}c.run=Vb;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();noExitRuntime=!0;Vb();function V(){}V.prototype=Object.create(V.prototype);V.prototype.constructor=V;V.prototype.Va=V;V.fb={};c.WrapperObject=V;function Wb(a){return(a||V).fb}c.getCache=Wb;function Xb(a,b){var d=Wb(b),e=d[a];if(e)return e;e=Object.create((b||V).prototype);e.ua=a;return d[a]=e}c.wrapPointer=Xb;c.castObject=function(a,b){return Xb(a.ua,b)};c.NULL=Xb(0);
c.destroy=function(a){if(!a.__destroy__)throw"Error: Cannot destroy object. (Did you create it yourself?)";a.__destroy__();delete Wb(a.Va)[a.ua]};c.compare=function(a,b){return a.ua===b.ua};c.getPointer=function(a){return a.ua};c.getClass=function(a){return a.Va};var W=0,Yb=0,Zb=0,$b=[],ac=0;function cc(){if(ac){for(var a=0;a<$b.length;a++)c._free($b[a]);$b.length=0;c._free(W);W=0;Yb+=ac;ac=0}W||(Yb+=128,W=c._malloc(Yb),assert(W));Zb=0}
function dc(a){if("string"===typeof a){a=db(a);var b=G;assert(W);b=a.length*b.BYTES_PER_ELEMENT;b=b+7&-8;if(Zb+b>=Yb){assert(0<b);ac+=b;var d=c._malloc(b);$b.push(d)}else d=W+Zb,Zb+=b;b=d;d=G;var e=b;switch(d.BYTES_PER_ELEMENT){case 2:e>>=1;break;case 4:e>>=2;break;case 8:e>>=3}for(var f=0;f<a.length;f++)d[e+f]=a[f];return b}return a}function X(){this.ua=wb();Wb(X)[this.ua]=this}X.prototype=Object.create(V.prototype);X.prototype.constructor=X;X.prototype.Va=X;X.fb={};c.RARHeaderDataEx=X;
X.prototype.get_FileNameW=X.prototype.Hb=function(){return F(Pb(this.ua))};X.prototype.set_FileNameW=X.prototype.Kb=function(a){var b=this.ua;cc();a=a&&"object"===typeof a?a.ua:dc(a);Qb(b,a)};Object.defineProperty(X.prototype,"FileNameW",{get:X.prototype.Hb,set:X.prototype.Kb});X.prototype.get_UnpSize=X.prototype.Jb=function(){return Rb(this.ua)};X.prototype.set_UnpSize=X.prototype.Mb=function(a){var b=this.ua;a&&"object"===typeof a&&(a=a.ua);xb(b,a)};
Object.defineProperty(X.prototype,"UnpSize",{get:X.prototype.Jb,set:X.prototype.Mb});X.prototype.get_PackSize=X.prototype.Ib=function(){return Sb(this.ua)};X.prototype.set_PackSize=X.prototype.Lb=function(a){var b=this.ua;a&&"object"===typeof a&&(a=a.ua);yb(b,a)};Object.defineProperty(X.prototype,"PackSize",{get:X.prototype.Ib,set:X.prototype.Lb});X.prototype.get_Flags=X.prototype.Da=function(){return zb(this.ua)};
X.prototype.set_Flags=X.prototype.eb=function(a){var b=this.ua;a&&"object"===typeof a&&(a=a.ua);Ab(b,a)};Object.defineProperty(X.prototype,"Flags",{get:X.prototype.Da,set:X.prototype.eb});X.prototype.__destroy__=function(){Bb(this.ua)};function Y(){this.ua=Cb();Wb(Y)[this.ua]=this}Y.prototype=Object.create(V.prototype);Y.prototype.constructor=Y;Y.prototype.Va=Y;Y.fb={};c.RAROpenArchiveDataEx=Y;Y.prototype.get_ArcName=Y.prototype.Hb=function(){return F(Db(this.ua))};
Y.prototype.set_ArcName=Y.prototype.Lb=function(a){var b=this.ua;cc();a=a&&"object"===typeof a?a.ua:dc(a);Eb(b,a)};Object.defineProperty(Y.prototype,"ArcName",{get:Y.prototype.Hb,set:Y.prototype.Lb});Y.prototype.get_OpenMode=Y.prototype.Jb=function(){return Fb(this.ua)};Y.prototype.set_OpenMode=Y.prototype.$c=function(a){var b=this.ua;a&&"object"===typeof a&&(a=a.ua);Gb(b,a)};Object.defineProperty(Y.prototype,"OpenMode",{get:Y.prototype.Jb,set:Y.prototype.$c});
Y.prototype.get_Callback=Y.prototype.Ib=function(){return Hb(this.ua)};Y.prototype.set_Callback=Y.prototype.Mb=function(a){var b=this.ua;a&&"object"===typeof a&&(a=a.ua);Ib(b,a)};Object.defineProperty(Y.prototype,"Callback",{get:Y.prototype.Ib,set:Y.prototype.Mb});Y.prototype.get_OpenResult=Y.prototype.Kb=function(){return Jb(this.ua)};Y.prototype.set_OpenResult=Y.prototype.oc=function(a){var b=this.ua;a&&"object"===typeof a&&(a=a.ua);Kb(b,a)};
Object.defineProperty(Y.prototype,"OpenResult",{get:Y.prototype.Kb,set:Y.prototype.oc});Y.prototype.get_Flags=Y.prototype.Da=function(){return Lb(this.ua)};Y.prototype.set_Flags=Y.prototype.eb=function(a){var b=this.ua;a&&"object"===typeof a&&(a=a.ua);Mb(b,a)};Object.defineProperty(Y.prototype,"Flags",{get:Y.prototype.Da,set:Y.prototype.eb});Y.prototype.__destroy__=function(){Nb(this.ua)};function Z(){throw"cannot construct a VoidPtr, no constructor in IDL";}Z.prototype=Object.create(V.prototype);
Z.prototype.constructor=Z;Z.prototype.Va=Z;Z.fb={};c.VoidPtr=Z;Z.prototype.__destroy__=function(){Ob(this.ua)};(function(){function a(){}Da||Ba.unshift(a)})();c.ensureString=dc;c.WORKERFS=U;S.mount=S.za;S.unmount=S.Yc;
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


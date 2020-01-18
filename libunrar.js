var Module = {
    'print': function(text) { console.log('stdout: ' + text) },
    'printErr': function(text) {  console.log('stderr: ' + text) }
};
var c;var g;g||(g=typeof Module !== 'undefined' ? Module : {});var l={},n;for(n in g)g.hasOwnProperty(n)&&(l[n]=g[n]);var aa="./this.program",p=!1,q=!1,t=!1,ba=!1,ca=!1;p="object"===typeof window;q="function"===typeof importScripts;t=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!p&&!q;ca=!p&&!t&&!q;var u="",w,x,da,ea;
if(t)u=__dirname+"/",w=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);return da.readFileSync(a,b?null:"utf8")},x=function(a){a=w(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),"undefined"!==typeof module&&(module.exports=g),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",y),g.inspect=function(){return"[Emscripten Module object]"};
else if(ca)"undefined"!=typeof read&&(w=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(p||q)q?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,
u.lastIndexOf("/")+1):"",w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var fa=g.print||console.log.bind(console),A=g.printErr||console.warn.bind(console);for(n in l)l.hasOwnProperty(n)&&(g[n]=l[n]);l=null;g.thisProgram&&(aa=g.thisProgram);var B;g.wasmBinary&&(B=g.wasmBinary);"object"!==typeof WebAssembly&&A("no native wasm support detected");
var ha,ia=new WebAssembly.Table({initial:38,maximum:58,element:"anyfunc"}),ja=!1;function assert(a,b){a||y("Assertion failed: "+b)}function ma(a){if("number"===typeof a){var b=!0;var d=a}else b=!1,d=a.length;var e=na(Math.max(d,1));if(b){a=e;assert(0==(e&3));for(b=e+(d&-4);a<b;a+=4)C[a>>2]=0;for(b=e+d;a<b;)D[a++>>0]=0;return e}a.subarray||a.slice?E.set(a,e):E.set(new Uint8Array(a),e);return e}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b,d){var e=b+d;for(d=b;a[d]&&!(d>=e);)++d;if(16<d-b&&a.subarray&&oa)return oa.decode(a.subarray(b,d));for(e="";b<d;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|h);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|k:(f&7)<<18|h<<12|k<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}function pa(a,b){return a?F(E,a,b):""}
function qa(a,b,d,e){if(!(0<e))return 0;var f=d;e=d+e-1;for(var h=0;h<a.length;++h){var k=a.charCodeAt(h);if(55296<=k&&57343>=k){var m=a.charCodeAt(++h);k=65536+((k&1023)<<10)|m&1023}if(127>=k){if(d>=e)break;b[d++]=k}else{if(2047>=k){if(d+1>=e)break;b[d++]=192|k>>6}else{if(65535>=k){if(d+2>=e)break;b[d++]=224|k>>12}else{if(d+3>=e)break;b[d++]=240|k>>18;b[d++]=128|k>>12&63}b[d++]=128|k>>6&63}b[d++]=128|k&63}}b[d]=0;return d-f}
function ra(a){for(var b=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,D,E,C,sa=g.TOTAL_MEMORY||16777216;g.wasmMemory?ha=g.wasmMemory:ha=new WebAssembly.Memory({initial:sa/65536,maximum:sa/65536});ha&&(buffer=ha.buffer);sa=buffer.byteLength;var G=buffer;buffer=G;g.HEAP8=D=new Int8Array(G);g.HEAP16=new Int16Array(G);
g.HEAP32=C=new Int32Array(G);g.HEAPU8=E=new Uint8Array(G);g.HEAPU16=new Uint16Array(G);g.HEAPU32=new Uint32Array(G);g.HEAPF32=new Float32Array(G);g.HEAPF64=new Float64Array(G);C[16788]=5310192;function ta(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var d=b.zc;"number"===typeof d?void 0===b.qb?g.dynCall_v(d):g.dynCall_vi(d,b.qb):d(void 0===b.qb?null:b.qb)}}}var ua=[],va=[],wa=[],xa=[],ya=!1;function za(){var a=g.preRun.shift();ua.unshift(a)}
var Aa=Math.abs,Ba=Math.ceil,Ca=Math.floor,Da=Math.min,H=0,Ea=null,Fa=null;function Ga(){H++;g.monitorRunDependencies&&g.monitorRunDependencies(H)}function Ha(){H--;g.monitorRunDependencies&&g.monitorRunDependencies(H);if(0==H&&(null!==Ea&&(clearInterval(Ea),Ea=null),Fa)){var a=Fa;Fa=null;a()}}g.preloadedImages={};g.preloadedAudios={};function y(a){if(g.onAbort)g.onAbort(a);fa(a);A(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ia(){var a=I;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var I="libunrar.wasm";if(!Ia()){var Ja=I;I=g.locateFile?g.locateFile(Ja,u):u+Ja}function Ka(){try{if(B)return new Uint8Array(B);if(x)return x(I);throw"both async and sync fetching of the wasm failed";}catch(a){y(a)}}
function La(){return B||!p&&!q||"function"!==typeof fetch?new Promise(function(a){a(Ka())}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ka()})}var J,K;va.push({zc:function(){Ma()}});function Na(a){return a.replace(/\b_Z[\w\d_]+/g,function(a){return a===a?a:a+" ["+a+"]"})}
function Oa(a,b){for(var d=0,e=a.length-1;0<=e;e--){var f=a[e];"."===f?a.splice(e,1):".."===f?(a.splice(e,1),d++):d&&(a.splice(e,1),d--)}if(b)for(;d;d--)a.unshift("..");return a}function L(a){var b="/"===a.charAt(0),d="/"===a.substr(-1);(a=Oa(a.split("/").filter(function(a){return!!a}),!b).join("/"))||b||(a=".");a&&d&&(a+="/");return(b?"/":"")+a}
function Pa(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function M(a){if("/"===a)return"/";var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}function Qa(){var a=Array.prototype.slice.call(arguments,0);return L(a.join("/"))}function N(a,b){return L(a+"/"+b)}function Ra(a){g.___errno_location&&(C[g.___errno_location()>>2]=a);return a}
function O(){for(var a="",b=!1,d=arguments.length-1;-1<=d&&!b;d--){b=0<=d?arguments[d]:P.cwd();if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Oa(a.split("/").filter(function(a){return!!a}),!b).join("/");return(b?"/":"")+a||"."}
function Sa(a,b){function d(a){for(var b=0;b<a.length&&""===a[b];b++);for(var d=a.length-1;0<=d&&""===a[d];d--);return b>d?[]:a.slice(b,d-b+1)}a=O(a).substr(1);b=O(b).substr(1);a=d(a.split("/"));b=d(b.split("/"));for(var e=Math.min(a.length,b.length),f=e,h=0;h<e;h++)if(a[h]!==b[h]){f=h;break}e=[];for(h=f;h<a.length;h++)e.push("..");e=e.concat(b.slice(f));return e.join("/")}var Ta=[];function Ua(a,b){Ta[a]={input:[],output:[],Qa:b};P.Hb(a,Va)}
var Va={open:function(a){var b=Ta[a.node.rdev];if(!b)throw new P.oa(43);a.tty=b;a.seekable=!1},close:function(a){a.tty.Qa.flush(a.tty)},flush:function(a){a.tty.Qa.flush(a.tty)},read:function(a,b,d,e){if(!a.tty||!a.tty.Qa.Wb)throw new P.oa(60);for(var f=0,h=0;h<e;h++){try{var k=a.tty.Qa.Wb(a.tty)}catch(m){throw new P.oa(29);}if(void 0===k&&0===f)throw new P.oa(6);if(null===k||void 0===k)break;f++;b[d+h]=k}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,d,e){if(!a.tty||!a.tty.Qa.Cb)throw new P.oa(60);
try{for(var f=0;f<e;f++)a.tty.Qa.Cb(a.tty,b[d+f])}catch(h){throw new P.oa(29);}e&&(a.node.timestamp=Date.now());return f}},Wa={Wb:function(a){if(!a.input.length){var b=null;if(t){var d=Buffer.ob?Buffer.ob(256):new Buffer(256),e=0;try{e=da.readSync(process.stdin.fd,d,0,256,null)}catch(f){if(-1!=f.toString().indexOf("EOF"))e=0;else throw f;}0<e?b=d.slice(0,e).toString("utf-8"):b=null}else"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==
typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=Q(b,!0)}return a.input.shift()},Cb:function(a,b){null===b||10===b?(fa(F(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(fa(F(a.output,0)),a.output=[])}},Xa={Cb:function(a,b){null===b||10===b?(A(F(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(A(F(a.output,0)),a.output=[])}},R={Ga:null,wa:function(){return R.createNode(null,
"/",16895,0)},createNode:function(a,b,d,e){if(P.Cc(d)||P.isFIFO(d))throw new P.oa(63);R.Ga||(R.Ga={dir:{node:{Da:R.qa.Da,Aa:R.qa.Aa,lookup:R.qa.lookup,Ia:R.qa.Ia,rename:R.qa.rename,unlink:R.qa.unlink,rmdir:R.qa.rmdir,readdir:R.qa.readdir,symlink:R.qa.symlink},stream:{Ea:R.ra.Ea}},file:{node:{Da:R.qa.Da,Aa:R.qa.Aa},stream:{Ea:R.ra.Ea,read:R.ra.read,write:R.ra.write,Ta:R.ra.Ta,Xa:R.ra.Xa,$a:R.ra.$a}},link:{node:{Da:R.qa.Da,Aa:R.qa.Aa,readlink:R.qa.readlink},stream:{}},Nb:{node:{Da:R.qa.Da,Aa:R.qa.Aa},
stream:P.oc}});d=P.createNode(a,b,d,e);P.ya(d.mode)?(d.qa=R.Ga.dir.node,d.ra=R.Ga.dir.stream,d.pa={}):P.isFile(d.mode)?(d.qa=R.Ga.file.node,d.ra=R.Ga.file.stream,d.ua=0,d.pa=null):P.Pa(d.mode)?(d.qa=R.Ga.link.node,d.ra=R.Ga.link.stream):P.ib(d.mode)&&(d.qa=R.Ga.Nb.node,d.ra=R.Ga.Nb.stream);d.timestamp=Date.now();a&&(a.pa[b]=d);return d},ed:function(a){if(a.pa&&a.pa.subarray){for(var b=[],d=0;d<a.ua;++d)b.push(a.pa[d]);return b}return a.pa},gd:function(a){return a.pa?a.pa.subarray?a.pa.subarray(0,
a.ua):new Uint8Array(a.pa):new Uint8Array},Sb:function(a,b){var d=a.pa?a.pa.length:0;d>=b||(b=Math.max(b,d*(1048576>d?2:1.125)|0),0!=d&&(b=Math.max(b,256)),d=a.pa,a.pa=new Uint8Array(b),0<a.ua&&a.pa.set(d.subarray(0,a.ua),0))},Mc:function(a,b){if(a.ua!=b)if(0==b)a.pa=null,a.ua=0;else{if(!a.pa||a.pa.subarray){var d=a.pa;a.pa=new Uint8Array(new ArrayBuffer(b));d&&a.pa.set(d.subarray(0,Math.min(b,a.ua)))}else if(a.pa||(a.pa=[]),a.pa.length>b)a.pa.length=b;else for(;a.pa.length<b;)a.pa.push(0);a.ua=b}},
qa:{Da:function(a){var b={};b.dev=P.ib(a.mode)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;P.ya(a.mode)?b.size=4096:P.isFile(a.mode)?b.size=a.ua:P.Pa(a.mode)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.mc=4096;b.blocks=Math.ceil(b.size/b.mc);return b},Aa:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&R.Mc(a,b.size)},lookup:function(){throw P.tb[44];
},Ia:function(a,b,d,e){return R.createNode(a,b,d,e)},rename:function(a,b,d){if(P.ya(a.mode)){try{var e=P.Ha(b,d)}catch(h){}if(e)for(var f in e.pa)throw new P.oa(55);}delete a.parent.pa[a.name];a.name=d;b.pa[d]=a;a.parent=b},unlink:function(a,b){delete a.pa[b]},rmdir:function(a,b){var d=P.Ha(a,b),e;for(e in d.pa)throw new P.oa(55);delete a.pa[b]},readdir:function(a){var b=[".",".."],d;for(d in a.pa)a.pa.hasOwnProperty(d)&&b.push(d);return b},symlink:function(a,b,d){a=R.createNode(a,b,41471,0);a.link=
d;return a},readlink:function(a){if(!P.Pa(a.mode))throw new P.oa(28);return a.link}},ra:{read:function(a,b,d,e,f){var h=a.node.pa;if(f>=a.node.ua)return 0;a=Math.min(a.node.ua-f,e);if(8<a&&h.subarray)b.set(h.subarray(f,f+a),d);else for(e=0;e<a;e++)b[d+e]=h[f+e];return a},write:function(a,b,d,e,f,h){if(!e)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.pa||a.pa.subarray)){if(h)return a.pa=b.subarray(d,d+e),a.ua=e;if(0===a.ua&&0===f)return a.pa=new Uint8Array(b.subarray(d,d+e)),a.ua=e;if(f+
e<=a.ua)return a.pa.set(b.subarray(d,d+e),f),e}R.Sb(a,f+e);if(a.pa.subarray&&b.subarray)a.pa.set(b.subarray(d,d+e),f);else for(h=0;h<e;h++)a.pa[f+h]=b[d+h];a.ua=Math.max(a.ua,f+e);return e},Ea:function(a,b,d){1===d?b+=a.position:2===d&&P.isFile(a.node.mode)&&(b+=a.node.ua);if(0>b)throw new P.oa(28);return b},Ta:function(a,b,d){R.Sb(a.node,b+d);a.node.ua=Math.max(a.node.ua,b+d)},Xa:function(a,b,d,e,f,h,k){if(!P.isFile(a.node.mode))throw new P.oa(43);d=a.node.pa;if(k&2||d.buffer!==b.buffer){if(0<f||
f+e<a.node.ua)d.subarray?d=d.subarray(f,f+e):d=Array.prototype.slice.call(d,f,f+e);a=!0;f=b.buffer==D.buffer;e=na(e);if(!e)throw new P.oa(48);(f?D:b).set(d,e)}else a=!1,e=d.byteOffset;return{sa:e,Xc:a}},$a:function(a,b,d,e,f){if(!P.isFile(a.node.mode))throw new P.oa(43);if(f&2)return 0;R.ra.write(a,b,0,e,d,!1);return 0}}},P={root:null,Za:[],Qb:{},streams:[],Hc:1,Fa:null,Pb:"/",wb:!1,$b:!0,za:{},fc:{cc:{ic:1,jc:2}},oa:null,tb:{},wc:null,mb:0,Bc:function(a){if(!(a instanceof P.oa)){a:{var b=Error();
if(!b.stack){try{throw Error(0);}catch(d){b=d}if(!b.stack){b="(no stack trace available)";break a}}b=b.stack.toString()}g.extraStackTrace&&(b+="\n"+g.extraStackTrace());b=Na(b);throw a+" : "+b;}return Ra(a.ta)},va:function(a,b){a=O(P.cwd(),a);b=b||{};if(!a)return{path:"",node:null};var d={sb:!0,Gb:0},e;for(e in d)void 0===b[e]&&(b[e]=d[e]);if(8<b.Gb)throw new P.oa(32);a=Oa(a.split("/").filter(function(a){return!!a}),!1);var f=P.root;d="/";for(e=0;e<a.length;e++){var h=e===a.length-1;if(h&&b.parent)break;
f=P.Ha(f,a[e]);d=N(d,a[e]);P.La(f)&&(!h||h&&b.sb)&&(f=f.Ya.root);if(!h||b.Ba)for(h=0;P.Pa(f.mode);)if(f=P.readlink(d),d=O(Pa(d),f),f=P.va(d,{Gb:b.Gb}).node,40<h++)throw new P.oa(32);}return{path:d,node:f}},Ca:function(a){for(var b;;){if(P.jb(a))return a=a.wa.bc,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}},vb:function(a,b){for(var d=0,e=0;e<b.length;e++)d=(d<<5)-d+b.charCodeAt(e)|0;return(a+d>>>0)%P.Fa.length},Yb:function(a){var b=P.vb(a.parent.id,a.name);a.Na=P.Fa[b];P.Fa[b]=
a},Zb:function(a){var b=P.vb(a.parent.id,a.name);if(P.Fa[b]===a)P.Fa[b]=a.Na;else for(b=P.Fa[b];b;){if(b.Na===a){b.Na=a.Na;break}b=b.Na}},Ha:function(a,b){var d=P.Ec(a);if(d)throw new P.oa(d,a);for(d=P.Fa[P.vb(a.id,b)];d;d=d.Na){var e=d.name;if(d.parent.id===a.id&&e===b)return d}return P.lookup(a,b)},createNode:function(a,b,d,e){P.cb||(P.cb=function(a,b,d,e){a||(a=this);this.parent=a;this.wa=a.wa;this.Ya=null;this.id=P.Hc++;this.name=b;this.mode=d;this.qa={};this.ra={};this.rdev=e},P.cb.prototype=
{},Object.defineProperties(P.cb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Dc:{get:function(){return P.ya(this.mode)}},xb:{get:function(){return P.ib(this.mode)}}}));a=new P.cb(a,b,d,e);P.Yb(a);return a},rb:function(a){P.Zb(a)},jb:function(a){return a===a.parent},La:function(a){return!!a.Ya},isFile:function(a){return 32768===(a&
61440)},ya:function(a){return 16384===(a&61440)},Pa:function(a){return 40960===(a&61440)},ib:function(a){return 8192===(a&61440)},Cc:function(a){return 24576===(a&61440)},isFIFO:function(a){return 4096===(a&61440)},isSocket:function(a){return 49152===(a&49152)},xc:{r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218},Gc:function(a){var b=P.xc[a];if("undefined"===typeof b)throw Error("Unknown file open mode: "+a);return b},Tb:function(a){var b=
["r","w","rw"][a&3];a&512&&(b+="w");return b},Ka:function(a,b){if(P.$b)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return 2}else return 2;return 0},Ec:function(a){var b=P.Ka(a,"x");return b?b:a.qa.lookup?0:2},Ab:function(a,b){try{return P.Ha(a,b),20}catch(d){}return P.Ka(a,"wx")},kb:function(a,b,d){try{var e=P.Ha(a,b)}catch(f){return f.ta}if(a=P.Ka(a,"wx"))return a;if(d){if(!P.ya(e.mode))return 54;if(P.jb(e)||P.Ca(e)===P.cwd())return 10}else if(P.ya(e.mode))return 31;
return 0},Fc:function(a,b){return a?P.Pa(a.mode)?32:P.ya(a.mode)&&("r"!==P.Tb(b)||b&512)?31:P.Ka(a,P.Tb(b)):44},hc:4096,Ic:function(a,b){b=b||P.hc;for(a=a||0;a<=b;a++)if(!P.streams[a])return a;throw new P.oa(33);},Ua:function(a){return P.streams[a]},vc:function(a,b,d){P.eb||(P.eb=function(){},P.eb.prototype={},Object.defineProperties(P.eb.prototype,{object:{get:function(){return this.node},set:function(a){this.node=a}}}));var e=new P.eb,f;for(f in a)e[f]=a[f];a=e;b=P.Ic(b,d);a.fd=b;return P.streams[b]=
a},pc:function(a){P.streams[a]=null},oc:{open:function(a){a.ra=P.Ac(a.node.rdev).ra;a.ra.open&&a.ra.open(a)},Ea:function(){throw new P.oa(70);}},zb:function(a){return a>>8},kd:function(a){return a&255},Ma:function(a,b){return a<<8|b},Hb:function(a,b){P.Qb[a]={ra:b}},Ac:function(a){return P.Qb[a]},Vb:function(a){var b=[];for(a=[a];a.length;){var d=a.pop();b.push(d);a.push.apply(a,d.Za)}return b},ec:function(a,b){function d(a){P.mb--;return b(a)}function e(a){if(a){if(!e.Oa)return e.Oa=!0,d(a)}else++h>=
f.length&&d(null)}"function"===typeof a&&(b=a,a=!1);P.mb++;1<P.mb&&console.log("warning: "+P.mb+" FS.syncfs operations in flight at once, probably just doing extra work");var f=P.Vb(P.root.wa),h=0;f.forEach(function(b){if(!b.type.ec)return e(null);b.type.ec(b,a,e)})},wa:function(a,b,d){var e="/"===d,f=!d;if(e&&P.root)throw new P.oa(10);if(!e&&!f){var h=P.va(d,{sb:!1});d=h.path;h=h.node;if(P.La(h))throw new P.oa(10);if(!P.ya(h.mode))throw new P.oa(54);}b={type:a,nd:b,bc:d,Za:[]};a=a.wa(b);a.wa=b;b.root=
a;e?P.root=a:h&&(h.Ya=b,h.wa&&h.wa.Za.push(b));return a},qd:function(a){a=P.va(a,{sb:!1});if(!P.La(a.node))throw new P.oa(28);a=a.node;var b=a.Ya,d=P.Vb(b);Object.keys(P.Fa).forEach(function(a){for(a=P.Fa[a];a;){var b=a.Na;-1!==d.indexOf(a.wa)&&P.rb(a);a=b}});a.Ya=null;a.wa.Za.splice(a.wa.Za.indexOf(b),1)},lookup:function(a,b){return a.qa.lookup(a,b)},Ia:function(a,b,d){var e=P.va(a,{parent:!0}).node;a=M(a);if(!a||"."===a||".."===a)throw new P.oa(28);var f=P.Ab(e,a);if(f)throw new P.oa(f);if(!e.qa.Ia)throw new P.oa(63);
return e.qa.Ia(e,a,b,d)},create:function(a,b){return P.Ia(a,(void 0!==b?b:438)&4095|32768,0)},mkdir:function(a,b){return P.Ia(a,(void 0!==b?b:511)&1023|16384,0)},ld:function(a,b){a=a.split("/");for(var d="",e=0;e<a.length;++e)if(a[e]){d+="/"+a[e];try{P.mkdir(d,b)}catch(f){if(20!=f.ta)throw f;}}},lb:function(a,b,d){"undefined"===typeof d&&(d=b,b=438);return P.Ia(a,b|8192,d)},symlink:function(a,b){if(!O(a))throw new P.oa(44);var d=P.va(b,{parent:!0}).node;if(!d)throw new P.oa(44);b=M(b);var e=P.Ab(d,
b);if(e)throw new P.oa(e);if(!d.qa.symlink)throw new P.oa(63);return d.qa.symlink(d,b,a)},rename:function(a,b){var d=Pa(a),e=Pa(b),f=M(a),h=M(b);try{var k=P.va(a,{parent:!0});var m=k.node;k=P.va(b,{parent:!0});var v=k.node}catch(z){throw new P.oa(10);}if(!m||!v)throw new P.oa(44);if(m.wa!==v.wa)throw new P.oa(75);k=P.Ha(m,f);e=Sa(a,e);if("."!==e.charAt(0))throw new P.oa(28);e=Sa(b,d);if("."!==e.charAt(0))throw new P.oa(55);try{var r=P.Ha(v,h)}catch(z){}if(k!==r){d=P.ya(k.mode);if(f=P.kb(m,f,d))throw new P.oa(f);
if(f=r?P.kb(v,h,d):P.Ab(v,h))throw new P.oa(f);if(!m.qa.rename)throw new P.oa(63);if(P.La(k)||r&&P.La(r))throw new P.oa(10);if(v!==m&&(f=P.Ka(m,"w")))throw new P.oa(f);try{P.za.willMovePath&&P.za.willMovePath(a,b)}catch(z){console.log("FS.trackingDelegate['willMovePath']('"+a+"', '"+b+"') threw an exception: "+z.message)}P.Zb(k);try{m.qa.rename(k,v,h)}catch(z){throw z;}finally{P.Yb(k)}try{if(P.za.onMovePath)P.za.onMovePath(a,b)}catch(z){console.log("FS.trackingDelegate['onMovePath']('"+a+"', '"+b+
"') threw an exception: "+z.message)}}},rmdir:function(a){var b=P.va(a,{parent:!0}).node,d=M(a),e=P.Ha(b,d),f=P.kb(b,d,!0);if(f)throw new P.oa(f);if(!b.qa.rmdir)throw new P.oa(63);if(P.La(e))throw new P.oa(10);try{P.za.willDeletePath&&P.za.willDeletePath(a)}catch(h){console.log("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+h.message)}b.qa.rmdir(b,d);P.rb(e);try{if(P.za.onDeletePath)P.za.onDeletePath(a)}catch(h){console.log("FS.trackingDelegate['onDeletePath']('"+a+"') threw an exception: "+
h.message)}},readdir:function(a){a=P.va(a,{Ba:!0}).node;if(!a.qa.readdir)throw new P.oa(54);return a.qa.readdir(a)},unlink:function(a){var b=P.va(a,{parent:!0}).node,d=M(a),e=P.Ha(b,d),f=P.kb(b,d,!1);if(f)throw new P.oa(f);if(!b.qa.unlink)throw new P.oa(63);if(P.La(e))throw new P.oa(10);try{P.za.willDeletePath&&P.za.willDeletePath(a)}catch(h){console.log("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+h.message)}b.qa.unlink(b,d);P.rb(e);try{if(P.za.onDeletePath)P.za.onDeletePath(a)}catch(h){console.log("FS.trackingDelegate['onDeletePath']('"+
a+"') threw an exception: "+h.message)}},readlink:function(a){a=P.va(a).node;if(!a)throw new P.oa(44);if(!a.qa.readlink)throw new P.oa(28);return O(P.Ca(a.parent),a.qa.readlink(a))},stat:function(a,b){a=P.va(a,{Ba:!b}).node;if(!a)throw new P.oa(44);if(!a.qa.Da)throw new P.oa(63);return a.qa.Da(a)},lstat:function(a){return P.stat(a,!0)},chmod:function(a,b,d){var e;"string"===typeof a?e=P.va(a,{Ba:!d}).node:e=a;if(!e.qa.Aa)throw new P.oa(63);e.qa.Aa(e,{mode:b&4095|e.mode&-4096,timestamp:Date.now()})},
lchmod:function(a,b){P.chmod(a,b,!0)},fchmod:function(a,b){a=P.Ua(a);if(!a)throw new P.oa(8);P.chmod(a.node,b)},chown:function(a,b,d,e){var f;"string"===typeof a?f=P.va(a,{Ba:!e}).node:f=a;if(!f.qa.Aa)throw new P.oa(63);f.qa.Aa(f,{timestamp:Date.now()})},lchown:function(a,b,d){P.chown(a,b,d,!0)},fchown:function(a,b,d){a=P.Ua(a);if(!a)throw new P.oa(8);P.chown(a.node,b,d)},truncate:function(a,b){if(0>b)throw new P.oa(28);var d;"string"===typeof a?d=P.va(a,{Ba:!0}).node:d=a;if(!d.qa.Aa)throw new P.oa(63);
if(P.ya(d.mode))throw new P.oa(31);if(!P.isFile(d.mode))throw new P.oa(28);if(a=P.Ka(d,"w"))throw new P.oa(a);d.qa.Aa(d,{size:b,timestamp:Date.now()})},yc:function(a,b){a=P.Ua(a);if(!a)throw new P.oa(8);if(0===(a.flags&2097155))throw new P.oa(28);P.truncate(a.node,b)},Sc:function(a,b,d){a=P.va(a,{Ba:!0}).node;a.qa.Aa(a,{timestamp:Math.max(b,d)})},open:function(a,b,d,e,f){if(""===a)throw new P.oa(44);b="string"===typeof b?P.Gc(b):b;d=b&64?("undefined"===typeof d?438:d)&4095|32768:0;if("object"===typeof a)var h=
a;else{a=L(a);try{h=P.va(a,{Ba:!(b&131072)}).node}catch(m){}}var k=!1;if(b&64)if(h){if(b&128)throw new P.oa(20);}else h=P.Ia(a,d,0),k=!0;if(!h)throw new P.oa(44);P.ib(h.mode)&&(b&=-513);if(b&65536&&!P.ya(h.mode))throw new P.oa(54);if(!k&&(d=P.Fc(h,b)))throw new P.oa(d);b&512&&P.truncate(h,0);b&=-641;e=P.vc({node:h,path:P.Ca(h),flags:b,seekable:!0,position:0,ra:h.ra,Rc:[],error:!1},e,f);e.ra.open&&e.ra.open(e);!g.logReadFiles||b&1||(P.Fb||(P.Fb={}),a in P.Fb||(P.Fb[a]=1,console.log("FS.trackingDelegate error on read file: "+
a)));try{P.za.onOpenFile&&(f=0,1!==(b&2097155)&&(f|=P.fc.cc.ic),0!==(b&2097155)&&(f|=P.fc.cc.jc),P.za.onOpenFile(a,f))}catch(m){console.log("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+m.message)}return e},close:function(a){if(P.Wa(a))throw new P.oa(8);a.ub&&(a.ub=null);try{a.ra.close&&a.ra.close(a)}catch(b){throw b;}finally{P.pc(a.fd)}a.fd=null},Wa:function(a){return null===a.fd},Ea:function(a,b,d){if(P.Wa(a))throw new P.oa(8);if(!a.seekable||!a.ra.Ea)throw new P.oa(70);
if(0!=d&&1!=d&&2!=d)throw new P.oa(28);a.position=a.ra.Ea(a,b,d);a.Rc=[];return a.position},read:function(a,b,d,e,f){if(0>e||0>f)throw new P.oa(28);if(P.Wa(a))throw new P.oa(8);if(1===(a.flags&2097155))throw new P.oa(8);if(P.ya(a.node.mode))throw new P.oa(31);if(!a.ra.read)throw new P.oa(28);var h="undefined"!==typeof f;if(!h)f=a.position;else if(!a.seekable)throw new P.oa(70);b=a.ra.read(a,b,d,e,f);h||(a.position+=b);return b},write:function(a,b,d,e,f,h){if(0>e||0>f)throw new P.oa(28);if(P.Wa(a))throw new P.oa(8);
if(0===(a.flags&2097155))throw new P.oa(8);if(P.ya(a.node.mode))throw new P.oa(31);if(!a.ra.write)throw new P.oa(28);a.flags&1024&&P.Ea(a,0,2);var k="undefined"!==typeof f;if(!k)f=a.position;else if(!a.seekable)throw new P.oa(70);b=a.ra.write(a,b,d,e,f,h);k||(a.position+=b);try{if(a.path&&P.za.onWriteToFile)P.za.onWriteToFile(a.path)}catch(m){console.log("FS.trackingDelegate['onWriteToFile']('"+a.path+"') threw an exception: "+m.message)}return b},Ta:function(a,b,d){if(P.Wa(a))throw new P.oa(8);if(0>
b||0>=d)throw new P.oa(28);if(0===(a.flags&2097155))throw new P.oa(8);if(!P.isFile(a.node.mode)&&!P.ya(a.node.mode))throw new P.oa(43);if(!a.ra.Ta)throw new P.oa(138);a.ra.Ta(a,b,d)},Xa:function(a,b,d,e,f,h,k){if(0!==(h&2)&&0===(k&2)&&2!==(a.flags&2097155))throw new P.oa(2);if(1===(a.flags&2097155))throw new P.oa(2);if(!a.ra.Xa)throw new P.oa(43);return a.ra.Xa(a,b,d,e,f,h,k)},$a:function(a,b,d,e,f){return a&&a.ra.$a?a.ra.$a(a,b,d,e,f):0},md:function(){return 0},ac:function(a,b,d){if(!a.ra.ac)throw new P.oa(59);
return a.ra.ac(a,b,d)},readFile:function(a,b){b=b||{};b.flags=b.flags||"r";b.encoding=b.encoding||"binary";if("utf8"!==b.encoding&&"binary"!==b.encoding)throw Error('Invalid encoding type "'+b.encoding+'"');var d,e=P.open(a,b.flags);a=P.stat(a).size;var f=new Uint8Array(a);P.read(e,f,0,a,0);"utf8"===b.encoding?d=F(f,0):"binary"===b.encoding&&(d=f);P.close(e);return d},writeFile:function(a,b,d){d=d||{};d.flags=d.flags||"w";a=P.open(a,d.flags,d.mode);if("string"===typeof b){var e=new Uint8Array(ra(b)+
1);b=qa(b,e,0,e.length);P.write(a,e,0,b,void 0,d.nc)}else if(ArrayBuffer.isView(b))P.write(a,b,0,b.byteLength,void 0,d.nc);else throw Error("Unsupported data type");P.close(a)},cwd:function(){return P.Pb},chdir:function(a){a=P.va(a,{Ba:!0});if(null===a.node)throw new P.oa(44);if(!P.ya(a.node.mode))throw new P.oa(54);var b=P.Ka(a.node,"x");if(b)throw new P.oa(b);P.Pb=a.path},rc:function(){P.mkdir("/tmp");P.mkdir("/home");P.mkdir("/home/web_user")},qc:function(){P.mkdir("/dev");P.Hb(P.Ma(1,3),{read:function(){return 0},
write:function(a,b,d,k){return k}});P.lb("/dev/null",P.Ma(1,3));Ua(P.Ma(5,0),Wa);Ua(P.Ma(6,0),Xa);P.lb("/dev/tty",P.Ma(5,0));P.lb("/dev/tty1",P.Ma(6,0));if("object"===typeof crypto&&"function"===typeof crypto.getRandomValues){var a=new Uint8Array(1);var b=function(){crypto.getRandomValues(a);return a[0]}}else if(t)try{var d=require("crypto");b=function(){return d.randomBytes(1)[0]}}catch(e){}b||(b=function(){y("random_device")});P.Ja("/dev","random",b);P.Ja("/dev","urandom",b);P.mkdir("/dev/shm");
P.mkdir("/dev/shm/tmp")},tc:function(){P.mkdir("/proc");P.mkdir("/proc/self");P.mkdir("/proc/self/fd");P.wa({wa:function(){var a=P.createNode("/proc/self","fd",16895,73);a.qa={lookup:function(a,d){var b=P.Ua(+d);if(!b)throw new P.oa(8);a={parent:null,wa:{bc:"fake"},qa:{readlink:function(){return b.path}}};return a.parent=a}};return a}},{},"/proc/self/fd")},uc:function(){g.stdin?P.Ja("/dev","stdin",g.stdin):P.symlink("/dev/tty","/dev/stdin");g.stdout?P.Ja("/dev","stdout",null,g.stdout):P.symlink("/dev/tty",
"/dev/stdout");g.stderr?P.Ja("/dev","stderr",null,g.stderr):P.symlink("/dev/tty1","/dev/stderr");P.open("/dev/stdin","r");P.open("/dev/stdout","w");P.open("/dev/stderr","w")},Rb:function(){P.oa||(P.oa=function(a,b){this.node=b;this.Oc=function(a){this.ta=a};this.Oc(a);this.message="FS error"},P.oa.prototype=Error(),P.oa.prototype.constructor=P.oa,[44].forEach(function(a){P.tb[a]=new P.oa(a);P.tb[a].stack="<generic error, no stack>"}))},Pc:function(){P.Rb();P.Fa=Array(4096);P.wa(R,{},"/");P.rc();P.qc();
P.tc();P.wc={MEMFS:R}},Va:function(a,b,d){P.Va.wb=!0;P.Rb();g.stdin=a||g.stdin;g.stdout=b||g.stdout;g.stderr=d||g.stderr;P.uc()},quit:function(){P.Va.wb=!1;var a=g._fflush;a&&a(0);for(a=0;a<P.streams.length;a++){var b=P.streams[a];b&&P.close(b)}},hb:function(a,b){var d=0;a&&(d|=365);b&&(d|=146);return d},hd:function(a,b){a=Qa.apply(null,a);b&&"/"==a[0]&&(a=a.substr(1));return a},Wc:function(a,b){return O(b,a)},pd:function(a){return L(a)},dd:function(a,b){a=P.pb(a,b);if(a.exists)return a.object;Ra(a.error);
return null},pb:function(a,b){try{var d=P.va(a,{Ba:!b});a=d.path}catch(f){}var e={jb:!1,exists:!1,error:0,name:null,path:null,object:null,Jc:!1,Lc:null,Kc:null};try{d=P.va(a,{parent:!0}),e.Jc=!0,e.Lc=d.path,e.Kc=d.node,e.name=M(a),d=P.va(a,{Ba:!b}),e.exists=!0,e.path=d.path,e.object=d.node,e.name=d.node.name,e.jb="/"===d.path}catch(f){e.error=f.ta}return e},Zc:function(a,b,d,e){a=N("string"===typeof a?a:P.Ca(a),b);return P.mkdir(a,P.hb(d,e))},bd:function(a,b){a="string"===typeof a?a:P.Ca(a);for(b=
b.split("/").reverse();b.length;){var d=b.pop();if(d){var e=N(a,d);try{P.mkdir(e)}catch(f){}a=e}}return e},sc:function(a,b,d,e,f){a=N("string"===typeof a?a:P.Ca(a),b);return P.create(a,P.hb(e,f))},Ob:function(a,b,d,e,f,h){a=b?N("string"===typeof a?a:P.Ca(a),b):a;e=P.hb(e,f);f=P.create(a,e);if(d){if("string"===typeof d){a=Array(d.length);b=0;for(var k=d.length;b<k;++b)a[b]=d.charCodeAt(b);d=a}P.chmod(f,e|146);a=P.open(f,"w");P.write(a,d,0,d.length,0,h);P.close(a);P.chmod(f,e)}return f},Ja:function(a,
b,d,e){a=N("string"===typeof a?a:P.Ca(a),b);b=P.hb(!!d,!!e);P.Ja.zb||(P.Ja.zb=64);var f=P.Ma(P.Ja.zb++,0);P.Hb(f,{open:function(a){a.seekable=!1},close:function(){e&&e.buffer&&e.buffer.length&&e(10)},read:function(a,b,e,f){for(var h=0,k=0;k<f;k++){try{var m=d()}catch(la){throw new P.oa(29);}if(void 0===m&&0===h)throw new P.oa(6);if(null===m||void 0===m)break;h++;b[e+k]=m}h&&(a.node.timestamp=Date.now());return h},write:function(a,b,d,f){for(var h=0;h<f;h++)try{e(b[d+h])}catch(z){throw new P.oa(29);
}f&&(a.node.timestamp=Date.now());return h}});return P.lb(a,b,f)},ad:function(a,b,d){a=N("string"===typeof a?a:P.Ca(a),b);return P.symlink(d,a)},Ub:function(a){if(a.xb||a.Dc||a.link||a.pa)return!0;var b=!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(w)try{a.pa=Q(w(a.url),!0),a.ua=a.pa.length}catch(d){b=
!1}else throw Error("Cannot load without read() or XMLHttpRequest.");b||Ra(29);return b},$c:function(a,b,d,e,f){function h(){this.yb=!1;this.gb=[]}h.prototype.get=function(a){if(!(a>this.length-1||0>a)){var b=a%this.chunkSize;return this.Xb(a/this.chunkSize|0)[b]}};h.prototype.Nc=function(a){this.Xb=a};h.prototype.Mb=function(){var a=new XMLHttpRequest;a.open("HEAD",d,!1);a.send(null);if(!(200<=a.status&&300>a.status||304===a.status))throw Error("Couldn't load "+d+". Status: "+a.status);var b=Number(a.getResponseHeader("Content-length")),
e,f=(e=a.getResponseHeader("Accept-Ranges"))&&"bytes"===e;a=(e=a.getResponseHeader("Content-Encoding"))&&"gzip"===e;var h=1048576;f||(h=b);var k=this;k.Nc(function(a){var e=a*h,f=(a+1)*h-1;f=Math.min(f,b-1);if("undefined"===typeof k.gb[a]){var m=k.gb;if(e>f)throw Error("invalid range ("+e+", "+f+") or no bytes requested!");if(f>b-1)throw Error("only "+b+" bytes available! programmer error!");var r=new XMLHttpRequest;r.open("GET",d,!1);b!==h&&r.setRequestHeader("Range","bytes="+e+"-"+f);"undefined"!=
typeof Uint8Array&&(r.responseType="arraybuffer");r.overrideMimeType&&r.overrideMimeType("text/plain; charset=x-user-defined");r.send(null);if(!(200<=r.status&&300>r.status||304===r.status))throw Error("Couldn't load "+d+". Status: "+r.status);e=void 0!==r.response?new Uint8Array(r.response||[]):Q(r.responseText||"",!0);m[a]=e}if("undefined"===typeof k.gb[a])throw Error("doXHR failed!");return k.gb[a]});if(a||!b)h=b=1,h=b=this.Xb(0).length,console.log("LazyFiles on gzip forces download of the whole file when length is accessed");
this.lc=b;this.kc=h;this.yb=!0};if("undefined"!==typeof XMLHttpRequest){if(!q)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var k=new h;Object.defineProperties(k,{length:{get:function(){this.yb||this.Mb();return this.lc}},chunkSize:{get:function(){this.yb||this.Mb();return this.kc}}});k={xb:!1,pa:k}}else k={xb:!1,url:d};var m=P.sc(a,b,k,e,f);k.pa?m.pa=k.pa:k.url&&(m.pa=null,m.url=k.url);Object.defineProperties(m,{ua:{get:function(){return this.pa.length}}});
var v={};Object.keys(m.ra).forEach(function(a){var b=m.ra[a];v[a]=function(){if(!P.Ub(m))throw new P.oa(29);return b.apply(null,arguments)}});v.read=function(a,b,d,e,f){if(!P.Ub(m))throw new P.oa(29);a=a.node.pa;if(f>=a.length)return 0;e=Math.min(a.length-f,e);if(a.slice)for(var h=0;h<e;h++)b[d+h]=a[f+h];else for(h=0;h<e;h++)b[d+h]=a.get(f+h);return e};m.ra=v;return m},cd:function(a,b,d,e,f,h,k,m,v,r){function z(d){function z(d){r&&r();m||P.Ob(a,b,d,e,f,v);h&&h();Ha()}var la=!1;g.preloadPlugins.forEach(function(a){!la&&
a.canHandle(ka)&&(a.handle(d,ka,z,function(){k&&k();Ha()}),la=!0)});la||z(d)}(void 0).Va();var ka=b?O(N(a,b)):a;Ga();"string"==typeof d?(void 0).Yc(d,function(a){z(a)},k):z(d)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},Kb:function(){return"EM_FS_"+window.location.pathname},Lb:20,Ra:"FILE_DATA",od:function(a,b,d){b=b||function(){};d=d||function(){};var e=P.indexedDB();try{var f=e.open(P.Kb(),P.Lb)}catch(h){return d(h)}f.onupgradeneeded=
function(){console.log("creating db");f.result.createObjectStore(P.Ra)};f.onsuccess=function(){var e=f.result.transaction([P.Ra],"readwrite"),k=e.objectStore(P.Ra),m=0,v=0,r=a.length;a.forEach(function(a){a=k.put(P.pb(a).object.pa,a);a.onsuccess=function(){m++;m+v==r&&(0==v?b():d())};a.onerror=function(){v++;m+v==r&&(0==v?b():d())}});e.onerror=d};f.onerror=d},jd:function(a,b,d){b=b||function(){};d=d||function(){};var e=P.indexedDB();try{var f=e.open(P.Kb(),P.Lb)}catch(h){return d(h)}f.onupgradeneeded=
d;f.onsuccess=function(){var e=f.result;try{var k=e.transaction([P.Ra],"readonly")}catch(ka){d(ka);return}var m=k.objectStore(P.Ra),v=0,r=0,z=a.length;a.forEach(function(a){var e=m.get(a);e.onsuccess=function(){P.pb(a).exists&&P.unlink(a);P.Ob(Pa(a),M(a),e.result,!0,!0,!0);v++;v+r==z&&(0==r?b():d())};e.onerror=function(){r++;v+r==z&&(0==r?b():d())}});k.onerror=d};f.onerror=d}},Ya=511;
function Za(a,b,d){try{var e=a(b)}catch(f){if(f&&f.node&&L(b)!==L(P.Ca(f.node)))return-54;throw f;}C[d>>2]=e.dev;C[d+4>>2]=0;C[d+8>>2]=e.ino;C[d+12>>2]=e.mode;C[d+16>>2]=e.nlink;C[d+20>>2]=e.uid;C[d+24>>2]=e.gid;C[d+28>>2]=e.rdev;C[d+32>>2]=0;K=[e.size>>>0,(J=e.size,1<=+Aa(J)?0<J?(Da(+Ca(J/4294967296),4294967295)|0)>>>0:~~+Ba((J-+(~~J>>>0))/4294967296)>>>0:0)];C[d+40>>2]=K[0];C[d+44>>2]=K[1];C[d+48>>2]=4096;C[d+52>>2]=e.blocks;C[d+56>>2]=e.atime.getTime()/1E3|0;C[d+60>>2]=0;C[d+64>>2]=e.mtime.getTime()/
1E3|0;C[d+68>>2]=0;C[d+72>>2]=e.ctime.getTime()/1E3|0;C[d+76>>2]=0;K=[e.ino>>>0,(J=e.ino,1<=+Aa(J)?0<J?(Da(+Ca(J/4294967296),4294967295)|0)>>>0:~~+Ba((J-+(~~J>>>0))/4294967296)>>>0:0)];C[d+80>>2]=K[0];C[d+84>>2]=K[1];return 0}var S=0;function T(){S+=4;return C[S-4>>2]}function U(){return pa(T())}function V(a){void 0===a&&(a=T());a=P.Ua(a);if(!a)throw new P.oa(8);return a}var $a={};
function ab(){if(!bb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:aa},b;for(b in $a)a[b]=$a[b];var d=[];for(b in a)d.push(b+"="+a[b]);bb=d}return bb}var bb;qa("GMT",E,67216,4);
function cb(){function a(a){return(a=a.toTimeString().match(/\(([A-Za-z ]+)\)$/))?a[1]:"GMT"}if(!db){db=!0;C[eb()>>2]=60*(new Date).getTimezoneOffset();var b=(new Date).getFullYear(),d=new Date(b,0,1);b=new Date(b,6,1);C[fb()>>2]=Number(d.getTimezoneOffset()!=b.getTimezoneOffset());var e=a(d),f=a(b);e=ma(Q(e));f=ma(Q(f));b.getTimezoneOffset()<d.getTimezoneOffset()?(C[gb()>>2]=e,C[gb()+4>>2]=f):(C[gb()>>2]=f,C[gb()+4>>2]=e)}}var db;P.Pc();
function Q(a,b){var d=Array(ra(a)+1);a=qa(a,d,0,d.length);b&&(d.length=a);return d}
var ib={b:function(a){return na(a)},a:function(a){"uncaught_exception"in hb?hb.Oa++:hb.Oa=1;throw a;},z:function(a,b){S=b;try{var d=U();P.unlink(d);return 0}catch(e){return"undefined"!==typeof P&&e instanceof P.oa||y(e),-e.ta}},D:function(a,b){S=b;try{var d=U(),e=T();P.chmod(d,e);return 0}catch(f){return"undefined"!==typeof P&&f instanceof P.oa||y(f),-f.ta}},q:function(a,b){S=b;try{var d=T();T();var e=T();T();P.yc(d,e);return 0}catch(f){return"undefined"!==typeof P&&f instanceof P.oa||y(f),-f.ta}},
h:function(a,b){S=b;try{var d=U(),e=T();return Za(P.stat,d,e)}catch(f){return"undefined"!==typeof P&&f instanceof P.oa||y(f),-f.ta}},C:function(a,b){S=b;try{var d=U(),e=T();return Za(P.lstat,d,e)}catch(f){return"undefined"!==typeof P&&f instanceof P.oa||y(f),-f.ta}},t:function(a,b){S=b;try{var d=U(),e=T(),f=T();P.chown(d,e,f);return 0}catch(h){return"undefined"!==typeof P&&h instanceof P.oa||y(h),-h.ta}},r:function(a,b){S=b;return 42},v:function(a,b){S=b;try{var d=V(),e=T(),f=T();return P.read(d,
D,e,f)}catch(h){return"undefined"!==typeof P&&h instanceof P.oa||y(h),-h.ta}},s:function(a,b){S=b;try{var d=U();var e=T();if(e&-8)var f=-28;else{var h;(h=P.va(d,{Ba:!0}).node)?(a="",e&4&&(a+="r"),e&2&&(a+="w"),e&1&&(a+="x"),f=a&&P.Ka(h,a)?-2:0):f=-44}return f}catch(k){return"undefined"!==typeof P&&k instanceof P.oa||y(k),-k.ta}},g:function(a,b){S=b;try{var d=U(),e=T();a=d;a=L(a);"/"===a[a.length-1]&&(a=a.substr(0,a.length-1));P.mkdir(a,e,0);return 0}catch(f){return"undefined"!==typeof P&&f instanceof
P.oa||y(f),-f.ta}},x:function(a,b){S=b;try{var d=V(),e=T(),f=T();return P.write(d,D,e,f)}catch(h){return"undefined"!==typeof P&&h instanceof P.oa||y(h),-h.ta}},y:function(a,b){S=b;try{var d=U();P.rmdir(d);return 0}catch(e){return"undefined"!==typeof P&&e instanceof P.oa||y(e),-e.ta}},u:function(a,b){S=b;try{var d=V();return P.open(d.path,d.flags,0).fd}catch(e){return"undefined"!==typeof P&&e instanceof P.oa||y(e),-e.ta}},B:function(a,b){S=b;try{var d=U(),e=T(),f=T();return P.open(d,e,f).fd}catch(h){return"undefined"!==
typeof P&&h instanceof P.oa||y(h),-h.ta}},E:function(a,b){S=b;try{var d=T();a=Ya;Ya=d;return a}catch(e){return"undefined"!==typeof P&&e instanceof P.oa||y(e),-e.ta}},p:function(a,b){S=b;try{var d=U(),e=U();P.symlink(d,e);return 0}catch(f){return"undefined"!==typeof P&&f instanceof P.oa||y(f),-f.ta}},o:function(a,b){S=b;try{return T(),T(),-34}catch(d){return"undefined"!==typeof P&&d instanceof P.oa||y(d),-d.ta}},k:function(a,b,d){E.set(E.subarray(b,b+d),a)},l:function(){y("OOM")},m:function(a,b){var d=
0;ab().forEach(function(e,f){var h=b+d;f=C[a+4*f>>2]=h;for(h=0;h<e.length;++h)D[f++>>0]=e.charCodeAt(h);D[f>>0]=0;d+=e.length+1});return 0},n:function(a,b){var d=ab();C[a>>2]=d.length;var e=0;d.forEach(function(a){e+=a.length+1});C[b>>2]=e;return 0},A:function(a){try{var b=V(a);P.close(b);return 0}catch(d){return"undefined"!==typeof P&&d instanceof P.oa||y(d),d.ta}},w:function(a,b){try{var d=V(a);D[b>>0]=d.tty?2:P.ya(d.mode)?3:P.Pa(d.mode)?7:4;return 0}catch(e){return"undefined"!==typeof P&&e instanceof
P.oa||y(e),e.ta}},j:function(a,b,d,e,f){try{var h=V(a);a=4294967296*d+(b>>>0);if(-9007199254740992>=a||9007199254740992<=a)return-61;P.Ea(h,a,e);K=[h.position>>>0,(J=h.position,1<=+Aa(J)?0<J?(Da(+Ca(J/4294967296),4294967295)|0)>>>0:~~+Ba((J-+(~~J>>>0))/4294967296)>>>0:0)];C[f>>2]=K[0];C[f+4>>2]=K[1];h.ub&&0===a&&0===e&&(h.ub=null);return 0}catch(k){return"undefined"!==typeof P&&k instanceof P.oa||y(k),k.ta}},F:function(){return 0},c:function(){throw"getpwnam: TODO";},e:function(a){cb();a=new Date(1E3*
C[a>>2]);C[16792]=a.getSeconds();C[16793]=a.getMinutes();C[16794]=a.getHours();C[16795]=a.getDate();C[16796]=a.getMonth();C[16797]=a.getFullYear()-1900;C[16798]=a.getDay();var b=new Date(a.getFullYear(),0,1);C[16799]=(a.getTime()-b.getTime())/864E5|0;C[16801]=-(60*a.getTimezoneOffset());var d=(new Date(a.getFullYear(),6,1)).getTimezoneOffset();b=b.getTimezoneOffset();a=(d!=b&&a.getTimezoneOffset()==Math.min(b,d))|0;C[16800]=a;a=C[gb()+(a?4:0)>>2];C[16802]=a;return 67168},memory:ha,d:function(a){cb();
var b=new Date(C[a+20>>2]+1900,C[a+16>>2],C[a+12>>2],C[a+8>>2],C[a+4>>2],C[a>>2],0),d=C[a+32>>2],e=b.getTimezoneOffset(),f=new Date(b.getFullYear(),0,1),h=(new Date(b.getFullYear(),6,1)).getTimezoneOffset(),k=f.getTimezoneOffset(),m=Math.min(k,h);0>d?C[a+32>>2]=Number(h!=k&&m==e):0<d!=(m==e)&&(h=Math.max(k,h),b.setTime(b.getTime()+6E4*((0<d?m:h)-e)));C[a+24>>2]=b.getDay();C[a+28>>2]=(b.getTime()-f.getTime())/864E5|0;return b.getTime()/1E3|0},table:ia,i:function(a){var b=Date.now()/1E3|0;a&&(C[a>>
2]=b);return b},f:function(a,b){b?(b=C[b+4>>2],b*=1E3):b=Date.now();a=pa(a);try{return P.Sc(a,b,b),0}catch(d){return P.Bc(d),-1}}},jb=function(){function a(a){g.asm=a.exports;Ha()}function b(b){a(b.instance)}function d(a){return La().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);y(a)})}var e={env:ib,wasi_snapshot_preview1:ib};Ga();if(g.instantiateWasm)try{return g.instantiateWasm(e,a)}catch(f){return A("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||"function"!==typeof fetch)return d(b);fetch(I,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(b,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");d(b)})})})();return{}}();g.asm=jb;
var Ma=g.___wasm_call_ctors=function(){return g.asm.G.apply(null,arguments)},kb=g._emscripten_bind_RARHeaderDataEx_RARHeaderDataEx_0=function(){return g.asm.H.apply(null,arguments)},lb=g._emscripten_bind_RARHeaderDataEx_get_UnpSize_0=function(){return g.asm.I.apply(null,arguments)},mb=g._emscripten_bind_RARHeaderDataEx_set_UnpSize_1=function(){return g.asm.J.apply(null,arguments)},nb=g._emscripten_bind_RARHeaderDataEx_get_Flags_0=function(){return g.asm.K.apply(null,arguments)},ob=g._emscripten_bind_RARHeaderDataEx_set_Flags_1=
function(){return g.asm.L.apply(null,arguments)},pb=g._emscripten_bind_RARHeaderDataEx___destroy___0=function(){return g.asm.M.apply(null,arguments)},qb=g._emscripten_bind_RAROpenArchiveDataEx_RAROpenArchiveDataEx_0=function(){return g.asm.N.apply(null,arguments)},rb=g._emscripten_bind_RAROpenArchiveDataEx_get_ArcName_0=function(){return g.asm.O.apply(null,arguments)},sb=g._emscripten_bind_RAROpenArchiveDataEx_set_ArcName_1=function(){return g.asm.P.apply(null,arguments)},tb=g._emscripten_bind_RAROpenArchiveDataEx_get_OpenMode_0=
function(){return g.asm.Q.apply(null,arguments)},ub=g._emscripten_bind_RAROpenArchiveDataEx_set_OpenMode_1=function(){return g.asm.R.apply(null,arguments)},vb=g._emscripten_bind_RAROpenArchiveDataEx_get_Callback_0=function(){return g.asm.S.apply(null,arguments)},wb=g._emscripten_bind_RAROpenArchiveDataEx_set_Callback_1=function(){return g.asm.T.apply(null,arguments)},xb=g._emscripten_bind_RAROpenArchiveDataEx_get_OpenResult_0=function(){return g.asm.U.apply(null,arguments)},yb=g._emscripten_bind_RAROpenArchiveDataEx_set_OpenResult_1=
function(){return g.asm.V.apply(null,arguments)},zb=g._emscripten_bind_RAROpenArchiveDataEx_get_Flags_0=function(){return g.asm.W.apply(null,arguments)},Ab=g._emscripten_bind_RAROpenArchiveDataEx_set_Flags_1=function(){return g.asm.X.apply(null,arguments)},Bb=g._emscripten_bind_RAROpenArchiveDataEx___destroy___0=function(){return g.asm.Y.apply(null,arguments)},Cb=g._emscripten_bind_VoidPtr___destroy___0=function(){return g.asm.Z.apply(null,arguments)},Db=g._emscripten_bind_RARHeaderDataEx_get_FileNameW_0=
function(){return g.asm._.apply(null,arguments)},Eb=g._emscripten_bind_RARHeaderDataEx_set_FileNameW_1=function(){return g.asm.$.apply(null,arguments)};g._free=function(){return g.asm.aa.apply(null,arguments)};var na=g._malloc=function(){return g.asm.ba.apply(null,arguments)};g.___errno_location=function(){return g.asm.ca.apply(null,arguments)};g._RAROpenArchiveEx=function(){return g.asm.da.apply(null,arguments)};g._RARCloseArchive=function(){return g.asm.ea.apply(null,arguments)};
g._RARReadHeaderEx=function(){return g.asm.fa.apply(null,arguments)};g._RARProcessFileW=function(){return g.asm.ga.apply(null,arguments)};g._RARSetPassword=function(){return g.asm.ha.apply(null,arguments)};var gb=g.__get_tzname=function(){return g.asm.ia.apply(null,arguments)},fb=g.__get_daylight=function(){return g.asm.ja.apply(null,arguments)},eb=g.__get_timezone=function(){return g.asm.ka.apply(null,arguments)},hb=g.__ZSt18uncaught_exceptionv=function(){return g.asm.la.apply(null,arguments)};
g.stackAlloc=function(){return g.asm.ma.apply(null,arguments)};g.dynCall_vi=function(){return g.asm.na.apply(null,arguments)};g.asm=jb;g.UTF8ToString=pa;g.FS=P;
g.addFunction=function(a,b){var d=ia.length;try{ia.grow(1)}catch(m){if(!m instanceof RangeError)throw m;throw"Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH.";}try{ia.set(d,a)}catch(m){if(!m instanceof TypeError)throw m;assert("undefined"!==typeof b,"Missing signature argument to addFunction");if("function"===typeof WebAssembly.Function){for(var e={i:"i32",j:"i64",f:"f32",d:"f64"},f={parameters:[],results:"v"==b[0]?[]:[e[b[0]]]},h=1;h<b.length;++h)f.parameters.push(e[b[h]]);
a=new WebAssembly.Function(f,a)}else{e=[1,0,1,96];f=b.slice(0,1);b=b.slice(1);var k={i:127,j:126,f:125,d:124};e.push(b.length);for(h=0;h<b.length;++h)e.push(k[b[h]]);"v"==f?e.push(0):e=e.concat([1,k[f]]);e[1]=e.length-2;h=new Uint8Array([0,97,115,109,1,0,0,0].concat(e,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0]));h=new WebAssembly.Module(h);a=(new WebAssembly.Instance(h,{e:{f:a}})).exports.f}ia.set(d,a)}return d};g.removeFunction=function(){};var Fb;Fa=function Gb(){Fb||Hb();Fb||(Fa=Gb)};
function Hb(){function a(){if(!Fb&&(Fb=!0,!ja)){ya=!0;g.noFSInit||P.Va.wb||P.Va();ta(va);P.$b=!1;ta(wa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var a=g.postRun.shift();xa.unshift(a)}ta(xa)}}if(!(0<H)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)za();ta(ua);0<H||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},
1);a()},1)):a())}}g.run=Hb;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();Hb();function W(){}W.prototype=Object.create(W.prototype);W.prototype.constructor=W;W.prototype.Sa=W;W.fb={};g.WrapperObject=W;function Ib(a){return(a||W).fb}g.getCache=Ib;function Jb(a,b){var d=Ib(b),e=d[a];if(e)return e;e=Object.create((b||W).prototype);e.sa=a;return d[a]=e}g.wrapPointer=Jb;g.castObject=function(a,b){return Jb(a.sa,b)};g.NULL=Jb(0);
g.destroy=function(a){if(!a.__destroy__)throw"Error: Cannot destroy object. (Did you create it yourself?)";a.__destroy__();delete Ib(a.Sa)[a.sa]};g.compare=function(a,b){return a.sa===b.sa};g.getPointer=function(a){return a.sa};g.getClass=function(a){return a.Sa};
c={buffer:0,size:0,bb:0,nb:[],ab:0,dc:function(){if(c.ab){for(var a=0;a<c.nb.length;a++)g._free(c.nb[a]);c.nb.length=0;g._free(c.buffer);c.buffer=0;c.size+=c.ab;c.ab=0}c.buffer||(c.size+=128,c.buffer=g._malloc(c.size),assert(c.buffer));c.bb=0},ob:function(a,b){assert(c.buffer);a=a.length*b.BYTES_PER_ELEMENT;a=a+7&-8;c.bb+a>=c.size?(assert(0<a),c.ab+=a,b=g._malloc(a),c.nb.push(b)):(b=c.buffer+c.bb,c.bb+=a);return b},copy:function(a,b,d){switch(b.BYTES_PER_ELEMENT){case 2:d>>=1;break;case 4:d>>=2;break;
case 8:d>>=3}for(var e=0;e<a.length;e++)b[d+e]=a[e]}};function Kb(a){if("string"===typeof a){a=Q(a);var b=c.ob(a,D);c.copy(a,D,b);return b}return a}function X(){this.sa=kb();Ib(X)[this.sa]=this}X.prototype=Object.create(W.prototype);X.prototype.constructor=X;X.prototype.Sa=X;X.fb={};g.RARHeaderDataEx=X;X.prototype.get_FileNameW=X.prototype.Db=function(){return pa(Db(this.sa))};X.prototype.set_FileNameW=X.prototype.Ib=function(a){var b=this.sa;c.dc();a&&"object"===typeof a?a=a.sa:a=Kb(a);Eb(b,a)};
Object.defineProperty(X.prototype,"FileNameW",{get:X.prototype.Db,set:X.prototype.Ib});X.prototype.get_UnpSize=X.prototype.Eb=function(){return lb(this.sa)};X.prototype.set_UnpSize=X.prototype.Jb=function(a){var b=this.sa;a&&"object"===typeof a&&(a=a.sa);mb(b,a)};Object.defineProperty(X.prototype,"UnpSize",{get:X.prototype.Eb,set:X.prototype.Jb});X.prototype.get_Flags=X.prototype.Oa=function(){return nb(this.sa)};
X.prototype.set_Flags=X.prototype.Bb=function(a){var b=this.sa;a&&"object"===typeof a&&(a=a.sa);ob(b,a)};Object.defineProperty(X.prototype,"Flags",{get:X.prototype.Oa,set:X.prototype.Bb});X.prototype.__destroy__=function(){pb(this.sa)};function Y(){this.sa=qb();Ib(Y)[this.sa]=this}Y.prototype=Object.create(W.prototype);Y.prototype.constructor=Y;Y.prototype.Sa=Y;Y.fb={};g.RAROpenArchiveDataEx=Y;Y.prototype.get_ArcName=Y.prototype.Db=function(){return pa(rb(this.sa))};
Y.prototype.set_ArcName=Y.prototype.Qc=function(a){var b=this.sa;c.dc();a&&"object"===typeof a?a=a.sa:a=Kb(a);sb(b,a)};Object.defineProperty(Y.prototype,"ArcName",{get:Y.prototype.Db,set:Y.prototype.Qc});Y.prototype.get_OpenMode=Y.prototype.Ib=function(){return tb(this.sa)};Y.prototype.set_OpenMode=Y.prototype.Uc=function(a){var b=this.sa;a&&"object"===typeof a&&(a=a.sa);ub(b,a)};Object.defineProperty(Y.prototype,"OpenMode",{get:Y.prototype.Ib,set:Y.prototype.Uc});
Y.prototype.get_Callback=Y.prototype.Eb=function(){return vb(this.sa)};Y.prototype.set_Callback=Y.prototype.Tc=function(a){var b=this.sa;a&&"object"===typeof a&&(a=a.sa);wb(b,a)};Object.defineProperty(Y.prototype,"Callback",{get:Y.prototype.Eb,set:Y.prototype.Tc});Y.prototype.get_OpenResult=Y.prototype.Jb=function(){return xb(this.sa)};Y.prototype.set_OpenResult=Y.prototype.Vc=function(a){var b=this.sa;a&&"object"===typeof a&&(a=a.sa);yb(b,a)};
Object.defineProperty(Y.prototype,"OpenResult",{get:Y.prototype.Jb,set:Y.prototype.Vc});Y.prototype.get_Flags=Y.prototype.Oa=function(){return zb(this.sa)};Y.prototype.set_Flags=Y.prototype.Bb=function(a){var b=this.sa;a&&"object"===typeof a&&(a=a.sa);Ab(b,a)};Object.defineProperty(Y.prototype,"Flags",{get:Y.prototype.Oa,set:Y.prototype.Bb});Y.prototype.__destroy__=function(){Bb(this.sa)};function Z(){throw"cannot construct a VoidPtr, no constructor in IDL";}Z.prototype=Object.create(W.prototype);
Z.prototype.constructor=Z;Z.prototype.Sa=Z;Z.fb={};g.VoidPtr=Z;Z.prototype.__destroy__=function(){Cb(this.sa)};(function(){function a(){}ya||wa.unshift(a)})();g.ensureString=Kb;

//wcchoi Code:
/* ----------------
 * CONSTANTS (from dll.hpp)
 * --------------*/

"use strict";

var ERAR_SUCCESS            =  0
var ERAR_END_ARCHIVE        = 10
var ERAR_NO_MEMORY          = 11
var ERAR_BAD_DATA           = 12
var ERAR_BAD_ARCHIVE        = 13
var ERAR_UNKNOWN_FORMAT     = 14
var ERAR_EOPEN              = 15
var ERAR_ECREATE            = 16
var ERAR_ECLOSE             = 17
var ERAR_EREAD              = 18
var ERAR_EWRITE             = 19
var ERAR_SMALL_BUF          = 20
var ERAR_UNKNOWN            = 21
var ERAR_MISSING_PASSWORD   = 22
var ERAR_EREFERENCE         = 23
var ERAR_BAD_PASSWORD       = 24

var RAR_OM_LIST           = 0
var RAR_OM_EXTRACT        = 1
var RAR_OM_LIST_INCSPLIT  = 2

var RAR_SKIP          = 0
var RAR_TEST          = 1
var RAR_EXTRACT       = 2

var RAR_VOL_ASK       = 0
var RAR_VOL_NOTIFY    = 1

var RAR_DLL_VERSION   = 6

var RAR_HASH_NONE     = 0
var RAR_HASH_CRC32    = 1
var RAR_HASH_BLAKE2   = 2

var RHDF_SPLITBEFORE = 0x01
var RHDF_SPLITAFTER  = 0x02
var RHDF_ENCRYPTED   = 0x04
var RHDF_SOLID       = 0x10
var RHDF_DIRECTORY   = 0x20

var UCM_CHANGEVOLUME    = 0
var UCM_PROCESSDATA     = 1
var UCM_NEEDPASSWORD    = 2
var UCM_CHANGEVOLUMEW   = 3
var UCM_NEEDPASSWORDW   = 4

/* -----------------
 * Error Reporting
 * ----------------*/

var reportOpenError = function(code){
    switch(code) {
        case ERAR_NO_MEMORY:
            throw "Not enough memory to initialize data structures"
            break
        case ERAR_BAD_DATA:
            throw "Archive header broken"
            break
        case ERAR_UNKNOWN_FORMAT:
            throw "Unknown encryption used for archive headers"
            break
        case ERAR_EOPEN:
            throw "File open error"
            break
        case ERAR_BAD_PASSWORD:
            throw "Entered password is invalid. This code is returned only for archives in RAR 5.0 format"
            break
        case ERAR_BAD_ARCHIVE:
            throw "Bad archive"
            break
        default:
            throw "Unknown open error code"
            break
    }
}

var reportReadHeaderError = function(code){
    switch(code) {
        case ERAR_BAD_DATA:
            throw "File header broken"
            break
        case ERAR_MISSING_PASSWORD:
            throw "Password was not provided for encrypted file header"
            break
        case ERAR_BAD_PASSWORD:
            throw "Bad password"
            break
        default:
            throw "Unknown read header error code"
            break
    }
}

var reportProcessFileError = function(code){
    switch(code) {
        case ERAR_BAD_DATA:
            throw "File CRC error"
            break
        case ERAR_UNKNOWN_FORMAT:
            throw "Unknown archive format"
            break
        case ERAR_EOPEN:
            throw "Volume open error"
            break
        case ERAR_ECREATE:
            throw "File create error"
            break
        case ERAR_ECLOSE:
            throw "File close error"
            break
        case ERAR_EREAD:
            throw "Read error"
            break
        case ERAR_EWRITE:
            throw "Write error"
            break
        case ERAR_NO_MEMORY:
            throw "Not enough memory"
            break
        case ERAR_EREFERENCE:
            throw "When attempting to unpack a reference record (see RAR -oi switch), source file for this reference was not found. Entire archive needs to be unpacked to properly create file references. This error is returned when attempting to unpack the reference record without its source file."
            break
        case ERAR_BAD_PASSWORD:
            throw "Entered password is invalid. This code is returned only for archives in RAR 5.0 format"
            break
        case ERAR_MISSING_PASSWORD:
            throw "Missing password"
            break
        default:
            throw "Unknown Process File error code"
            break
    }
}

/*--------------------------
 * Actual extraction code
 *-------------------------*/

/**
 Get the content of file(s) inside a RAR archive or archives(for multi-part RAR)

 @param data: Array of {name:filename in string, content: typed array of file}
 In case of single RAR archive, data = [
 {name: 'test.rar', content: typed array for content of test.rar}
 ]
 In case of multi-part RAR, it would be like this:
 [
 {name: 'test.part1.rar', content: typed array for content of test.part1.rar},
 ...
 {name: 'test.partN.rar', content: typed array for content of test.partN.rar}
 ]
 @param password: string
 @param callbackFn: function(currFileName, currFileSize, currProcessed)
 It is used to show progress(of a single file only, whole archive progress not implemented)

 @return a JS Object representing the directory structure of the RAR archive content
 - Each directory is a map between the directory name and an object {type: 'dir', ls: {(file|directory map)}
	- Each file is a map between the file name and an object
	{type: 'file',
	fullFileName: full file name including the directory path,
	fileSize: file size,
	fileContent: typed array (UInt8) of file content}

	There is always an outtermost rootDirectory object
	Example:addFunction
	return value = {
		ls: {
			'fileA' : { type: 'file', fullFileName: ..., fileSize: ..., fileContent: ...},
			'subDirA' : { type: 'dir'
				ls: {
					'fileB' : {type: 'file' ....},
					'subsubdirC' : {type: 'dir',
							ls: { 'fileD' : {type: 'file' ... } }
					}
				}
			}
		}
	}
	for RAR file like this:
	/
	/fileA
	/subDirA/
	/subDirA/fileB
	/subDirA/subsubdirC/
	/subDirA/subsubdirC/fileD

	Use a recursive function to walk this structure, see index.html for example
 */

var readRARContent = function(data, password, callbackFn) {
    var data = data
    var password = password
    var callbackFn = callbackFn
    console.log("Current working directory: ",Module.FS.cwd())

    var returnVal = []

    var currVolumeIndex = 0

    // write the byte arrays to a file first
    // because the library operates on files
    // the canOwn flag reduces the memory usage
    for(var i = 0; i < data.length; i++) {
        Module.FS.writeFile(data[i].name, data[i].content, {encoding: "binary", canOwn: true, flags: 'w+'})
    }

    var arcData = new Module.RAROpenArchiveDataEx();
    arcData.set_ArcName(data[0].name)
    arcData.set_OpenMode(RAR_OM_EXTRACT)

    var cb = /*Runtime.*/Module.addFunction(function(msg, UserData, P1, P2){
        // volume change event
        if(msg === UCM_CHANGEVOLUMEW) return 0
        if(msg === UCM_CHANGEVOLUME){
            if(P2 === RAR_VOL_ASK) {
                return -1
            } else if(P2 === RAR_VOL_NOTIFY) {
                console.log('... volume is :', /*Pointer_stringify*/ Module.UTF8ToString(P1))
                return 1
            }
            throw "Unknown P2 value in volume change event"
        }

        if(msg === UCM_NEEDPASSWORDW) return 0
        if(msg === UCM_NEEDPASSWORD) {
            if(password) {
                writeStringToMemory(password, P1)
                return 1
            } else {
                return -1
            }
        }

        if(msg !== UCM_PROCESSDATA) {
            return -1 //abort operation
        }
        //additional callback function
        if(callbackFn){callbackFn(currFileName, currFileSize, currFileBufferEnd)}

        // directly access the HEAP
        var block = Module.HEAPU8.subarray(P1, P1+P2)
        var view = new Uint8Array(currFileBuffer, currFileBufferEnd, P2)
        view.set(block)
        currFileBufferEnd += P2

        return 1
    },'iiiii')
    arcData.set_Callback(cb);

    var cleanup = function(){
        // clean up
        Module._RARCloseArchive(handle)

        for(var i = 0; i < data.length; i++) {
            Module.FS.unlink(data[i].name)
        }
        /*Runtime.*/Module.removeFunction(cb)
    }


    var handle = Module._RAROpenArchiveEx(Module.getPointer(arcData))

    var or = arcData.get_OpenResult()
    if(or !== ERAR_SUCCESS || !handle) {
        cleanup()
        reportOpenError(or)
        return null
    }

    var ShowArcInfo = function(Flags) {
        // console.log("\nArchive %s\n",ArcName);
        console.log("Volume:\t\t%s",(Flags & 1) ? "yes":"no");
        console.log("Comment:\t%s",(Flags & 2) ? "yes":"no");
        console.log("Locked:\t\t%s",(Flags & 4) ? "yes":"no");
        console.log("Solid:\t\t%s",(Flags & 8) ? "yes":"no");
        console.log("New naming:\t%s",(Flags & 16) ? "yes":"no");
        console.log("Recovery:\t%s",(Flags & 64) ? "yes":"no");
        console.log("Encr.headers:\t%s",(Flags & 128) ? "yes":"no");
        console.log("First volume:\t%s",(Flags & 256) ? "yes":"no or older than 3.0");
        console.log("---------------------------\n");
    }

    ShowArcInfo(arcData.get_Flags())

    // open success
    if(password){
        Module._RARSetPassword(handle, Module.ensureString(password))
    }

    var header = new Module.RARHeaderDataEx();
    var res = Module._RARReadHeaderEx(handle, Module.getPointer(header));

    var currFileName
    var currFileSize
    var currFileBuffer
    var currFileBufferEnd
    var currFileFlags

    while(res === ERAR_SUCCESS){
        currFileName = header.get_FileNameW();//getFileName()
        console.log('filename: ', currFileName);
        currFileSize = header.get_UnpSize()
        currFileBuffer = new ArrayBuffer(currFileSize)
        currFileBufferEnd = 0

        currFileFlags = header.get_Flags()
        console.log("File continued from previous volume? ", currFileFlags&RHDF_SPLITBEFORE ?  'yes': 'no')
        console.log("File continued on next volume? ", currFileFlags&RHDF_SPLITAFTER ? 'yes': 'no')
        console.log("Previous files data is used (solid flag)? ", currFileFlags&RHDF_SOLID ? 'yes': 'no')

        // ***process file***
        // use RAR_TEST instead of RAR_EXTRACT
        // because there is some problem reading from
        // the extracted file in Emscripten file system
        var PFCode=Module._RARProcessFileW(handle,RAR_TEST,0,0);
        if(PFCode === ERAR_SUCCESS){
            returnVal.push({
                type: (currFileFlags & RHDF_DIRECTORY)?'dir':'file',
                fileName: currFileName,
                fileNameSplit: currFileName.split('/'),
                fileSize: currFileSize,
                content: new Uint8Array(currFileBuffer)
            })
        } else {
            cleanup()
            reportProcessFileError(PFCode)
            return null
        }
        res = Module._RARReadHeaderEx(handle, Module.getPointer(header));
    }
    console.log(res)
    if(res !== ERAR_END_ARCHIVE){
        cleanup()
        reportReadHeaderError(res)
        return null
    }

    cleanup()

    //build up a directory tree-like structure
    var dirs = returnVal.filter(function(en) { return en.type === 'dir' }).sort(function(a, b) { return a.fileNameSplit.length - b.fileNameSplit.length })

    var files = returnVal.filter(function(en) { return en.type === 'file' }).sort(function(a, b) { return a.fileNameSplit.length - b.fileNameSplit.length })

    var rootDir = {type: 'dir', ls: {}}
    var mkdir = function(path) {
        var dir = rootDir
        path.forEach(function(p) {
            if(!(p in dir.ls)) {
                dir.ls[p] = {
                    type: 'dir',
                    ls: {}
                }
            }
            dir = dir.ls[p]
        })
    }
    dirs.forEach(function(e){ mkdir(e.fileNameSplit) })

    var putFile = function(entry){
        var fileName = entry.fileNameSplit.pop()
        var dir = rootDir
        entry.fileNameSplit.forEach(function(p){
            dir = dir.ls[p]
        })
        dir.ls[fileName] = {
            type: 'file',
            fullFileName: entry.fileName,
            fileSize: entry.fileSize,
            fileContent: entry.content
        }
    }
    files.forEach(putFile)

    return rootDir
}

// export
if (typeof process === 'object' && typeof require === 'function') { // NODE
    module.exports = readRARContent;
} else if (typeof define === "function" && define.amd) { // AMD
    define('readRARContent', [], function () { return readRARContent; });
} else if (typeof window === 'object') { // WEB
    window['readRARContent'] = readRARContent;
} else if (typeof importScripts === 'function') { // WORKER
    this['readRARContent'] = readRARContent;
}


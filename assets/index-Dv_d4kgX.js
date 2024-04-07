import{r as Z,j as d,F as oe,w as ke,M as ce,o as Re,x as Oe,q as me,s as ue}from"./vendor-Ce-Gnf-x.js";import{f as Ae,u as Fe,a as je,b as De,A as Ie,L as Le,M as Me}from"./TransactionUtils-Dym-Wjot.js";import{G as Ne}from"./ApiBase-ConkYzvp.js";import"./index-DIhr6zDb.js";const Ue={account:"Account",creditCard:"Credit Card"},Pe={filter:!0,sortable:!0},ze=()=>[{headerName:"Date",field:"date",filter:"agDateColumnFilter",minWidth:120,valueFormatter:v=>Ae(v.value)},{headerName:"From",field:"accountType",minWidth:120,valueFormatter:v=>Ue[v.value]},{headerName:"Transaction",field:"transactionSource",minWidth:500},{headerName:"Amount",field:"amount",filter:"agNumberColumnFilter"},{headerName:"Category",field:"category",valueFormatter:v=>{var S;return((S=v.value)==null?void 0:S.name)??""}},{headerName:"Source",field:"source",valueFormatter:v=>{var S;return((S=v.value)==null?void 0:S.name)??""}}],Be=({month:v,year:S})=>{const[j]=Fe(S,v),c=Z.useMemo(()=>ze(),[]);return d.jsx(Ne,{defaultColDef:Pe,colDefs:c,rowData:j})},be=({options:v,selected:S,onSelect:j,ariaLabel:c})=>{const P=Z.useCallback(L=>{j(L.currentTarget.value)},[j]);return d.jsx(oe.Select,{value:S,"aria-label":c,onChange:P,children:v.map(({value:L,label:K},z)=>d.jsx("option",{value:L,children:K},`${L}${z}`))})},qe=({modalTitle:v,buttonText:S,children:j,onPrimaryAction:c,primaryButtonText:P})=>{const[L,K]=Z.useState(!1),z=()=>K(!1),u=()=>K(!0),ne=()=>{c(z)};return d.jsxs(d.Fragment,{children:[d.jsx(ke,{variant:"primary",size:"lg",onClick:u,children:S}),d.jsxs(ce,{size:"lg",backdrop:"static",show:L,onHide:z,keyboard:!1,children:[d.jsx(ce.Header,{closeButton:!0,children:d.jsx(ce.Title,{children:v})}),d.jsx(ce.Body,{children:j}),d.jsxs(ce.Footer,{children:[d.jsx(ke,{variant:"secondary",onClick:z,children:"Close"}),d.jsx(ke,{variant:"primary",onClick:ne,children:P})]})]})]})};var Te={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(v,S){(function(j,c){v.exports=c()})(Re,function j(){var c=typeof self<"u"?self:typeof window<"u"?window:c!==void 0?c:{},P=!c.document&&!!c.postMessage,L=c.IS_PAPA_WORKER||!1,K={},z=0,u={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(m(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!m(e.transform)&&e.transform,e.worker&&u.WORKERS_SUPPORTED){var n=function(){if(!u.WORKERS_SUPPORTED)return!1;var h=(D=c.URL||c.webkitURL||null,x=j.toString(),u.BLOB_URL||(u.BLOB_URL=D.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",x,")();"],{type:"text/javascript"})))),f=new c.Worker(h),D,x;return f.onmessage=Se,f.id=z++,K[f.id]=f}();return n.userStep=e.step,n.userChunk=e.chunk,n.userComplete=e.complete,n.userError=e.error,e.step=m(e.step),e.chunk=m(e.chunk),e.complete=m(e.complete),e.error=m(e.error),delete e.worker,void n.postMessage({input:t,config:e,workerId:n.id})}var s=null;return u.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),s=e.download?new de(e):new le(e)):t.readable===!0&&m(t.read)&&m(t.on)?s=new pe(e):(c.File&&t instanceof File||t instanceof Object)&&(s=new fe(e)),s.stream(t)},unparse:function(t,e){var r=!1,n=!0,s=",",h=`\r
`,f='"',D=f+f,x=!1,a=null,w=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||u.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(s=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(x=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(f=e.quoteChar),typeof e.header=="boolean"&&(n=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");a=e.columns}e.escapeChar!==void 0&&(D=e.escapeChar+f),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(w=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var l=new RegExp(he(f),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return Y(null,t,x);if(typeof t[0]=="object")return Y(a||Object.keys(t[0]),t,x)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||a),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),Y(t.fields||[],t.data||[],x);throw new Error("Unable to serialize unrecognized input");function Y(i,k,N){var E="";typeof i=="string"&&(i=JSON.parse(i)),typeof k=="string"&&(k=JSON.parse(k));var I=Array.isArray(i)&&0<i.length,A=!Array.isArray(k[0]);if(I&&n){for(var F=0;F<i.length;F++)0<F&&(E+=s),E+=M(i[F],F);0<k.length&&(E+=h)}for(var o=0;o<k.length;o++){var p=I?i.length:k[o].length,b=!1,O=I?Object.keys(k[o]).length===0:k[o].length===0;if(N&&!I&&(b=N==="greedy"?k[o].join("").trim()==="":k[o].length===1&&k[o][0].length===0),N==="greedy"&&I){for(var _=[],U=0;U<p;U++){var T=A?i[U]:U;_.push(k[o][T])}b=_.join("").trim()===""}if(!b){for(var y=0;y<p;y++){0<y&&!O&&(E+=s);var G=I&&A?i[y]:y;E+=M(k[o][G],y)}o<k.length-1&&(!N||0<p&&!O)&&(E+=h)}}return E}function M(i,k){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var N=!1;w&&typeof i=="string"&&w.test(i)&&(i="'"+i,N=!0);var E=i.toString().replace(l,D);return(N=N||r===!0||typeof r=="function"&&r(i,k)||Array.isArray(r)&&r[k]||function(I,A){for(var F=0;F<A.length;F++)if(-1<I.indexOf(A[F]))return!0;return!1}(E,u.BAD_DELIMITERS)||-1<E.indexOf(s)||E.charAt(0)===" "||E.charAt(E.length-1)===" ")?f+E+f:E}}};if(u.RECORD_SEP="",u.UNIT_SEP="",u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!P&&!!c.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=_e,u.ParserHandle=Ce,u.NetworkStreamer=de,u.FileStreamer=fe,u.StringStreamer=le,u.ReadableStreamStreamer=pe,c.jQuery){var ne=c.jQuery;ne.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(h){if(!(ne(this).prop("tagName").toUpperCase()==="INPUT"&&ne(this).attr("type").toLowerCase()==="file"&&c.FileReader)||!this.files||this.files.length===0)return!0;for(var f=0;f<this.files.length;f++)r.push({file:this.files[f],inputElem:this,instanceConfig:ne.extend({},e)})}),n(),this;function n(){if(r.length!==0){var h,f,D,x,a=r[0];if(m(t.before)){var w=t.before(a.file,a.inputElem);if(typeof w=="object"){if(w.action==="abort")return h="AbortError",f=a.file,D=a.inputElem,x=w.reason,void(m(t.error)&&t.error({name:h},f,D,x));if(w.action==="skip")return void s();typeof w.config=="object"&&(a.instanceConfig=ne.extend(a.instanceConfig,w.config))}else if(w==="skip")return void s()}var l=a.instanceConfig.complete;a.instanceConfig.complete=function(Y){m(l)&&l(Y,a.file,a.inputElem),s()},u.parse(a.file,a.instanceConfig)}else m(t.complete)&&t.complete()}function s(){r.splice(0,1),n()}}}function $(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var r=ye(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new Ce(r),(this._handle.streamer=this)._config=r}).call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&m(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);n!==void 0&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var h=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var f=h.meta.cursor;this._finished||(this._partialLine=s.substring(f-this._baseIndex),this._baseIndex=f),h&&h.data&&(this._rowCount+=h.data.length);var D=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(L)c.postMessage({results:h,workerId:u.WORKER_ID,finished:D});else if(m(this._config.chunk)&&!r){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!D||!m(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),D||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){m(this._config.error)?this._config.error(e):L&&this._config.error&&c.postMessage({workerId:u.WORKER_ID,error:e,finished:!1})}}function de(t){var e;(t=t||{}).chunkSize||(t.chunkSize=u.RemoteChunkSize),$.call(this,t),this._nextChunk=P?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),P||(e.onload=X(this._chunkLoaded,this),e.onerror=X(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!P),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var n in r)e.setRequestHeader(n,r[n])}if(this._config.chunkSize){var s=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+s)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}P&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var n=r.getResponseHeader("Content-Range");return n===null?-1:parseInt(n.substring(n.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var n=e.statusText||r;this._sendError(new Error(n))}}function fe(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=u.LocalChunkSize),$.call(this,t);var n=typeof FileReader<"u";this.stream=function(s){this._input=s,r=s.slice||s.webkitSlice||s.mozSlice,n?((e=new FileReader).onload=X(this._chunkLoaded,this),e.onerror=X(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var s=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);s=r.call(s,this._start,h)}var f=e.readAsText(s,this._config.encoding);n||this._chunkLoaded({target:{result:f}})},this._chunkLoaded=function(s){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(s.target.result)},this._chunkError=function(){this._sendError(e.error)}}function le(t){var e;$.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,n=this._config.chunkSize;return n?(r=e.substring(0,n),e=e.substring(n)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function pe(t){$.call(this,t=t||{});var e=[],r=!0,n=!1;this.pause=function(){$.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){$.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(s){this._input=s,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=X(function(s){try{e.push(typeof s=="string"?s:s.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=X(function(s){this._streamCleanUp(),this._sendError(s)},this),this._streamEnd=X(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=X(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function Ce(t){var e,r,n,s=Math.pow(2,53),h=-s,f=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,D=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,x=this,a=0,w=0,l=!1,Y=!1,M=[],i={data:[],errors:[],meta:{}};if(m(t.step)){var k=t.step;t.step=function(o){if(i=o,I())E();else{if(E(),i.data.length===0)return;a+=o.data.length,t.preview&&a>t.preview?r.abort():(i.data=i.data[0],k(i,x))}}}function N(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function E(){return i&&n&&(F("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),n=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(o){return!N(o)})),I()&&function(){if(!i)return;function o(b,O){m(t.transformHeader)&&(b=t.transformHeader(b,O)),M.push(b)}if(Array.isArray(i.data[0])){for(var p=0;I()&&p<i.data.length;p++)i.data[p].forEach(o);i.data.splice(0,1)}else i.data.forEach(o)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function o(b,O){var _,U=t.header?{}:[];for(_=0;_<b.length;_++){var T=_,y=b[_];t.header&&(T=_>=M.length?"__parsed_extra":M[_]),t.transform&&(y=t.transform(y,T)),y=A(T,y),T==="__parsed_extra"?(U[T]=U[T]||[],U[T].push(y)):U[T]=y}return t.header&&(_>M.length?F("FieldMismatch","TooManyFields","Too many fields: expected "+M.length+" fields but parsed "+_,w+O):_<M.length&&F("FieldMismatch","TooFewFields","Too few fields: expected "+M.length+" fields but parsed "+_,w+O)),U}var p=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(o),p=i.data.length):i.data=o(i.data,0),t.header&&i.meta&&(i.meta.fields=M),w+=p,i}()}function I(){return t.header&&M.length===0}function A(o,p){return b=o,t.dynamicTypingFunction&&t.dynamicTyping[b]===void 0&&(t.dynamicTyping[b]=t.dynamicTypingFunction(b)),(t.dynamicTyping[b]||t.dynamicTyping)===!0?p==="true"||p==="TRUE"||p!=="false"&&p!=="FALSE"&&(function(O){if(f.test(O)){var _=parseFloat(O);if(h<_&&_<s)return!0}return!1}(p)?parseFloat(p):D.test(p)?new Date(p):p===""?null:p):p;var b}function F(o,p,b,O){var _={type:o,code:p,message:b};O!==void 0&&(_.row=O),i.errors.push(_)}this.parse=function(o,p,b){var O=t.quoteChar||'"';if(t.newline||(t.newline=function(T,y){T=T.substring(0,1048576);var G=new RegExp(he(y)+"([^]*?)"+he(y),"gm"),B=(T=T.replace(G,"")).split("\r"),Q=T.split(`
`),J=1<Q.length&&Q[0].length<B[0].length;if(B.length===1||J)return`
`;for(var q=0,C=0;C<B.length;C++)B[C][0]===`
`&&q++;return q>=B.length/2?`\r
`:"\r"}(o,O)),n=!1,t.delimiter)m(t.delimiter)&&(t.delimiter=t.delimiter(o),i.meta.delimiter=t.delimiter);else{var _=function(T,y,G,B,Q){var J,q,C,R;Q=Q||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var ie=0;ie<Q.length;ie++){var g=Q[ie],ae=0,V=0,se=0;C=void 0;for(var ee=new _e({comments:B,delimiter:g,newline:y,preview:10}).parse(T),te=0;te<ee.data.length;te++)if(G&&N(ee.data[te]))se++;else{var re=ee.data[te].length;V+=re,C!==void 0?0<re&&(ae+=Math.abs(re-C),C=re):C=re}0<ee.data.length&&(V/=ee.data.length-se),(q===void 0||ae<=q)&&(R===void 0||R<V)&&1.99<V&&(q=ae,J=g,R=V)}return{successful:!!(t.delimiter=J),bestDelimiter:J}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);_.successful?t.delimiter=_.bestDelimiter:(n=!0,t.delimiter=u.DefaultDelimiter),i.meta.delimiter=t.delimiter}var U=ye(t);return t.preview&&t.header&&U.preview++,e=o,r=new _e(U),i=r.parse(e,p,b),E(),l?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,r.abort(),e=m(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){x.streamer._halted?(l=!1,x.streamer.parseChunk(e,!0)):setTimeout(x.resume,3)},this.aborted=function(){return Y},this.abort=function(){Y=!0,r.abort(),i.meta.aborted=!0,m(t.complete)&&t.complete(i),e=""}}function he(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _e(t){var e,r=(t=t||{}).delimiter,n=t.newline,s=t.comments,h=t.step,f=t.preview,D=t.fastMode,x=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(x=t.escapeChar),(typeof r!="string"||-1<u.BAD_DELIMITERS.indexOf(r))&&(r=","),s===r)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<u.BAD_DELIMITERS.indexOf(s))&&(s=!1),n!==`
`&&n!=="\r"&&n!==`\r
`&&(n=`
`);var a=0,w=!1;this.parse=function(l,Y,M){if(typeof l!="string")throw new Error("Input must be a string");var i=l.length,k=r.length,N=n.length,E=s.length,I=m(h),A=[],F=[],o=[],p=a=0;if(!l)return W();if(t.header&&!Y){var b=l.split(n)[0].split(r),O=[],_={},U=!1;for(var T in b){var y=b[T];m(t.transformHeader)&&(y=t.transformHeader(y,T));var G=y,B=_[y]||0;for(0<B&&(U=!0,G=y+"_"+B),_[y]=B+1;O.includes(G);)G=G+"_"+B;O.push(G)}if(U){var Q=l.split(n);Q[0]=O.join(r),l=Q.join(n)}}if(D||D!==!1&&l.indexOf(e)===-1){for(var J=l.split(n),q=0;q<J.length;q++){if(o=J[q],a+=o.length,q!==J.length-1)a+=n.length;else if(M)return W();if(!s||o.substring(0,E)!==s){if(I){if(A=[],se(o.split(r)),ge(),w)return W()}else se(o.split(r));if(f&&f<=q)return A=A.slice(0,f),W(!0)}}return W()}for(var C=l.indexOf(r,a),R=l.indexOf(n,a),ie=new RegExp(he(x)+he(e),"g"),g=l.indexOf(e,a);;)if(l[a]!==e)if(s&&o.length===0&&l.substring(a,a+E)===s){if(R===-1)return W();a=R+N,R=l.indexOf(n,a),C=l.indexOf(r,a)}else if(C!==-1&&(C<R||R===-1))o.push(l.substring(a,C)),a=C+k,C=l.indexOf(r,a);else{if(R===-1)break;if(o.push(l.substring(a,R)),re(R+N),I&&(ge(),w))return W();if(f&&A.length>=f)return W(!0)}else for(g=a,a++;;){if((g=l.indexOf(e,g+1))===-1)return M||F.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:A.length,index:a}),te();if(g===i-1)return te(l.substring(a,g).replace(ie,e));if(e!==x||l[g+1]!==x){if(e===x||g===0||l[g-1]!==x){C!==-1&&C<g+1&&(C=l.indexOf(r,g+1)),R!==-1&&R<g+1&&(R=l.indexOf(n,g+1));var ae=ee(R===-1?C:Math.min(C,R));if(l.substr(g+1+ae,k)===r){o.push(l.substring(a,g).replace(ie,e)),l[a=g+1+ae+k]!==e&&(g=l.indexOf(e,a)),C=l.indexOf(r,a),R=l.indexOf(n,a);break}var V=ee(R);if(l.substring(g+1+V,g+1+V+N)===n){if(o.push(l.substring(a,g).replace(ie,e)),re(g+1+V+N),C=l.indexOf(r,a),g=l.indexOf(e,a),I&&(ge(),w))return W();if(f&&A.length>=f)return W(!0);break}F.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:A.length,index:a}),g++}}else g++}return te();function se(H){A.push(H),p=a}function ee(H){var we=0;if(H!==-1){var ve=l.substring(g+1,H);ve&&ve.trim()===""&&(we=ve.length)}return we}function te(H){return M||(H===void 0&&(H=l.substring(a)),o.push(H),a=i,se(o),I&&ge()),W()}function re(H){a=H,se(o),o=[],R=l.indexOf(n,a)}function W(H){return{data:A,errors:F,meta:{delimiter:r,linebreak:n,aborted:w,truncated:!!H,cursor:p+(Y||0)}}}function ge(){h(W()),A=[],F=[]}},this.abort=function(){w=!0},this.getCharIndex=function(){return a}}function Se(t){var e=t.data,r=K[e.workerId],n=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){n=!0,xe(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:Ee,resume:Ee};if(m(r.userStep)){for(var h=0;h<e.results.data.length&&(r.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},s),!n);h++);delete e.results}else m(r.userChunk)&&(r.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!n&&xe(e.workerId,e.results)}function xe(t,e){var r=K[t];m(r.userComplete)&&r.userComplete(e),r.terminate(),delete K[t]}function Ee(){throw new Error("Not implemented.")}function ye(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=ye(t[r]);return e}function X(t,e){return function(){t.apply(e,arguments)}}function m(t){return typeof t=="function"}return L&&(c.onmessage=function(t){var e=t.data;if(u.WORKER_ID===void 0&&e&&(u.WORKER_ID=e.workerId),typeof e.input=="string")c.postMessage({workerId:u.WORKER_ID,results:u.parse(e.input,e.config),finished:!0});else if(c.File&&e.input instanceof File||e.input instanceof Object){var r=u.parse(e.input,e.config);r&&c.postMessage({workerId:u.WORKER_ID,results:r,finished:!0})}}),(de.prototype=Object.create($.prototype)).constructor=de,(fe.prototype=Object.create($.prototype)).constructor=fe,(le.prototype=Object.create(le.prototype)).constructor=le,(pe.prototype=Object.create($.prototype)).constructor=pe,u})})(Te);var We=Te.exports;const He=Oe(We),Ke=v=>new Promise((S,j)=>{He.parse(v,{skipEmptyLines:!0,complete:c=>{if(c.errors.length>0)j(c.errors);else{const P=je(c.data);S(P)}}})}),Ye=()=>{const v=De(),[S,j]=Z.useState(null),[c,P]=Z.useState(""),L=Z.useCallback(z=>{const u=z.currentTarget.files;u.length>0&&j(u.item(0))},[]),K=Z.useCallback(z=>{S&&c?Ke(S).then(u=>{v.mutateAsync({accountType:c,payload:u}).then(()=>{z()})}):alert("Please select file to upload")},[S,c,v]);return d.jsxs(qe,{modalTitle:"Upload Latest Transactions",buttonText:"Upload",primaryButtonText:"Upload",onPrimaryAction:K,children:[d.jsx(me,{className:"mb-4",children:d.jsx(ue,{children:d.jsxs(oe.Group,{controlId:"formFile",className:"mb-3",children:[d.jsx(oe.Label,{children:"Account type for transactions"}),d.jsx(be,{ariaLabel:"Account Type",selected:c,options:Ie,onSelect:z=>P(z)})]})})}),d.jsx(me,{className:"mb-4",children:d.jsx(ue,{children:d.jsxs(oe.Group,{controlId:"formFile",className:"mb-3",children:[d.jsx(oe.Label,{children:"Select CSV file"}),d.jsx(oe.Control,{type:"file",accept:"text/csv",onChange:L})]})})})]})},Ve=()=>{const[v,S]=Z.useState(""),[j,c]=Z.useState(""),P=L=>{c(""),S(L)};return d.jsxs(d.Fragment,{children:[d.jsx("h2",{children:"Transactions"}),d.jsxs(me,{className:"mb-4",children:[d.jsx(ue,{children:d.jsx(be,{ariaLabel:"Year selection",selected:v,options:Le,onSelect:P})}),d.jsx(ue,{children:d.jsx(be,{ariaLabel:"Month Selection",selected:j,options:Me,onSelect:L=>c(L)})}),d.jsx(ue,{className:"d-grid",children:d.jsx(Ye,{})})]}),d.jsx(me,{children:d.jsx(ue,{children:v&&j&&d.jsx(Be,{month:j,year:v})})})]})};export{Ve as default};

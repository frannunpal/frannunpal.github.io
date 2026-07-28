import{n as e,o as t,t as n}from"./rolldown-runtime-DAXXjFlN.js";import{n as r,t as i}from"./esm-C3pn5nPa.js";import{n as a,r as o,t as s}from"./middleware-jXAjsPUl.js";import{i as c}from"./getRuntime-DjWfaFoh.js";import{t as l}from"./iframe-wqeD3IfR.js";import{B as u,C as d,I as f,N as p,O as m,P as h,T as g,U as _,V as v,W as y,_ as b,a as x,d as S,h as C,j as w,k as T,l as E,m as D,o as O,r as k,s as A,t as j,x as M,y as ee,z as N}from"./webgl-device-C3jt3p-R.js";import{E as te,G as ne,Kt as re,Mt as ie,N as ae,O as oe,Rt as se,W as ce,Wt as le,Xt as ue,_t as de,a as fe,b as pe,bt as me,f as he,it as ge,lt as _e,r as ve,tn as ye,u as be,v as xe,w as Se,xt as Ce,zt as we}from"./three.module-iqQ2hC7r.js";var Te,Ee=e((()=>{ve(),Te=class e{_theta;thetaNeedsRecalc;r;matrix;constructor(e,t){this.r=e,this.matrix=t,this._theta=this.calculateTheta(),this.thetaNeedsRecalc=!1}static fromAngle(t){return new e(1,[Math.cos(t*4),Math.sin(t*4)])}static fromVector(t){let n=t.x**2-t.y**2,r=2*t.x*t.y,i=n**2-r**2,a=2*n*r;return new e(1,[i,a])}static get zero(){return new e(0,[0,0])}get theta(){return this.thetaNeedsRecalc&&=(this._theta=this.calculateTheta(),!1),this._theta}add(e,t){return this.matrix[0]=this.matrix[0]*this.r+e.matrix[0]*e.r,this.matrix[1]=this.matrix[1]*this.r+e.matrix[1]*e.r,t?(this.r=Math.hypot(this.matrix[0],this.matrix[1]),this.matrix[0]/=this.r,this.matrix[1]/=this.r):this.r=2,this.thetaNeedsRecalc=!0,this}scale(e){return this.r*=e,this.thetaNeedsRecalc=!0,this}rotate(e){if(e===0)return this;let t=this.theta+e;return t<Math.PI&&(t+=Math.PI),t>=Math.PI&&(t-=Math.PI),this.matrix[0]=Math.cos(2*t)*this.r,this.matrix[1]=Math.sin(2*t)*this.r,this._theta=t,this}getMajor(){return this.r===0?new ye(0,0):new ye(Math.cos(this.theta),Math.sin(this.theta))}getMinor(){if(this.r===0)return new ye(0,0);let e=this.theta+Math.PI/2;return new ye(Math.cos(e),Math.sin(e))}calculateTheta(){return this.r===0?0:Math.atan2(this.matrix[1]/this.r,this.matrix[0]/this.r)/2}clone(){return new e(this.r,[this.matrix[0],this.matrix[1]])}copy(e){return this.r=e.r,this.matrix[0]=e.matrix[0],this.matrix[1]=e.matrix[1],this._theta=e.theta,this.thetaNeedsRecalc=!1,this}equals(e){return this.r===e.r&&this.matrix[0]===e.matrix[0]&&this.matrix[1]===e.matrix[1]}}})),De,Oe,ke,Ae,je=e((()=>{Ee(),De={Grid:`Grid`,Radial:`Radial`},Oe=class{_centre;_size;_decay;constructor(e,t,n){this._centre=e.clone(),this._size=t,this._decay=n}get centre(){return this._centre.clone()}set centre(e){this._centre.copy(e)}get size(){return this._size}set size(e){this._size=e}get decay(){return this._decay}set decay(e){this._decay=e}getWeightedTensor(e,t){let n=this.getTensorWeight(e,t);return this.getTensor(e).scale(n)}getTensorWeight(e,t){let n=e.clone().sub(this._centre).length()/this._size;return t?n**-this._decay:this._decay===0&&n>=1?0:Math.max(0,1-n)**this._decay}moveCenter(e){this._centre.add(e)}},ke=class extends Oe{fieldType=De.Grid;_theta;constructor(e,t,n,r){super(e,t,n),this._theta=r}get theta(){return this._theta}set theta(e){this._theta=e}getTensor(e){return new Te(1,[Math.cos(2*this._theta),Math.sin(2*this._theta)])}},Ae=class extends Oe{fieldType=De.Radial;constructor(e,t,n){super(e,t,n)}getTensor(e){let t=e.clone().sub(this._centre);return new Te(1,[t.y**2-t.x**2,-2*t.x*t.y])}}}));function Me(e=Math.random){let t=Ne(e),n=new Float64Array(t).map(e=>ze[e%12*2]),r=new Float64Array(t).map(e=>ze[e%12*2+1]);return function(e,i){let a=0,o=0,s=0,c=(e+i)*Ie,l=Re(e+c),u=Re(i+c),d=(l+u)*Le,f=l-d,p=u-d,m=e-f,h=i-p,g,_;m>h?(g=1,_=0):(g=0,_=1);let v=m-g+Le,y=h-_+Le,b=m-1+2*Le,x=h-1+2*Le,S=l&255,C=u&255,w=.5-m*m-h*h;if(w>=0){let e=S+t[C],i=n[e],o=r[e];w*=w,a=w*w*(i*m+o*h)}let T=.5-v*v-y*y;if(T>=0){let e=S+g+t[C+_],i=n[e],a=r[e];T*=T,o=T*T*(i*v+a*y)}let E=.5-b*b-x*x;if(E>=0){let e=S+1+t[C+1],i=n[e],a=r[e];E*=E,s=E*E*(i*b+a*x)}return 70*(a+o+s)}}function Ne(e){let t=new Uint8Array(512);for(let e=0;e<512/2;e++)t[e]=e;for(let n=0;n<512/2-1;n++){let r=n+~~(e()*(256-n)),i=t[n];t[n]=t[r],t[r]=i}for(let e=256;e<512;e++)t[e]=t[e-256];return t}var Pe,Fe,Ie,Le,Re,ze,Be=e((()=>{Pe=Math.sqrt(3),Fe=Math.sqrt(5),Ie=.5*(Pe-1),Le=(3-Pe)/6,(Fe-1)/4,(5-Fe)/20,Re=e=>Math.floor(e)|0,ze=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1])})),Ve,He,Ue=e((()=>{Be(),Ee(),je(),Ve={globalNoise:!1,noiseSizePark:100,noiseAnglePark:45,noiseSizeGlobal:200,noiseAngleGlobal:30},He=class{basisFields=[];noise2D;parks=[];sea=[];river=[];ignoreRiver=!1;smooth=!1;noiseParams;constructor(e=Ve,t){this.noiseParams=e,this.noise2D=Me(t)}enableGlobalNoise(e,t){this.noiseParams.globalNoise=!0,this.noiseParams.noiseAngleGlobal=e,this.noiseParams.noiseSizeGlobal=t}disableGlobalNoise(){this.noiseParams.globalNoise=!1}addGrid(e,t,n,r){let i=new ke(e,t,n,r);this.addField(i)}addRadial(e,t,n){let r=new Ae(e,t,n);this.addField(r)}addField(e){this.basisFields.push(e)}removeField(e){let t=this.basisFields.indexOf(e);t>-1&&this.basisFields.splice(t,1)}reset(){this.basisFields=[],this.parks=[],this.sea=[],this.river=[]}getCentrePoints(){return this.basisFields.map(e=>e.centre)}getBasisFields(){return[...this.basisFields]}getGridFields(){return this.basisFields.filter(e=>e instanceof ke)}getRadialFields(){return this.basisFields.filter(e=>e instanceof Ae)}samplePoint(e){if(!this.onLand(e))return Te.zero;if(this.basisFields.length===0)return new Te(1,[1,0]);let t=Te.zero;for(let n of this.basisFields)t.add(n.getWeightedTensor(e,this.smooth),this.smooth);return this.inParks(e)&&t.rotate(this.getRotationalNoise(e,this.noiseParams.noiseSizePark,this.noiseParams.noiseAnglePark)),this.noiseParams.globalNoise&&t.rotate(this.getRotationalNoise(e,this.noiseParams.noiseSizeGlobal,this.noiseParams.noiseAngleGlobal)),t}onLand(e){return this.insidePolygon(e,this.sea)?!1:!this.ignoreRiver&&this.river.length>0?!this.insidePolygon(e,this.river):!0}inParks(e){for(let t of this.parks)if(this.insidePolygon(e,t))return!0;return!1}getRotationalNoise(e,t,n){return this.noise2D(e.x/t,e.y/t)*n*Math.PI/180}insidePolygon(e,t){if(t.length<3)return!1;let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r].x,o=t[r].y,s=t[i].x,c=t[i].y;o>e.y!=c>e.y&&e.x<(s-a)*(e.y-o)/(c-o)+a&&(n=!n)}return n}}}));function We(e){let t=3735928559,n=0,r=e.length;for(;n<r;){let r=e.charCodeAt(n++);r=r*3432918353>>>0,r=r<<15|r>>>17,r=r*461845907>>>0,t^=r,t=t<<13|t>>>19,t=t*5+3864292196>>>0}return t^=r,t^=t>>>16,t=t*2246822507>>>0,t^=t>>>13,t=t*3266489909>>>0,t^=t>>>16,t>>>0}function Ge(e){return function(){let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Ke,qe=e((()=>{Ke=class e{rng;seedValue;constructor(e){this.seedValue=typeof e==`string`?We(e):e,this.rng=Ge(this.seedValue)}get currentSeed(){return this.seedValue}next(){return this.rng()}nextInt(e,t){return Math.floor(this.next()*(t-e)+e)}nextFloat(e,t){return this.next()*(t-e)+e}nextBoolean(e=.5){return this.next()<e}pick(e){return e[this.nextInt(0,e.length)]}shuffle(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=this.nextInt(0,e+1);[t[e],t[n]]=[t[n],t[e]]}return t}weighted(e,t){let n=this.next(),r=0;for(let i=0;i<e.length;i++)if(r+=t[i],n<r)return e[i];return e[e.length-1]}distribution(e,t,n){switch(e){case`uniform`:return this.nextFloat(t,n);case`bimodal`:return this.nextBoolean()?this.nextFloat(t,t+(n-t)*.3):this.nextFloat(n-(n-t)*.3,n);case`exponential`:{let e=this.next();return t+(n-t)*(1-(1-e)**2)}default:return this.nextFloat(t,n)}}randomName(){return`${this.pick(`James.Mary.John.Patricia.Robert.Jennifer.Michael.Linda.William.Elizabeth.David.Barbara.Richard.Susan.Joseph.Jessica.Thomas.Sarah.Charles.Karen.Emma.Oliver.Ava.Noah.Sophia.Liam.Isabella.Mason.Mia.Ethan.Charlotte.Lucas.Amelia`.split(`.`))} ${this.pick(`Smith.Johnson.Williams.Brown.Jones.Garcia.Miller.Davis.Rodriguez.Martinez.Wilson.Anderson.Taylor.Thomas.Moore.Jackson.Martin.Lee.Thompson.White.Harris.Clark.Lewis.Robinson.Walker.Young.Allen.King.Wright.Scott.Green.Baker`.split(`.`))}`}clone(){return new e(this.seedValue)}}})),Je,Ye,Xe=e((()=>{Je=[{label:`Small (800×600)`,width:800,height:600},{label:`Medium (1024×768)`,width:1024,height:768},{label:`Large (1200×800)`,width:1200,height:800},{label:`HD (1920×1080)`,width:1920,height:1080}],Ye=Je[0]})),Ze,Qe=e((()=>{Ze={main:8,major:5,minor:2}}));function $e(e){if(e instanceof ke)return{type:`grid`,centre:nt(e.centre),size:e.size,decay:e.decay,theta:e.theta};if(e instanceof Ae)return{type:`radial`,centre:nt(e.centre),size:e.size,decay:e.decay};throw Error(`Unsupported BasisField type: ${e.fieldType}`)}function et(e,t){return{noiseParams:{...e.noiseParams},seedString:t,parks:e.parks.map(it),sea:it(e.sea),river:it(e.river),ignoreRiver:e.ignoreRiver,smooth:e.smooth,basisFields:e.getBasisFields().map($e)}}function tt(e){let t=new Ke(e.seedString),n=new He({...e.noiseParams},t.next.bind(t));for(let t of e.basisFields)t.type===`grid`?n.addField(new ke(rt(t.centre),t.size,t.decay,t.theta)):n.addField(new Ae(rt(t.centre),t.size,t.decay));return n.parks=e.parks.map(at),n.sea=at(e.sea),n.river=at(e.river),n.ignoreRiver=e.ignoreRiver,n.smooth=e.smooth,n}var nt,rt,it,at,ot=e((()=>{ve(),je(),Ue(),qe(),nt=e=>({x:e.x,y:e.y}),rt=e=>new ye(e.x,e.y),it=e=>e.map(nt),at=e=>e.map(rt)}));function st(e){let t=5381;for(let n=0;n<e.length;n++)t=(t<<5)+t+e.charCodeAt(n)>>>0;return t}function ct(e){return e%1e6/1e6}function lt(e){let t=st(e+`:lat`),n=st(e+`:lon`),r=ct(t),i=ct(n);return{lat:Math.round((r*135-60)*1e6)/1e6,lon:Math.round((i*360-180)*1e6)/1e6}}var ut=e((()=>{}));function dt(e,t){if(!e)throw Error(t||`loader assertion failed.`)}var ft=e((()=>{})),pt,mt,ht,gt=e((()=>{pt={self:typeof self<`u`&&self,window:typeof window<`u`&&window,global:typeof globalThis<`u`&&globalThis,document:typeof document<`u`&&document},pt.self||pt.window||pt.global,pt.window||pt.self||pt.global,pt.global||pt.self||pt.window,pt.document,mt=!!(typeof process!=`object`||String(process)!==`[object process]`||process.browser),ht=typeof process<`u`&&process.version&&/v([0-9]*)/.exec(process.version),ht&&parseFloat(ht[1])}));function _t(){let e=new v({id:`loaders.gl`});return globalThis.loaders||={},globalThis.loaders.log=e,globalThis.loaders.version=yt,globalThis.probe||={},globalThis.probe.loaders=e,e}var vt,yt,bt,xt=e((()=>{u(),vt=`4.4.3`,yt=`v${vt}`,bt=_t()})),St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft=e((()=>{St=e=>typeof e==`boolean`,Ct=e=>typeof e==`function`,wt=e=>typeof e==`object`&&!!e,Tt=e=>wt(e)&&e.constructor==={}.constructor,Et=e=>typeof SharedArrayBuffer<`u`&&e instanceof SharedArrayBuffer,Dt=e=>wt(e)&&typeof e.byteLength==`number`&&typeof e.slice==`function`,Ot=e=>!!e&&Ct(e[Symbol.iterator]),kt=e=>!!e&&Ct(e[Symbol.asyncIterator]),At=e=>typeof Response<`u`&&e instanceof Response||wt(e)&&Ct(e.arrayBuffer)&&Ct(e.text)&&Ct(e.json),jt=e=>typeof Blob<`u`&&e instanceof Blob,Mt=e=>typeof ReadableStream<`u`&&e instanceof ReadableStream||wt(e)&&Ct(e.tee)&&Ct(e.cancel)&&Ct(e.getReader),Nt=e=>wt(e)&&Ct(e.read)&&Ct(e.pipe)&&St(e.readable),Pt=e=>Mt(e)||Nt(e)}));function It(e,t){return Lt(e||{},t)}function Lt(e,t,n=0){if(n>3)return t;let r={...e};for(let[e,i]of Object.entries(t))i&&typeof i==`object`&&!Array.isArray(i)?r[e]=Lt(r[e]||{},t[e],n+1):r[e]=t[e];return r}var Rt=e((()=>{})),zt,Bt=e((()=>{zt=`latest`}));function Vt(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version=`4.4.3`),globalThis._loadersgl_.version}var Ht,Ut=e((()=>{Ht=Vt()}));function Wt(e,t){if(!e)throw Error(t||`loaders.gl assertion failed.`)}var Gt=e((()=>{})),Kt,qt,Jt,Yt,Xt=e((()=>{Kt={self:typeof self<`u`&&self,window:typeof window<`u`&&window,global:typeof globalThis<`u`&&globalThis,document:typeof document<`u`&&document},Kt.self||Kt.window||Kt.global,Kt.window||Kt.self||Kt.global,Kt.global||Kt.self||Kt.window,Kt.document,qt=typeof process!=`object`||String(process)!==`[object process]`||process.browser,Jt=typeof window<`u`&&window.orientation!==void 0,Yt=typeof process<`u`&&process.version&&/v([0-9]*)/.exec(process.version),Yt&&parseFloat(Yt[1])})),Zt,Qt=e((()=>{Gt(),Zt=class{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,t){this.name=e,this.workerThread=t,this.result=new Promise((e,t)=>{this._resolve=e,this._reject=t})}postMessage(e,t){this.workerThread.postMessage({source:`loaders.gl`,type:e,payload:t})}done(e){Wt(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){Wt(this.isRunning),this.isRunning=!1,this._reject(e)}}})),$t,en=e((()=>{$t=class{terminate(){}}}));function tn(e){Wt(e.source&&!e.url||!e.source&&e.url);let t=on.get(e.source||e.url);return t||(e.url&&(t=nn(e.url),on.set(e.url,t)),e.source&&(t=rn(e.source),on.set(e.source,t))),Wt(t),t}function nn(e){return e.startsWith(`http`)?rn(an(e)):e}function rn(e){let t=new Blob([e],{type:`application/javascript`});return URL.createObjectURL(t)}function an(e){return`\
try {
  importScripts('${e}');
} catch (error) {
  console.error(error);
  throw error;
}`}var on,sn=e((()=>{Gt(),on=new Map}));function cn(e,t=!0,n){let r=n||new Set;if(e){if(ln(e))r.add(e);else if(ln(e.buffer))r.add(e.buffer);else if(!ArrayBuffer.isView(e)&&t&&typeof e==`object`)for(let n in e)cn(e[n],t,r)}return n===void 0?Array.from(r):[]}function ln(e){return e?e instanceof ArrayBuffer||typeof MessagePort<`u`&&e instanceof MessagePort||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas:!1}var un=e((()=>{})),dn,fn,pn=e((()=>{en(),Xt(),Gt(),sn(),un(),dn=()=>{},fn=class{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL=``;static isSupported(){return typeof Worker<`u`&&qt||$t!==void 0&&!qt}constructor(e){let{name:t,source:n,url:r}=e;Wt(n||r),this.name=t,this.source=n,this.url=r,this.onMessage=dn,this.onError=e=>console.log(e),this.worker=qt?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=dn,this.onError=dn,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,t){t||=cn(e),this.worker.postMessage(e,t)}_getErrorFromErrorEvent(e){let t=`Failed to load `;return t+=`worker ${this.name} from ${this.url}. `,e.message&&(t+=`${e.message} in `),e.lineno&&(t+=`:${e.lineno}:${e.colno}`),Error(t)}_createBrowserWorker(){this._loadableURL=tn({source:this.source,url:this.url});let e=new Worker(this._loadableURL,{name:this.name});return e.onmessage=e=>{e.data?this.onMessage(e.data):this.onError(Error(`No data received`))},e.onerror=e=>{this.onError(this._getErrorFromErrorEvent(e)),this.terminated=!0},e.onmessageerror=e=>console.error(e),e}_createNodeWorker(){let e;if(this.url)e=new $t(this.url.includes(`:/`)||this.url.startsWith(`/`)?this.url:`./${this.url}`,{eval:!1,type:this.url.endsWith(`.ts`)||this.url.endsWith(`.mjs`)?`module`:`commonjs`});else if(this.source)e=new $t(this.source,{eval:!0});else throw Error(`no worker`);return e.on(`message`,e=>{this.onMessage(e)}),e.on(`error`,e=>{this.onError(e)}),e.on(`exit`,e=>{}),e}}})),mn,hn=e((()=>{Xt(),pn(),Qt(),mn=class{name=`unnamed`;source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return fn.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},e.name!==void 0&&(this.name=e.name),e.maxConcurrency!==void 0&&(this.maxConcurrency=e.maxConcurrency),e.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=e.maxMobileConcurrency),e.reuseWorkers!==void 0&&(this.reuseWorkers=e.reuseWorkers),e.onDebug!==void 0&&(this.onDebug=e.onDebug)}async startJob(e,t=(e,t,n)=>e.done(n),n=(e,t)=>e.error(t)){let r=new Promise(r=>(this.jobQueue.push({name:e,onMessage:t,onError:n,onStart:r}),this));return this._startQueuedJob(),await r}async _startQueuedJob(){if(!this.jobQueue.length)return;let e=this._getAvailableWorker();if(!e)return;let t=this.jobQueue.shift();if(t){this.onDebug({message:`Starting job`,name:t.name,workerThread:e,backlog:this.jobQueue.length});let n=new Zt(t.name,e);e.onMessage=e=>t.onMessage(n,e.type,e.payload),e.onError=e=>t.onError(n,e),t.onStart(n);try{await n.result}catch(e){console.error(`Worker exception: ${e}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!qt||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){return this.idleQueue.length>0?this.idleQueue.shift()||null:this.count<this._getMaxConcurrency()?(this.count++,new fn({name:`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`,source:this.source,url:this.url})):null}_getMaxConcurrency(){return Jt?this.maxMobileConcurrency:this.maxConcurrency}}})),gn,_n,vn=e((()=>{hn(),pn(),gn={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}},_n=class e{props;workerPools=new Map;static _workerFarm;static isSupported(){return fn.isSupported()}static getWorkerFarm(t={}){return e._workerFarm=e._workerFarm||new e({}),e._workerFarm.setProps(t),e._workerFarm}constructor(e){this.props={...gn},this.setProps(e),this.workerPools=new Map}destroy(){for(let e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(let e of this.workerPools.values())e.setProps(this._getWorkerPoolProps())}getWorkerPool(e){let{name:t,source:n,url:r}=e,i=this.workerPools.get(t);return i||(i=new mn({name:t,source:n,url:r}),i.setProps(this._getWorkerPoolProps()),this.workerPools.set(t,i)),i}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}}}));function yn(e,t={}){let n=t[e.id]||{},r=qt?`${e.id}-worker.js`:`${e.id}-worker-node.js`,i=n.workerUrl;if(!i&&e.id===`compression`&&(i=t.workerUrl),(t._workerType||t?.core?._workerType)===`test`&&(i=qt?`modules/${e.module}/dist/${r}`:`modules/${e.module}/src/workers/${e.id}-worker-node.ts`),!i){let t=e.version;t===`latest`&&(t=zt);let n=t?`@${t}`:``;i=`https://unpkg.com/@loaders.gl/${e.module}${n}/dist/${r}`}return Wt(i),i}var bn=e((()=>{Gt(),Xt(),Bt()}));function xn(e,t=Ht){Wt(e,`no worker provided`);let n=e.version;return!(!t||!n)}var Sn=e((()=>{Gt(),Ut()})),Cn=e((()=>{Gt(),Xt(),Qt(),pn(),vn(),hn(),en(),bn(),Sn(),Ut()}));function wn(e,t){if(!_n.isSupported())return!1;let n=t?._nodeWorkers??t?.core?._nodeWorkers;if(!qt&&!n)return!1;let r=t?.worker??t?.core?.worker;return!!(e.worker&&r)}async function Tn(e,t,n,r,i){let a=e.id,o=yn(e,n),s=_n.getWorkerFarm(n?.core).getWorkerPool({name:a,url:o});n=JSON.parse(JSON.stringify(n)),r=JSON.parse(JSON.stringify(r||{}));let c=await s.startJob(`process-on-worker`,En.bind(null,i));return c.postMessage(`process`,{input:t,options:n,context:r}),await(await c.result).result}async function En(e,t,n,r){switch(n){case`done`:t.done(r);break;case`error`:t.error(Error(r.error));break;case`process`:let{id:i,input:a,options:o}=r;try{let n=await e(a,o);t.postMessage(`done`,{id:i,result:n})}catch(e){let n=e instanceof Error?e.message:`unknown error`;t.postMessage(`error`,{id:i,error:n})}break;default:console.warn(`parse-with-worker unknown message ${n}`)}}var Dn=e((()=>{Cn()}));function On(e,t,n){if(n||=e.byteLength,e.byteLength<n||t.byteLength<n)return!1;let r=new Uint8Array(e),i=new Uint8Array(t);for(let e=0;e<r.length;++e)if(r[e]!==i[e])return!1;return!0}function kn(...e){return An(e)}function An(e){let t=e.map(e=>e instanceof ArrayBuffer?new Uint8Array(e):e),n=t.reduce((e,t)=>e+t.byteLength,0),r=new Uint8Array(n),i=0;for(let e of t)r.set(e,i),i+=e.byteLength;return r.buffer}var jn=e((()=>{}));async function Mn(e){let t=[];for await(let n of e)t.push(Nn(n));return kn(...t)}function Nn(e){if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:n,byteLength:r}=e;return Pn(t,n,r)}return Pn(e)}function Pn(e,t=0,n=e.byteLength-t){let r=new Uint8Array(e,t,n),i=new Uint8Array(r.length);return i.set(r),i.buffer}var Fn=e((()=>{jn()}));function In(e){for(let t in Rn)if(e.startsWith(t)){let n=Rn[t];e=e.replace(t,n)}return!e.startsWith(`http://`)&&!e.startsWith(`https://`)&&(e=`${Ln}${e}`),e}var Ln,Rn,zn=e((()=>{Ln=``,Rn={}}));function Bn(e){return e}var Vn=e((()=>{}));function Hn(e){return e&&typeof e==`object`&&e.isBuffer}function Un(e){if(Hn(e))return Bn(e);if(e instanceof ArrayBuffer)return e;if(Et(e))return Gn(e);if(ArrayBuffer.isView(e)){let t=e.buffer;return e.byteOffset===0&&e.byteLength===e.buffer.byteLength?t:t.slice(e.byteOffset,e.byteOffset+e.byteLength)}if(typeof e==`string`){let t=e;return new TextEncoder().encode(t).buffer}if(e&&typeof e==`object`&&e._toArrayBuffer)return e._toArrayBuffer();throw Error(`toArrayBuffer`)}function Wn(e){if(e instanceof ArrayBuffer)return e;if(Et(e))return Gn(e);let{buffer:t,byteOffset:n,byteLength:r}=e;return t instanceof ArrayBuffer&&n===0&&r===t.byteLength?t:Gn(t,n,r)}function Gn(e,t=0,n=e.byteLength-t){let r=new Uint8Array(e,t,n),i=new Uint8Array(r.length);return i.set(r),i.buffer}function Kn(e){return ArrayBuffer.isView(e)?e:new Uint8Array(e)}var qn=e((()=>{Ft(),Vn()}));function Jn(e){let t=e?e.lastIndexOf(`/`):-1;return t>=0?e.substr(t+1):e}function Yn(e){let t=e?e.lastIndexOf(`/`):-1;return t>=0?e.substr(0,t):``}var Xn=e((()=>{})),P=e((()=>{ft(),gt(),xt(),Ft(),Rt(),Cn(),Dn(),jn(),Fn(),zn(),qn(),Xn()})),Zn,Qn=e((()=>{Zn=class extends Error{constructor(e,t){super(e),this.reason=t.reason,this.url=t.url,this.response=t.response}reason;url;response}}));function $n(e,t){return e.toLowerCase()===t.toLowerCase()}function er(e){let t=rr.exec(e);return t?t[1]:e}function tr(e){let t=nr.exec(e);return t?t[1]:``}var nr,rr,ir=e((()=>{nr=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,rr=/^([-\w.]+\/[-\w.+]+)/}));function ar(e){let t=e.match(cr);return t&&t[0]}function or(e){return e.replace(cr,``)}function sr(e){if(e.length<50)return e;let t=e.slice(e.length-15);return`${e.substr(0,32)}...${t}`}var cr,lr=e((()=>{cr=/\?.*/}));function ur(e){return At(e)?e.url:jt(e)?(`name`in e?e.name:``)||``:typeof e==`string`?e:``}function dr(e){if(At(e)){let t=e.headers.get(`content-type`)||``,n=or(e.url);return er(t)||tr(n)}return jt(e)?e.type||``:typeof e==`string`?tr(e):``}function fr(e){return At(e)?e.headers[`content-length`]||-1:jt(e)?e.size:typeof e==`string`?e.length:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?e.byteLength:-1}var pr=e((()=>{P(),ir(),lr()}));async function mr(e){if(At(e))return e;let t={},n=fr(e);n>=0&&(t[`content-length`]=String(n));let r=ur(e),i=dr(e);i&&(t[`content-type`]=i);let a=await _r(e);a&&(t[`x-first-bytes`]=a),typeof e==`string`&&(e=new TextEncoder().encode(e));let o=new Response(e,{headers:t});return Object.defineProperty(o,"url",{value:r}),o}async function hr(e){if(!e.ok)throw await gr(e)}async function gr(e){let t=sr(e.url),n=`Failed to fetch resource (${e.status}) ${e.statusText}: ${t}`;n=n.length>100?`${n.slice(0,100)}...`:n;let r={reason:e.statusText,url:e.url,response:e};try{let t=e.headers.get(`Content-Type`);r.reason=!e.bodyUsed&&t?.includes(`application/json`)?await e.json():await e.text()}catch{}return new Zn(n,r)}async function _r(e){if(typeof e==`string`)return`data:,${e.slice(0,5)}`;if(e instanceof Blob){let t=e.slice(0,5);return await new Promise(e=>{let n=new FileReader;n.onload=t=>e(t?.target?.result),n.readAsDataURL(t)})}return e instanceof ArrayBuffer?`data:base64,${vr(e.slice(0,5))}`:null}function vr(e){let t=``,n=new Uint8Array(e);for(let e=0;e<n.byteLength;e++)t+=String.fromCharCode(n[e]);return btoa(t)}var yr=e((()=>{P(),Qn(),pr(),lr()}));function br(e){return!xr(e)&&!Sr(e)}function xr(e){return e.startsWith(`http:`)||e.startsWith(`https:`)}function Sr(e){return e.startsWith(`data:`)}async function Cr(e,t){if(typeof e==`string`){let n=In(e);return br(n)&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(n,t):await fetch(n,t)}return await mr(e)}var wr=e((()=>{P(),yr()})),Tr,Er,Dr,Or=e((()=>{u(),Tr=new v({id:`loaders.gl`}),Er=class{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}},Dr=class{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}}})),kr,Ar,jr=e((()=>{P(),Or(),kr={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new Dr,useLocalLibraries:!1,CDN:`https://unpkg.com/@loaders.gl`,worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:mt,_nodeWorkers:!1,_workerType:``,limit:0,_limitMB:0,batchSize:`auto`,batchDebounceMs:0,metadata:!1,transforms:[]}},Ar={baseUri:`core.baseUrl`,fetch:`core.fetch`,mimeType:`core.mimeType`,fallbackMimeType:`core.fallbackMimeType`,ignoreRegisteredLoaders:`core.ignoreRegisteredLoaders`,nothrow:`core.nothrow`,log:`core.log`,useLocalLibraries:`core.useLocalLibraries`,CDN:`core.CDN`,worker:`core.worker`,maxConcurrency:`core.maxConcurrency`,maxMobileConcurrency:`core.maxMobileConcurrency`,reuseWorkers:`core.reuseWorkers`,_nodeWorkers:`core.nodeWorkers`,_workerType:`core._workerType`,_worker:`core._workerType`,limit:`core.limit`,_limitMB:`core._limitMB`,batchSize:`core.batchSize`,batchDebounceMs:`core.batchDebounceMs`,metadata:`core.metadata`,transforms:`core.transforms`,throws:`nothrow`,dataType:`(no longer used)`,uri:`core.baseUrl`,method:`core.fetch.method`,headers:`core.fetch.headers`,body:`core.fetch.body`,mode:`core.fetch.mode`,credentials:`core.fetch.credentials`,cache:`core.fetch.cache`,redirect:`core.fetch.redirect`,referrer:`core.fetch.referrer`,referrerPolicy:`core.fetch.referrerPolicy`,integrity:`core.fetch.integrity`,keepalive:`core.fetch.keepalive`,signal:`core.fetch.signal`}}));function Mr(){globalThis.loaders=globalThis.loaders||{};let{loaders:e}=globalThis;return e._state||={},e._state}function Nr(){let e=Mr();return e.globalOptions=e.globalOptions||{...kr,core:{...kr.core}},Fr(e.globalOptions)}function Pr(e,t,n,r){return n||=[],n=Array.isArray(n)?n:[n],Ir(e,n),Fr(zr(t,e,r))}function Fr(e){let t=Hr(e);Ur(t);for(let e of Gr)t.core&&t.core[e]!==void 0&&delete t[e];return t.core&&t.core._workerType!==void 0&&delete t._worker,t}function Ir(e,t){Lr(e,null,kr,Ar,t);for(let n of t){let r=e&&e[n.id]||{},i=n.options&&n.options[n.id]||{},a=n.deprecatedOptions&&n.deprecatedOptions[n.id]||{};Lr(r,n.id,i,a,t)}}function Lr(e,t,n,r,i){let a=t||`Top level`,o=t?`${t}.`:``;for(let s in e){let c=!t&&wt(e[s]),l=s===`baseUri`&&!t,u=s===`workerUrl`&&t;if(!(s in n)&&!l&&!u){if(s in r)Tr.level>0&&Tr.warn(`${a} loader option \'${o}${s}\' no longer supported, use \'${r[s]}\'`)();else if(!c&&Tr.level>0){let e=Rr(s,i);Tr.warn(`${a} loader option \'${o}${s}\' not recognized. ${e}`)()}}}}function Rr(e,t){let n=e.toLowerCase(),r=``;for(let i of t)for(let t in i.options){if(e===t)return`Did you mean \'${i.id}.${t}\'?`;let a=t.toLowerCase();(n.startsWith(a)||a.startsWith(n))&&(r||=`Did you mean \'${i.id}.${t}\'?`)}return r}function zr(e,t,n){let r=e.options||{},i={...r};return r.core&&(i.core={...r.core}),Ur(i),i.core?.log===null&&(i.core={...i.core,log:new Er}),Br(i,Fr(Nr())),Br(i,Fr(t)),Vr(i,n),Wr(i),i}function Br(e,t){for(let n in t)if(n in t){let r=t[n];Tt(r)&&Tt(e[n])?e[n]={...e[n],...t[n]}:e[n]=t[n]}}function Vr(e,t){t&&e.core?.baseUrl===void 0&&(e.core||={},e.core.baseUrl=Yn(or(t)))}function Hr(e){let t={...e};return e.core&&(t.core={...e.core}),t}function Ur(e){e.baseUri!==void 0&&(e.core||={},e.core.baseUrl===void 0&&(e.core.baseUrl=e.baseUri));for(let t of Gr)if(e[t]!==void 0){let n=e.core=e.core||{};n[t]===void 0&&(n[t]=e[t])}let t=e._worker;t!==void 0&&(e.core||={},e.core._workerType===void 0&&(e.core._workerType=t))}function Wr(e){let t=e.core;if(t)for(let n of Gr)t[n]!==void 0&&(e[n]=t[n])}var Gr,Kr=e((()=>{P(),Or(),jr(),lr(),Gr=[`baseUrl`,`fetch`,`mimeType`,`fallbackMimeType`,`ignoreRegisteredLoaders`,`nothrow`,`log`,`useLocalLibraries`,`CDN`,`worker`,`maxConcurrency`,`maxMobileConcurrency`,`reuseWorkers`,`_nodeWorkers`,`_workerType`,`limit`,`_limitMB`,`batchSize`,`batchDebounceMs`,`metadata`,`transforms`]}));function qr(e){return e?(Array.isArray(e)&&(e=e[0]),Array.isArray(e?.extensions)):!1}function Jr(e){dt(e,`null loader`),dt(qr(e),`invalid loader`);let t;return Array.isArray(e)&&(t=e[1],e=e[0],e={...e,options:{...e.options,...t}}),(e?.parseTextSync||e?.parseText)&&(e.text=!0),e.text||(e.binary=!0),e}var Yr=e((()=>{P()}));function Xr(e){let t=Qr();e=Array.isArray(e)?e:[e];for(let n of e){let e=Jr(n);t.find(t=>e===t)||t.unshift(e)}}function Zr(){return Qr()}var Qr,$r=e((()=>{Yr(),Kr(),Qr=()=>{let e=Mr();return e.loaderRegistry=e.loaderRegistry||[],e.loaderRegistry}}));async function ei(e,t=[],n,r){if(!ii(e))return null;let i=Fr(n||{});if(i.core||={},e instanceof Response&&ti(e)){let n=ni(await e.clone().text(),t,{...i,core:{...i.core,nothrow:!0}},r);if(n)return n}let a=ni(e,t,{...i,core:{...i.core,nothrow:!0}},r);if(a)return a;if(jt(e)&&(e=await e.slice(0,10).arrayBuffer(),a=ni(e,t,i,r)),!a&&e instanceof Response&&ti(e)&&(a=ni(await e.clone().text(),t,i,r)),!a&&!i.core.nothrow)throw Error(ai(e));return a}function ti(e){let t=dr(e);return!!(t&&(t.startsWith(`text/`)||t===`application/json`||t.endsWith(`+json`)))}function ni(e,t=[],n,r){if(!ii(e))return null;let i=Fr(n||{});if(i.core||={},t&&!Array.isArray(t))return Jr(t);let a=[];t&&(a=a.concat(t)),i.core.ignoreRegisteredLoaders||a.push(...Zr()),oi(a);let o=ri(e,a,i,r);if(!o&&!i.core.nothrow)throw Error(ai(e));return o}function ri(e,t,n,r){let i=ur(e),a=dr(e),o=or(i)||r?.url,s=null,c=``;return n?.core?.mimeType&&(s=li(t,n?.core?.mimeType),c=`match forced by supplied MIME type ${n?.core?.mimeType}`),s||=si(t,o),c||=s?`matched url ${o}`:``,s||=li(t,a),c||=s?`matched MIME type ${a}`:``,s||=ui(t,e),c||=s?`matched initial data ${mi(e)}`:``,n?.core?.fallbackMimeType&&(s||=li(t,n?.core?.fallbackMimeType),c||=s?`matched fallback MIME type ${a}`:``),c&&bt.log(1,`selectLoader selected ${s?.name}: ${c}.`),s}function ii(e){return!(e instanceof Response&&e.status===204)}function ai(e){let t=ur(e),n=dr(e),r=`No valid loader found (`;r+=t?`${Jn(t)}, `:`no url provided, `,r+=`MIME type: ${n?`"${n}"`:`not provided`}, `;let i=e?mi(e):``;return r+=i?` first bytes: "${i}"`:`first bytes: not available`,r+=`)`,r}function oi(e){for(let t of e)Jr(t)}function si(e,t){let n=t&&gi.exec(t),r=n&&n[1];return r?ci(e,r):null}function ci(e,t){t=t.toLowerCase();for(let n of e)for(let e of n.extensions)if(e.toLowerCase()===t)return n;return null}function li(e,t){for(let n of e)if(n.mimeTypes?.some(e=>$n(t,e))||$n(t,`application/x.${n.id}`))return n;return null}function ui(e,t){if(!t)return null;for(let n of e)if(typeof t==`string`){if(di(t,n))return n}else if(ArrayBuffer.isView(t)){if(fi(t.buffer,t.byteOffset,n))return n}else if(t instanceof ArrayBuffer&&fi(t,0,n))return n;return null}function di(e,t){return t.testText?t.testText(e):(Array.isArray(t.tests)?t.tests:[t.tests]).some(t=>e.startsWith(t))}function fi(e,t,n){return(Array.isArray(n.tests)?n.tests:[n.tests]).some(r=>pi(e,t,n,r))}function pi(e,t,n,r){if(Dt(r))return On(r,e,r.byteLength);switch(typeof r){case`function`:return r(Wn(e));case`string`:return r===hi(e,t,r.length);default:return!1}}function mi(e,t=5){return typeof e==`string`?e.slice(0,t):ArrayBuffer.isView(e)?hi(e.buffer,e.byteOffset,t):e instanceof ArrayBuffer?hi(e,0,t):``}function hi(e,t,n){if(e.byteLength<t+n)return``;let r=new DataView(e),i=``;for(let e=0;e<n;e++)i+=String.fromCharCode(r.getUint8(t+e));return i}var gi,_i=e((()=>{P(),Yr(),Kr(),pr(),ir(),$r(),lr(),gi=/\.([^.]+)$/}));function*vi(e,t){let n=t?.chunkSize||yi,r=0,i=new TextEncoder;for(;r<e.length;){let t=Math.min(e.length-r,n),a=e.slice(r,r+t);r+=t,yield Wn(i.encode(a))}}var yi,bi=e((()=>{P(),yi=256*1024}));function*xi(e,t={}){let{chunkSize:n=Si}=t,r=0;for(;r<e.byteLength;){let t=Math.min(e.byteLength-r,n),i=new ArrayBuffer(t),a=new Uint8Array(e,r,t);new Uint8Array(i).set(a),r+=t,yield i}}var Si,Ci=e((()=>{Si=256*1024}));async function*wi(e,t){let n=t?.chunkSize||Ti,r=0;for(;r<e.size;){let t=r+n,i=await e.slice(r,t).arrayBuffer();r=t,yield i}}var Ti,Ei=e((()=>{Ti=1024*1024}));function Di(e,t){return mt?Oi(e,t):ki(e,t)}async function*Oi(e,t){let n=e.getReader(),r;try{for(;;){let e=r||n.read();t?._streamReadAhead&&(r=n.read());let{done:i,value:a}=await e;if(i)return;yield Un(a)}}catch{n.releaseLock()}}async function*ki(e,t){for await(let t of e)yield Un(t)}var Ai=e((()=>{P()}));function ji(e,t){if(typeof e==`string`)return vi(e,t);if(e instanceof ArrayBuffer)return xi(e,t);if(jt(e))return wi(e,t);if(Pt(e))return Di(e,t);if(At(e)){let n=e.body;if(!n)throw Error(`Readable stream not available on Response`);return Di(n,t)}throw Error(`makeIterator`)}var Mi=e((()=>{bi(),Ci(),Ei(),Ai(),P()}));function Ni(e,t,n){if(t.text&&typeof e==`string`)return e;if(Hn(e)&&(e=e.buffer),Dt(e)){let n=Kn(e);return t.text&&!t.binary?new TextDecoder(`utf8`).decode(n):Un(n)}throw Error(Fi)}async function Pi(e,t,n){if(typeof e==`string`||Dt(e))return Ni(e,t,n);if(jt(e)&&(e=await mr(e)),At(e))return await hr(e),t.binary?await e.arrayBuffer():await e.text();if(Pt(e)&&(e=ji(e,n)),Ot(e)||kt(e))return Mn(e);throw Error(Fi)}var Fi,Ii=e((()=>{P(),Mi(),yr(),Fi=`Cannot convert supplied data type`}));function Li(e,t){let n=Nr(),r=e||n,i=r.fetch??r.core?.fetch;return typeof i==`function`?i:wt(i)?e=>Cr(e,i):t?.fetch?t?.fetch:Cr}var Ri=e((()=>{P(),wr(),Kr()}));function zi(e,t,n){if(n)return n;let r={fetch:Li(t,e),...e};if(r.url){let e=or(r.url);r.baseUrl=e,r.queryString=ar(r.url),r.filename=Jn(e),r.baseUrl=Yn(e)}return Array.isArray(r.loaders)||(r.loaders=null),r}function Bi(e,t){if(e&&!Array.isArray(e))return e;let n;if(e&&(n=Array.isArray(e)?e:[e]),t&&t.loaders){let e=Array.isArray(t.loaders)?t.loaders:[t.loaders];n=n?[...n,...e]:e}return n&&n.length?n:void 0}var Vi=e((()=>{Ri(),lr(),P()}));async function Hi(e,t,n,r){t&&!Array.isArray(t)&&!qr(t)&&(r=void 0,n=t,t=void 0),e=await e,n||={};let i=ur(e),a=Bi(t,r),o=await ei(e,a,n);if(!o)return null;let s=Pr(n,o,a,i);return r=zi({url:i,_parse:Hi,loaders:a},s,r||null),await Ui(o,e,s,r)}async function Ui(e,t,n,r){if(xn(e),n=It(e.options,n),At(t)){let{ok:e,redirected:n,status:i,statusText:a,type:o,url:s}=t;r.response={headers:Object.fromEntries(t.headers.entries()),ok:e,redirected:n,status:i,statusText:a,type:o,url:s}}t=await Pi(t,e,n);let i=e;if(i.parseTextSync&&typeof t==`string`)return i.parseTextSync(t,n,r);if(wn(e,n))return await Tn(e,t,n,r,Hi);if(i.parseText&&typeof t==`string`)return await i.parseText(t,n,r);if(i.parse)return await i.parse(t,n,r);throw Wt(!i.parseSync),Error(`${e.id} loader - no parser found and worker is disabled`)}var Wi=e((()=>{P(),Cn(),Yr(),Kr(),Ii(),Vi(),pr(),_i()}));function Gi(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ki(e){return Array.isArray(e)?e.length===0||typeof e[0]==`number`:!1}function qi(e){return Gi(e)||Ki(e)}var Ji=e((()=>{})),Yi=e((()=>{Ji()}));async function Xi(e,t,n,r){let i,a;!Array.isArray(t)&&!qr(t)?(i=[],a=t,r=void 0):(i=t,a=n);let o=Li(a),s=e;return typeof e==`string`&&(s=await o(e)),jt(e)&&(s=await o(e)),typeof e==`string`&&(Fr(a||{}).core?.baseUrl||(a={...a,core:{...a?.core,baseUrl:e}})),await Hi(s,i,a)}var Zi=e((()=>{P(),Yr(),Ri(),Kr(),Wi()})),Qi=e((()=>{wr(),Qn(),Kr(),$r(),_i(),Wi(),Yr(),Ii(),Vi(),pr(),Yi(),P(),Zi(),Ri(),Cn(),Mi()})),$i,ea=e((()=>{$i=`4.4.3`}));function ta(e){switch(e){case`auto`:return aa||ia||oa;case`imagebitmap`:return aa;case`image`:return ia;case`data`:return oa;default:throw Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}function na(){if(aa)return`imagebitmap`;if(ia)return`image`;if(oa)return`data`;throw Error(`Install '@loaders.gl/polyfills' to parse images under Node.js`)}var ra,ia,aa,oa,sa=e((()=>{P(),ra=globalThis.loaders?.parseImageNode,ia=typeof Image<`u`,aa=typeof ImageBitmap<`u`,oa=mt?!0:!!ra}));function ca(e){let t=ua(e);if(!t)throw Error(`Not an image`);return t}function la(e){switch(ca(e)){case`data`:return e;case`image`:case`imagebitmap`:let t=document.createElement(`canvas`),n=t.getContext(`2d`);if(!n)throw Error(`getImageData`);return t.width=e.width,t.height=e.height,n.drawImage(e,0,0),n.getImageData(0,0,e.width,e.height);default:throw Error(`getImageData`)}}function ua(e){return typeof ImageBitmap<`u`&&e instanceof ImageBitmap?`imagebitmap`:typeof Image<`u`&&e instanceof Image?`image`:e&&typeof e==`object`&&e.data&&e.width&&e.height?`data`:null}var da=e((()=>{}));function fa(e){return e&&(ha.test(e)||ga.test(e))}function pa(e,t){if(fa(t)){let t=new TextDecoder().decode(e);try{typeof unescape==`function`&&typeof encodeURIComponent==`function`&&(t=unescape(encodeURIComponent(t)))}catch(e){throw Error(e.message)}return`data:image/svg+xml;base64,${btoa(t)}`}return ma(e,t)}function ma(e,t){if(fa(t))throw Error(`SVG cannot be parsed directly to imagebitmap`);return new Blob([new Uint8Array(e)])}var ha,ga,_a=e((()=>{ha=/^data:image\/svg\+xml/,ga=/\.svg((\?|#).*)?$/}));async function va(e,t,n){let r=pa(e,n),i=self.URL||self.webkitURL,a=typeof r!=`string`&&i.createObjectURL(r);try{return await ya(a||r,t)}finally{a&&i.revokeObjectURL(a)}}async function ya(e,t){let n=new Image;return n.src=e,t.image&&t.image.decode&&n.decode?(await n.decode(),n):await new Promise((e,t)=>{try{n.onload=()=>e(n),n.onerror=e=>{let n=e instanceof Error?e.message:`error`;t(Error(n))}}catch(e){t(e)}})}var ba=e((()=>{_a()}));async function xa(e,t,n){let r;r=fa(n)?await va(e,t,n):ma(e,n);let i=t&&t.imagebitmap;return await Sa(r,i)}async function Sa(e,t=null){if((Ca(t)||!wa)&&(t=null),t)try{return await createImageBitmap(e,t)}catch(e){console.warn(e),wa=!1}return await createImageBitmap(e)}function Ca(e){if(!e)return!0;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}var wa,Ta=e((()=>{_a(),ba(),wa=!0}));function Ea(e){return!Aa(e,`ftyp`,4)||!(e[8]&96)?null:Da(e)}function Da(e){switch(Oa(e,8,12).replace(`\0`,` `).trim()){case`avif`:case`avis`:return{extension:`avif`,mimeType:`image/avif`};default:return null}}function Oa(e,t,n){return String.fromCharCode(...e.slice(t,n))}function ka(e){return[...e].map(e=>e.charCodeAt(0))}function Aa(e,t,n=0){let r=ka(t);for(let t=0;t<r.length;++t)if(r[t]!==e[t+n])return!1;return!0}var ja=e((()=>{}));function Ma(e){let t=za(e);return Pa(t)||La(t)||Fa(t)||Ia(t)||Na(t)}function Na(e){let t=Ea(new Uint8Array(e instanceof DataView?e.buffer:e));return t?{mimeType:t.mimeType,width:0,height:0}:null}function Pa(e){let t=za(e);return t.byteLength>=24&&t.getUint32(0,Ba)===2303741511?{mimeType:`image/png`,width:t.getUint32(16,Ba),height:t.getUint32(20,Ba)}:null}function Fa(e){let t=za(e);return t.byteLength>=10&&t.getUint32(0,Ba)===1195984440?{mimeType:`image/gif`,width:t.getUint16(6,Va),height:t.getUint16(8,Va)}:null}function Ia(e){let t=za(e);return t.byteLength>=14&&t.getUint16(0,Ba)===16973&&t.getUint32(2,Va)===t.byteLength?{mimeType:`image/bmp`,width:t.getUint32(18,Va),height:t.getUint32(22,Va)}:null}function La(e){let t=za(e);if(!(t.byteLength>=3&&t.getUint16(0,Ba)===65496&&t.getUint8(2)===255))return null;let{tableMarkers:n,sofMarkers:r}=Ra(),i=2;for(;i+9<t.byteLength;){let e=t.getUint16(i,Ba);if(r.has(e))return{mimeType:`image/jpeg`,height:t.getUint16(i+5,Ba),width:t.getUint16(i+7,Ba)};if(!n.has(e))return null;i+=2,i+=t.getUint16(i,Ba)}return null}function Ra(){let e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);return{tableMarkers:e,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function za(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw Error(`toDataView`)}var Ba,Va,Ha=e((()=>{ja(),Ba=!1,Va=!0}));async function Ua(e,t){let{mimeType:n}=Ma(e)||{},r=globalThis.loaders?.parseImageNode;return dt(r),await r(e,n)}var Wa=e((()=>{P(),Ha()}));async function Ga(e,t,n){t||={};let r=(t.image||{}).type||`auto`,{url:i}=n||{},a=Ka(r),o;switch(a){case`imagebitmap`:o=await xa(e,t,i);break;case`image`:o=await va(e,t,i);break;case`data`:o=await Ua(e,t);break;default:dt(!1)}return r===`data`&&(o=la(o)),o}function Ka(e){switch(e){case`auto`:case`data`:return na();default:return ta(e),e}}var qa=e((()=>{P(),sa(),da(),ba(),Ta(),Wa()})),Ja,Ya,Xa,Za,Qa=e((()=>{ea(),qa(),Ha(),Ja=[`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`ico`,`svg`,`avif`],Ya=[`image/png`,`image/jpeg`,`image/gif`,`image/webp`,`image/avif`,`image/bmp`,`image/vnd.microsoft.icon`,`image/svg+xml`],Xa={image:{type:`auto`,decode:!0}},Za={dataType:null,batchType:null,id:`image`,module:`images`,name:`Images`,version:$i,mimeTypes:Ya,extensions:Ja,parse:Ga,tests:[e=>!!Ma(new DataView(e))],options:Xa}})),$a=e((()=>{Qa(),ea(),Ha(),sa(),P()})),F,I=e((()=>{u(),F=new v({id:`deck`})}));function eo(e){to=e}function L(e,t,n,r){F.level>0&&to[e]&&to[e].call(null,t,n,r)}var to,no=e((()=>{I(),to={}}));function ro(e){let t=e[0],n=e[e.length-1];return t===`{`&&n===`}`||t===`[`&&n===`]`}var io,ao=e((()=>{io={dataType:null,batchType:null,id:`JSON`,name:`JSON`,module:``,version:``,options:{},extensions:[`json`,`geojson`],mimeTypes:[`application/json`,`application/geo+json`],testText:ro,parseTextSync:JSON.parse}}));function oo(){let e=`9.3.7`,t=globalThis.deck&&globalThis.deck.VERSION;if(t&&t!==e)throw Error(`deck.gl - multiple versions detected: ${t} vs ${e}`);return t||(F.log(1,`deck.gl ${e}`)(),globalThis.deck={...globalThis.deck,VERSION:e,version:e,log:F,_registerLoggers:eo},Xr([io,[Za,{imagebitmap:{premultiplyAlpha:`none`}}]])),e}var so,co=e((()=>{Qi(),$a(),I(),no(),ao(),so=oo()}));function lo(e,t){if(!e){let e=Error(t||`shadertools: assertion failed.`);throw Error.captureStackTrace?.(e,lo),e}}var uo=e((()=>{}));function fo(e){let t={};for(let[n,r]of Object.entries(e))t[n]=po(r);return t}function po(e){let t=mo(e);if(t!==`object`)return{value:e,...ho[t],type:t};if(typeof e==`object`)return e?e.type===void 0?e.value===void 0?{type:`object`,value:e}:(t=mo(e.value),{...e,...ho[t],type:t}):{...e,...ho[e.type],type:e.type}:{type:`object`,value:null};throw Error(`props`)}function mo(e){return Array.isArray(e)||ArrayBuffer.isView(e)?`array`:typeof e}var ho,go=e((()=>{ho={number:{type:`number`,validate(e,t){return Number.isFinite(e)&&typeof t==`object`&&(t.max===void 0||e<=t.max)&&(t.min===void 0||e>=t.min)}},array:{type:`array`,validate(e,t){return Array.isArray(e)||ArrayBuffer.isView(e)}}}})),_o,vo,yo=e((()=>{_o=`#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,vo=`#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`}));function bo(e){let t={vertex:{},fragment:{}};for(let n in e){let r=e[n],i=xo(n);typeof r==`string`&&(r={order:0,injection:r}),t[i][n]=r}return t}function xo(e){let t=e.slice(0,2);switch(t){case`vs`:return`vertex`;case`fs`:return`fragment`;default:throw Error(t)}}function So(e,t,n,r=!1){let i=t===`vertex`;for(let t in n){let r=n[t];r.sort((e,t)=>e.order-t.order),Eo.length=r.length;for(let e=0,t=r.length;e<t;++e)Eo[e]=r[e].injection;let a=`${Eo.join(`
`)}\n`;switch(t){case`vs:#decl`:i&&(e=e.replace(Do,a));break;case`vs:#main-start`:i&&(e=e.replace(wo,e=>e+a));break;case`vs:#main-end`:i&&(e=e.replace(To,e=>a+e));break;case`fs:#decl`:i||(e=e.replace(Do,a));break;case`fs:#main-start`:i||(e=e.replace(wo,e=>e+a));break;case`fs:#main-end`:i||(e=e.replace(To,e=>a+e));break;default:e=e.replace(t,e=>e+a)}}return e=e.replace(Do,``),r&&(e=e.replace(/\}\s*$/,e=>e+Co[t])),e}var Co,wo,To,Eo,Do,Oo=e((()=>{yo(),Co={vertex:_o,fragment:vo},wo=/void\s+main\s*\([^)]*\)\s*\{\n?/,To=/}\n?[^{}]*$/,Eo=[],Do=`__LUMA_INJECT_DECLARATIONS__`}));function ko(e){e.map(e=>Ao(e))}function Ao(e){if(e.instance)return;ko(e.dependencies||[]);let{propTypes:t={},deprecations:n=[],inject:r={}}=e,i={normalizedInjections:bo(r),parsedDeprecations:Mo(n)};t&&(i.propValidators=fo(t)),e.instance=i;let a={};t&&(a=Object.entries(t).reduce((e,[t,n])=>{let r=n?.value;return r&&(e[t]=r),e},{})),e.defaultUniforms={...e.defaultUniforms,...a}}function jo(e,t,n){e.deprecations?.forEach(e=>{e.regex?.test(t)&&(e.deprecated?n.deprecated(e.old,e.new)():n.removed(e.old,e.new)())})}function Mo(e){return e.forEach(e=>{switch(e.type){case`function`:e.regex=RegExp(`\\b${e.old}\\(`);break;default:e.regex=RegExp(`${e.type} ${e.old};`)}}),e}var No=e((()=>{go(),Oo()}));function Po(e){ko(e);let t={},n={};Fo({modules:e,level:0,moduleMap:t,moduleDepth:n});let r=Object.keys(n).sort((e,t)=>n[t]-n[e]).map(e=>t[e]);return ko(r),r}function Fo(e){let{modules:t,level:n,moduleMap:r,moduleDepth:i}=e;if(n>=5)throw Error(`Possible loop in shader dependency graph`);for(let e of t)r[e.name]=e,(i[e.name]===void 0||i[e.name]<n)&&(i[e.name]=n);for(let e of t)e.dependencies&&Fo({modules:e.dependencies,level:n+1,moduleMap:r,moduleDepth:i})}var Io=e((()=>{No()}));function Lo(e){return`${e.name}Uniforms`}function Ro(e,t){let n=t===`wgsl`?e.source:t===`vertex`?e.vs:e.fs;if(!n)return null;let r=Lo(e);return Uo(n,t===`wgsl`?`wgsl`:`glsl`,r)}function zo(e,t){let n=Object.keys(e.uniformTypes||{});if(!n.length)return null;let r=Ro(e,t);return r?{moduleName:e.name,uniformBlockName:Lo(e),stage:t,expectedUniformNames:n,actualUniformNames:r,matches:Ko(n,r)}:null}function Bo(e,t,n={}){let r=zo(e,t);if(!r||r.matches)return r;let i=qo(r);return n.log?.error?.(i,r)(),n.throwOnError!==!1&&lo(!1,i),r}function Vo(e){let t=[],n=Jo(e);for(let e of n.matchAll($o)){let n=e[1]?.trim()||null;t.push({blockName:e[2],body:e[3],instanceName:e[4]||null,layoutQualifier:n,hasLayoutQualifier:!!n,isStd140:!!(n&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(n))})}return t}function Ho(e,t,n,r){let i=Vo(e).filter(e=>!e.isStd140),a=new Set;for(let e of i){if(a.has(e.blockName))continue;a.add(e.blockName);let i=r?.label?`${r.label} `:``,o=e.hasLayoutQualifier?`declares ${Yo(e.layoutQualifier)} instead of layout(std140)`:`does not declare layout(std140)`,s=`${i}${t} shader uniform block ${e.blockName} ${o}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;n?.warn?.(s,e)()}return i}function Uo(e,t,n){let r=t===`wgsl`?Wo(e,n):Go(e,n);if(!r)return null;let i=[];for(let e of r.split(`
`)){let n=e.replace(/\/\/.*$/,``).trim();if(!n||n.startsWith(`#`))continue;let r=t===`wgsl`?n.match(/^([A-Za-z0-9_]+)\s*:/):n.match(Qo);r&&i.push(r[1])}return i}function Wo(e,t){let n=RegExp(`\\bstruct\\s+${t}\\b`,`m`).exec(e);if(!n)return null;let r=e.indexOf(`{`,n.index);if(r<0)return null;let i=0;for(let t=r;t<e.length;t++){let n=e[t];if(n===`{`){i++;continue}if(n===`}`&&(i--,i===0))return e.slice(r+1,t)}return null}function Go(e,t){return Vo(e).find(e=>e.blockName===t)?.body||null}function Ko(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function qo(e){let{expectedUniformNames:t,actualUniformNames:n}=e,r=t.filter(e=>!n.includes(e)),i=n.filter(e=>!t.includes(e)),a=[`Expected ${t.length} fields, found ${n.length}.`],o=Xo(t,n);return o&&a.push(o),r.length&&a.push(`Missing from shader block (${r.length}): ${Zo(r)}.`),i.length&&a.push(`Unexpected in shader block (${i.length}): ${Zo(i)}.`),t.length<=12&&n.length<=12&&(r.length||i.length)&&(a.push(`Expected: ${t.join(`, `)}.`),a.push(`Actual: ${n.join(`, `)}.`)),`${e.moduleName}: ${e.stage} shader uniform block ${e.uniformBlockName} does not match module.uniformTypes. ${a.join(` `)}`}function Jo(e){return e.replace(/\/\*[\s\S]*?\*\//g,``).replace(/\/\/.*$/gm,``)}function Yo(e){return e.replace(/\s+/g,` `).trim()}function Xo(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return`First mismatch at field ${r+1}: expected ${e[r]}, found ${t[r]}.`;return e.length>t.length?`Shader block ends after field ${t.length}; expected next field ${e[t.length]}.`:t.length>e.length?`Shader block has extra field ${t.length}: ${t[e.length]}.`:null}function Zo(e,t=8){if(e.length<=t)return e.join(`, `);let n=e.length-t;return`${e.slice(0,t).join(`, `)}, ... (${n} more)`}var Qo,$o,es=e((()=>{uo(),Qo=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,$o=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g}));function ts(e){switch(e?.gpu.toLowerCase()){case`apple`:return`#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case`nvidia`:return`#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case`intel`:return`#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case`amd`:return`#define AMD_GPU
`;default:return`#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}var ns=e((()=>{}));function rs(e,t){if(Number(e.match(/^#version[ \t]+(\d+)/m)?.[1]||100)!==300)throw Error(`luma.gl v9 only supports GLSL 3.00 shader sources`);switch(t){case`vertex`:return e=is(e,ss),e;case`fragment`:return e=is(e,cs),e;default:throw Error(t)}}function is(e,t){for(let[n,r]of t)e=e.replace(n,r);return e}function as(e){return RegExp(`\\b${e}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,`g`)}var os,ss,cs,ls=e((()=>{os=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,`#version 300 es
`],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,`textureLod(`],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,`texture(`]],ss=[...os,[as(`attribute`),`in $1`],[as(`varying`),`out $1`]],cs=[...os,[as(`varying`),`in $1`]]}));function us(e,t){let n=``;for(let r in e){let i=e[r];if(n+=`void ${i.signature} {\n`,i.header&&(n+=`  ${i.header}`),t[r]){let e=t[r];e.sort((e,t)=>e.order-t.order);for(let t of e)n+=`  ${t.injection}\n`}i.footer&&(n+=`  ${i.footer}`),n+=`}
`}return n}function ds(e){let t={vertex:{},fragment:{}};for(let n of e){let e,r;typeof n==`string`?(e={},r=n):(e=n,r=e.hook),r=r.trim();let[i,a]=r.split(`:`),o=r.replace(/\(.+/,``),s=Object.assign(e,{signature:a});switch(i){case`vs`:t.vertex[o]=s;break;case`fs`:t.fragment[o]=s;break;default:throw Error(i)}}return t}var fs=e((()=>{}));function ps(e,t){return{name:ms(e,t),language:`glsl`,version:hs(e)}}function ms(e,t=`unnamed`){let n=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(e);return n?n[1]:t}function hs(e){let t=100,n=e.match(/[^\s]+/g);if(n&&n.length>=2&&n[0]===`#version`){let e=parseInt(n[1],10);Number.isFinite(e)&&(t=e)}if(t!==100&&t!==300)throw Error(`Invalid GLSL version ${t}`);return t}var gs=e((()=>{}));function _s(e){let t=e.split(``),n=0,r=0,i=!1,a=!1,o=!1;for(;n<e.length;){let s=e[n],c=e[n+1];if(a){o?o=!1:s===`\\`?o=!0:s===`"`&&(a=!1),n++;continue}if(i){s===`
`||s===`\r`?i=!1:t[n]=` `,n++;continue}if(r>0){if(s===`/`&&c===`*`){t[n]=` `,t[n+1]=` `,r++,n+=2;continue}if(s===`*`&&c===`/`){t[n]=` `,t[n+1]=` `,r--,n+=2;continue}s!==`
`&&s!==`\r`&&(t[n]=` `),n++;continue}if(s===`"`){a=!0,n++;continue}if(s===`/`&&c===`/`){t[n]=` `,t[n+1]=` `,i=!0,n+=2;continue}if(s===`/`&&c===`*`){t[n]=` `,t[n+1]=` `,r=1,n+=2;continue}n++}return t.join(``)}function vs(e,t){let n=_s(e),r=[];for(let i of t){i.lastIndex=0;let a;for(a=i.exec(n);a;){let o=i===t[0],s=a.index,c=a[0].length;r.push({match:e.slice(s,s+c),index:s,length:c,bindingToken:a[o?1:2],groupToken:a[o?2:1],accessDeclaration:a[3]?.trim(),name:a[4]}),a=i.exec(n)}}return r.sort((e,t)=>e.index-t.index)}function ys(e,t,n){let r=vs(e,t);if(!r.length)return e;let i=``,a=0;for(let t of r)i+=e.slice(a,t.index),i+=n(t),a=t.index+t.length;return i+=e.slice(a),i}function bs(e){return/@binding\(\s*auto\s*\)/.test(_s(e))}function xs(e,t){return vs(e,t===Ss||t===Cs?Ts:t).find(e=>e.bindingToken===`auto`)}var R,z,Ss,Cs,ws,Ts,Es=e((()=>{R=`(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)`,z=`\\s*`,Ss=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${z}@group\\(\\s*(\\d+)\\s*\\)${z}${R}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${z}@binding\\(\\s*(auto|\\d+)\\s*\\)${z}${R}`,`g`)],Cs=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${z}@group\\(\\s*(\\d+)\\s*\\)${z}${R}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${z}@binding\\(\\s*(auto|\\d+)\\s*\\)${z}${R}`,`g`)],ws=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)${z}@group\\(\\s*(\\d+)\\s*\\)${z}${R}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${z}@binding\\(\\s*(\\d+)\\s*\\)${z}${R}`,`g`)],Ts=[RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${R}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${R}`,`g`),RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${R}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${R}`,`g`)]}));function Ds(e,t=[]){let n=_s(e),r=new Map;for(let e of t)r.set(ks(e.name,e.group,e.location),e.moduleName);let i=[];for(let e of Ns){e.lastIndex=0;let t;for(t=e.exec(n);t;){let a=e===Ns[0],o=Number(t[a?1:2]),s=Number(t[a?2:1]),c=t[3]?.trim(),l=t[4],u=t[5].trim(),d=r.get(ks(l,s,o));i.push(Os({name:l,group:s,binding:o,owner:d?`module`:`application`,moduleName:d,accessDeclaration:c,resourceType:u})),t=e.exec(n)}}return i.sort((e,t)=>e.group===t.group?e.binding===t.binding?e.name.localeCompare(t.name):e.binding-t.binding:e.group-t.group)}function Os(e){let t={name:e.name,group:e.group,binding:e.binding,owner:e.owner,kind:`unknown`,moduleName:e.moduleName,resourceType:e.resourceType};if(e.accessDeclaration){let n=e.accessDeclaration.split(`,`).map(e=>e.trim());if(n[0]===`uniform`)return{...t,kind:`uniform`,access:`uniform`};if(n[0]===`storage`){let e=n[1]||`read_write`;return{...t,kind:e===`read`?`read-only-storage`:`storage`,access:e}}}return e.resourceType===`sampler`||e.resourceType===`sampler_comparison`?{...t,kind:`sampler`,samplerKind:e.resourceType===`sampler_comparison`?`comparison`:`filtering`}:e.resourceType.startsWith(`texture_storage_`)?{...t,kind:`storage-texture`,access:Ms(e.resourceType),viewDimension:As(e.resourceType)}:e.resourceType.startsWith(`texture_`)?{...t,kind:`texture`,viewDimension:As(e.resourceType),sampleType:js(e.resourceType),multisampled:e.resourceType.startsWith(`texture_multisampled_`)}:t}function ks(e,t,n){return`${t}:${n}:${e}`}function As(e){if(e.includes(`cube_array`))return`cube-array`;if(e.includes(`2d_array`))return`2d-array`;if(e.includes(`cube`))return`cube`;if(e.includes(`3d`))return`3d`;if(e.includes(`2d`))return`2d`;if(e.includes(`1d`))return`1d`}function js(e){if(e.startsWith(`texture_depth_`))return`depth`;if(e.includes(`<i32>`))return`sint`;if(e.includes(`<u32>`))return`uint`;if(e.includes(`<f32>`))return`float`}function Ms(e){return/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(e)?.[1]}var Ns,Ps=e((()=>{Es(),Ns=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${R}\\s*:\\s*([^;]+);`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${R}\\s*:\\s*([^;]+);`,`g`)]}));function Fs(e){let t=Po(e.modules||[]),{source:n,bindingAssignments:r}=Ls(e.platformInfo,{...e,source:e.source,stage:`vertex`,modules:t});return{source:n,getUniforms:zs(t),bindingAssignments:r,bindingTable:Ds(n,r)}}function Is(e){let{vs:t,fs:n}=e,r=Po(e.modules||[]);return{vs:Rs(e.platformInfo,{...e,source:t,stage:`vertex`,modules:r}),fs:Rs(e.platformInfo,{...e,source:n,stage:`fragment`,modules:r}),getUniforms:zs(r)}}function Ls(e,t){let{source:n,stage:r,modules:i,hookFunctions:a=[],inject:o={},log:s}=t;lo(typeof n==`string`,`shader source must be a string`);let c=n,l=``,u=ds(a),d={},f={},p={};for(let e in o){let t=typeof o[e]==`string`?{injection:o[e],order:0}:o[e],n=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(n){let r=n[2],i=n[3];r?i===`decl`?f[e]=[t]:p[e]=[t]:d[e]=[t]}else p[e]=[t]}let m=i,h=Us(c),g=Hs(h.source),_=qs(m,t._bindingRegistry,g),v=[];for(let e of m){s&&jo(e,c,s);let n=Ws(Vs(e,`wgsl`,s),e,{usedBindingsByGroup:g,bindingRegistry:t._bindingRegistry,reservedBindingKeysByGroup:_});v.push(...n.bindingAssignments);let i=n.source;l+=i;let a=e.injections?.[r]||{};for(let e in a){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let n=t[2]===`decl`?f:p;n[e]=n[e]||[],n[e].push(a[e])}else d[e]=d[e]||[],d[e].push(a[e])}}return l+=sc,l=So(l,r,f),l+=us(u[r],d),l+=nc(v),l+=h.source,l=So(l,r,p),tc(l),{source:l,bindingAssignments:v}}function Rs(e,t){let{source:n,stage:r,language:i=`glsl`,modules:a,defines:o={},hookFunctions:s=[],inject:c={},prologue:l=!0,log:u}=t;lo(typeof n==`string`,`shader source must be a string`);let d=i===`glsl`?ps(n).version:-1,f=e.shaderLanguageVersion,p=d===100?`#version 100`:`#version 300 es`,m=n.split(`
`).slice(1).join(`
`),h={};a.forEach(e=>{Object.assign(h,e.defines)}),Object.assign(h,o);let g=``;switch(i){case`wgsl`:break;case`glsl`:g=l?`\
${p}

// ----- PROLOGUE -------------------------
${`#define SHADER_TYPE_${r.toUpperCase()}`}

${ts(e)}
${r===`fragment`?lc:``}

// ----- APPLICATION DEFINES -------------------------

${Bs(h)}

`:`${p}
`;break}let _=ds(s),v={},y={},b={};for(let e in c){let t=typeof c[e]==`string`?{injection:c[e],order:0}:c[e],n=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(n){let r=n[2],i=n[3];r?i===`decl`?y[e]=[t]:b[e]=[t]:v[e]=[t]}else b[e]=[t]}for(let e of a){u&&jo(e,m,u);let t=Vs(e,r,u);g+=t;let n=e.instance?.normalizedInjections[r]||{};for(let e in n){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let r=t[2]===`decl`?y:b;r[e]=r[e]||[],r[e].push(n[e])}else v[e]=v[e]||[],v[e].push(n[e])}}return g+=`// ----- MAIN SHADER SOURCE -------------------------`,g+=sc,g=So(g,r,y),g+=us(_[r],v),g+=m,g=So(g,r,b),i===`glsl`&&d!==f&&(g=rs(g,r)),i===`glsl`&&Ho(g,r,u),g.trim()}function zs(e){return function(t){let n={};for(let r of e){let e=r.getUniforms?.(t,n);Object.assign(n,e)}return n}}function Bs(e={}){let t=``;for(let n in e){let r=e[n];(r||Number.isFinite(r))&&(t+=`#define ${n.toUpperCase()} ${e[n]}\n`)}return t}function Vs(e,t,n){let r;switch(t){case`vertex`:r=e.vs||``;break;case`fragment`:r=e.fs||``;break;case`wgsl`:r=e.source||``;break;default:lo(!1)}if(!e.name)throw Error(`Shader module must have a name`);Bo(e,t,{log:n});let i=e.name.toUpperCase().replace(/[^0-9a-z]/gi,`_`),a=`\
// ----- MODULE ${e.name} ---------------

`;return t!==`wgsl`&&(a+=`#define MODULE_${i}\n`),a+=`${r}\n`,a}function Hs(e){let t=new Map;for(let n of vs(e,ws)){let e=Number(n.bindingToken),r=Number(n.groupToken);Xs(r,e,n.name),Qs(t,r,e,`application binding "${n.name}"`)}return t}function Us(e){let t=vs(e,Cs),n=new Map;for(let e of t){if(e.bindingToken===`auto`)continue;let t=Number(e.bindingToken),r=Number(e.groupToken);Xs(r,t,e.name),Qs(n,r,t,`application binding "${e.name}"`)}let r={sawSupportedBindingDeclaration:t.length>0},i=ys(e,Cs,e=>Ks(e,n,r));if(bs(e)&&!r.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:i}}function Ws(e,t,n){let r=[],i={sawSupportedBindingDeclaration:vs(e,Ss).length>0,nextHintedBindingLocation:typeof t.firstBindingSlot==`number`?t.firstBindingSlot:null},a=ys(e,Ss,e=>Gs(e,{module:t,context:n,bindingAssignments:r,relocationState:i}));if(bs(e)&&!i.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in module "${t.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:a,bindingAssignments:r}}function Gs(e,t){let{module:n,context:r,bindingAssignments:i,relocationState:a}=t,{match:o,bindingToken:s,groupToken:c,name:l}=e,u=Number(c);if(s===`auto`){let e=rc(u,n.name,l),t=r.bindingRegistry?.get(e),s=t===void 0?a.nextHintedBindingLocation===null?$s(u,r.usedBindingsByGroup):$s(u,r.usedBindingsByGroup,a.nextHintedBindingLocation):t;return Zs(n.name,u,s,l),t!==void 0&&Js(r.reservedBindingKeysByGroup,u,s,e)?(i.push({moduleName:n.name,name:l,group:u,location:s}),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${s})`)):(Qs(r.usedBindingsByGroup,u,s,`module "${n.name}" binding "${l}"`),r.bindingRegistry?.set(e,s),i.push({moduleName:n.name,name:l,group:u,location:s}),a.nextHintedBindingLocation!==null&&t===void 0&&(a.nextHintedBindingLocation=s+1),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${s})`))}let d=Number(s);return Zs(n.name,u,d,l),Qs(r.usedBindingsByGroup,u,d,`module "${n.name}" binding "${l}"`),i.push({moduleName:n.name,name:l,group:u,location:d}),o}function Ks(e,t,n){let{match:r,bindingToken:i,groupToken:a,name:o}=e,s=Number(a);if(i===`auto`){let e=ec(s,t);return Xs(s,e,o),Qs(t,s,e,`application binding "${o}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${e})`)}return n.sawSupportedBindingDeclaration=!0,r}function qs(e,t,n){let r=new Map;if(!t)return r;for(let i of e)for(let e of Ys(i)){let a=rc(e.group,i.name,e.name),o=t.get(a);if(o!==void 0){let t=r.get(e.group)||new Map,i=t.get(o);if(i&&i!==a)throw Error(`Duplicate WGSL binding reservation for modules "${i}" and "${a}": group ${e.group}, binding ${o}.`);Qs(n,e.group,o,`registered module binding "${a}"`),t.set(o,a),r.set(e.group,t)}}return r}function Js(e,t,n,r){let i=e.get(t);if(!i)return!1;let a=i.get(n);if(!a)return!1;if(a!==r)throw Error(`Registered module binding "${r}" collided with "${a}": group ${t}, binding ${n}.`);return!0}function Ys(e){let t=[],n=e.source||``;for(let e of vs(n,Ss))t.push({name:e.name,group:Number(e.groupToken)});return t}function Xs(e,t,n){if(e===0&&t>=cc)throw Error(`Application binding "${n}" in group 0 uses reserved binding ${t}. Application-owned explicit group-0 bindings must stay below ${cc}.`)}function Zs(e,t,n,r){if(t===0&&n<cc)throw Error(`Module "${e}" binding "${r}" in group 0 uses reserved application binding ${n}. Module-owned explicit group-0 bindings must be ${cc} or higher.`)}function Qs(e,t,n,r){let i=e.get(t)||new Set;if(i.has(n))throw Error(`Duplicate WGSL binding assignment for ${r}: group ${t}, binding ${n}.`);i.add(n),e.set(t,i)}function $s(e,t,n){let r=t.get(e)||new Set,i=n??(e===0?cc:r.size>0?Math.max(...r)+1:0);for(;r.has(i);)i++;return i}function ec(e,t){let n=t.get(e)||new Set,r=0;for(;n.has(r);)r++;return r}function tc(e){let t=xs(e,Ss);if(!t)return;let n=ic(e,t.index);throw n?Error(`Unresolved @binding(auto) for module "${n}" binding "${t.name}" remained in assembled WGSL source.`):ac(e,t.index)?Error(`Unresolved @binding(auto) for application binding "${t.name}" remained in assembled WGSL source.`):Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${oc(t.match)}".`)}function nc(e){if(e.length===0)return``;let t=`// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------
`;for(let n of e)t+=`// ${n.moduleName}.${n.name} -> @group(${n.group}) @binding(${n.location})\n`;return t+=`
`,t}function rc(e,t,n){return`${e}:${t}:${n}`}function ic(e,t){let n=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm,r,i;for(i=n.exec(e);i&&i.index<=t;)r=i[1],i=n.exec(e);return r}function ac(e,t){let n=e.indexOf(sc);return n>=0?t>n:!0}function oc(e){return e.replace(/\s+/g,` `).trim()}var sc,cc,lc,uc=e((()=>{Io(),ns(),Oo(),ls(),No(),es(),fs(),uo(),gs(),Ps(),Es(),sc=`\n\n${Do}\n`,cc=100,lc=`precision highp float;
`}));function dc(e,t){let n=e.split(`
`),r=[],i=[],a=!0;for(let e of n){let n=e.match(_c)||e.match(pc),o=e.match(mc),s=e.match(hc),c=e.match(vc)||e.match(gc);if(n||o){let e=(n||o)?.[1],r=!!t?.defines?.[e],s=n?r:!r,c=a&&s;i.push({parentActive:a,branchTaken:s,active:c}),a=c}else if(s){let e=i[i.length-1];if(!e)throw Error(`Encountered #else without matching #ifdef or #ifndef`);e.active=e.parentActive&&!e.branchTaken,e.branchTaken=!0,a=e.active}else c?(i.pop(),a=!i.length||i[i.length-1].active):a&&r.push(e)}if(i.length>0)throw Error(`Unterminated conditional block in shader source`);return r.join(`
`)}var fc,pc,mc,hc,gc,_c,vc,yc=e((()=>{fc=`([a-zA-Z_][a-zA-Z0-9_]*)`,pc=RegExp(`^\\s*\\#\\s*ifdef\\s*${fc}\\s*$`),mc=RegExp(`^\\s*\\#\\s*ifndef\\s*${fc}\\s*(?:\\/\\/.*)?$`),hc=/^\s*\#\s*else\s*(?:\/\/.*)?$/,gc=/^\s*\#\s*endif\s*$/,_c=RegExp(`^\\s*\\#\\s*ifdef\\s*${fc}\\s*(?:\\/\\/.*)?$`),vc=/^\s*\#\s*endif\s*(?:\/\/.*)?$/})),bc,xc=e((()=>{No(),uc(),Ps(),yc(),bc=class e{static defaultShaderAssembler;_hookFunctions=[];_defaultModules=[];_wgslBindingRegistry=new Map;static getDefaultShaderAssembler(){return e.defaultShaderAssembler=e.defaultShaderAssembler||new e,e.defaultShaderAssembler}addDefaultModule(e){this._defaultModules.find(t=>t.name===(typeof e==`string`?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){let t=typeof e==`string`?e:e.name;this._defaultModules=this._defaultModules.filter(e=>e.name!==t)}addShaderHook(e,t){t&&(e=Object.assign(t,{hook:e})),this._hookFunctions.push(e)}assembleWGSLShader(e){let t=this._getModuleList(e.modules),n=this._hookFunctions,{source:r,getUniforms:i,bindingAssignments:a}=Fs({...e,source:e.source,_bindingRegistry:this._wgslBindingRegistry,modules:t,hookFunctions:n}),o={...t.reduce((e,t)=>(Object.assign(e,t.defines),e),{}),...e.defines},s=e.platformInfo.shaderLanguage===`wgsl`?dc(r,{defines:o}):r;return{source:s,getUniforms:i,modules:t,bindingAssignments:a,bindingTable:Ds(s,a)}}assembleGLSLShaderPair(e){let t=this._getModuleList(e.modules),n=this._hookFunctions;return{...Is({...e,vs:e.vs,fs:e.fs,modules:t,hookFunctions:n}),modules:t}}_getModuleList(e=[]){let t=Array(this._defaultModules.length+e.length),n={},r=0;for(let e=0,i=this._defaultModules.length;e<i;++e){let i=this._defaultModules[e],a=i.name;t[r++]=i,n[a]=!0}for(let i=0,a=e.length;i<a;++i){let a=e[i],o=a.name;n[o]||(t[r++]=a,n[o]=!0)}return t.length=r,ko(t),t}}}));function Sc(e){let{input:t,inputChannels:n,output:r}=e||{};if(!t)return Tc;if(!n)throw Error(`inputChannels`);return`\
#version 300 es
in ${Cc(n)} ${t};
out vec4 ${r};
void main() {
  ${r} = ${wc(t,n)};
}`}function Cc(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`invalid channels: ${e}`)}}function wc(e,t){switch(t){case 1:return`vec4(${e}, 0.0, 0.0, 1.0)`;case 2:return`vec4(${e}, 0.0, 1.0)`;case 3:return`vec4(${e}, 1.0)`;case 4:return e;default:throw Error(`invalid channels: ${t}`)}}var Tc,Ec=e((()=>{Tc=`#version 300 es
out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`}));function Dc(e,{precision:t=V.precision}={}){return e=jc(e),`${parseFloat(e.toPrecision(t))}`}function Oc(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}function B(e,t,n){return Nc(e,e=>Math.max(t,Math.min(n,e)))}function kc(e,t,n){return Oc(e)?e.map((e,r)=>kc(e,t[r],n)):n*t+(1-n)*e}function Ac(e,t,n){let r=V.EPSILON;n&&(V.EPSILON=n);try{if(e===t)return!0;if(Oc(e)&&Oc(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Ac(e[n],t[n]))return!1;return!0}return e&&e.equals?e.equals(t):t&&t.equals?t.equals(e):typeof e==`number`&&typeof t==`number`&&Math.abs(e-t)<=V.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}finally{V.EPSILON=r}}function jc(e){return Math.round(e/V.EPSILON)*V.EPSILON}function Mc(e){return e.clone?e.clone():Array(e.length)}function Nc(e,t,n){if(Oc(e)){let r=e;n||=Mc(r);for(let i=0;i<n.length&&i<r.length;++i){let r=typeof e==`number`?e:e[i];n[i]=t(r,i,n)}return n}return t(e)}var V,Pc=e((()=>{1/Math.PI*180,1/180*Math.PI,globalThis.mathgl=globalThis.mathgl||{config:{EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1}},V=globalThis.mathgl.config})),Fc,Ic=e((()=>{Pc(),Fc=class extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,t=0){for(let n=0;n<this.ELEMENTS;++n)this[n]=e[n+t];return this.check()}toArray(e=[],t=0){for(let n=0;n<this.ELEMENTS;++n)e[t+n]=this[n];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:Oc(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(V)}formatString(e){let t=``;for(let n=0;n<this.ELEMENTS;++n)t+=(n>0?`, `:``)+Dc(this[n],e);return`${e.printTypes?this.constructor.name:``}[${t}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(!Ac(this[t],e[t]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(this[t]!==e[t])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,t,n){if(n===void 0)return this.lerp(this,e,t);for(let r=0;r<this.ELEMENTS;++r){let i=e[r],a=typeof t==`number`?t:t[r];this[r]=i+n*(a-i)}return this.check()}min(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.min(e[t],this[t]);return this.check()}max(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.max(e[t],this[t]);return this.check()}clamp(e,t){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e[n]),t[n]);return this.check()}add(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]+=t[e];return this.check()}subtract(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]-=t[e];return this.check()}scale(e){if(typeof e==`number`)for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;else for(let t=0;t<this.ELEMENTS&&t<e.length;++t)this[t]*=e[t];return this.check()}multiplyByScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}check(){if(V.debug&&!this.validate())throw Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let t=0;t<this.ELEMENTS;++t)e&&=Number.isFinite(this[t]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=e;return this.check()}addScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,t){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e),t);return this.check()}get elements(){return this}}}));function Lc(e,t){if(e.length!==t)return!1;for(let t=0;t<e.length;++t)if(!Number.isFinite(e[t]))return!1;return!0}function H(e){if(!Number.isFinite(e))throw Error(`Invalid number ${JSON.stringify(e)}`);return e}function Rc(e,t,n=``){if(V.debug&&!Lc(e,t))throw Error(`math.gl: ${n} some fields set to invalid numbers'`);return e}var zc=e((()=>{Pc()}));function Bc(e,t){if(!e)throw Error(`math.gl assertion ${t}`)}var Vc=e((()=>{})),Hc,Uc=e((()=>{Ic(),zc(),Vc(),Hc=class extends Fc{get x(){return this[0]}set x(e){this[0]=H(e)}get y(){return this[1]}set y(e){this[1]=H(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let t=0;t<this.ELEMENTS;++t)e+=this[t]*this[t];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let t=0;for(let n=0;n<this.ELEMENTS;++n){let r=this[n]-e[n];t+=r*r}return H(t)}dot(e){let t=0;for(let n=0;n<this.ELEMENTS;++n)t+=this[n]*e[n];return H(t)}normalize(){let e=this.magnitude();if(e!==0)for(let t=0;t<this.ELEMENTS;++t)this[t]/=e;return this.check()}multiply(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]*=t[e];return this.check()}divide(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]/=t[e];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return Bc(e>=0&&e<this.ELEMENTS,`index is out of range`),H(this[e])}setComponent(e,t){return Bc(e>=0&&e<this.ELEMENTS,`index is out of range`),this[e]=t,this.check()}addVectors(e,t){return this.copy(e).add(t)}subVectors(e,t){return this.copy(e).subtract(t)}multiplyVectors(e,t){return this.copy(e).multiply(t)}addScaledVector(e,t){return this.add(new this.constructor(e).multiplyScalar(t))}}})),Wc,Gc=e((()=>{Wc=typeof Float32Array<`u`?Float32Array:Array,Math.PI/180}));function Kc(){let e=new Wc(2);return Wc!=Float32Array&&(e[0]=0,e[1]=0),e}function qc(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function Jc(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function Yc(e,t){return e[0]=-t[0],e[1]=-t[1],e}function Xc(e,t,n,r){let i=t[0],a=t[1];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e}function Zc(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[4]*i+n[12],e[1]=n[1]*r+n[5]*i+n[13],e}var Qc,$c=e((()=>{Gc(),Qc=Jc,(function(){let e=Kc();return function(t,n,r,i,a,o){let s,c;for(n||=2,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}})()}));function el(e,t,n){let r=t[0],i=t[1],a=n[3]*r+n[7]*i||1;return e[0]=(n[0]*r+n[4]*i)/a,e[1]=(n[1]*r+n[5]*i)/a,e}function tl(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a||1;return e[0]=(n[0]*r+n[4]*i+n[8]*a)/o,e[1]=(n[1]*r+n[5]*i+n[9]*a)/o,e[2]=(n[2]*r+n[6]*i+n[10]*a)/o,e}function nl(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e[2]=t[2],e}var rl=e((()=>{}));function il(){let e=new Wc(3);return Wc!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function al(e){let t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function ol(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function sl(e){let t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function cl(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function ll(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ul(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function dl(e,t,n,r){let i=t[0],a=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e}function fl(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o||=1,e[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/o,e[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/o,e[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/o,e}function pl(e,t,n){let r=t[0],i=t[1],a=t[2];return e[0]=r*n[0]+i*n[3]+a*n[6],e[1]=r*n[1]+i*n[4]+a*n[7],e[2]=r*n[2]+i*n[5]+a*n[8],e}function ml(e,t,n){let r=n[0],i=n[1],a=n[2],o=n[3],s=t[0],c=t[1],l=t[2],u=i*l-a*c,d=a*s-r*l,f=r*c-i*s,p=i*f-a*d,m=a*u-r*f,h=r*d-i*u,g=o*2;return u*=g,d*=g,f*=g,p*=2,m*=2,h*=2,e[0]=s+u+p,e[1]=c+d+m,e[2]=l+f+h,e}function hl(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function gl(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function _l(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function vl(e,t){let n=e[0],r=e[1],i=e[2],a=t[0],o=t[1],s=t[2],c=Math.sqrt((n*n+r*r+i*i)*(a*a+o*o+s*s)),l=c&&ll(e,t)/c;return Math.acos(Math.min(Math.max(l,-1),1))}var yl,bl,xl,Sl=e((()=>{Gc(),yl=ol,bl=al,xl=sl,(function(){let e=il();return function(t,n,r,i,a,o){let s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})()})),Cl,wl,Tl,El=e((()=>{Uc(),Pc(),zc(),Sl(),rl(),Cl=[0,0,0],Tl=class e extends Hc{static get ZERO(){return wl||(wl=new e(0,0,0),Object.freeze(wl)),wl}constructor(e=0,t=0,n=0){super(-0,-0,-0),arguments.length===1&&Oc(e)?this.copy(e):(V.debug&&(H(e),H(t),H(n)),this[0]=e,this[1]=t,this[2]=n)}set(e,t,n){return this[0]=e,this[1]=t,this[2]=n,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return V.debug&&(H(e.x),H(e.y),H(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=H(e)}angle(e){return vl(this,e)}cross(e){return ul(this,this,e),this.check()}rotateX({radians:e,origin:t=Cl}){return hl(this,this,t,e),this.check()}rotateY({radians:e,origin:t=Cl}){return gl(this,this,t,e),this.check()}rotateZ({radians:e,origin:t=Cl}){return _l(this,this,t,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return fl(this,this,e),this.check()}transformAsVector(e){return tl(this,this,e),this.check()}transformByMatrix3(e){return pl(this,this,e),this.check()}transformByMatrix2(e){return nl(this,this,e),this.check()}transformByQuaternion(e){return ml(this,this,e),this.check()}}})),Dl,Ol=e((()=>{Ic(),zc(),Pc(),Dl=class extends Fc{toString(){let e=`[`;if(V.printRowMajor){e+=`row-major:`;for(let t=0;t<this.RANK;++t)for(let n=0;n<this.RANK;++n)e+=` ${this[n*this.RANK+t]}`}else{e+=`column-major:`;for(let t=0;t<this.ELEMENTS;++t)e+=` ${this[t]}`}return e+=`]`,e}getElementIndex(e,t){return t*this.RANK+e}getElement(e,t){return this[t*this.RANK+e]}setElement(e,t,n){return this[t*this.RANK+e]=H(n),this}getColumn(e,t=Array(this.RANK).fill(-0)){let n=e*this.RANK;for(let e=0;e<this.RANK;++e)t[e]=this[n+e];return t}setColumn(e,t){let n=e*this.RANK;for(let e=0;e<this.RANK;++e)this[n+e]=t[e];return this}}}));function kl(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Al(e,t){if(e===t){let n=t[1],r=t[2],i=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function jl(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e):null}function Ml(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=n*s-r*o,b=l*m-u*p,x=l*h-d*p,S=u*h-d*m,C=t*S-n*x+r*b,w=a*S-o*x+s*b,T=l*y-u*v+d*_,E=p*y-m*v+h*_;return c*C-i*w+g*T-f*E}function Nl(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function Pl(e,t,n){let r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}function Fl(e,t,n){let r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Il(e,t,n,r){let i=r[0],a=r[1],o=r[2],s=Math.sqrt(i*i+a*a+o*o),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;return s<1e-6?null:(s=1/s,i*=s,a*=s,o*=s,l=Math.sin(n),c=Math.cos(n),u=1-c,d=t[0],f=t[1],p=t[2],m=t[3],h=t[4],g=t[5],_=t[6],v=t[7],y=t[8],b=t[9],x=t[10],S=t[11],C=i*i*u+c,w=a*i*u+o*l,T=o*i*u-a*l,E=i*a*u-o*l,D=a*a*u+c,O=o*a*u+i*l,k=i*o*u+a*l,A=a*o*u-i*l,j=o*o*u+c,e[0]=d*C+h*w+y*T,e[1]=f*C+g*w+b*T,e[2]=p*C+_*w+x*T,e[3]=m*C+v*w+S*T,e[4]=d*E+h*D+y*O,e[5]=f*E+g*D+b*O,e[6]=p*E+_*D+x*O,e[7]=m*E+v*D+S*O,e[8]=d*k+h*A+y*j,e[9]=f*k+g*A+b*j,e[10]=p*k+_*A+x*j,e[11]=m*k+v*A+S*j,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function Ll(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*r,e[5]=o*i+u*r,e[6]=s*i+d*r,e[7]=c*i+f*r,e[8]=l*i-a*r,e[9]=u*i-o*r,e[10]=d*i-s*r,e[11]=f*i-c*r,e}function Rl(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*r,e[1]=o*i-u*r,e[2]=s*i-d*r,e[3]=c*i-f*r,e[8]=a*r+l*i,e[9]=o*r+u*i,e[10]=s*r+d*i,e[11]=c*r+f*i,e}function zl(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*r,e[1]=o*i+u*r,e[2]=s*i+d*r,e[3]=c*i+f*r,e[4]=l*i-a*r,e[5]=u*i-o*r,e[6]=d*i-s*r,e[7]=f*i-c*r,e}function Bl(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[1]=u+_,e[2]=f-g,e[3]=0,e[4]=u-_,e[5]=1-l-m,e[6]=p+h,e[7]=0,e[8]=f+g,e[9]=p-h,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Vl(e,t,n,r,i,a,o){let s=1/(n-t),c=1/(i-r),l=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(n+t)*s,e[9]=(i+r)*c,e[10]=(o+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*l,e[15]=0,e}function Hl(e,t,n,r,i){let a=1/Math.tan(t/2);if(e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){let t=1/(r-i);e[10]=(i+r)*t,e[14]=2*i*r*t}else e[10]=-1,e[14]=-2*r;return e}function Ul(e,t,n,r,i,a,o){let s=1/(t-n),c=1/(r-i),l=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+n)*s,e[13]=(i+r)*c,e[14]=(o+a)*l,e[15]=1,e}function Wl(e,t,n,r){let i,a,o,s,c,l,u,d,f,p,m=t[0],h=t[1],g=t[2],_=r[0],v=r[1],y=r[2],b=n[0],x=n[1],S=n[2];return Math.abs(m-b)<1e-6&&Math.abs(h-x)<1e-6&&Math.abs(g-S)<1e-6?kl(e):(d=m-b,f=h-x,p=g-S,i=1/Math.sqrt(d*d+f*f+p*p),d*=i,f*=i,p*=i,a=v*p-y*f,o=y*d-_*p,s=_*f-v*d,i=Math.sqrt(a*a+o*o+s*s),i?(i=1/i,a*=i,o*=i,s*=i):(a=0,o=0,s=0),c=f*s-p*o,l=p*a-d*s,u=d*o-f*a,i=Math.sqrt(c*c+l*l+u*u),i?(i=1/i,c*=i,l*=i,u*=i):(c=0,l=0,u=0),e[0]=a,e[1]=c,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=f,e[7]=0,e[8]=s,e[9]=u,e[10]=p,e[11]=0,e[12]=-(a*m+o*h+s*g),e[13]=-(c*m+l*h+u*g),e[14]=-(d*m+f*h+p*g),e[15]=1,e)}var Gl,Kl,ql=e((()=>{Gc(),Gl=Hl,Kl=Ul}));function Jl(){let e=new Wc(4);return Wc!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Yl(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function Xl(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}var Zl=e((()=>{Gc(),(function(){let e=Jl();return function(t,n,r,i,a,o){let s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})()}));function Ql(){return lu||(lu=new cu([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),Object.freeze(lu)),lu}function $l(){return uu||(uu=new cu,Object.freeze(uu)),uu}function eu(e){if(e>Math.PI*2)throw Error(`expected radians`)}function tu(e,t,n,r,i,a){let o=2*a/(n-t),s=2*a/(i-r),c=(n+t)/(n-t),l=(i+r)/(i-r),u=-2*a;return e[0]=o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=c,e[9]=l,e[10]=-1,e[11]=-1,e[12]=0,e[13]=0,e[14]=u,e[15]=0,e}var nu,ru,iu,au,ou,su,cu,lu,uu,du=e((()=>{Ol(),zc(),rl(),ql(),$c(),Sl(),Zl(),(function(e){e[e.COL0ROW0=0]=`COL0ROW0`,e[e.COL0ROW1=1]=`COL0ROW1`,e[e.COL0ROW2=2]=`COL0ROW2`,e[e.COL0ROW3=3]=`COL0ROW3`,e[e.COL1ROW0=4]=`COL1ROW0`,e[e.COL1ROW1=5]=`COL1ROW1`,e[e.COL1ROW2=6]=`COL1ROW2`,e[e.COL1ROW3=7]=`COL1ROW3`,e[e.COL2ROW0=8]=`COL2ROW0`,e[e.COL2ROW1=9]=`COL2ROW1`,e[e.COL2ROW2=10]=`COL2ROW2`,e[e.COL2ROW3=11]=`COL2ROW3`,e[e.COL3ROW0=12]=`COL3ROW0`,e[e.COL3ROW1=13]=`COL3ROW1`,e[e.COL3ROW2=14]=`COL3ROW2`,e[e.COL3ROW3=15]=`COL3ROW3`})(nu||={}),ru=45*Math.PI/180,iu=1,au=.1,ou=500,su=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),cu=class extends Dl{static get IDENTITY(){return $l()}static get ZERO(){return Ql()}get ELEMENTS(){return 16}get RANK(){return 4}get INDICES(){return nu}constructor(e){super(-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this[9]=e[9],this[10]=e[10],this[11]=e[11],this[12]=e[12],this[13]=e[13],this[14]=e[14],this[15]=e[15],this.check()}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return this[0]=e,this[1]=t,this[2]=n,this[3]=r,this[4]=i,this[5]=a,this[6]=o,this[7]=s,this[8]=c,this[9]=l,this[10]=u,this[11]=d,this[12]=f,this[13]=p,this[14]=m,this[15]=h,this.check()}setRowMajor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return this[0]=e,this[1]=i,this[2]=c,this[3]=f,this[4]=t,this[5]=a,this[6]=l,this[7]=p,this[8]=n,this[9]=o,this[10]=u,this[11]=m,this[12]=r,this[13]=s,this[14]=d,this[15]=h,this.check()}toRowMajor(e){return e[0]=this[0],e[1]=this[4],e[2]=this[8],e[3]=this[12],e[4]=this[1],e[5]=this[5],e[6]=this[9],e[7]=this[13],e[8]=this[2],e[9]=this[6],e[10]=this[10],e[11]=this[14],e[12]=this[3],e[13]=this[7],e[14]=this[11],e[15]=this[15],e}identity(){return this.copy(su)}fromObject(e){return this.check()}fromQuaternion(e){return Bl(this,e),this.check()}frustum(e){let{left:t,right:n,bottom:r,top:i,near:a=au,far:o=ou}=e;return o===1/0?tu(this,t,n,r,i,a):Vl(this,t,n,r,i,a,o),this.check()}lookAt(e){let{eye:t,center:n=[0,0,0],up:r=[0,1,0]}=e;return Wl(this,t,n,r),this.check()}ortho(e){let{left:t,right:n,bottom:r,top:i,near:a=au,far:o=ou}=e;return Kl(this,t,n,r,i,a,o),this.check()}orthographic(e){let{fovy:t=ru,aspect:n=iu,focalDistance:r=1,near:i=au,far:a=ou}=e;eu(t);let o=t/2,s=r*Math.tan(o),c=s*n;return this.ortho({left:-c,right:c,bottom:-s,top:s,near:i,far:a})}perspective(e){let{fovy:t=45*Math.PI/180,aspect:n=1,near:r=.1,far:i=500}=e;return eu(t),Gl(this,t,n,r,i),this.check()}determinant(){return Ml(this)}getScale(e=[-0,-0,-0]){return e[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),e[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),e[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),e}getTranslation(e=[-0,-0,-0]){return e[0]=this[12],e[1]=this[13],e[2]=this[14],e}getRotation(e,t){e||=[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],t||=[-0,-0,-0];let n=this.getScale(t),r=1/n[0],i=1/n[1],a=1/n[2];return e[0]=this[0]*r,e[1]=this[1]*i,e[2]=this[2]*a,e[3]=0,e[4]=this[4]*r,e[5]=this[5]*i,e[6]=this[6]*a,e[7]=0,e[8]=this[8]*r,e[9]=this[9]*i,e[10]=this[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}getRotationMatrix3(e,t){e||=[-0,-0,-0,-0,-0,-0,-0,-0,-0],t||=[-0,-0,-0];let n=this.getScale(t),r=1/n[0],i=1/n[1],a=1/n[2];return e[0]=this[0]*r,e[1]=this[1]*i,e[2]=this[2]*a,e[3]=this[4]*r,e[4]=this[5]*i,e[5]=this[6]*a,e[6]=this[8]*r,e[7]=this[9]*i,e[8]=this[10]*a,e}transpose(){return Al(this,this),this.check()}invert(){return jl(this,this),this.check()}multiplyLeft(e){return Nl(this,e,this),this.check()}multiplyRight(e){return Nl(this,this,e),this.check()}rotateX(e){return Ll(this,this,e),this.check()}rotateY(e){return Rl(this,this,e),this.check()}rotateZ(e){return zl(this,this,e),this.check()}rotateXYZ(e){return this.rotateX(e[0]).rotateY(e[1]).rotateZ(e[2])}rotateAxis(e,t){return Il(this,this,e,t),this.check()}scale(e){return Fl(this,this,Array.isArray(e)?e:[e,e,e]),this.check()}translate(e){return Pl(this,this,e),this.check()}transform(e,t){return e.length===4?(t=Xl(t||[-0,-0,-0,-0],e,this),Rc(t,4),t):this.transformAsPoint(e,t)}transformAsPoint(e,t){let{length:n}=e,r;switch(n){case 2:r=Zc(t||[-0,-0],e,this);break;case 3:r=fl(t||[-0,-0,-0],e,this);break;default:throw Error(`Illegal vector`)}return Rc(r,e.length),r}transformAsVector(e,t){let n;switch(e.length){case 2:n=el(t||[-0,-0],e,this);break;case 3:n=tl(t||[-0,-0,-0],e,this);break;default:throw Error(`Illegal vector`)}return Rc(n,e.length),n}transformPoint(e,t){return this.transformAsPoint(e,t)}transformVector(e,t){return this.transformAsPoint(e,t)}transformDirection(e,t){return this.transformAsVector(e,t)}makeRotationX(e){return this.identity().rotateX(e)}makeTranslation(e,t,n){return this.identity().translate([e,t,n])}}})),U=e((()=>{Uc(),Pc(),zc(),$c(),El(),Sl(),Ol(),Gc(),du(),Ic(),Zl(),ql()}));function fu(e,t=[],n=0){let r=Math.fround(e),i=e-r;return t[n]=r,t[n+1]=i,t}function pu(e){return e-Math.fround(e)}function mu(e){let t=new Float32Array(32);for(let n=0;n<4;++n)for(let r=0;r<4;++r){let i=n*4+r;fu(e[r*4+n],t,i*2)}return t}var hu=e((()=>{}));function gu(e,t=!0){return e??t}function _u(e=[0,0,0],t=!0){return t?e.map(e=>e/255):[...e]}function vu(e,t=!0){let n=_u(e.slice(0,3),t),r=Number.isFinite(e[3]),i=r?e[3]:1;return[n[0],n[1],n[2],t&&r?i/255:i]}var yu=e((()=>{})),bu,xu,Su=e((()=>{bu=`#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 1.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 1.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`,xu={name:`fp32`,vs:bu}})),Cu,wu=e((()=>{Cu=`
layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`})),Tu,Eu=e((()=>{Tu=`struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}

fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}

fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
`})),Du,Ou,ku=e((()=>{hu(),wu(),Eu(),Du={ONE:1,SPLIT:4097},Ou={name:`fp64arithmetic`,source:Tu,fs:Cu,vs:Cu,defaultUniforms:Du,uniformTypes:{ONE:`f32`,SPLIT:`f32`},fp64ify:fu,fp64LowPart:pu,fp64ifyMatrix4:mu}})),Au,ju,Mu,Nu=e((()=>{Au=`layout(std140) uniform floatColorsUniforms {
  float useByteColors;
} floatColors;

vec3 floatColors_normalize(vec3 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_normalize(vec4 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 floatColors_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 floatColors_premultiply_alpha(vec4 inputColor) {
  return floatColors_premultiplyAlpha(inputColor);
}

vec4 floatColors_unpremultiply_alpha(vec4 inputColor) {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,ju=`struct floatColorsUniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> floatColors : floatColorsUniforms;

fn floatColors_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn floatColors_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn floatColors_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_premultiplyAlpha(inputColor);
}

fn floatColors_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,Mu={name:`floatColors`,props:{},uniforms:{},vs:Au,fs:Au,source:ju,uniformTypes:{useByteColors:`f32`},defaultUniforms:{useByteColors:!0}}}));function Pu(e={},t){let n={},r=gu(e.useByteColors,!0);return e.highlightedObjectColor===void 0||(e.highlightedObjectColor===null?n.isHighlightActive=!1:(n.isHighlightActive=!0,n.highlightedObjectColor=e.highlightedObjectColor.slice(0,3))),e.highlightColor&&(n.highlightColor=vu(e.highlightColor,r)),e.isActive!==void 0&&(n.isActive=!!e.isActive,n.isAttribute=!!e.isAttribute),e.useByteColors!==void 0&&(n.useByteColors=!!e.useByteColors),n}var Fu,Iu,Lu,Ru,zu=e((()=>{yu(),Fu=[0,1,1,1],Iu=`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,Lu=`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,Ru={props:{},uniforms:{},name:`picking`,uniformTypes:{isActive:`f32`,isAttribute:`f32`,isHighlightActive:`f32`,useByteColors:`f32`,highlightedObjectColor:`vec3<f32>`,highlightColor:`vec4<f32>`},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:Fu},vs:Iu,fs:Lu,getUniforms:Pu}})),Bu,Vu=e((()=>{Bu=`precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`})),Hu,Uu=e((()=>{Hu=`// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`}));function Wu(e,t={}){if(e&&={...e},!e)return Ju();e.lights&&(e={...e,...Ku(e.lights),lights:void 0});let{useByteColors:n,ambientLight:r,pointLights:i,spotLights:a,directionalLights:o}=e||{};if(!(r||i&&i.length>0||a&&a.length>0||o&&o.length>0))return{...Ju(),enabled:0};let s={...Ju(),...Gu({useByteColors:n,ambientLight:r,pointLights:i,spotLights:a,directionalLights:o})};return e.enabled!==void 0&&(s.enabled=+!!e.enabled),s}function Gu({useByteColors:e,ambientLight:t,pointLights:n=[],spotLights:r=[],directionalLights:i=[]}){let a=Yu(),o=0,s=0,c=0,l=0;for(let t of n){if(o>=Qu)break;a[o]={...a[o],color:qu(t,e),position:t.position,attenuation:t.attenuation||[1,0,0]},o++,s++}for(let t of r){if(o>=Qu)break;a[o]={...a[o],color:qu(t,e),position:t.position,direction:t.direction,attenuation:t.attenuation||[1,0,0],coneCos:Zu(t)},o++,c++}for(let t of i){if(o>=Qu)break;a[o]={...a[o],color:qu(t,e),direction:t.direction},o++,l++}return n.length+r.length+i.length>Qu&&N.warn(`MAX_LIGHTS exceeded, truncating to ${Qu}`)(),{ambientColor:qu(t,e),directionalLightCount:l,pointLightCount:s,spotLightCount:c,lights:a}}function Ku(e){let t={pointLights:[],spotLights:[],directionalLights:[]};for(let n of e||[])switch(n.type){case`ambient`:t.ambientLight=n;break;case`directional`:t.directionalLights?.push(n);break;case`point`:t.pointLights?.push(n);break;case`spot`:t.spotLights?.push(n);break;default:}return t}function qu(e={},t){let{color:n=[0,0,0],intensity:r=1}=e;return _u(n,gu(t,!0)).map(e=>e*r)}function Ju(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:Yu()}}function Yu(){return Array.from({length:Qu},()=>Xu())}function Xu(){return{color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}}function Zu(e){let t=e.innerConeAngle??0,n=e.outerConeAngle??Math.PI/4;return[Math.cos(t),Math.cos(n)]}var Qu,$u,ed,td=e((()=>{O(),Vu(),Uu(),yu(),Qu=5,$u={color:`vec3<f32>`,position:`vec3<f32>`,direction:`vec3<f32>`,attenuation:`vec3<f32>`,coneCos:`vec2<f32>`},ed={props:{},uniforms:{},name:`lighting`,defines:{},uniformTypes:{enabled:`i32`,directionalLightCount:`i32`,pointLightCount:`i32`,spotLightCount:`i32`,ambientColor:`vec3<f32>`,lights:[$u,Qu]},defaultUniforms:Ju(),bindingLayout:[{name:`lighting`,group:2}],firstBindingSlot:0,source:Hu,vs:Bu,fs:Bu,getUniforms:Wu}})),nd,rd,id=e((()=>{nd=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,rd=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`})),ad,od=e((()=>{ad=`struct phongMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * phongMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(phongMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (phongMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`})),sd,cd,ld=e((()=>{Nu(),td(),id(),od(),sd=[38.25,38.25,38.25],cd={props:{},name:`gouraudMaterial`,bindingLayout:[{name:`gouraudMaterial`,group:3}],vs:rd.replace(`phongMaterial`,`gouraudMaterial`),fs:nd.replace(`phongMaterial`,`gouraudMaterial`),source:ad.replaceAll(`phongMaterial`,`gouraudMaterial`),defines:{LIGHTING_VERTEX:!0},dependencies:[ed,Mu],uniformTypes:{unlit:`i32`,ambient:`f32`,diffuse:`f32`,shininess:`f32`,specularColor:`vec3<f32>`},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:sd},getUniforms(e){return{...cd.defaultUniforms,...e}}}})),ud=e((()=>{No(),Io(),es(),uc(),xc(),Ec(),yc(),Oo(),U(),Su(),ku(),Nu(),zu(),td(),ld(),od(),id()})),dd,fd,pd,md=e((()=>{dd=`struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,fd=`layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,pd={name:`layer`,source:dd,vs:fd,fs:fd,getUniforms:e=>({opacity:e.opacity**(1/2.2)}),uniformTypes:{opacity:`f32`}}})),hd,gd,_d=e((()=>{hd=`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,gd={name:`color`,dependencies:[],source:hd,getUniforms:e=>({})}})),vd,yd,bd,xd,Sd,Cd=e((()=>{vd=`const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,yd=`#define SMOOTH_EDGE_RADIUS 0.5`,bd=`\
${yd}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,xd=`\
${yd}

struct FragmentGeometry {
  vec2 uv;
} geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,Sd={name:`geometry`,source:vd,vs:bd,fs:xd}})),W,G,wd=e((()=>{(function(e){e[e.Start=1]=`Start`,e[e.Move=2]=`Move`,e[e.End=4]=`End`,e[e.Cancel=8]=`Cancel`})(W||={}),(function(e){e[e.None=0]=`None`,e[e.Left=1]=`Left`,e[e.Right=2]=`Right`,e[e.Up=4]=`Up`,e[e.Down=8]=`Down`,e[e.Horizontal=3]=`Horizontal`,e[e.Vertical=12]=`Vertical`,e[e.All=15]=`All`})(G||={})})),K,Td=e((()=>{(function(e){e[e.Possible=1]=`Possible`,e[e.Began=2]=`Began`,e[e.Changed=4]=`Changed`,e[e.Ended=8]=`Ended`,e[e.Recognized=8]=`Recognized`,e[e.Cancelled=16]=`Cancelled`,e[e.Failed=32]=`Failed`})(K||={})})),Ed,Dd,Od,kd,Ad,jd=e((()=>{Ed=`auto`,Dd=`manipulation`,Od=`none`,kd=`pan-x`,Ad=`pan-y`}));function Md(e){if(e.includes(`none`))return Od;let t=e.includes(kd),n=e.includes(Ad);return t&&n?Od:t||n?t?kd:Ad:e.includes(`manipulation`)?Dd:Ed}var Nd=e((()=>{jd()})),Pd,Fd=e((()=>{jd(),Nd(),Pd=class{constructor(e,t){this.actions=``,this.manager=e,this.set(t)}set(e){e===`compute`&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let t of this.manager.recognizers)t.options.enable&&(e=e.concat(t.getTouchAction()));return Md(e.join(` `))}}}));function Id(e){return e.trim().split(/\s+/g)}var Ld=e((()=>{}));function Rd(e,t,n){if(e)for(let r of Id(t))e.addEventListener(r,n,!1)}function zd(e,t,n){if(e)for(let r of Id(t))e.removeEventListener(r,n,!1)}var Bd=e((()=>{Ld()}));function Vd(e){return(e.ownerDocument||e).defaultView}var Hd=e((()=>{}));function Ud(e,t){let n=e;for(;n;){if(n===t)return!0;n=n.parentNode}return!1}var Wd=e((()=>{}));function Gd(e){let t=e.length;if(t===1)return{x:Math.round(e[0].clientX),y:Math.round(e[0].clientY)};let n=0,r=0,i=0;for(;i<t;)n+=e[i].clientX,r+=e[i].clientY,i++;return{x:Math.round(n/t),y:Math.round(r/t)}}var Kd=e((()=>{}));function qd(e){let t=[],n=0;for(;n<e.pointers.length;)t[n]={clientX:Math.round(e.pointers[n].clientX),clientY:Math.round(e.pointers[n].clientY)},n++;return{timeStamp:Date.now(),pointers:t,center:Gd(t),deltaX:e.deltaX,deltaY:e.deltaY}}var Jd=e((()=>{Kd()}));function Yd(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)}function Xd(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.sqrt(n*n+r*r)}var Zd=e((()=>{}));function Qd(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.atan2(r,n)*180/Math.PI}function $d(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.atan2(r,n)*180/Math.PI}var ef=e((()=>{}));function tf(e,t){return e===t?G.None:Math.abs(e)>=Math.abs(t)?e<0?G.Left:G.Right:t<0?G.Up:G.Down}var nf=e((()=>{wd()}));function rf(e,t){let n=t.center,r=e.offsetDelta,i=e.prevDelta,a=e.prevInput;return(t.eventType===W.Start||a?.eventType===W.End)&&(i=e.prevDelta={x:a?.deltaX||0,y:a?.deltaY||0},r=e.offsetDelta={x:n.x,y:n.y}),{deltaX:i.x+(n.x-r.x),deltaY:i.y+(n.y-r.y)}}var af=e((()=>{wd()}));function of(e,t,n){return{x:t/e||0,y:n/e||0}}var sf=e((()=>{}));function cf(e,t){return Xd(t[0],t[1])/Xd(e[0],e[1])}var lf=e((()=>{Zd()}));function uf(e,t){return $d(t[1],t[0])-$d(e[1],e[0])}var df=e((()=>{ef()}));function ff(e,t){let n=e.lastInterval||t,r=t.timeStamp-n.timeStamp,i,a,o,s;if(t.eventType!==W.Cancel&&(r>25||n.velocity===void 0)){let c=t.deltaX-n.deltaX,l=t.deltaY-n.deltaY,u=of(r,c,l);a=u.x,o=u.y,i=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,s=tf(c,l),e.lastInterval=t}else i=n.velocity,a=n.velocityX,o=n.velocityY,s=n.direction;t.velocity=i,t.velocityX=a,t.velocityY=o,t.direction=s}var pf=e((()=>{wd(),sf(),nf()}));function mf(e,t){let{session:n}=e,{pointers:r}=t,{length:i}=r;n.firstInput||=qd(t),i>1&&!n.firstMultiple?n.firstMultiple=qd(t):i===1&&(n.firstMultiple=!1);let{firstInput:a,firstMultiple:o}=n,s=o?o.center:a.center,c=t.center=Gd(r);t.timeStamp=Date.now(),t.deltaTime=t.timeStamp-a.timeStamp,t.angle=Qd(s,c),t.distance=Yd(s,c);let{deltaX:l,deltaY:u}=rf(n,t);t.deltaX=l,t.deltaY=u,t.offsetDirection=tf(t.deltaX,t.deltaY);let d=of(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=d.x,t.overallVelocityY=d.y,t.overallVelocity=Math.abs(d.x)>Math.abs(d.y)?d.x:d.y,t.scale=o?cf(o.pointers,r):1,t.rotation=o?uf(o.pointers,r):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length;let f=e.element;return Ud(t.srcEvent.target,f)&&(f=t.srcEvent.target),t.target=f,ff(n,t),t}var hf=e((()=>{Wd(),Jd(),Kd(),Zd(),ef(),nf(),af(),sf(),lf(),df(),pf()}));function gf(e,t,n){let r=n.pointers.length,i=n.changedPointers.length,a=t&W.Start&&r-i===0,o=t&(W.End|W.Cancel)&&r-i===0;n.isFirst=!!a,n.isFinal=!!o,a&&(e.session={}),n.eventType=t;let s=mf(e,n);e.emit(`hammer.input`,s),e.recognize(s),e.session.prevInput=s}var _f=e((()=>{wd(),hf()})),vf,yf=e((()=>{Bd(),Hd(),_f(),vf=class{constructor(e){this.evEl=``,this.evWin=``,this.evTarget=``,this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,t){gf(this.manager,e,t)}init(){Rd(this.element,this.evEl,this.domHandler),Rd(this.target,this.evTarget,this.domHandler),Rd(Vd(this.element),this.evWin,this.domHandler)}destroy(){zd(this.element,this.evEl,this.domHandler),zd(this.target,this.evTarget,this.domHandler),zd(Vd(this.element),this.evWin,this.domHandler)}}})),bf,xf,Sf,Cf,wf=e((()=>{wd(),yf(),bf={pointerdown:W.Start,pointermove:W.Move,pointerup:W.End,pointercancel:W.Cancel,pointerout:W.Cancel},xf=`pointerdown`,Sf=`pointermove pointerup pointercancel`,Cf=class extends vf{constructor(e){super(e),this.evEl=xf,this.evWin=Sf,this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:t}=this,n=!1,r=bf[e.type],i=e.pointerType,a=i===`touch`,o=t.findIndex(t=>t.pointerId===e.pointerId);r&W.Start&&(e.buttons||a)?o<0&&(t.push(e),o=t.length-1):r&(W.End|W.Cancel)&&(n=!0),!(o<0)&&(t[o]=e,this.callback(r,{pointers:t,changedPointers:[e],eventType:r,pointerType:i,srcEvent:e}),n&&t.splice(o,1))}}}));function Tf(e,t){let n=t[0].toUpperCase()+t.slice(1);for(let r of Ef){let i=r?r+n:t;if(i in e)return i}}var Ef,Df=e((()=>{Ef=[``,`webkit`,`Moz`,`MS`,`ms`,`o`]})),Of,kf,Af,jf,Mf=e((()=>{Fd(),wf(),Ld(),Df(),Td(),Of=1,kf=2,Af={touchAction:`compute`,enable:!0,inputTarget:null,cssProps:{userSelect:`none`,userDrag:`none`,touchCallout:`none`,tapHighlightColor:`rgba(0,0,0,0)`}},jf=class{constructor(e,t){this.options={...Af,...t,cssProps:{...Af.cssProps,...t.cssProps},inputTarget:t.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new Cf(this),this.touchAction=new Pd(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?kf:Of}recognize(e){let{session:t}=this;if(t.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let n,{recognizers:r}=this,{curRecognizer:i}=t;(!i||i&&i.state&K.Recognized)&&(i=t.curRecognizer=null);let a=0;for(;a<r.length;)n=r[a],t.stopped!==kf&&(!i||n===i||n.canRecognizeWith(i))?n.recognize(e):n.reset(),!i&&n.state&(K.Began|K.Changed|K.Ended)&&(i=t.curRecognizer=n),a++}get(e){let{recognizers:t}=this;for(let n=0;n<t.length;n++)if(t[n].options.event===e)return t[n];return null}add(e){if(Array.isArray(e)){for(let t of e)this.add(t);return this}let t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let t of e)this.remove(t);return this}let t=typeof e==`string`?this.get(e):e;if(t){let{recognizers:e}=this,n=e.indexOf(t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this}on(e,t){if(!e||!t)return;let{handlers:n}=this;for(let r of Id(e))n[r]=n[r]||[],n[r].push(t)}off(e,t){if(!e)return;let{handlers:n}=this;for(let r of Id(e))t?n[r]&&n[r].splice(n[r].indexOf(t),1):delete n[r]}emit(e,t){let n=this.handlers[e]&&this.handlers[e].slice();if(!n||!n.length)return;let r=t;r.type=e,r.preventDefault=function(){t.srcEvent.preventDefault()};let i=0;for(;i<n.length;)n[i](r),i++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:t}=this;if(t){for(let[n,r]of Object.entries(this.options.cssProps)){let i=Tf(t.style,n);e?(this.oldCssProps[i]=t.style[i],t.style[i]=r):t.style[i]=this.oldCssProps[i]||``}e||(this.oldCssProps={})}}}}));function Nf(){return Pf++}var Pf,Ff=e((()=>{Pf=1}));function If(e){return e&K.Cancelled?`cancel`:e&K.Ended?`end`:e&K.Changed?`move`:e&K.Began?`start`:``}var Lf=e((()=>{Td()})),Rf,zf=e((()=>{Td(),Ff(),Lf(),Rf=class{constructor(e){this.options=e,this.id=Nf(),this.state=K.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){if(Array.isArray(e)){for(let t of e)this.recognizeWith(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{simultaneous:n}=this;return n[t.id]||(n[t.id]=t,t.recognizeWith(this)),this}dropRecognizeWith(e){if(Array.isArray(e)){for(let t of e)this.dropRecognizeWith(t);return this}let t;return t=typeof e==`string`?this.manager.get(e):e,t&&delete this.simultaneous[t.id],this}requireFailure(e){if(Array.isArray(e)){for(let t of e)this.requireFailure(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{requireFail:n}=this;return n.indexOf(t)===-1&&(n.push(t),t.requireFailure(this)),this}dropRequireFailure(e){if(Array.isArray(e)){for(let t of e)this.dropRequireFailure(t);return this}let t;if(t=typeof e==`string`?this.manager.get(e):e,t){let e=this.requireFail.indexOf(t);e>-1&&this.requireFail.splice(e,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:t}=this;t<K.Ended&&this.manager.emit(this.options.event+If(t),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),t>=K.Ended&&this.manager.emit(this.options.event+If(t),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=K.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(K.Failed|K.Possible)))return!1;e++}return!0}recognize(e){let t={...e};if(!this.options.enable){this.reset(),this.state=K.Failed;return}this.state&(K.Recognized|K.Cancelled|K.Failed)&&(this.state=K.Possible),this.state=this.process(t),this.state&(K.Began|K.Changed|K.Ended|K.Cancelled)&&this.tryEmit(t)}getEventNames(){return[this.options.event]}reset(){}}})),Bf,Vf=e((()=>{zf(),Td(),wd(),Bf=class extends Rf{attrTest(e){let t=this.options.pointers;return t===0||e.pointers.length===t}process(e){let{state:t}=this,{eventType:n}=e,r=t&(K.Began|K.Changed),i=this.attrTest(e);return r&&(n&W.Cancel||!i)?t|K.Cancelled:r||i?n&W.End?t|K.Ended:t&K.Began?t|K.Changed:K.Began:K.Failed}}})),Hf=e((()=>{zf(),Td(),wd()})),Uf,Wf=e((()=>{zf(),jd(),wd(),Td(),Zd(),Uf=class extends Rf{constructor(e={}){super({enable:!0,event:`tap`,pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[Dd]}process(e){let{options:t}=this,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,i=e.deltaTime<t.time;if(this.reset(),e.eventType&W.Start&&this.count===0)return this.failTimeout();if(r&&i&&n){if(e.eventType!==W.End)return this.failTimeout();let n=!this.pTime||e.timeStamp-this.pTime<t.interval,r=!this.pCenter||Yd(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,!r||!n?this.count=1:this.count+=1,this._input=e,this.count%t.taps===0)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=K.Recognized,this.tryEmit(this._input)},t.interval),K.Began):K.Recognized}return K.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=K.Failed},this.options.interval),K.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===K.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}}})),Gf,Kf,qf=e((()=>{Vf(),wd(),Td(),jd(),Gf=[``,`start`,`move`,`end`,`cancel`,`up`,`down`,`left`,`right`],Kf=class extends Bf{constructor(e={}){super({enable:!0,pointers:1,event:`pan`,threshold:10,direction:G.All,...e}),this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,t=[];return e&G.Horizontal&&t.push(Ad),e&G.Vertical&&t.push(kd),t}getEventNames(){return Gf.map(e=>this.options.event+e)}directionTest(e){let{options:t}=this,n=!0,{distance:r}=e,{direction:i}=e,a=e.deltaX,o=e.deltaY;return i&t.direction||(t.direction&G.Horizontal?(i=a===0?G.None:a<0?G.Left:G.Right,n=a!==this.pX,r=Math.abs(e.deltaX)):(i=o===0?G.None:o<0?G.Up:G.Down,n=o!==this.pY,r=Math.abs(e.deltaY))),e.direction=i,n&&r>t.threshold&&!!(i&t.direction)}attrTest(e){return super.attrTest(e)&&(!!(this.state&K.Began)||!(this.state&K.Began)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let t=G[e.direction].toLowerCase();t&&(e.additionalEvent=this.options.event+t),super.emit(e)}}})),Jf=e((()=>{Vf(),wd(),qf()})),Yf,Xf,Zf=e((()=>{Vf(),jd(),Td(),Yf=[``,`start`,`move`,`end`,`cancel`,`in`,`out`],Xf=class extends Bf{constructor(e={}){super({enable:!0,event:`pinch`,threshold:0,pointers:2,...e})}getTouchAction(){return[Od]}getEventNames(){return Yf.map(e=>this.options.event+e)}attrTest(e){return super.attrTest(e)&&(Math.abs(e.scale-1)>this.options.threshold||!!(this.state&K.Began))}emit(e){if(e.scale!==1){let t=e.scale<1?`in`:`out`;e.additionalEvent=this.options.event+t}super.emit(e)}}})),Qf=e((()=>{Vf(),Td()})),$f=e((()=>{zf(),Td(),wd()})),ep=e((()=>{wd(),Td(),Mf(),yf(),Fd(),wf(),zf(),Vf(),Hf(),Wf(),qf(),Jf(),Zf(),Qf(),$f()})),tp,np=e((()=>{tp=class{constructor(e,t,n){this.element=e,this.callback=t,this.options=n}}})),rp,ip=e((()=>{rp=typeof navigator<`u`&&navigator.userAgent?navigator.userAgent.toLowerCase():``})),ap,op,sp,cp,lp,up=e((()=>{np(),ip(),ap=rp.indexOf(`firefox`)!==-1,op=4.000244140625,sp=40,cp=.25,lp=class extends tp{constructor(e,t,n){super(e,t,{enable:!0,...n}),this.handleEvent=e=>{if(!this.options.enable)return;let t=e.deltaY;globalThis.WheelEvent&&(ap&&e.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(t/=globalThis.devicePixelRatio),e.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(t*=sp)),t!==0&&t%op===0&&(t=Math.floor(t/op)),e.shiftKey&&t&&(t*=cp),this.callback({type:`wheel`,center:{x:e.clientX,y:e.clientY},delta:-t,srcEvent:e,pointerType:`mouse`,target:e.target})},e.addEventListener(`wheel`,this.handleEvent,{passive:!1})}destroy(){this.element.removeEventListener(`wheel`,this.handleEvent)}enableEventType(e,t){e===`wheel`&&(this.options.enable=t)}}})),dp,fp,pp=e((()=>{np(),dp=[`mousedown`,`mousemove`,`mouseup`,`mouseover`,`mouseout`,`mouseleave`],fp=class extends tp{constructor(e,t,n){super(e,t,{enable:!0,...n}),this.handleEvent=e=>{this.handleOverEvent(e),this.handleOutEvent(e),this.handleEnterEvent(e),this.handleLeaveEvent(e),this.handleMoveEvent(e)},this.pressed=!1;let{enable:r}=this.options;this.enableMoveEvent=r,this.enableLeaveEvent=r,this.enableEnterEvent=r,this.enableOutEvent=r,this.enableOverEvent=r,dp.forEach(t=>e.addEventListener(t,this.handleEvent))}destroy(){dp.forEach(e=>this.element.removeEventListener(e,this.handleEvent))}enableEventType(e,t){switch(e){case`pointermove`:this.enableMoveEvent=t;break;case`pointerover`:this.enableOverEvent=t;break;case`pointerout`:this.enableOutEvent=t;break;case`pointerenter`:this.enableEnterEvent=t;break;case`pointerleave`:this.enableLeaveEvent=t;break;default:}}handleOverEvent(e){this.enableOverEvent&&e.type===`mouseover`&&this._emit(`pointerover`,e)}handleOutEvent(e){this.enableOutEvent&&e.type===`mouseout`&&this._emit(`pointerout`,e)}handleEnterEvent(e){this.enableEnterEvent&&e.type===`mouseenter`&&this._emit(`pointerenter`,e)}handleLeaveEvent(e){this.enableLeaveEvent&&e.type===`mouseleave`&&this._emit(`pointerleave`,e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case`mousedown`:e.button>=0&&(this.pressed=!0);break;case`mousemove`:e.buttons===0&&(this.pressed=!1),this.pressed||this._emit(`pointermove`,e);break;case`mouseup`:this.pressed=!1;break;default:}}_emit(e,t){this.callback({type:e,center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:`mouse`,target:t.target})}}})),mp,hp,gp=e((()=>{np(),mp=[`keydown`,`keyup`],hp=class extends tp{constructor(e,t,n){super(e,t,{enable:!0,tabIndex:0,...n}),this.handleEvent=e=>{let t=e.target||e.srcElement;t.tagName===`INPUT`&&t.type===`text`||t.tagName===`TEXTAREA`||(this.enableDownEvent&&e.type===`keydown`&&this.callback({type:`keydown`,srcEvent:e,key:e.key,target:e.target}),this.enableUpEvent&&e.type===`keyup`&&this.callback({type:`keyup`,srcEvent:e,key:e.key,target:e.target}))},this.enableDownEvent=this.options.enable,this.enableUpEvent=this.options.enable,e.tabIndex=this.options.tabIndex,e.style.outline=`none`,mp.forEach(t=>e.addEventListener(t,this.handleEvent))}destroy(){mp.forEach(e=>this.element.removeEventListener(e,this.handleEvent))}enableEventType(e,t){e===`keydown`&&(this.enableDownEvent=t),e===`keyup`&&(this.enableUpEvent=t)}}})),_p,vp=e((()=>{np(),_p=class extends tp{constructor(e,t,n){super(e,t,n),this.handleEvent=e=>{this.options.enable&&this.callback({type:`contextmenu`,center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:`mouse`,target:e.target})},e.addEventListener(`contextmenu`,this.handleEvent)}destroy(){this.element.removeEventListener(`contextmenu`,this.handleEvent)}enableEventType(e,t){e===`contextmenu`&&(this.options.enable=t)}}}));function yp(e){let t=wp[e.srcEvent.type];if(!t)return null;let{buttons:n,button:r}=e.srcEvent,i=!1,a=!1,o=!1;return t===Sp?(i=!!(n&Op),a=!!(n&Ap),o=!!(n&kp)):(i=r===Tp,a=r===Ep,o=r===Dp),{leftButton:i,middleButton:a,rightButton:o}}function bp(e,t){let n=e.center;if(!n)return null;let r=t.getBoundingClientRect(),i=r.width/t.offsetWidth||1,a=r.height/t.offsetHeight||1;return{center:n,offsetCenter:{x:(n.x-r.left-t.clientLeft)/i,y:(n.y-r.top-t.clientTop)/a}}}var xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp=e((()=>{xp=1,Sp=2,Cp=4,wp={pointerdown:xp,pointermove:Sp,pointerup:Cp,mousedown:xp,mousemove:Sp,mouseup:Cp},Tp=0,Ep=1,Dp=2,Op=1,kp=2,Ap=4})),Mp,Np,Pp=e((()=>{jp(),Mp={srcElement:`root`,priority:0},Np=class{constructor(e,t){this.handleEvent=e=>{if(this.isEmpty())return;let t=this._normalizeEvent(e),n=e.srcEvent.target;for(;n&&n!==t.rootElement;){if(this._emit(t,n),t.handled)return;n=n.parentNode}this._emit(t,`root`)},this.eventManager=e,this.recognizerName=t,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,t,n,r=!1,i=!1){let{handlers:a,handlersByElement:o}=this,s={...Mp,...n},c=o.get(s.srcElement);c||(c=[],o.set(s.srcElement,c));let l={type:e,handler:t,srcElement:s.srcElement,priority:s.priority};r&&(l.once=!0),i&&(l.passive=!0),a.push(l),this._active=this._active||!l.passive;let u=c.length-1;for(;u>=0&&!(c[u].priority>=l.priority);)u--;c.splice(u+1,0,l)}remove(e,t){let{handlers:n,handlersByElement:r}=this;for(let i=n.length-1;i>=0;i--){let a=n[i];if(a.type===e&&a.handler===t){n.splice(i,1);let e=r.get(a.srcElement);e.splice(e.indexOf(a),1),e.length===0&&r.delete(a.srcElement)}}this._active=n.some(e=>!e.passive)}_emit(e,t){let n=this.handlersByElement.get(t);if(n){let t=!1,r=()=>{e.handled=!0},i=()=>{e.handled=!0,t=!0},a=[];for(let o=0;o<n.length;o++){let{type:s,handler:c,once:l}=n[o];if(c({...e,type:s,stopPropagation:r,stopImmediatePropagation:i}),l&&a.push(n[o]),t)break}for(let e=0;e<a.length;e++){let{type:t,handler:n}=a[e];this.remove(t,n)}}}_normalizeEvent(e){let t=this.eventManager.getElement();return{...e,...yp(e),...bp(e,t),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:t}}}}));function Fp(e){if(`recognizer`in e)return e;let t,n=Array.isArray(e)?[...e]:[e];return t=typeof n[0]==`function`?new(n.shift())(n.shift()||{}):n.shift(),{recognizer:t,recognizeWith:typeof n[0]==`string`?[n[0]]:n[0],requireFailure:typeof n[1]==`string`?[n[1]]:n[1]}}var Ip,Lp=e((()=>{ep(),up(),pp(),gp(),vp(),Pp(),Ip=class{constructor(e=null,t={}){if(this._onBasicInput=e=>{this.manager.emit(e.srcEvent.type,e)},this._onOtherEvent=e=>{this.manager.emit(e.type,e)},this.options={recognizers:[],events:{},touchAction:`compute`,tabIndex:0,cssProps:{},...t},this.events=new Map,this.element=e,e){this.manager=new jf(e,this.options);for(let e of this.options.recognizers){let{recognizer:t,recognizeWith:n,requireFailure:r}=Fp(e);this.manager.add(t),n&&t.recognizeWith(n),r&&t.requireFailure(r)}this.manager.on(`hammer.input`,this._onBasicInput),this.wheelInput=new lp(e,this._onOtherEvent,{enable:!1}),this.moveInput=new fp(e,this._onOtherEvent,{enable:!1}),this.keyInput=new hp(e,this._onOtherEvent,{enable:!1,tabIndex:t.tabIndex}),this.contextmenuInput=new _p(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}}getElement(){return this.element}destroy(){this.element&&(this.wheelInput.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy())}on(e,t,n){this._addEventHandler(e,t,n,!1)}once(e,t,n){this._addEventHandler(e,t,n,!0)}watch(e,t,n){this._addEventHandler(e,t,n,!1,!0)}off(e,t){this._removeEventHandler(e,t)}_toggleRecognizer(e,t){let{manager:n}=this;if(!n)return;let r=n.get(e);r&&(r.set({enable:t}),n.touchAction.update()),this.wheelInput?.enableEventType(e,t),this.moveInput?.enableEventType(e,t),this.keyInput?.enableEventType(e,t),this.contextmenuInput?.enableEventType(e,t)}_addEventHandler(e,t,n,r,i){if(typeof e!=`string`){n=t;for(let[t,a]of Object.entries(e))this._addEventHandler(t,a,n,r,i);return}let{manager:a,events:o}=this;if(!a)return;let s=o.get(e);if(!s){let t=this._getRecognizerName(e)||e;s=new Np(this,t),o.set(e,s),a&&a.on(e,s.handleEvent)}s.add(e,t,n,r,i),s.isEmpty()||this._toggleRecognizer(s.recognizerName,!0)}_removeEventHandler(e,t){if(typeof e!=`string`){for(let[t,n]of Object.entries(e))this._removeEventHandler(t,n);return}let{events:n}=this,r=n.get(e);if(r&&(r.remove(e,t),r.isEmpty())){let{recognizerName:e}=r,t=!1;for(let r of n.values())if(r.recognizerName===e&&!r.isEmpty()){t=!0;break}t||this._toggleRecognizer(e,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(t=>t.getEventNames().includes(e))?.options.event}}})),Rp=e((()=>{Lp(),ep()})),zp,q,Bp,Vp,Hp,Up=e((()=>{I(),Rp(),zp={DEFAULT:`default`,LNGLAT:`lnglat`,METER_OFFSETS:`meter-offsets`,LNGLAT_OFFSETS:`lnglat-offsets`,CARTESIAN:`cartesian`},Object.defineProperty(zp,"IDENTITY",{get:()=>(F.deprecated(`COORDINATE_SYSTEM.IDENTITY`,`COORDINATE_SYSTEM.CARTESIAN`)(),zp.CARTESIAN)}),q={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},Bp={common:0,meters:1,pixels:2},Vp={click:`onClick`,dblclick:`onClick`,panstart:`onDragStart`,panmove:`onDrag`,panend:`onDragEnd`},Hp={multipan:[Kf,{threshold:10,direction:G.Vertical,pointers:2}],pinch:[Xf,{},null,[`multipan`]],pan:[Kf,{threshold:1},[`pinch`],[`multipan`]],dblclick:[Uf,{event:`dblclick`,taps:2}],click:[Uf,{event:`click`},null,[`dblclick`]]}}));function Wp(e,t){if(e===t)return!0;if(Array.isArray(e)){let n=e.length;if(!t||t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}return!1}function Gp(e){let t={},n;return r=>{for(let i in r)if(!Wp(r[i],t[i])){n=e(r),t=r;break}return n}}var Kp=e((()=>{}));function qp(e){let t=rm[e];if(t===void 0)throw Error(`Invalid coordinateSystem: ${e}`);return t}function Jp(e,t,n=nm){n.length<3&&(n=[n[0],n[1],0]);let r=n,i,a=!0;switch(i=t===`lnglat-offsets`||t===`meter-offsets`?n:e.isGeospatial?[Math.fround(e.longitude),Math.fround(e.latitude),0]:null,e.projectionMode){case q.WEB_MERCATOR:(t===`lnglat`||t===`cartesian`)&&(i=[0,0,0],a=!1);break;case q.WEB_MERCATOR_AUTO_OFFSET:t===`lnglat`?r=i:t===`cartesian`&&(r=[Math.fround(e.center[0]),Math.fround(e.center[1]),0],i=e.unprojectPosition(r),r[0]-=n[0],r[1]-=n[1],r[2]-=n[2]);break;case q.IDENTITY:r=e.position.map(Math.fround),r[2]=r[2]||0;break;case q.GLOBE:a=!1,i=null;break;default:a=!1}return{geospatialOrigin:i,shaderCoordinateOrigin:r,offsetMode:a}}function Yp(e,t,n){let{viewMatrixUncentered:r,projectionMatrix:i}=e,{viewMatrix:a,viewProjectionMatrix:o}=e,s=Qp,c=Qp,l=e.cameraPosition,{geospatialOrigin:u,shaderCoordinateOrigin:d,offsetMode:f}=Jp(e,t,n);return f&&(c=e.projectPosition(u||d),l=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],c[3]=1,s=Xl([],c,o),a=r||a,o=Nl([],i,a),o=Nl([],o,$p)),{viewMatrix:a,viewProjectionMatrix:o,projectionCenter:s,originCommon:c,cameraPosCommon:l,shaderCoordinateOrigin:d,geospatialOrigin:u}}function Xp({viewport:e,devicePixelRatio:t=1,modelMatrix:n=null,coordinateSystem:r=`default`,coordinateOrigin:i=nm,autoWrapLongitude:a=!1}){r==="default"&&(r=e.isGeospatial?`lnglat`:`cartesian`);let o=im({viewport:e,devicePixelRatio:t,coordinateSystem:r,coordinateOrigin:i});return o.wrapLongitude=a,o.modelMatrix=n||em,o}function Zp({viewport:e,devicePixelRatio:t,coordinateSystem:n,coordinateOrigin:r}){let{projectionCenter:i,viewProjectionMatrix:a,originCommon:o,cameraPosCommon:s,shaderCoordinateOrigin:c,geospatialOrigin:l}=Yp(e,n,r),u=e.getDistanceScales(),d=[e.width*t,e.height*t],f=Xl([],[0,0,-e.focalDistance,1],e.projectionMatrix)[3]||1,p={coordinateSystem:qp(n),projectionMode:e.projectionMode,coordinateOrigin:c,commonOrigin:o.slice(0,3),center:i,pseudoMeters:!!e._pseudoMeters,viewportSize:d,devicePixelRatio:t,focalDistance:f,commonUnitsPerMeter:u.unitsPerMeter,commonUnitsPerWorldUnit:u.unitsPerMeter,commonUnitsPerWorldUnit2:tm,scale:e.scale,wrapLongitude:!1,viewProjectionMatrix:a,modelMatrix:em,cameraPosition:s};if(l){let t=e.getDistanceScales(l);switch(n){case`meter-offsets`:p.commonUnitsPerWorldUnit=t.unitsPerMeter,p.commonUnitsPerWorldUnit2=t.unitsPerMeter2;break;case`lnglat`:case`lnglat-offsets`:e._pseudoMeters||(p.commonUnitsPerMeter=t.unitsPerMeter),p.commonUnitsPerWorldUnit=t.unitsPerDegree,p.commonUnitsPerWorldUnit2=t.unitsPerDegree2;break;case`cartesian`:p.commonUnitsPerWorldUnit=[1,1,t.unitsPerMeter[2]],p.commonUnitsPerWorldUnit2=[0,0,t.unitsPerMeter2[2]];break;default:break}}return p}var Qp,$p,em,tm,nm,rm,im,am=e((()=>{U(),Up(),Kp(),Qp=[0,0,0,0],$p=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],em=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],tm=[0,0,0],nm=[0,0,0],rm={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3},im=Gp(Zp)})),om,sm,cm,lm,um,dm=e((()=>{Up(),am(),om=[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)}: i32 = ${qp(e)};`).join(``),sm=Object.keys(q).map(e=>`const PROJECTION_MODE_${e}: i32 = ${q[e]};`).join(``),cm=Object.keys(Bp).map(e=>`const UNIT_${e.toUpperCase()}: i32 = ${Bp[e]};`).join(``),lm=`\
${om}
${sm}
${cm}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`,um=`\
${lm}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  return viewProjectionMatrix * position + center;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`})),fm,pm,mm,hm,gm=e((()=>{Up(),am(),fm=[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const int COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)} = ${qp(e)};`).join(``),pm=Object.keys(q).map(e=>`const int PROJECTION_MODE_${e} = ${q[e]};`).join(``),mm=Object.keys(Bp).map(e=>`const int UNIT_${e.toUpperCase()} = ${Bp[e]};`).join(``),hm=`\
${fm}
${pm}
${mm}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`}));function _m(e=vm){return`viewport`in e?Xp(e):{}}var vm,ym,bm=e((()=>{ud(),Cd(),am(),dm(),gm(),vm={},ym={name:`project`,dependencies:[xu,Sd],source:um,vs:hm,getUniforms:_m,uniformTypes:{wrapLongitude:`f32`,coordinateSystem:`i32`,commonUnitsPerMeter:`vec3<f32>`,projectionMode:`i32`,scale:`f32`,commonUnitsPerWorldUnit:`vec3<f32>`,commonUnitsPerWorldUnit2:`vec3<f32>`,center:`vec4<f32>`,modelMatrix:`mat4x4<f32>`,viewProjectionMatrix:`mat4x4<f32>`,viewportSize:`vec2<f32>`,devicePixelRatio:`f32`,focalDistance:`f32`,cameraPosition:`vec3<f32>`,coordinateOrigin:`vec3<f32>`,commonOrigin:`vec3<f32>`,pseudoMeters:`f32`}}})),xm,Sm,Cm,wm=e((()=>{bm(),xm=`// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,Sm=`vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`,Cm={name:`project32`,dependencies:[ym],source:xm,vs:Sm}}));function Tm(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Em(e,t){let n=Xl([],t,e);return Yl(n,n,1/n[3]),n}function Dm(e,t,n){return e<t?t:e>n?n:e}function Om(e){return Math.log(e)*Math.LOG2E}var km,Am=e((()=>{U(),km=Math.log2||Om}));function jm(e,t){if(!e)throw Error(t||`@math.gl/web-mercator: assertion failed.`)}var Mm=e((()=>{}));function Nm(e){return km(e)}function Pm(e){let[t,n]=e;jm(Number.isFinite(t)),jm(Number.isFinite(n)&&n>=-90&&n<=90,`invalid latitude`);let r=t*J,i=n*J;return[Ym*(r+Km)/(2*Km),Ym*(Km+Math.log(Math.tan(qm+i*.5)))/(2*Km)]}function Fm(e){let[t,n]=e,r=t/Ym*(2*Km)-Km,i=2*(Math.atan(Math.exp(n/Ym*(2*Km)-Km))-qm);return[r*Jm,i*Jm]}function Im(e){let{latitude:t}=e;jm(Number.isFinite(t));let n=Math.cos(t*J);return Nm(Xm*n)-9}function Lm(e){let t=Math.cos(e*J);return Ym/Xm/t}function Rm(e){let{latitude:t,longitude:n,highPrecision:r=!1}=e;jm(Number.isFinite(t)&&Number.isFinite(n));let i=Ym,a=Math.cos(t*J),o=i/360,s=o/a,c=i/Xm/a,l={unitsPerMeter:[c,c,c],metersPerUnit:[1/c,1/c,1/c],unitsPerDegree:[o,s,c],degreesPerUnit:[1/o,1/s,1/c]};if(r){let e=J*Math.tan(t*J)/a,n=o*e/2,r=i/Xm*e,u=r/s*c;l.unitsPerDegree2=[0,n,r],l.unitsPerMeter2=[u,0,u]}return l}function zm(e,t){let[n,r,i]=e,[a,o,s]=t,{unitsPerMeter:c,unitsPerMeter2:l}=Rm({longitude:n,latitude:r,highPrecision:!0}),u=Pm(e);u[0]+=a*(c[0]+l[0]*o),u[1]+=o*(c[1]+l[1]*o);let d=Fm(u),f=(i||0)+(s||0);return Number.isFinite(i)||Number.isFinite(s)?[d[0],d[1],f]:d}function Bm(e){let{height:t,pitch:n,bearing:r,altitude:i,scale:a,center:o}=e,s=Tm();Pl(s,s,[0,0,-i]),Ll(s,s,-n*J),zl(s,s,r*J);let c=a/t;return Fl(s,s,[c,c,c]),o&&Pl(s,s,cl([],o)),s}function Vm(e){let{width:t,height:n,altitude:r,pitch:i=0,offset:a,center:o,scale:s,nearZMultiplier:c=1,farZMultiplier:l=1}=e,{fovy:u=Hm(Qm)}=e;r!==void 0&&(u=Hm(r));let d=u*J,f=i*J,p=Um(u),m=p;o&&(m+=o[2]*s/Math.cos(f)/n);let h=d*(.5+(a?a[1]:0)/n),g=Math.sin(h)*m/Math.sin(Dm(Math.PI/2-f-h,.01,Math.PI-.01)),_=Math.sin(f)*g+m,v=m*10,y=Math.min(_*l,v);return{fov:d,aspect:t/n,focalDistance:p,near:c,far:y}}function Hm(e){return 2*Math.atan(.5/e)*Jm}function Um(e){return .5/Math.tan(.5*e*J)}function Wm(e,t){let[n,r,i=0]=e;return jm(Number.isFinite(n)&&Number.isFinite(r)&&Number.isFinite(i)),Em(t,[n,r,i,1])}function Gm(e,t,n=0){let[r,i,a]=e;if(jm(Number.isFinite(r)&&Number.isFinite(i),`invalid pixel coordinate`),Number.isFinite(a))return Em(t,[r,i,a,1]);let o=Em(t,[r,i,0,1]),s=Em(t,[r,i,1,1]),c=o[2],l=s[2];return Xc([],o,s,c===l?0:((n||0)-c)/(l-c))}var Km,qm,J,Jm,Ym,Xm,Zm,Qm,$m=e((()=>{Am(),U(),Mm(),Km=Math.PI,qm=Km/4,J=Km/180,Jm=180/Km,Ym=512,Xm=4003e4,Zm=85.051129,Qm=1.5}));function eh(e){let{width:t,height:n,bounds:r,minExtent:i=0,maxZoom:a=24,offset:o=[0,0]}=e,[[s,c],[l,u]]=r,d=th(e.padding),f=Pm([s,Dm(u,-Zm,Zm)]),p=Pm([l,Dm(c,-Zm,Zm)]),m=[Math.max(Math.abs(p[0]-f[0]),i),Math.max(Math.abs(p[1]-f[1]),i)],h=[t-d.left-d.right-Math.abs(o[0])*2,n-d.top-d.bottom-Math.abs(o[1])*2];jm(h[0]>0&&h[1]>0);let g=h[0]/m[0],_=h[1]/m[1],v=(d.right-d.left)/2/g,y=(d.top-d.bottom)/2/_,b=Fm([(p[0]+f[0])/2+v,(p[1]+f[1])/2+y]),x=Math.min(a,km(Math.abs(Math.min(g,_))));return jm(Number.isFinite(x)),{longitude:b[0],latitude:b[1],zoom:x}}function th(e=0){return typeof e==`number`?{top:e,bottom:e,left:e,right:e}:(jm(Number.isFinite(e.top)&&Number.isFinite(e.bottom)&&Number.isFinite(e.left)&&Number.isFinite(e.right)),e)}var nh=e((()=>{Mm(),Am(),$m()}));function rh(e,t=0){let{width:n,height:r,unproject:i}=e,a={targetZ:t},o=i([0,r],a),s=i([n,r],a),c,l;return(e.fovy?.5*e.fovy*ah:Math.atan(.5/e.altitude))>(90-e.pitch)*ah-.01?(c=ih(e,0,t),l=ih(e,n,t)):(c=i([0,0],a),l=i([n,0],a)),[o,s,l,c]}function ih(e,t,n){let{pixelUnprojectionMatrix:r}=e,i=Em(r,[t,0,1,1]),a=Em(r,[t,e.height,1,1]),o=Fm(Xc([],i,a,(n*e.distanceScales.unitsPerMeter[2]-i[2])/(a[2]-i[2])));return o.push(n),o}var ah,oh=e((()=>{U(),$m(),Am(),ah=Math.PI/180})),sh=e((()=>{$m(),nh(),oh()})),ch=e((()=>{$m()})),lh=e((()=>{$m()})),uh=e((()=>{sh(),oh(),nh(),ch(),lh(),$m()}));function dh(e,t){let[n,r,i]=e,a=Gm([n,r,i],t);return Number.isFinite(i)?a:[a[0],a[1],0]}function fh({viewport:e,center:t}){return new cu(e.viewProjectionMatrix).invert().transform(t)}function ph({viewport:e,shadowMatrices:t}){let n=[],r=e.pixelUnprojectionMatrix,i=e.isGeospatial?void 0:1,a=[[0,0,i],[e.width,0,i],[0,e.height,i],[e.width,e.height,i],[0,0,-1],[e.width,0,-1],[0,e.height,-1],[e.width,e.height,-1]].map(e=>dh(e,r));for(let r of t){let t=r.clone().translate(new Tl(e.center).negate()),i=a.map(e=>t.transform(e)),o=new cu().ortho({left:Math.min(...i.map(e=>e[0])),right:Math.max(...i.map(e=>e[0])),bottom:Math.min(...i.map(e=>e[1])),top:Math.max(...i.map(e=>e[1])),near:Math.min(...i.map(e=>-e[2])),far:Math.max(...i.map(e=>-e[2]))});n.push(o.multiplyRight(r))}return n}function mh(e){let{shadowEnabled:t=!0,project:n}=e;if(!t||!n||!e.shadowMatrices||!e.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};let r=ym.getUniforms(n),i=vh({viewport:n.viewport,center:r.center}),a=[],o=yh({shadowMatrices:e.shadowMatrices,viewport:n.viewport}).slice();for(let t=0;t<e.shadowMatrices.length;t++){let e=o[t],s=e.clone().translate(new Tl(n.viewport.center).negate());r.coordinateSystem===qp(`lnglat`)&&r.projectionMode===q.WEB_MERCATOR?(o[t]=s,a[t]=i):(o[t]=e.clone().multiplyRight(xh),a[t]=s.transform(i))}let s={drawShadowMap:!!e.drawToShadowMap,useShadowMap:e.shadowMaps?e.shadowMaps.length>0:!1,color:e.shadowColor||bh,lightId:e.shadowLightId||0,lightCount:e.shadowMatrices.length,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};for(let e=0;e<o.length;e++)s[`viewProjectionMatrix${e}`]=o[e],s[`projectCenter${e}`]=a[e];for(let t=0;t<2;t++)s[`shadow_uShadowMap${t}`]=e.shadowMaps&&e.shadowMaps[t]||e.dummyShadowMap;return s}var hh,gh,_h,vh,yh,bh,xh,Sh,Ch=e((()=>{Up(),bm(),U(),Kp(),uh(),am(),hh=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,gh=`
${hh}

const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}

`,_h=`
${hh}

const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}

`,vh=Gp(fh),yh=Gp(ph),bh=[0,0,0,1],xh=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],Sh={name:`shadow`,dependencies:[ym],vs:gh,fs:_h,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:mh,uniformTypes:{drawShadowMap:`f32`,useShadowMap:`f32`,color:`vec4<f32>`,lightId:`i32`,lightCount:`f32`,viewProjectionMatrix0:`mat4x4<f32>`,viewProjectionMatrix1:`mat4x4<f32>`,projectCenter0:`vec4<f32>`,projectCenter1:`vec4<f32>`}}})),wh,Th,Eh=e((()=>{ud(),wh=`struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}
`,Th={...Ru,source:wh,defaultUniforms:{...Ru.defaultUniforms,useByteColors:!0},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}}}));function Dh(e){let t=bc.getDefaultShaderAssembler();for(let e of Oh)t.addDefaultModule(e);t._hookFunctions.length=0;let n=e===`glsl`?kh:Ah;for(let e of n)t.addShaderHook(e);return t}var Oh,kh,Ah,jh=e((()=>{ud(),md(),_d(),Cd(),wm(),Eh(),Oh=[Sd],kh=[`vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)`,`vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)`,`vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)`,`fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)`],Ah=[]})),Mh,Nh,Ph,Fh,Ih=e((()=>{Mh=[255,255,255],Nh=1,Ph=0,Fh=class{constructor(e={}){this.type=`ambient`;let{color:t=Mh}=e,{intensity:n=Nh}=e;this.id=e.id||`ambient-${Ph++}`,this.color=t,this.intensity=n}}})),Lh,Rh,zh,Bh,Vh,Hh=e((()=>{U(),Lh=[255,255,255],Rh=1,zh=[0,0,-1],Bh=0,Vh=class{constructor(e={}){this.type=`directional`;let{color:t=Lh}=e,{intensity:n=Rh}=e,{direction:r=zh}=e,{_shadow:i=!1}=e;this.id=e.id||`directional-${Bh++}`,this.color=t,this.intensity=n,this.type=`directional`,this.direction=new Tl(r).normalize().toArray(),this.shadow=i}getProjectedLight(e){return this}}})),Uh,Wh=e((()=>{Uh=class{constructor(e,t={id:`pass`}){let{id:n}=t;this.id=n,this.device=e,this.props={...t}}setProps(e){Object.assign(this.props,e)}render(e){}cleanup(){}}}));function Gh(e=0,t={}){let n={},r=(i,a)=>{let o=i.props._offset,s=i.id,c=i.parent&&i.parent.id,l;if(c&&!(c in t)&&r(i.parent,!1),c in n){let e=n[c]=n[c]||Gh(t[c],t);l=e(i,a),n[s]=e}else Number.isFinite(o)?(l=o+(t[c]||0),n[s]=null):l=e;return a&&l>=e&&(e=l+1),t[s]=l,l};return r}function Kh(e,{shaderModuleProps:t,target:n,viewport:r}){let i=t?.project?.devicePixelRatio??e.canvasContext.cssToDeviceRatio(),[,a]=e.canvasContext.getDrawingBufferSize(),o=n?n.height:a,s=r;return[s.x*i,o-(s.y+s.height)*i,s.width*i,s.height*i]}function qh(e,...t){for(let n of t)if(n)for(let t in n)e[t]?Object.assign(e[t],n[t]):e[t]=n[t];return e}var Jh,Yh,Xh=e((()=>{Wh(),Jh={depthWriteEnabled:!0,depthCompare:`less-equal`,blendColorOperation:`add`,blendColorSrcFactor:`src-alpha`,blendColorDstFactor:`one`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one-minus-dst-alpha`,blendAlphaDstFactor:`one`},Yh=class extends Uh{constructor(){super(...arguments),this._lastRenderIndex=-1}render(e){this._render(e)}_render(e){let t=this.device.canvasContext,n=e.target??t.getCurrentFramebuffer(),[r,i]=t.getDrawingBufferSize(),a=e.clearCanvas??!0,o=e.clearColor??(a?[0,0,0,0]:!1),s=a?1:!1,c=a?0:!1,l=e.colorMask??15,u={viewport:[0,0,r,i]};e.colorMask&&(u.colorMask=l),e.scissorRect&&(u.scissorRect=e.scissorRect);let d=this.device.beginRenderPass({framebuffer:n,parameters:u,clearColor:o,clearDepth:s,clearStencil:c});try{return this._drawLayers(d,e)}finally{d.end(),this.device.submit()}}_drawLayers(e,t){let{target:n,shaderModuleProps:r,viewports:i,views:a,onViewportActive:o,clearStack:s=!0}=t;t.pass=t.pass||`unknown`,s&&(this._lastRenderIndex=-1);let c=[];for(let s of i){let i=a&&a[s.id];o?.(s);let l=this._getDrawLayerParams(s,t),u=s.subViewports||[s];for(let a of u){let o=this._drawLayersInViewport(e,{target:n,shaderModuleProps:r,viewport:a,view:i,pass:t.pass,layers:t.layers,isPicking:t.isPicking},l);c.push(o)}}return c}_getDrawLayerParams(e,{layers:t,pass:n,isPicking:r=!1,layerFilter:i,cullRect:a,views:o,effects:s,shaderModuleProps:c},l=!1){let u=[],d=Gh(this._lastRenderIndex+1),f={layer:t[0],viewport:e,isPicking:r,renderPass:n,cullRect:a},p={};for(let r=0;r<t.length;r++){let a=t[r],m=this._shouldDrawLayer(a,f,i,p),h={shouldDrawLayer:m};m&&!l&&(h.shouldDrawLayer=!0,h.layerRenderIndex=d(a,m),h.shaderModuleProps=this._getShaderModuleProps(a,s,n,c),h.layerParameters={...a.context.device.type===`webgpu`?Jh:null,...a.context.deck?.props.parameters,...o?.[e.id]?.props.parameters,...this.getLayerParameters(a,r,e)}),u[r]=h}return u}_drawLayersInViewport(e,{layers:t,shaderModuleProps:n,pass:r,target:i,viewport:a,view:o,isPicking:s},c){let l=Kh(this.device,{shaderModuleProps:n,target:i,viewport:a});if(o){let{clear:e,clearColor:t,clearDepth:n,clearStencil:r}=o.props;if(e){let e=[0,0,0,0],a=1,o=0;Array.isArray(t)&&!s?e=[...t.slice(0,3),t[3]||255].map(e=>e/255):t===!1&&(e=!1),n!==void 0&&(a=n),r!==void 0&&(o=r),this.device.beginRenderPass({framebuffer:i,parameters:{viewport:l,scissorRect:l},clearColor:e,clearDepth:a,clearStencil:o}).end()}}let u={totalCount:t.length,visibleCount:0,compositeCount:0,pickableCount:0};e.setParameters({viewport:l});for(let n=0;n<t.length;n++){let i=t[n],o=c[n],{shouldDrawLayer:s}=o;if(s&&i.props.pickable&&u.pickableCount++,i.isComposite&&u.compositeCount++,i.isDrawable&&o.shouldDrawLayer){let{layerRenderIndex:t,shaderModuleProps:n,layerParameters:s}=o;u.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,t),n.project&&(n.project.viewport=a),i.context.renderPass=e;try{i._drawLayer({renderPass:e,shaderModuleProps:n,uniforms:{layerIndex:t},parameters:s})}catch(e){i.raiseError(e,`drawing ${i} to ${r}`)}}}return u}shouldDrawLayer(e){return!0}getShaderModuleProps(e,t,n){return null}getLayerParameters(e,t,n){return e.props.parameters}_shouldDrawLayer(e,t,n,r){if(!(e.props.visible&&this.shouldDrawLayer(e)))return!1;t.layer=e;let i=e.parent;for(;i;){if(!i.props.visible||!i.filterSubLayer(t))return!1;t.layer=i,i=i.parent}if(n){let e=t.layer.id;if(e in r||(r[e]=n(t)),!r[e])return!1}return e.activateViewport(t.viewport),!0}_getShaderModuleProps(e,t,n,r){let i=this.device.canvasContext.cssToDeviceRatio(),a=e.internalState?.propsInTransition||e.props,o={layer:a,picking:{isActive:!1},project:{viewport:e.context.viewport,devicePixelRatio:i,modelMatrix:a.modelMatrix,coordinateSystem:a.coordinateSystem,coordinateOrigin:a.coordinateOrigin,autoWrapLongitude:e.wrapLongitude}};if(t)for(let n of t)qh(o,n.getShaderModuleProps?.(e,o));for(let t of e.context.defaultShaderModules)t.name in o||(o[t.name]={});return qh(o,this.getShaderModuleProps(e,t,o),r)}}})),Zh,Qh=e((()=>{Xh(),Zh=class extends Yh{constructor(e,t){super(e,t);let n=e.createTexture({format:`rgba8unorm`,width:1,height:1,sampler:{minFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`}}),r=e.createTexture({format:`depth16unorm`,width:1,height:1});this.fbo=e.createFramebuffer({id:`shadowmap`,width:1,height:1,colorAttachments:[n],depthStencilAttachment:r})}delete(){this.fbo&&=(this.fbo.destroy(),null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(e){let t=this.fbo,n=this.device.canvasContext.cssToDeviceRatio(),r=e.viewports[0],i=r.width*n,a=r.height*n,o=[1,1,1,1];(i!==t.width||a!==t.height)&&t.resize({width:i,height:a}),super.render({...e,clearColor:o,target:t,pass:`shadow`})}getLayerParameters(e,t,n){return{...e.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:`less-equal`}}shouldDrawLayer(e){return e.props.shadowEnabled!==!1}getShaderModuleProps(e,t,n){return{shadow:{project:n.project,drawToShadowMap:!0}}}}})),$h,eg,tg,ng,rg=e((()=>{Ih(),Hh(),U(),Qh(),Ch(),$h={color:[255,255,255],intensity:1},eg=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],tg=[0,0,0,200/255],ng=class{constructor(e={}){this.id=`lighting-effect`,this.shadowColor=tg,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(e)}setup(e){this.context=e;let{device:t,deck:n}=e;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(t),n._addDefaultShaderModule(Sh),this.dummyShadowMap=t.createTexture({width:1,height:1}))}setProps(e){this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[];for(let t in e){let n=e[t];switch(n.type){case`ambient`:this.ambientLight=n;break;case`directional`:this.directionalLights.push(n);break;case`point`:this.pointLights.push(n);break;default:}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(e=>e.shadow),this.context&&this.setup(this.context),this.props=e}preRender({layers:e,layerFilter:t,viewports:n,onViewportActive:r,views:i}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let a=0;a<this.shadowPasses.length;a++)this.shadowPasses[a].render({layers:e,layerFilter:t,viewports:n,onViewportActive:r,views:i,shaderModuleProps:{shadow:{shadowLightId:a,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(e,t){let n=this.shadow?{project:t.project,shadowMaps:this.shadowPasses.map(e=>e.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},r={enabled:!0,lights:this._getLights(e)},i=e.props.material;return{shadow:n,lighting:r,phongMaterial:i,gouraudMaterial:i}}cleanup(e){for(let e of this.shadowPasses)e.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,e.deck._removeDefaultShaderModule(Sh))}_calculateMatrices(){let e=[];for(let t of this.directionalLights){let n=new cu().lookAt({eye:new Tl(t.direction).negate()});e.push(n)}return e}_createShadowPasses(e){for(let t=0;t<this.directionalLights.length;t++){let n=new Zh(e);this.shadowPasses[t]=n}}_applyDefaultLights(){let{ambientLight:e,pointLights:t,directionalLights:n}=this;!e&&t.length===0&&n.length===0&&(this.ambientLight=new Fh($h),this.directionalLights.push(new Vh(eg[0]),new Vh(eg[1])))}_getLights(e){let t=[];this.ambientLight&&t.push(this.ambientLight);for(let n of this.pointLights)t.push(n.getProjectedLight({layer:e}));for(let n of this.directionalLights)t.push(n.getProjectedLight({layer:e}));return t}}})),ig,ag,og=e((()=>{ig=class{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,t,{size:n=1,type:r,padding:i=0,copy:a=!1,initialize:o=!1,maxCount:s}){let c=r||e&&e.constructor||Float32Array,l=t*n+i;if(ArrayBuffer.isView(e)){if(l<=e.length)return e;if(l*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new c(e.buffer,0,l)}let u=1/0;s&&(u=s*n+i);let d=this._allocate(c,l,o,u);return e&&a?d.set(e):o||d.fill(0,0,4),this._release(e),d}release(e){this._release(e)}_allocate(e,t,n,r){let i=Math.max(Math.ceil(t*this.opts.overAlloc),1);i>r&&(i=r);let a=this._pool,o=e.BYTES_PER_ELEMENT*i,s=a.findIndex(e=>e.byteLength>=o);if(s>=0){let t=new e(a.splice(s,1)[0],0,i);return n&&t.fill(0),t}return new e(i)}_release(e){if(!ArrayBuffer.isView(e))return;let t=this._pool,{buffer:n}=e,{byteLength:r}=n,i=t.findIndex(e=>e.byteLength>=r);i<0?t.push(n):(i>0||t.length<this.opts.poolSize)&&t.splice(i,0,n),t.length>this.opts.poolSize&&t.shift()}},ag=new ig}));function sg(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function cg(e,t){let n=e%t;return n<0?t+n:n}function lg(e){return[e[12],e[13],e[14]]}function ug(e){return{left:dg(e[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),right:dg(e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),bottom:dg(e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),top:dg(e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),near:dg(e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]),far:dg(e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14])}}function dg(e,t,n,r){hg.set(e,t,n);let i=hg.len();return{distance:r/i,normal:new Tl(-e/i,-t/i,-n/i)}}function fg(e){return e-Math.fround(e)}function pg(e,t){let{size:n=1,startIndex:r=0}=t,i=t.endIndex===void 0?e.length:t.endIndex,a=(i-r)/n;gg=ag.allocate(gg,a,{type:Float32Array,size:n*2});let o=r,s=0;for(;o<i;){for(let t=0;t<n;t++){let r=e[o++];gg[s+t]=r,gg[s+t+n]=fg(r)}s+=n*2}return gg.subarray(0,a*n*2)}function mg(e){let t=null,n=!1;for(let r of e)r&&(t?(n||=(t=[[t[0][0],t[0][1]],[t[1][0],t[1][1]]],!0),t[0][0]=Math.min(t[0][0],r[0][0]),t[0][1]=Math.min(t[0][1],r[0][1]),t[1][0]=Math.max(t[1][0],r[1][0]),t[1][1]=Math.max(t[1][1],r[1][1])):t=r);return t}var hg,gg,_g=e((()=>{og(),U(),hg=new Tl}));function vg({width:e,height:t,orthographic:n,fovyRadians:r,focalDistance:i,padding:a,near:o,far:s}){let c=e/t,l=n?new cu().orthographic({fovy:r,aspect:c,focalDistance:i,near:o,far:s}):new cu().perspective({fovy:r,aspect:c,near:o,far:s});if(a){let{left:n=0,right:r=0,top:i=0,bottom:o=0}=a,s=B((n+e-r)/2,0,e)-e/2,c=B((i+t-o)/2,0,t)-t/2;l[8]-=s*2/e,l[9]+=c*2/t}return l}var yg,bg,xg,Sg,Cg,wg=e((()=>{I(),_g(),U(),uh(),Up(),yg=Math.PI/180,bg=sg(),xg=[0,0,0],Sg={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]},Cg=class e{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||`viewport`,this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||Sg,this.focalDistance=e.focalDistance||1,this.position=e.position||xg,this.modelMatrix=e.modelMatrix||null;let{longitude:t,latitude:n}=e;this.isGeospatial=Number.isFinite(n)&&Number.isFinite(t),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?q.WEB_MERCATOR:q.WEB_MERCATOR_AUTO_OFFSET:q.IDENTITY}equals(t){return t instanceof e?this===t||t.width===this.width&&t.height===this.height&&t.scale===this.scale&&Ac(t.projectionMatrix,this.projectionMatrix)&&Ac(t.viewMatrix,this.viewMatrix):!1}project(e,{topLeft:t=!0}={}){let n=Wm(this.projectPosition(e),this.pixelProjectionMatrix),[r,i]=n,a=t?i:this.height-i;return e.length===2?[r,a]:[r,a,n[2]]}unproject(e,{topLeft:t=!0,targetZ:n}={}){let[r,i,a]=e,o=t?i:this.height-i,s=n&&n*this.distanceScales.unitsPerMeter[2],c=Gm([r,o,a],this.pixelUnprojectionMatrix,s),[l,u,d]=this.unprojectPosition(c);return Number.isFinite(a)?[l,u,d]:Number.isFinite(n)?[l,u,n]:[l,u]}projectPosition(e){let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){let t=Pm(e);return t[1]=B(t[1],-318,830),t}return e}unprojectFlat(e){return this.isGeospatial?Fm(e):e}getBounds(e={}){let t={targetZ:e.z||0},n=this.unproject([0,0],t),r=this.unproject([this.width,0],t),i=this.unproject([0,this.height],t),a=this.unproject([this.width,this.height],t);return[Math.min(n[0],r[0],i[0],a[0]),Math.min(n[1],r[1],i[1],a[1]),Math.max(n[0],r[0],i[0],a[0]),Math.max(n[1],r[1],i[1],a[1])]}getDistanceScales(e){return e&&this.isGeospatial?Rm({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:t,width:n=1,height:r=1}){return e<this.x+this.width&&this.x<e+n&&t<this.y+this.height&&this.y<t+r}getFrustumPlanes(){return this._frustumPlanes.near||Object.assign(this._frustumPlanes,ug(this.viewProjectionMatrix)),this._frustumPlanes}panByPosition(e,t,n){return null}_initProps(e){let t=e.longitude,n=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=Im({latitude:n})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||Rm({latitude:n,longitude:t}));let r=2**this.zoom;this.scale=r;let{position:i,modelMatrix:a}=e,o=xg;if(i&&(o=a?new cu(a).transformAsVector(i,[]):i),this.isGeospatial){let e=this.projectPosition([t,n,0]);this.center=new Tl(o).scale(this.distanceScales.unitsPerMeter).add(e)}else this.center=this.projectPosition(o)}_initMatrices(e){let{viewMatrix:t=bg,projectionMatrix:n=null,orthographic:r=!1,fovyRadians:i,fovy:a=75,near:o=.1,far:s=1e3,padding:c=null,focalDistance:l=1}=e;this.viewMatrixUncentered=t,this.viewMatrix=new cu().multiplyRight(t).translate(new Tl(this.center).negate()),this.projectionMatrix=n||vg({width:this.width,height:this.height,orthographic:r,fovyRadians:i||a*yg,focalDistance:l,padding:c,near:o,far:s});let u=sg();Nl(u,u,this.projectionMatrix),Nl(u,u,this.viewMatrix),this.viewProjectionMatrix=u,this.viewMatrixInverse=jl([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=lg(this.viewMatrixInverse);let d=sg(),f=sg();Fl(d,d,[this.width/2,-this.height/2,1]),Pl(d,d,[1,-1,0]),Nl(f,d,this.viewProjectionMatrix),this.pixelProjectionMatrix=f,this.pixelUnprojectionMatrix=jl(sg(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||F.warn(`Pixel project matrix not invertible`)()}},Cg.displayName=`Viewport`})),Tg,Eg=e((()=>{wg(),uh(),U(),Tg=class e extends Cg{constructor(e={}){let{latitude:t=0,longitude:n=0,zoom:r=0,pitch:i=0,bearing:a=0,nearZMultiplier:o=.1,farZMultiplier:s=1.01,nearZ:c,farZ:l,orthographic:u=!1,projectionMatrix:d,repeat:f=!1,worldOffset:p=0,position:m,padding:h,legacyMeterSizes:g=!1}=e,{width:_,height:v,altitude:y=1.5}=e,b=2**r;_||=1,v||=1;let x,S=null;if(d)y=d[5]/2,x=Hm(y);else{e.fovy?(x=e.fovy,y=Um(x)):x=Hm(y);let n;if(h){let{top:e=0,bottom:t=0}=h;n=[0,B((e+v-t)/2,0,v)-v/2]}S=Vm({width:_,height:v,scale:b,center:m&&[0,0,m[2]*Lm(t)],offset:n,pitch:i,fovy:x,nearZMultiplier:o,farZMultiplier:s}),Number.isFinite(c)&&(S.near=c),Number.isFinite(l)&&(S.far=l)}let C=Bm({height:v,pitch:i,bearing:a,scale:b,altitude:y});p&&(C=new cu().translate([512*p,0,0]).multiplyLeft(C)),super({...e,width:_,height:v,viewMatrix:C,longitude:n,latitude:t,zoom:r,...S,fovy:x,focalDistance:y}),this.latitude=t,this.longitude=n,this.zoom=r,this.pitch=i,this.bearing=a,this.altitude=y,this.fovy=x,this.orthographic=u,this._subViewports=f?[]:null,this._pseudoMeters=g,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let t=this.getBounds(),n=Math.floor((t[0]+180)/360),r=Math.ceil((t[2]-180)/360);for(let t=n;t<=r;t++){let n=t?new e({...this,worldOffset:t}):this;this._subViewports.push(n)}}return this._subViewports}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*Lm(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)/Lm(n)]}addMetersToLngLat(e,t){return zm(e,t)}panByPosition(e,t,n){let r=Gm(t,this.pixelUnprojectionMatrix),i=qc([],this.projectFlat(e),Yc([],r)),a=qc([],this.center,i),[o,s]=this.unprojectFlat(a);return{longitude:o,latitude:s}}panByPosition3D(e,t){let n=e[2]||0,r=Qc([],e,this.unproject(t,{targetZ:n}));return{longitude:this.longitude+r[0],latitude:this.latitude+r[1]}}getBounds(e={}){let t=rh(this,e.z||0);return[Math.min(t[0][0],t[1][0],t[2][0],t[3][0]),Math.min(t[0][1],t[1][1],t[2][1],t[3][1]),Math.max(t[0][0],t[1][0],t[2][0],t[3][0]),Math.max(t[0][1],t[1][1],t[2][1],t[3][1])]}fitBounds(t,n={}){let{width:r,height:i}=this,{longitude:a,latitude:o,zoom:s}=eh({width:r,height:i,bounds:t,...n});return new e({width:r,height:i,longitude:a,latitude:o,zoom:s})}},Tg.displayName=`WebMercatorViewport`}));function Dg(e,t,n=!1){let r=t.projectPosition(e);if(n&&t instanceof Tg){let[n,i,a=0]=e;r[2]=a*t.getDistanceScales([n,i]).unitsPerMeter[2]}return r}function Og(e){let{viewport:t,modelMatrix:n,coordinateOrigin:r}=e,{coordinateSystem:i,fromCoordinateSystem:a,fromCoordinateOrigin:o}=e;return i==="default"&&(i=t.isGeospatial?`lnglat`:`cartesian`),a===void 0?a=i:a==="default"&&(a=t.isGeospatial?`lnglat`:`cartesian`),o===void 0&&(o=r),{viewport:t,coordinateSystem:i,coordinateOrigin:r,modelMatrix:n,fromCoordinateSystem:a,fromCoordinateOrigin:o}}function kg(e,{viewport:t,modelMatrix:n,coordinateSystem:r,coordinateOrigin:i,offsetMode:a}){let[o,s,c=0]=e;switch(n&&([o,s,c]=Xl([],[o,s,c,1],n)),r){case`default`:return kg(e,{viewport:t,modelMatrix:n,coordinateSystem:t.isGeospatial?`lnglat`:`cartesian`,coordinateOrigin:i,offsetMode:a});case`lnglat`:return Dg([o,s,c],t,a);case`lnglat-offsets`:return Dg([o+i[0],s+i[1],c+(i[2]||0)],t,a);case`meter-offsets`:return Dg(zm(i,[o,s,c]),t,a);case`cartesian`:return t.isGeospatial?[o+i[0],s+i[1],c+i[2]]:t.projectPosition([o,s,c]);default:throw Error(`Invalid coordinateSystem: ${r}`)}}function Ag(e,t){let{viewport:n,coordinateSystem:r,coordinateOrigin:i,modelMatrix:a,fromCoordinateSystem:o,fromCoordinateOrigin:s}=Og(t),{autoOffset:c=!0}=t,{geospatialOrigin:l=jg,shaderCoordinateOrigin:u=jg,offsetMode:d=!1}=c?Jp(n,r,i):{},f=kg(e,{viewport:n,modelMatrix:a,coordinateSystem:o,coordinateOrigin:s,offsetMode:d});if(d){let e=n.projectPosition(l||u);yl(f,f,e)}return f}var jg,Mg=e((()=>{am(),Eg(),U(),uh(),jg=[0,0,0]}));function Ng(e){return e.attenuation?e.attenuation:Ig}var Pg,Fg,Ig,Lg,Rg,zg,Bg=e((()=>{Mg(),Up(),Pg=[255,255,255],Fg=1,Ig=[1,0,0],Lg=[0,0,1],Rg=0,zg=class{constructor(e={}){this.type=`point`;let{color:t=Pg}=e,{intensity:n=Fg}=e,{position:r=Lg}=e;this.id=e.id||`point-${Rg++}`,this.color=t,this.intensity=n,this.type=`point`,this.position=r,this.attenuation=Ng(e),this.projectedLight={...this}}getProjectedLight({layer:e}){let{projectedLight:t}=this,n=e.context.viewport,{coordinateSystem:r,coordinateOrigin:i}=e.props,a=Ag(this.position,{viewport:n,coordinateSystem:r,coordinateOrigin:i,fromCoordinateSystem:n.isGeospatial?zp.LNGLAT:zp.CARTESIAN,fromCoordinateOrigin:[0,0,0]});return t.color=this.color,t.intensity=this.intensity,t.position=a,t}}})),Vg,Hg=e((()=>{Bg(),am(),Vg=class extends zg{getProjectedLight({layer:e}){let{projectedLight:t}=this,n=e.context.viewport,{coordinateSystem:r,coordinateOrigin:i,modelMatrix:a}=e.props,{cameraPosition:o}=Xp({viewport:n,modelMatrix:a,coordinateSystem:r,coordinateOrigin:i});return t.color=this.color,t.intensity=this.intensity,t.position=o,t}}}));function Ug(e,t,n){let r=t_*-n,i=t_*t,a=Kg(e),o=e_(a),s=Zg(a,r)-o.rightAscension;return{azimuth:Yg(s,i,o.declination),altitude:Xg(s,i,o.declination)}}function Wg(e,t,n){let{azimuth:r,altitude:i}=Ug(e,t,n);return[Math.sin(r)*Math.cos(i),Math.cos(r)*Math.cos(i),-Math.sin(i)]}function Gg(e){return(typeof e==`number`?e:e.getTime())/n_-.5+r_}function Kg(e){return Gg(e)-i_}function qg(e,t){let n=e;return Math.atan2(Math.sin(n)*Math.cos(a_)-Math.tan(t)*Math.sin(a_),Math.cos(n))}function Jg(e,t){let n=e;return Math.asin(Math.sin(t)*Math.cos(a_)+Math.cos(t)*Math.sin(a_)*Math.sin(n))}function Yg(e,t,n){let r=e,i=t,a=n;return Math.atan2(Math.sin(r),Math.cos(r)*Math.sin(i)-Math.tan(a)*Math.cos(i))}function Xg(e,t,n){let r=e,i=t,a=n;return Math.asin(Math.sin(i)*Math.sin(a)+Math.cos(i)*Math.cos(a)*Math.cos(r))}function Zg(e,t){return t_*(c_+l_*e)-t}function Qg(e){return t_*(o_+s_*e)}function $g(e){let t=e,n=t_*(1.9148*Math.sin(t)+.02*Math.sin(2*t)+3e-4*Math.sin(3*t)),r=t_*102.9372;return t+n+r+Math.PI}function e_(e){let t=$g(Qg(e));return{declination:Jg(t,0),rightAscension:qg(t,0)}}var t_,n_,r_,i_,a_,o_,s_,c_,l_,u_=e((()=>{t_=Math.PI/180,n_=1e3*60*60*24,r_=2440588,i_=2451545,a_=t_*23.4397,o_=357.5291,s_=.98560028,c_=280.147,l_=360.9856235})),d_=e((()=>{u_()})),f_,p_=e((()=>{Hh(),d_(),f_=class extends Vh{constructor(e){super(e),this.timestamp=e.timestamp}getProjectedLight({layer:e}){let{viewport:t}=e.context;if(t.resolution&&t.resolution>0){let[e,t,n]=Wg(this.timestamp,0,0);this.direction=[e,-n,t]}else{let{latitude:e,longitude:n}=t;this.direction=Wg(this.timestamp,e,n)}return this}}})),m_,h_,g_,__=e((()=>{m_=1,h_=1,g_=class{time=0;channels=new Map;animations=new Map;playing=!1;lastEngineTime=-1;constructor(){}addChannel(e){let{delay:t=0,duration:n=1/0,rate:r=1,repeat:i=1}=e,a=m_++,o={time:0,delay:t,duration:n,rate:r,repeat:i};return this._setChannelTime(o,this.time),this.channels.set(a,o),a}removeChannel(e){this.channels.delete(e);for(let[t,n]of this.animations)n.channel===e&&this.detachAnimation(t)}isFinished(e){let t=this.channels.get(e);return t!==void 0&&this.time>=t.delay+t.duration*t.repeat}getTime(e){if(e===void 0)return this.time;let t=this.channels.get(e);return t===void 0?-1:t.time}setTime(e){this.time=Math.max(0,e);let t=this.channels.values();for(let e of t)this._setChannelTime(e,this.time);let n=this.animations.values();for(let e of n){let{animation:t,channel:n}=e;t.setTime(this.getTime(n))}}play(){this.playing=!0}pause(){this.playing=!1,this.lastEngineTime=-1}reset(){this.setTime(0)}attachAnimation(e,t){let n=h_++;return this.animations.set(n,{animation:e,channel:t}),e.setTime(this.getTime(t)),n}detachAnimation(e){this.animations.delete(e)}update(e){this.playing&&(this.lastEngineTime===-1&&(this.lastEngineTime=e),this.setTime(this.time+(e-this.lastEngineTime)),this.lastEngineTime=e)}_setChannelTime(e,t){let n=t-e.delay;n>=e.duration*e.repeat?e.time=e.duration*e.rate:(e.time=Math.max(0,n)%e.duration,e.time*=e.rate)}}}));function v_(e){let t=typeof window<`u`?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:null;return t?t.call(window,e):setTimeout(()=>e(typeof performance<`u`?performance.now():Date.now()),1e3/60)}function y_(e){let t=typeof window<`u`?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame:null;if(t){t.call(window,e);return}clearTimeout(e)}var b_=e((()=>{})),x_,S_,C_,w_=e((()=>{O(),b_(),_(),x_=0,S_=`Animation Loop`,C_=class e{static defaultAnimationLoopProps={device:null,onAddHTML:()=>``,onInitialize:async()=>null,onRender:()=>{},onFinalize:()=>{},onError:e=>console.error(e),stats:void 0,autoResizeViewport:!1};device=null;canvas=null;props;animationProps=null;timeline=null;stats;sharedStats;cpuTime;gpuTime;frameRate;display;_needsRedraw=`initialized`;_initialized=!1;_running=!1;_animationFrameId=null;_nextFramePromise=null;_resolveNextFrame=null;_cpuStartTime=0;_error=null;_lastFrameTime=0;constructor(t){if(this.props={...e.defaultAnimationLoopProps,...t},t=this.props,!t.device)throw Error(`No device provided`);this.stats=t.stats||new y({id:`animation-loop-${x_++}`}),this.sharedStats=m.stats.get(S_),this.frameRate=this.stats.get(`Frame Rate`),this.frameRate.setSampleSize(1),this.cpuTime=this.stats.get(`CPU Time`),this.gpuTime=this.stats.get(`GPU Time`),this.setProps({autoResizeViewport:t.autoResizeViewport}),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseleave=this._onMouseleave.bind(this)}destroy(){this.stop(),this._setDisplay(null),this.device?._disableDebugGPUTime()}delete(){this.destroy()}reportError(e){this.props.onError(e),this._error=e}setNeedsRedraw(e){return this._needsRedraw=this._needsRedraw||e,this}needsRedraw(){let e=this._needsRedraw;return this._needsRedraw=!1,e}setProps(e){return`autoResizeViewport`in e&&(this.props.autoResizeViewport=e.autoResizeViewport||!1),this}async start(){if(this._running)return this;this._running=!0;try{if(!this._initialized){if(this._initialized=!0,await this._initDevice(),this._initialize(),!this._running)return null;await this.props.onInitialize(this._getAnimationProps())}return this._running?(this._cancelAnimationFrame(),this._requestAnimationFrame(),this):null}catch(e){let t=e instanceof Error?e:Error(`Unknown error`);throw this.props.onError(t),t}}stop(){return this._running&&(this.animationProps&&!this._error&&this.props.onFinalize(this.animationProps),this._cancelAnimationFrame(),this._nextFramePromise=null,this._resolveNextFrame=null,this._running=!1,this._lastFrameTime=0),this}redraw(e){return this.device?.isLost||this._error?this:(this._beginFrameTimers(e),this._setupFrame(),this._updateAnimationProps(),this._renderFrame(this._getAnimationProps()),this._clearNeedsRedraw(),this._resolveNextFrame&&=(this._resolveNextFrame(this),this._nextFramePromise=null,null),this._endFrameTimers(),this)}attachTimeline(e){return this.timeline=e,this.timeline}detachTimeline(){this.timeline=null}waitForRender(){return this.setNeedsRedraw(`waitForRender`),this._nextFramePromise||=new Promise(e=>{this._resolveNextFrame=e}),this._nextFramePromise}async toDataURL(){if(this.setNeedsRedraw(`toDataURL`),await this.waitForRender(),this.canvas instanceof HTMLCanvasElement)return this.canvas.toDataURL();throw Error(`OffscreenCanvas`)}_initialize(){this._startEventHandling(),this._initializeAnimationProps(),this._updateAnimationProps(),this._resizeViewport(),this.device?._enableDebugGPUTime()}_setDisplay(e){this.display&&(this.display.destroy(),this.display.animationLoop=null),e&&(e.animationLoop=this),this.display=e}_requestAnimationFrame(){this._running&&(this._animationFrameId=v_(this._animationFrame.bind(this)))}_cancelAnimationFrame(){this._animationFrameId!==null&&(y_(this._animationFrameId),this._animationFrameId=null)}_animationFrame(e){this._running&&(this.redraw(e),this._requestAnimationFrame())}_renderFrame(e){if(this.display){this.display._renderFrame(e);return}this.props.onRender(this._getAnimationProps()),this.device?.submit()}_clearNeedsRedraw(){this._needsRedraw=!1}_setupFrame(){this._resizeViewport()}_initializeAnimationProps(){let e=this.device?.getDefaultCanvasContext();if(!this.device||!e)throw Error(`loop`);let t=e?.canvas,n=e.props.useDevicePixels;this.animationProps={animationLoop:this,device:this.device,canvasContext:e,canvas:t,useDevicePixels:n,timeline:this.timeline,needsRedraw:!1,width:1,height:1,aspect:1,time:0,startTime:Date.now(),engineTime:0,tick:0,tock:0,_mousePosition:null}}_getAnimationProps(){if(!this.animationProps)throw Error(`animationProps`);return this.animationProps}_updateAnimationProps(){if(!this.animationProps)return;let{width:e,height:t,aspect:n}=this._getSizeAndAspect();(e!==this.animationProps.width||t!==this.animationProps.height)&&this.setNeedsRedraw(`drawing buffer resized`),n!==this.animationProps.aspect&&this.setNeedsRedraw(`drawing buffer aspect changed`),this.animationProps.width=e,this.animationProps.height=t,this.animationProps.aspect=n,this.animationProps.needsRedraw=this._needsRedraw,this.animationProps.engineTime=Date.now()-this.animationProps.startTime,this.timeline&&this.timeline.update(this.animationProps.engineTime),this.animationProps.tick=Math.floor(this.animationProps.time/1e3*60),this.animationProps.tock++,this.animationProps.time=this.timeline?this.timeline.getTime():this.animationProps.engineTime}async _initDevice(){if(this.device=await this.props.device,!this.device)throw Error(`No device provided`);this.canvas=this.device.getDefaultCanvasContext().canvas||null}_createInfoDiv(){if(this.canvas&&this.props.onAddHTML){let e=document.createElement(`div`);document.body.appendChild(e),e.style.position=`relative`;let t=document.createElement(`div`);t.style.position=`absolute`,t.style.left=`10px`,t.style.bottom=`10px`,t.style.width=`300px`,t.style.background=`white`,this.canvas instanceof HTMLCanvasElement&&e.appendChild(this.canvas),e.appendChild(t);let n=this.props.onAddHTML(t);n&&(t.innerHTML=n)}}_getSizeAndAspect(){if(!this.device)return{width:1,height:1,aspect:1};let[e,t]=this.device.getDefaultCanvasContext().getDrawingBufferSize();return{width:e,height:t,aspect:e>0&&t>0?e/t:1}}_resizeViewport(){this.props.autoResizeViewport&&this.device.gl&&this.device.gl.viewport(0,0,this.device.gl.drawingBufferWidth,this.device.gl.drawingBufferHeight)}_beginFrameTimers(e){let t=e??(typeof performance<`u`?performance.now():Date.now());if(this._lastFrameTime){let e=t-this._lastFrameTime;e>0&&this.frameRate.addTime(e)}this._lastFrameTime=t,this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeStart()}_endFrameTimers(){this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeEnd(),this._updateSharedStats()}_consumeEncodedGpuTime(){if(!this.device)return;let e=this.device.commandEncoder._gpuTimeMs;e!==void 0&&(this.gpuTime.addTime(e),this.device.commandEncoder._gpuTimeMs=void 0)}_updateSharedStats(){if(this.stats!==this.sharedStats){for(let e of Object.keys(this.sharedStats.stats))this.stats.stats[e]||delete this.sharedStats.stats[e];this.stats.forEach(e=>{let t=this.sharedStats.get(e.name,e.type);t.sampleSize=e.sampleSize,t.time=e.time,t.count=e.count,t.samples=e.samples,t.lastTiming=e.lastTiming,t.lastSampleTime=e.lastSampleTime,t.lastSampleCount=e.lastSampleCount,t._count=e._count,t._time=e._time,t._samples=e._samples,t._startTime=e._startTime,t._timerPending=e._timerPending})}}_startEventHandling(){this.canvas&&(this.canvas.addEventListener(`mousemove`,this._onMousemove.bind(this)),this.canvas.addEventListener(`mouseleave`,this._onMouseleave.bind(this)))}_onMousemove(e){e instanceof MouseEvent&&(this._getAnimationProps()._mousePosition=[e.offsetX,e.offsetY])}_onMouseleave(e){this._getAnimationProps()._mousePosition=null}}}));function T_(e=`id`){return E_[e]=E_[e]||1,`${e}-${E_[e]++}`}var E_,D_=e((()=>{E_={}}));function O_(e,t){if(t instanceof j_)return t;let n=k_(e,t),{attributes:r,bufferLayout:i}=A_(e,t);return new j_({topology:t.topology||`triangle-list`,bufferLayout:i,vertexCount:t.vertexCount,indices:n,attributes:r})}function k_(e,t){if(!t.indices)return;let n=t.indices.value;return e.createBuffer({usage:f.INDEX,data:n})}function A_(e,t){let n=[],r={};for(let[i,a]of Object.entries(t.attributes)){let t=i;switch(i){case`POSITION`:t=`positions`;break;case`NORMAL`:t=`normals`;break;case`TEXCOORD_0`:t=`texCoords`;break;case`TEXCOORD_1`:t=`texCoords1`;break;case`COLOR_0`:t=`colors`;break}if(a){r[t]=e.createBuffer({data:a.value,id:`${i}-buffer`});let{value:o,size:s,normalized:c}=a;if(s===void 0)throw Error(`Attribute ${i} is missing a size`);n.push({name:t,format:p.getVertexFormatFromAttribute(o,s,c)})}}return{attributes:r,bufferLayout:n,vertexCount:t._calculateVertexCount(t.attributes,t.indices)}}var j_,M_=e((()=>{O(),D_(),j_=class{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||T_(`geometry`),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&f.INDEX))throw Error(`Index buffer must have INDEX usage`)}destroy(){this.indices?.destroy();for(let e of Object.values(this.attributes))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}}}));function N_(e,t){let n={},r=`Values`;if(e.attributes.length===0&&!e.varyings?.length)return{"No attributes or varyings":{[r]:`N/A`}};for(let t of e.attributes)if(t){let e=`${t.location} ${t.name}: ${t.type}`;n[`in ${e}`]={[r]:t.stepMode||`vertex`}}for(let t of e.varyings||[]){let e=`${t.location} ${t.name}`;n[`out ${e}`]={[r]:JSON.stringify(t)}}return n}var P_=e((()=>{}));function F_(e,t,n){if(e.device.type!==`webgl`)return;let r=R_(e.device);if(!r.flushing){if(B_(e)){I_(e,n,r);return}t&&z_(t)&&t.handle!==null&&(r.queuedFramebuffers.includes(t)||r.queuedFramebuffers.push(t))}}function I_(e,t,n){if(n.queuedFramebuffers.length===0)return;let{gl:r}=e.device,i=r.getParameter(36010),a=r.getParameter(36006),[o,s]=e.device.getDefaultCanvasContext().getDrawingBufferSize(),c=V_(t.top,U_),l=V_(t.left,U_);n.flushing=!0;try{for(let e of n.queuedFramebuffers){let[n,i,a,u,d]=L_({framebuffer:e,targetWidth:o,targetHeight:s,topPx:c,leftPx:l,minimap:t.minimap});r.bindFramebuffer(36008,e.handle),r.bindFramebuffer(36009,null),r.blitFramebuffer(0,0,e.width,e.height,n,i,a,u,16384,9728),c+=d+U_}}finally{r.bindFramebuffer(36008,i),r.bindFramebuffer(36009,a),n.flushing=!1}}function L_(e){let{framebuffer:t,targetWidth:n,targetHeight:r,topPx:i,leftPx:a,minimap:o}=e,s=o?Math.max(Math.floor(n/4),1):n,c=o?Math.max(Math.floor(r/4),1):r,l=Math.min(s/t.width,c/t.height),u=Math.max(Math.floor(t.width*l),1),d=Math.max(Math.floor(t.height*l),1),f=a,p=Math.max(r-i-d,0);return[f,p,f+u,p+d,d]}function R_(e){return e.userData[H_]||={flushing:!1,queuedFramebuffers:[]},e.userData[H_]}function z_(e){return`colorAttachments`in e}function B_(e){let t=e.props.framebuffer;return!t||t.handle===null}function V_(e,t){if(!e)return t;let n=Number.parseInt(e,10);return Number.isFinite(n)?n:t}var H_,U_,W_=e((()=>{H_=`__debugFramebufferState`,U_=8}));function G_(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!G_(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!G_(e[i],t[i],n-1))return!1;return!0}return!1}var K_=e((()=>{})),q_,J_=e((()=>{O(),q_=class{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(t=>t.name===e)||null}getAttributeNamesForBuffer(e){return e.attributes?e.attributes?.map(e=>e.attribute):[e.name]}mergeBufferLayouts(e,t){let n=[...e];for(let e of t){let t=n.findIndex(t=>t.name===e.name);t<0?n.push(e):n[t]=e}return n}getBufferIndex(e){let t=this.bufferLayouts.findIndex(t=>t.name===e);return t===-1&&N.warn(`BufferLayout: Missing buffer for "${e}".`)(),t}}}));function Y_(e,t){let n=1/0;for(let r of e){let e=t[r];e!==void 0&&(n=Math.min(n,e))}return n}function X_(e,t){let n=Object.fromEntries(e.attributes.map(e=>[e.name,e.location])),r=t.slice();return r.sort((e,t)=>{let r=e.attributes?e.attributes.map(e=>e.attribute):[e.name],i=t.attributes?t.attributes.map(e=>e.attribute):[t.name];return Y_(r,n)-Y_(i,n)}),r}var Z_=e((()=>{}));function Q_(e,t){if(!e||!t.some(e=>e.bindingLayout?.length))return e;let n={...e,bindings:e.bindings.map(e=>({...e}))};`attributes`in(e||{})&&(n.attributes=e?.attributes||[]);for(let e of t)for(let t of e.bindingLayout||[])for(let e of ev(t.name)){let r=n.bindings.find(t=>t.name===e);r?.group===0&&(r.group=t.group)}return n}function $_(e){return!!(e.uniformTypes&&!tv(e.uniformTypes))}function ev(e){let t=new Set([e,`${e}Uniforms`]);return e.endsWith(`Uniforms`)||t.add(`${e}Sampler`),[...t]}function tv(e){for(let t in e)return!1;return!0}var nv=e((()=>{}));function rv(e){return qi(e)||typeof e==`number`||typeof e==`boolean`}function iv(e,t={}){let n={bindings:{},uniforms:{}};return Object.keys(e).forEach(r=>{let i=e[r];Object.prototype.hasOwnProperty.call(t,r)||rv(i)?n.uniforms[r]=i:n.bindings[r]=i}),n}var av=e((()=>{Yi()}));function ov(e={},t={},n={}){let r={...e};for(let[i,a]of Object.entries(t))a!==void 0&&(r[i]=sv(e[i],a,n[i]));return r}function sv(e,t,n){if(!n||typeof n==`string`)return cv(t);if(Array.isArray(n)){if(lv(t)||!Array.isArray(t))return cv(t);let r=Array.isArray(e)&&!lv(e)?[...e]:[],i=r.slice();for(let e=0;e<t.length;e++){let a=t[e];a!==void 0&&(i[e]=sv(r[e],a,n[0]))}return i}if(!uv(t))return cv(t);let r=n,i=uv(e)?e:{},a={...i};for(let[e,n]of Object.entries(t))n!==void 0&&(a[e]=sv(i[e],n,r[e]));return a}function cv(e){return ArrayBuffer.isView(e)?Array.prototype.slice.call(e):Array.isArray(e)?lv(e)?e.slice():e.map(e=>e===void 0?void 0:cv(e)):uv(e)?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,t===void 0?void 0:cv(t)])):e}function lv(e){return ArrayBuffer.isView(e)||Array.isArray(e)&&(e.length===0||typeof e[0]==`number`)}function uv(e){return!!e&&typeof e==`object`&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function dv(e){return!!e?.dependencies}var fv,pv=e((()=>{O(),ud(),av(),fv=class{options={disableWarnings:!1};modules;moduleUniforms;moduleBindings;constructor(e,t){Object.assign(this.options,t);let n=Po(Object.values(e).filter(dv));for(let t of n)e[t.name]=t;N.log(1,`Creating ShaderInputs with modules`,Object.keys(e))(),this.modules=e,this.moduleUniforms={},this.moduleBindings={};for(let[t,n]of Object.entries(e))n&&(this._addModule(n),n.name&&t!==n.name&&!this.options.disableWarnings&&N.warn(`Module name: ${t} vs ${n.name}`)())}destroy(){}setProps(e){for(let t of Object.keys(e)){let n=t,r=e[n]||{},i=this.modules[n];if(!i)this.options.disableWarnings||N.warn(`Module ${t} not found`)();else{let e=this.moduleUniforms[n],t=this.moduleBindings[n],{uniforms:a,bindings:o}=iv(i.getUniforms?.(r,e)||r,i.uniformTypes);this.moduleUniforms[n]=ov(e,a,i.uniformTypes),this.moduleBindings[n]={...t,...o}}}}getModules(){return Object.values(this.modules)}getUniformValues(){return this.moduleUniforms}getBindingValues(){let e={};for(let t of Object.values(this.moduleBindings))Object.assign(e,t);return e}getDebugTable(){let e={};for(let[t,n]of Object.entries(this.moduleUniforms))for(let[r,i]of Object.entries(n))e[`${t}.${r}`]={type:this.modules[t].uniformTypes?.[r],value:String(i)};return e}_addModule(e){let t=e.name;this.moduleUniforms[t]=ov({},e.defaultUniforms||{},e.uniformTypes),this.moduleBindings[t]={}}}}));function mv(e){return e?Array.isArray(e)?e[0]??null:e:null}function hv(e){let{dimension:t,data:n}=e;if(!n)return null;switch(t){case`1d`:{let e=mv(n);if(!e)return null;let{width:t}=gv(e);return{width:t,height:1}}case`2d`:{let e=mv(n);return e?gv(e):null}case`3d`:case`2d-array`:{if(!Array.isArray(n)||n.length===0)return null;let e=mv(n[0]);return e?gv(e):null}case`cube`:{let e=Object.keys(n)[0]??null;if(!e)return null;let t=n[e],r=mv(t);return r?gv(r):null}case`cube-array`:{if(!Array.isArray(n)||n.length===0)return null;let e=n[0],t=Object.keys(e)[0]??null;if(!t)return null;let r=mv(e[t]);return r?gv(r):null}default:return null}}function gv(e){if(w(e))return T(e);if(typeof e==`object`&&`width`in e&&`height`in e)return{width:e.width,height:e.height};throw Error(`Unsupported mip-level data`)}function _v(e){return typeof e==`object`&&!!e&&`data`in e&&`width`in e&&`height`in e}function vv(e){return ArrayBuffer.isView(e)}function yv(e){let{textureFormat:t,format:n}=e;if(t&&n&&t!==n)throw Error(`Conflicting texture formats "${t}" and "${n}" provided for the same mip level`);return t??n}function bv(e){let t=kv[e];if(t===void 0)throw Error(`Invalid cube face: ${e}`);return t}function xv(e,t){return 6*e+bv(t)}function Sv(e){throw Error(`setTexture1DData not supported in WebGL.`)}function Cv(e){return Array.isArray(e)?e:[e]}function wv(e,t,n,r){let i=Cv(t),a=e,o=[];for(let e=0;e<i.length;e++){let t=i[e];if(w(t))o.push({type:`external-image`,image:t,z:a,mipLevel:e});else if(_v(t))o.push({type:`texture-data`,data:t,textureFormat:yv(t),z:a,mipLevel:e});else if(vv(t)&&n)o.push({type:`texture-data`,data:{data:t,width:Math.max(1,n.width>>e),height:Math.max(1,n.height>>e),...r?{format:r}:{}},textureFormat:r,z:a,mipLevel:e});else throw Error(`Unsupported 2D mip-level payload`)}return o}function Tv(e){let t=[];for(let n=0;n<e.length;n++)t.push(...wv(n,e[n]));return t}function Ev(e){let t=[];for(let n=0;n<e.length;n++)t.push(...wv(n,e[n]));return t}function Dv(e){let t=[];for(let[n,r]of Object.entries(e)){let e=bv(n);t.push(...wv(e,r))}return t}function Ov(e){let t=[];return e.forEach((e,n)=>{for(let[r,i]of Object.entries(e)){let e=xv(n,r);t.push(...wv(e,i))}}),t}var kv,Av=e((()=>{O(),kv={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5}}));function jv(e){if(!e.data)return[];let t=e.width&&e.height?{width:e.width,height:e.height}:void 0,n=`format`in e?e.format:void 0;switch(e.dimension){case`1d`:return Sv(e.data);case`2d`:return wv(0,e.data,t,n);case`3d`:return Tv(e.data);case`2d-array`:return Ev(e.data);case`cube`:return Dv(e.data);case`cube-array`:return Ov(e.data);default:throw Error(`Unhandled dimension ${e.dimension}`)}}function Mv(e,t,n,r){if(t.length===0)return{subresources:t,mipLevels:1,format:r.format,hasExplicitMipChain:!1};let i=new Map;for(let e of t){let t=i.get(e.z)??[];t.push(e),i.set(e.z,t)}let a=t.some(e=>e.mipLevel>0),o=r.format,s=1/0,c=[];for(let[t,r]of i){let i=[...r].sort((e,t)=>e.mipLevel-t.mipLevel),a=i[0];if(!a||a.mipLevel!==0)throw Error(`DynamicTexture: slice ${t} is missing mip level 0`);let l=Pv(e,a);if(l.width!==n.width||l.height!==n.height)throw Error(`DynamicTexture: slice ${t} base level dimensions ${l.width}x${l.height} do not match expected ${n.width}x${n.height}`);let u=Nv(a);if(u){if(o&&o!==u)throw Error(`DynamicTexture: slice ${t} base level format "${u}" does not match texture format "${o}"`);o=u}let d=o&&e.isTextureFormatCompressed(o)?Fv(e,l.width,l.height,o):e.getMipLevelCount(l.width,l.height),f=0;for(let t=0;t<i.length;t++){let n=i[t];if(!n||n.mipLevel!==t||t>=d)break;let r=Pv(e,n),a=Math.max(1,l.width>>t),s=Math.max(1,l.height>>t);if(r.width!==a||r.height!==s)break;let u=Nv(n);if(u&&(o||=u,u!==o))break;f++,c.push(n)}s=Math.min(s,f)}let l=Number.isFinite(s)?Math.max(1,s):1;return{subresources:c.filter(e=>e.mipLevel<l),mipLevels:l,format:o,hasExplicitMipChain:a}}function Nv(e){if(e.type===`texture-data`)return e.textureFormat??yv(e.data)}function Pv(e,t){switch(t.type){case`external-image`:return e.getExternalImageSize(t.image);case`texture-data`:return{width:t.data.width,height:t.data.height};default:throw Error(`Unsupported texture subresource`)}}function Fv(e,t,n,r){let{blockWidth:i=1,blockHeight:a=1}=e.getTextureFormatInfo(r),o=1;for(let e=1;;e++){let r=Math.max(1,t>>e),s=Math.max(1,n>>e);if(r<i||s<a)break;o++}return o}async function Iv(e){if(e=await e,Array.isArray(e))return await Promise.all(e.map(Iv));if(e&&typeof e==`object`&&e.constructor===Object){let t=e,n=await Promise.all(Object.values(t).map(Iv)),r=Object.keys(t),i={};for(let e=0;e<r.length;e++)i[r[e]]=n[e];return i}return e}var Lv,Rv=e((()=>{O(),D_(),Av(),Lv=class e{device;id;props;_texture=null;_sampler=null;_view=null;ready;isReady=!1;destroyed=!1;resolveReady=()=>{};rejectReady=()=>{};get texture(){if(!this._texture)throw Error(`Texture not initialized yet`);return this._texture}get sampler(){if(!this._sampler)throw Error(`Sampler not initialized yet`);return this._sampler}get view(){if(!this._view)throw Error(`View not initialized yet`);return this._view}get[Symbol.toStringTag](){return`DynamicTexture`}toString(){let e=this._texture?.width??this.props.width??`?`,t=this._texture?.height??this.props.height??`?`;return`DynamicTexture:"${this.id}":${e}x${t}px:(${this.isReady?`ready`:`loading...`})`}constructor(t,n){this.device=t;let r=T_(`dynamic-texture`),i=n;this.props={...e.defaultProps,id:r,...n,data:null},this.id=this.props.id,this.ready=new Promise((e,t)=>{this.resolveReady=e,this.rejectReady=t}),this.initAsync(i)}async initAsync(e){try{let t=await this._loadAllData(e);this._checkNotDestroyed();let n=t.data?jv({...t,width:e.width,height:e.height,format:e.format}):[],r=`format`in e&&e.format!==void 0,i=`usage`in e&&e.usage!==void 0,a=this.props.width&&this.props.height?{width:this.props.width,height:this.props.height}:hv(t)||{width:this.props.width||1,height:this.props.height||1};if(!a||a.width<=0||a.height<=0)throw Error(`${this} size could not be determined or was zero`);let o=Mv(this.device,n,a,{format:r?e.format:void 0}),s=o.format??this.props.format,c={...this.props,...a,format:s,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(s)&&!i&&(c.usage=d.SAMPLE|d.COPY_DST);let l=this.props.mipmaps&&!o.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(s);if(this.device.type===`webgpu`&&l){let e=this.props.dimension===`3d`?d.SAMPLE|d.STORAGE|d.COPY_DST|d.COPY_SRC:d.SAMPLE|d.RENDER|d.COPY_DST|d.COPY_SRC;c.usage|=e}let u=this.device.getMipLevelCount(c.width,c.height),f=o.hasExplicitMipChain?o.mipLevels:this.props.mipLevels===`auto`?u:Math.max(1,Math.min(u,this.props.mipLevels??1)),p={...c,mipLevels:f};this._texture=this.device.createTexture(p),this._sampler=this.texture.sampler,this._view=this.texture.view,o.subresources.length&&this._setTextureSubresources(o.subresources),this.props.mipmaps&&!o.hasExplicitMipChain&&!l&&N.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),l&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),N.info(0,`${this} created`)()}catch(e){let t=e instanceof Error?e:Error(String(e));this.rejectReady(t)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.destroyed=!0}generateMipmaps(){this.device.type===`webgl`?this.texture.generateMipmapsWebGL():this.device.type===`webgpu`?this.device.generateMipmapsWebGPU(this.texture):N.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(e={}){this._checkReady();let t=e instanceof g?e:this.device.createSampler(e);this.texture.setSampler(t),this._sampler=t}async readBuffer(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,n=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,i=this.texture.computeMemoryLayout({width:t,height:n,depthOrArrayLayers:r}),a=this.device.createBuffer({byteLength:i.byteLength,usage:f.COPY_DST|f.MAP_READ});this.texture.readBuffer({...e,width:t,height:n,depthOrArrayLayers:r},a);let o=this.device.createFence();return await o.signaled,o.destroy(),a}async readAsync(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,n=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,i=this.texture.computeMemoryLayout({width:t,height:n,depthOrArrayLayers:r}),a=await this.readBuffer(e),o=await a.readAsync(0,i.byteLength);return a.destroy(),o.buffer}resize(e){if(this._checkReady(),e.width===this.texture.width&&e.height===this.texture.height)return!1;let t=this.texture;return this._texture=t.clone(e),this._sampler=this.texture.sampler,this._view=this.texture.view,t.destroy(),N.info(`${this} resized`),!0}getCubeFaceIndex(e){let t=kv[e];if(t===void 0)throw Error(`Invalid cube face: ${e}`);return t}getCubeArrayFaceIndex(e,t){return 6*e+this.getCubeFaceIndex(t)}setTexture1DData(e){if(this._checkReady(),this.texture.props.dimension!==`1d`)throw Error(`${this} is not 1d`);let t=Sv(e);this._setTextureSubresources(t)}setTexture2DData(e,t=0){if(this._checkReady(),this.texture.props.dimension!==`2d`)throw Error(`${this} is not 2d`);let n=wv(t,e);this._setTextureSubresources(n)}setTexture3DData(e){if(this.texture.props.dimension!==`3d`)throw Error(`${this} is not 3d`);let t=Tv(e);this._setTextureSubresources(t)}setTextureArrayData(e){if(this.texture.props.dimension!==`2d-array`)throw Error(`${this} is not 2d-array`);let t=Ev(e);this._setTextureSubresources(t)}setTextureCubeData(e){if(this.texture.props.dimension!==`cube`)throw Error(`${this} is not cube`);let t=Dv(e);this._setTextureSubresources(t)}setTextureCubeArrayData(e){if(this.texture.props.dimension!==`cube-array`)throw Error(`${this} is not cube-array`);let t=Ov(e);this._setTextureSubresources(t)}_setTextureSubresources(e){for(let t of e){let{z:e,mipLevel:n}=t;switch(t.type){case`external-image`:let{image:r,flipY:i}=t;this.texture.copyExternalImage({image:r,z:e,mipLevel:n,flipY:i});break;case`texture-data`:let{data:a,textureFormat:o}=t;if(o&&o!==this.texture.format)throw Error(`${this} mip level ${n} uses format "${o}" but texture format is "${this.texture.format}"`);this.texture.writeData(a.data,{x:0,y:0,z:e,width:a.width,height:a.height,depthOrArrayLayers:1,mipLevel:n});break;default:throw Error(`Unsupported 2D mip-level payload`)}}}async _loadAllData(e){let t=await Iv(e.data);return{dimension:e.dimension??`2d`,data:t??null}}_checkNotDestroyed(){this.destroyed&&N.warn(`${this} already destroyed`)}_checkReady(){this.isReady||N.warn(`${this} Cannot perform this operation before ready`)}static defaultProps={...d.defaultProps,dimension:`2d`,data:null,mipmaps:!1}}}));function zv(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,features:e.features}}var Bv,Vv,Hv,Uv,Wv=e((()=>{O(),ud(),M_(),P_(),W_(),K_(),J_(),Z_(),nv(),D_(),pv(),Rv(),Bv=2,Vv=1e4,Hv=`render pipeline initialization failed`,Uv=class e{static defaultProps={...ee.defaultProps,source:void 0,vs:null,fs:null,id:`unnamed`,handle:void 0,userData:{},defines:{},modules:[],geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:bc.getDefaultShaderAssembler(),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_pipelineNeedsUpdate=`newly created`;_needsRedraw=`initializing`;_destroyed=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return`Model`}toString(){return`Model(${this.id})`}constructor(t,n){this.props={...e.defaultProps,...n},n=this.props,this.id=n.id||T_(`model`),this.device=t,Object.assign(this.userData,n.userData),this.material=n.material||null;let r=Object.fromEntries(this.props.modules?.map(e=>[e.name,e])||[]),i=n.shaderInputs||new fv(r,{disableWarnings:this.props.disableWarnings});this.setShaderInputs(i);let a=zv(t),o=(this.props.modules?.length>0?this.props.modules:this.shaderInputs?.getModules())||[];if(this.props.shaderLayout=Q_(this.props.shaderLayout,o)||null,this.device.type===`webgpu`&&this.props.source){let{source:e,getUniforms:n,bindingTable:r}=this.props.shaderAssembler.assembleWGSLShader({platformInfo:a,...this.props,modules:o});this.source=e,this._getModuleUniforms=n,this._bindingTable=r;let i=t.getShaderLayout?.(this.source);this.props.shaderLayout=Q_(this.props.shaderLayout||i||null,o)||null}else{let{vs:e,fs:t,getUniforms:n}=this.props.shaderAssembler.assembleGLSLShaderPair({platformInfo:a,...this.props,modules:o});this.vs=e,this.fs=t,this._getModuleUniforms=n,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,n.geometry&&this.setGeometry(n.geometry),this.pipelineFactory=n.pipelineFactory||b.getDefaultPipelineFactory(this.device),this.shaderFactory=n.shaderFactory||C.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=t.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),`isInstanced`in n&&(this.isInstanced=n.isInstanced),n.instanceCount&&this.setInstanceCount(n.instanceCount),n.vertexCount&&this.setVertexCount(n.vertexCount),n.indexBuffer&&this.setIndexBuffer(n.indexBuffer),n.attributes&&this.setAttributes(n.attributes),n.constantAttributes&&this.setConstantAttributes(n.constantAttributes),n.bindings&&this.setBindings(n.bindings),n.transformFeedback&&(this.transformFeedback=n.transformFeedback)}destroy(){this._destroyed||=(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw(`contents of bound textures or buffers updated`);let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(){this.updateShaderInputs(),this.pipeline=this._updatePipeline()}draw(e){let t=this._areBindingsLoading();if(t)return N.info(Bv,`>>> DRAWING ABORTED ${this.id}: ${t} not loaded`)(),!1;try{e.pushDebugGroup(`${this}.predraw(${e})`),this.predraw()}finally{e.popDebugGroup()}let n,r=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),r=this.pipeline.isErrored,r)N.info(Bv,`>>> DRAWING ABORTED ${this.id}: ${Hv}`)(),n=!1;else{let t=this._getBindings(),r=this._getBindGroups(),{indexBuffer:i}=this.vertexArray,a=i?i.byteLength/(i.indexType===`uint32`?4:2):void 0;n=this.pipeline.draw({renderPass:e,vertexArray:this.vertexArray,isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.instanceCount,indexCount:a,transformFeedback:this.transformFeedback||void 0,bindings:t,bindGroups:r,_bindGroupCacheKeys:this._getBindGroupCacheKeys(),uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),n?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):r?this._needsRedraw=Hv:this._needsRedraw=`waiting for resource initialization`,n}setGeometry(e){this._gpuGeometry?.destroy();let t=e&&O_(this.device,e);if(t){this.setTopology(t.topology||`triangle-list`);let e=new q_(this.bufferLayout);this.bufferLayout=e.mergeBufferLayouts(t.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t)}this._gpuGeometry=t}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate(`topology`))}setBufferLayout(e){let t=new q_(this.bufferLayout);this.bufferLayout=this._gpuGeometry?t.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e,this._setPipelineNeedsUpdate(`bufferLayout`),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(e){G_(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate(`parameters`))}setInstanceCount(e){this.instanceCount=e,this.isInstanced===void 0&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw(`instanceCount`)}setVertexCount(e){this.vertexCount=e,this.setNeedsRedraw(`vertexCount`)}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new A(this.device,this.shaderInputs.modules);for(let[e,t]of Object.entries(this.shaderInputs.modules))if($_(t)&&!this.material?.ownsModule(e)){let t=this._uniformStore.getManagedUniformBuffer(e);this.bindings[`${e}Uniforms`]=t}this.setNeedsRedraw(`shaderInputs`)}setMaterial(e){this.material=e,this.setNeedsRedraw(`material`)}updateShaderInputs(){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues()),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw(`shaderInputs`)}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw(`bindings`)}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw(`transformFeedback`)}setIndexBuffer(e){this.vertexArray.setIndexBuffer(e),this.setNeedsRedraw(`indexBuffer`)}setAttributes(e,t){let n=t?.disableWarnings??this.props.disableWarnings;e.indices&&N.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=X_(this.pipeline.shaderLayout,this.bufferLayout);let r=new q_(this.bufferLayout);for(let[t,i]of Object.entries(e)){let e=r.getBufferLayout(t);if(!e){n||N.warn(`Model(${this.id}): Missing layout for buffer "${t}".`)();continue}let a=r.getAttributeNamesForBuffer(e),o=!1;for(let e of a){let t=this._attributeInfos[e];if(t){let e=this.device.type===`webgpu`?r.getBufferIndex(t.bufferName):t.location;this.vertexArray.setBuffer(e,i),o=!0}}!o&&!n&&N.warn(`Model(${this.id}): Ignoring buffer "${i.id}" for unknown attribute "${t}"`)()}this.setNeedsRedraw(`attributes`)}setConstantAttributes(e,t){for(let[n,r]of Object.entries(e)){let e=this._attributeInfos[n];e?this.vertexArray.setConstantWebGL(e.location,r):(t?.disableWarnings??this.props.disableWarnings)||N.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${n}"`)()}this.setNeedsRedraw(`constants`)}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(e instanceof Lv&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(e instanceof Lv&&!e.isReady)return e.id;return!1}_getBindings(){let e={};for(let[t,n]of Object.entries(this.bindings))n instanceof Lv?n.isReady&&(e[t]=n.texture):e[t]=n;return e}_getBindGroups(){let e=this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]},t=e.bindings.length?D(e,this._getBindings()):{0:this._getBindings()};if(!this.material)return t;for(let[e,n]of Object.entries(this.material.getBindingsByGroup())){let r=Number(e);t[r]={...t[r]||{},...n}}return t}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;for(let t of Object.values(this.bindings))t instanceof M?e=Math.max(e,t.texture.updateTimestamp):t instanceof f||t instanceof d?e=Math.max(e,t.updateTimestamp):t instanceof Lv?e=t.texture?Math.max(e,t.texture.updateTimestamp):1/0:t instanceof g||(e=Math.max(e,t.buffer.updateTimestamp));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let t={...e.attributes};for(let[e]of Object.entries(t))!this.pipeline.shaderLayout.attributes.find(t=>t.name===e)&&e!==`positions`&&delete t[e];this.vertexCount=e.vertexCount,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(t,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw(`geometry attributes`)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,t=null;this.pipeline&&(N.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,t=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let n=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:`vertex`,source:this.source||this.vs,debugShaders:this.props.debugShaders}),r=null;this.source?r=n:this.fs&&(r=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:`fragment`,source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,bindGroups:this._getBindGroups(),vs:n,fs:r}),this._attributeInfos=S(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),t&&t!==e&&this.shaderFactory.release(t)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=N.level>3?0:Vv;N.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,N.group(Bv,`>>> DRAWING MODEL ${this.id}`,{collapsed:N.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=N_(this.pipeline.shaderLayout,this.id);N.table(Bv,e)();let t=this.shaderInputs.getDebugTable();N.table(Bv,t)();let n=this._getAttributeDebugTable();N.table(Bv,this._attributeInfos)(),N.table(Bv,n)(),N.groupEnd(Bv)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let t=this.device.props.debugFramebuffers;if(this._drawCount++,!t)return;let n=e.props.framebuffer;F_(e,n,{id:n?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[t,n]of Object.entries(this._attributeInfos)){let r=this.vertexArray.attributes[n.location];e[n.location]={name:t,type:n.shaderType,values:r?this._getBufferOrConstantValues(r,n.bufferDataType):`null`}}if(this.vertexArray.indexBuffer){let{indexBuffer:t}=this.vertexArray,n=t.indexType===`uint32`?new Uint32Array(t.debugData):new Uint16Array(t.debugData);e.indices={name:`indices`,type:t.indexType,values:n.toString()}}return e}_getBufferOrConstantValues(e,t){let n=h.getTypedArrayConstructor(t);return(e instanceof f?new n(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let t={};for(let[n,r]of Object.entries(e))this.material.ownsBinding(n)||(t[n]=r);return t}}})),Gv,Kv=e((()=>{O(),ud(),Wv(),Gv=class e{device;model;transformFeedback;static defaultProps={...Uv.defaultProps,outputs:void 0,feedbackBuffers:void 0};static isSupported(e){return e?.info?.type===`webgl`}constructor(t,n=e.defaultProps){if(!e.isSupported(t))throw Error(`BufferTransform not yet implemented on WebGPU`);this.device=t,this.model=new Uv(this.device,{id:n.id||`buffer-transform-model`,fs:n.fs||Sc(),topology:n.topology||`point-list`,varyings:n.outputs||n.varyings,...n}),this.transformFeedback=this.device.createTransformFeedback({layout:this.model.pipeline.shaderLayout,buffers:n.feedbackBuffers}),this.model.setTransformFeedback(this.transformFeedback),Object.seal(this)}destroy(){this.model&&this.model.destroy()}delete(){this.destroy()}run(e){e?.inputBuffers&&this.model.setAttributes(e.inputBuffers),e?.outputBuffers&&this.transformFeedback.setBuffers(e.outputBuffers);let t=this.device.beginRenderPass(e);this.model.draw(t),t.end()}getBuffer(e){return this.transformFeedback.getBuffer(e)}readAsync(e){let t=this.getBuffer(e);if(!t)throw Error(`BufferTransform#getBuffer`);if(t instanceof f)return t.readAsync();let{buffer:n,byteOffset:r=0,byteLength:i=n.byteLength}=t;return n.readAsync(r,i)}}})),qv,Jv=e((()=>{D_(),qv=class{id;topology;vertexCount;indices;attributes;userData={};constructor(e){let{attributes:t={},indices:n=null,vertexCount:r=null}=e;this.id=e.id||T_(`geometry`),this.topology=e.topology,n&&(this.indices=ArrayBuffer.isView(n)?{value:n,size:1}:n),this.attributes={};for(let[e,n]of Object.entries(t)){let t=ArrayBuffer.isView(n)?{value:n}:n;if(!ArrayBuffer.isView(t.value))throw Error(`${this._print(e)}: must be typed array or object with value as typed array`);if((e===`POSITION`||e===`positions`)&&!t.size&&(t.size=3),e===`indices`){if(this.indices)throw Error(`Multiple indices detected`);this.indices=t}else this.attributes[e]=t}this.indices&&this.indices.isIndexed!==void 0&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,t){return this}_calculateVertexCount(e,t){if(t)return t.value.length;let n=1/0;for(let t of Object.values(e)){let{value:e,size:r,constant:i}=t;!i&&e&&r!==void 0&&r>=1&&(n=Math.min(n,e.length/r))}return n}}})),Yv=e((()=>{__(),w_(),Wv(),Rv(),pv(),D_(),Kv(),ud(),Jv(),U(),M_(),Yi()}));function Xv(e,t,n){let{byLayer:r,byAlpha:i}=e,a,o=r.get(t);return o?(o.viewports.push(n),a=o.a):(a=r.size+1,a<=255?(o={a,layer:t,viewports:[n]},r.set(t,o),i[a]=o):(F.warn(`Too many pickable layers, only picking the first 255`)(),a=0)),[0,0,0,a/255]}function Zv(e,t){let n=e.byAlpha[t[3]];return n&&{pickedLayer:n.layer,pickedViewports:n.viewports,pickedObjectIndex:n.layer.decodePickingColor(t)}}var Qv,$v,ey=e((()=>{Xh(),I(),Qv={blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`zero`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`constant`,blendAlphaDstFactor:`zero`},$v=class extends Yh{constructor(){super(...arguments),this._colorEncoderState=null}render(e){return`pickingFBO`in e?this._drawPickingBuffer(e):{decodePickingColor:null,stats:super._render(e)}}_drawPickingBuffer({layers:e,layerFilter:t,views:n,viewports:r,onViewportActive:i,pickingFBO:a,deviceRect:{x:o,y:s,width:c,height:l},cullRect:u,effects:d,pass:f=`picking`,pickZ:p,shaderModuleProps:m,clearColor:h}){this.pickZ=p;let g=this._resetColorEncoder(p),_=[o,s,c,l],v=super._render({target:a,layers:e,layerFilter:t,views:n,viewports:r,onViewportActive:i,cullRect:u,effects:d?.filter(e=>e.useInPicking),pass:f,isPicking:!0,shaderModuleProps:m,clearColor:h??[0,0,0,0],colorMask:15,scissorRect:_});return this._colorEncoderState=null,{decodePickingColor:g&&Zv.bind(null,g),stats:v}}shouldDrawLayer(e){let{pickable:t,operation:n}=e.props;return t&&n.includes(`draw`)||n.includes(`terrain`)||n.includes(`mask`)}getShaderModuleProps(e,t,n){return{picking:{isActive:1,isAttribute:this.pickZ},lighting:{enabled:!1}}}getLayerParameters(e,t,n){let r={...e.props.parameters},{pickable:i,operation:a}=e.props;return this._colorEncoderState?i&&a.includes(`draw`)?(Object.assign(r,Qv),r.blend=!0,this.device.type===`webgpu`?r.blendConstant=Xv(this._colorEncoderState,e,n):r.blendColor=Xv(this._colorEncoderState,e,n),a.includes(`terrain`)&&e.state?._hasPickingCover&&(r.blendAlphaSrcFactor=`one`)):a.includes(`terrain`)&&(r.blend=!1):r.blend=!1,r}_resetColorEncoder(e){return this._colorEncoderState=e?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}}})),ty,ny,ry,iy,ay,oy,sy,cy=e((()=>{ty={NO_STATE:`Awaiting state`,MATCHED:`Matched. State transferred from previous layer`,INITIALIZED:`Initialized`,AWAITING_GC:`Discarded. Awaiting garbage collection`,AWAITING_FINALIZATION:`No longer matched. Awaiting garbage collection`,FINALIZED:`Finalized! Awaiting garbage collection`},ny=Symbol.for(`component`),ry=Symbol.for(`propTypes`),iy=Symbol.for(`deprecatedProps`),ay=Symbol.for(`asyncPropDefaults`),oy=Symbol.for(`asyncPropOriginal`),sy=Symbol.for(`asyncPropResolved`)}));function ly(e,t=()=>!0){return Array.isArray(e)?uy(e,t,[]):t(e)?[e]:[]}function uy(e,t,n){let r=-1;for(;++r<e.length;){let i=e[r];Array.isArray(i)?uy(i,t,n):t(i)&&n.push(i)}return n}function dy({target:e,source:t,start:n=0,count:r=1}){let i=t.length,a=r*i,o=0;for(let r=n;o<i;o++)e[r++]=t[o];for(;o<a;)o<a-o?(e.copyWithin(n+o,n,n+o),o*=2):(e.copyWithin(n+o,n,n+a-o),o=a);return e}var fy=e((()=>{})),py,my=e((()=>{Qi(),py=class{constructor(e,t,n){this._loadCount=0,this._subscribers=new Set,this.id=e,this.context=n,this.setData(t)}subscribe(e){this._subscribers.add(e)}unsubscribe(e){this._subscribers.delete(e)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(e,t){if(e===this._data&&!t)return;this._data=e;let n=++this._loadCount,r=e;typeof e==`string`&&(r=Xi(e)),r instanceof Promise?(this.isLoaded=!1,this._loader=r.then(e=>{this._loadCount===n&&(this.isLoaded=!0,this._error=void 0,this._content=e)}).catch(e=>{this._loadCount===n&&(this.isLoaded=!0,this._error=e||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=e);for(let e of this._subscribers)e.onChange(this.getData())}}})),hy,gy=e((()=>{my(),hy=class{constructor(e){this.protocol=e.protocol||`resource://`,this._context={device:e.device,gl:e.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(e){return e.startsWith(this.protocol)?!0:e in this._resources}add({resourceId:e,data:t,forceUpdate:n=!1,persistent:r=!0}){let i=this._resources[e];i?i.setData(t,n):(i=new py(e,t,this._context),this._resources[e]=i),i.persistent=r}remove(e){let t=this._resources[e];t&&(t.delete(),delete this._resources[e])}unsubscribe({consumerId:e}){let t=this._consumers[e];if(t){for(let e in t){let n=t[e],r=this._resources[n.resourceId];r&&r.unsubscribe(n)}delete this._consumers[e],this.prune()}}subscribe({resourceId:e,onChange:t,consumerId:n,requestId:r=`default`}){let{_resources:i,protocol:a}=this;e.startsWith(a)&&(e=e.replace(a,``),i[e]||this.add({resourceId:e,data:null,persistent:!1}));let o=i[e];if(this._track(n,r,o,t),o)return o.getData()}prune(){this._pruneRequest||=setTimeout(()=>this._prune(),0)}finalize(){for(let e in this._resources)this._resources[e].delete()}_track(e,t,n,r){let i=this._consumers,a=i[e]=i[e]||{},o=a[t],s=o&&o.resourceId&&this._resources[o.resourceId];s&&(s.unsubscribe(o),this.prune()),n&&(o?(o.onChange=r,o.resourceId=n.id):o={onChange:r,resourceId:n.id},a[t]=o,n.subscribe(o))}_prune(){this._pruneRequest=null;for(let e of Object.keys(this._resources)){let t=this._resources[e];!t.persistent&&!t.inUse()&&(t.delete(),delete this._resources[e])}}}})),_y,vy,yy,by=e((()=>{Yv(),jh(),cy(),I(),no(),fy(),_(),gy(),wg(),_y=`layerManager.setLayers`,vy=`layerManager.activateViewport`,yy=class{constructor(e,t){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=e=>{L(vy,this,e),e&&(this.context.viewport=e)};let{deck:n,stats:r,viewport:i,timeline:a}=t||{};this.layers=[],this.resourceManager=new hy({device:e,protocol:`deck://`}),this.context={mousePosition:null,userData:{},layerManager:this,device:e,gl:e?.gl,deck:n,shaderAssembler:Dh(e?.info?.shadingLanguage||`glsl`),defaultShaderModules:[pd],renderPass:void 0,stats:r||new y({id:`deck.gl`}),viewport:i||new Cg({id:`DEFAULT-INITIAL-VIEWPORT`}),timeline:a||new g_,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){this.resourceManager.finalize();for(let e of this.layers)this._finalizeLayer(e)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);for(let n of this.layers){let r=n.getNeedsRedraw(e);t||=r}return t}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?`layers changed`:this._defaultShaderModulesChanged?`shader modules changed`:this._needsUpdate}setNeedsRedraw(e){this._needsRedraw=this._needsRedraw||e}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e}getLayers({layerIds:e}={}){return e?this.layers.filter(t=>e.find(e=>t.id.indexOf(e)===0)):this.layers}setProps(e){`debug`in e&&(this._debug=e.debug),`userData`in e&&(this.context.userData=e.userData),`layers`in e&&(this._nextLayers=e.layers),`onError`in e&&(this.context.onError=e.onError)}setLayers(e,t){L(_y,this,t,e),this._lastRenderedLayers=e;let n=ly(e,Boolean);for(let e of n)e.context=this.context;this._updateLayers(this.layers,n)}updateLayers(){let e=this.needsUpdate();e&&(this.setNeedsRedraw(`updating layers: ${e}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,e)),this._nextLayers=null}addDefaultShaderModule(e){let{defaultShaderModules:t}=this.context;t.find(t=>t.name===e.name)||(t.push(e),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(e){let{defaultShaderModules:t}=this.context,n=t.findIndex(t=>t.name===e.name);n>=0&&(t.splice(n,1),this._defaultShaderModulesChanged=!0)}_handleError(e,t,n){n.raiseError(t,`${e} of ${n}`)}_updateLayers(e,t){let n={};for(let t of e)n[t.id]?F.warn(`Multiple old layers with same id ${t.id}`)():n[t.id]=t;if(this._defaultShaderModulesChanged){for(let t of e)t.setNeedsUpdate(),t.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}let r=[];this._updateSublayersRecursively(t,n,r),this._finalizeOldLayers(n);let i=!1;for(let e of r)if(e.hasUniformTransition()){i=`Uniform transition in ${e}`;break}this._needsUpdate=i,this.layers=r}_updateSublayersRecursively(e,t,n){for(let r of e){r.context=this.context;let e=t[r.id];e===null&&F.warn(`Multiple new layers with same id ${r.id}`)(),t[r.id]=null;let i=null;try{this._debug&&e!==r&&r.validateProps(),e?(this._transferLayerState(e,r),this._updateLayer(r)):this._initializeLayer(r),n.push(r),i=r.isComposite?r.getSubLayers():null}catch(e){this._handleError(`matching`,e,r)}i&&this._updateSublayersRecursively(i,t,n)}}_finalizeOldLayers(e){for(let t in e){let n=e[t];n&&this._finalizeLayer(n)}}_initializeLayer(e){try{e._initialize(),e.lifecycle=ty.INITIALIZED}catch(t){this._handleError(`initialization`,t,e)}}_transferLayerState(e,t){t._transferState(e),t.lifecycle=ty.MATCHED,t!==e&&(e.lifecycle=ty.AWAITING_GC)}_updateLayer(e){try{e._update()}catch(t){this._handleError(`update`,t,e)}}_finalizeLayer(e){this._needsRedraw=this._needsRedraw||`finalized ${e}`,e.lifecycle=ty.AWAITING_FINALIZATION;try{e._finalize(),e.lifecycle=ty.FINALIZED}catch(t){this._handleError(`finalization`,t,e)}}}}));function Y(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!Y(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!Y(e[i],t[i],n-1))return!1;return!0}return!1}var xy=e((()=>{})),Sy,Cy=e((()=>{xy(),I(),fy(),Sy=class{constructor(e){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=e.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw=`First render`,this._needsUpdate=`Initialize`,this._eventManager=e.eventManager,this._eventCallbacks={onViewStateChange:e.onViewStateChange,onInteractionStateChange:e.onInteractionStateChange},this._pickPosition=e.pickPosition,Object.seal(this),this.setProps(e)}finalize(){for(let e in this.controllers){let t=this.controllers[e];t&&t.finalize()}this.controllers={}}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e,this._needsRedraw=this._needsRedraw||e}updateViewStates(){for(let e in this.controllers){let t=this.controllers[e];t&&t.updateTransition()}}getViewports(e){return e?this._viewports.filter(t=>t.containsPixel(e)):this._viewports}getViews(){let e={};return this.views.forEach(t=>{e[t.id]=t}),e}getView(e){return this.views.find(t=>t.id===e)}getViewState(e){let t=typeof e==`string`?this.getView(e):e,n=t&&this.viewState[t.getViewStateId()]||this.viewState;return t?t.filterViewState(n):n}getViewport(e){return this._viewportMap[e]}unproject(e,t){let n=this.getViewports(),r={x:e[0],y:e[1]};for(let i=n.length-1;i>=0;--i){let a=n[i];if(a.containsPixel(r)){let n=e.slice();return n[0]-=a.x,n[1]-=a.y,a.unproject(n,t)}}return null}setProps(e){e.views&&this._setViews(e.views),e.viewState&&this._setViewState(e.viewState),(`width`in e||`height`in e)&&this._setSize(e.width,e.height),`pickPosition`in e&&(this._pickPosition=e.pickPosition),this._isUpdating||this._update()}_update(){this._isUpdating=!0,this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._isUpdating=!1}_setSize(e,t){(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.setNeedsUpdate(`Size changed`))}_setViews(e){e=ly(e,Boolean),this._diffViews(e,this.views)&&this.setNeedsUpdate(`views changed`),this.views=e}_setViewState(e){e?(Y(e,this.viewState,3)||this.setNeedsUpdate(`viewState changed`),this.viewState=e):F.warn("missing `viewState` or `initialViewState`")()}_createController(e,t){let n=t.type;return new n({timeline:this.timeline,eventManager:this._eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:t=>this.getView(e.id)?.makeViewport({viewState:t,width:this.width,height:this.height}),pickPosition:this._pickPosition})}_updateController(e,t,n,r){let i=e.controller;if(i&&n){let a={...t,...i,id:e.id,x:n.x,y:n.y,width:n.width,height:n.height};return(!r||r.constructor!==i.type)&&(r=this._createController(e,a)),r&&r.setProps(a),r}return null}_rebuildViewports(){let{views:e}=this,t=this.controllers;this._viewports=[],this.controllers={};let n=!1;for(let r=e.length;r--;){let i=e[r],a=this.getViewState(i),o=i.makeViewport({viewState:a,width:this.width,height:this.height}),s=t[i.id],c=!!i.controller;c&&!s&&(n=!0),(n||!c)&&s&&(s.finalize(),s=null),this.controllers[i.id]=this._updateController(i,a,o,s),o&&this._viewports.unshift(o)}for(let e in t){let n=t[e];n&&!this.controllers[e]&&n.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(e=>{e.id&&(this._viewportMap[e.id]=this._viewportMap[e.id]||e)})}_diffViews(e,t){return e.length!==t.length||e.some((n,r)=>!e[r].equals(t[r]))}}}));function wy(e){switch(typeof e){case`number`:if(!Number.isFinite(e))throw Error(`Could not parse position string ${e}`);return{type:`literal`,value:e};case`string`:try{let t=Dy(e);return new My(t).parseExpression()}catch(t){let n=t instanceof Error?t.message:String(t);throw Error(`Could not parse position string ${e}: ${n}`)}default:throw Error(`Could not parse position string ${e}`)}}function Ty(e,t){switch(e.type){case`literal`:return e.value;case`percentage`:return Math.round(e.value*t);case`binary`:let n=Ty(e.left,t),r=Ty(e.right,t);return e.operator===`+`?n+r:n-r;default:throw Error(`Unknown layout expression type`)}}function Ey(e,t){return Ty(e,t)}function Dy(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(/\s/.test(r)){n++;continue}if(r===`+`||r===`-`||r===`(`||r===`)`||r===`%`){t.push({type:`symbol`,value:r}),n++;continue}if(Oy(r)||r===`.`){let i=n,a=r===`.`;for(n++;n<e.length;){let t=e[n];if(Oy(t)){n++;continue}if(t===`.`&&!a){a=!0,n++;continue}break}let o=e.slice(i,n);if(!jy.test(o))throw Error(`Invalid number token`);t.push({type:`number`,value:parseFloat(o)});continue}if(ky(r)){let r=n;for(;n<e.length&&ky(e[n]);)n++;let i=e.slice(r,n).toLowerCase();t.push({type:`word`,value:i});continue}throw Error(`Invalid token in position string`)}return t}function Oy(e){return e>=`0`&&e<=`9`}function ky(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`}function Ay(e){return!!(e&&e.type===`symbol`&&(e.value===`+`||e.value===`-`))}var jy,My,Ny=e((()=>{jy=/^(?:\d+\.?\d*|\.\d+)$/,My=class{constructor(e){this.index=0,this.tokens=e}parseExpression(){let e=this.parseBinaryExpression();if(this.index<this.tokens.length)throw Error(`Unexpected token at end of expression`);return e}parseBinaryExpression(){let e=this.parseFactor(),t=this.peek();for(;Ay(t);){this.index++;let n=this.parseFactor();e={type:`binary`,operator:t.value,left:e,right:n},t=this.peek()}return e}parseFactor(){let e=this.peek();if(!e)throw Error(`Unexpected end of expression`);if(e.type===`symbol`&&e.value===`+`)return this.index++,this.parseFactor();if(e.type===`symbol`&&e.value===`-`)return this.index++,{type:`binary`,operator:`-`,left:{type:`literal`,value:0},right:this.parseFactor()};if(e.type===`symbol`&&e.value===`(`){this.index++;let e=this.parseBinaryExpression();if(!this.consumeSymbol(`)`))throw Error(`Missing closing parenthesis`);return e}if(e.type===`word`&&e.value===`calc`){if(this.index++,!this.consumeSymbol(`(`))throw Error(`Missing opening parenthesis after calc`);let e=this.parseBinaryExpression();if(!this.consumeSymbol(`)`))throw Error(`Missing closing parenthesis`);return e}if(e.type===`number`){this.index++;let t=e.value,n=this.peek();return n&&n.type===`symbol`&&n.value===`%`?(this.index++,{type:`percentage`,value:t/100}):(n&&n.type===`word`&&n.value===`px`&&this.index++,{type:`literal`,value:t})}throw Error(`Unexpected token in expression`)}consumeSymbol(e){let t=this.peek();return t&&t.type===`symbol`&&t.value===e?(this.index++,!0):!1}peek(){return this.tokens[this.index]||null}}}));function Py(e,t){let n={...e};for(let e in t)e!==`id`&&(Array.isArray(n[e])&&Array.isArray(t[e])?n[e]=Fy(n[e],t[e]):n[e]=t[e]);return n}function Fy(e,t){e=e.slice();for(let n=0;n<t.length;n++){let r=t[n];Number.isFinite(r)&&(e[n]=r)}return e}var Iy=e((()=>{})),Ly,Ry=e((()=>{Ny(),xy(),Iy(),Ly=class{constructor(e){let{id:t,x:n=0,y:r=0,width:i=`100%`,height:a=`100%`,padding:o=null}=e;this.id=t||this.constructor.displayName||`view`,this.props={...e,id:this.id},this._x=wy(n),this._y=wy(r),this._width=wy(i),this._height=wy(a),this._padding=o&&{left:wy(o.left||0),right:wy(o.right||0),top:wy(o.top||0),bottom:wy(o.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(e){return this===e||this.constructor===e.constructor&&Y(this.props,e.props,2)}clone(e){let t=this.constructor;return new t({...this.props,...e})}makeViewport({width:e,height:t,viewState:n}){n=this.filterViewState(n);let r=this.getDimensions({width:e,height:t});return!r.height||!r.width?null:new(this.getViewportType(n))({...n,...this.props,...r})}getViewStateId(){let{viewState:e}=this.props;return typeof e==`string`?e:e?.id||this.id}filterViewState(e){return this.props.viewState&&typeof this.props.viewState==`object`?this.props.viewState.id?Py(e,this.props.viewState):this.props.viewState:e}getDimensions({width:e,height:t}){let n={x:Ey(this._x,e),y:Ey(this._y,t),width:Ey(this._width,e),height:Ey(this._height,t)};return this._padding&&(n.padding={left:Ey(this._padding.left,e),top:Ey(this._padding.top,t),right:Ey(this._padding.right,e),bottom:Ey(this._padding.bottom,t)}),n}get controller(){let e=this.props.controller;return e?e===!0?{type:this.ControllerType}:typeof e==`function`?{type:e}:{type:this.ControllerType,...e}:null}}})),zy,By=e((()=>{zy=class{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&=(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,!1)}update(){if(!this._inProgress)return!1;if(this._handle===null){let{_timeline:e,settings:t}=this;this._handle=e.addChannel({delay:e.getTime(),duration:t.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}}})),Vy,Hy,Uy,Wy,Gy,Ky=e((()=>{By(),Vy=()=>{},Hy={BREAK:1,SNAP_TO_END:2,IGNORE:3},Uy=e=>e,Wy=Hy.BREAK,Gy=class{constructor(e){this._onTransitionUpdate=e=>{let{time:t,settings:{interpolator:n,startProps:r,endProps:i,duration:a,easing:o}}=e,s=o(t/a),c=n.interpolateProps(r,i,s);this.propsInTransition=this.getControllerState({...this.props,...c}).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=e.getControllerState,this.propsInTransition=null,this.transition=new zy(e.timeline),this.onViewStateChange=e.onViewStateChange||Vy,this.onStateChange=e.onStateChange||Vy}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(e){let t=!1,n=this.props;if(this.props=e,!n||this._shouldIgnoreViewportChange(n,e))return!1;if(this._isTransitionEnabled(e)){let r=n;if(this.transition.inProgress){let{interruption:e,endProps:t}=this.transition.settings;r={...n,...e===Hy.SNAP_TO_END?t:this.propsInTransition||n}}this._triggerTransition(r,e),t=!0}else this.transition.cancel();return t}updateTransition(){this.transition.update()}_isTransitionEnabled(e){let{transitionDuration:t,transitionInterpolator:n}=e;return(t>0||t===`auto`)&&!!n}_isUpdateDueToCurrentTransition(e){return this.transition.inProgress&&this.propsInTransition?this.transition.settings.interpolator.arePropsEqual(e,this.propsInTransition):!1}_shouldIgnoreViewportChange(e,t){return this.transition.inProgress?this.transition.settings.interruption===Hy.IGNORE||this._isUpdateDueToCurrentTransition(t):!this._isTransitionEnabled(t)||t.transitionInterpolator.arePropsEqual(e,t)}_triggerTransition(e,t){let n=this.getControllerState(e),r=this.getControllerState(t).shortestPathFrom(n),i=t.transitionInterpolator,a=i.getDuration?i.getDuration(e,t):t.transitionDuration;if(a===0)return;let o=i.initializeProps(e,r);this.propsInTransition={};let s={duration:a,easing:t.transitionEasing||Uy,interpolator:i,interruption:t.transitionInterruption||Wy,startProps:o.start,endProps:o.end,onStart:t.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(t.onTransitionInterrupt),onEnd:this._onTransitionEnd(t.onTransitionEnd)};this.transition.start(s),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(e){return t=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),e?.(t)}}}}));function X(e,t){if(!e)throw Error(t||`deck.gl: assertion failed.`)}var qy=e((()=>{})),Jy,Yy=e((()=>{U(),qy(),Jy=class{constructor(e){let{compare:t,extract:n,required:r}=e;this._propsToCompare=t,this._propsToExtract=n||t,this._requiredProps=r}arePropsEqual(e,t){for(let n of this._propsToCompare)if(!(n in e)||!(n in t)||!Ac(e[n],t[n]))return!1;return!0}initializeProps(e,t){let n={},r={};for(let i of this._propsToExtract)(i in e||i in t)&&(n[i]=e[i],r[i]=t[i]);return this._checkRequiredProps(n),this._checkRequiredProps(r),{start:n,end:r}}getDuration(e,t){return t.transitionDuration}_checkRequiredProps(e){this._requiredProps&&this._requiredProps.forEach(t=>{let n=e[t];X(Number.isFinite(n)||Array.isArray(n),`${t} is required for transition`)})}}}));function Xy(){let e=256/tb,t=Math.PI/180*256;return{unitsPerMeter:[e,e,e],unitsPerMeter2:[0,0,0],metersPerUnit:[1/e,1/e,1/e],unitsPerDegree:[t,t,e],unitsPerDegree2:[0,0,0],degreesPerUnit:[1/t,1/t,1/e]}}function Zy(e){let t=Math.PI*Math.cos(e*Math.PI/180);return Math.log2(t)}function Qy(e,t){let n=Xl([],t,e);return Yl(n,n,1/n[3]),n}var $y,eb,tb,nb,rb=e((()=>{U(),wg(),Up(),uh(),$y=Math.PI/180,eb=180/Math.PI,tb=6370972,nb=class extends Cg{constructor(e={}){let{longitude:t=0,zoom:n=0,nearZMultiplier:r=.5,farZMultiplier:i=1,resolution:a=10}=e,{latitude:o=0,height:s,altitude:c=1.5,fovy:l}=e;o=Math.max(Math.min(o,Zm),-Zm),s||=1,l?c=Um(l):l=Hm(c);let u=2**(n-Zy(o)),d=e.nearZ??r,f=e.farZ??(c+256*2*u/s)*i,p=new cu().lookAt({eye:[0,-c,0],up:[0,0,1]});p.rotateX(o*$y),p.rotateZ(-t*$y),p.scale(u/s),super({...e,height:s,viewMatrix:p,longitude:t,latitude:o,zoom:n,distanceScales:Xy(),fovy:l,focalDistance:c,near:d,far:f}),this.scale=u,this.latitude=o,this.longitude=t,this.fovy=l,this.resolution=a}get projectionMode(){return q.GLOBE}getDistanceScales(){return this.distanceScales}getBounds(e={}){let t={targetZ:e.z||0},n=this.unproject([0,this.height/2],t),r=this.unproject([this.width/2,0],t),i=this.unproject([this.width,this.height/2],t),a=this.unproject([this.width/2,this.height],t);return i[0]<this.longitude&&(i[0]+=360),n[0]>this.longitude&&(n[0]-=360),[Math.min(n[0],i[0],r[0],a[0]),Math.min(n[1],i[1],r[1],a[1]),Math.max(n[0],i[0],r[0],a[0]),Math.max(n[1],i[1],r[1],a[1])]}unproject(e,{topLeft:t=!0,targetZ:n}={}){let[r,i,a]=e,o=t?i:this.height-i,{pixelUnprojectionMatrix:s}=this,c;if(Number.isFinite(a))c=Qy(s,[r,o,a,1]);else{let e=Qy(s,[r,o,-1,1]),t=Qy(s,[r,o,1,1]),i=((n||0)/tb+1)*256,a=xl(yl([],e,t)),l=xl(e),u=xl(t),d=4*((4*l*u-(a-l-u)**2)/16)/a;c=dl([],e,t,(Math.sqrt(l-d)-Math.sqrt(Math.max(0,i*i-d)))/Math.sqrt(a))}let[l,u,d]=this.unprojectPosition(c);return Number.isFinite(a)?[l,u,d]:Number.isFinite(n)?[l,u,n]:[l,u]}projectPosition(e){let[t,n,r=0]=e,i=t*$y,a=n*$y,o=Math.cos(a),s=(r/tb+1)*256;return[Math.sin(i)*o*s,-Math.cos(i)*o*s,Math.sin(a)*s]}unprojectPosition(e){let[t,n,r]=e,i=bl(e),a=Math.asin(r/i);return[Math.atan2(t,-n)*eb,a*eb,(i/256-1)*tb]}projectFlat(e){return e}unprojectFlat(e){return e}panByPosition([e,t,n],r,i){let a=.25/2**(this.zoom-Zy(this.latitude)),o=e+a*(i[0]-r[0]),s=t-a*(i[1]-r[1]);s=Math.max(Math.min(s,Zm),-Zm);let c={longitude:o,latitude:s,zoom:n-Zy(t)};return c.zoom+=Zy(c.latitude),c}},nb.displayName=`GlobeViewport`})),ib,ab,ob,sb=e((()=>{Yy(),U(),I(),rb(),ib=[`longitude`,`latitude`,`zoom`,`bearing`,`pitch`],ab=[`longitude`,`latitude`,`zoom`],ob=class extends Jy{constructor(e={}){let t=Array.isArray(e)?e:e.transitionProps,n=Array.isArray(e)?{}:e;n.transitionProps=Array.isArray(t)?{compare:t,required:t}:t||{compare:ib,required:ab},super(n.transitionProps),this.opts=n}initializeProps(e,t){let n=super.initializeProps(e,t),{makeViewport:r,around:i}=this.opts;if(r&&i)if(r(e)instanceof nb)F.warn(`around not supported in GlobeView`)();else{let a=r(e),o=r(t),s=a.unproject(i);n.start.around=i,Object.assign(n.end,{around:o.project(s),aroundPosition:s,width:t.width,height:t.height})}return n}interpolateProps(e,t,n){let r={};for(let i of this._propsToExtract)r[i]=kc(e[i]||0,t[i]||0,n);if(t.aroundPosition&&this.opts.makeViewport){let i=this.opts.makeViewport({...t,...r});Object.assign(r,i.panByPosition(t.aroundPosition,kc(e.around,t.around,n)))}return r}}})),cb,lb,ub,db,fb,pb,mb=e((()=>{Ky(),sb(),xy(),cb={transitionDuration:0},lb=300,ub=e=>1-(1-e)*(1-e),db={WHEEL:[`wheel`],PAN:[`panstart`,`panmove`,`panend`],PINCH:[`pinchstart`,`pinchmove`,`pinchend`],MULTI_PAN:[`multipanstart`,`multipanmove`,`multipanend`],DOUBLE_CLICK:[`dblclick`],KEYBOARD:[`keydown`]},fb={},pb=class{constructor(e){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this.invertPan=!1,this.dragMode=`rotate`,this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.keyboard=!0,this.transitionManager=new Gy({...e,getControllerState:e=>new this.ControllerState(e),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=e.eventManager,this.onViewStateChange=e.onViewStateChange||(()=>{}),this.onStateChange=e.onStateChange||(()=>{}),this.makeViewport=e.makeViewport,this.pickPosition=e.pickPosition}set events(e){this.toggleEvents(this._customEvents,!1),this.toggleEvents(e,!0),this._customEvents=e,this.props&&this.setProps(this.props)}finalize(){for(let e in this._events)this._events[e]&&this.eventManager?.off(e,this.handleEvent);this.transitionManager.finalize()}handleEvent(e){this._controllerState=void 0;let t=this._eventStartBlocked;switch(e.type){case`panstart`:return!t&&this._onPanStart(e);case`panmove`:return this._onPan(e);case`panend`:return this._onPanEnd(e);case`pinchstart`:return!t&&this._onPinchStart(e);case`pinchmove`:return this._onPinch(e);case`pinchend`:return this._onPinchEnd(e);case`multipanstart`:return!t&&this._onMultiPanStart(e);case`multipanmove`:return this._onMultiPan(e);case`multipanend`:return this._onMultiPanEnd(e);case`dblclick`:return this._onDoubleClick(e);case`wheel`:return this._onWheel(e);case`keydown`:return this._onKeyDown(e);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(e){let{x:t,y:n}=this.props,{offsetCenter:r}=e;return[r.x-t,r.y-n]}isPointInBounds(e,t){let{width:n,height:r}=this.props;if(t&&t.handled)return!1;let i=e[0]>=0&&e[0]<=n&&e[1]>=0&&e[1]<=r;return i&&t&&t.stopPropagation(),i}isFunctionKeyPressed(e){let{srcEvent:t}=e;return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(e){let t=setTimeout(()=>{this._eventStartBlocked===t&&(this._eventStartBlocked=null)},e);this._eventStartBlocked=t}setProps(e){e.dragMode&&(this.dragMode=e.dragMode);let t=this.props;this.props=e,`transitionInterpolator`in e||(e.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(e);let{inertia:n}=e;this.inertia=Number.isFinite(n)?n:n===!0?lb:0;let{scrollZoom:r=!0,dragPan:i=!0,dragRotate:a=!0,doubleClickZoom:o=!0,touchZoom:s=!0,touchRotate:c=!1,keyboard:l=!0}=e,u=!!this.onViewStateChange;if(this.toggleEvents(db.WHEEL,u&&r),this.toggleEvents(db.PAN,u),this.toggleEvents(db.PINCH,u&&(s||c)),this.toggleEvents(db.MULTI_PAN,u&&c),this.toggleEvents(db.DOUBLE_CLICK,u&&o),this.toggleEvents(db.KEYBOARD,u&&l),this.scrollZoom=r,this.dragPan=i,this.dragRotate=a,this.doubleClickZoom=o,this.touchZoom=s,this.touchRotate=c,this.keyboard=l,(!t||t.height!==e.height||t.width!==e.width||t.maxBounds!==e.maxBounds)&&e.maxBounds){let t=new this.ControllerState({...e,makeViewport:this.makeViewport}),n=t.getViewportProps();Object.keys(n).some(t=>!Y(n[t],e[t],1))&&this.updateViewport(t)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(e,t){this.eventManager&&e.forEach(e=>{this._events[e]!==t&&(this._events[e]=t,t?this.eventManager.on(e,this.handleEvent):this.eventManager.off(e,this.handleEvent))})}updateViewport(e,t=null,n={}){let r={...e.getViewportProps(),...t},i=this.controllerState!==e;if(this.state=e.getState(),this._setInteractionState(n),i){let e=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:r,interactionState:this._interactionState,oldViewState:e,viewId:this.props.id})}}_onTransition(e){this.onViewStateChange({...e,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(e){Object.assign(this._interactionState,e),this.onStateChange(this._interactionState)}_onPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.isFunctionKeyPressed(e)||e.rightButton||!1;(this.invertPan||this.dragMode===`pan`)&&(n=!n);let r=this.controllerState[n?`panStart`:`rotateStart`]({pos:t});return this._panMove=n,this.updateViewport(r,cb,{isDragging:!0}),!0}_onPan(e){return this.isDragging()?this._panMove?this._onPanMove(e):this._onPanRotate(e):!1}_onPanEnd(e){return this.isDragging()?this._panMove?this._onPanMoveEnd(e):this._onPanRotateEnd(e):!1}_onPanMove(e){if(!this.dragPan)return!1;let t=this.getCenter(e),n=this.controllerState.pan({pos:t});return this.updateViewport(n,cb,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(e){let{inertia:t}=this;if(this.dragPan&&t&&e.velocity){let n=this.getCenter(e),r=[n[0]+e.velocityX*t/2,n[1]+e.velocityY*t/2],i=this.controllerState.pan({pos:r}).panEnd();this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:ub},{isDragging:!1,isPanning:!0})}else{let e=this.controllerState.panEnd();this.updateViewport(e,null,{isDragging:!1,isPanning:!1})}return!0}_onPanRotate(e){if(!this.dragRotate)return!1;let t=this.getCenter(e),n=this.controllerState.rotate({pos:t});return this.updateViewport(n,cb,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(e){let{inertia:t}=this;if(this.dragRotate&&t&&e.velocity){let n=this.getCenter(e),r=[n[0]+e.velocityX*t/2,n[1]+e.velocityY*t/2],i=this.controllerState.rotate({pos:r}).rotateEnd();this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:ub},{isDragging:!1,isRotating:!0})}else{let e=this.controllerState.rotateEnd();this.updateViewport(e,null,{isDragging:!1,isRotating:!1})}return!0}_onWheel(e){if(!this.scrollZoom)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;e.srcEvent.preventDefault();let{speed:n=.01,smooth:r=!1}=this.scrollZoom===!0?{}:this.scrollZoom,{delta:i}=e,a=2/(1+Math.exp(-Math.abs(i*n)));i<0&&a!==0&&(a=1/a);let o=r?{...this._getTransitionProps({around:t}),transitionDuration:250}:cb,s=this.controllerState.zoom({pos:t,scale:a});return this.updateViewport(s,o,{isZooming:!0,isPanning:!0}),r||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.controllerState.rotateStart({pos:t});return this.updateViewport(n,cb,{isDragging:!0}),!0}_onMultiPan(e){if(!this.touchRotate||!this.isDragging())return!1;let t=this.getCenter(e);t[0]-=e.deltaX;let n=this.controllerState.rotate({pos:t});return this.updateViewport(n,cb,{isDragging:!0,isRotating:!0}),!0}_onMultiPanEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this;if(this.touchRotate&&t&&e.velocityY){let n=this.getCenter(e),r=[n[0],n[1]+=e.velocityY*t/2],i=this.controllerState.rotate({pos:r});this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:ub},{isDragging:!1,isRotating:!0}),this.blockEvents(t)}else{let e=this.controllerState.rotateEnd();this.updateViewport(e,null,{isDragging:!1,isRotating:!1})}return!0}_onPinchStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.controllerState.zoomStart({pos:t}).rotateStart({pos:t});return fb._startPinchRotation=e.rotation,fb._lastPinchEvent=e,this.updateViewport(n,cb,{isDragging:!0}),!0}_onPinch(e){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let t=this.controllerState;if(this.touchZoom){let{scale:n}=e,r=this.getCenter(e);t=t.zoom({pos:r,scale:n})}if(this.touchRotate){let{rotation:n}=e;t=t.rotate({deltaAngleX:fb._startPinchRotation-n})}return this.updateViewport(t,cb,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),fb._lastPinchEvent=e,!0}_onPinchEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this,{_lastPinchEvent:n}=fb;if(this.touchZoom&&t&&n&&e.scale!==n.scale){let r=this.getCenter(e),i=this.controllerState.rotateEnd(),a=Math.log2(e.scale),o=2**(a+(a-Math.log2(n.scale))/(e.deltaTime-n.deltaTime)*t/2);i=i.zoom({pos:r,scale:o}).zoomEnd(),this.updateViewport(i,{...this._getTransitionProps({around:r}),transitionDuration:t,transitionEasing:ub},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(t)}else{let e=this.controllerState.zoomEnd().rotateEnd();this.updateViewport(e,null,{isDragging:!1,isPanning:!1,isZooming:!1,isRotating:!1})}return fb._startPinchRotation=null,fb._lastPinchEvent=null,!0}_onDoubleClick(e){if(!this.doubleClickZoom)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.isFunctionKeyPressed(e),r=this.controllerState.zoom({pos:t,scale:n?.5:2});return this.updateViewport(r,this._getTransitionProps({around:t}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onKeyDown(e){if(!this.keyboard)return!1;let t=this.isFunctionKeyPressed(e),{zoomSpeed:n,moveSpeed:r,rotateSpeedX:i,rotateSpeedY:a}=this.keyboard===!0?{}:this.keyboard,{controllerState:o}=this,s,c={};switch(e.srcEvent.code){case`Minus`:s=t?o.zoomOut(n).zoomOut(n):o.zoomOut(n),c.isZooming=!0;break;case`Equal`:s=t?o.zoomIn(n).zoomIn(n):o.zoomIn(n),c.isZooming=!0;break;case`ArrowLeft`:t?(s=o.rotateLeft(i),c.isRotating=!0):(s=o.moveLeft(r),c.isPanning=!0);break;case`ArrowRight`:t?(s=o.rotateRight(i),c.isRotating=!0):(s=o.moveRight(r),c.isPanning=!0);break;case`ArrowUp`:t?(s=o.rotateUp(a),c.isRotating=!0):(s=o.moveUp(r),c.isPanning=!0);break;case`ArrowDown`:t?(s=o.rotateDown(a),c.isRotating=!0):(s=o.moveDown(r),c.isPanning=!0);break;default:return!1}return this.updateViewport(s,this._getTransitionProps(),c),!0}_getTransitionProps(e){let{transition:t}=this;return!t||!t.transitionInterpolator?cb:e?{...t,transitionInterpolator:new ob({...e,...t.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:t}}})),hb,gb=e((()=>{hb=class{constructor(e,t,n){this.makeViewport=n,this._viewportProps=this.applyConstraints(e),this._state=t}getViewportProps(){return this._viewportProps}getState(){return this._state}}}));function _b([e,t]){if(Math.abs(t)>90&&(t=Math.sign(t)*90),Number.isFinite(e)){let[n,r]=Pm([e,t]);return[n,B(r,0,bb)]}let[,n]=Pm([0,t]);return[e,B(n,0,bb)]}var vb,yb,bb,xb,Sb,Cb,wb=e((()=>{U(),mb(),gb(),uh(),qy(),_g(),sb(),vb=5,yb=1.2,bb=512,xb=[[-1/0,-90],[1/0,90]],Sb=class extends hb{constructor(e){let{width:t,height:n,latitude:r,longitude:i,zoom:a,bearing:o=0,pitch:s=0,altitude:c=1.5,position:l=[0,0,0],maxZoom:u=20,minZoom:d=0,maxPitch:f=60,minPitch:p=0,startPanLngLat:m,startZoomLngLat:h,startRotatePos:g,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b,normalize:x=!0}=e;X(Number.isFinite(i)),X(Number.isFinite(r)),X(Number.isFinite(a));let S=e.maxBounds||(x?xb:null);super({width:t,height:n,latitude:r,longitude:i,zoom:a,bearing:o,pitch:s,altitude:c,maxZoom:u,minZoom:d,maxPitch:f,minPitch:p,normalize:x,position:l,maxBounds:S},{startPanLngLat:m,startZoomLngLat:h,startRotatePos:g,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b},e.makeViewport),this.getAltitude=e.getAltitude}panStart({pos:e}){return this._getUpdatedState({startPanLngLat:this._unproject(e)})}pan({pos:e,startPos:t}){let n=this.getState().startPanLngLat||this._unproject(t);if(!n)return this;let r=this.makeViewport(this.getViewportProps()).panByPosition(n,e);return this._getUpdatedState(r)}panEnd(){return this._getUpdatedState({startPanLngLat:null})}rotateStart({pos:e}){let t=this.getAltitude?.(e);return this._getUpdatedState({startRotatePos:e,startRotateLngLat:t===void 0?void 0:this._unproject3D(e,t),startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:t=0,deltaAngleY:n=0}){let{startRotatePos:r,startRotateLngLat:i,startBearing:a,startPitch:o}=this.getState();if(!r||a===void 0||o===void 0)return this;let s;if(s=e?this._getNewRotation(e,r,o,a):{bearing:a+t,pitch:o+n},i){let e=this.makeViewport({...this.getViewportProps(),...s}),t=`panByPosition3D`in e?`panByPosition3D`:`panByPosition`;return this._getUpdatedState({...s,...e[t](i,r)})}return this._getUpdatedState(s)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:e}){return this._getUpdatedState({startZoomLngLat:this._unproject(e),startZoom:this.getViewportProps().zoom})}zoom({pos:e,startPos:t,scale:n}){let{startZoom:r,startZoomLngLat:i}=this.getState();if(i||=(r=this.getViewportProps().zoom,this._unproject(t)||this._unproject(e)),!i)return this;let a=this._constrainZoom(r+Math.log2(n)),o=this.makeViewport({...this.getViewportProps(),zoom:a});return this._getUpdatedState({zoom:a,...o.panByPosition(i,e)})}zoomEnd(){return this._getUpdatedState({startZoomLngLat:null,startZoom:null})}zoomIn(e=2){return this._zoomFromCenter(e)}zoomOut(e=2){return this._zoomFromCenter(1/e)}moveLeft(e=100){return this._panFromCenter([e,0])}moveRight(e=100){return this._panFromCenter([-e,0])}moveUp(e=100){return this._panFromCenter([0,e])}moveDown(e=100){return this._panFromCenter([0,-e])}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}shortestPathFrom(e){let t=e.getViewportProps(),n={...this.getViewportProps()},{bearing:r,longitude:i}=n;return Math.abs(r-t.bearing)>180&&(n.bearing=r<0?r+360:r-360),Math.abs(i-t.longitude)>180&&(n.longitude=i<0?i+360:i-360),n}applyConstraints(e){let{maxPitch:t,minPitch:n,pitch:r,longitude:i,bearing:a,normalize:o,maxBounds:s}=e;if(o&&((i<-180||i>180)&&(e.longitude=cg(i+180,360)-180),(a<-180||a>180)&&(e.bearing=cg(a+180,360)-180)),e.pitch=B(r,n,t),e.zoom=this._constrainZoom(e.zoom,e),s){let t=_b(s[0]),n=_b(s[1]),r=2**e.zoom,i=e.width/2/r,a=e.height/2/r,[o,c]=Fm([t[0]+i,t[1]+a]),[l,u]=Fm([n[0]-i,n[1]-a]);e.longitude=B(e.longitude,o,l),e.latitude=B(e.latitude,c,u)}return e}_constrainZoom(e,t){t||=this.getViewportProps();let{maxZoom:n,maxBounds:r}=t,i=r!==null&&t.width>0&&t.height>0,{minZoom:a}=t;if(i){let e=_b(r[0]),i=_b(r[1]),o=i[0]-e[0],s=i[1]-e[1];Number.isFinite(o)&&o>0&&(a=Math.max(a,Math.log2(t.width/o))),Number.isFinite(s)&&s>0&&(a=Math.max(a,Math.log2(t.height/s))),a>n&&(a=n)}return B(e,a,n)}_zoomFromCenter(e){let{width:t,height:n}=this.getViewportProps();return this.zoom({pos:[t/2,n/2],scale:e})}_panFromCenter(e){let{width:t,height:n}=this.getViewportProps();return this.pan({startPos:[t/2,n/2],pos:[t/2+e[0],n/2+e[1]]})}_getUpdatedState(e){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e})}_unproject(e){let t=this.makeViewport(this.getViewportProps());return e&&t.unproject(e)}_unproject3D(e,t){return this.makeViewport(this.getViewportProps()).unproject(e,{targetZ:t})}_getNewRotation(e,t,n,r){let i=e[0]-t[0],a=e[1]-t[1],o=e[1],s=t[1],{width:c,height:l}=this.getViewportProps(),u=i/c,d=0;a>0?Math.abs(l-s)>vb&&(d=a/(s-l)*yb):a<0&&s>vb&&(d=1-o/s),d=B(d,-1,1);let{minPitch:f,maxPitch:p}=this.getViewportProps(),m=r+180*u,h=n;return d>0?h=n+d*(p-n):d<0&&(h=n-d*(f-n)),{pitch:h,bearing:m}}},Cb=class extends pb{constructor(){super(...arguments),this.ControllerState=Sb,this.transition={transitionDuration:300,transitionInterpolator:new ob({transitionProps:{compare:[`longitude`,`latitude`,`zoom`,`bearing`,`pitch`,`position`],required:[`longitude`,`latitude`,`zoom`]}})},this.dragMode=`pan`,this.rotationPivot=`center`,this._getAltitude=e=>{if(this.rotationPivot===`2d`)return 0;if(this.rotationPivot===`3d`&&this.pickPosition){let{x:t,y:n}=this.props,r=this.pickPosition(t+e[0],n+e[1]);if(r&&r.coordinate&&r.coordinate.length>=3)return r.coordinate[2]}}}setProps(e){`rotationPivot`in e&&(this.rotationPivot=e.rotationPivot||`center`),e.getAltitude=this._getAltitude,e.position=e.position||[0,0,0],e.maxBounds=e.maxBounds||(e.normalize===!1?null:xb),super.setProps(e)}updateViewport(e,t=null,n={}){let r=e.getState();n.isDragging&&r.startRotateLngLat?n={...n,rotationPivotPosition:r.startRotateLngLat}:n.isDragging===!1&&(n={...n,rotationPivotPosition:void 0}),super.updateViewport(e,t,n)}}})),Tb,Eb=e((()=>{Ry(),Eg(),wb(),Tb=class extends Ly{constructor(e={}){super(e)}getViewportType(){return Tg}get ControllerType(){return Cb}},Tb.displayName=`MapView`}));function Db(e,t){return(e.order??1/0)-(t.order??1/0)}var Ob,kb,Ab=e((()=>{xy(),rg(),Ob=new ng,kb=class{constructor(e){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=e,this._needsRedraw=`Initial render`,this._setEffects([])}addDefaultEffect(e){let t=this._defaultEffects;if(!t.find(t=>t.id===e.id)){let n=t.findIndex(t=>Db(t,e)>0);n<0?t.push(e):t.splice(n,0,e),e.setup(this._context),this._setEffects(this.effects)}}setProps(e){`effects`in e&&(Y(e.effects,this.effects,1)||this._setEffects(e.effects))}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}getEffects(){return this._resolvedEffects}_setEffects(e){let t={};for(let e of this.effects)t[e.id]=e;let n=[];for(let r of e){let e=t[r.id],i=r;e&&e!==r?e.setProps?(e.setProps(r.props),i=e):e.cleanup(this._context):e||r.setup(this._context),n.push(i),delete t[r.id]}for(let e in t)t[e].cleanup(this._context);this.effects=n,this._resolvedEffects=n.concat(this._defaultEffects),e.some(e=>e instanceof ng)||this._resolvedEffects.push(Ob),this._needsRedraw=`effects changed`}finalize(){for(let e of this._resolvedEffects)e.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}}})),jb,Mb=e((()=>{Xh(),jb=class extends Yh{shouldDrawLayer(e){let{operation:t}=e.props;return t.includes(`draw`)||t.includes(`terrain`)}render(e){return this._render(e)}}})),Nb,Pb,Fb=e((()=>{no(),Mb(),ey(),Nb=`deckRenderer.renderLayers`,Pb=class{constructor(e,t={}){this.device=e,this.stats=t.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new jb(e),this.pickLayersPass=new $v(e),this.renderCount=0,this._needsRedraw=`Initial render`,this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(e){this.layerFilter!==e.layerFilter&&(this.layerFilter=e.layerFilter,this._needsRedraw=`layerFilter changed`),this.drawPickingColors!==e.drawPickingColors&&(this.drawPickingColors=e.drawPickingColors,this._needsRedraw=`drawPickingColors changed`)}renderLayers(e){if(!e.viewports.length)return;let t=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,n={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...e};n.effects&&this._preRender(n.effects,n);let r=this.lastPostProcessEffect?this.renderBuffers[0]:n.target;this.lastPostProcessEffect&&(n.clearColor=[0,0,0,0],n.clearCanvas=!0);let i=t.render({...n,target:r}),a=`stats`in i?i.stats:i;n.effects&&(this.lastPostProcessEffect&&(n.clearCanvas=e.clearCanvas===void 0||e.clearCanvas),this._postRender(n.effects,n)),this.renderCount++,L(Nb,this,a,e),this._updateStats(a)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}finalize(){let{renderBuffers:e}=this;for(let t of e)t.delete();e.length=0}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:n}of e)t+=n;this.stats.get(`Layers rendered`).addCount(t)}_preRender(e,t){this.lastPostProcessEffect=null,t.preRenderStats=t.preRenderStats||{};for(let n of e)t.preRenderStats[n.id]=n.preRender(t),n.postRender&&(this.lastPostProcessEffect=n.id);this.lastPostProcessEffect&&this._resizeRenderBuffers()}_resizeRenderBuffers(){let{renderBuffers:e}=this,t=this.device.canvasContext.getDrawingBufferSize(),[n,r]=t;e.length===0&&[0,1].map(t=>{let i=this.device.createTexture({sampler:{minFilter:`linear`,magFilter:`linear`},width:n,height:r});e.push(this.device.createFramebuffer({id:`deck-renderbuffer-${t}`,colorAttachments:[i]}))});for(let n of e)n.resize(t)}_postRender(e,t){let{renderBuffers:n}=this,r={...t,inputBuffer:n[0],swapBuffer:n[1]};for(let i of e)if(i.postRender){r.target=i.id===this.lastPostProcessEffect?t.target:void 0;let e=i.postRender(r);r.inputBuffer=e,r.swapBuffer=e===n[0]?n[1]:n[0]}}}}));function Ib({pickedColors:e,decodePickingColor:t,deviceX:n,deviceY:r,deviceRadius:i,deviceRect:a}){let{x:o,y:s,width:c,height:l}=a,u=i*i,d=-1,f=0;for(let t=0;t<l;t++){let i=t+s-r,a=i*i;if(a>u)f+=4*c;else for(let t=0;t<c;t++){if(e[f+3]-1>=0){let e=t+o-n,r=e*e+a;r<=u&&(u=r,d=f)}f+=4}}if(d>=0){let n=e.slice(d,d+4),r=t(n);if(r){let e=Math.floor(d/4/c),t=d/4-e*c;return{...r,pickedColor:n,pickedX:o+t,pickedY:s+e}}F.error(`Picked non-existent layer. Is picking buffer corrupt?`)()}return Rb}function Lb({pickedColors:e,decodePickingColor:t}){let n=new Map;if(e){for(let r=0;r<e.length;r+=4)if(e[r+3]-1>=0){let i=e.slice(r,r+4),a=i.join(`,`);if(!n.has(a)){let e=t(i);e?n.set(a,{...e,color:i}):F.error(`Picked non-existent layer. Is picking buffer corrupt?`)()}}}return Array.from(n.values())}var Rb,zb=e((()=>{I(),Rb={pickedColor:null,pickedObjectIndex:-1}}));function Bb({pickInfo:e,viewports:t,pixelRatio:n,x:r,y:i,z:a}){let o=t[0];t.length>1&&(o=Ub(e?.pickedViewports||t,{x:r,y:i}));let s;if(o){let e=[r-o.x,i-o.y];a!==void 0&&(e[2]=a),s=o.unproject(e)}return{color:null,layer:null,viewport:o,index:-1,picked:!1,x:r,y:i,pixel:[r,i],coordinate:s,devicePixel:e&&`pickedX`in e?[e.pickedX,e.pickedY]:void 0,pixelRatio:n}}function Vb(e){let{pickInfo:t,lastPickedInfo:n,mode:r,layers:i}=e,{pickedColor:a,pickedLayer:o,pickedObjectIndex:s}=t,c=o?[o]:[];if(r===`hover`){let e=n.index,t=n.layerId,r=o?o.props.id:null;if(r!==t||s!==e){if(r!==t){let e=i.find(e=>e.props.id===t);e&&c.unshift(e)}n.layerId=r,n.index=s,n.info=null}}let l=Bb(e),u=new Map;return u.set(null,l),c.forEach(e=>{let t={...l};e===o&&(t.color=a,t.index=s,t.picked=!0),t=Hb({layer:e,info:t,mode:r});let i=t.layer;e===o&&r===`hover`&&(n.info=t),u.set(i.id,t),r===`hover`&&i.updateAutoHighlight(t)}),u}function Hb({layer:e,info:t,mode:n}){for(;e&&t;){let r=t.layer||null;t.sourceLayer=r,t.layer=e,t=e.getPickingInfo({info:t,mode:n,sourceLayer:r}),e=e.parent}return t}function Ub(e,t){for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.containsPixel(t))return r}return e[0]}var Wb=e((()=>{})),Gb,Kb=e((()=>{O(),ey(),I(),zb(),Wb(),Gb=class{constructor(e,t={}){this._pickable=!0,this.device=e,this.stats=t.stats,this.pickLayersPass=new $v(e),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(e){`layerFilter`in e&&(this.layerFilter=e.layerFilter),`_pickable`in e&&(this._pickable=e._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(e){return this._pickClosestObjectAsync(e)}pickObjectsAsync(e){return this._pickVisibleObjectsAsync(e)}pickObject(e){return this._pickClosestObject(e)}pickObjects(e){return this._pickVisibleObjects(e)}getLastPickedObject({x:e,y:t,layers:n,viewports:r},i=this.lastPickedInfo.info){let a=i&&i.layer&&i.layer.id,o=i&&i.viewport&&i.viewport.id,s=a?n.find(e=>e.id===a):null,c=o&&r.find(e=>e.id===o)||r[0],l={x:e,y:t,viewport:c,coordinate:c&&c.unproject([e-c.x,t-c.y]),layer:s};return{...i,...l}}_resizeBuffer(e=this.device.getDefaultCanvasContext()){if(!this.pickingFBO){let e=this.device.createTexture({format:`rgba8unorm`,width:1,height:1,usage:d.RENDER_ATTACHMENT|d.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:`depth16unorm`}),this.device.isTextureFormatRenderable(`rgba32float`)){let e=this.device.createTexture({format:`rgba32float`,width:1,height:1,usage:d.RENDER_ATTACHMENT|d.COPY_SRC}),t=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:`depth16unorm`});this.depthFBO=t}}let[t,n]=e.getDrawingBufferSize();this.pickingFBO?.resize({width:t,height:n}),this.depthFBO?.resize({width:t,height:n})}_getPickable(e){if(this._pickable===!1)return null;let t=e.filter(e=>this.pickLayersPass.shouldDrawLayer(e)&&!e.isComposite);return t.length?t:null}async _pickClosestObjectAsync({layers:e,views:t,viewports:n,x:r,y:i,radius:a=0,depth:o=1,mode:s=`query`,unproject3D:c,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=l.cssToDeviceRatio(),p=this._getPickable(e);if(!p||n.length===0)return{result:[],emptyInfo:Bb({viewports:n,x:r,y:i,pixelRatio:f})};this._resizeBuffer(l);let m=l.cssToDevicePixels([r,i],!0),h=[m.x+Math.floor(m.width/2),m.y+Math.floor(m.height/2)],g=Math.round(a*f),{width:_,height:v}=this.pickingFBO,y=this._getPickingRect({deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceWidth:_,deviceHeight:v}),b={x:r-a,y:i-a,width:a*2+1,height:a*2+1},x,S=[],C=new Set;for(let e=0;e<o;e++){let a;a=y?Ib({...await this._drawAndSampleAsync({layers:p,views:t,viewports:n,onViewportActive:u,deviceRect:y,cullRect:b,effects:d,pass:`picking:${s}`}),deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceRect:y}):{pickedColor:null,pickedObjectIndex:-1};let l,m=this._getDepthLayers(a,p,c);if(m.length>0){let{pickedColors:e}=await this._drawAndSampleAsync({layers:m,views:t,viewports:n,onViewportActive:u,deviceRect:{x:a.pickedX??h[0],y:a.pickedY??h[1],width:1,height:1},cullRect:b,effects:d,pass:`picking:${s}:z`},!0);e[3]&&(l=e[0])}a.pickedLayer&&e+1<o&&(C.add(a.pickedLayer),a.pickedLayer.disablePickingIndex(a.pickedObjectIndex)),x=Vb({pickInfo:a,lastPickedInfo:this.lastPickedInfo,mode:s,layers:p,viewports:n,x:r,y:i,z:l,pixelRatio:f});for(let e of x.values())e.layer&&S.push(e);if(!a.pickedColor)break}for(let e of C)e.restorePickingColors();return{result:S,emptyInfo:x.get(null)}}_pickClosestObject({layers:e,views:t,viewports:n,x:r,y:i,radius:a=0,depth:o=1,mode:s=`query`,unproject3D:c,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=l.cssToDeviceRatio(),p=this._getPickable(e);if(!p||n.length===0)return{result:[],emptyInfo:Bb({viewports:n,x:r,y:i,pixelRatio:f})};this._resizeBuffer(l);let m=l.cssToDevicePixels([r,i],!0),h=[m.x+Math.floor(m.width/2),m.y+Math.floor(m.height/2)],g=Math.round(a*f),{width:_,height:v}=this.pickingFBO,y=this._getPickingRect({deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceWidth:_,deviceHeight:v}),b={x:r-a,y:i-a,width:a*2+1,height:a*2+1},x,S=[],C=new Set;for(let e=0;e<o;e++){let a;a=y?Ib({...this._drawAndSample({layers:p,views:t,viewports:n,onViewportActive:u,deviceRect:y,cullRect:b,effects:d,pass:`picking:${s}`}),deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceRect:y}):{pickedColor:null,pickedObjectIndex:-1};let l,m=this._getDepthLayers(a,p,c);if(m.length>0){let{pickedColors:e}=this._drawAndSample({layers:m,views:t,viewports:n,onViewportActive:u,deviceRect:{x:a.pickedX??h[0],y:a.pickedY??h[1],width:1,height:1},cullRect:b,effects:d,pass:`picking:${s}:z`},!0);e[3]&&(l=e[0])}a.pickedLayer&&e+1<o&&(C.add(a.pickedLayer),a.pickedLayer.disablePickingIndex(a.pickedObjectIndex)),x=Vb({pickInfo:a,lastPickedInfo:this.lastPickedInfo,mode:s,layers:p,viewports:n,x:r,y:i,z:l,pixelRatio:f});for(let e of x.values())e.layer&&S.push(e);if(!a.pickedColor)break}for(let e of C)e.restorePickingColors();return{result:S,emptyInfo:x.get(null)}}async _pickVisibleObjectsAsync({layers:e,views:t,viewports:n,x:r,y:i,width:a=1,height:o=1,mode:s=`query`,maxObjects:c=null,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=this._getPickable(e);if(!f||n.length===0)return[];this._resizeBuffer(l);let p=l.cssToDeviceRatio(),m=l.cssToDevicePixels([r,i],!0),h=m.x,g=m.y+m.height,_=l.cssToDevicePixels([r+a,i+o],!0),v=_.x+_.width,y=_.y,b={x:h,y,width:v-h,height:g-y},x=Lb(await this._drawAndSampleAsync({layers:f,views:t,viewports:n,onViewportActive:u,deviceRect:b,cullRect:{x:r,y:i,width:a,height:o},effects:d,pass:`picking:${s}`})),S=new Map,C=[],w=Number.isFinite(c);for(let e=0;e<x.length&&!(w&&C.length>=c);e++){let t=x[e],n={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:i,pixelRatio:p};n=Hb({layer:t.pickedLayer,info:n,mode:s});let a=n.layer.id;S.has(a)||S.set(a,new Set);let o=S.get(a),c=n.object??n.index;o.has(c)||(o.add(c),C.push(n))}return C}_pickVisibleObjects({layers:e,views:t,viewports:n,x:r,y:i,width:a=1,height:o=1,mode:s=`query`,maxObjects:c=null,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=this._getPickable(e);if(!f||n.length===0)return[];this._resizeBuffer(l);let p=l.cssToDeviceRatio(),m=l.cssToDevicePixels([r,i],!0),h=m.x,g=m.y+m.height,_=l.cssToDevicePixels([r+a,i+o],!0),v=_.x+_.width,y=_.y,b={x:h,y,width:v-h,height:g-y},x=Lb(this._drawAndSample({layers:f,views:t,viewports:n,onViewportActive:u,deviceRect:b,cullRect:{x:r,y:i,width:a,height:o},effects:d,pass:`picking:${s}`})),S=new Map,C=[],w=Number.isFinite(c);for(let e=0;e<x.length&&!(w&&C.length>=c);e++){let t=x[e],n={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:i,pixelRatio:p};n=Hb({layer:t.pickedLayer,info:n,mode:s});let a=n.layer.id;S.has(a)||S.set(a,new Set);let o=S.get(a),c=n.object??n.index;o.has(c)||(o.add(c),C.push(n))}return C}async _drawAndSampleAsync({layers:e,views:t,viewports:n,onViewportActive:r,deviceRect:i,cullRect:a,effects:o,pass:s},c=!1){let l=c?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:t,viewports:n,onViewportActive:r,pickingFBO:l,deviceRect:i,cullRect:a,effects:o,pass:s,pickZ:c,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(u.preRenderStats[e.id]=e.preRender(u));let{decodePickingColor:d,stats:f}=this.pickLayersPass.render(u);this._updateStats(f);let{x:p,y:m,width:h,height:g}=i,_=l.colorAttachments[0]?.texture;if(!_)throw Error(`Picking framebuffer color attachment is missing`);let v=await this._readTextureDataAsync(_,{x:p,y:m,width:h,height:g},c?Float32Array:Uint8Array);if(!c){let e=!1;for(let t=3;t<v.length;t+=4)if(v[t]!==0){e=!0;break}!e&&v.length>0&&F.warn(`Async pick readback returned only zero alpha values`,{deviceRect:i,bytes:Array.from(v.subarray(0,Math.min(v.length,16)))})()}return{pickedColors:v,decodePickingColor:d}}async _readTextureDataAsync(e,t,n){let{width:r,height:i}=t,a=e.computeMemoryLayout(t),o=this.device.createBuffer({byteLength:a.byteLength,usage:f.COPY_DST|f.MAP_READ});try{e.readBuffer(t,o);let s=await o.readAsync(0,a.byteLength),c=n.BYTES_PER_ELEMENT;if(a.bytesPerRow%c!==0)throw Error(`Texture readback row stride ${a.bytesPerRow} is not aligned to ${c}-byte elements.`);let l=new n(s.buffer,s.byteOffset,a.byteLength/c),u=r*4,d=a.bytesPerRow/c;if(d<u)throw Error(`Texture readback row stride ${d} is smaller than packed row length ${u}.`);let f=new n(r*i*4);for(let e=0;e<i;e++){let t=e*d;f.set(l.subarray(t,t+u),e*u)}return f}finally{o.destroy()}}_drawAndSample({layers:e,views:t,viewports:n,onViewportActive:r,deviceRect:i,cullRect:a,effects:o,pass:s},c=!1){let l=c?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:t,viewports:n,onViewportActive:r,pickingFBO:l,deviceRect:i,cullRect:a,effects:o,pass:s,pickZ:c,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(u.preRenderStats[e.id]=e.preRender(u));let{decodePickingColor:d,stats:f}=this.pickLayersPass.render(u);this._updateStats(f);let{x:p,y:m,width:h,height:g}=i,_=new(c?Float32Array:Uint8Array)(h*g*4);return this.device.readPixelsToArrayWebGL(l,{sourceX:p,sourceY:m,sourceWidth:h,sourceHeight:g,target:_}),{pickedColors:_,decodePickingColor:d}}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:n}of e)t+=n;this.stats.get(`Layers picked`).addCount(t)}_getDepthLayers(e,t,n){if(!n||!this.depthFBO)return[];let{pickedLayer:r}=e,i=r?.state?.terrainDrawMode===`drape`;return r&&!i?[r]:t.filter(e=>e.props.operation.includes(`terrain`))}_getPickingRect({deviceX:e,deviceY:t,deviceRadius:n,deviceWidth:r,deviceHeight:i}){let a=Math.max(0,e-n),o=Math.max(0,t-n),s=Math.min(r,e+n+1)-a,c=Math.min(i,t+n+1)-o;return s<=0||c<=0?null:{x:a,y:o,width:s,height:c}}}})),qb,Jb,Yb,Xb,Zb=e((()=>{Up(),xy(),qb={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},Jb=`top-left`,Yb=`root`,Xb=class{constructor({deck:e,parentElement:t}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=e,t?.classList.add(`deck-widget-container`),this.parentElement=t}getWidgets(){return this.resolvedWidgets}setProps(e){if(e.widgets&&!Y(e.widgets,this.widgets,1)){let t=e.widgets.filter(Boolean);this._setWidgets(t)}}finalize(){for(let e of this.getWidgets())this._removeWidget(e);this.defaultWidgets.length=0,this.resolvedWidgets.length=0;for(let e in this.containers)this.containers[e].remove()}addDefault(e){this.defaultWidgets.find(t=>t.id===e.id)||(this._addWidget(e),this.defaultWidgets.push(e),this._setWidgets(this.widgets))}onRedraw({viewports:e,layers:t}){let n=e.reduce((e,t)=>(e[t.id]=t,e),{});for(let r of this.getWidgets()){let{viewId:i}=r;if(i){let e=n[i];e&&(r.onViewportChange&&r.onViewportChange(e),r.onRedraw?.({viewports:[e],layers:t}))}else{if(r.onViewportChange)for(let t of e)r.onViewportChange(t);r.onRedraw?.({viewports:e,layers:t})}}this.lastViewports=n,this._updateContainers()}onHover(e,t){for(let n of this.getWidgets()){let{viewId:r}=n;(!r||r===e.viewport?.id)&&n.onHover?.(e,t)}}onEvent(e,t){let n=Vp[t.type];if(n)for(let r of this.getWidgets()){let{viewId:i}=r;(!i||i===e.viewport?.id)&&r[n]?.(e,t)}}_setWidgets(e){let t={};for(let e of this.resolvedWidgets)t[e.id]=e;this.resolvedWidgets.length=0;for(let e of this.defaultWidgets)t[e.id]=null,this.resolvedWidgets.push(e);for(let n of e){let e=t[n.id];e?e.viewId!==n.viewId||e.placement!==n.placement?(this._removeWidget(e),this._addWidget(n)):n!==e&&(e.setProps(n.props),n=e):this._addWidget(n),t[n.id]=null,this.resolvedWidgets.push(n)}for(let e in t){let n=t[e];n&&this._removeWidget(n)}this.widgets=e}_addWidget(e){let{viewId:t=null,placement:n=Jb}=e,r=e.props._container??t;e.widgetManager=this,e.deck=this.deck,e.rootElement=e._onAdd({deck:this.deck,viewId:t}),e.rootElement&&this._getContainer(r,n).append(e.rootElement),e.updateHTML()}_removeWidget(e){e.onRemove?.(),e.rootElement&&e.rootElement.remove(),e.rootElement=void 0,e.deck=void 0,e.widgetManager=void 0}_getContainer(e,t){if(e&&typeof e!=`string`)return e;let n=e||Yb,r=this.containers[n];r||(r=document.createElement(`div`),r.style.pointerEvents=`none`,r.style.position=`absolute`,r.style.overflow=`hidden`,this.parentElement?.append(r),this.containers[n]=r);let i=r.querySelector(`.${t}`);return i||(i=globalThis.document.createElement(`div`),i.className=t,i.style.position=`absolute`,i.style.zIndex=`2`,Object.assign(i.style,qb[t]),r.append(i)),i}_updateContainers(){let e=this.deck.width,t=this.deck.height;for(let n in this.containers){let r=this.lastViewports[n]||null,i=n===Yb||r,a=this.containers[n];i?(a.style.display=`block`,a.style.left=`${r?r.x:0}px`,a.style.top=`${r?r.y:0}px`,a.style.width=`${r?r.width:e}px`,a.style.height=`${r?r.height:t}px`):a.style.display=`none`}}}}));function Qb(e,t){t&&Object.entries(t).map(([t,n])=>{t.startsWith(`--`)?e.style.setProperty(t,n):e.style[t]=n})}function $b(e,t){t&&Object.keys(t).map(t=>{t.startsWith(`--`)?e.style.removeProperty(t):e.style[t]=``})}var ex=e((()=>{})),tx,nx=e((()=>{xy(),ex(),tx=class{constructor(e){this.viewId=null,this.props={...this.constructor.defaultProps,...e},this.id=this.props.id}setProps(e){let t=this.props,n=this.rootElement;n&&t.className!==e.className&&(t.className&&n.classList.remove(t.className),e.className&&n.classList.add(e.className)),n&&!Y(t.style,e.style,1)&&($b(n,t.style),Qb(n,e.style)),Object.assign(this.props,e),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(e=>e.id)??[]}getViewState(e){return this.deck?.viewManager?.getViewState(e)||{}}setViewState(e,t){this.deck?._onViewStateChange({viewId:e,viewState:t,interactionState:{}})}onCreateRootElement(){let e=[`deck-widget`,this.className,this.props.className],t=document.createElement(`div`);return e.filter(e=>typeof e==`string`&&e.length>0).forEach(e=>t.classList.add(e)),Qb(t,this.props.style),t}_onAdd(e){return this.onAdd(e)??this.onCreateRootElement()}onAdd(e){}onRemove(){}onViewportChange(e){}onRedraw(e){}onHover(e,t){}onClick(e,t){}onDrag(e,t){}onDragStart(e,t){}onDragEnd(e,t){}},tx.defaultProps={id:`widget`,style:{},_container:null,className:``}})),rx,ix,ax=e((()=>{nx(),rx={zIndex:`1`,position:`absolute`,pointerEvents:`none`,color:`#a0a7b4`,backgroundColor:`#29323c`,padding:`10px`,top:`0`,left:`0`,display:`none`},ix=class extends tx{constructor(e={}){super(e),this.id=`default-tooltip`,this.placement=`fill`,this.className=`deck-tooltip`,this.isVisible=!1,this.setProps(e)}onCreateRootElement(){let e=document.createElement(`div`);return e.className=this.className,Object.assign(e.style,rx),e}onRenderHTML(e){}onViewportChange(e){this.isVisible&&e.id===this.lastViewport?.id&&!e.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=e}onHover(e){let{deck:t}=this,n=t&&t.props.getTooltip;if(!n)return;let r=n(e);this.setTooltip(r,e.x,e.y)}setTooltip(e,t,n){let r=this.rootElement;if(r){if(typeof e==`string`)r.innerText=e;else if(e)e.text&&(r.innerText=e.text),e.html&&(r.innerHTML=e.html),e.className&&(r.className=e.className);else{this.isVisible=!1,r.style.display=`none`;return}this.isVisible=!0,r.style.display=`block`,r.style.transform=`translate(${t}px, ${n}px)`,e&&typeof e==`object`&&`style`in e&&Object.assign(r.style,e.style)}}},ix.defaultProps={...tx.defaultProps}}));function ox(){}var sx,cx,lx,ux=e((()=>{by(),Cy(),Eb(),Ab(),Fb(),Kb(),Zb(),ax(),I(),xy(),og(),co(),O(),k(),Yv(),_(),Rp(),qy(),Up(),sx=({isDragging:e})=>e?`grabbing`:`grab`,cx={id:``,width:`100%`,height:`100%`,style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:`auto`,layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:`none`,eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:ox,onWebGLInitialized:ox,onResize:ox,onViewStateChange:ox,onInteractionStateChange:ox,onBeforeRender:ox,onAfterRender:ox,onLoad:ox,onError:e=>F.error(e.message,e.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:sx,getTooltip:null,debug:!1,drawPickingColors:!1},lx=class{constructor(e){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this._canvasContext=null,this._deviceResizeHandler=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new y({id:`deck.gl`}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw=`Initial render`,this._pickRequest={mode:`hover`,x:-1,y:-1,radius:0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=e=>{let{_pickRequest:t}=this;if(e.type===`pointerleave`)t.x=-1,t.y=-1,t.radius=0;else if(e.leftButton||e.rightButton)return;else{let n=e.offsetCenter;if(!n)return;t.x=n.x,t.y=n.y,t.radius=this.props.pickingRadius}this.layerManager&&(this.layerManager.context.mousePosition={x:t.x,y:t.y}),t.event=e},this._onEvent=e=>{let t=Vp[e.type],n=e.offsetCenter;if(!t||!n||!this.layerManager)return;let r=this.layerManager.getLayers(),i=this._getInternalPickingMode();if(i){if(i===`sync`){let t=e.type===`click`&&this._shouldUnproject3D(r)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(n.x,n.y,{unproject3D:!0},r))):this._getLastPointerDownPickingInfo(n.x,n.y,r);this._dispatchPickingEvent(t,e);return}(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(n.x,n.y,r))).then(t=>{this._dispatchPickingEvent(t,e)}).catch(e=>this.props.onError?.(e))}},this._onPointerDown=e=>{let t=e.offsetCenter;if(!t)return;let n=this._getInternalPickingMode();if(!n)return;let r=this.layerManager?.getLayers()||[],i=++this._pointerDownPickSequence;if(n===`sync`){let e=this._pickPointSync({x:t.x,y:t.y,radius:this.props.pickingRadius}),n=this._getFirstPickedInfo(e);this._lastPointerDownInfo=n,this._lastPointerDownInfoPromise=Promise.resolve(n);return}let a=this._pickPointAsync(this._getPointPickOptions(t.x,t.y,{},r)).then(e=>this._getFirstPickedInfo(e)).then(e=>(i===this._pointerDownPickSequence&&(this._lastPointerDownInfo=e),e)).catch(e=>{this.props.onError?.(e);let n=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(t.x,t.y,r):{};return i===this._pointerDownPickSequence&&(this._lastPointerDownInfo=n),n});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=a};let t=e;this.props={...cx,...e},e=this.props,e.viewState&&e.initialViewState&&F.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,e.device&&(this.device=e.device,this._setDeviceCanvasContext(e.device));let n=this.device;!n&&e.gl&&(e.gl instanceof WebGLRenderingContext&&F.error(`WebGL1 context not supported.`)(),n=x.attach(e.gl,{_cacheShaders:!0,_cachePipelines:!0,...this.props.deviceProps})),n||=this._createDevice(e),this.animationLoop=this._createAnimationLoop(n,e),this.setProps(t),e._typedArrayManagerProps&&ag.setOptions(e._typedArrayManagerProps),this.animationLoop.start()}finalize(){this._restoreDeviceResizeHandler(),this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,this.eventManager?.destroy(),this.eventManager=null,this.widgetManager?.finalize(),this.widgetManager=null,!this.props.canvas&&!this.props.device&&!this.props.gl&&this.canvas&&(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null),this._canvasContext=null}setProps(e){this.stats.get(`setProps Time`).timeStart(),`onLayerHover`in e&&F.removed(`onLayerHover`,`onHover`)(),`onLayerClick`in e&&F.removed(`onLayerClick`,`onClick`)(),e.initialViewState&&!Y(this.props.initialViewState,e.initialViewState,3)&&(this.viewState=e.initialViewState),Object.assign(this.props,e),this._validateInternalPickingMode(),this._setCanvasSize(this.props);let t=Object.create(this.props);if(Object.assign(t,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState()}),e.device&&e.device.id!==this.device?.id){let t=e.device.getDefaultCanvasContext();this.animationLoop?.stop(),this.canvas!==t.canvas&&(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),this._setDeviceCanvasContext(e.device),F.log(`recreating animation loop for new device! id=${e.device.id}`)(),this.animationLoop=this._createAnimationLoop(e.device,e),this.animationLoop.start()}this.animationLoop?.setProps(t),e.useDevicePixels!==void 0&&this._canvasContext?.setProps&&this._canvasContext.setProps({useDevicePixels:e.useDevicePixels}),this.layerManager&&(this.viewManager.setProps(t),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(t),this.effectManager.setProps(t),this.deckRenderer.setProps(t),this.deckPicker.setProps(t),this.widgetManager.setProps(t)),this.stats.get(`setProps Time`).timeEnd()}needsRedraw(e={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return`Deck._animate`;let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);let n=this.viewManager.needsRedraw(e),r=this.layerManager.needsRedraw(e),i=this.effectManager.needsRedraw(e),a=this.deckRenderer.needsRedraw(e);return t=t||n||r||i||a,t}redraw(e){if(!this.layerManager)return;let t=this.needsRedraw({clearRedrawFlags:!0});t=e||t,t&&(this.stats.get(`Redraw Count`).incrementCount(),this.props._customRender?this.props._customRender(t):this._drawLayers(t))}get isInitialized(){return this.viewManager!==null}getViews(){return X(this.viewManager),this.viewManager.views}getView(e){return X(this.viewManager),this.viewManager.getView(e)}getViewports(e){return X(this.viewManager),this.viewManager.getViewports(e)}getCanvas(){return this.canvas}async pickObjectAsync(e){let t=(await this._pickAsync(`pickObjectAsync`,`pickObject Time`,e)).result;return t.length?t[0]:null}async pickObjectsAsync(e){return await this._pickAsync(`pickObjectsAsync`,`pickObjects Time`,e)}pickObject(e){let t=this._pick(`pickObject`,`pickObject Time`,e).result;return t.length?t[0]:null}pickMultipleObjects(e){return e.depth=e.depth||10,this._pick(`pickObject`,`pickMultipleObjects Time`,e).result}pickObjects(e){return this._pick(`pickObjects`,`pickObjects Time`,e)}_pickPositionForController(e,t){return this._getInternalPickingMode()===`sync`?this.pickObject({x:e,y:t,radius:0,unproject3D:!0}):null}_addResources(e,t=!1){for(let n in e)this.layerManager.resourceManager.add({resourceId:n,data:e[n],forceUpdate:t})}_removeResources(e){for(let t of e)this.layerManager.resourceManager.remove(t)}_addDefaultEffect(e){this.effectManager.addDefaultEffect(e)}_addDefaultShaderModule(e){this.layerManager.addDefaultShaderModule(e)}_removeDefaultShaderModule(e){this.layerManager?.removeDefaultShaderModule(e)}_resolveInternalPickingMode(){let{pickAsync:e}=this.props,t=this.device?.type||this.props.deviceProps?.type;if(e===`auto`)return t===`webgpu`?`async`:`sync`;if(e===`sync`&&t===`webgpu`)throw Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return e}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(e){return this.props.onError?.(e),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:e,emptyInfo:t}){return e[0]||t}_shouldUnproject3D(e=this.layerManager?.getLayers()||[]){return e.some(e=>e.props.pickable===`3d`)}_getPointPickOptions(e,t,n={},r=this.layerManager?.getLayers()||[]){return{x:e,y:t,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(r),...n}}_pickPointSync(e){return this._pick(`pickObject`,`pickObject Time`,e)}_pickPointAsync(e){return this._pickAsync(`pickObjectAsync`,`pickObject Time`,e)}_getLastPointerDownPickingInfo(e,t,n=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:e,y:t,layers:n,viewports:this.getViewports({x:e,y:t})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:e,emptyInfo:t},n){if(!this.widgetManager)return;this.cursorState.isHovering=e.length>0;let r=t,i=!1;for(let t of e)r=t,i=t.layer?.onHover(t,n)||i;i||(this.props.onHover?.(r,n),this.widgetManager.onHover(r,n))}_dispatchPickingEvent(e,t){if(!this.layerManager||!this.widgetManager)return;let n=Vp[t.type];if(!n)return;let{layer:r}=e,i=r&&(r[n]||r.props[n]),a=this.props[n],o=!1;i&&(o=i.call(r,e,t)),o||(a?.(e,t),this.widgetManager.onEvent(e,t))}_pickAsync(e,t,n){X(this.deckPicker);let{stats:r}=this;r.get(`Pick Count`).incrementCount(),r.get(t).timeStart();let i=this.deckPicker[e]({layers:this.layerManager.getLayers(n),views:this.viewManager.getViews(),viewports:this.getViewports(n),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...n,canvasContext:this._canvasContext||void 0});return r.get(t).timeEnd(),i}_pick(e,t,n){X(this.deckPicker);let{stats:r}=this;r.get(`Pick Count`).incrementCount(),r.get(t).timeStart();let i=this.deckPicker[e]({layers:this.layerManager.getLayers(n),views:this.viewManager.getViews(),viewports:this.getViewports(n),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...n,canvasContext:this._canvasContext||void 0});return r.get(t).timeEnd(),i}_createCanvas(e){let t=e.canvas;return typeof t==`string`&&(t=document.getElementById(t),X(t)),t||(t=document.createElement(`canvas`),t.id=e.id||`deckgl-overlay`,e.width&&typeof e.width==`number`&&(t.width=e.width),e.height&&typeof e.height==`number`&&(t.height=e.height),(e.parent||document.body).appendChild(t)),Object.assign(t.style,e.style),t}_setCanvasContext(e){this._canvasContext=e,`style`in e.canvas&&(this.canvas=e.canvas)}_setDeviceCanvasContext(e,t={}){let n=e.getDefaultCanvasContext();this._setCanvasContext(n),this._setDeviceResizeHandler(e,t)}_setDeviceResizeHandler(e,t={}){let n=!!t.syncDrawingBuffer;if(this._deviceResizeHandler?.device===e){this._deviceResizeHandler.syncDrawingBuffer=n;return}this._restoreDeviceResizeHandler();let r=e=>{e===this._canvasContext&&this._canvasContext&&this._onCanvasContextResize(this._canvasContext,{syncDrawingBuffer:this._deviceResizeHandler?.syncDrawingBuffer})};e.props.onResize=r,this._deviceResizeHandler={device:e,onResize:r,syncDrawingBuffer:n}}_restoreDeviceResizeHandler(){let e=this._deviceResizeHandler;e&&e.device.props?.onResize===e.onResize&&(e.device.props.onResize=ox),this._deviceResizeHandler=null}_setCanvasSize(e){if(!this.canvas)return;let{width:t,height:n}=e;if(t||t===0){let e=Number.isFinite(t)?`${t}px`:t;this.canvas.style.width=e}if(n||n===0){let t=Number.isFinite(n)?`${n}px`:n;this.canvas.style.position=e.style?.position||`absolute`,this.canvas.style.height=t}}_updateCanvasSize(e=this._canvasContext){let{canvas:t}=this,[n,r]=e?e.getCSSSize():[t?.clientWidth??t?.width??0,t?.clientHeight??t?.height??0];(n!==this.width||r!==this.height)&&(this.width=n,this.height=r,this.viewManager?.setProps({width:n,height:r}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:n,height:r},e||void 0))}_onCanvasContextResize(e,t={}){if(t.syncDrawingBuffer){let{width:t,height:n}=e.canvas;e.setDrawingBufferSize(t,n)}this._needsRedraw=`Canvas resized`,this._updateCanvasSize(e)}_createAnimationLoop(e,t){let{gl:n,onError:r}=t;return new C_({device:e,autoResizeDrawingBuffer:!n,autoResizeViewport:!1,onInitialize:e=>this._setDevice(e.device),onRender:this._onRenderFrame.bind(this),onError:r})}_createDevice(e){let t=this.props.deviceProps?.createCanvasContext,n=typeof t==`object`?t:void 0,r={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps};r.adapters.includes(x)||r.adapters.push(x);let i={alphaMode:this.props.deviceProps?.type===`webgpu`?`premultiplied`:void 0};return m.createDevice({_reuseDevices:!0,type:`webgl`,...r,createCanvasContext:{...i,...n,canvas:this._createCanvas(e),useDevicePixels:this.props.useDevicePixels,autoResize:!0}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){let{views:e}=this.props,t=Array.isArray(e)?e:e?[e]:[new Tb({id:`default-view`})];return t.length&&this.props.controller&&(t[0].props.controller=this.props.controller),t}_onContextLost(){let{onError:e}=this.props;this.animationLoop&&e&&e(Error(`WebGL context is lost`))}_pickAndCallback(){let{_pickRequest:e}=this;if(e.event){let t=e.event,n=this.layerManager?.getLayers()||[],r=this._getPointPickOptions(e.x,e.y,{radius:e.radius,mode:e.mode},n),i=this._getInternalPickingMode(),a=++this._hoverPickSequence;if(e.event=null,!i)return;if(i===`sync`){this._applyHoverCallbacks(this._pickPointSync(r),t);return}this._pickPointAsync(r).then(({result:e,emptyInfo:n})=>{a===this._hoverPickSequence&&this._applyHoverCallbacks({result:e,emptyInfo:n},t)}).catch(e=>this.props.onError?.(e))}}_updateCursor(){let e=this.props.parent||this.canvas;e&&(e.style.cursor=this.props.getCursor(this.cursorState))}_setDevice(e){if(this.device=e,this._validateInternalPickingMode(),!this.animationLoop)return;this._setDeviceCanvasContext(e,{syncDrawingBuffer:!!(this.props.gl&&this.props.device!==e)}),this.canvas&&!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild),this.device.type===`webgl`&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),this.device.type===`webgl`&&this.props.onWebGLInitialized(this.device.gl);let t=new g_;t.play(),this.animationLoop.attachTimeline(t);let n=this.props.parent?.querySelector(`.deck-events-root`)||this.canvas;this.eventManager=new Ip(n,{touchAction:this.props.touchAction,recognizers:Object.keys(Hp).map(e=>{let[t,n,r,i]=Hp[e],a=this.props.eventRecognizerOptions?.[e];return{recognizer:new t({...n,...a,event:e}),recognizeWith:r,requireFailure:i}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}});for(let e in Vp)this.eventManager.on(e,this._onEvent);this.viewManager=new Sy({timeline:t,eventManager:this.eventManager,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});let r=this.viewManager.getViewports()[0];this.layerManager=new yy(this.device,{deck:this,stats:this.stats,viewport:r,timeline:t}),this.effectManager=new kb({deck:this,device:this.device}),this.deckRenderer=new Pb(this.device,{stats:this.stats}),this.deckPicker=new Gb(this.device,{stats:this.stats});let i=this.props.parent?.querySelector(`.deck-widgets-root`)||this.canvas?.parentElement;this.widgetManager=new Xb({deck:this,parentElement:i}),this.widgetManager.addDefault(new ix),this.setProps({}),this._updateCanvasSize(this._canvasContext),this.props.onLoad()}_drawLayers(e,t){let{device:n,gl:r}=this.layerManager.context;this.props.onBeforeRender({device:n,gl:r});let i={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:`screen`,effects:this.effectManager.getEffects(),...t};this.deckRenderer?.renderLayers(i),i.pass===`screen`&&this.widgetManager.onRedraw({viewports:i.viewports,layers:i.layers}),this.props.onAfterRender({device:n,gl:r})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60==0&&(this._getMetrics(),this.stats.reset(),F.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(e){let t=this.props.onViewStateChange(e)||e.viewState;this.viewState&&(this.viewState={...this.viewState,[e.viewId]:t},this.props.viewState||this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(e){this.cursorState.isDragging=e.isDragging||!1,this.props.onInteractionStateChange(e)}_getFrameStats(){let{stats:e}=this;e.get(`frameRate`).timeEnd(),e.get(`frameRate`).timeStart();let t=this.animationLoop.stats;e.get(`GPU Time`).addTime(t.get(`GPU Time`).lastTiming),e.get(`CPU Time`).addTime(t.get(`CPU Time`).lastTiming)}_getMetrics(){let{metrics:e,stats:t}=this;e.fps=t.get(`frameRate`).getHz(),e.setPropsTime=t.get(`setProps Time`).time,e.updateAttributesTime=t.get(`Update Attributes`).time,e.framesRedrawn=t.get(`Redraw Count`).count,e.pickTime=t.get(`pickObject Time`).time+t.get(`pickMultipleObjects Time`).time+t.get(`pickObjects Time`).time,e.pickCount=t.get(`Pick Count`).count,e.layersCount=this.layerManager?.layers.length??0,e.drawLayersCount=t.get(`Layers rendered`).lastSampleCount,e.pickLayersCount=t.get(`Layers picked`).lastSampleCount,e.updateAttributesCount=t.get(`Layers updated`).count,e.updateAttributesCount=t.get(`Attributes updated`).count,e.gpuTime=t.get(`GPU Time`).time,e.cpuTime=t.get(`CPU Time`).time,e.gpuTimePerFrame=t.get(`GPU Time`).getAverageTime(),e.cpuTimePerFrame=t.get(`CPU Time`).getAverageTime();let n=m.stats.get(`GPU Time and Memory`);e.bufferMemory=n.get(`Buffer Memory`).count,e.textureMemory=n.get(`Texture Memory`).count,e.renderbufferMemory=n.get(`Renderbuffer Memory`).count,e.gpuMemory=n.get(`GPU Memory`).count}},lx.defaultProps=cx,lx.VERSION=so}));function dx(e){switch(e){case`float64`:return Float64Array;case`uint8`:case`unorm8`:return Uint8ClampedArray;default:return E(e)}}function fx(e,t,n){if(t.size>4)return null;let r=n===`webgpu`&&t.type===`uint8`?`unorm8`:t.type;return{attribute:e,format:t.size>1?`${r}x${t.size}`:t.type,byteOffset:t.offset||0}}function px(e){return e.stride||e.size*e.bytesPerElement}function mx(e,t){return e.type===t.type&&e.size===t.size&&px(e)===px(t)&&(e.offset||0)===(t.offset||0)}var hx,gx=e((()=>{O(),hx=h.getDataType.bind(h)}));function _x(e,t){t.offset&&F.removed(`shaderAttribute.offset`,`vertexOffset, elementOffset`)();let n=px(e),r=t.vertexOffset===void 0?e.vertexOffset||0:t.vertexOffset,i=t.elementOffset||0,a=r*n+i*e.bytesPerElement+(e.offset||0);return{...t,offset:a,stride:n}}function vx(e,t){let n=_x(e,t);return{high:n,low:{...n,offset:n.offset+e.size*4}}}var yx,bx=e((()=>{O(),gx(),og(),_g(),I(),yx=class{constructor(e,t,n){this._buffer=null,this.device=e,this.id=t.id||``,this.size=t.size||1;let r=t.logicalType||t.type,i=r===`float64`,{defaultValue:a}=t;a=Number.isFinite(a)?[a]:a||Array(this.size).fill(0);let o;o=i?`float32`:!r&&t.isIndexed?`uint32`:r||`float32`;let s=dx(r||o);this.doublePrecision=i,i&&t.fp64===!1&&(s=Float32Array),this.value=null,this.settings={...t,defaultType:s,defaultValue:a,logicalType:r,type:o,normalized:o.includes(`norm`),size:this.size,bytesPerElement:s.BYTES_PER_ELEMENT},this.state={...n,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){let e=this.getAccessor();return e.vertexOffset?e.vertexOffset*px(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}delete(){this._buffer&&=(this._buffer.delete(),null),ag.release(this.state.allocatedValue)}getBuffer(){return this.state.constant?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,t=null){let n={};if(this.state.constant){let r=this.value;if(t){let i=_x(this.getAccessor(),t),a=i.offset/r.BYTES_PER_ELEMENT,o=i.size||this.size;n[e]=r.subarray(a,a+o)}else n[e]=r}else n[e]=this.getBuffer();return this.doublePrecision&&(this.value instanceof Float64Array?n[`${e}64Low`]=n[e]:n[`${e}64Low`]=new Float32Array(this.size)),n}_getBufferLayout(e=this.id,t=null){let n=this.getAccessor(),r=[],i={name:this.id,byteStride:px(n)};if(this.doublePrecision){let i=vx(n,t||{});r.push(fx(e,{...n,...i.high},this.device.type),fx(`${e}64Low`,{...n,...i.low},this.device.type))}else if(t){let i=_x(n,t);r.push(fx(e,{...n,...i},this.device.type))}else r.push(fx(e,n,this.device.type));return i.attributes=r.filter(Boolean),i}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){let t=Array.from(this.value);e=[t,t]}else{let{value:t,numInstances:n,size:r}=this,i=n*r;if(t&&i&&t.length>=i){let n=Array(r).fill(1/0),a=Array(r).fill(-1/0);for(let e=0;e<i;)for(let i=0;i<r;i++){let r=t[e++];r<n[i]&&(n[i]=r),r>a[i]&&(a[i]=r)}e=[n,a]}}return this.state.bounds=e,e}setData(e){let{state:t}=this,n;n=ArrayBuffer.isView(e)?{value:e}:e instanceof f?{buffer:e}:e;let r={...this.settings,...n};if(ArrayBuffer.isView(n.value)){if(!n.type)if(this.doublePrecision&&n.value instanceof Float64Array)r.type=`float32`;else{let e=hx(n.value);r.type=r.normalized?e.replace(`int`,`norm`):e}r.bytesPerElement=n.value.BYTES_PER_ELEMENT,r.stride=px(r)}if(t.bounds=null,n.constant){let e=n.value;if(e=this._normalizeValue(e,[],0),this.settings.normalized&&(e=this.normalizeConstant(e)),!(!t.constant||!this._areValuesEqual(e,this.value)))return!1;t.externalBuffer=null,t.constant=!0,this.value=ArrayBuffer.isView(e)?e:new Float32Array(e)}else if(n.buffer)t.externalBuffer=n.buffer,t.constant=!1,this.value=n.value||null;else if(n.value){this._checkExternalBuffer(n);let e=n.value;t.externalBuffer=null,t.constant=!1,this.value=e;let{buffer:i}=this,a=px(r),o=(r.vertexOffset||0)*a;if(this.doublePrecision&&e instanceof Float64Array&&(e=pg(e,r)),this.settings.isIndexed){let t=this.settings.defaultType;e.constructor!==t&&(e=new t(e))}let s=e.byteLength+o+a*2;(!i||i.byteLength<s)&&(i=this._createBuffer(s)),i.write(e,o)}return this.setAccessor(r),!0}updateSubBuffer(e={}){this.state.bounds=null;let t=this.value,{startOffset:n=0,endOffset:r}=e;this.buffer.write(this.doublePrecision&&t instanceof Float64Array?pg(t,{size:this.size,startIndex:n,endIndex:r}):t.subarray(n,r),n*t.BYTES_PER_ELEMENT+this.byteOffset)}allocate(e,t=!1){let{state:n}=this,r=n.allocatedValue,i=ag.allocate(r,e+1,{size:this.size,type:this.settings.defaultType,copy:t});this.value=i;let{byteOffset:a}=this,{buffer:o}=this;return(!o||o.byteLength<i.byteLength+a)&&(o=this._createBuffer(i.byteLength+a),t&&r&&o.write(r instanceof Float64Array?pg(r,this):r,a)),n.allocatedValue=i,n.constant=!1,n.externalBuffer=null,this.setAccessor(this.settings),!0}_checkExternalBuffer(e){let{value:t}=e;if(!ArrayBuffer.isView(t))throw Error(`Attribute ${this.id} value is not TypedArray`);let n=this.settings.defaultType,r=!1;if(this.doublePrecision&&(r=t.BYTES_PER_ELEMENT<4),r)throw Error(`Attribute ${this.id} does not support ${t.constructor.name}`);!(t instanceof n)&&this.settings.normalized&&!(`normalized`in e)&&F.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case`snorm8`:return new Float32Array(e).map(e=>(e+128)/255*2-1);case`snorm16`:return new Float32Array(e).map(e=>(e+32768)/65535*2-1);case`unorm8`:return new Float32Array(e).map(e=>e/255);case`unorm16`:return new Float32Array(e).map(e=>e/65535);default:return e}}_normalizeValue(e,t,n){let{defaultValue:r,size:i}=this.settings;if(Number.isFinite(e))return t[n]=e,t;if(!e){let e=i;for(;--e>=0;)t[n+e]=r[e];return t}switch(i){case 4:t[n+3]=Number.isFinite(e[3])?e[3]:r[3];case 3:t[n+2]=Number.isFinite(e[2])?e[2]:r[2];case 2:t[n+1]=Number.isFinite(e[1])?e[1]:r[1];case 1:t[n+0]=Number.isFinite(e[0])?e[0]:r[0];break;default:let a=i;for(;--a>=0;)t[n+a]=Number.isFinite(e[a])?e[a]:r[a]}return t}_areValuesEqual(e,t){if(!e||!t)return!1;let{size:n}=this;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}_createBuffer(e){this._buffer&&this._buffer.destroy();let{isIndexed:t,type:n}=this.settings;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:(t?f.INDEX:f.VERTEX)|f.COPY_DST,indexType:t?n:void 0,byteLength:e}),this._buffer}}}));function xx(e,t=0,n=1/0){let r=wx,i={index:-1,data:e,target:[]};return e?typeof e[Symbol.iterator]==`function`?r=e:e.length>0&&(Tx.length=e.length,r=Tx):r=wx,(t>0||Number.isFinite(n))&&(r=(Array.isArray(r)?r:Array.from(r)).slice(t,n),i.index=t-1),{iterable:r,objectInfo:i}}function Sx(e){return e&&e[Symbol.asyncIterator]}function Cx(e,t){let{size:n,stride:r,offset:i,startIndices:a,nested:o}=t,s=e.BYTES_PER_ELEMENT,c=r?r/s:n,l=i?i/s:0,u=Math.floor((e.length-l)/c);return(t,{index:r,target:i})=>{if(!a){let t=r*c+l;for(let r=0;r<n;r++)i[r]=e[t+r];return i}let s=a[r],d=a[r+1]||u,f;if(o){f=Array(d-s);for(let t=s;t<d;t++){let r=t*c+l;i=Array(n);for(let t=0;t<n;t++)i[t]=e[r+t];f[t-s]=i}}else if(c===n)f=e.subarray(s*n+l,d*n+l);else{f=new e.constructor((d-s)*n);let t=0;for(let r=s;r<d;r++){let i=r*c+l;for(let r=0;r<n;r++)f[t++]=e[i+r]}}return f}}var wx,Tx,Ex=e((()=>{wx=[],Tx=[]}));function Dx(e,t){if(e===kx||(t[0]<0&&(t[0]=0),t[0]>=t[1]))return e;let n=[],r=e.length,i=0;for(let a=0;a<r;a++){let r=e[a];r[1]<t[0]?(n.push(r),i=a+1):r[0]>t[1]?n.push(r):t=[Math.min(r[0],t[0]),Math.max(r[1],t[1])]}return n.splice(i,0,t),n}var Ox,kx,Ax=e((()=>{Ox=[],kx=[[0,1/0]]}));function jx(e,t){if(!e)return null;Number.isFinite(e)&&(e={type:`interpolation`,duration:e});let n=e.type||`interpolation`;return{...Mx[n],...t,...e,type:n}}var Mx,Nx=e((()=>{Mx={interpolation:{duration:0,easing:e=>e},spring:{stiffness:.05,damping:.5}}})),Px,Fx=e((()=>{bx(),qy(),Ex(),fy(),Ax(),gx(),Nx(),Px=class extends yx{constructor(e,t){super(e,t,{startIndices:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:kx}),this.constant=!1,this.settings.update=t.update||(t.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){let t=this.state.needsRedraw;return this.state.needsRedraw=t&&!e,t}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var t;(t=this.state).layoutChanged||(t.layoutChanged=!mx(e,this.getAccessor())),super.setAccessor(e)}getUpdateTriggers(){let{accessor:e}=this.settings;return[this.id].concat(typeof e!=`function`&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;let{accessor:t}=this.settings,n=this.settings.transition;return jx(Array.isArray(t)?e[t.find(t=>e[t])]:e[t],n)}setNeedsUpdate(e=this.id,t){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),t){let{startRow:e=0,endRow:n=1/0}=t;this.state.updateRanges=Dx(this.state.updateRanges,[e,n])}else this.state.updateRanges=kx}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=Ox}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){let{state:t,settings:n}=this;return n.noAlloc?!1:n.update?(super.allocate(e,t.updateRanges!==kx),!0):!1}updateBuffer({numInstances:e,data:t,props:n,context:r}){if(!this.needsUpdate())return!1;let{state:{updateRanges:i},settings:{update:a,noAlloc:o}}=this,s=!0;if(a){for(let[o,s]of i)a.call(r,this,{data:t,startRow:o,endRow:s,props:n,numInstances:e});if(this.value)if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset)this.constant?this.setConstantValue(r,this.value):this.setData({value:this.value,constant:this.constant}),this.constant=!1;else for(let[t,n]of i){let r=Number.isFinite(t)?this.getVertexOffset(t):0,i=Number.isFinite(n)?this.getVertexOffset(n):o||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:r,endOffset:i})}this._checkAttributeArray()}else s=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),s}setConstantValue(e,t){if(t===void 0||typeof t==`function`)return!1;let n=this.settings.transform&&e?this.settings.transform.call(e,t):t;return this.device.type===`webgpu`?this.setConstantBufferValue(n,this.numInstances):(this.setData({constant:!0,value:n})&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0)}setConstantBufferValue(e,t){let n=this.settings.defaultType,r=this._normalizeValue(e,new n(this.size),0);if(this._hasConstantBufferValue(r,t))return this.constant=!1,this.clearNeedsUpdate(),!1;let i=new n(Math.max(t,1)*this.size);for(let e=0;e<i.length;e+=this.size)i.set(r,e);let a=this.setData({value:i});return this.constant=!1,this.clearNeedsUpdate(),a&&this.setNeedsRedraw(),a}_hasConstantBufferValue(e,t){let n=this.value,r=Math.max(t,1)*this.size;if(!ArrayBuffer.isView(n)||n.length!==r||n.length%this.size!==0)return!1;for(let t=0;t<n.length;t+=this.size)for(let r=0;r<this.size;r++)if(n[t+r]!==e[r])return!1;return!0}setExternalBuffer(e){let{state:t}=this;return e?(this.clearNeedsUpdate(),t.lastExternalBuffer===e?!0:(t.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e),!0)):(t.lastExternalBuffer=null,!1)}setBinaryValue(e,t=null){let{state:n,settings:r}=this;if(!e)return n.binaryValue=null,n.binaryAccessor=null,!1;if(r.noAlloc)return!1;if(n.binaryValue===e)return this.clearNeedsUpdate(),!0;if(n.binaryValue=e,this.setNeedsRedraw(),r.transform||t!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});let i=e;X(ArrayBuffer.isView(i.value),`invalid ${r.accessor}`);let a=!!i.size&&i.size!==this.size;return n.binaryAccessor=Cx(i.value,{size:i.size||this.size,stride:i.stride,offset:i.offset,startIndices:t,nested:a}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){let{startIndices:t}=this;return(t?e<t.length?t[e]:this.numInstances:e)*this.size}getValue(){let e=this.settings.shaderAttributes,t=super.getValue();if(!e)return t;for(let n in e)Object.assign(t,super.getValue(n,e[n]));return t}getBufferLayout(e){this.state.layoutChanged=!1;let t=this.settings.shaderAttributes,n=super._getBufferLayout(),{stepMode:r}=this.settings;if(r===`dynamic`?n.stepMode=e?e.isInstanced?`instance`:`vertex`:`instance`:n.stepMode=r??`vertex`,!t)return n;for(let e in t){let r=super._getBufferLayout(e,t[e]);n.attributes.push(...r.attributes)}return n}_autoUpdater(e,{data:t,startRow:n,endRow:r,props:i,numInstances:a}){let{settings:o,state:s,value:c,size:l,startIndices:u}=e,{accessor:d,transform:f}=o,p=s.binaryAccessor||(typeof d==`function`?d:i[d]);X(typeof p==`function`,`accessor "${d}" is not a function`);let m=e.getVertexOffset(n),{iterable:h,objectInfo:g}=xx(t,n,r);for(let t of h){g.index++;let n=p(t,g);if(f&&(n=f.call(this,n)),u){let t=(g.index<u.length-1?u[g.index+1]:a)-u[g.index];if(n&&Array.isArray(n[0])){let t=m;for(let r of n)e._normalizeValue(r,c,t),t+=l}else n&&n.length>l?c.set(n,m):(e._normalizeValue(n,g.target,0),dy({target:c,source:g.target,start:m,count:t}));m+=t*l}else e._normalizeValue(n,c,m),m+=l}}_validateAttributeUpdaters(){let{settings:e}=this;if(!(e.noAlloc||typeof e.update==`function`))throw Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){let{value:e}=this,t=Math.min(4,this.size);if(e&&e.length>=t){let n=!0;switch(t){case 4:n&&=Number.isFinite(e[3]);case 3:n&&=Number.isFinite(e[2]);case 2:n&&=Number.isFinite(e[1]);case 1:n&&=Number.isFinite(e[0]);break;default:n=!1}if(!n)throw Error(`Illegal attribute generated for ${this.id}`)}}}}));function Ix(e){let{source:t,target:n,start:r=0,size:i,getData:a}=e,o=e.end||n.length,s=t.length,c=o-r;if(s>c){n.set(t.subarray(0,c),r);return}if(n.set(t,r),!a)return;let l=s;for(;l<c;){let e=a(l,t);for(let t=0;t<i;t++)n[r+l]=e[t]||0,l++}}function Lx({source:e,target:t,size:n,getData:r,sourceStartIndices:i,targetStartIndices:a}){if(!i||!a)return Ix({source:e,target:t,size:n,getData:r}),t;let o=0,s=0,c=r&&((e,t)=>r(e+s,t)),l=Math.min(i.length,a.length);for(let r=1;r<l;r++){let l=i[r]*n,u=a[r]*n;Ix({source:e.subarray(o,l),target:t,start:s,end:u,size:n,getData:c}),o=l,s=u}return s<t.length&&Ix({source:[],target:t,start:s,size:n,getData:c}),t}var Rx=e((()=>{}));function zx(e){let{device:t,settings:n,value:r}=e,i=new Px(t,n);return i.setData({value:r instanceof Float64Array?new Float64Array:new Float32Array,normalized:n.normalized}),i}function Bx(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`No defined attribute type for size "${e}"`)}}function Vx(e){switch(e){case 1:return`float32`;case 2:return`float32x2`;case 3:return`float32x3`;case 4:return`float32x4`;default:throw Error(`invalid type size`)}}function Hx(e){e.push(e.shift())}function Ux(e,t){let{doublePrecision:n,settings:r,value:i,size:a}=e,o=n&&i instanceof Float64Array?2:1,s=0,{shaderAttributes:c}=e.settings;if(c)for(let e of Object.values(c))s=Math.max(s,e.vertexOffset??0);return(r.noAlloc?i.length:(t+s)*a)*o}function Wx({device:e,source:t,target:n}){return(!n||n.byteLength<t.byteLength)&&(n?.destroy(),n=e.createBuffer({byteLength:t.byteLength,usage:t.usage})),n}function Gx({device:e,buffer:t,attribute:n,fromLength:r,toLength:i,fromStartIndices:a,getData:o=e=>e}){let s=n.doublePrecision&&n.value instanceof Float64Array?2:1,c=n.size*s,l=n.byteOffset,u=n.settings.bytesPerElement<4?l/n.settings.bytesPerElement*4:l,d=n.startIndices,f=a&&d,p=n.isConstant;if(!f&&t&&r>=i)return t;let m=n.value instanceof Float64Array?Float32Array:n.value.constructor,h=p?n.value:new m(n.getBuffer().readSyncWebGL(l,i*m.BYTES_PER_ELEMENT).buffer);if(n.settings.normalized&&!p){let e=o;o=(t,r)=>n.normalizeConstant(e(t,r))}let g=p?(e,t)=>o(h,t):(e,t)=>o(h.subarray(e+l,e+l+c),t),_=t?new Float32Array(t.readSyncWebGL(u,r*4).buffer):new Float32Array,v=new Float32Array(i);return Lx({source:_,target:v,sourceStartIndices:a,targetStartIndices:d,size:c,getData:g}),(!t||t.byteLength<v.byteLength+u)&&(t?.destroy(),t=e.createBuffer({byteLength:v.byteLength+u,usage:35050})),t.write(v,u),t}var Kx=e((()=>{Rx(),Fx()})),qx,Jx=e((()=>{By(),Kx(),qx=class{constructor({device:e,attribute:t,timeline:n}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new zy(n),this.attribute=t,this.attributeInTransition=zx(t),this.currentStartIndices=t.startIndices}get inProgress(){return this.transition.inProgress}start(e,t,n=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=Ux(this.attribute,t),this.transition.start({...e,duration:n})}update(){let e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value})}cancel(){this.transition.cancel()}delete(){this.cancel();for(let e of this.buffers)e.destroy();this.buffers.length=0}}}));function Yx(e){return e.doublePrecision&&e.value instanceof Float64Array}function Xx(e,t){let n=t.size,r=Bx(n),i=Vx(n),a=t.getBufferLayout();return Yx(t)?new Gv(e,{vs:eS,bufferLayout:[{name:`aFrom`,byteStride:8*n,attributes:[{attribute:`aFrom`,format:i,byteOffset:0},{attribute:`aFrom64Low`,format:i,byteOffset:4*n}]},{name:`aTo`,byteStride:8*n,attributes:[{attribute:`aTo`,format:i,byteOffset:0},{attribute:`aTo64Low`,format:i,byteOffset:4*n}]}],modules:[Ou,Qx],defines:{ATTRIBUTE_TYPE:r,ATTRIBUTE_SIZE:n},moduleSettings:{},varyings:[`vCurrent`,`vCurrent64Low`],bufferMode:35980,disableWarnings:!0}):new Gv(e,{vs:$x,bufferLayout:[{name:`aFrom`,format:i},{name:`aTo`,format:a.attributes[0].format}],modules:[Qx],defines:{ATTRIBUTE_TYPE:r},varyings:[`vCurrent`],disableWarnings:!0})}var Zx,Qx,$x,eS,tS=e((()=>{Yv(),ud(),Kx(),Jx(),Zx=class extends qx{constructor({device:e,attribute:t,timeline:n}){super({device:e,attribute:t,timeline:n}),this.type=`interpolation`,this.transform=Xx(e,t)}start(e,t){let n=this.currentLength,r=this.currentStartIndices;if(super.start(e,t,e.duration),e.duration<=0){this.transition.cancel();return}let{buffers:i,attribute:a}=this;Hx(i),i[0]=Gx({device:this.device,buffer:i[0],attribute:a,fromLength:n,toLength:this.currentLength,fromStartIndices:r,getData:e.enter}),i[1]=Wx({device:this.device,source:i[0],target:i[1]}),this.setBuffer(i[1]);let{transform:o}=this,s=o.model,c=Math.floor(this.currentLength/a.size);Yx(a)&&(c/=2),s.setVertexCount(c),a.isConstant?(s.setAttributes({aFrom:i[0]}),s.setConstantAttributes({aTo:a.value})):s.setAttributes({aFrom:i[0],aTo:a.getBuffer()}),o.transformFeedback.setBuffers({vCurrent:i[1]})}onUpdate(){let{duration:e,easing:t}=this.settings,{time:n}=this.transition,r=n/e;t&&(r=t(r));let{model:i}=this.transform,a={time:r};i.shaderInputs.setProps({interpolation:a}),this.transform.run({discard:!0})}delete(){super.delete(),this.transform.destroy()}},Qx={name:`interpolation`,vs:`layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,uniformTypes:{time:`f32`}},$x=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,eS=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`}));function nS(e,t){let n=Bx(t.size),r=Vx(t.size);return new Gv(e,{vs:sS,fs:cS,bufferLayout:[{name:`aPrev`,format:r},{name:`aCur`,format:r},{name:`aTo`,format:t.getBufferLayout().attributes[0].format}],varyings:[`vNext`],modules:[oS],defines:{ATTRIBUTE_TYPE:n},parameters:{depthCompare:`always`,blendColorOperation:`max`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`max`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`}})}function rS(e){return e.createTexture({data:new Uint8Array(4),format:`rgba8unorm`,width:1,height:1})}function iS(e,t){return e.createFramebuffer({id:`spring-transition-is-transitioning-framebuffer`,width:1,height:1,colorAttachments:[t]})}var aS,oS,sS,cS,lS=e((()=>{Yv(),Kx(),Jx(),aS=class extends qx{constructor({device:e,attribute:t,timeline:n}){super({device:e,attribute:t,timeline:n}),this.type=`spring`,this.texture=rS(e),this.framebuffer=iS(e,this.texture),this.transform=nS(e,t)}start(e,t){let n=this.currentLength,r=this.currentStartIndices;super.start(e,t);let{buffers:i,attribute:a}=this;for(let t=0;t<2;t++)i[t]=Gx({device:this.device,buffer:i[t],attribute:a,fromLength:n,toLength:this.currentLength,fromStartIndices:r,getData:e.enter});i[2]=Wx({device:this.device,source:i[0],target:i[2]}),this.setBuffer(i[1]);let{model:o}=this.transform;o.setVertexCount(Math.floor(this.currentLength/a.size)),a.isConstant?o.setConstantAttributes({aTo:a.value}):o.setAttributes({aTo:a.getBuffer()})}onUpdate(){let{buffers:e,transform:t,framebuffer:n,transition:r}=this,i=this.settings;t.model.setAttributes({aPrev:e[0],aCur:e[1]}),t.transformFeedback.setBuffers({vNext:e[2]});let a={stiffness:i.stiffness,damping:i.damping};t.model.shaderInputs.setProps({spring:a}),t.run({framebuffer:n,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),Hx(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(n)[0]>0||r.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}},oS={name:`spring`,vs:`layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,uniformTypes:{damping:`f32`,stiffness:`f32`}},sS=`#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,cS=`#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`})),uS,dS,fS=e((()=>{tS(),lS(),I(),uS={interpolation:Zx,spring:aS},dS=class{constructor(e,{id:t,timeline:n}){if(!e)throw Error(`AttributeTransitionManager is constructed without device`);this.id=t,this.device=e,this.timeline=n,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(let e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:t,numInstances:n}){this.numInstances=n||1;for(let n in e){let r=e[n],i=r.getTransitionSetting(t);i&&this._updateAttribute(n,r,i)}for(let n in this.transitions){let r=e[n];(!r||!r.getTransitionSetting(t))&&this._removeTransition(n)}}hasAttribute(e){let t=this.transitions[e];return t&&t.inProgress}getAttributes(){let e={};for(let t in this.transitions){let n=this.transitions[t];n.inProgress&&(e[t]=n.attributeInTransition)}return e}run(){if(this.numInstances===0)return!1;for(let e in this.transitions)this.transitions[e].update()&&(this.needsRedraw=!0);let e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,t,n){let r=this.transitions[e],i=!r||r.type!==n.type;if(i){r&&this._removeTransition(e);let a=uS[n.type];a?this.transitions[e]=new a({attribute:t,timeline:this.timeline,device:this.device}):(F.error(`unsupported transition type '${n.type}'`)(),i=!1)}(i||t.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(n,this.numInstances))}}})),pS,mS,hS,gS,_S,vS,yS,bS=e((()=>{Fx(),I(),Kp(),_g(),no(),fS(),pS=`attributeManager.invalidate`,mS=`attributeManager.updateStart`,hS=`attributeManager.updateEnd`,gS=`attribute.updateStart`,_S=`attribute.allocate`,vS=`attribute.updateEnd`,yS=class{constructor(e,{id:t=`attribute-manager`,stats:n,timeline:r}={}){this.mergeBoundsMemoized=Gp(mg),this.id=t,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=n,this.attributeTransitionManager=new dS(e,{id:`${t}-transitions`,timeline:r}),Object.seal(this)}finalize(){for(let e in this.attributes)this.attributes[e].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){let t=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,t&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:`instance`})}remove(e){for(let t of e)this.attributes[t]!==void 0&&(this.attributes[t].delete(),delete this.attributes[t])}invalidate(e,t){let n=this._invalidateTrigger(e,t);L(pS,this,e,n)}invalidateAll(e){for(let t in this.attributes)this.attributes[t].setNeedsUpdate(t,e);L(pS,this,`all`)}update({data:e,numInstances:t,startIndices:n=null,transitions:r,props:i={},buffers:a={},context:o={}}){let s=!1;L(mS,this),this.stats&&this.stats.get(`Update Attributes`).timeStart();for(let r in this.attributes){let c=this.attributes[r],l=c.settings.accessor;c.startIndices=n,c.numInstances=t,i[r]&&F.removed(`props.${r}`,`data.attributes.${r}`)(),c.setExternalBuffer(a[r])||c.setBinaryValue(typeof l==`string`?a[l]:void 0,e.startIndices)||typeof l==`string`&&!a[l]&&c.setConstantValue(o,i[l])||c.needsUpdate()&&(s=!0,this._updateAttribute({attribute:c,numInstances:t,data:e,props:i,context:o})),this.needsRedraw=this.needsRedraw||c.needsRedraw()}s&&L(hS,this,t),this.stats&&(this.stats.get(`Update Attributes`).timeEnd(),s&&this.stats.get(`Attributes updated`).incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:t,transitions:r})}updateTransition(){let{attributeTransitionManager:e}=this,t=e.run();return this.needsRedraw=this.needsRedraw||t,t}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){let t=e.map(e=>this.attributes[e]?.getBounds());return this.mergeBoundsMemoized(t)}getChangedAttributes(e={clearChangedFlags:!1}){let{attributes:t,attributeTransitionManager:n}=this,r={...n.getAttributes()};for(let i in t){let a=t[i];a.needsRedraw(e)&&!n.hasAttribute(i)&&(r[i]=a)}return r}getBufferLayouts(e){return Object.values(this.getAttributes()).map(t=>t.getBufferLayout(e))}_add(e,t){for(let n in e){let r=e[n],i={...r,id:n,size:r.isIndexed&&1||r.size||1,...t};this.attributes[n]=new Px(this.device,i)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){let e={};for(let t in this.attributes)this.attributes[t].getUpdateTriggers().forEach(n=>{e[n]||(e[n]=[]),e[n].push(t)});this.updateTriggers=e}_invalidateTrigger(e,t){let{attributes:n,updateTriggers:r}=this,i=r[e];return i&&i.forEach(e=>{let r=n[e];r&&r.setNeedsUpdate(r.id,t)}),i}_updateAttribute(e){let{attribute:t,numInstances:n}=e;if(L(gS,t),t.constant){t.setConstantValue(e.context,t.value);return}t.allocate(n)&&L(_S,t,n),t.updateBuffer(e)&&(this.needsRedraw=!0,L(vS,t,n))}}})),xS,SS=e((()=>{U(),By(),xS=class extends zy{get value(){return this._value}_onUpdate(){let{time:e,settings:{fromValue:t,toValue:n,duration:r,easing:i}}=this,a=i(e/r);this._value=kc(t,n,a)}}}));function CS(e,t,n,r,i){let a=t-e;return(n-t)*i+-a*r+a+t}function wS(e,t,n,r,i){if(Array.isArray(n)){let a=[];for(let o=0;o<n.length;o++)a[o]=CS(e[o],t[o],n[o],r,i);return a}return CS(e,t,n,r,i)}function TS(e,t){if(Array.isArray(e)){let n=0;for(let r=0;r<e.length;r++){let i=e[r]-t[r];n+=i*i}return Math.sqrt(n)}return Math.abs(e-t)}var ES,DS,OS=e((()=>{By(),ES=1e-5,DS=class extends zy{get value(){return this._currValue}_onUpdate(){let{fromValue:e,toValue:t,damping:n,stiffness:r}=this.settings,{_prevValue:i=e,_currValue:a=e}=this,o=wS(i,a,t,n,r),s=TS(o,t),c=TS(o,a);s<ES&&c<ES&&(o=t,this.end()),this._prevValue=a,this._currValue=o}}})),kS,AS,jS=e((()=>{Nx(),SS(),OS(),I(),kS={interpolation:xS,spring:DS},AS=class{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,t,n,r){let{transitions:i}=this;if(i.has(e)){let n=i.get(e),{value:r=n.settings.fromValue}=n;t=r,this.remove(e)}if(r=jx(r),!r)return;let a=kS[r.type];if(!a){F.error(`unsupported transition type '${r.type}'`)();return}let o=new a(this.timeline);o.start({...r,fromValue:t,toValue:n}),i.set(e,o)}remove(e){let{transitions:t}=this;t.has(e)&&(t.get(e).cancel(),t.delete(e))}update(){let e={};for(let[t,n]of this.transitions)n.update(),e[t]=n.value,n.inProgress||this.remove(t);return e}clear(){for(let e of this.transitions.keys())this.remove(e)}}}));function MS(e){let t=e[ry];for(let n in t){let r=t[n],{validate:i}=r;if(i&&!i(e[n],r))throw Error(`Invalid prop ${n}: ${e[n]}`)}}function NS(e,t){let n=FS({newProps:e,oldProps:t,propTypes:e[ry],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),r=LS(e,t),i=!1;return r||(i=RS(e,t)),{dataChanged:r,propsChanged:n,updateTriggersChanged:i,extensionsChanged:zS(e,t),transitionsChanged:PS(e,t)}}function PS(e,t){if(!e.transitions)return!1;let n={},r=e[ry],i=!1;for(let a in e.transitions){let o=r[a],s=o&&o.type;(s===`number`||s===`color`||s===`array`)&&IS(e[a],t[a],o)&&(n[a]=!0,i=!0)}return i?n:!1}function FS({newProps:e,oldProps:t,ignoreProps:n={},propTypes:r={},triggerName:i=`props`}){if(t===e)return!1;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return`${i} changed shallowly`;for(let a of Object.keys(e))if(!(a in n)){if(!(a in t))return`${i}.${a} added`;let n=IS(e[a],t[a],r[a]);if(n)return`${i}.${a} ${n}`}for(let a of Object.keys(t))if(!(a in n)){if(!(a in e))return`${i}.${a} dropped`;if(!Object.hasOwnProperty.call(e,a)){let n=IS(e[a],t[a],r[a]);if(n)return`${i}.${a} ${n}`}}return!1}function IS(e,t,n){let r=n&&n.equal;return r&&!r(e,t,n)||!r&&(r=e&&t&&e.equals,r&&!r.call(e,t))?`changed deeply`:!r&&t!==e?`changed shallowly`:null}function LS(e,t){if(t===null)return`oldProps is null, initial diff`;let n=!1,{dataComparator:r,_dataDiff:i}=e;return r?r(e.data,t.data)||(n=`Data comparator detected a change`):e.data!==t.data&&(n=`A new data container was supplied`),n&&i&&(n=i(e.data,t.data)||n),n}function RS(e,t){if(t===null||`all`in e.updateTriggers&&BS(e,t,`all`))return{all:!0};let n={},r=!1;for(let i in e.updateTriggers)i!==`all`&&BS(e,t,i)&&(n[i]=!0,r=!0);return r?n:!1}function zS(e,t){if(t===null)return!0;let n=t.extensions,{extensions:r}=e;if(r===n)return!1;if(!n||!r||r.length!==n.length)return!0;for(let e=0;e<r.length;e++)if(!r[e].equals(n[e]))return!0;return!1}function BS(e,t,n){let r=e.updateTriggers[n];r??={};let i=t.updateTriggers[n];return i??={},FS({oldProps:i,newProps:r,triggerName:n})}var VS=e((()=>{cy()}));function HS(e){if(!WS(e))throw Error(GS);if(typeof e.count==`function`)return e.count();if(Number.isFinite(e.size))return e.size;if(Number.isFinite(e.length))return e.length;if(US(e))return Object.keys(e).length;throw Error(KS)}function US(e){return typeof e==`object`&&!!e&&e.constructor===Object}function WS(e){return typeof e==`object`&&!!e}var GS,KS,qS=e((()=>{GS=`count(): argument not an object`,KS=`count(): argument not a container`}));function JS(e,t){if(!t)return e;let n={...e,...t};if(`defines`in t&&(n.defines={...e.defines,...t.defines}),`modules`in t&&(n.modules=(e.modules||[]).concat(t.modules),t.modules.some(e=>e.name===`project64`))){let e=n.modules.findIndex(e=>e.name===`project32`);e>=0&&n.modules.splice(e,1)}if(`inject`in t)if(!e.inject)n.inject=t.inject;else{let r={...e.inject};for(let e in t.inject)r[e]=(r[e]||``)+t.inject[e];n.inject=r}return n}var YS=e((()=>{}));function XS(e,t,n,r){if(n instanceof d)return n;n.constructor&&n.constructor.name!==`Object`&&(n={data:n});let i=null;n.compressed&&(i={minFilter:`linear`,mipmapFilter:n.data.length>1?`nearest`:`linear`});let{width:a,height:o}=n.data,s=t.createTexture({...n,sampler:{...QS,...i,...r},mipLevels:t.getMipLevelCount(a,o)});return t.type===`webgl`?s.generateMipmapsWebGL():t.type===`webgpu`&&t.generateMipmapsWebGPU(s),$S[s.id]=e,s}function ZS(e,t){!t||!(t instanceof d)||$S[t.id]===e&&(t.delete(),delete $S[t.id])}var QS,$S,eC=e((()=>{O(),QS={minFilter:`linear`,mipmapFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`},$S={}}));function tC(e){let t={},n={},r={};for(let[i,a]of Object.entries(e)){let e=a?.deprecatedFor;if(e)r[i]=Array.isArray(e)?e:[e];else{let e=nC(i,a);t[i]=e,n[i]=e.value}}return{propTypes:t,defaultProps:n,deprecatedProps:r}}function nC(e,t){switch(aC(t)){case`object`:return rC(e,t);case`array`:return rC(e,{type:`array`,value:t,compare:!1});case`boolean`:return rC(e,{type:`boolean`,value:t});case`number`:return rC(e,{type:`number`,value:t});case`function`:return rC(e,{type:`function`,value:t,compare:!0});default:return{name:e,type:`unknown`,value:t}}}function rC(e,t){return`type`in t?{name:e,...oC[t.type],...t}:`value`in t?{name:e,type:aC(t.value),...t}:{name:e,type:`object`,value:t}}function iC(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function aC(e){return iC(e)?`array`:e===null?`null`:typeof e}var oC,sC=e((()=>{eC(),xy(),oC={boolean:{validate(e,t){return!0},equal(e,t,n){return!!e==!!t}},number:{validate(e,t){return Number.isFinite(e)&&(!(`max`in t)||e<=t.max)&&(!(`min`in t)||e>=t.min)}},color:{validate(e,t){return t.optional&&!e||iC(e)&&(e.length===3||e.length===4)},equal(e,t,n){return Y(e,t,1)}},accessor:{validate(e,t){let n=aC(e);return n===`function`||n===aC(t.value)},equal(e,t,n){return typeof t==`function`||Y(e,t,1)}},array:{validate(e,t){return t.optional&&!e||iC(e)},equal(e,t,n){let{compare:r}=n;return r?Y(e,t,Number.isInteger(r)?r:+!!r):e===t}},object:{equal(e,t,n){if(n.ignore)return!0;let{compare:r}=n;return r?Y(e,t,Number.isInteger(r)?r:+!!r):e===t}},function:{validate(e,t){return t.optional&&!e||typeof e==`function`},equal(e,t,n){return!n.compare&&n.ignore!==!1||e===t}},data:{transform:(e,t,n)=>{if(!e)return e;let{dataTransform:r}=n.props;return r?r(e):typeof e.shape==`string`&&e.shape.endsWith(`-table`)&&Array.isArray(e.data)?e.data:e}},image:{transform:(e,t,n)=>{let r=n.context;return!r||!r.device?null:XS(n.id,r.device,e,{...t.parameters,...n.props.textureParameters})},release:(e,t,n)=>{ZS(n.id,e)}}}}));function cC(e,t){let n;for(let e=t.length-1;e>=0;e--){let r=t[e];`extensions`in r&&(n=r.extensions)}let r=lC(e.constructor,n),i=Object.create(r);i[ny]=e,i[oy]={},i[sy]={};for(let e=0;e<t.length;++e){let n=t[e];for(let e in n)i[e]=n[e]}return Object.freeze(i),i}function lC(e,t){if(!(e instanceof xC.constructor))return{};let n=vC;if(t)for(let e of t){let t=e.constructor;t&&(n+=`:${t.extensionName||t.name}`)}return gC(e,n)||(e[n]=uC(e,t||[]))}function uC(e,t){if(!e.prototype)return null;let n=lC(Object.getPrototypeOf(e)),r=tC(gC(e,`defaultProps`)||{}),i=Object.assign(Object.create(null),n,r.defaultProps),a=Object.assign(Object.create(null),n?.[ry],r.propTypes),o=Object.assign(Object.create(null),n?.[iy],r.deprecatedProps);for(let e of t){let t=lC(e.constructor);t&&(Object.assign(i,t),Object.assign(a,t[ry]),Object.assign(o,t[iy]))}return dC(i,e),pC(i,a),fC(i,o),i[ry]=a,i[iy]=o,t.length===0&&!hC(e,`_propTypes`)&&(e._propTypes=a),i}function dC(e,t){let n=_C(t);Object.defineProperties(e,{id:{writable:!0,value:n}})}function fC(e,t){for(let n in t)Object.defineProperty(e,n,{enumerable:!1,set(e){let r=`${this.id}: ${n}`;for(let r of t[n])hC(this,r)||(this[r]=e);F.deprecated(r,t[n].join(`/`))()}})}function pC(e,t){let n={},r={};for(let e in t){let i=t[e],{name:a,value:o}=i;i.async&&(n[a]=o,r[a]=mC(a))}e[ay]=n,e[oy]={},Object.defineProperties(e,r)}function mC(e){return{enumerable:!0,set(t){typeof t==`string`||t instanceof Promise||Sx(t)?this[oy][e]=t:this[sy][e]=t},get(){if(this[sy]){if(e in this[sy])return this[sy][e]||this[ay][e];if(e in this[oy]){let t=this[ny]&&this[ny].internalState;if(t&&t.hasAsyncProp(e))return t.getAsyncProp(e)||this[ay][e]}}return this[ay][e]}}}function hC(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function gC(e,t){return hC(e,t)&&e[t]}function _C(e){let t=e.componentName;return t||F.warn(`${e.name}.componentName not specified`)(),t||e.name}var vC,yC=e((()=>{I(),Ex(),sC(),cy(),SC(),vC=`_mergedDefaultProps`})),bC,xC,SC=e((()=>{cy(),yC(),bC=0,xC=class{constructor(...e){this.props=cC(this,e),this.id=this.props.id,this.count=bC++}clone(e){let{props:t}=this,n={};for(let e in t[ay])e in t[sy]?n[e]=t[sy][e]:e in t[oy]&&(n[e]=t[oy][e]);return new this.constructor({...t,...n,...e})}},xC.componentName=`Component`,xC.defaultProps={}})),CC,wC,TC=e((()=>{Ex(),cy(),CC=Object.freeze({}),wC=class{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(let e in this.asyncProps){let t=this.asyncProps[e];t&&t.type&&t.type.release&&t.type.release(t.resolvedValue,t.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||CC}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){let t=this.asyncProps[e];return t&&t.resolvedValue}isAsyncPropLoading(e){if(e){let t=this.asyncProps[e];return!!(t&&t.pendingLoadCount>0&&t.pendingLoadCount!==t.resolvedLoadCount)}for(let e in this.asyncProps)if(this.isAsyncPropLoading(e))return!0;return!1}reloadAsyncProp(e,t){this._watchPromise(e,Promise.resolve(t))}setAsyncProps(e){this.component=e[ny]||this.component;let t=e[sy]||{},n=e[oy]||e,r=e[ay]||{};for(let e in t){let n=t[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,n),t[e]=this.getAsyncProp(e)}for(let e in n){let t=n[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,t)}}_fetch(e,t){return null}_onResolve(e,t){}_onError(e,t){}_updateAsyncProp(e,t){if(this._didAsyncInputValueChange(e,t)){if(typeof t==`string`&&(t=this._fetch(e,t)),t instanceof Promise){this._watchPromise(e,t);return}if(Sx(t)){this._resolveAsyncIterable(e,t);return}this._setPropValue(e,t)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps){this.oldAsyncProps=Object.create(this.oldProps);for(let e in this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}}_didAsyncInputValueChange(e,t){let n=this.asyncProps[e];return t===n.resolvedValue||t===n.lastValue?!1:(n.lastValue=t,!0)}_setPropValue(e,t){this._freezeAsyncOldProps();let n=this.asyncProps[e];n&&(t=this._postProcessValue(n,t),n.resolvedValue=t,n.pendingLoadCount++,n.resolvedLoadCount=n.pendingLoadCount)}_setAsyncPropValue(e,t,n){let r=this.asyncProps[e];r&&n>=r.resolvedLoadCount&&t!==void 0&&(this._freezeAsyncOldProps(),r.resolvedValue=t,r.resolvedLoadCount=n,this.onAsyncPropUpdated(e,t))}_watchPromise(e,t){let n=this.asyncProps[e];if(n){n.pendingLoadCount++;let r=n.pendingLoadCount;t.then(t=>{this.component&&(t=this._postProcessValue(n,t),this._setAsyncPropValue(e,t,r),this._onResolve(e,t))}).catch(t=>{this._onError(e,t)})}}async _resolveAsyncIterable(e,t){if(e!==`data`){this._setPropValue(e,t);return}let n=this.asyncProps[e];if(!n)return;n.pendingLoadCount++;let r=n.pendingLoadCount,i=[],a=0;for await(let n of t){if(!this.component)return;let{dataTransform:t}=this.component.props;i=t?t(n,i):i.concat(n),Object.defineProperty(i,"__diff",{enumerable:!1,value:[{startRow:a,endRow:i.length}]}),a=i.length,this._setAsyncPropValue(e,i,r)}this._onResolve(e,i)}_postProcessValue(e,t){let n=e.type;return n&&this.component&&(n.release&&n.release(e.resolvedValue,n,this.component),n.transform)?n.transform(t,n,this.component):t}_createAsyncPropData(e,t){if(!this.asyncProps[e]){let n=this.component&&this.component.props[ry];this.asyncProps[e]={type:n&&n[e],lastValue:null,resolvedValue:t,pendingLoadCount:0,resolvedLoadCount:0}}}}})),EC,DC=e((()=>{TC(),EC=class extends wC{constructor({attributeManager:e,layer:t}){super(t),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1}get layer(){return this.component}_fetch(e,t){let n=this.layer,r=n?.props.fetch;return r?r(t,{propName:e,layer:n}):super._fetch(e,t)}_onResolve(e,t){let n=this.layer;if(n){let r=n.props.onDataLoad;e===`data`&&r&&r(t,{propName:e,layer:n})}}_onError(e,t){let n=this.layer;n&&n.raiseError(t,`loading ${e} of ${this.layer}`)}}}));function OC(e){let{blendConstant:t,...n}=e;return t?{pipelineParameters:n,renderPassParameters:{blendConstant:t}}:{pipelineParameters:n}}function kC(e,t,n,r){for(let i of e)i.device.type===`webgpu`?(AC(i,t),i.setParameters({...i.parameters,...r?.pipelineParameters})):i.setParameters(n)}function AC(e,t){let n=t.props.framebuffer||(t.framebuffer??null);if(!n)return;let r=n.colorAttachments.map(e=>e?.texture?.format??null),i=n.depthStencilAttachment?.texture?.format,a=e;(!jC(a.props.colorAttachmentFormats,r)||a.props.depthStencilAttachmentFormat!==i)&&(a.props.colorAttachmentFormats=r,a.props.depthStencilAttachmentFormat=i,a._setPipelineNeedsUpdate(`attachment formats`))}function jC(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var MC,NC,PC,FC,IC,LC,RC,zC,BC,VC,HC,UC=e((()=>{O(),k(),bS(),jS(),VS(),cy(),qS(),I(),no(),qy(),Kp(),YS(),Mg(),og(),SC(),DC(),uh(),Qi(),MC=`layer.changeFlag`,NC=`layer.initialize`,PC=`layer.update`,FC=`layer.finalize`,IC=`layer.matched`,LC=2**24-1,RC=Object.freeze([]),zC=Gp(({oldViewport:e,viewport:t})=>e.equals(t)),BC=new Uint8ClampedArray,VC={data:{type:`data`,value:RC,async:!0},dataComparator:{type:`function`,value:null,optional:!0},_dataDiff:{type:`function`,value:e=>e&&e.__diff,optional:!0},dataTransform:{type:`function`,value:null,optional:!0},onDataLoad:{type:`function`,value:null,optional:!0},onError:{type:`function`,value:null,optional:!0},fetch:{type:`function`,value:(e,{propName:t,layer:n,loaders:r,loadOptions:i,signal:a})=>{let{resourceManager:o}=n.context;i||=n.getLoadOptions(),r||=n.props.loaders,a&&(i={...i,core:{...i?.core,fetch:{...i?.core?.fetch,signal:a}}});let s=o.contains(e);return!s&&!i&&(o.add({resourceId:e,data:Xi(e,r),persistent:!1}),s=!0),s?o.subscribe({resourceId:e,onChange:e=>n.internalState?.reloadAsyncProp(t,e),consumerId:n.id,requestId:t}):Xi(e,r,i)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:`number`,min:0,max:1,value:1},operation:`draw`,onHover:{type:`function`,value:null,optional:!0},onClick:{type:`function`,value:null,optional:!0},onDragStart:{type:`function`,value:null,optional:!0},onDrag:{type:`function`,value:null,optional:!0},onDragEnd:{type:`function`,value:null,optional:!0},coordinateSystem:`default`,coordinateOrigin:{type:`array`,value:[0,0,0],compare:!0},modelMatrix:{type:`array`,value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:`XYZ`,colorFormat:`RGBA`,parameters:{type:`object`,value:{},optional:!0,compare:2},loadOptions:{type:`object`,value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:`array`,value:[],optional:!0,ignore:!0},getPolygonOffset:{type:`function`,value:({layerIndex:e})=>[0,-e*100]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:`accessor`,value:[0,0,128,128]}},HC=class extends xC{constructor(){super(...arguments),this.internalState=null,this.lifecycle=ty.NO_STATE,this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,`layerName`)?this.layerName:``}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){return`${this.constructor.layerName||this.constructor.name}({id: '${this.props.id}'})`}project(e){X(this.internalState);let t=this.internalState.viewport||this.context.viewport,[n,r,i]=Wm(kg(e,{viewport:t,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),t.pixelProjectionMatrix);return e.length===2?[n,r]:[n,r,i]}unproject(e){return X(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,t){return X(this.internalState),Ag(e,{viewport:this.internalState.viewport||this.context.viewport,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...t})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return this.internalState?!this.internalState.isAsyncPropLoading():!1}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){let e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(let t of this.getModels())t.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){let{coordinateSystem:e}=this.props;return e==="default"||e===`lnglat`||e===`cartesian`}onHover(e,t){return this.props.onHover&&this.props.onHover(e,t)||!1}onClick(e,t){return this.props.onClick&&this.props.onClick(e,t)||!1}nullPickingColor(){return[0,0,0]}encodePickingColor(e,t=[]){return t[0]=e+1&255,t[1]=e+1>>8&255,t[2]=e+1>>8>>8&255,t}decodePickingColor(e){X(e instanceof Uint8Array);let[t,n,r]=e;return t+n*256+r*65536-1}getNumInstances(){return Number.isFinite(this.props.numInstances)?this.props.numInstances:this.state&&this.state.numInstances!==void 0?this.state.numInstances:HS(this.props.data)}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds([`positions`,`instancePositions`])}getShaders(e){e=JS(e,{disableWarnings:!0,modules:this.context.defaultShaderModules});for(let t of this.props.extensions)e=JS(e,t.getShaders.call(this,t));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){let t=this.getAttributeManager(),{dataChanged:n}=e.changeFlags;if(n&&t)if(Array.isArray(n))for(let e of n)t.invalidateAll(e);else t.invalidateAll();if(t){let{props:n}=e,r=this.internalState.hasPickingBuffer,i=Number.isInteger(n.highlightedObjectIndex)||!!n.pickable||n.extensions.some(e=>e.getNeedsPickingBuffer.call(this,e));if(r!==i){this.internalState.hasPickingBuffer=i;let{pickingColors:e,instancePickingColors:n}=t.attributes,r=e||n;r&&(i&&r.constant&&(r.constant=!1,t.invalidate(r.id)),!r.value&&!i&&(r.constant=!0,r.value=[0,0,0]))}}}finalizeState(e){for(let e of this.getModels())e.destroy();let t=this.getAttributeManager();t&&t.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(let t of this.getModels())t.draw(e.renderPass)}getPickingInfo({info:e,mode:t,sourceLayer:n}){let{index:r}=e;return r>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[r]),e}raiseError(e,t){t&&(e=Error(`${t}: ${e.message}`,{cause:e})),this.props.onError?.(e)||this.context?.onError?.(e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return this.internalState?this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()):!1}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(e){if(!this.internalState)return;let t=this.internalState.viewport;this.internalState.viewport=e,(!t||!zC({oldViewport:t,viewport:e}))&&(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e=`all`){let t=this.getAttributeManager();t&&(e===`all`?t.invalidateAll():t.invalidate(e))}updateAttributes(e){let t=!1;for(let n in e)e[n].layoutChanged()&&(t=!0);for(let n of this.getModels())this._setModelAttributes(n,e,t)}_updateAttributes(){let e=this.getAttributeManager();if(!e)return;let t=this.props,n=this.getNumInstances(),r=this.getStartIndices();e.update({data:t.data,numInstances:n,startIndices:r,props:t,transitions:t.transitions,buffers:t.data.attributes,context:this});let i=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(i)}_updateAttributeTransition(){let e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){let{uniformTransitions:e}=this.internalState;if(e.active){let t=e.update(),n=Object.create(this.props);for(let e in t)Object.defineProperty(n,e,{value:t[e]});return n}return this.props}calculateInstancePickingColors(e,{numInstances:t}){if(e.constant)return;let n=Math.floor(BC.length/4);this.internalState.usesPickingColorCache=!0;let r=t>0&&BC[0]===0;if(n<t||r){t>LC&&F.warn(`Layer has too many data objects. Picking might not be able to distinguish all objects.`)(),BC=ag.allocate(BC,t,{size:4,copy:!0,maxCount:Math.max(t,LC)});let e=Math.floor(BC.length/4),i=[0,0,0],a=r?0:n;for(let t=a;t<e;t++)this.encodePickingColor(t,i),BC[t*4+0]=i[0],BC[t*4+1]=i[1],BC[t*4+2]=i[2],BC[t*4+3]=0}e.value=BC.subarray(0,t*4)}_setModelAttributes(e,t,n=!1){if(!Object.keys(t).length)return;if(n){let n=this.getAttributeManager();e.setBufferLayout(n.getBufferLayouts(e)),t=n.getAttributes()}let r=e.userData?.excludeAttributes||{},i={},a={};for(let n in t){if(r[n])continue;let o=t[n].getValue();for(let r in o){let s=o[r];s instanceof f?t[n].settings.isIndexed?e.setIndexBuffer(s):i[r]=s:s&&(a[r]=s)}}e.setAttributes(i),e.setConstantAttributes(a)}disablePickingIndex(e){let t=this.props.data;if(!(`attributes`in t)){this._disablePickingIndex(e);return}let{pickingColors:n,instancePickingColors:r}=this.getAttributeManager().attributes,i=n||r,a=i&&t.attributes&&t.attributes[i.id];if(a&&a.value){let n=a.value,r=this.encodePickingColor(e);for(let e=0;e<t.length;e++){let t=i.getVertexOffset(e);n[t]===r[0]&&n[t+1]===r[1]&&n[t+2]===r[2]&&this._disablePickingIndex(e)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){let{pickingColors:t,instancePickingColors:n}=this.getAttributeManager().attributes,r=t||n;if(!r)return;let i=r.getVertexOffset(e),a=r.getVertexOffset(e+1);r.buffer.write(new Uint8Array(a-i),i)}restorePickingColors(){let{pickingColors:e,instancePickingColors:t}=this.getAttributeManager().attributes,n=e||t;n&&(this.internalState.usesPickingColorCache&&n.value.buffer!==BC.buffer&&(n.value=BC.subarray(0,n.value.length)),n.updateSubBuffer({startOffset:0}))}_initialize(){X(!this.internalState),L(NC,this);let e=this._getAttributeManager();e&&e.addInstanced({instancePickingColors:{type:`uint8`,size:4,noAlloc:!0,update:this.calculateInstancePickingColors}}),this.internalState=new EC({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(F.deprecated(`layer.state.attributeManager`,`layer.getAttributeManager()`)(),e)}),this.internalState.uniformTransitions=new AS(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context);for(let e of this.props.extensions)e.initializeState.call(this,this.context,e);this.setChangeFlags({dataChanged:`init`,propsChanged:`init`,viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){L(IC,this,this===e);let{state:t,internalState:n}=e;this!==e&&(this.internalState=n,this.state=t,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){let e=this.needsUpdate();if(L(PC,this,e),!e)return;this.context.stats.get(`Layer updates`).incrementCount();let t=this.props,n=this.context,r=this.internalState,i=n.viewport,a=this._updateUniformTransition();r.propsInTransition=a,n.viewport=r.viewport||i,this.props=a;try{let e=this._getUpdateParams(),t=this.getModels();if(n.device)this.updateState(e);else try{this.updateState(e)}catch{}for(let t of this.props.extensions)t.updateState.call(this,e,t);this.setNeedsRedraw(),this._updateAttributes();let r=this.getModels()[0]!==t[0];this._postUpdate(e,r)}finally{n.viewport=i,this.props=t,this._clearChangeFlags(),r.needsUpdate=!1,r.resetOldProps()}}_finalize(){L(FC,this),this.finalizeState(this.context);for(let e of this.props.extensions)e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:t=null,uniforms:n={},parameters:r={}}){this._updateAttributeTransition();let i=this.props,a=this.context;this.props=this.internalState.propsInTransition||i;try{t&&this.setShaderModuleProps(t);let{getPolygonOffset:i}=this.props,o=i&&i(n)||[0,0];a.device instanceof j&&a.device.setParametersWebGL({polygonOffset:o});let s=a.device instanceof j?null:OC(r);if(kC(this.getModels(),e,r,s),a.device instanceof j)a.device.withParametersWebGL(r,()=>{let i={renderPass:e,shaderModuleProps:t,uniforms:n,parameters:r,context:a};for(let e of this.props.extensions)e.draw.call(this,i,e);this.draw(i)});else{s?.renderPassParameters&&e.setParameters(s.renderPassParameters);let i={renderPass:e,shaderModuleProps:t,uniforms:n,parameters:r,context:a};for(let e of this.props.extensions)e.draw.call(this,i,e);this.draw(i)}}finally{this.props=i}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(e){if(!this.internalState)return;let{changeFlags:t}=this.internalState;for(let n in e)if(e[n]){let r=!1;switch(n){case`dataChanged`:let i=e[n],a=t[n];i&&Array.isArray(a)&&(t.dataChanged=Array.isArray(i)?a.concat(i):i,r=!0);default:t[n]||(t[n]=e[n],r=!0)}r&&L(MC,this,n,e)}let n=!!(t.dataChanged||t.updateTriggersChanged||t.propsChanged||t.extensionsChanged);t.propsOrDataChanged=n,t.somethingChanged=n||t.viewportChanged||t.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,t){let n=NS(e,t);if(n.updateTriggersChanged)for(let e in n.updateTriggersChanged)n.updateTriggersChanged[e]&&this.invalidateAttribute(e);if(n.transitionsChanged)for(let r in n.transitionsChanged)this.internalState.uniformTransitions.add(r,t[r],e[r],e.transitions?.[r]);return this.setChangeFlags(n)}validateProps(){MS(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){let t={highlightedObjectColor:e.picked?e.color:null},{highlightColor:n}=this.props;e.picked&&typeof n==`function`&&(t.highlightColor=n(e)),this.setShaderModuleProps({picking:t}),this.setNeedsRedraw()}_getAttributeManager(){let e=this.context;return new yS(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,t){let{props:n,oldProps:r}=e,i=this.state.model;i?.isInstanced&&i.setInstanceCount(this.getNumInstances());let{autoHighlight:a,highlightedObjectIndex:o,highlightColor:s}=n;if(t||r.autoHighlight!==a||r.highlightedObjectIndex!==o||r.highlightColor!==s){let e={};Array.isArray(s)&&(e.highlightColor=s),(t||r.autoHighlight!==a||o!==r.highlightedObjectIndex)&&(e.highlightedObjectColor=Number.isFinite(o)&&o>=0?this.encodePickingColor(o):null),this.setShaderModuleProps({picking:e})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let t=!1;t||=this.internalState.needsRedraw&&this.id;let n=this.getAttributeManager(),r=n?n.getNeedsRedraw(e):!1;if(t||=r,t)for(let e of this.props.extensions)e.onNeedsRedraw.call(this,e);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,t}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}},HC.defaultProps=VC,HC.layerName=`Layer`})),WC,GC,KC=e((()=>{UC(),no(),fy(),cy(),WC=`compositeLayer.renderLayers`,GC=class extends HC{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id?(e.object=t.__source.object,e.index=t.__source.index,e):e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:n}=this.props;return n&&n[e]&&n[e].type||t}getSubLayerRow(e,t,n){return e.__source={parent:this,object:t,index:n},e}getSubLayerAccessor(e){if(typeof e==`function`){let t={index:-1,data:this.props.data,target:[]};return(n,r)=>n&&n.__source?(t.index=n.__source.index,e(n.__source.object,t)):e(n,r)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g,_subLayerProps:_}=this.props,v={id:``,updateTriggers:{},opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g},y=_&&e.id&&_[e.id],b=y&&y.updateTriggers,x=e.id||`sublayer`;if(y){let t=this.props[ry],n=e.type?e.type._propTypes:{};for(let e in y){let r=n[e]||t[e];r&&r.type===`accessor`&&(y[e]=this.getSubLayerAccessor(y[e]))}}Object.assign(v,e,y),v.id=`${this.props.id}-${x}`,v.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...b};for(let e of m){let t=e.getSubLayerProps.call(this,e);t&&Object.assign(v,t,{updateTriggers:Object.assign(v.updateTriggers,t.updateTriggers)})}return v}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let n=this.internalState.subLayers,r=!n||this.needsUpdate();r&&(n=ly(this.renderLayers(),Boolean),this.internalState.subLayers=n),L(WC,this,r,n);for(let e of n)e.parent=this}},GC.layerName=`CompositeLayer`}));function qC(e,t=0){let n=Math.min(180,e)*YC;return 256*2*Math.sin(n/2)*2**t}function JC(e,t=0){let n=e/2**t;return Math.asin(Math.min(1,n/256/2))*2*XC}var YC,XC,ZC,QC,$C=e((()=>{U(),mb(),wb(),_g(),sb(),rb(),uh(),YC=Math.PI/180,XC=180/Math.PI,ZC=class extends Sb{constructor(e){let{startPanPos:t,...n}=e;n.normalize=!1,super(n),t!==void 0&&(this._state.startPanPos=t)}panStart({pos:e}){let{latitude:t,longitude:n,zoom:r}=this.getViewportProps();return this._getUpdatedState({startPanLngLat:[n,t],startPanPos:e,startZoom:r})}pan({pos:e,startPos:t}){let n=this.getState(),r=n.startPanLngLat||this._unproject(t);if(!r)return this;let i=n.startZoom??this.getViewportProps().zoom,a=n.startPanPos||t,o=[r[0],r[1],i],s=this.makeViewport(this.getViewportProps()).panByPosition(o,e,a);return this._getUpdatedState(s)}panEnd(){return this._getUpdatedState({startPanLngLat:null,startPanPos:null,startZoom:null})}zoom({scale:e}){let t=(this.getState().startZoom||this.getViewportProps().zoom)+Math.log2(e);return this._getUpdatedState({zoom:t})}applyConstraints(e){let{longitude:t,latitude:n,maxBounds:r}=e;if(e.zoom=this._constrainZoom(e.zoom,e),(t<-180||t>180)&&(e.longitude=cg(t+180,360)-180),e.latitude=B(n,-Zm,Zm),r&&(e.longitude=B(e.longitude,r[0][0],r[1][0]),e.latitude=B(e.latitude,r[0][1],r[1][1])),r){let t=e.zoom-Zy(n),i=r[1][0]-r[0][0],a=r[1][1]-r[0][1];if(a>0&&a<85.051129*2){let n=Math.min(JC(e.height,t),a)/2;e.latitude=B(e.latitude,r[0][1]+n,r[1][1]-n)}if(i>0&&i<360){let n=Math.min(JC(e.width/Math.cos(e.latitude*YC),t),i)/2;e.longitude=B(e.longitude,r[0][0]+n,r[1][0]-n)}}return e.latitude!==n&&(e.zoom+=Zy(e.latitude)-Zy(n)),e}_constrainZoom(e,t){t||=this.getViewportProps();let{latitude:n,maxZoom:r,maxBounds:i}=t,{minZoom:a}=t,o=Zy(0),s=Zy(n)-o;if(i!==null&&t.width>0&&t.height>0){let e=i[0][1],n=i[1][1],s=Math.sign(e)===Math.sign(n)?Math.min(Math.abs(e),Math.abs(n)):0,c=qC(i[1][0]-i[0][0])*Math.cos(s*YC),l=qC(i[1][1]-i[0][1]);c>0&&(a=Math.max(a,Math.log2(t.width/c)+o)),l>0&&(a=Math.max(a,Math.log2(t.height/l)+o)),a>r&&(a=r)}return B(e,a+s,r+s)}},QC=class extends pb{constructor(){super(...arguments),this.ControllerState=ZC,this.transition={transitionDuration:300,transitionInterpolator:new ob([`longitude`,`latitude`,`zoom`])},this.dragMode=`pan`}setProps(e){super.setProps(e),this.dragRotate=!1,this.touchRotate=!1}}})),ew,tw,nw=e((()=>{Ry(),rb(),Eg(),$C(),ew={cullMode:`back`},tw=class extends Ly{constructor(e={}){super({...e,parameters:{...ew,...e.parameters}})}getViewportType(e){return e.zoom>12?Tg:nb}get ControllerType(){return QC}},tw.displayName=`GlobeView`})),rw,iw=e((()=>{xy(),rw=class{static get componentName(){return Object.prototype.hasOwnProperty.call(this,`extensionName`)?this.extensionName:``}constructor(e){e&&(this.opts=e)}equals(e){return this===e||this.constructor===e.constructor&&Y(this.opts,e.opts,1)}getShaders(e){return null}getSubLayerProps(e){let{defaultProps:t}=e.constructor,n={updateTriggers:{}};for(let e in t)if(e in this.props){let r=t[e],i=this.props[e];n[e]=i,r&&r.type===`accessor`&&(n.updateTriggers[e]=this.props.updateTriggers[e],typeof i==`function`&&(n[e]=this.getSubLayerAccessor(i)))}return n}initializeState(e,t){}updateState(e,t){}onNeedsRedraw(e){}getNeedsPickingBuffer(e){return!1}draw(e,t){}finalizeState(e,t){}},rw.defaultProps={},rw.extensionName=`LayerExtension`})),aw,ow=e((()=>{Ex(),og(),qy(),O(),aw=class{constructor(e){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;let{attributes:t={}}=e;this.typedArrayManager=ag,this.attributes={},this._attributeDefs=t,this.opts=e,this.updateGeometry(e)}updateGeometry(e){Object.assign(this.opts,e);let{data:t,buffers:n={},getGeometry:r,geometryBuffer:i,positionFormat:a,dataChanged:o,normalize:s=!0}=this.opts;if(this.data=t,this.getGeometry=r,this.positionSize=i&&i.size||(a===`XY`?2:3),this.buffers=n,this.normalize=s,i&&(X(t.startIndices),this.getGeometry=this.getGeometryFromBuffer(i),s||(n.vertexPositions=i)),this.geometryBuffer=n.vertexPositions,Array.isArray(o))for(let e of o)this._rebuildGeometry(e);else this._rebuildGeometry()}updatePartialGeometry({startRow:e,endRow:t}){this._rebuildGeometry({startRow:e,endRow:t})}getGeometryFromBuffer(e){let t=e.value||e;return ArrayBuffer.isView(t)?Cx(t,{size:this.positionSize,offset:e.offset,stride:e.stride,startIndices:this.data.startIndices}):null}_allocate(e,t){let{attributes:n,buffers:r,_attributeDefs:i,typedArrayManager:a}=this;for(let o in i)if(o in r)a.release(n[o]),n[o]=null;else{let r=i[o];r.copy=t,n[o]=a.allocate(n[o],e,r)}}_forEachGeometry(e,t,n){let{data:r,getGeometry:i}=this,{iterable:a,objectInfo:o}=xx(r,t,n);for(let t of a)o.index++,e(i?i(t,o):null,o.index)}_rebuildGeometry(e){if(!this.data)return;let{indexStarts:t,vertexStarts:n,instanceCount:r}=this,{data:i,geometryBuffer:a}=this,{startRow:o=0,endRow:s=1/0}=e||{},c={};if(e||(t=[0],n=[0]),this.normalize||!a)this._forEachGeometry((e,t)=>{let r=e&&this.normalizeGeometry(e);c[t]=r,n[t+1]=n[t]+(r?this.getGeometrySize(r):0)},o,s),r=n[n.length-1];else if(n=i.startIndices,r=n[i.length]||0,ArrayBuffer.isView(a))r||=a.length/this.positionSize;else if(a instanceof f){let e=this.positionSize*4;r||=a.byteLength/e}else if(a.buffer){let e=a.stride||this.positionSize*4;r||=a.buffer.byteLength/e}else if(a.value){let e=a.value,t=a.stride/e.BYTES_PER_ELEMENT||this.positionSize;r||=e.length/t}this._allocate(r,!!e),this.indexStarts=t,this.vertexStarts=n,this.instanceCount=r;let l={};this._forEachGeometry((e,i)=>{let a=c[i]||e;l.vertexStart=n[i],l.indexStart=t[i];let o=i<n.length-1?n[i+1]:r;l.geometrySize=o-n[i],l.geometryIndex=i,this.updateGeometryAttributes(a,l)},o,s),this.vertexCount=t[t.length-1]}}})),Z=e((()=>{co(),jh(),Up(),rg(),Ih(),Hh(),Bg(),Hg(),p_(),ud(),Yv(),Wh(),Xh(),ey(),ux(),by(),Fx(),bS(),UC(),KC(),Fb(),wg(),Eg(),rb(),U(),uh(),_g(),Ry(),Eb(),mb(),gb(),sb(),nw(),wb(),$C(),iw(),Ky(),Yy(),I(),qy(),Ex(),ow(),fy(),qS(),xy(),Kp(),VS(),nx(),SC(),TC()})),sw,cw,lw=e((()=>{sw=`layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,cw={name:`icon`,vs:sw,fs:sw,uniformTypes:{sizeScale:`f32`,iconsTextureDim:`vec2<f32>`,sizeBasis:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,billboard:`f32`,sizeUnits:`i32`,alphaCutoff:`f32`}}})),uw,dw=e((()=>{uw=`#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`})),fw,pw=e((()=>{fw=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`})),mw,hw=e((()=>{mw=`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instancePickingColors: vec3<f32>,
  @location(7) instanceIconFrames: vec4<f32>,
  @location(8) instanceColorModes: f32,
  @location(9) instanceOffsets: vec2<f32>,
  @location(10) instancePixelOffset: vec2<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = inp.instancePickingColors;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = inp.instancePickingColors;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`}));function gw(e){return 2**Math.ceil(Math.log2(e))}function _w(e,t,n,r){let i=Math.min(n/t.width,r/t.height),a=Math.floor(t.width*i),o=Math.floor(t.height*i);return i===1?{image:t,width:a,height:o}:(e.canvas.height=o,e.canvas.width=a,e.clearRect(0,0,a,o),e.drawImage(t,0,0,t.width,t.height,0,0,a,o),{image:e.canvas,width:a,height:o})}function vw(e){return e&&(e.id||e.url)}function yw(e){let{device:t}=e;t.type===`webgl`?e.generateMipmapsWebGL():t.type===`webgpu`&&t.generateMipmapsWebGPU(e)}function bw(e,t,n,r){let{width:i,height:a,device:o}=e,s=o.createTexture({format:`rgba8unorm`,width:t,height:n,sampler:r,mipLevels:o.getMipLevelCount(t,n)}),c=o.createCommandEncoder();c.copyTextureToTexture({sourceTexture:e,destinationTexture:s,width:i,height:a});let l=c.finish();return o.submit(l),yw(s),e.destroy(),s}function xw(e,t,n){for(let r=0;r<t.length;r++){let{icon:i,xOffset:a}=t[r],o=vw(i);e[o]={...i,x:a,y:n}}}function Sw({icons:e,buffer:t,mapping:n={},xOffset:r=0,yOffset:i=0,rowHeight:a=0,canvasWidth:o}){let s=[];for(let c=0;c<e.length;c++){let l=e[c];if(!n[vw(l)]){let{height:e,width:c}=l;r+c+t>o&&(xw(n,s,i),r=0,i=a+i+t,a=0,s=[]),s.push({icon:l,xOffset:r}),r=r+c+t,a=Math.max(a,e)}}return s.length>0&&xw(n,s,i),{mapping:n,rowHeight:a,xOffset:r,yOffset:i,canvasWidth:o,canvasHeight:gw(a+i+t)}}function Cw(e,t,n){if(!e||!t)return null;n||={};let r={},{iterable:i,objectInfo:a}=xx(e);for(let e of i){a.index++;let i=t(e,a),o=vw(i);if(!i)throw Error(`Icon is missing.`);if(!i.url)throw Error(`Icon url is missing.`);!r[o]&&(!n[o]||i.url!==n[o].url)&&(r[o]={...i,source:e,sourceIndex:a.index})}return r}var ww,Tw,Ew,Dw,Ow,kw,Aw=e((()=>{Qi(),Z(),ww=1024,Tw=4,Ew=()=>{},Dw={minFilter:`linear`,mipmapFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`},Ow={x:0,y:0,width:0,height:0},kw=class{constructor(e,{onUpdate:t=Ew,onError:n=Ew}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=Tw,this._canvasWidth=ww,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=n}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?vw(e):e;return this._mapping[t]||Ow}setProps({loadOptions:e,autoPacking:t,iconAtlas:n,iconMapping:r,textureParameters:i}){e&&(this._loadOptions=e),t!==void 0&&(this._autoPacking=t),r&&(this._mapping=r),n&&(this._texture?.delete(),this._texture=null,this._externalTexture=n),i&&(this._samplerParameters=i)}get isLoaded(){return this._pendingCount===0}packIcons(e,t){if(!this._autoPacking||typeof document>`u`)return;let n=Object.values(Cw(e,t,this._mapping)||{});if(n.length>0){let{mapping:e,xOffset:t,yOffset:r,rowHeight:i,canvasHeight:a}=Sw({icons:n,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=i,this._mapping=e,this._xOffset=t,this._yOffset=r,this._canvasHeight=a,this._texture||=this.device.createTexture({format:`rgba8unorm`,data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||Dw,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)}),this._texture.height!==this._canvasHeight&&(this._texture=bw(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||Dw)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement(`canvas`),this._loadIcons(n)}}_loadIcons(e){let t=this._canvas.getContext(`2d`,{willReadFrequently:!0});for(let n of e)this._pendingCount++,Xi(n.url,this._loadOptions).then(e=>{let r=vw(n),i=this._mapping[r],{x:a,y:o,width:s,height:c}=i,{image:l,width:u,height:d}=_w(t,e,s,c),f=a+(s-u)/2,p=o+(c-d)/2;this._texture?.copyExternalImage({image:l,x:f,y:p,width:u,height:d}),i.x=f,i.y=p,i.width=u,i.height=d,this._texture&&yw(this._texture),this.onUpdate(u!==s||d!==c)}).catch(e=>{this.onError({url:n.url,source:n.source,sourceIndex:n.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}}})),jw,Mw,Nw,Pw=e((()=>{Z(),Yv(),lw(),dw(),pw(),hw(),Aw(),jw=[0,0,0,255],Mw={iconAtlas:{type:`image`,value:null,async:!0},iconMapping:{type:`object`,value:{},async:!0},sizeScale:{type:`number`,value:1,min:0},billboard:!0,sizeUnits:`pixels`,sizeBasis:`height`,sizeMinPixels:{type:`number`,min:0,value:0},sizeMaxPixels:{type:`number`,min:0,value:2**53-1},alphaCutoff:{type:`number`,value:.05,min:0,max:1},getPosition:{type:`accessor`,value:e=>e.position},getIcon:{type:`accessor`,value:e=>e.icon},getColor:{type:`accessor`,value:jw},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},onIconError:{type:`function`,value:null,optional:!0},textureParameters:{type:`object`,ignore:!0,value:null}},Nw=class extends HC{getShaders(){return super.getShaders({vs:uw,fs:fw,source:mw,modules:[Cm,gd,Th,cw]})}initializeState(){this.state={iconManager:new kw(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,accessor:`getSize`,defaultValue:1},instanceIconDefs:{size:7,accessor:`getIcon`,transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,accessor:`getColor`,defaultValue:jw},instanceAngles:{size:1,transition:!0,accessor:`getAngle`},instancePixelOffset:{size:2,transition:!0,accessor:`getPixelOffset`}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager(),{iconAtlas:a,iconMapping:o,data:s,getIcon:c,textureParameters:l}=t,{iconManager:u}=this.state;if(typeof a==`string`)return;let d=a||this.internalState.isAsyncPropLoading(`iconAtlas`);u.setProps({loadOptions:t.loadOptions,autoPacking:!d,iconAtlas:a,iconMapping:d?o:null,textureParameters:l}),d?n.iconMapping!==t.iconMapping&&i.invalidate(`getIcon`):(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getIcon))&&u.packIcons(s,c),r.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),i.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){let{sizeScale:t,sizeBasis:n,sizeMinPixels:r,sizeMaxPixels:i,sizeUnits:a,billboard:o,alphaCutoff:s}=this.props,{iconManager:c}=this.state,l=c.getTexture();if(l){let e=this.state.model,c={iconsTexture:l,iconsTextureDim:[l.width,l.height],sizeUnits:Bp[a],sizeScale:t,sizeBasis:+(n===`height`),sizeMinPixels:r,sizeMaxPixels:i,billboard:o,alphaCutoff:s};e.shaderInputs.setProps({icon:c}),e.draw(this.context.renderPass)}}_getModel(){let e=[-1,-1,1,-1,-1,1,1,1];return new Uv(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new qv({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate(`getIcon`),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):F.error(e.error.message)()}getInstanceIconDef(e){let{x:t,y:n,width:r,height:i,mask:a,anchorX:o=r/2,anchorY:s=i/2}=this.state.iconManager.getIconMapping(e);return[r/2-o,i/2-s,t,n,r,i,+!!a]}},Nw.defaultProps=Mw,Nw.layerName=`IconLayer`})),Fw,Iw,Lw=e((()=>{Fw=`layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,Iw={name:`scatterplot`,vs:Fw,fs:Fw,source:``,uniformTypes:{radiusScale:`f32`,radiusMinPixels:`f32`,radiusMaxPixels:`f32`,lineWidthScale:`f32`,lineWidthMinPixels:`f32`,lineWidthMaxPixels:`f32`,stroked:`f32`,filled:`f32`,antialiasing:`f32`,billboard:`f32`,radiusUnits:`i32`,lineWidthUnits:`i32`}}})),Rw,zw=e((()=>{Rw=`#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = instancePickingColors;
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`})),Bw,Vw=e((()=>{Bw=`#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`})),Hw,Uw=e((()=>{Hw=`// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

struct ConstantAttributeUniforms {
 instancePositions: vec3<f32>,
 instancePositions64Low: vec3<f32>,
 instanceRadius: f32,
 instanceLineWidths: f32,
 instanceFillColors: vec4<f32>,
 instanceLineColors: vec4<f32>,
 instancePickingColors: vec3<f32>,
 instancePixelOffset: vec2<f32>,

 instancePositionsConstant: i32,
 instancePositions64LowConstant: i32,
 instanceRadiusConstant: i32,
 instanceLineWidthsConstant: i32,
 instanceFillColorsConstant: i32,
 instanceLineColorsConstant: i32,
 instancePickingColorsConstant: i32,
 instancePixelOffsetConstant: i32
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct ConstantAttributes {
  instancePositions: vec3<f32>,
  instancePositions64Low: vec3<f32>,
  instanceRadius: f32,
  instanceLineWidths: f32,
  instanceFillColors: vec4<f32>,
  instanceLineColors: vec4<f32>,
  instancePickingColors: vec3<f32>,
  instancePixelOffset: vec2<f32>
};

const constants = ConstantAttributes(
  vec3<f32>(0.0),
  vec3<f32>(0.0),
  0.0,
  0.0,
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec3<f32>(0.0),
  vec2<f32>(0.0)
);

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePickingColors: vec3<f32>,
  @location(8) instancePixelOffset: vec2<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  let edgePadding = select(
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    1.0,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = attributes.instancePickingColors;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, vec3<f32>(0.0)); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, offset); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = attributes.instancePickingColors;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    step(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`})),Ww,Gw,Kw,qw=e((()=>{Z(),Yv(),Lw(),zw(),Vw(),Uw(),Ww=[0,0,0,255],Gw={radiusUnits:`meters`,radiusScale:{type:`number`,min:0,value:1},radiusMinPixels:{type:`number`,min:0,value:0},radiusMaxPixels:{type:`number`,min:0,value:2**53-1},lineWidthUnits:`meters`,lineWidthScale:{type:`number`,min:0,value:1},lineWidthMinPixels:{type:`number`,min:0,value:0},lineWidthMaxPixels:{type:`number`,min:0,value:2**53-1},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:`accessor`,value:e=>e.position},getRadius:{type:`accessor`,value:1},getFillColor:{type:`accessor`,value:Ww},getLineColor:{type:`accessor`,value:Ww},getLineWidth:{type:`accessor`,value:1},getPixelOffset:{type:`accessor`,value:[0,0]},strokeWidth:{deprecatedFor:`getLineWidth`},outline:{deprecatedFor:`stroked`},getColor:{deprecatedFor:[`getFillColor`,`getLineColor`]}},Kw=class extends HC{getShaders(){return super.getShaders({vs:Rw,fs:Bw,source:Hw,modules:[Cm,gd,Th,Iw]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceRadius:{size:1,transition:!0,accessor:`getRadius`,defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:`getLineWidth`,defaultValue:1},instancePixelOffset:{size:2,transition:!0,accessor:`getPixelOffset`}})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,stroked:a,filled:o,billboard:s,antialiasing:c,lineWidthUnits:l,lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f}=this.props,p={stroked:a,filled:o,billboard:s,antialiasing:c,radiusUnits:Bp[t],radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,lineWidthUnits:Bp[l],lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f},m=this.state.model;m.shaderInputs.setProps({scatterplot:p}),m.draw(this.context.renderPass)}_getModel(){let e=[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return new Uv(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new qv({topology:`triangle-strip`,attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}},Kw.defaultProps=Gw,Kw.layerName=`ScatterplotLayer`}));function Jw(e,t,n={}){return Yw(e,n)===t?!1:(Zw(e,n),!0)}function Yw(e,t={}){return Math.sign(Xw(e,t))}function Xw(e,t={}){let{start:n=0,end:r=e.length,plane:i=`xy`}=t,a=t.size||2,o=0,s=$w[i[0]],c=$w[i[1]];for(let t=n,i=r-a;t<r;t+=a)o+=(e[t+s]-e[i+s])*(e[t+c]+e[i+c]),i=t;return o/2}function Zw(e,t){let{start:n=0,end:r=e.length,size:i=2}=t,a=(r-n)/i,o=Math.floor(a/2);for(let t=0;t<o;++t){let r=n+t*i,o=n+(a-1-t)*i;for(let t=0;t<i;++t){let n=e[r+t];e[r+t]=e[o+t],e[o+t]=n}}}var Qw,$w,eT=e((()=>{Qw={CLOCKWISE:1,COUNTER_CLOCKWISE:-1},$w={x:0,y:1,z:2}}));function tT(e,t){let n=t.length,r=e.length;if(r>0){let i=!0;for(let a=0;a<n;a++)if(e[r-n+a]!==t[a]){i=!1;break}if(i)return!1}for(let i=0;i<n;i++)e[r+i]=t[i];return!0}function nT(e,t){let n=t.length;for(let r=0;r<n;r++)e[r]=t[r]}function rT(e,t,n,r,i=[]){let a=r+t*n;for(let t=0;t<n;t++)i[t]=e[a+t];return i}var iT=e((()=>{}));function aT(e,t,n,r,i=[]){let a,o;if(n&8)a=(r[3]-e[1])/(t[1]-e[1]),o=3;else if(n&4)a=(r[1]-e[1])/(t[1]-e[1]),o=1;else if(n&2)a=(r[2]-e[0])/(t[0]-e[0]),o=2;else if(n&1)a=(r[0]-e[0])/(t[0]-e[0]),o=0;else return null;for(let n=0;n<e.length;n++)i[n]=(o&1)===n?r[o]:a*(t[n]-e[n])+e[n];return i}function oT(e,t){let n=0;return e[0]<t[0]?n|=1:e[0]>t[2]&&(n|=2),e[1]<t[1]?n|=4:e[1]>t[3]&&(n|=8),n}var sT=e((()=>{}));function cT(e,t){let{size:n=2,broken:r=!1,gridResolution:i=10,gridOffset:a=[0,0],startIndex:o=0,endIndex:s=e.length}=t||{},c=(s-o)/n,l=[],u=[l],d=rT(e,0,n,o),f,p,m=dT(d,i,a,[]),h=[];tT(l,d);for(let t=1;t<c;t++){for(f=rT(e,t,n,o,f),p=oT(f,m);p;){aT(d,f,p,m,h);let e=oT(h,m);e&&(aT(d,h,e,m,h),p=e),tT(l,h),nT(d,h),fT(m,i,p),r&&l.length>n&&(l=[],u.push(l),tT(l,d)),p=oT(f,m)}tT(l,f),nT(d,f)}return r?u:u[0]}function lT(e,t=null,n){if(!e.length)return[];let{size:r=2,gridResolution:i=10,gridOffset:a=[0,0],edgeTypes:o=!1}=n||{},s=[],c=[{pos:e,types:o?Array(e.length/r).fill(gT):null,holes:t||[]}],l=[[],[]],u=[];for(;c.length;){let{pos:e,types:t,holes:n}=c.shift();pT(e,r,n[0]||e.length,l),u=dT(l[0],i,a,u);let d=oT(l[1],u);if(d){let i=uT(e,t,r,0,n[0]||e.length,u,d),a={pos:i[0].pos,types:i[0].types,holes:[]},s={pos:i[1].pos,types:i[1].types,holes:[]};c.push(a,s);for(let c=0;c<n.length;c++)i=uT(e,t,r,n[c],n[c+1]||e.length,u,d),i[0]&&(a.holes.push(a.pos.length),a.pos=mT(a.pos,i[0].pos),o&&(a.types=mT(a.types,i[0].types))),i[1]&&(s.holes.push(s.pos.length),s.pos=mT(s.pos,i[1].pos),o&&(s.types=mT(s.types,i[1].types)))}else{let r={positions:e};o&&(r.edgeTypes=t),n.length&&(r.holeIndices=n),s.push(r)}}return s}function uT(e,t,n,r,i,a,o){let s=(i-r)/n,c=[],l=[],u=[],d=[],f=[],p,m,h,g=rT(e,s-1,n,r),_=Math.sign(o&8?g[1]-a[3]:g[0]-a[2]),v=t&&t[s-1],y=0,b=0;for(let i=0;i<s;i++)p=rT(e,i,n,r,p),m=Math.sign(o&8?p[1]-a[3]:p[0]-a[2]),h=t&&t[r/n+i],m&&_&&_!==m&&(aT(g,p,o,a,f),tT(c,f)&&u.push(v),tT(l,f)&&d.push(v)),m<=0?(tT(c,p)&&u.push(h),y-=m):u.length&&(u[u.length-1]=hT),m>=0?(tT(l,p)&&d.push(h),b+=m):d.length&&(d[d.length-1]=hT),nT(g,p),_=m,v=h;return[y?{pos:c,types:t&&u}:null,b?{pos:l,types:t&&d}:null]}function dT(e,t,n,r){let i=Math.floor((e[0]-n[0])/t)*t+n[0],a=Math.floor((e[1]-n[1])/t)*t+n[1];return r[0]=i,r[1]=a,r[2]=i+t,r[3]=a+t,r}function fT(e,t,n){n&8?(e[1]+=t,e[3]+=t):n&4?(e[1]-=t,e[3]-=t):n&2?(e[0]+=t,e[2]+=t):n&1&&(e[0]-=t,e[2]-=t)}function pT(e,t,n,r){let i=1/0,a=-1/0,o=1/0,s=-1/0;for(let r=0;r<n;r+=t){let t=e[r],n=e[r+1];i=t<i?t:i,a=t>a?t:a,o=n<o?n:o,s=n>s?n:s}return r[0][0]=i,r[0][1]=o,r[1][0]=a,r[1][1]=s,r}function mT(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}var hT,gT,_T=e((()=>{sT(),iT(),hT=0,gT=1}));function vT(e,t){let{size:n=2,startIndex:r=0,endIndex:i=e.length,normalize:a=!0}=t||{},o=e.slice(r,i);ST(o,n,0,i-r);let s=cT(o,{size:n,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(a)for(let e of s)CT(e,n);return s}function yT(e,t=null,n){let{size:r=2,normalize:i=!0,edgeTypes:a=!1}=n||{};t||=[];let o=[],s=[],c=0,l=0;for(let i=0;i<=t.length;i++){let a=t[i]||e.length,u=l,d=bT(e,r,c,a);for(let t=d;t<a;t++)o[l++]=e[t];for(let t=c;t<d;t++)o[l++]=e[t];ST(o,r,u,l),xT(o,r,u,l,n?.maxLatitude),c=a,s[i]=l}s.pop();let u=lT(o,s,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:a});if(i)for(let e of u)CT(e.positions,r);return u}function bT(e,t,n,r){let i=-1,a=-1;for(let o=n+1;o<r;o+=t){let t=Math.abs(e[o]);t>i&&(i=t,a=o-1)}return a}function xT(e,t,n,r,i=wT){let a=e[n],o=e[r-t];if(Math.abs(a-o)>180){let r=rT(e,0,t,n);r[0]+=Math.round((o-a)/360)*360,tT(e,r),r[1]=Math.sign(r[1])*i,tT(e,r),r[0]=a,tT(e,r)}}function ST(e,t,n,r){let i=e[0],a;for(let o=n;o<r;o+=t){a=e[o];let t=a-i;(t>180||t<-180)&&(a-=Math.round(t/360)*360),e[o]=i=a}}function CT(e,t){let n,r=e.length/t;for(let i=0;i<r&&(n=e[i*t],(n+180)%360==0);i++);let i=-Math.round(n/360)*360;if(i!==0)for(let n=0;n<r;n++)e[n*t]+=i}var wT,TT=e((()=>{_T(),iT(),wT=85.051129})),ET=e((()=>{U(),eT(),sT(),_T(),TT()}));function DT(e,t,n,r){let i;if(Array.isArray(e[0])){let n=e.length*t;i=Array(n);for(let n=0;n<e.length;n++)for(let r=0;r<t;r++)i[n*t+r]=e[n][r]||0}else i=e;return n?cT(i,{size:t,gridResolution:n}):r?vT(i,{size:t}):i}var OT=e((()=>{ET()}));function kT(e){return Array.isArray(e[0])}var AT,jT,MT,NT,PT=e((()=>{Z(),OT(),AT=1,jT=2,MT=4,NT=class extends aw{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getGeometryFromBuffer(e){return this.normalize?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?DT(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(kT(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}let t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(t.geometrySize!==0)if(e&&kT(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}_updateSegmentTypes(e,t){let n=this.attributes.segmentTypes,r=e?this.isClosed(e):!1,{vertexStart:i,geometrySize:a}=t;n.fill(0,i,i+a),r?(n[i]=MT,n[i+a-2]=MT):(n[i]+=AT,n[i+a-2]+=jT),n[i+a-1]=MT}_updatePositions(e,t){let{positions:n}=this.attributes;if(!n||!e)return;let{vertexStart:r,geometrySize:i}=t,a=[,,,];for(let t=r,o=0;o<i;t++,o++)this.getPointOnPath(e,o,a),n[t*3]=a[0],n[t*3+1]=a[1],n[t*3+2]=a[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,n=[]){let{positionSize:r}=this;t*r>=e.length&&(t+=1-e.length/r);let i=t*r;return n[0]=e[i],n[1]=e[i+1],n[2]=r===3&&e[i+2]||0,n}isClosed(e){if(!this.normalize)return!!this.opts.loop;let{positionSize:t}=this,n=e.length-t;return e[0]===e[n]&&e[1]===e[n+1]&&(t===2||e[2]===e[n+2])}}})),FT,IT,LT=e((()=>{FT=`layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,IT={name:`path`,vs:FT,fs:FT,uniformTypes:{widthScale:`f32`,widthMinPixels:`f32`,widthMaxPixels:`f32`,jointType:`f32`,capType:`f32`,miterLimit:`f32`,billboard:`f32`,widthUnits:`i32`}}})),RT,zT=e((()=>{RT=`#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in vec3 instancePickingColors;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
vPathLength = L;
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
dot(offsetFromStartOfPath, dir)
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
void main() {
geometry.pickingColor = instancePickingColors;
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
);
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`})),BT,VT=e((()=>{BT=`#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`})),HT,UT,WT,GT,KT=e((()=>{Z(),Yv(),PT(),LT(),zT(),VT(),HT=[0,0,0,255],UT={widthUnits:`meters`,widthScale:{type:`number`,min:0,value:1},widthMinPixels:{type:`number`,min:0,value:0},widthMaxPixels:{type:`number`,min:0,value:2**53-1},jointRounded:!1,capRounded:!1,miterLimit:{type:`number`,min:0,value:4},billboard:!1,_pathType:null,getPath:{type:`accessor`,value:e=>e.path},getColor:{type:`accessor`,value:HT},getWidth:{type:`accessor`,value:1},rounded:{deprecatedFor:[`jointRounded`,`capRounded`]}},WT={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e},GT=class extends HC{getShaders(){return super.getShaders({vs:RT,fs:BT,modules:[Cm,Th,IT]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds([`vertexPositions`])}initializeState(){this.getAttributeManager().addInstanced({vertexPositions:{size:3,vertexOffset:1,type:`float64`,fp64:this.use64bitPositions(),transition:WT,accessor:`getPath`,update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:`uint8`,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:`getWidth`,transition:WT,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,accessor:`getColor`,transition:WT,defaultValue:HT},instancePickingColors:{size:4,type:`uint8`,accessor:(e,{index:t,target:n})=>this.encodePickingColor(e&&e.__source?e.__source.index:t,n)}}),this.setState({pathTesselator:new NT({fp64:this.use64bitPositions()})})}updateState(e){super.updateState(e);let{props:t,changeFlags:n}=e,r=this.getAttributeManager();if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPath)){let{pathTesselator:e}=this.state,i=t.data.attributes||{};e.updateGeometry({data:t.data,geometryBuffer:i.getPath,buffers:i,normalize:!t._pathType,loop:t._pathType===`loop`,getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:n.dataChanged}),this.setState({numInstances:e.instanceCount,startIndices:e.vertexStarts}),n.dataChanged||r.invalidateAll()}n.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),r.invalidateAll())}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{jointRounded:t,capRounded:n,billboard:r,miterLimit:i,widthUnits:a,widthScale:o,widthMinPixels:s,widthMaxPixels:c}=this.props,l=this.state.model,u={jointType:Number(t),capType:Number(n),billboard:r,widthUnits:Bp[a],widthScale:o,miterLimit:i,widthMinPixels:s,widthMaxPixels:c};l.shaderInputs.setProps({path:u}),l.draw(this.context.renderPass)}_getModel(){let e=[0,1,2,1,4,2,1,3,4,3,5,4],t=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new Uv(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new qv({topology:`triangle-list`,attributes:{indices:new Uint16Array(e),positions:{value:new Float32Array(t),size:2}}}),isInstanced:!0})}calculatePositions(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`positions`)}calculateSegmentTypes(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`segmentTypes`)}},GT.defaultProps=UT,GT.layerName=`PathLayer`})),qT=n(((e,t)=>{t.exports=n,t.exports.default=n;function n(e,t,n){n||=2;var i=t&&t.length,o=i?t[0]*n:e.length,s=r(e,0,o,n,!0),c=[];if(!s||s.next===s.prev)return c;var l,d,f,p,m,h,g;if(i&&(s=u(e,t,s,n)),e.length>80*n){l=f=e[0],d=p=e[1];for(var _=n;_<o;_+=n)m=e[_],h=e[_+1],m<l&&(l=m),h<d&&(d=h),m>f&&(f=m),h>p&&(p=h);g=Math.max(f-l,p-d),g=g===0?0:32767/g}return a(s,c,n,l,d,g,0),c}function r(e,t,n,r,i){var a,o;if(i===ee(e,t,n,r)>0)for(a=t;a<n;a+=r)o=A(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=A(a,e[a],e[a+1],o);return o&&S(o,o.next)&&(j(o),o=o.next),o}function i(e,t){if(!e)return e;t||=e;var n=e,r;do if(r=!1,!n.steiner&&(S(n,n.next)||x(n.prev,n,n.next)===0)){if(j(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function a(e,t,n,r,u,d,f){if(e){!f&&d&&h(e,r,u,d);for(var p=e,m,g;e.prev!==e.next;){if(m=e.prev,g=e.next,d?s(e,r,u,d):o(e)){t.push(m.i/n|0),t.push(e.i/n|0),t.push(g.i/n|0),j(e),e=g.next,p=g.next;continue}if(e=g,e===p){f?f===1?(e=c(i(e),t,n),a(e,t,n,r,u,d,2)):f===2&&l(e,t,n,r,u,d):a(i(e),t,n,r,u,d,1);break}}}}function o(e){var t=e.prev,n=e,r=e.next;if(x(t,n,r)>=0)return!1;for(var i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&y(i,s,a,c,o,l,m.x,m.y)&&x(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function s(e,t,n,r){var i=e.prev,a=e,o=e.next;if(x(i,a,o)>=0)return!1;for(var s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,v=_(p,m,t,n,r),b=_(h,g,t,n,r),S=e.prevZ,C=e.nextZ;S&&S.z>=v&&C&&C.z<=b;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0||(S=S.prevZ,C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;S&&S.z>=v;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;C&&C.z<=b;){if(C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function c(e,t,n){var r=e;do{var a=r.prev,o=r.next.next;!S(a,o)&&C(a,r,r.next,o)&&D(a,o)&&D(o,a)&&(t.push(a.i/n|0),t.push(r.i/n|0),t.push(o.i/n|0),j(r),j(r.next),r=e=o),r=r.next}while(r!==e);return i(r)}function l(e,t,n,r,o,s){var c=e;do{for(var l=c.next.next;l!==c.prev;){if(c.i!==l.i&&b(c,l)){var u=k(c,l);c=i(c,c.next),u=i(u,u.next),a(c,t,n,r,o,s,0),a(u,t,n,r,o,s,0);return}l=l.next}c=c.next}while(c!==e)}function u(e,t,n,i){var a=[],o,s,c,l,u;for(o=0,s=t.length;o<s;o++)c=t[o]*i,l=o<s-1?t[o+1]*i:e.length,u=r(e,c,l,i,!1),u===u.next&&(u.steiner=!0),a.push(v(u));for(a.sort(d),o=0;o<a.length;o++)n=f(a[o],n);return n}function d(e,t){return e.x-t.x}function f(e,t){var n=p(e,t);if(!n)return t;var r=k(n,e);return i(r,r.next),i(n,n.next)}function p(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var s=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=r&&s>a&&(a=s,o=n.x<n.next.x?n:n.next,s===r))return o}n=n.next}while(n!==t);if(!o)return null;var c=o,l=o.x,u=o.y,d=1/0,f;n=o;do r>=n.x&&n.x>=l&&r!==n.x&&y(i<u?r:a,i,l,u,i<u?a:r,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(r-n.x),D(n,e)&&(f<d||f===d&&(n.x>o.x||n.x===o.x&&m(o,n)))&&(o=n,d=f)),n=n.next;while(n!==c);return o}function m(e,t){return x(e.prev,e,t.prev)<0&&x(t.next,e,e.next)<0}function h(e,t,n,r){var i=e;do i.z===0&&(i.z=_(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,g(i)}function g(e){var t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function _(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function v(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function y(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function b(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!E(e,t)&&(D(e,t)&&D(t,e)&&O(e,t)&&(x(e.prev,e,t.prev)||x(e,t.prev,t))||S(e,t)&&x(e.prev,e,e.next)>0&&x(t.prev,t,t.next)>0)}function x(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function S(e,t){return e.x===t.x&&e.y===t.y}function C(e,t,n,r){var i=T(x(e,t,n)),a=T(x(e,t,r)),o=T(x(n,r,e)),s=T(x(n,r,t));return!!(i!==a&&o!==s||i===0&&w(e,n,t)||a===0&&w(e,r,t)||o===0&&w(n,e,r)||s===0&&w(n,t,r))}function w(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function T(e){return e>0?1:e<0?-1:0}function E(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&C(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function D(e,t){return x(e.prev,e,e.next)<0?x(e,t,e.next)>=0&&x(e,e.prev,t)>=0:x(e,t,e.prev)<0||x(e,e.next,t)<0}function O(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function k(e,t){var n=new M(e.i,e.x,e.y),r=new M(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function A(e,t,n,r){var i=new M(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function j(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function M(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}n.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(ee(e,0,a,n));if(i)for(var s=0,c=t.length;s<c;s++){var l=t[s]*n,u=s<c-1?t[s+1]*n:e.length;o-=Math.abs(ee(e,l,u,n))}var d=0;for(s=0;s<r.length;s+=3){var f=r[s]*n,p=r[s+1]*n,m=r[s+2]*n;d+=Math.abs((e[f]-e[m])*(e[p+1]-e[f+1])-(e[f]-e[p])*(e[m+1]-e[f+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function ee(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n}}));function JT(e){if(e=e&&e.positions||e,!Array.isArray(e)&&!ArrayBuffer.isView(e))throw Error(`invalid polygon`)}function YT(e){return`positions`in e?e.positions:e}function XT(e){return`holeIndices`in e?e.holeIndices:null}function ZT(e){return Array.isArray(e[0])}function QT(e){return e.length>=1&&e[0].length>=2&&Number.isFinite(e[0][0])}function $T(e){let t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function eE(e,t,n,r){for(let i=0;i<t;i++)if(e[n+i]!==e[r-t+i])return!1;return!0}function tE(e,t,n,r,i){let a=t,o=n.length;for(let t=0;t<o;t++)for(let i=0;i<r;i++)e[a++]=n[t][i]||0;if(!$T(n))for(let t=0;t<r;t++)e[a++]=n[0][t]||0;return uE.start=t,uE.end=a,uE.size=r,Jw(e,i,uE),a}function nE(e,t,n,r,i=0,a,o){a||=n.length;let s=a-i;if(s<=0)return t;let c=t;for(let t=0;t<s;t++)e[c++]=n[i+t];if(!eE(n,r,i,a))for(let t=0;t<r;t++)e[c++]=n[i+t];return uE.start=t,uE.end=c,uE.size=r,Jw(e,o,uE),c}function rE(e,t){JT(e);let n=[],r=[];if(`positions`in e){let{positions:i,holeIndices:a}=e;if(a){let e=0;for(let o=0;o<=a.length;o++)e=nE(n,e,i,t,a[o-1],a[o],o===0?cE:lE),r.push(e);return r.pop(),{positions:n,holeIndices:r}}e=i}if(!ZT(e))return nE(n,0,e,t,0,n.length,cE),n;if(!QT(e)){let i=0;for(let[a,o]of e.entries())i=tE(n,i,o,t,a===0?cE:lE),r.push(i);return r.pop(),{positions:n,holeIndices:r}}return tE(n,0,e,t,cE),n}function iE(e,t,n){let r=e.length/3,i=0;for(let a=0;a<r;a++){let o=(a+1)%r;i+=e[a*3+t]*e[o*3+n],i-=e[o*3+t]*e[a*3+n]}return Math.abs(i/2)}function aE(e,t,n,r){let i=e.length/3;for(let a=0;a<i;a++){let i=a*3,o=e[i+0],s=e[i+1],c=e[i+2];e[i+t]=o,e[i+n]=s,e[i+r]=c}}function oE(e,t,n,r){let i=XT(e);i&&=i.map(e=>e/t);let a=YT(e),o=r&&t===3;if(n){let e=a.length;a=a.slice();let r=[];for(let i=0;i<e;i+=t){r[0]=a[i],r[1]=a[i+1],o&&(r[2]=a[i+2]);let e=n(r);a[i]=e[0],a[i+1]=e[1],o&&(a[i+2]=e[2])}}if(o){let e=iE(a,0,1),t=iE(a,0,2),r=iE(a,1,2);if(!e&&!t&&!r)return[];e>t&&e>r||(t>r?(n||(a=a.slice()),aE(a,0,2,1)):(n||(a=a.slice()),aE(a,2,0,1)))}return(0,sE.default)(a,i,t)}var sE,cE,lE,uE,dE=e((()=>{sE=t(qT(),1),ET(),cE=Qw.CLOCKWISE,lE=Qw.COUNTER_CLOCKWISE,uE={isClosed:!0}}));function fE(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}var pE,mE=e((()=>{dE(),Z(),ET(),pE=class extends aw{constructor(e){let{fp64:t,IndexType:n=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:n,size:1}}})}get(e){let{attributes:t}=this;return e===`indices`?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error(`missing indices buffer`)}normalizeGeometry(e){if(this.normalize){let t=rE(e,this.positionSize);return this.opts.resolution?lT(YT(t),XT(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?yT(YT(t),XT(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(fE(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}return YT(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&fE(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else{let n=e;this._updateIndices(n,t),this._updatePositions(n,t),this._updateVertexValid(n,t)}}_updateIndices(e,{geometryIndex:t,vertexStart:n,indexStart:r}){let{attributes:i,indexStarts:a,typedArrayManager:o}=this,s=i.indices;if(!s||!e)return;let c=r,l=oE(e,this.positionSize,this.opts.preproject,this.opts.full3d);s=o.allocate(s,r+l.length,{copy:!0});for(let e=0;e<l.length;e++)s[c++]=l[e]+n;a[t+1]=r+l.length,i.indices=s}_updatePositions(e,{vertexStart:t,geometrySize:n}){let{attributes:{positions:r},positionSize:i}=this;if(!r||!e)return;let a=YT(e);for(let e=t,o=0;o<n;e++,o++){let t=a[o*i],n=a[o*i+1],s=i>2?a[o*i+2]:0;r[e*3]=t,r[e*3+1]=n,r[e*3+2]=s}}_updateVertexValid(e,{vertexStart:t,geometrySize:n}){let{positionSize:r}=this,i=this.attributes.vertexValid,a=e&&XT(e);if(e&&e.edgeTypes?i.set(e.edgeTypes,t):i.fill(1,t,t+n),a)for(let e=0;e<a.length;e++)i[t+a[e]/r-1]=0;i[t+n-1]=0}}})),hE,gE,_E=e((()=>{hE=`layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,gE={name:`solidPolygon`,vs:hE,fs:hE,uniformTypes:{extruded:`f32`,isWireframe:`f32`,elevationScale:`f32`}}})),vE,yE=e((()=>{vE=`in vec4 fillColors;
in vec4 lineColors;
in vec3 pickingColors;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = pickingColors;
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`})),bE,xE=e((()=>{yE(),bE=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${vE}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`})),SE,CE=e((()=>{yE(),SE=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${vE}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`})),wE,TE=e((()=>{wE=`#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`})),EE,DE,OE,kE,AE=e((()=>{Z(),Yv(),mE(),_E(),xE(),CE(),TE(),EE=[0,0,0,255],DE={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:`CW`,_full3d:!1,elevationScale:{type:`number`,min:0,value:1},getPolygon:{type:`accessor`,value:e=>e.polygon},getElevation:{type:`accessor`,value:1e3},getFillColor:{type:`accessor`,value:EE},getLineColor:{type:`accessor`,value:EE},material:!0},OE={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e},kE=class extends HC{getShaders(e){return super.getShaders({vs:e===`top`?bE:SE,fs:wE,defines:{RING_WINDING_ORDER_CW:!this.props._normalize&&this.props._windingOrder===`CCW`?0:1},modules:[Cm,cd,Th,gE]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds([`vertexPositions`])}initializeState(){let{viewport:e}=this.context,{coordinateSystem:t}=this.props,{_full3d:n}=this.props;e.isGeospatial&&t==="default"&&(t=`lnglat`);let r;t===`lnglat`&&(r=n?e.projectPosition.bind(e):e.projectFlat.bind(e)),this.setState({numInstances:0,polygonTesselator:new pE({preproject:r,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let i=this.getAttributeManager();i.remove([`instancePickingColors`]),i.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:`float64`,stepMode:`dynamic`,fp64:this.use64bitPositions(),transition:OE,accessor:`getPolygon`,update:this.calculatePositions,noAlloc:!0,shaderAttributes:{nextVertexPositions:{vertexOffset:1}}},instanceVertexValid:{size:1,type:`uint16`,stepMode:`instance`,update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:`dynamic`,transition:OE,accessor:`getElevation`},fillColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:OE,accessor:`getFillColor`,defaultValue:EE},lineColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:OE,accessor:`getLineColor`,defaultValue:EE},pickingColors:{size:4,type:`uint8`,stepMode:`dynamic`,accessor:(e,{index:t,target:n})=>this.encodePickingColor(e&&e.__source?e.__source.index:t,n)}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:n,wireframe:r,elevationScale:i}=this.props,{topModel:a,sideModel:o,wireframeModel:s,polygonTesselator:c}=this.state,l={extruded:!!t,elevationScale:i,isWireframe:!1};s&&r&&(s.setInstanceCount(c.instanceCount-1),s.shaderInputs.setProps({solidPolygon:{...l,isWireframe:!0}}),s.draw(this.context.renderPass)),o&&n&&(o.setInstanceCount(c.instanceCount-1),o.shaderInputs.setProps({solidPolygon:l}),o.draw(this.context.renderPass)),a&&n&&(a.setVertexCount(c.vertexCount),a.shaderInputs.setProps({solidPolygon:l}),a.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager();(r.extensionsChanged||t.filled!==n.filled||t.extruded!==n.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),i.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:n}){if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,r=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:r.getPolygon,buffers:r,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:n.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),n.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let{id:e,filled:t,extruded:n}=this.props,r,i,a;if(t){let t=this.getShaders(`top`);t.defines.NON_INSTANCED_MODEL=1;let n=this.getAttributeManager().getBufferLayouts({isInstanced:!1});r=new Uv(this.context.device,{...t,id:`${e}-top`,topology:`triangle-list`,bufferLayout:n,isIndexed:!0,userData:{excludeAttributes:{instanceVertexValid:!0}}})}if(n){let t=this.getAttributeManager().getBufferLayouts({isInstanced:!0});i=new Uv(this.context.device,{...this.getShaders(`side`),id:`${e}-side`,bufferLayout:t,geometry:new qv({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),a=new Uv(this.context.device,{...this.getShaders(`side`),id:`${e}-wireframe`,bufferLayout:t,geometry:new qv({topology:`line-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[i,a,r].filter(Boolean),topModel:r,sideModel:i,wireframeModel:a}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get(`indices`)}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`positions`)}calculateVertexValid(e){e.value=this.state.polygonTesselator.get(`vertexValid`)}},kE.defaultProps=DE,kE.layerName=`SolidPolygonLayer`}));function jE({data:e,getIndex:t,dataRange:n,replace:r}){let{startRow:i=0,endRow:a=1/0}=n,o=e.length,s=o,c=o;for(let n=0;n<o;n++){let r=t(e[n]);if(s>n&&r>=i&&(s=n),r>=a){c=n;break}}let l=s,u=c-s===r.length?void 0:e.slice(c);for(let t=0;t<r.length;t++)e[l++]=r[t];if(u){for(let t=0;t<u.length;t++)e[l++]=u[t];e.length=l}return{startRow:s,endRow:s+r.length}}var ME=e((()=>{}));function NE(e,t){if(!e)return null;let n=`startIndices`in e?e.startIndices[t]:t,r=e.featureIds.value[n];return n===-1?null:PE(e,r,n)}function PE(e,t,n){let r={properties:{...e.properties[t]}};for(let t in e.numericProps)r.properties[t]=e.numericProps[t].value[n];return r}function FE(e,t){let n={points:null,lines:null,polygons:null};for(let r in n){let i=e[r].globalFeatureIds.value;n[r]=new Uint8ClampedArray(i.length*4);let a=[];for(let e=0;e<i.length;e++)t(i[e],a),n[r][e*4+0]=a[0],n[r][e*4+1]=a[1],n[r][e*4+2]=a[2],n[r][e*4+3]=255}return n}var IE=e((()=>{})),LE,RE,zE=e((()=>{LE=`layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,RE={name:`sdf`,vs:LE,fs:LE,uniformTypes:{gamma:`f32`,enabled:`f32`,buffer:`f32`,outlineBuffer:`f32`,outlineColor:`vec4<f32>`}}})),BE,VE,HE,UE=e((()=>{BE={none:0,start:1,center:2,end:3},VE=`\
layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${BE.start}
#define ALIGN_MODE_CENTER ${BE.center}
#define ALIGN_MODE_END ${BE.end}
`,HE={name:`text`,vs:VE,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t=`none`,contentAlignVertical:n=`none`,fontSize:r,viewport:i})=>({cutoffPixels:e,align:[BE[t],BE[n]],fontSize:r,flipY:i?.flipY??!1}),uniformTypes:{cutoffPixels:`vec2<f32>`,align:`vec2<i32>`,fontSize:`f32`,flipY:`f32`}}})),WE,GE=e((()=>{WE=`#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`})),KE,qE=e((()=>{KE=`#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`})),JE,YE,XE,ZE=e((()=>{Z(),Pw(),zE(),UE(),GE(),qE(),JE=192/256,YE={getIconOffsets:{type:`accessor`,value:e=>e.offsets},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:`color`,value:[0,0,0,255]},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`},XE=class extends Nw{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,HE,RE],vs:WE,fs:KE}}initializeState(){super.initializeState();let e=this.getAttributeManager(),t=e.attributes.instanceIconDefs;t.settings.update=this.calculateInstanceIconDefs,e.addInstanced({instancePickingColors:{type:`uint8`,size:4,accessor:(e,{index:t,target:n})=>this.encodePickingColor(t,n)},instanceClipRect:{size:4,accessor:`getContentBox`,defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,{outlineColor:i}=t;if(r.updateTriggersChanged&&(r.updateTriggersChanged.getIcon||r.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate(`instanceIconDefs`),i!==n.outlineColor){let e=[i[0]/255,i[1]/255,i[2]/255,(i[3]??255)/255];this.setState({outlineColor:e})}!t.sdf&&t.outlineWidth&&F.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:t,smoothing:n,fontSize:r,outlineWidth:i,contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s}=this.props,{outlineColor:c}=this.state,l=i?Math.max(n,JE*(1-i)):-1,u=this.state.model,d={buffer:JE,outlineBuffer:l,gamma:n,enabled:!!t,outlineColor:c},f={contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s,fontSize:r,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:d,text:f}),super.draw(e),t&&i){let{iconManager:e}=this.state;e.getTexture()&&(u.shaderInputs.setProps({sdf:{...d,outlineBuffer:JE}}),u.draw(this.context.renderPass))}}calculateInstanceIconDefs(e,{startRow:t,endRow:n}){let{data:r,getIcon:i,getIconOffsets:a}=this.props,o=e.getVertexOffset(t),s=e.value,{iterable:c,objectInfo:l}=xx(r,t,n);for(let t of c){l.index++;let n=i(t,l),r=a(t,l);if(n){let t=0;for(let i of Array.from(n)){let n=super.getInstanceIconDef(i);n[0]=r[t*2],n[1]+=r[t*2+1],n[6]=1,s.set(n,o),o+=e.size,t++}}}}},XE.defaultProps=YE,XE.layerName=`MultiIconLayer`}));function QE(e,t,n,r,i,a,o,s,c){for(let l=t;l<t+r;l++)$E(e,n*a+l,a,i,o,s,c);for(let l=n;l<n+i;l++)$E(e,l*a+t,1,r,o,s,c)}function $E(e,t,n,r,i,a,o){a[0]=0,o[0]=-0x56bc75e2d63100000,o[1]=eD,i[0]=e[t];for(let s=1,c=0,l=0;s<r;s++){i[s]=e[t+s*n];let r=s*s;do{let e=a[c];l=(i[s]-i[e]+r-e*e)/(s-e)/2}while(l<=o[c]&&--c>-1);c++,a[c]=s,o[c]=l,o[c+1]=eD}for(let s=0,c=0;s<r;s++){for(;o[c+1]<s;)c++;let r=a[c],l=s-r;e[t+s*n]=i[r]+l*l}}var eD,tD,nD,rD=e((()=>{eD=0x56bc75e2d63100000,tD=new Float64Array(256);for(let e=0;e<256;e++){let t=.5-(e/255)**(1/2.2);tD[e]=t*Math.abs(t)}tD[255]=-0x56bc75e2d63100000,nD=class{constructor({fontSize:e=24,buffer:t=3,radius:n=8,cutoff:r=.25,fontFamily:i=`sans-serif`,fontWeight:a=`normal`,fontStyle:o=`normal`,lang:s=null}={}){this.buffer=t,this.radius=n,this.cutoff=r,this.lang=s;let c=this.size=e+t*4,l=this._createCanvas(c),u=this.ctx=l.getContext(`2d`,{willReadFrequently:!0});u.font=`${o} ${a} ${e}px ${i}`,u.textBaseline=`alphabetic`,u.textAlign=`left`,u.fillStyle=`black`,this.gridOuter=new Float64Array(c*c),this.gridInner=new Float64Array(c*c),this.f=new Float64Array(c),this.z=new Float64Array(c+1),this.v=new Uint16Array(c)}_createCanvas(e){if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(e,e);let t=document.createElement(`canvas`);return t.width=t.height=e,t}draw(e){let{width:t,actualBoundingBoxAscent:n,actualBoundingBoxDescent:r,actualBoundingBoxLeft:i,actualBoundingBoxRight:a}=this.ctx.measureText(e),o=Math.ceil(n),s=Math.floor(-i),c=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(a)-s)),l=Math.max(0,Math.min(this.size-this.buffer,o+Math.ceil(r))),u=c+2*this.buffer,d=l+2*this.buffer,f=Math.max(u*d,0),p=new Uint8ClampedArray(f),m={data:p,width:u,height:d,glyphWidth:c,glyphHeight:l,glyphTop:o,glyphLeft:s,glyphAdvance:t};if(c===0||l===0)return m;let{ctx:h,buffer:g,gridInner:_,gridOuter:v}=this;this.lang&&(h.lang=this.lang),h.clearRect(g,g,c,l),h.fillText(e,g-s,g+o);let y=h.getImageData(g,g,c,l);v.fill(eD,0,f),_.fill(0,0,f);let b=3;for(let e=0;e<l;e++){let t=(e+g)*u+g;for(let e=0;e<c;e++,b+=4,t++){let e=y.data[b];if(e===0)continue;let n=tD[e];v[t]=Math.max(0,n),_[t]=Math.max(0,-n)}}QE(v,0,0,u,d,u,this.f,this.v,this.z);let x=Math.min(g,1);QE(_,g-x,g-x,c+2*x,l+2*x,u,this.f,this.v,this.z);let S=255/this.radius,C=255*(1-this.cutoff);for(let e=0;e<f;e++){let t=Math.sqrt(v[e])-Math.sqrt(_[e]);p[e]=Math.round(C-S*t)}return m}}}));function iD(e){return 2**Math.ceil(Math.log2(e))}function aD({characterSet:e,measureText:t,buffer:n,maxCanvasWidth:r,mapping:i={},xOffset:a=0,yOffsetMin:o=0,yOffsetMax:s=0}){let c=a,l=o,u=s;for(let a of e)if(!i[a]){let{advance:e,width:o,ascent:s,descent:d}=t(a),f=s+d;c+o+n*2>r&&(c=0,l=u),i[a]={x:c+n,y:l+n,width:o,height:f,advance:e,anchorX:o/2,anchorY:s},c+=o+n*2,u=Math.max(u,l+f+n*2)}return{mapping:i,xOffset:c,yOffsetMin:l,yOffsetMax:u,canvasHeight:iD(u)}}function oD(e,t,n,r){let i=0;for(let a=t;a<n;a++){let t=e[a];i+=r[t]?.advance||0}return i}function sD(e,t,n,r,i,a){let o=t,s=0;for(let c=t;c<n;c++){let t=oD(e,c,c+1,i);s+t>r&&(o<c&&a.push(c),o=c,s=0),s+=t}return s}function cD(e,t,n,r,i,a){let o=t,s=t,c=t,l=0;for(let u=t;u<n;u++)if((e[u]===` `||e[u+1]===` `||u+1===n)&&(c=u+1),c>s){let t=oD(e,s,c,i);l+t>r&&(o<s&&(a.push(s),o=s,l=0),t>r&&(t=sD(e,s,c,r,i,a),o=a[a.length-1])),s=c,l+=t}return l}function lD(e,t,n,r,i=0,a){a===void 0&&(a=e.length);let o=[];return t===`break-all`?sD(e,i,a,n,r,o):cD(e,i,a,n,r,o),o}function uD(e,t,n,r,i,a){let o=0,s=0;for(let i=t;i<n;i++){let t=r[e[i]];t&&(s=Math.max(s,t.height))}for(let a=t;a<n;a++){let t=e[a],n=r[t];n?(i[a]=o+n.anchorX,o+=n.advance):(F.warn(`Missing character: ${t} (${t.codePointAt(0)})`)(),i[a]=o,o+=pD)}a[0]=o,a[1]=s}function dD(e,t,n,r,i,a){let o=Array.from(e),s=o.length,c=Array(s),l=Array(s),u=Array(s),d=(r===`break-word`||r===`break-all`)&&isFinite(i)&&i>0,f=[0,0],p=[0,0],m=0,h=t+n/2,g=0,_=0;for(let e=0;e<=s;e++){let t=o[e];if((t===`
`||e===s)&&(_=e),_>g){let e=d?lD(o,r,i,a,g,_):mD;for(let t=0;t<=e.length;t++){let r=t===0?g:e[t-1],i=t<e.length?e[t]:_;uD(o,r,i,a,c,p);for(let e=r;e<i;e++)l[e]=h,u[e]=p[0];m++,h+=n,f[0]=Math.max(f[0],p[0])}g=_}t===`
`&&(c[g]=0,l[g]=0,u[g]=0,g++)}return f[1]=m*n,{x:c,y:l,rowWidth:u,size:f}}function fD({value:e,length:t,stride:n,offset:r,startIndices:i,characterSet:a}){let o=e.BYTES_PER_ELEMENT,s=n?n/o:1,c=r?r/o:0,l=i[t]||Math.ceil((e.length-c)/s),u=a&&new Set,d=Array(t),f=e;if(s>1||c>0){let t=e.constructor;f=new t(l);for(let t=0;t<l;t++)f[t]=e[t*s+c]}for(let e=0;e<t;e++){let t=i[e],n=i[e+1]||l,r=f.subarray(t,n);d[e]=String.fromCodePoint.apply(null,r),u&&r.forEach(u.add,u)}if(u)for(let e of u)a.add(String.fromCodePoint(e));return{texts:d,characterCount:l}}var pD,mD,hD=e((()=>{Z(),pD=32,mD=[]})),gD,_D=e((()=>{gD=class{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?(this.delete(e),this._cache[e]=t,this._appendOrder(e)):(Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e))}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}}}));function vD(){let e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}function yD(e,t){let n;n=typeof t==`string`?new Set(Array.from(t)):new Set(t);let r=AD.get(e);if(!r)return n;for(let e in r.mapping)n.has(e)&&n.delete(e);return n}function bD(e,t){for(let n=0;n<e.length;n++)t.data[4*n+3]=e[n]}function xD(e,t,n,r){e.font=`${r} ${n}px ${t}`,e.fillStyle=`#000`,e.textBaseline=`alphabetic`,e.textAlign=`left`}function SD(e,t,n){if(n===void 0){let n=e.measureText(`A`);return n.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(n.fontBoundingBoxAscent),descent:Math.ceil(n.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:t*DD,descent:t*OD}}let r=e.measureText(n);return r.actualBoundingBoxAscent?{advance:r.width,width:Math.ceil(r.actualBoundingBoxRight-r.actualBoundingBoxLeft),ascent:Math.ceil(r.actualBoundingBoxAscent),descent:Math.ceil(r.actualBoundingBoxDescent)}:{advance:r.width,width:r.width,ascent:t*DD,descent:t*OD}}function CD(e){F.assert(Number.isFinite(e)&&e>=kD,`Invalid cache limit`),AD=new gD(e)}function wD({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:a}){let o=new nD({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:`${a}`});return e=>{let{data:n,width:r,height:i}=o.draw(e),a=new ImageData(r,i);return bD(n,a),{data:a,left:t,top:t}}}var TD,ED,DD,OD,kD,AD,jD,MD=e((()=>{rD(),Z(),hD(),_D(),TD={fontFamily:`Monaco, monospace`,fontWeight:`normal`,characterSet:vD(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},ED=1024,DD=.9,OD=.3,kD=3,AD=new gD(kD),jD=class{constructor(){this.props={...TD}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let t=yD(this._key,this.props.characterSet),n=AD.get(this._key);if(n&&t.size===0){this._atlas!==n&&(this._atlas=n);return}let r=this._generateFontAtlas(t,n);this._atlas=r,AD.set(this._key,r)}_generateFontAtlas(e,t){let{fontFamily:n,fontWeight:r,fontSize:i,buffer:a,sdf:o,radius:s,cutoff:c}=this.props,l=t&&t.data;l||(l=document.createElement(`canvas`),l.width=ED);let u=l.getContext(`2d`,{willReadFrequently:!0});xD(u,n,i,r);let d=e=>SD(u,i,e),f;this._getFontRenderer?f=this._getFontRenderer(this.props):o&&(f={measure:d,draw:wD(this.props)});let{mapping:p,canvasHeight:m,xOffset:h,yOffsetMin:g,yOffsetMax:_}=aD({measureText:e=>f?f.measure(e):d(e),buffer:a,characterSet:e,maxCanvasWidth:ED,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(l.height!==m){let e=l.height>0?u.getImageData(0,0,l.width,l.height):null;l.height=m,e&&u.putImageData(e,0,0)}if(xD(u,n,i,r),f)for(let t of e){let e=p[t],{data:n,left:r=0,top:i=0}=f.draw(t),a=e.x-r,o=e.y-i,s=Math.max(0,Math.round(a)),c=Math.max(0,Math.round(o)),d=Math.min(n.width,l.width-s),m=Math.min(n.height,l.height-c);u.putImageData(n,s,c,0,0,d,m),e.x+=s-a,e.y+=c-o}else for(let t of e){let e=p[t];u.fillText(t,e.x,e.y+e.anchorY)}let v=f?f.measure():d();return{baselineOffset:(v.ascent-v.descent)/2,xOffset:h,yOffsetMin:g,yOffsetMax:_,mapping:p,data:l,width:l.width,height:l.height}}_getKey(){let{fontFamily:e,fontWeight:t,fontSize:n,buffer:r,sdf:i,radius:a,cutoff:o}=this.props;return i?`${e} ${t} ${n} ${r} ${a} ${o}`:`${e} ${t} ${n} ${r}`}}})),ND,PD,FD=e((()=>{ND=`layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,PD={name:`textBackground`,vs:ND,fs:ND,uniformTypes:{billboard:`f32`,sizeScale:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,borderRadius:`vec4<f32>`,padding:`vec4<f32>`,sizeUnits:`i32`,stroked:`f32`}}})),ID,LD=e((()=>{ID=`#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`})),RD,zD=e((()=>{RD=`#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`})),BD,VD,HD=e((()=>{Z(),Yv(),FD(),UE(),LD(),zD(),BD={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,fontSize:1,borderRadius:{type:`object`,value:0},padding:{type:`array`,value:[0,0,0,0]},getPosition:{type:`accessor`,value:e=>e.position},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},getBoundingRect:{type:`accessor`,value:[0,0,0,0]},getClipRect:{type:`accessor`,value:[0,0,-1,-1]},getFillColor:{type:`accessor`,value:[0,0,0,255]},getLineColor:{type:`accessor`,value:[0,0,0,255]},getLineWidth:{type:`accessor`,value:1}},VD=class extends HC{getShaders(){return super.getShaders({vs:ID,fs:RD,modules:[Cm,Th,PD,HE]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,accessor:`getSize`,defaultValue:1},instanceAngles:{size:1,transition:!0,accessor:`getAngle`},instanceRects:{size:4,accessor:`getBoundingRect`},instanceClipRect:{size:4,accessor:`getClipRect`,defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,accessor:`getPixelOffset`},instanceFillColors:{size:4,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:`getLineWidth`,defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:t,sizeScale:n,sizeUnits:r,sizeMinPixels:i,sizeMaxPixels:a,getLineWidth:o,fontSize:s}=this.props,{padding:c,borderRadius:l}=this.props;c.length<4&&(c=[c[0],c[1],c[0],c[1]]),Array.isArray(l)||(l=[l,l,l,l]);let u=this.state.model,d={billboard:t,stroked:!!o,borderRadius:l,padding:c,sizeUnits:Bp[r],sizeScale:n,sizeMinPixels:i,sizeMaxPixels:a},f={fontSize:s,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:d,text:f}),u.draw(this.context.renderPass)}_getModel(){let e=[0,0,1,0,0,1,1,1];return new Uv(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new qv({topology:`triangle-strip`,vertexCount:4,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}},VD.defaultProps=BD,VD.layerName=`TextBackgroundLayer`})),UD,WD,GD,KD,qD,JD=e((()=>{Z(),ZE(),MD(),hD(),HD(),UD={start:1,middle:0,end:-1},WD={top:1,center:0,bottom:-1},GD=[0,0,0,255],KD={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,background:!1,getBackgroundColor:{type:`accessor`,value:[255,255,255,255]},getBorderColor:{type:`accessor`,value:GD},getBorderWidth:{type:`accessor`,value:0},backgroundBorderRadius:{type:`object`,value:0},backgroundPadding:{type:`array`,value:[0,0,0,0]},characterSet:{type:`object`,value:TD.characterSet},fontFamily:TD.fontFamily,fontWeight:TD.fontWeight,lineHeight:1,outlineWidth:{type:`number`,value:0,min:0},outlineColor:{type:`color`,value:GD},fontSettings:{type:`object`,value:{},compare:1},wordBreak:`break-word`,maxWidth:{type:`number`,value:-1},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`,getText:{type:`accessor`,value:e=>e.text},getPosition:{type:`accessor`,value:e=>e.position},getColor:{type:`accessor`,value:GD},getSize:{type:`accessor`,value:32},getAngle:{type:`accessor`,value:0},getTextAnchor:{type:`accessor`,value:`middle`},getAlignmentBaseline:{type:`accessor`,value:`center`},getPixelOffset:{type:`accessor`,value:[0,0]},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:[`background`,`getBackgroundColor`]}},qD=class extends GC{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{let{size:[n,r]}=this.transformParagraph(e,t),{getTextAnchor:i,getAlignmentBaseline:a}=this.props,o=UD[typeof i==`function`?i(e,t):i],s=WD[typeof a==`function`?a(e,t):a];return[(o-1)*n/2,(s-1)*r/2,n,r]},this.getIconOffsets=(e,t)=>{let{getTextAnchor:n,getAlignmentBaseline:r}=this.props,{x:i,y:a,rowWidth:o,size:[,s]}=this.transformParagraph(e,t),c=UD[typeof n==`function`?n(e,t):n],l=WD[typeof r==`function`?r(e,t):r],u=i.length,d=Array(u*2),f=0;for(let e=0;e<u;e++)d[f++]=(c-1)*o[e]/2+i[e],d[f++]=(l-1)*s/2+a[e];return d}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new jD},this.props.maxWidth>0&&F.once(1,`v8.9 breaking change: TextLayer maxWidth is now relative to text size`)()}updateState(e){let{props:t,oldProps:n,changeFlags:r}=e;(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==n.lineHeight||t.wordBreak!==n.wordBreak||t.maxWidth!==n.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:t,fontWeight:n,_getFontRenderer:r}=this.props,{fontAtlasManager:i,characterSet:a}=this.state,o={...e,characterSet:a,fontFamily:t,fontWeight:n,_getFontRenderer:r};if(!i.mapping)return i.setProps(o),!0;for(let e in o)if(o[e]!==i.props[e])return i.setProps(o),!0;return!1}_updateText(){let{data:e,characterSet:t}=this.props,n=e.attributes?.getText,{getText:r}=this.props,i=e.startIndices,a,o=t===`auto`&&new Set;if(n&&i){let{texts:t,characterCount:s}=fD({...ArrayBuffer.isView(n)?{value:n}:n,length:e.length,startIndices:i,characterSet:o});a=s,r=(e,{index:n})=>t[n]}else{let{iterable:t,objectInfo:n}=xx(e);i=[0],a=0;for(let e of t){n.index++;let t=Array.from(r(e,n)||``);o&&t.forEach(o.add,o),a+=t.length,i.push(a)}}this.setState({getText:r,startIndices:i,numInstances:a,characterSet:o||t})}transformParagraph(e,t){let{fontAtlasManager:n}=this.state,r=n.mapping,{baselineOffset:i}=n.atlas,{fontSize:a}=n.props,o=this.state.getText,{wordBreak:s,lineHeight:c,maxWidth:l}=this.props;return dD(o(e,t)||``,i,c*a,s,l*a,r)}renderLayers(){let{startIndices:e,numInstances:t,getText:n,fontAtlasManager:{atlas:r,mapping:i},styleVersion:a}=this.state,{data:o,_dataDiff:s,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getBackgroundColor:p,getBorderColor:m,getBorderWidth:h,getContentBox:g,backgroundBorderRadius:_,backgroundPadding:v,background:y,billboard:b,fontSettings:x,outlineWidth:S,outlineColor:C,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j,updateTriggers:M}=this.props,ee=this.getSubLayerClass(`characters`,XE),N=this.getSubLayerClass(`background`,VD),{fontSize:te}=this.state.fontAtlasManager.props;return[y&&new N({getFillColor:p,getLineColor:m,getLineWidth:h,borderRadius:_,padding:v,getPosition:c,getSize:u,getAngle:d,getPixelOffset:f,getClipRect:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:te,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getSize:j.getSize,getFillColor:j.getBackgroundColor,getLineColor:j.getBorderColor,getLineWidth:j.getBorderWidth,getPixelOffset:j.getPixelOffset}},this.getSubLayerProps({id:`background`,updateTriggers:{getPosition:M.getPosition,getAngle:M.getAngle,getSize:M.getSize,getFillColor:M.getBackgroundColor,getLineColor:M.getBorderColor,getLineWidth:M.getBorderWidth,getPixelOffset:M.getPixelOffset,getBoundingRect:{getText:M.getText,getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o.attributes&&o.attributes.background?{length:o.length,attributes:o.attributes.background}:o,_dataDiff:s,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new ee({sdf:x.sdf,smoothing:Number.isFinite(x.smoothing)?x.smoothing:TD.smoothing,outlineWidth:S/(x.radius||TD.radius),outlineColor:C,iconAtlas:r,iconMapping:i,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getContentBox:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:te,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getColor:j.getColor,getSize:j.getSize,getPixelOffset:j.getPixelOffset,getContentBox:j.getContentBox}},this.getSubLayerProps({id:`characters`,updateTriggers:{all:M.getText,getPosition:M.getPosition,getAngle:M.getAngle,getColor:M.getColor,getSize:M.getSize,getPixelOffset:M.getPixelOffset,getContentBox:M.getContentBox,getIconOffsets:{getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o,_dataDiff:s,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:n})]}static set fontAtlasCacheLimit(e){CD(e)}},qD.defaultProps=KD,qD.layerName=`TextLayer`}));function YD({type:e,props:t}){let n={};for(let r in t)n[r]=e.defaultProps[t[r]];return n}function XD(e,t){let{transitions:n,updateTriggers:r}=e.props,i={updateTriggers:{},transitions:n&&{getPosition:n.geometry}};for(let a in t){let o=t[a],s=e.props[a];a.startsWith(`get`)&&(s=e.getSubLayerAccessor(s),i.updateTriggers[o]=r[a],n&&(i.transitions[o]=n[a])),i[o]=s}return i}var ZD,QD,$D,eO=e((()=>{Pw(),qw(),JD(),KT(),AE(),ZD={circle:{type:Kw,props:{filled:`filled`,stroked:`stroked`,lineWidthMaxPixels:`lineWidthMaxPixels`,lineWidthMinPixels:`lineWidthMinPixels`,lineWidthScale:`lineWidthScale`,lineWidthUnits:`lineWidthUnits`,pointRadiusMaxPixels:`radiusMaxPixels`,pointRadiusMinPixels:`radiusMinPixels`,pointRadiusScale:`radiusScale`,pointRadiusUnits:`radiusUnits`,pointAntialiasing:`antialiasing`,pointBillboard:`billboard`,getFillColor:`getFillColor`,getLineColor:`getLineColor`,getLineWidth:`getLineWidth`,getPointRadius:`getRadius`}},icon:{type:Nw,props:{iconAtlas:`iconAtlas`,iconMapping:`iconMapping`,iconSizeMaxPixels:`sizeMaxPixels`,iconSizeMinPixels:`sizeMinPixels`,iconSizeScale:`sizeScale`,iconSizeUnits:`sizeUnits`,iconAlphaCutoff:`alphaCutoff`,iconBillboard:`billboard`,getIcon:`getIcon`,getIconAngle:`getAngle`,getIconColor:`getColor`,getIconPixelOffset:`getPixelOffset`,getIconSize:`getSize`}},text:{type:qD,props:{textSizeMaxPixels:`sizeMaxPixels`,textSizeMinPixels:`sizeMinPixels`,textSizeScale:`sizeScale`,textSizeUnits:`sizeUnits`,textBackground:`background`,textBackgroundPadding:`backgroundPadding`,textFontFamily:`fontFamily`,textFontWeight:`fontWeight`,textLineHeight:`lineHeight`,textMaxWidth:`maxWidth`,textOutlineColor:`outlineColor`,textOutlineWidth:`outlineWidth`,textWordBreak:`wordBreak`,textCharacterSet:`characterSet`,textBillboard:`billboard`,textFontSettings:`fontSettings`,getText:`getText`,getTextAngle:`getAngle`,getTextColor:`getColor`,getTextPixelOffset:`getPixelOffset`,getTextSize:`getSize`,getTextAnchor:`getTextAnchor`,getTextAlignmentBaseline:`getAlignmentBaseline`,getTextBackgroundColor:`getBackgroundColor`,getTextBorderColor:`getBorderColor`,getTextBorderWidth:`getBorderWidth`}}},QD={type:GT,props:{lineWidthUnits:`widthUnits`,lineWidthScale:`widthScale`,lineWidthMinPixels:`widthMinPixels`,lineWidthMaxPixels:`widthMaxPixels`,lineJointRounded:`jointRounded`,lineCapRounded:`capRounded`,lineMiterLimit:`miterLimit`,lineBillboard:`billboard`,getLineColor:`getColor`,getLineWidth:`getWidth`}},$D={type:kE,props:{extruded:`extruded`,filled:`filled`,wireframe:`wireframe`,elevationScale:`elevationScale`,material:`material`,_full3d:`_full3d`,getElevation:`getElevation`,getFillColor:`getFillColor`,getLineColor:`getLineColor`}}}));function tO(e){if(Array.isArray(e))return e;switch(F.assert(e.type,`GeoJSON does not have type`),e.type){case`Feature`:return[e];case`FeatureCollection`:return F.assert(Array.isArray(e.features),`GeoJSON does not have features array`),e.features;default:return[{geometry:e}]}}function nO(e,t,n={}){let r={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:i=0,endRow:a=e.length}=n;for(let n=i;n<a;n++){let i=e[n],{geometry:a}=i;if(a)if(a.type===`GeometryCollection`){F.assert(Array.isArray(a.geometries),`GeoJSON does not have geometries array`);let{geometries:e}=a;for(let a=0;a<e.length;a++){let o=e[a];rO(o,r,t,i,n)}}else rO(a,r,t,i,n)}return r}function rO(e,t,n,r,i){let{type:a,coordinates:o}=e,{pointFeatures:s,lineFeatures:c,polygonFeatures:l,polygonOutlineFeatures:u}=t;if(!iO(a,o)){F.warn(`${a} coordinates are malformed`)();return}switch(a){case`Point`:s.push(n({geometry:e},r,i));break;case`MultiPoint`:o.forEach(e=>{s.push(n({geometry:{type:`Point`,coordinates:e}},r,i))});break;case`LineString`:c.push(n({geometry:e},r,i));break;case`MultiLineString`:o.forEach(e=>{c.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))});break;case`Polygon`:l.push(n({geometry:e},r,i)),o.forEach(e=>{u.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))});break;case`MultiPolygon`:o.forEach(e=>{l.push(n({geometry:{type:`Polygon`,coordinates:e}},r,i)),e.forEach(e=>{u.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))})});break;default:}}function iO(e,t){let n=aO[e];for(F.assert(n,`Unknown GeoJSON type ${e}`);t&&--n>0;)t=t[0];return t&&Number.isFinite(t[0])}var aO,oO=e((()=>{Z(),aO={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4}}));function sO(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function cO(e){return e.geometry.coordinates}function lO(e,t){let n=sO(),{pointFeatures:r,lineFeatures:i,polygonFeatures:a,polygonOutlineFeatures:o}=e;return n.points.data=r,n.points._dataDiff=t.pointFeatures&&(()=>t.pointFeatures),n.points.getPosition=cO,n.lines.data=i,n.lines._dataDiff=t.lineFeatures&&(()=>t.lineFeatures),n.lines.getPath=cO,n.polygons.data=a,n.polygons._dataDiff=t.polygonFeatures&&(()=>t.polygonFeatures),n.polygons.getPolygon=cO,n.polygonsOutline.data=o,n.polygonsOutline._dataDiff=t.polygonOutlineFeatures&&(()=>t.polygonOutlineFeatures),n.polygonsOutline.getPath=cO,n}function uO(e,t){let n=sO(),{points:r,lines:i,polygons:a}=e,o=FE(e,t);n.points.data={length:r.positions.value.length/r.positions.size,attributes:{...r.attributes,getPosition:r.positions,instancePickingColors:{size:4,value:o.points}},properties:r.properties,numericProps:r.numericProps,featureIds:r.featureIds},n.lines.data={length:i.pathIndices.value.length-1,startIndices:i.pathIndices.value,attributes:{...i.attributes,getPath:i.positions,instancePickingColors:{size:4,value:o.lines}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},n.lines._pathType=`open`;let s=a.positions.value.length/a.positions.size,c=Array(s).fill(1);for(let e of a.primitivePolygonIndices.value)c[e-1]=0;return n.polygons.data={length:a.polygonIndices.value.length-1,startIndices:a.polygonIndices.value,attributes:{...a.attributes,getPolygon:a.positions,instanceVertexValid:{size:1,value:new Uint16Array(c)},pickingColors:{size:4,value:o.polygons}},properties:a.properties,numericProps:a.numericProps,featureIds:a.featureIds},n.polygons._normalize=!1,a.triangles&&(n.polygons.data.attributes.indices=a.triangles.value),n.polygonsOutline.data={length:a.primitivePolygonIndices.value.length-1,startIndices:a.primitivePolygonIndices.value,attributes:{...a.attributes,getPath:a.positions,instancePickingColors:{size:4,value:o.polygons}},properties:a.properties,numericProps:a.numericProps,featureIds:a.featureIds},n.polygonsOutline._pathType=`open`,n}var dO=e((()=>{IE()})),fO,pO,mO,hO=e((()=>{Z(),ME(),IE(),eO(),oO(),dO(),fO=[`points`,`linestrings`,`polygons`],pO={...YD(ZD.circle),...YD(ZD.icon),...YD(ZD.text),...YD(QD),...YD($D),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:`object`,value:null},iconMapping:{type:`object`,value:{}},getIcon:{type:`accessor`,value:e=>e.properties.icon},getText:{type:`accessor`,value:e=>e.properties.text},pointType:`circle`,getRadius:{deprecatedFor:`getPointRadius`}},mO=class extends GC{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:t}){if(!t.dataChanged)return;let{data:n}=this.props,r=n&&`points`in n&&`polygons`in n&&`lines`in n;this.setState({binary:r}),r?this._updateStateBinary({props:e,changeFlags:t}):this._updateStateJSON({props:e,changeFlags:t})}_updateStateBinary({props:e,changeFlags:t}){let n=uO(e.data,this.encodePickingColor);this.setState({layerProps:n})}_updateStateJSON({props:e,changeFlags:t}){let n=tO(e.data),r=this.getSubLayerRow.bind(this),i={},a={};if(Array.isArray(t.dataChanged)){let e=this.state.features;for(let t in e)i[t]=e[t].slice(),a[t]=[];for(let o of t.dataChanged){let t=nO(n,r,o);for(let n in e)a[n].push(jE({data:i[n],getIndex:e=>e.__source.index,dataRange:o,replace:t[n]}))}}else i=nO(n,r);let o=lO(i,a);this.setState({features:i,featuresDiff:a,layerProps:o})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n,sourceLayer:r}=t;return t.featureType=fO.find(e=>r.id.startsWith(`${this.id}-${e}-`)),n>=0&&r.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(t.index=this.props.data.points.globalFeatureIds.value[n]),t}_updateAutoHighlight(e){let t=`${this.id}-points-`,n=e.featureType===`points`;for(let r of this.getSubLayers())r.id.startsWith(t)===n&&r.updateAutoHighlight(e)}_renderPolygonLayer(){let{extruded:e,wireframe:t}=this.props,{layerProps:n}=this.state,r=`polygons-fill`,i=this.shouldRenderSubLayer(r,n.polygons?.data)&&this.getSubLayerClass(r,$D.type);if(i){let a=XD(this,$D.props),o=e&&t;return o||delete a.getLineColor,a.updateTriggers.lineColors=o,new i(a,this.getSubLayerProps({id:r,updateTriggers:a.updateTriggers}),n.polygons)}return null}_renderLineLayers(){let{extruded:e,stroked:t}=this.props,{layerProps:n}=this.state,r=`polygons-stroke`,i=`linestrings`,a=!e&&t&&this.shouldRenderSubLayer(r,n.polygonsOutline?.data)&&this.getSubLayerClass(r,QD.type),o=this.shouldRenderSubLayer(i,n.lines?.data)&&this.getSubLayerClass(i,QD.type);if(a||o){let e=XD(this,QD.props);return[a&&new a(e,this.getSubLayerProps({id:r,updateTriggers:e.updateTriggers}),n.polygonsOutline),o&&new o(e,this.getSubLayerProps({id:i,updateTriggers:e.updateTriggers}),n.lines)]}return null}_renderPointLayers(){let{pointType:e}=this.props,{layerProps:t,binary:n}=this.state,{highlightedObjectIndex:r}=this.props;!n&&Number.isFinite(r)&&(r=t.points.data.findIndex(e=>e.__source.index===r));let i=new Set(e.split(`+`)),a=[];for(let e of i){let i=`points-${e}`,o=ZD[e],s=o&&this.shouldRenderSubLayer(i,t.points?.data)&&this.getSubLayerClass(i,o.type);if(s){let c=XD(this,o.props),l=t.points;if(e===`text`&&n){let{instancePickingColors:e,...t}=l.data.attributes;l={...l,data:{...l.data,attributes:t}}}a.push(new s(c,this.getSubLayerProps({id:i,updateTriggers:c.updateTriggers,highlightedObjectIndex:r}),l))}}return a}renderLayers(){let{extruded:e}=this.props,t=this._renderPolygonLayer(),n=this._renderLineLayers(),r=this._renderPointLayers();return[!e&&t,n,r,e&&t]}getSubLayerAccessor(e){let{binary:t}=this.state;return!t||typeof e!=`function`?super.getSubLayerAccessor(e):(t,n)=>{let{data:r,index:i}=n;return e(NE(r,i),n)}}},mO.layerName=`GeoJsonLayer`,mO.defaultProps=pO})),gO=e((()=>{Z(),Yv(),uh(),U(),Pw(),qw(),ET(),KT(),AE(),dE(),hO(),JD(),ZE(),HD()}));function _O(e){if(!e||!(`extensions`in e))return{};let{filterRange:t=[-1,1],filterEnabled:n=!0,filterTransformSize:r=!0,filterTransformColor:i=!0,categoryBitMask:a}=e,o=e.filterSoftRange||t,s=e=>Array.isArray(e)?[e[0]||0,e[1]||0,e[2]||0,e[3]||0]:[e,0,0,0];return{...Number.isFinite(t[0])?{min:s(t[0]),softMin:s(o[0]),softMax:s(o[1]),max:s(t[1])}:{min:s(t.map(e=>e[0])),softMin:s(o.map(e=>e[0])),softMax:s(o.map(e=>e[1])),max:s(t.map(e=>e[1]))},enabled:n,useSoftMargin:!!e.filterSoftRange,transformSize:n&&r,transformColor:n&&i,...a&&{categoryBitMask:a}}}function vO(e){if(!e||!(`extensions`in e))return{};let t=_O(e),n=t.min.map(Math.fround);t.min=t.min.map((e,t)=>e-n[t]),t.softMin=t.softMin.map((e,t)=>e-n[t]),t.min64High=n;let r=t.max.map(Math.fround);return t.max=t.max.map((e,t)=>e-r[t]),t.softMax=t.softMax.map((e,t)=>e-r[t]),t.max64High=r,t}function yO(e){return{useSoftMargin:`i32`,enabled:`i32`,transformSize:`i32`,transformColor:`i32`,min:`vec4<f32>`,softMin:`vec4<f32>`,softMax:`vec4<f32>`,max:`vec4<f32>`,min64High:`vec4<f32>`,max64High:`vec4<f32>`,categoryBitMask:`vec4<u32>`}}var bO,xO,SO,CO,wO,TO,EO=e((()=>{bO=`layout(std140) uniform dataFilterUniforms {
  bool useSoftMargin;
  bool enabled;
  bool transformSize;
  bool transformColor;
  vec4 min;
  vec4 softMin;
  vec4 softMax;
  vec4 max;
  vec4 min64High;
  vec4 max64High;
  highp uvec4 categoryBitMask;
} dataFilter;
`,xO=`
${bO}

#ifdef DATAFILTER_TYPE
  in DATAFILTER_TYPE filterValues;
#ifdef DATAFILTER_DOUBLE
  in DATAFILTER_TYPE filterValues64Low;
#endif
#endif

#ifdef DATACATEGORY_TYPE
  in DATACATEGORY_TYPE filterCategoryValues;
#endif

out float dataFilter_value;

#ifdef DATAFILTER_TYPE
  float dataFilter_getMin(float _) {
    return dataFilter.min.x;
  }
  vec2 dataFilter_getMin(vec2 _) {
    return dataFilter.min.xy;
  }
  vec3 dataFilter_getMin(vec3 _) {
    return dataFilter.min.xyz;
  }
  vec4 dataFilter_getMin(vec4 _) {
    return dataFilter.min;
  }

  float dataFilter_getSoftMin(float _) {
    return dataFilter.softMin.x;
  }
  vec2 dataFilter_getSoftMin(vec2 _) {
    return dataFilter.softMin.xy;
  }
  vec3 dataFilter_getSoftMin(vec3 _) {
    return dataFilter.softMin.xyz;
  }
  vec4 dataFilter_getSoftMin(vec4 _) {
    return dataFilter.softMin;
  }

  float dataFilter_getSoftMax(float _) {
    return dataFilter.softMax.x;
  }
  vec2 dataFilter_getSoftMax(vec2 _) {
    return dataFilter.softMax.xy;
  }
  vec3 dataFilter_getSoftMax(vec3 _) {
    return dataFilter.softMax.xyz;
  }
  vec4 dataFilter_getSoftMax(vec4 _) {
    return dataFilter.softMax;
  }

  float dataFilter_getMax(float _) {
    return dataFilter.max.x;
  }
  vec2 dataFilter_getMax(vec2 _) {
    return dataFilter.max.xy;
  }
  vec3 dataFilter_getMax(vec3 _) {
    return dataFilter.max.xyz;
  }
  vec4 dataFilter_getMax(vec4 _) {
    return dataFilter.max;
  }

  float dataFilter_getMin64High(float _) {
    return dataFilter.min64High.x;
  }
  vec2 dataFilter_getMin64High(vec2 _) {
    return dataFilter.min64High.xy;
  }
  vec3 dataFilter_getMin64High(vec3 _) {
    return dataFilter.min64High.xyz;
  }
  vec4 dataFilter_getMin64High(vec4 _) {
    return dataFilter.min64High;
  }

  float dataFilter_getMax64High(float _) {
    return dataFilter.max64High.x;
  }
  vec2 dataFilter_getMax64High(vec2 _) {
    return dataFilter.max64High.xy;
  }
  vec3 dataFilter_getMax64High(vec3 _) {
    return dataFilter.max64High.xyz;
  }
  vec4 dataFilter_getMax64High(vec4 _) {
    return dataFilter.max64High;
  }
#endif

float dataFilter_reduceValue(float value) {
  return value;
}
float dataFilter_reduceValue(vec2 value) {
  return min(value.x, value.y);
}
float dataFilter_reduceValue(vec3 value) {
  return min(min(value.x, value.y), value.z);
}
float dataFilter_reduceValue(vec4 value) {
  return min(min(value.x, value.y), min(value.z, value.w));
}

#ifdef DATAFILTER_TYPE
  void dataFilter_setValue(DATAFILTER_TYPE valueFromMin, DATAFILTER_TYPE valueFromMax) {
    DATAFILTER_TYPE dataFilter_min = dataFilter_getMin(valueFromMin);
    DATAFILTER_TYPE dataFilter_softMin = dataFilter_getSoftMin(valueFromMin);
    DATAFILTER_TYPE dataFilter_softMax = dataFilter_getSoftMax(valueFromMin);
    DATAFILTER_TYPE dataFilter_max = dataFilter_getMax(valueFromMin);
    if (dataFilter.useSoftMargin) {
      // smoothstep results are undefined if edge0 ≥ edge1
      // Fallback to ignore filterSoftRange if it is truncated by filterRange
      DATAFILTER_TYPE leftInRange = mix(
        smoothstep(dataFilter_min, dataFilter_softMin, valueFromMin),
        step(dataFilter_min, valueFromMin),
        step(dataFilter_softMin, dataFilter_min)
      );
      DATAFILTER_TYPE rightInRange = mix(
        1.0 - smoothstep(dataFilter_softMax, dataFilter_max, valueFromMax),
        step(valueFromMax, dataFilter_max),
        step(dataFilter_max, dataFilter_softMax)
      );
      dataFilter_value = dataFilter_reduceValue(leftInRange * rightInRange);
    } else {
      dataFilter_value = dataFilter_reduceValue(
        step(dataFilter_min, valueFromMin) * step(valueFromMax, dataFilter_max)
      );
    }
  }
#endif

#ifdef DATACATEGORY_TYPE
  void dataFilter_setCategoryValue(DATACATEGORY_TYPE category) {
    #if DATACATEGORY_CHANNELS == 1 // One 128-bit mask
    uint dataFilter_masks = dataFilter.categoryBitMask[category / 32u];
    #elif DATACATEGORY_CHANNELS == 2 // Two 64-bit masks
    uvec2 dataFilter_masks = uvec2(
      dataFilter.categoryBitMask[category.x / 32u],
      dataFilter.categoryBitMask[category.y / 32u + 2u]
    );
    #elif DATACATEGORY_CHANNELS == 3 // Three 32-bit masks
    uvec3 dataFilter_masks = dataFilter.categoryBitMask.xyz;
    #else // Four 32-bit masks
    uvec4 dataFilter_masks = dataFilter.categoryBitMask;
    #endif

    // Shift mask and extract relevant bits
    DATACATEGORY_TYPE dataFilter_bits = DATACATEGORY_TYPE(dataFilter_masks) >> (category & 31u);
    dataFilter_bits &= 1u;

    #if DATACATEGORY_CHANNELS == 1
    if (dataFilter_bits == 0u) dataFilter_value = 0.0;
    #else
    if (any(equal(dataFilter_bits, DATACATEGORY_TYPE(0u)))) dataFilter_value = 0.0;
    #endif
  }
#endif

`,SO=`
${bO}

in float dataFilter_value;

`,CO={"vs:#main-start":`
    dataFilter_value = 1.0;
    if (dataFilter.enabled) {
      #ifdef DATAFILTER_TYPE
        #ifdef DATAFILTER_DOUBLE
          dataFilter_setValue(
            filterValues - dataFilter_getMin64High(filterValues) + filterValues64Low,
            filterValues - dataFilter_getMax64High(filterValues) + filterValues64Low
          );
        #else
          dataFilter_setValue(filterValues, filterValues);
        #endif
      #endif

      #ifdef DATACATEGORY_TYPE
        dataFilter_setCategoryValue(filterCategoryValues);
      #endif
    }
  `,"vs:#main-end":`
    if (dataFilter_value == 0.0) {
      gl_Position = vec4(0.);
    }
  `,"vs:DECKGL_FILTER_SIZE":`
    if (dataFilter.transformSize) {
      size = size * dataFilter_value;
    }
  `,"fs:DECKGL_FILTER_COLOR":`
    if (dataFilter_value == 0.0) discard;
    if (dataFilter.transformColor) {
      color.a *= dataFilter_value;
    }
  `},wO={name:`dataFilter`,vs:xO,fs:SO,inject:CO,getUniforms:_O,uniformTypesFromOptions:yO},TO={name:`dataFilter`,vs:xO,fs:SO,inject:CO,getUniforms:vO,uniformTypesFromOptions:yO}}));function DO(e){return MO.every(t=>e.features.has(t))}function OO(e,t){return t?e.createFramebuffer({width:1,height:1,colorAttachments:[e.createTexture({format:`rgba32float`,dimension:`2d`,width:1,height:1})]}):e.createFramebuffer({width:256,height:64,colorAttachments:[e.createTexture({format:`rgba8unorm`,dimension:`2d`,width:256,height:64})]})}function kO(e,t,n,r){return n.defines.NON_INSTANCED_MODEL=1,r&&(n.defines.FLOAT_TARGET=1),new Uv(e,{id:`data-filter-aggregation-model`,vertexCount:1,isInstanced:!1,topology:`point-list`,disableWarnings:!0,vs:AO,fs:jO,bufferLayout:t,...n})}var AO,jO,MO,NO,PO=e((()=>{Yv(),AO=`#version 300 es
#define SHADER_NAME data-filter-vertex-shader

#ifdef FLOAT_TARGET
  in float filterIndices;
  in float filterPrevIndices;
#else
  in vec2 filterIndices;
  in vec2 filterPrevIndices;
#endif

out vec4 vColor;
const float component = 1.0 / 255.0;

void main() {
  #ifdef FLOAT_TARGET
    dataFilter_value *= float(filterIndices != filterPrevIndices);
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    vColor = vec4(0.0, 0.0, 0.0, 1.0);
  #else
    // Float texture is not supported: pack result into 4 channels x 256 px x 64px
    dataFilter_value *= float(filterIndices.x != filterPrevIndices.x);
    float col = filterIndices.x;
    float row = filterIndices.y * 4.0;
    float channel = floor(row);
    row = fract(row);
    vColor = component * vec4(bvec4(channel == 0.0, channel == 1.0, channel == 2.0, channel == 3.0));
    gl_Position = vec4(col * 2.0 - 1.0, row * 2.0 - 1.0, 0.0, 1.0);
  #endif
  gl_PointSize = 1.0;
}
`,jO=`#version 300 es
#define SHADER_NAME data-filter-fragment-shader
precision highp float;

in vec4 vColor;

out vec4 fragColor;

void main() {
  if (dataFilter_value < 0.5) {
    discard;
  }
  fragColor = vColor;
}
`,MO=[`float32-renderable-webgl`,`texture-blend-float-webgl`],NO={blend:!0,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`,blendColorOperation:`add`,blendAlphaOperation:`add`,depthCompare:`never`}})),FO,IO,LO,RO,zO,BO=e((()=>{Z(),EO(),PO(),FO={getFilterValue:{type:`accessor`,value:0},getFilterCategory:{type:`accessor`,value:0},onFilteredItemsChange:{type:`function`,value:null,optional:!0},filterEnabled:!0,filterRange:[-1,1],filterSoftRange:null,filterCategories:[0],filterTransformSize:!0,filterTransformColor:!0},IO={categorySize:0,filterSize:1,fp64:!1,countItems:!1},LO={1:`uint`,2:`uvec2`,3:`uvec3`,4:`uvec4`},RO={1:`float`,2:`vec2`,3:`vec3`,4:`vec4`},zO=class extends rw{constructor(e={}){super({...IO,...e})}getShaders(e){let{categorySize:t,filterSize:n,fp64:r}=e.opts,i={};t&&(i.DATACATEGORY_TYPE=LO[t],i.DATACATEGORY_CHANNELS=t),n&&(i.DATAFILTER_TYPE=RO[n],i.DATAFILTER_DOUBLE=!!r);let a=r?TO:wO;return a.uniformTypes=a.uniformTypesFromOptions(e.opts),{modules:[a],defines:i}}initializeState(e,t){let n=this.getAttributeManager(),{categorySize:r,filterSize:i,fp64:a}=t.opts;n&&(i&&n.add({filterValues:{size:i,type:a?`float64`:`float32`,stepMode:`dynamic`,accessor:`getFilterValue`}}),r&&n.add({filterCategoryValues:{size:r,stepMode:`dynamic`,accessor:`getFilterCategory`,type:`uint32`,transform:r===1?e=>t._getCategoryKey.call(this,e,0):e=>e.map((e,n)=>t._getCategoryKey.call(this,e,n))}}));let{device:o}=this.context;if(n&&t.opts.countItems){let e=DO(o);n.add({filterVertexIndices:{size:e?1:2,vertexOffset:1,type:`unorm8`,accessor:(t,{index:n})=>{let r=t&&t.__source?t.__source.index:n;return e?(r+1)%255:[(r+1)%255,Math.floor(r/255)%255]},shaderAttributes:{filterPrevIndices:{vertexOffset:0},filterIndices:{vertexOffset:1}}}});let r=OO(o,e),i=kO(o,n.getBufferLayouts({isInstanced:!1}),t.getShaders.call(this,t),e);this.setState({filterFBO:r,filterModel:i})}}updateState({props:e,oldProps:t,changeFlags:n},r){let i=this.getAttributeManager(),{categorySize:a}=r.opts;if(this.state.filterModel){let n=i.attributes.filterValues?.needsUpdate()||i.attributes.filterCategoryValues?.needsUpdate()||e.filterEnabled!==t.filterEnabled||e.filterRange!==t.filterRange||e.filterSoftRange!==t.filterSoftRange||e.filterCategories!==t.filterCategories;n&&this.setState({filterNeedsUpdate:n})}i?.attributes.filterCategoryValues&&((i.attributes.filterCategoryValues.needsUpdate()||!Y(e.filterCategories,t.filterCategories,2))&&this.setState({categoryBitMask:null}),n.dataChanged&&(this.setState({categoryMap:Array(a).fill(0).map(()=>({}))}),i.attributes.filterCategoryValues.setNeedsUpdate(`categoryMap`)))}draw(e,t){let n=this.state.filterFBO,r=this.state.filterModel,i=this.state.filterNeedsUpdate;this.state.categoryBitMask||t._updateCategoryBitMask.call(this,e,t);let{onFilteredItemsChange:a,extensions:o,filterEnabled:s,filterRange:c,filterSoftRange:l,filterTransformSize:u,filterTransformColor:d,filterCategories:f}=this.props,p={extensions:o,filterEnabled:s,filterRange:c,filterSoftRange:l,filterTransformSize:u,filterTransformColor:d,filterCategories:f};if(this.state.categoryBitMask&&(p.categoryBitMask=this.state.categoryBitMask),this.setShaderModuleProps({dataFilter:p}),i&&a&&r){let{attributes:{filterValues:e,filterCategoryValues:t,filterVertexIndices:i}}=this.getAttributeManager();r.setVertexCount(this.getNumInstances());let o={...e?.getValue(),...t?.getValue(),...i?.getValue()};r.setAttributes(o),r.shaderInputs.setProps({dataFilter:p});let s=[0,0,n.width,n.height],c=r.device.beginRenderPass({id:`data-filter-aggregation`,framebuffer:n,parameters:{viewport:s},clearColor:[0,0,0,0]});r.setParameters(NO),r.draw(c),c.end();let l=r.device.readPixelsToArrayWebGL(n),u=0;for(let e=0;e<l.length;e++)u+=l[e];a({id:this.id,count:u}),this.state.filterNeedsUpdate=!1}}finalizeState(){let e=this.state.filterFBO,t=this.state.filterModel;e?.destroy(),t?.destroy()}_updateCategoryBitMask(e,t){let{categorySize:n}=t.opts;if(!n)return;let{filterCategories:r}=this.props,i=new Uint32Array([0,0,0,0]),a=n===1?[r]:r,o=n===1?128:n===2?64:32;for(let e=0;e<a.length;e++){let n=a[e];for(let r of n){let n=t._getCategoryKey.call(this,r,e);if(n<o){let t=o/32*e+Math.floor(n/32);i[t]+=2**(n%32)}else F.warn(`Exceeded maximum number of categories (${o})`)()}}this.state.categoryBitMask=i}_getCategoryKey(e,t){let n=this.state.categoryMap[t];return e in n||(n[e]=Object.keys(n).length),n[e]}},zO.defaultProps=FO,zO.extensionName=`DataFilterExtension`})),VO=e((()=>{Z(),BO(),ud(),U()}));function Q(e){let t=e.replace(`#`,``).match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[255,255,255]}function HO(e){let[t,n,r]=Q(e);return[t/255,n/255,r/255]}function UO(e,t,n){let r=e=>Math.max(0,Math.min(255,Math.round(e)));return`#${r(e).toString(16).padStart(2,`0`)}${r(t).toString(16).padStart(2,`0`)}${r(n).toString(16).padStart(2,`0`)}`}function WO(e,t,n){let[r,i,a]=Q(e),[o,s,c]=Q(t);return UO(Math.round(r+(o-r)*n),Math.round(i+(s-i)*n),Math.round(a+(c-a)*n))}function GO(e){let[t,n,r]=Q(e),i=t/255,a=n/255,o=r/255,s=Math.max(i,a,o),c=Math.min(i,a,o),l=(s+c)/2,u=s-c;if(u===0)return[t,n,r];let d=u/(1-Math.abs(2*l-1)),f;f=s===i?((a-o)/u+(a<o?6:0))*60:s===a?((o-i)/u+2)*60:((i-a)/u+4)*60,f=(f+180)%360;let p=(1-Math.abs(2*l-1))*d,m=p*(1-Math.abs(f/60%2-1)),h=l-p/2,g;return g=f<60?[p,m,0]:f<120?[m,p,0]:f<180?[0,p,m]:f<240?[0,m,p]:f<300?[m,0,p]:[p,0,m],[Math.round((g[0]+h)*255),Math.round((g[1]+h)*255),Math.round((g[2]+h)*255)]}var KO=e((()=>{})),qO=n(((e,t)=>{(function(){var n=Math.PI,r=Math.sin,i=Math.cos,a=Math.tan,o=Math.asin,s=Math.atan2,c=Math.acos,l=n/180,u=1e3*60*60*24,d=2440588,f=2451545;function p(e){return e.valueOf()/u-.5+d}function m(e){return new Date((e+.5-d)*u)}function h(e){return p(e)-f}var g=l*23.4397;function _(e,t){return s(r(e)*i(g)-a(t)*r(g),i(e))}function v(e,t){return o(r(t)*i(g)+i(t)*r(g)*r(e))}function y(e,t,n){return s(r(e),i(e)*r(t)-a(n)*i(t))}function b(e,t,n){return o(r(t)*r(n)+i(t)*i(n)*i(e))}function x(e,t){return l*(280.16+360.9856235*e)-t}function S(e){return e<0&&(e=0),2967e-7/Math.tan(e+.00312536/(e+.08901179))}function C(e){return l*(357.5291+.98560028*e)}function w(e){var t=l*(1.9148*r(e)+.02*r(2*e)+3e-4*r(3*e)),i=l*102.9372;return e+t+i+n}function T(e){var t=w(C(e));return{dec:v(t,0),ra:_(t,0)}}var E={};E.getPosition=function(e,t,n){var r=l*-n,i=l*t,a=h(e),o=T(a),s=x(a,r)-o.ra;return{azimuth:y(s,i,o.dec),altitude:b(s,i,o.dec)}};var D=E.times=[[-.833,`sunrise`,`sunset`],[-.3,`sunriseEnd`,`sunsetStart`],[-6,`dawn`,`dusk`],[-12,`nauticalDawn`,`nauticalDusk`],[-18,`nightEnd`,`night`],[6,`goldenHourEnd`,`goldenHour`]];E.addTime=function(e,t,n){D.push([e,t,n])};var O=9e-4;function k(e,t){return Math.round(e-O-t/(2*n))}function A(e,t,r){return O+(e+t)/(2*n)+r}function j(e,t,n){return f+e+.0053*r(t)-.0069*r(2*n)}function M(e,t,n){return c((r(e)-r(t)*r(n))/(i(t)*i(n)))}function ee(e){return-2.076*Math.sqrt(e)/60}function N(e,t,n,r,i,a,o){return j(A(M(e,n,r),t,i),a,o)}E.getTimes=function(e,t,n,r){r||=0;var i=l*-n,a=l*t,o=ee(r),s=k(h(e),i),c=A(0,i,s),u=C(c),d=w(u),f=v(d,0),p=j(c,u,d),g,_,y,b,x,S,T={solarNoon:m(p),nadir:m(p-.5)};for(g=0,_=D.length;g<_;g+=1)y=D[g],b=(y[0]+o)*l,x=N(b,i,a,f,s,u,d),S=p-(x-p),T[y[1]]=m(S),T[y[2]]=m(x);return T};function te(e){var t=l*(218.316+13.176396*e),n=l*(134.963+13.064993*e),a=l*(93.272+13.22935*e),o=t+l*6.289*r(n),s=l*5.128*r(a),c=385001-20905*i(n);return{ra:_(o,s),dec:v(o,s),dist:c}}E.getMoonPosition=function(e,t,n){var o=l*-n,c=l*t,u=h(e),d=te(u),f=x(u,o)-d.ra,p=b(f,c,d.dec),m=s(r(f),a(c)*i(d.dec)-r(d.dec)*i(f));return p+=S(p),{azimuth:y(f,c,d.dec),altitude:p,distance:d.dist,parallacticAngle:m}},E.getMoonIllumination=function(e){var t=h(e||new Date),n=T(t),a=te(t),o=149598e3,l=c(r(n.dec)*r(a.dec)+i(n.dec)*i(a.dec)*i(n.ra-a.ra)),u=s(o*r(l),a.dist-o*i(l)),d=s(i(n.dec)*r(n.ra-a.ra),r(n.dec)*i(a.dec)-i(n.dec)*r(a.dec)*i(n.ra-a.ra));return{fraction:(1+i(u))/2,phase:.5+.5*u*(d<0?-1:1)/Math.PI,angle:d}};function ne(e,t){return new Date(e.valueOf()+t*u/24)}E.getMoonTimes=function(e,t,n,r){var i=new Date(e);r?i.setUTCHours(0,0,0,0):i.setHours(0,0,0,0);for(var a=.133*l,o=E.getMoonPosition(i,t,n).altitude-a,s,c,u,d,f,p,m,h,g,_,v,y,b,x=1;x<=24&&(s=E.getMoonPosition(ne(i,x),t,n).altitude-a,c=E.getMoonPosition(ne(i,x+1),t,n).altitude-a,f=(o+c)/2-s,p=(c-o)/2,m=-p/(2*f),h=(f*m+p)*m+s,g=p*p-4*f*s,_=0,g>=0&&(b=Math.sqrt(g)/(Math.abs(f)*2),v=m-b,y=m+b,Math.abs(v)<=1&&_++,Math.abs(y)<=1&&_++,v<-1&&(v=y)),_===1?o<0?u=x+v:d=x+v:_===2&&(u=x+(h<0?y:v),d=x+(h<0?v:y)),!(u&&d));x+=2)o=c;var S={};return u&&(S.rise=ne(i,u)),d&&(S.set=ne(i,d)),!u&&!d&&(S[h>0?`alwaysUp`:`alwaysDown`]=!0),S},typeof e==`object`&&t!==void 0?t.exports=E:typeof define==`function`&&define.amd?define(E):window.SunCalc=E})()})),JO,YO,XO,ZO=e((()=>{JO=t(qO(),1),YO=class{getPosition(e,t){let n=JO.default.getPosition(t,e.lat,e.lon);return{altitude:n.altitude*(180/Math.PI),azimuth:n.azimuth*(180/Math.PI)+180}}getSunPosition3D(e,t,n=500){let{altitude:r,azimuth:i}=this.getPosition(e,t),a=Math.PI/180*r,o=Math.PI/180*i;return{x:n*Math.cos(a)*Math.sin(o),y:n*Math.sin(a),z:n*Math.cos(a)*Math.cos(o)}}getSunPositionArray(e,t,n=500){let r=this.getSunPosition3D(e,t,n);return[r.x,r.y,r.z]}getTimes(e,t){let n=JO.default.getTimes(t,e.lat,e.lon);return{sunrise:n.sunrise,sunset:n.sunset,goldenHour:n.goldenHour,goldenHourEnd:n.goldenHourEnd,nightEnd:n.nightEnd,night:n.night,solarNoon:n.solarNoon,dusk:n.dusk,dawn:n.dawn}}isDay(e){return e>0}isGoldenHour(e){return e>0&&e<6}getTimePeriodByAltitude(e){return e<-6?`Night`:e<-.83?`Astronomical Dawn`:e<0?`Dawn`:e<6?`Golden Hour`:e<12?`Morning`:e<18?`Day`:e<20?`Afternoon`:`Midday`}getHourFromDate(e){return e.getHours()+e.getMinutes()/60+e.getSeconds()/3600}createDateForHour(e,t){let n=t??new Date;return new Date(n.getFullYear(),n.getMonth(),n.getDate(),Math.floor(e),e%1*60)}static getSunPositionFromTimeOfDay(e){let t=(e%24+24)%24,n=(t-6)/14,r=n>=0&&n<=1?Math.sin(n*Math.PI)*50:-10,i=n>=0&&n<=1?90+n*180:t<6?90:270,a=Math.PI/180*r,o=Math.PI/180*i,s=4e4;return[Math.cos(a)*Math.sin(o)*s,Math.sin(a)*s,Math.cos(a)*Math.cos(o)*s]}static getSunAnglesFromTimeOfDay(e){let t=(e%24+24)%24,n=(t-6)/14,r=n>=0&&n<=1?Math.sin(n*Math.PI)*50:-10;return{azimuth:n>=0&&n<=1?90+n*180:t<6?90:270,elevation:r}}static getSunAnglesFromTimeOfDayAndCoords(e,t,n){let r=n??new Date,i=e-t.lon/15;i=(i%24+24)%24;let a=new Date(Date.UTC(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate(),Math.floor(i),i%1*60,0,0)),o=XO.getPosition(t,a);return{azimuth:o.azimuth,elevation:o.altitude}}static getSunPositionFromAngles(e,t){let n=Math.PI/180*t,r=Math.PI/180*e,i=4e4;return[Math.cos(n)*Math.sin(r)*i,Math.sin(n)*i,Math.cos(n)*Math.cos(r)*i]}static getSunDirection(e,t){let n=e*Math.PI/180,r=(90-t)*Math.PI/180;return[Math.sin(r)*Math.sin(n),Math.cos(r),Math.sin(r)*Math.cos(n)]}static getSunColor(e){if(e<-6)return`#1a2244`;if(e<0){let t=(e+6)/6;return this.lerpColor(`#1a2244`,`#2a3355`,t)}else if(e<6){let t=e/6;return this.lerpColor(`#ff9944`,`#ffee88`,t)}else if(e<20){let t=(e-6)/14;return this.lerpColor(`#ffee88`,`#fff8e0`,t)}else{let t=Math.min(1,(e-20)/70);return this.lerpColor(`#fff8e0`,`#f0f4ff`,t)}}static getAmbientColor(e){if(e<-10)return`#1a2244`;if(e<-.5){let t=(e+10)/9.5;return this.lerpColor(`#1a2244`,`#4455aa`,t)}else if(e<6){let t=(e+.5)/6.5;return this.lerpColor(`#4455aa`,`#c0d0ff`,t)}else if(e<20){let t=(e-6)/14;return this.lerpColor(`#c0d0ff`,`#e8eeff`,t)}else{let t=Math.min(1,(e-20)/70);return this.lerpColor(`#e8eeff`,`#f0f4ff`,t)}}static lerpColor(e,t,n){if(!/^#[0-9a-fA-F]{6}$/.test(e)||!/^#[0-9a-fA-F]{6}$/.test(t))return console.warn(`[SunCalc] lerpColor received invalid hex: a=${e}, b=${t}`),n>=.5?t:e;let r=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),o=parseInt(t.slice(1,3),16),s=parseInt(t.slice(3,5),16),c=parseInt(t.slice(5,7),16),l=Math.max(0,Math.min(255,Math.round(r+(o-r)*n))),u=Math.max(0,Math.min(255,Math.round(i+(s-i)*n))),d=Math.max(0,Math.min(255,Math.round(a+(c-a)*n)));return`#${l.toString(16).padStart(2,`0`)}${u.toString(16).padStart(2,`0`)}${d.toString(16).padStart(2,`0`)}`}},XO=new YO}));function QO(e){let t=new se,n=e[0];if(!n||n.length<3)return new we(new se);for(let e of n)if(!isFinite(e[0])||!isFinite(e[1]))return new we(new se);t.moveTo(n[0][0],-n[0][1]);for(let e=1;e<n.length;e++)t.lineTo(n[e][0],-n[e][1]);t.closePath();for(let n=1;n<e.length;n++){let r=e[n];if(r.length<3)continue;let i=new de;i.moveTo(r[0][0],-r[0][1]);for(let e=1;e<r.length;e++)i.lineTo(r[e][0],-r[e][1]);t.holes.push(i)}return new we(t)}function $O(e,t,n=0){let r=new se,i=e[0];if(!i||i.length<3)return new te(new se,{depth:1});for(let e of i)if(!isFinite(e[0])||!isFinite(e[1]))return new te(new se,{depth:1});r.moveTo(i[0][0],-i[0][1]);for(let e=1;e<i.length;e++)r.lineTo(i[e][0],-i[e][1]);r.closePath();for(let t=1;t<e.length;t++){let n=e[t];if(n.length<3)continue;let i=new de;i.moveTo(n[0][0],-n[0][1]);for(let e=1;e<n.length;e++)i.lineTo(n[e][0],-n[e][1]);r.holes.push(i)}return new te(r,{depth:Math.max(1,t-n),bevelEnabled:!1})}function ek(e){let t=[];for(let n of e)t.push(n[0],0,-n[1]);let n=new he;n.setAttribute(`position`,new oe(t,3));let r=[];for(let e=0;e<t.length/3-1;e++)r.push(e,e+1);return n.setIndex(r),n}var tk=e((()=>{ve()}));function nk(e,t){for(let n of e)if(t===n||n===`*`||n instanceof RegExp&&n.test(t))return!0;return!1}function rk(e,t=globalThis,n=[`*`]){t.addEventListener(`message`,function r(i){if(!i||!i.data)return;if(!nk(n,i.origin)){console.warn(`Invalid origin '${i.origin}' for comlink proxy`);return}let{id:a,type:o,path:s}=Object.assign({path:[]},i.data),c=(i.data.argumentList||[]).map(_k),l;try{let t=s.slice(0,-1).reduce((e,t)=>e[t],e),n=s.reduce((e,t)=>e[t],e);switch(o){case`GET`:l=n;break;case`SET`:t[s.slice(-1)[0]]=_k(i.data.value),l=!0;break;case`APPLY`:l=n.apply(t,c);break;case`CONSTRUCT`:l=hk(new n(...c));break;case`ENDPOINT`:{let{port1:t,port2:n}=new MessageChannel;rk(e,n),l=mk(t,[t])}break;case`RELEASE`:l=void 0;break;default:return}}catch(e){l={value:e,[wk]:0}}Promise.resolve(l).catch(e=>({value:e,[wk]:0})).then(n=>{let[i,s]=gk(n);t.postMessage(Object.assign(Object.assign({},i),{id:a}),s),o===`RELEASE`&&(t.removeEventListener(`message`,r),ak(t),Ck in e&&typeof e[Ck]==`function`&&e[Ck]())}).catch(e=>{let[n,r]=gk({value:TypeError(`Unserializable return value`),[wk]:0});t.postMessage(Object.assign(Object.assign({},n),{id:a}),r)})}),t.start&&t.start()}function ik(e){return e.constructor.name===`MessagePort`}function ak(e){ik(e)&&e.close()}function ok(e,t){let n=new Map;return e.addEventListener(`message`,function(e){let{data:t}=e;if(!t||!t.id)return;let r=n.get(t.id);if(r)try{r(t)}finally{n.delete(t.id)}}),dk(e,n,[],t)}function sk(e){if(e)throw Error(`Proxy has been released and is not useable`)}function ck(e){return vk(e,new Map,{type:`RELEASE`}).then(()=>{ak(e)})}function lk(e,t){let n=(Dk.get(t)||0)+1;Dk.set(t,n),Ok&&Ok.register(e,t,e)}function uk(e){Ok&&Ok.unregister(e)}function dk(e,t,n=[],r=function(){}){let i=!1,a=new Proxy(r,{get(r,o){if(sk(i),o===Sk)return()=>{uk(a),ck(e),t.clear(),i=!0};if(o===`then`){if(n.length===0)return{then:()=>a};let r=vk(e,t,{type:`GET`,path:n.map(e=>e.toString())}).then(_k);return r.then.bind(r)}return dk(e,t,[...n,o])},set(r,a,o){sk(i);let[s,c]=gk(o);return vk(e,t,{type:`SET`,path:[...n,a].map(e=>e.toString()),value:s},c).then(_k)},apply(r,a,o){sk(i);let s=n[n.length-1];if(s===xk)return vk(e,t,{type:`ENDPOINT`}).then(_k);if(s===`bind`)return dk(e,t,n.slice(0,-1));let[c,l]=pk(o);return vk(e,t,{type:`APPLY`,path:n.map(e=>e.toString()),argumentList:c},l).then(_k)},construct(r,a){sk(i);let[o,s]=pk(a);return vk(e,t,{type:`CONSTRUCT`,path:n.map(e=>e.toString()),argumentList:o},s).then(_k)}});return lk(a,e),a}function fk(e){return Array.prototype.concat.apply([],e)}function pk(e){let t=e.map(gk);return[t.map(e=>e[0]),fk(t.map(e=>e[1]))]}function mk(e,t){return kk.set(e,t),e}function hk(e){return Object.assign(e,{[bk]:!0})}function gk(e){for(let[t,n]of Ek)if(n.canHandle(e)){let[r,i]=n.serialize(e);return[{type:`HANDLER`,name:t,value:r},i]}return[{type:`RAW`,value:e},kk.get(e)||[]]}function _k(e){switch(e.type){case`HANDLER`:return Ek.get(e.name).deserialize(e.value);case`RAW`:return e.value}}function vk(e,t,n,r){return new Promise(i=>{let a=yk();t.set(a,i),e.start&&e.start(),e.postMessage(Object.assign({id:a},n),r)})}function yk(){return[,,,,].fill(0).map(()=>Math.floor(Math.random()*(2**53-1)).toString(16)).join(`-`)}var bk,xk,Sk,Ck,wk,Tk,Ek,Dk,Ok,kk,Ak=e((()=>{bk=Symbol(`Comlink.proxy`),xk=Symbol(`Comlink.endpoint`),Sk=Symbol(`Comlink.releaseProxy`),Ck=Symbol(`Comlink.finalizer`),wk=Symbol(`Comlink.thrown`),Tk=e=>typeof e==`object`&&!!e||typeof e==`function`,Ek=new Map([[`proxy`,{canHandle:e=>Tk(e)&&e[bk],serialize(e){let{port1:t,port2:n}=new MessageChannel;return rk(e,t),[n,[n]]},deserialize(e){return e.start(),ok(e)}}],[`throw`,{canHandle:e=>Tk(e)&&wk in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(Error(e.value.message),e.value):e.value}}]]),Dk=new WeakMap,Ok=`FinalizationRegistry`in globalThis&&new FinalizationRegistry(e=>{let t=(Dk.get(e)||0)-1;Dk.set(e,t),t===0&&ck(e)}),kk=new WeakMap}));function jk(e){return e.replace(/([A-Z])/g,` $1`).replace(/^./,e=>e.toUpperCase()).trim()}var Mk=e((()=>{})),Nk=e((()=>{Mk()}));function Pk(e){let t=[],n={...e?.attributes??{residents:0,manager:``,ipAddress:``,securityLevel:`low`,buildingCode:``,neighborhoodId:``}},r=[[`id`,e?.id??``],[`height`,e?.height??0],[`roofType`,e?.roofType??`flat`],...Object.keys(n).map(e=>[`attributes.${e}`,n[e]])];for(let[e,n]of r){if(e===`id`)continue;let r=Fk[e];if(r){t.push({key:e,label:r.label,type:`categorical`,options:r.options});continue}let i=Rk[e];if(i){t.push({key:e,label:i.label,type:`categorical`,themeColorKey:i.themeColorKey});continue}let a=Lk[e];if(a){t.push({key:e,label:a.label,type:a.type});continue}let o=Ik[e];if(o){t.push({key:e,label:o.label,type:`numeric`,range:{min:o.min,max:o.max}});continue}typeof n==`number`?t.push({key:e,label:jk(e.split(`.`).pop()??e),type:`numeric`,range:{min:0,max:1e3}}):typeof n==`string`&&t.push({key:e,label:jk(e.split(`.`).pop()??e),type:`text`})}let i={categorical:0,numeric:1,text:2,ip:3};return t.sort((e,t)=>i[e.type]-i[t.type]),t}var Fk,Ik,Lk,Rk,zk=e((()=>{Nk(),Fk={roofType:{label:`Roof Type`,options:[`flat`,`gabled`,`hipped`,`mansard`]},"attributes.securityLevel":{label:`Security`,options:[`low`,`medium`,`high`,`critical`]}},Ik={height:{label:`Height (m)`,min:0,max:200},"attributes.residents":{label:`Residents`,min:0,max:5e3}},Lk={"attributes.ipAddress":{label:`IP Address`,type:`ip`},"attributes.manager":{label:`Manager`,type:`text`},"attributes.buildingCode":{label:`Code`,type:`text`},"attributes.neighborhoodId":{label:`Neighborhood`,type:`text`}},Rk={color:{label:`Color`,themeColorKey:`accent`}}}));function Bk(e,t){let n=t.split(`.`),r=e;for(let e of n){if(typeof r!=`object`||!r)return;r=r[e]}return r}function Vk(e,t,n){if(!n.enabled||n.values.length===0)return!0;let r=Bk(e,t);return n.values.includes(String(r??``))}function Hk(e,t,n){if(!n.enabled)return!0;let r=Bk(e,t);return typeof r!=`number`||r>=n.min&&r<=n.max}function Uk(e,t,n){if(!n.enabled||!n.value)return!0;let r=Bk(e,t);return String(r??``).toLowerCase().includes(n.value.toLowerCase())}function Wk(e,t,n){return!n.enabled||!n.value||String(Bk(e,t)??``).startsWith(n.value)}function Gk(e,t){if(e.length===0)return[];let n=Pk(e[0]),r=new Map;for(let e of n)r.set(e.key,e);return e.reduce((e,n,i)=>{for(let[i,a]of Object.entries(t)){let t=r.get(i);if(t)switch(t.type){case`categorical`:if(!Vk(n,i,a))return e;break;case`numeric`:if(!Hk(n,i,a))return e;break;case`text`:if(!Uk(n,i,a))return e;break;case`ip`:if(!Wk(n,i,a))return e;break}}return e.push(i),e},[])}var Kk=e((()=>{zk()}));function qk(){return Yk||=new Jk,Yk}var Jk,Yk,Xk=e((()=>{Ak(),Kk(),Jk=class{worker=null;workerInstance=null;async init(){if(!this.worker&&!(typeof Worker>`u`))try{this.workerInstance=new Worker(new URL(`/storybook/assets/buildingFilter.worker-CuVjysD0.js`,``+import.meta.url),{type:`module`}),this.worker=ok(this.workerInstance)}catch(e){console.warn(`[BuildingFilterWorkerProxy] Worker creation failed:`,e)}}isWorkerAvailable(){return this.worker!==null}async applyFilters(e,t){return this.worker||await this.init(),this.worker?await this.worker.applyFilters(e,t):Gk(e,t)}terminate(){this.workerInstance&&=(this.workerInstance.terminate(),null),this.worker=null}},Yk=null}));function Zk(e){return Object.values(e).some(e=>e.enabled)}var Qk,$k,eA=e((()=>{i(),Xk(),Qk={buildingFilters:{},filterPanelOpen:!1,draftNumericFilters:{},filteredBuildingIndices:[],searchQuery:``,isFiltering:!1,selectedBuildingId:null,hoveredBuildingId:null},$k=r(e=>({...Qk,setBuildingFilter:(t,n)=>e(e=>({buildingFilters:{...e.buildingFilters,[t]:n}})),clearBuildingFilters:()=>e({buildingFilters:{},filteredBuildingIndices:[],isFiltering:!1}),setFilterPanelOpen:t=>e({filterPanelOpen:t}),toggleFilterPanel:()=>e(e=>({filterPanelOpen:!e.filterPanelOpen})),setDraftNumericFilter:(t,n)=>e(e=>({draftNumericFilters:{...e.draftNumericFilters,[t]:n}})),clearDraftNumericFilter:t=>e(e=>{let n={...e.draftNumericFilters};return delete n[t],{draftNumericFilters:n}}),clearAllDraftFilters:()=>e({draftNumericFilters:{}}),setSearchQuery:t=>e({searchQuery:t}),recalculateFilters:async t=>{let n=$k.getState(),r=Zk(n.buildingFilters);if(e({isFiltering:r}),!r){e({filteredBuildingIndices:t.map((e,t)=>t),isFiltering:!1});return}try{let r=await qk().applyFilters(t,n.buildingFilters);$k.getState().buildingFilters===n.buildingFilters&&e({filteredBuildingIndices:r,isFiltering:!1})}catch(t){console.error(`[citiesUIStore] Filter calculation failed:`,t),e({isFiltering:!1})}},setSelectedBuildingId:t=>e({selectedBuildingId:t}),setHoveredBuildingId:t=>e({hoveredBuildingId:t}),reset:()=>e(Qk)}))})),tA,nA,rA,iA,aA=e((()=>{Z(),tA={current:0},nA={name:`scanner`,vs:`
layout(std140) uniform scannerUniforms {
  vec4  dotColor;      // rgb + dotOpacity in w
  vec4  scanColor;     // rgb + scanSpeed in w
  float dotDensity;
  float scanRangeMax;  // meters
  float time;
  float enabled;
  float metersPerUnit; // 1 / commonUnitsPerMeter.z — converts common-space Z to meters
  float _pad0;         // std140 alignment padding
  float _pad1;
  float _pad2;
} scanner;

out vec3 scan_vPos;
out vec3 scan_vNormal;
out vec3 scan_vWorld; // geometry.worldPosition (lon/lat/elev) for stable world-space UVs
`,fs:`
layout(std140) uniform scannerUniforms {
  vec4  dotColor;      // rgb + dotOpacity in w
  vec4  scanColor;     // rgb + scanSpeed in w
  float dotDensity;
  float scanRangeMax;  // meters
  float time;
  float enabled;
  float metersPerUnit; // 1 / commonUnitsPerMeter.z — converts common-space Z to meters
  float _pad0;
  float _pad1;
  float _pad2;
} scanner;

in vec3 scan_vPos;
in vec3 scan_vNormal;
in vec3 scan_vWorld;
`,uniformTypes:{dotColor:`vec4<f32>`,scanColor:`vec4<f32>`,dotDensity:`f32`,scanRangeMax:`f32`,time:`f32`,enabled:`f32`,metersPerUnit:`f32`,_pad0:`f32`,_pad1:`f32`,_pad2:`f32`}},rA={dotColor:{type:`array`,value:[.26,.43,.52]},dotDensity:{type:`number`,value:12},dotOpacity:{type:`number`,value:.4},scanColor:{type:`array`,value:[0,.8,1]},scanSpeed:{type:`number`,value:.7},scanRangeMax:{type:`number`,value:50},enabled:{type:`boolean`,value:!0}},iA=class extends rw{static defaultProps=rA;static extensionName=`ScannerBuildingExtension`;getShaders(){return{modules:[nA],inject:{"vs:DECKGL_FILTER_COLOR":`
          {
            // Reconstruct absolute common-space position by adding back the
            // coordinateOrigin that WEB_MERCATOR_AUTO_OFFSET subtracted.
            // This makes scan_vPos world-fixed regardless of camera pan/zoom.
            scan_vPos    = geometry.position.xyz + project.coordinateOrigin;
            scan_vNormal = geometry.normal;
            scan_vWorld  = geometry.worldPosition;
          }
        `,"fs:DECKGL_FILTER_COLOR":`
          if (scanner.enabled > 0.5) {
            // scan_vPos is absolute common-space (coordinateOrigin already added in VS).
            // Convert to metres using metersPerUnit so all comparisons are in metres.
            vec3 scan_posM = scan_vPos * scanner.metersPerUnit;

            // ── Face-normal UV selection (world-fixed metres) ─────────────────
            float scan_nLen = length(scan_vNormal);
            vec2 surfaceUV;
            if (scan_nLen > 0.001) {
              vec3 scan_absN = abs(scan_vNormal / scan_nLen);
              if (scan_absN.z > scan_absN.x && scan_absN.z > scan_absN.y) {
                surfaceUV = scan_posM.xy;              // roof/floor  (Z-normal)
              } else if (scan_absN.x > scan_absN.y) {
                surfaceUV = scan_posM.zy;              // E/W walls   (X-normal)
              } else {
                surfaceUV = scan_posM.xz;              // N/S walls   (Y-normal)
              }
            } else {
              surfaceUV = scan_posM.xz;                // fallback: top-down
            }

            // ── Anti-aliased dot grid ─────────────────────────────────────────
            // Grid pitch: 1 dot every 2m (fixed). dotDensity (2-24) controls the
            // dot radius as a fraction of the cell: radius = dotDensity/48.0
            // → slider min(2)=tiny points, slider max(24)=large circles ~half cell
            const float GRID_PITCH = 0.5;  // 1/meters between dot centres
            vec2  scaledUV       = surfaceUV * GRID_PITCH;
            vec2  gridUV         = fract(scaledUV) - 0.5;
            float dotRadius      = scanner.dotDensity / 48.0;
            float pixelFootprint = max(length(dFdx(scaledUV)), length(dFdy(scaledUV)));
            float blur           = max(pixelFootprint * 0.8, 0.01);
            float dotPat         = smoothstep(dotRadius + blur, dotRadius - blur, length(gridUV));
            // Fade to average fill when pixel covers multiple cells
            dotPat = mix(dotPat, dotRadius * dotRadius * 4.0, smoothstep(0.15, 0.6, pixelFootprint));

            // ── Scanner sweep (bottom-to-top, heights in meters) ─────────────
            // scanner.scanColor.w holds scanSpeed
            float scanSpeed = scanner.scanColor.w;
            float cycle     = mod(scanner.time * scanSpeed, 6.0);
            // Sweep from ground (0) to scanRangeMax over 4s, pause 2s at top
            float scanZ     = (cycle < 4.0)
              ? (scanner.scanRangeMax * cycle * 0.25)
              : 1.0e9;
            float scanEnv   = smoothstep(0.0, 0.5, cycle) * smoothstep(4.0, 3.5, cycle);
            float dScan     = abs(scan_posM.z - scanZ);

            // ── Lambert lighting + dot composite (mirrors ejemplo.js) ───────
            // Building base: very dark tint of dotColor (like buildingColor='#1b202d')
            vec3 scan_buildingBase = scanner.dotColor.rgb * 0.12;
            vec3 scan_dotLayer     = scanner.dotColor.rgb * dotPat * scanner.dotColor.w;
            vec3 scan_matColor     = scan_buildingBase + scan_dotLayer;

            // Scanner glow and core on top of material
            float scan_core = smoothstep(0.15, 0.0, dScan);
            float scan_glow = smoothstep(2.0,  0.0, dScan);
            scan_matColor += scanner.scanColor.rgb * scan_core * 4.0 * scanEnv;
            scan_matColor += scanner.scanColor.rgb * scan_glow * dotPat * 2.5 * scanEnv;

            // Lambert: fixed light direction (same as ejemplo.js: vec3(0.8, 0.6, -0.4))
            // scan_vNormal is in deck.gl common space (Z-up); remap to Y-up for lighting
            vec3 scan_n    = length(scan_vNormal) > 0.001 ? normalize(scan_vNormal) : vec3(0.0, 0.0, 1.0);
            vec3 scan_nYup = vec3(scan_n.x, scan_n.z, -scan_n.y); // Z-up → Y-up
            vec3 scan_L    = normalize(vec3(0.8, 0.6, -0.4));
            float scan_diff = max(dot(scan_nYup, scan_L), 0.0);

            // color = materialColor * diff + materialColor * 0.3  (ejemplo.js line 209)
            color.rgb = scan_matColor * scan_diff + scan_matColor * 0.3;
          }
        `}}}draw(e,t){let n=this.props.dotColor??rA.dotColor.value,r=this.props.dotDensity??rA.dotDensity.value,i=this.props.dotOpacity??rA.dotOpacity.value,a=this.props.scanColor??rA.scanColor.value,o=this.props.scanSpeed??rA.scanSpeed.value,s=this.props.scanRangeMax??rA.scanRangeMax.value,c=this.props.enabled??rA.enabled.value,l=(this.context?.viewport)?.distanceScales?.unitsPerMeter?.[2]??1,u=l>1e-9?1/l:1,d={scanner:{dotColor:[n[0],n[1],n[2],i],scanColor:[a[0],a[1],a[2],o],dotDensity:r,scanRangeMax:s,time:tA.current,enabled:+!!c,metersPerUnit:u,_pad0:0,_pad1:0,_pad2:0}},f=this.getModels?this.getModels():[];if(f.length>0)for(let e of f)e.shaderInputs?.setProps(d);else this.setShaderModuleProps(d)}}}));function oA(e,t,n){let r=e.length;if(r===0)return{longitude:0,latitude:0,zoom:15,pitch:60,bearing:n.bearing};let i=0,a=0;for(let[t,n]of e)i+=t,a+=n;let o=Math.max(15,Math.min(18,17-Math.log2(Math.max(1,t/20))*.4));return{longitude:i/r,latitude:a/r,zoom:o,pitch:60,bearing:n.bearing}}var sA=e((()=>{}));function cA(e){let t=uA[e];if(!t)return{};let n={};for(let[e,r]of Object.entries(t.properties))n[e]=r.default;return n}function lA(e){return Object.values(uA).filter(t=>t.category===e)}var uA,dA=e((()=>{Z(),gO(),VO(),KO(),ZO(),tk(),ve(),NA(),eA(),aA(),sA(),uA={"ambient-light":{type:`ambient-light`,label:`Ambient Light`,icon:`💡`,category:`light`,properties:{color:{kind:`color`,label:`Color`,default:`#ffffff`},intensity:{kind:`number`,label:`Intensity`,default:1,min:0,max:3,step:.05}},toDeckGlLights(e,t){let n=t.sunElevation===void 0?.5:1,r=e.values.intensity*n;return[new Fh({color:t.sunElevation===void 0?Q(e.values.color):Q(YO.getAmbientColor(t.sunElevation)),intensity:r})]},toThreeJsObjects(e,t){let n=new fe(e.values.color??`#ffffff`,0);return n.userData.fromSchema=!0,n.userData.jsxLight=!0,[n]}},"directional-light":{type:`directional-light`,label:`Directional Light`,icon:`☀️`,category:`light`,properties:{color:{kind:`color`,label:`Color`,default:`#ffee88`},intensity:{kind:`number`,label:`Intensity`,default:1.5,min:0,max:10,step:.1},directionX:{kind:`number`,label:`Dir X`,default:.5,min:-1,max:1,step:.01},directionY:{kind:`number`,label:`Dir Y`,default:-1,min:-1,max:1,step:.01},directionZ:{kind:`number`,label:`Dir Z`,default:.3,min:-1,max:1,step:.01},castShadow:{kind:`boolean`,label:`Cast Shadows`,default:!0},shadowBias:{kind:`number`,label:`Shadow Bias`,default:-.001,min:-1,max:1,step:.001}},toDeckGlLights(e,t){let n=t.getSunDirection?.(),r=n?[-n[0],-n[2],-n[1]]:[e.values.directionX,e.values.directionY,e.values.directionZ],i=t.sunElevation===void 0?Q(e.values.color):Q(YO.getSunColor(t.sunElevation)),a=t.sunElevation===void 0?.5:1;return[new Vh({color:i,intensity:e.values.intensity*a,direction:r})]},toShadowConfig(e){return e.values.castShadow?{lightDirection:[-e.values.directionX,-e.values.directionY,-e.values.directionZ],bias:e.values.shadowBias,mapSize:1024,intensity:.6}:null},toThreeJsObjects(e,t){let n=new Se(e.values.color??`#ffee88`,0);return n.userData.fromSchema=!0,n.userData.jsxLight=!0,[n]}},"point-light":{type:`point-light`,label:`Point Light`,icon:`🔦`,category:`light`,properties:{color:{kind:`color`,label:`Color`,default:`#ffffff`},intensity:{kind:`number`,label:`Intensity`,default:1,min:0,max:10,step:.1},positionX:{kind:`number`,label:`Pos X`,default:0,min:-500,max:500,step:1},positionY:{kind:`number`,label:`Pos Y`,default:0,min:-500,max:500,step:1},positionZ:{kind:`number`,label:`Pos Z`,default:50,min:0,max:500,step:1},attenuation:{kind:`number`,label:`Attenuation`,default:0,min:0,max:1,step:.01}},toDeckGlLights(e,t){return[new zg({color:Q(e.values.color),intensity:e.values.intensity,position:[e.values.positionX,e.values.positionY,e.values.positionZ],attenuation:[1,e.values.attenuation,0]})]},toThreeJsObjects(e,t){let n=e.values.color??`#ffffff`,r=e.values.intensity??1,i=e.values.positionX??0,a=e.values.positionY??0,o=e.values.positionZ??50,s=new Ce(n,r,500,1);return s.position.set(i,a,o),s.userData.fromSchema=!0,[s]}},"camera-light":{type:`camera-light`,label:`Camera Light`,icon:`📷`,category:`light`,properties:{color:{kind:`color`,label:`Color`,default:`#ffffff`},intensity:{kind:`number`,label:`Intensity`,default:1,min:0,max:10,step:.1}},toDeckGlLights(e,t){return[new Vg({color:Q(e.values.color),intensity:e.values.intensity})]}},"sun-light":{type:`sun-light`,label:`Sun Light`,icon:`☀️`,category:`light`,properties:{color:{kind:`color`,label:`Color`,default:`#ffee88`},intensity:{kind:`number`,label:`Intensity`,default:1,min:0,max:10,step:.1},castShadow:{kind:`boolean`,label:`Cast Shadows`,default:!1}},toDeckGlLights(e,t){let n=t.sunElevation===void 0?Date.now():new Date;return[new f_({color:Q(e.values.color),intensity:e.values.intensity,timestamp:n,_shadow:e.values.castShadow})]},toThreeJsObjects(e,t){let n=new Se(e.values.color??`#ffee88`,e.values.intensity??1);if(t.getSunDirection){let[e,r,i]=t.getSunDirection();n.position.set(e*500,r*500,i*500)}else n.position.set(500,300,-300);let r=t.sunElevation;return r!==void 0&&r<0&&(n.intensity=0),n.castShadow=e.values.castShadow??!1,n.userData.fromSchema=!0,n.userData.sunLight=!0,[n]}},"building-mesh":{type:`building-mesh`,label:`Buildings`,icon:`🏢`,category:`mesh`,properties:{opacity:{kind:`number`,label:`Opacity`,default:1,min:0,max:1,step:.05},color:{kind:`color`,label:`Tint`,default:`#888899`},wireframe:{kind:`boolean`,label:`Wireframe`,default:!0},wireframeColor:{kind:`color`,label:`Wireframe Color`,default:`#4a4a55`},ambient:{kind:`number`,label:`Ambient`,default:.3,min:0,max:1,step:.05},diffuse:{kind:`number`,label:`Diffuse`,default:.7,min:0,max:1,step:.05},shininess:{kind:`number`,label:`Shininess`,default:0,min:0,max:1,step:.05},unselectedOpacity:{kind:`number`,label:`Unselected Opacity`,default:.15,min:0,max:1,step:.05},scannerEnabled:{kind:`boolean`,label:`Scanner`,default:!1},dotDensity:{kind:`number`,label:`Dot Density`,default:12,min:2,max:24,step:1},dotColor:{kind:`color`,label:`Dot Color`,default:`#436e84`},dotOpacity:{kind:`number`,label:`Dot Opacity`,default:.4,min:0,max:1,step:.05},scanColor:{kind:`color`,label:`Scanner Color`,default:`#00ccff`},scanSpeed:{kind:`number`,label:`Scan Speed`,default:.7,min:.1,max:3,step:.1},windowEmissiveIntensity:{kind:`number`,label:`Window Emissive`,default:0,min:0,max:5,step:.1},windowLitFraction:{kind:`number`,label:`Window Lit Fraction`,default:.5,min:0,max:1,step:.05},windowReflectionIntensity:{kind:`number`,label:`Window Reflections`,default:.6,min:0,max:2,step:.05},windowGridScale:{kind:`number`,label:`Window Grid Scale`,default:40,min:10,max:80,step:5},windowEmissiveColor:{kind:`color`,label:`Window Color`,default:`#ffcc88`}},toDeckGlLayers(e,t){let n=t.geoJsonData?.buildings;if(!n)return[];let r=n?.features??[],i=e.values.opacity??1,a=Q(e.values.color??`#888899`),o=e.values.wireframe??!1,s=Q(e.values.wireframeColor??`#4a4a55`),c=e.values.ambient??.3,l=e.values.diffuse??.7,u=e.values.shininess??0,d=e.values.unselectedOpacity??.15,f=t.selectedBuildingId,p=t.hoveredBuildingId,m=[...GO(t.sunElevation===void 0?`#fff8e0`:YO.getSunColor(t.sunElevation)),255],h=!!((e.values.scannerEnabled??!1)||t.scannerActive),g=e=>e.split(`.`).pop(),_=$k.getState().buildingFilters,v=_&&Object.values(_).some(e=>e.enabled),y={extensions:[new zO({filterSize:1})],filterEnabled:v??!1,filterRange:[1,1],getFilterValue:e=>{if(!_||!v)return 1;let t=e.properties??{};for(let[e,n]of Object.entries(_))if(n.enabled){if(`values`in n){let r=n;if(r.values.length===0)continue;if(!r.values.includes(String(t[g(e)]??``)))return 0}else if(`min`in n){let r=n,i=Number(t[g(e)]??NaN);if(isNaN(i)||i<r.min||i>r.max)return 0}else if(`value`in n){let r=n;if(!r.value)continue;let i=String(t[g(e)]??``).toLowerCase();if(e.endsWith(`ipAddress`)){if(!i.startsWith(r.value))return 0}else if(!i.includes(r.value.toLowerCase()))return 0}}return 1},updateTriggers:{getFilterValue:[_],filterEnabled:[v]}},b={id:`buildings-${e.id}-${h?`scan`:`lit`}`,data:r,extruded:!0,wireframe:!h&&o,pickable:!0,onClick:e=>{let t=e.object?.properties?.buildingId;if(!t)return;let n=MA.getState(),r=$k.getState(),i=r.selectedBuildingId===t;if(r.setSelectedBuildingId(i?null:t),!i){let t=e.object?.geometry?.coordinates?.[0];if(t&&t.length>0){let r=e.object?.properties?.height??20;n.setFlyToTarget(oA(t,r,{bearing:n.camBearing}))}}},onHover:e=>{$k.getState().setHoveredBuildingId(e.object?.properties?.buildingId??null);let t=document.querySelector(`.mapboxgl-canvas`);t&&(t.style.cursor=e.object?`pointer`:``)},getPolygon:e=>e.geometry.coordinates[0],getElevation:e=>e.properties.height,getFillColor:e=>{let t=f!=null&&e.properties?.buildingId!==f?i*d:i;return[a[0],a[1],a[2],Math.round(255*t)]},getLineColor:e=>{if(p!=null&&e.properties?.buildingId===p)return m;let t=f!=null&&e.properties?.buildingId!==f?i*d:i;return!h&&o?[s[0],s[1],s[2],255]:[a[0],a[1],a[2],Math.round(255*t)]},getLineWidth:e=>p!=null&&e.properties?.buildingId===p?3:2,lineWidthUnits:`pixels`,updateTriggers:{getFillColor:[i,a,f,d],getLineColor:[h,o,i,a,f,d,p,m],getLineWidth:[p],shadowEnabled:[t.shadowsEnabled]}},x=e.values.dotDensity??12,S=HO(e.values.dotColor??`#436e84`),C=e.values.dotOpacity??.4,w=HO(e.values.scanColor??`#00ccff`),T=e.values.scanSpeed??.7,E={dotDensity:x,dotColor:S,dotOpacity:C,scanColor:w,scanSpeed:T,enabled:!0},D=f?r.find(e=>e.properties?.buildingId===f)??null:null,O=D?new kE({...b,id:`buildings-${e.id}-scan-selected`,data:[D],shadowEnabled:!1,material:{ambient:1,diffuse:0,shininess:0},scanRangeMax:(D.properties?.height??20)*1.1,...E,extensions:[new iA],updateTriggers:{...b.updateTriggers,extensions:[f,x,S,C,w,T,D.properties?.height]}}):null,k=h,A=!h,j=(()=>{let e=0;for(let t of r)e=Math.max(e,t.properties?.height??0);return e>0?e*1.1:80})(),M=[new kE({...b,id:`buildings-${e.id}-scan`,visible:k,...y,shadowEnabled:!1,material:{ambient:1,diffuse:0,shininess:0},scanRangeMax:j,...E,extensions:[...y.extensions??[],new iA],updateTriggers:{...b.updateTriggers,...y.updateTriggers,extensions:[x,S,C,w,T,j]}}),new kE({...b,id:`buildings-${e.id}-lit`,visible:A,...y,shadowEnabled:t.shadowsEnabled??!0,material:{ambient:c,diffuse:l,shininess:u},updateTriggers:{...b.updateTriggers,...y.updateTriggers}})];return O&&M.push(O),M},toThreeJsObjects(e,t){let n=t.geoJsonData?.buildings;if(!n?.features)return[];let r=e.values.color??`#888899`,i=e.values.opacity??1,a=[];for(let e of n.features){let t=e.properties??{},n=t.height??10,o=e.geometry?.coordinates;if(!o)continue;let s=new _e({color:t.color??r,transparent:i<1,opacity:i,roughness:.6,metalness:.1}),c=t.id??t.buildingId??e.id??``;if(e.geometry.type===`Polygon`){let e=new ge($O(o,n),s);e.castShadow=!0,e.receiveShadow=!0,e.userData.buildingId=c,a.push(e)}else if(e.geometry.type===`MultiPolygon`)for(let e of o){let t=new ge($O(e,n),s);t.castShadow=!0,t.receiveShadow=!0,t.userData.buildingId=c,a.push(t)}}return a},defaultInject:{"fs:DECKGL_FILTER_COLOR":`// custom building shader code here`}},"road-mesh":{type:`road-mesh`,label:`Roads`,icon:`🛣️`,category:`mesh`,properties:{opacity:{kind:`number`,label:`Opacity`,default:1,min:0,max:1,step:.05},color:{kind:`color`,label:`Color`,default:`#aaaaaa`},lineWidth:{kind:`number`,label:`Line Width`,default:2,min:.5,max:20,step:.5},sunBrightness:{kind:`boolean`,label:`Sun Brightness`,default:!0}},toDeckGlLayers(e,t){let n=t.geoJsonData?.roads;if(!n)return[];let r=e.values.opacity??1,i=Q(e.values.color??`#aaaaaa`),a=e.values.sunBrightness??!0,o=a&&t.sunElevation!==void 0?Math.max(.35,Math.min(1,(t.sunElevation+15)/25)):1;return[new mO({id:`roads-${e.id}`,data:n,shadowEnabled:!1,lineWidthUnits:`pixels`,getLineColor:()=>[Math.round(i[0]*o),Math.round(i[1]*o),Math.round(i[2]*o),Math.round(255*r)],getLineWidth:e.values.lineWidth??2,updateTriggers:{getLineColor:[r,i,a,t.sunElevation]}})]},toThreeJsObjects(e,t){let n=t.geoJsonData?.roads;if(!n?.features)return[];let r=e.values.color??`#aaaaaa`,i=e.values.opacity??1,a=[];for(let e of n.features){let t=e.geometry?.coordinates;if(t){if(e.geometry.type===`LineString`){let e=ek(t),n=new ne({color:r,transparent:i<1,opacity:i});a.push(new ce(e,n))}else if(e.geometry.type===`MultiLineString`)for(let e of t){let t=ek(e),n=new ne({color:r,transparent:i<1,opacity:i});a.push(new ce(t,n))}}}return a}},"park-mesh":{type:`park-mesh`,label:`Parks`,icon:`🌳`,category:`mesh`,properties:{opacity:{kind:`number`,label:`Opacity`,default:1,min:0,max:1,step:.05},color:{kind:`color`,label:`Color`,default:`#50a050`},extruded:{kind:`boolean`,label:`Extruded`,default:!0},elevation:{kind:`number`,label:`Elevation`,default:.3,min:0,max:10,step:.1},ambient:{kind:`number`,label:`Ambient`,default:.3,min:0,max:1,step:.05},diffuse:{kind:`number`,label:`Diffuse`,default:.7,min:0,max:1,step:.05},shininess:{kind:`number`,label:`Shininess`,default:0,min:0,max:1,step:.05},wireframe:{kind:`boolean`,label:`Wireframe`,default:!1}},toDeckGlLayers(e,t){let n=t.geoJsonData?.parks;if(!n)return[];let r=e.values.opacity??1,i=Q(e.values.color??`#50a050`),a=e.values.extruded??!0,o=e.values.elevation??.3,s=e.values.ambient??.3,c=e.values.diffuse??.7,l=e.values.shininess??0,u=e.values.wireframe??!1,d=[i[0],i[1],i[2],Math.round(255*r*.6)];return[new mO({id:`parks-${e.id}`,data:n,filled:!0,extruded:a,shadowEnabled:!1,getElevation:o,getFillColor:d,wireframe:u,getLineColor:()=>d,getLineWidth:1,lineWidthUnits:`pixels`,material:{ambient:s,diffuse:c,shininess:l},updateTriggers:{getFillColor:[r,i],getLineColor:[u,r,i],getElevation:[o]}})]},toThreeJsObjects(e,t){let n=t.geoJsonData?.parks;if(!n?.features)return[];let r=e.values.color??`#50a050`,i=e.values.opacity??1,a=e.values.elevation??.3,o=[];for(let e of n.features){let t=e.geometry?.coordinates;if(!t)continue;let n=new _e({color:r,transparent:i<1,opacity:i*.6,roughness:.8,side:2});if(e.geometry.type===`Polygon`){let e=new ge(QO(t),n);e.position.y=a,e.receiveShadow=!0,o.push(e)}else if(e.geometry.type===`MultiPolygon`)for(let e of t){let t=new ge(QO(e),n);t.position.y=a,t.receiveShadow=!0,o.push(t)}}return o}},"river-mesh":{type:`river-mesh`,label:`River`,icon:`🌊`,category:`mesh`,properties:{opacity:{kind:`number`,label:`Opacity`,default:1,min:0,max:1,step:.05},color:{kind:`color`,label:`Color`,default:`#1e78c8`},extruded:{kind:`boolean`,label:`Extruded`,default:!0},elevation:{kind:`number`,label:`Elevation`,default:.3,min:0,max:10,step:.1},ambient:{kind:`number`,label:`Ambient`,default:.3,min:0,max:1,step:.05},diffuse:{kind:`number`,label:`Diffuse`,default:.7,min:0,max:1,step:.05},shininess:{kind:`number`,label:`Shininess`,default:0,min:0,max:1,step:.05},wireframe:{kind:`boolean`,label:`Wireframe`,default:!1}},toDeckGlLayers(e,t){let n=t.geoJsonData?.river;if(!n)return[];let r=e.values.opacity??1,i=Q(e.values.color??`#1e78c8`),a=e.values.extruded??!0,o=e.values.elevation??.3,s=e.values.ambient??.3,c=e.values.diffuse??.7,l=e.values.shininess??0,u=e.values.wireframe??!1,d=[i[0],i[1],i[2],Math.round(255*r*.7)];return[new mO({id:`river-${e.id}`,data:n,filled:!0,extruded:a,shadowEnabled:!1,getElevation:o,getFillColor:d,wireframe:u,getLineColor:()=>d,getLineWidth:1,lineWidthUnits:`pixels`,material:{ambient:s,diffuse:c,shininess:l},updateTriggers:{getFillColor:[r,i],getLineColor:[u,r,i],getElevation:[o]}})]},toThreeJsObjects(e,t){let n=t.geoJsonData?.river;if(!n?.features)return[];let r=e.values.color??`#1e78c8`,i=e.values.opacity??1,a=e.values.elevation??.3,o=[];for(let e of n.features){let t=e.geometry?.coordinates;if(!t)continue;let n=new _e({color:r,transparent:i<1,opacity:i*.7,roughness:.3,metalness:.2,side:2});if(e.geometry.type===`Polygon`){let e=new ge(QO(t),n);e.position.y=a,e.receiveShadow=!0,o.push(e)}else if(e.geometry.type===`MultiPolygon`)for(let e of t){let t=new ge(QO(e),n);t.position.y=a,t.receiveShadow=!0,o.push(t)}}return o}},"sea-mesh":{type:`sea-mesh`,label:`Sea`,icon:`🌊`,category:`mesh`,properties:{opacity:{kind:`number`,label:`Opacity`,default:1,min:0,max:1,step:.05},color:{kind:`color`,label:`Color`,default:`#1a6ea0`},extruded:{kind:`boolean`,label:`Extruded`,default:!0},elevation:{kind:`number`,label:`Elevation`,default:.3,min:0,max:10,step:.1},ambient:{kind:`number`,label:`Ambient`,default:.3,min:0,max:1,step:.05},diffuse:{kind:`number`,label:`Diffuse`,default:.7,min:0,max:1,step:.05},shininess:{kind:`number`,label:`Shininess`,default:0,min:0,max:1,step:.05},wireframe:{kind:`boolean`,label:`Wireframe`,default:!1}},toDeckGlLayers(e,t){let n=t.geoJsonData?.seaPolygon;if(!n)return[];let r=e.values.opacity??1,i=Q(e.values.color??`#1a6ea0`),a=e.values.extruded??!0,o=e.values.elevation??.3,s=e.values.ambient??.3,c=e.values.diffuse??.7,l=e.values.shininess??0,u=e.values.wireframe??!1,d=[i[0],i[1],i[2],Math.round(255*r*.7)];return[new mO({id:`sea-${e.id}`,data:n,filled:!0,extruded:a,shadowEnabled:!1,getElevation:o,getFillColor:d,wireframe:u,getLineColor:()=>d,getLineWidth:1,lineWidthUnits:`pixels`,material:{ambient:s,diffuse:c,shininess:l},updateTriggers:{getFillColor:[r,i],getLineColor:[u,r,i],getElevation:[o]}})]},toThreeJsObjects(e,t){let n=t.geoJsonData?.seaPolygon;if(!n?.features)return[];let r=e.values.color??`#1a6ea0`,i=e.values.opacity??1,a=e.values.elevation??.3,o=[];for(let e of n.features){let t=e.geometry?.coordinates;if(!t)continue;let n=new _e({color:r,transparent:i<1,opacity:i*.7,roughness:.2,metalness:.3,side:2});if(e.geometry.type===`Polygon`){let e=new ge(QO(t),n);e.position.y=a,e.receiveShadow=!0,o.push(e)}else if(e.geometry.type===`MultiPolygon`)for(let e of t){let t=new ge(QO(e),n);t.position.y=a,t.receiveShadow=!0,o.push(t)}}return o}},terrain:{type:`terrain`,label:`Terrain`,icon:`⛰️`,category:`environment`,properties:{enabled:{kind:`boolean`,label:`Enabled`,default:!1},exaggeration:{kind:`number`,label:`Exaggeration`,default:1,min:.5,max:2,step:.1}},toMapboxEffects(e,t){return[{type:`terrain`,enabled:e.values.enabled,exaggeration:e.values.exaggeration}]}},fog:{type:`fog`,label:`Fog`,icon:`🌫️`,category:`environment`,properties:{enabled:{kind:`boolean`,label:`Enabled`,default:!0},color:{kind:`color`,label:`Color`,default:`#f0ece0`},density:{kind:`number`,label:`Density`,default:2e-4,min:0,max:.01,step:1e-4},near:{kind:`number`,label:`Near`,default:50,min:0,max:500,step:10},far:{kind:`number`,label:`Far`,default:800,min:100,max:2e3,step:10}},toMapboxEffects(e,t){let n=e.values;return[{type:`fog`,enabled:n.enabled,color:n.color,range:[n.near,n.far],density:n.density}]}},"shadow-settings":{type:`shadow-settings`,label:`Shadows`,icon:`🔲`,category:`light`,properties:{enabled:{kind:`boolean`,label:`Enable Shadows`,default:!0},color:{kind:`color`,label:`Shadow Color`,default:`#000000`},opacity:{kind:`number`,label:`Opacity`,default:.5,min:0,max:1,step:.05},maxBuildingHeight:{kind:`number`,label:`Max Building Height (m)`,default:500,min:50,max:2e3,step:50},mapSize:{kind:`select`,label:`Shadow Map Resolution`,default:`4096`,options:[`512`,`1024`,`2048`,`4096`,`8192`]},bias:{kind:`number`,label:`Depth Bias`,default:.005,min:1e-4,max:.05,step:5e-4},pcfRadius:{kind:`number`,label:`PCF Radius (softness)`,default:6,min:1,max:16,step:1},lightSize:{kind:`number`,label:`Light Size (penumbra)`,default:8,min:.5,max:40,step:.5},minSunElevation:{kind:`number`,label:`Min Sun Elevation (°)`,default:3,min:0,max:30,step:1}}},"custom-geojson":{type:`custom-geojson`,label:`Custom GeoJSON`,icon:`🗺️`,category:`custom`,properties:{url:{kind:`text`,label:`GeoJSON URL`,default:``},fillColor:{kind:`color`,label:`Fill`,default:`#ff6600`},fillOpacity:{kind:`number`,label:`Fill Opacity`,default:.5,min:0,max:1,step:.05},lineColor:{kind:`color`,label:`Stroke`,default:`#ff6600`},lineWidth:{kind:`number`,label:`Stroke Width`,default:2,min:0,max:20,step:1},extruded:{kind:`boolean`,label:`Extruded`,default:!1},height:{kind:`number`,label:`Height`,default:10,min:0,max:200,step:1}},toDeckGlLayers(e,t){let n=e.values;return n.url?[new mO({id:`custom-${e.id}`,data:n.url,shadowEnabled:!1,filled:!0,extruded:n.extruded,getFillColor:[...Q(n.fillColor),Math.round(n.fillOpacity*255)],getLineColor:Q(n.lineColor),getLineWidth:n.lineWidth,getElevation:n.height})]:[]},toThreeJsObjects(e,t){return[]}},vignette:{type:`vignette`,label:`Vignette`,icon:`🎨`,category:`effect`,properties:{intensity:{kind:`number`,label:`Intensity`,default:.2,min:0,max:1,step:.05},offset:{kind:`number`,label:`Offset`,default:.3,min:0,max:1,step:.05}},toCssEffects(e){let t=e.values.intensity,n=e.values.offset*50;return[{key:`vignette`,style:{position:`absolute`,inset:0,pointerEvents:`none`,zIndex:10,background:`radial-gradient(ellipse at center, transparent ${n}%, rgba(0,0,0,${t}) ${Math.min(n+50,100)}%)`}}]}},"tone-mapping":{type:`tone-mapping`,label:`Tone Mapping`,icon:`🎨`,category:`effect`,properties:{exposure:{kind:`number`,label:`Exposure`,default:1.2,min:.1,max:3,step:.1},contrast:{kind:`number`,label:`Contrast`,default:1,min:0,max:3,step:.05},saturation:{kind:`number`,label:`Saturation`,default:1,min:0,max:3,step:.05}},toCssEffects(e){return[{key:`tone-mapping`,style:{position:`absolute`,inset:0,pointerEvents:`none`,zIndex:11,filter:`brightness(${e.values.exposure}) contrast(${e.values.contrast}) saturate(${e.values.saturation})`}}]}},camera:{type:`camera`,label:`Camera`,icon:`📷`,category:`camera`,properties:{lat:{kind:`number`,label:`Latitude`,default:39.47,min:-90,max:90,step:.01},lon:{kind:`number`,label:`Longitude`,default:-.38,min:-180,max:180,step:.01},zoom:{kind:`number`,label:`Zoom`,default:14,min:0,max:22,step:.1},pitch:{kind:`number`,label:`Pitch`,default:45,min:0,max:85,step:1},bearing:{kind:`number`,label:`Bearing`,default:0,min:-180,max:180,step:1}}},"time-controls":{type:`time-controls`,label:`Time Controls`,icon:`🕐`,category:`effect`,properties:{timeSpeed:{kind:`number`,label:`Time Speed`,default:1,min:0,max:120,step:1},simulationDate:{kind:`text`,label:`Simulation Date`,default:``}}},"spot-light":{type:`spot-light`,label:`Spot Light`,icon:`🔦`,category:`light`,properties:{color:{kind:`color`,label:`Color`,default:`#ffffff`},intensity:{kind:`number`,label:`Intensity`,default:1,min:0,max:10,step:.1},distance:{kind:`number`,label:`Distance`,default:200,min:0,max:2e3,step:10},angle:{kind:`number`,label:`Angle (°)`,default:30,min:0,max:90,step:1},penumbra:{kind:`number`,label:`Penumbra`,default:.1,min:0,max:1,step:.01},decay:{kind:`number`,label:`Decay`,default:1,min:0,max:5,step:.1},positionX:{kind:`number`,label:`Pos X`,default:0,min:-500,max:500,step:1},positionY:{kind:`number`,label:`Pos Y`,default:0,min:-500,max:500,step:1},positionZ:{kind:`number`,label:`Pos Z`,default:100,min:0,max:500,step:1},castShadow:{kind:`boolean`,label:`Cast Shadow`,default:!1}},toThreeJsObjects(e,t){let n=e.values.color??`#ffffff`,r=e.values.intensity??1,i=e.values.distance??200,a=(e.values.angle??30)*(Math.PI/180),o=e.values.penumbra??.1,s=e.values.decay??1,c=e.values.positionX??0,l=e.values.positionY??0,u=e.values.positionZ??100,d=new re(n,r,i,a,o,s);return d.position.set(c,l,u),d.castShadow=e.values.castShadow??!1,d.userData.fromSchema=!0,[d]}},"rect-area-light":{type:`rect-area-light`,label:`Rect Area Light`,icon:`💡`,category:`light`,properties:{color:{kind:`color`,label:`Color`,default:`#ffffff`},intensity:{kind:`number`,label:`Intensity`,default:1,min:0,max:20,step:.1},width:{kind:`number`,label:`Width`,default:10,min:.1,max:200,step:.5},height:{kind:`number`,label:`Height`,default:10,min:.1,max:200,step:.5},positionX:{kind:`number`,label:`Pos X`,default:0,min:-500,max:500,step:1},positionY:{kind:`number`,label:`Pos Y`,default:0,min:-500,max:500,step:1},positionZ:{kind:`number`,label:`Pos Z`,default:50,min:0,max:500,step:1}},toThreeJsObjects(e,t){let n=e.values.color??`#ffffff`,r=e.values.intensity??1,i=e.values.width??10,a=e.values.height??10,o=e.values.positionX??0,s=e.values.positionY??0,c=e.values.positionZ??50,l=new ie(n,r,i,a);return l.position.set(o,s,c),l.lookAt(0,0,0),l.userData.fromSchema=!0,[l]}},"hemisphere-light":{type:`hemisphere-light`,label:`Hemisphere Light`,icon:`🌐`,category:`light`,properties:{skyColor:{kind:`color`,label:`Sky Color`,default:`#87ceeb`},groundColor:{kind:`color`,label:`Ground Color`,default:`#8b7355`},intensity:{kind:`number`,label:`Intensity`,default:.6,min:0,max:5,step:.05}},toThreeJsObjects(e,t){let n=new ae(e.values.skyColor??`#87ceeb`,e.values.groundColor??`#8b7355`,e.values.intensity??.6);return n.userData.fromSchema=!0,[n]}},"primitive-mesh":{type:`primitive-mesh`,label:`Primitive Mesh`,icon:`◾`,category:`mesh`,properties:{geometry:{kind:`select`,label:`Geometry`,default:`box`,options:[`box`,`sphere`,`plane`,`cylinder`,`torus`,`cone`]},color:{kind:`color`,label:`Color`,default:`#aaaaaa`},sizeX:{kind:`number`,label:`Size X`,default:10,min:.01,max:1e3,step:.5},sizeY:{kind:`number`,label:`Size Y`,default:10,min:.01,max:1e3,step:.5},sizeZ:{kind:`number`,label:`Size Z`,default:10,min:.01,max:1e3,step:.5},positionX:{kind:`number`,label:`Pos X`,default:0,min:-2e3,max:2e3,step:1},positionY:{kind:`number`,label:`Pos Y`,default:0,min:-2e3,max:2e3,step:1},positionZ:{kind:`number`,label:`Pos Z`,default:0,min:-2e3,max:2e3,step:1},castShadow:{kind:`boolean`,label:`Cast Shadow`,default:!0},receiveShadow:{kind:`boolean`,label:`Receive Shadow`,default:!0},wireframe:{kind:`boolean`,label:`Wireframe`,default:!1}},toThreeJsObjects(e,t){let n=e.values.geometry??`box`,r=e.values.sizeX??10,i=e.values.sizeY??10,a=e.values.sizeZ??10,o=e.values.color??`#aaaaaa`,s=e.values.positionX??0,c=e.values.positionY??0,l=e.values.positionZ??0,u;switch(n){case`sphere`:u=new le(r/2,32,16);break;case`plane`:u=new me(r,i);break;case`cylinder`:u=new pe(r/2,r/2,i,32);break;case`torus`:u=new ue(r/2,i/4,16,64);break;case`cone`:u=new xe(r/2,i,32);break;default:u=new be(r,i,a)}let d=new _e({color:o,wireframe:e.values.wireframe??!1}),f=new ge(u,d);return f.position.set(s,c,l),f.castShadow=e.values.castShadow??!0,f.receiveShadow=e.values.receiveShadow??!0,f.name=e.label||`Primitive`,f.userData.fromSchema=!0,f.userData.schemaNodeId=e.id,[f]}},"map-style":{type:`map-style`,label:`Map Style`,icon:`🗺️`,category:`effect`,properties:{style:{kind:`select`,label:`Style`,default:`game`,options:[`openfree`,`mapbox_standard`,`mapbox_street`,`mapbox_dark`,`mapbox_satellite`,`cool_custom`,`clean_standard`,`game`]}}}}}));function fA(e,t,n,r,i){let a=JSON.stringify({roads:e,coastline:t,river:n,parks:r,buildings:i}),o=5381;for(let e=0;e<a.length;e++)o=(o<<5)+o+a.charCodeAt(e)>>>0;return`p-${o.toString(36)}`}function pA(e){return{seed:fA(e.roadsConfig,e.coastlineConfig,e.riverConfig,e.parksConfig,e.buildingsConfig),seedDerivedFromParams:!0}}function mA(e,t,n){return[{seed:t,timestamp:Date.now(),derivedFromParams:n},...e.filter(e=>e.seed!==t)].slice(0,20)}var hA,gA,_A,vA,yA,bA,$,xA,SA,CA,wA,TA,EA,DA,OA,kA,AA,jA,MA,NA=e((()=>{i(),a(),ot(),ut(),Qe(),Xe(),dA(),l(),hA={main:{dsep:400,dtest:200,dlookahead:500},major:{dsep:100,dtest:30,dlookahead:200},minor:{dsep:20,dtest:15,dlookahead:40}},gA={enabled:!0,noise:{enabled:!0,size:200,angle:30}},_A={enabled:!0,noise:{enabled:!0,size:100,angle:45},bankSize:10,size:5},vA={enabled:!0,numBigParks:3,numSmallParks:0,clusterBigParks:!1,minParkArea:50},yA={maxLength:20,minArea:50,shrinkSpacing:4,chanceNoDivide:.5,maxDivisions:3},bA={status:`idle`,phase:`initializing`,progress:0,error:null},$={seed:`default-city`,viewMode:c()?`2d`:`3d-sun`,colorSchemeId:`default`,useRandomSeed:!1,seedDerivedFromParams:!1,generationWidth:Ye.width,generationHeight:Ye.height,generationHistory:[],geoCoordinates:null,geoCoordinatesOverride:!1,sunAngle:135,sunElevation:35,sunColor:`#fcf7e7`,ambientColor:`#99bbdd`,ambientIntensity:.2,directionalIntensity:1.5,baseAmbientIntensity:.05,ambientLightEnabled:!0,mapStyle:`game`,useRealTime:!1,timeOfDay:9.5,timeSpeed:1,simulationDate:null,camLat:39.4699,camLon:-.3763,camZoom:14,camPitch:45,camBearing:0,flyToTarget:null,threeFlyToTarget:null,fogEnabled:!0,fogDensity:2e-4,fogNear:50,fogFar:800,fogColor:`#f0ece0`,skyTurbidity:2,skyRayleigh:1,skyMieCoefficient:.005,skyMieDirectionalG:.8,terrainEnabled:!0,terrainExaggeration:1,roadWidthMain:Ze.main,roadWidthMajor:Ze.major,roadWidthMinor:Ze.minor,buildingsEnabled:!0,roadsEnabled:!0,parksEnabled:!0,riverEnabled:!0,seaEnabled:!0,wireframeColor:`#4a4a55`,vignetteIntensity:.0425,vignetteOffset:.3,vignetteEnabled:!0,toneMappingType:4,toneMappingExposure:1.2,toneMappingContrast:1,toneMappingSaturation:1,shadowMapType:2,shadowNormalBias:0,ssaoSamples:16,ssaoRings:4,ssaoRadius:1.5,ssaoIntensity:25,ssaoBias:.025,ssaoLuminanceInfluence:.6,ssaoColor:``,bloomLuminanceThreshold:.6,bloomLuminanceSmoothing:.9,bloomIntensityOverride:.5,bloomRadius:.4,bloomLevels:8,bloomMipmapBlur:!0,ambientBoostFactor:1.8,hemiLightSkyColor:`#87ceeb`,hemiLightGroundColor:`#3a3a2e`,hemiLightIntensity:.4,roadsConfig:hA,coastlineConfig:gA,riverConfig:_A,parksConfig:vA,buildingsConfig:yA,riverOpacity:1,parksOpacity:1,roadsOpacity:1,seaOpacity:1,buildingsOpacity:1,buildingTint:`#ffffff`,buildingShininess:0,buildingWireframe:!1,roadColor:`#aaaaaa`,riverColor:`#1e78c8`,seaColor:`#1a6ea0`,parkColor:`#50a050`,windowEmissiveIntensity:0,windowLitFraction:.5,windowReflectionIntensity:0,windowGridScale:.5,windowEmissiveColor:`#ffcc88`,floorHeight:3.5,normalStrength:.2,cementRelief:.15,aoCavityStrength:.2,scannerEnabled:!1,scanColor:`#00ccff`,scanSpeed:.7,dotColor:`#436e84`,dotDensity:12,dotOpacity:.4,generation:bA,mapData:null,buildings:[],tensorField:null,highlightedNeighborhoodId:null,sceneNodes:[],sceneGraphTree:null,sceneObjectMap:{},selectedObjectUuid:null,selectedPropertyGroup:null},xA={fogEnabled:$.fogEnabled,fogDensity:$.fogDensity,fogNear:$.fogNear,fogFar:$.fogFar,fogColor:$.fogColor},SA={skyTurbidity:$.skyTurbidity,skyRayleigh:$.skyRayleigh,skyMieCoefficient:$.skyMieCoefficient,skyMieDirectionalG:$.skyMieDirectionalG},CA={toneMappingType:$.toneMappingType,toneMappingExposure:$.toneMappingExposure,toneMappingContrast:$.toneMappingContrast,toneMappingSaturation:$.toneMappingSaturation},wA={shadowMapType:$.shadowMapType,shadowNormalBias:$.shadowNormalBias},TA={ssaoSamples:$.ssaoSamples,ssaoRings:$.ssaoRings,ssaoRadius:$.ssaoRadius,ssaoIntensity:$.ssaoIntensity,ssaoBias:$.ssaoBias,ssaoLuminanceInfluence:$.ssaoLuminanceInfluence,ssaoColor:$.ssaoColor},EA={bloomLuminanceThreshold:$.bloomLuminanceThreshold,bloomLuminanceSmoothing:$.bloomLuminanceSmoothing,bloomIntensityOverride:$.bloomIntensityOverride,bloomRadius:$.bloomRadius,bloomLevels:$.bloomLevels,bloomMipmapBlur:$.bloomMipmapBlur},DA={hemiLightSkyColor:$.hemiLightSkyColor,hemiLightGroundColor:$.hemiLightGroundColor,hemiLightIntensity:$.hemiLightIntensity},OA=$.ambientBoostFactor,kA=`sunAngle.sunElevation.ambientIntensity.directionalIntensity.baseAmbientIntensity.timeOfDay.timeSpeed.camLat.camLon.camZoom.camPitch.camBearing.fogDensity.fogNear.fogFar.skyTurbidity.skyRayleigh.skyMieCoefficient.skyMieDirectionalG.toneMappingType.shadowMapType.shadowNormalBias.ssaoRings.ssaoBias.bloomLevels.vignetteIntensity.vignetteOffset.toneMappingExposure.toneMappingContrast.toneMappingSaturation.ssaoSamples.ssaoRadius.ssaoIntensity.ssaoLuminanceInfluence.bloomLuminanceThreshold.bloomLuminanceSmoothing.bloomIntensityOverride.bloomRadius.terrainExaggeration.roadWidthMain.roadWidthMajor.roadWidthMinor.riverOpacity.parksOpacity.roadsOpacity.seaOpacity.buildingsOpacity.buildingShininess.windowEmissiveIntensity.windowLitFraction.windowReflectionIntensity.windowGridScale.floorHeight.normalStrength.cementRelief.aoCavityStrength.scanSpeed.dotDensity.dotOpacity.ambientBoostFactor.hemiLightIntensity`.split(`.`),AA=[`useRealTime`,`fogEnabled`,`bloomMipmapBlur`,`terrainEnabled`,`buildingsEnabled`,`roadsEnabled`,`parksEnabled`,`riverEnabled`,`seaEnabled`,`buildingWireframe`,`scannerEnabled`,`ambientLightEnabled`,`vignetteEnabled`],jA=[`sunColor`,`ambientColor`,`fogColor`,`wireframeColor`,`ssaoColor`,`hemiLightSkyColor`,`hemiLightGroundColor`,`buildingTint`,`roadColor`,`riverColor`,`seaColor`,`parkColor`,`windowEmissiveColor`,`scanColor`,`dotColor`],MA=r()(o(e=>({...$,setSeed:t=>e({seed:t,seedDerivedFromParams:!1}),setViewMode:t=>e({viewMode:t}),setColorSchemeId:t=>e({colorSchemeId:t}),setUseRandomSeed:t=>e({useRandomSeed:t}),setRoadsConfig:t=>e(e=>({roadsConfig:t,...pA({...e,roadsConfig:t})})),setCoastlineConfig:t=>e(e=>({coastlineConfig:t,...pA({...e,coastlineConfig:t})})),setRiverConfig:t=>e(e=>({riverConfig:t,...pA({...e,riverConfig:t})})),setParksConfig:t=>e(e=>({parksConfig:t,...pA({...e,parksConfig:t})})),setBuildingsConfig:t=>e(e=>({buildingsConfig:t,...pA({...e,buildingsConfig:t})})),resetGenerationParams:()=>e({roadsConfig:hA,coastlineConfig:gA,riverConfig:_A,parksConfig:vA,buildingsConfig:yA,seedDerivedFromParams:!1,seed:$.seed}),setGenerationSize:(t,n)=>e({generationWidth:t,generationHeight:n}),setGenerationStatus:t=>e(e=>({generation:{...e.generation,status:t}})),setGenerationPhase:(t,n)=>e(e=>({generation:{...e.generation,phase:t,progress:n}})),setGenerationError:t=>e(e=>({generation:{...e.generation,status:`error`,error:t}})),setGenerationDone:(t,n,r)=>e(e=>{let i=mA(e.generationHistory,e.seed,e.seedDerivedFromParams),a=e.geoCoordinatesOverride?e.geoCoordinates:lt(e.seed);return{generation:{status:`done`,phase:`complete`,progress:1,error:null},mapData:t,buildings:n,tensorField:r,highlightedNeighborhoodId:null,generationHistory:i,geoCoordinates:a,camLat:a?.lat??e.camLat,camLon:a?.lon??e.camLon}}),setTensorField:t=>e({tensorField:t}),resetGeneration:()=>e({generation:bA,mapData:null,buildings:[],tensorField:null}),loadFromCache:t=>e(e=>{let n=mA(e.generationHistory,t.seed,!1),r=e.geoCoordinatesOverride?e.geoCoordinates:lt(t.seed);return{seed:t.seed,seedDerivedFromParams:!1,mapData:t.mapData,buildings:t.buildings,tensorField:t.tensorFieldRecipe?tt(t.tensorFieldRecipe):null,generation:{status:`done`,phase:`complete`,progress:1,error:null},highlightedNeighborhoodId:null,generationHistory:n,geoCoordinates:r,camLat:r?.lat??e.camLat,camLon:r?.lon??e.camLon}}),highlightNeighborhood:t=>e({highlightedNeighborhoodId:t}),setGeoCoordinates:t=>e({geoCoordinates:t,geoCoordinatesOverride:!0}),resetGeoCoordinates:()=>e({geoCoordinates:null,geoCoordinatesOverride:!1}),setMapStyle:t=>e({mapStyle:t}),setSimulationDate:t=>e({simulationDate:t}),setFlyToTarget:t=>e({flyToTarget:t}),setThreeFlyToTarget:t=>e({threeFlyToTarget:t}),...Object.fromEntries(kA.map(t=>[`set${t.charAt(0).toUpperCase()}${t.slice(1)}`,n=>e({[t]:n})])),...Object.fromEntries(AA.map(t=>[`set${t.charAt(0).toUpperCase()}${t.slice(1)}`,n=>e({[t]:n})])),...Object.fromEntries(jA.map(t=>[`set${t.charAt(0).toUpperCase()}${t.slice(1)}`,n=>e({[t]:n})])),reset:()=>e($),addSceneNode:(t,n,r)=>e(e=>{let i=`node-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,a=cA(t),o={id:i,schemaType:t,label:n??t,enabled:!0,visible:!0,values:{...a},children:r?void 0:[]};return r?{sceneNodes:[...e.sceneNodes.map(e=>e.id===r?{...e,children:[...e.children??[],i]}:e),o]}:{sceneNodes:[...e.sceneNodes,o]}}),removeSceneNode:t=>e(e=>({sceneNodes:e.sceneNodes.filter(e=>e.id!==t).map(e=>({...e,children:e.children?.filter(e=>e!==t)}))})),updateNodeProperty:(t,n,r)=>e(e=>({sceneNodes:e.sceneNodes.map(e=>e.id===t?{...e,values:{...e.values,[n]:r}}:e)})),toggleNode:t=>e(e=>({sceneNodes:e.sceneNodes.map(e=>e.id===t?{...e,enabled:!e.enabled}:e)})),moveNode:(t,n)=>e(e=>{let r=[...e.sceneNodes],i=r.findIndex(e=>e.id===t);if(i===-1)return e;let[a]=r.splice(i,1);return r.splice(n,0,a),{sceneNodes:r}}),createDefaultScene:()=>e(e=>e.sceneNodes.length>0?e:{sceneNodes:[{id:`env-terrain`,schemaType:`terrain`,label:`Terrain`},{id:`env-fog`,schemaType:`fog`,label:`Fog`},{id:`mesh-buildings`,schemaType:`building-mesh`,label:`Buildings`,locked:!0},{id:`mesh-roads`,schemaType:`road-mesh`,label:`Roads`,locked:!0},{id:`mesh-parks`,schemaType:`park-mesh`,label:`Parks`,locked:!0},{id:`mesh-river`,schemaType:`river-mesh`,label:`River`,locked:!0},{id:`mesh-sea`,schemaType:`sea-mesh`,label:`Sea`,locked:!0},{id:`light-ambient`,schemaType:`ambient-light`,label:`Ambient Light`,locked:!0},{id:`light-sun`,schemaType:`directional-light`,label:`Sun`,locked:!0},{id:`effect-vignette`,schemaType:`vignette`,label:`Vignette`},{id:`effect-tone-mapping`,schemaType:`tone-mapping`,label:`Tone Mapping`},{id:`light-shadow`,schemaType:`shadow-settings`,label:`Shadows`,locked:!0},{id:`cam-main`,schemaType:`camera`,label:`Camera`},{id:`time-main`,schemaType:`time-controls`,label:`Time Controls`},{id:`style-main`,schemaType:`map-style`,label:`Map Style`}].map(e=>({id:e.id,schemaType:e.schemaType,label:e.label,enabled:!0,visible:!0,...e.locked?{locked:!0}:{},values:cA(e.schemaType)}))}),resetNodeValues:t=>e(e=>({sceneNodes:e.sceneNodes.map(e=>e.id===t?{...e,values:{...cA(e.schemaType)}}:e)})),setSceneNodes:t=>e({sceneNodes:t}),setSceneGraphTree:(t,n)=>e({sceneGraphTree:t,sceneObjectMap:n}),setSelectedObjectUuid:t=>e({selectedObjectUuid:t}),setSelectedPropertyGroup:t=>e({selectedPropertyGroup:t,selectedObjectUuid:null})}),{name:`cities-store`,version:9,migrate:(e,t)=>t<1?{...e,useRealTime:!1,timeOfDay:6,mapStyle:`clean_standard`}:t<2?{...e,mapStyle:`clean_standard`}:t<3?{...e,simulationDate:null}:t<4?{...e,sceneNodes:[]}:t<5?{...e,sunAngle:135,sunElevation:35,sunColor:`#fcf7e7`,ambientIntensity:.2,directionalIntensity:1.5,timeOfDay:9.5,fogColor:`#f0ece0`,vignetteIntensity:.0425,toneMappingExposure:1.2}:t<6?{...e,windowGridScale:.8}:t<7?{...e,windowGridScale:2}:t<8?{...e,windowGridScale:.5,windowReflectionIntensity:0,floorHeight:3.5}:t<9?{...e,windowReflectionIntensity:0,scannerEnabled:!1,scanColor:`#00ccff`,scanSpeed:.7,dotColor:`#436e84`,dotDensity:12,dotOpacity:.4}:e,storage:s(()=>typeof localStorage>`u`?{getItem:()=>null,setItem:()=>{},removeItem:()=>{}}:localStorage),partialize:({generation:e,mapData:t,buildings:n,tensorField:r,highlightedNeighborhoodId:i,sceneGraphTree:a,sceneObjectMap:o,selectedObjectUuid:s,sunAngle:c,sunElevation:l,sunColor:u,fogDensity:d,fogNear:f,fogFar:p,fogColor:m,vignetteIntensity:h,toneMappingExposure:g,ambientIntensity:_,directionalIntensity:v,windowEmissiveIntensity:y,windowLitFraction:b,windowEmissiveColor:x,bloomIntensityOverride:S,bloomRadius:C,bloomLuminanceThreshold:w,ambientColor:T,hemiLightSkyColor:E,hemiLightGroundColor:D,hemiLightIntensity:O,skyTurbidity:k,skyRayleigh:A,sceneNodes:j,...M})=>M}))}));export{$m as $,gO as A,Tb as B,Ak as C,ZO as D,YO as E,Z as F,fy as G,X as H,tw as I,ng as J,Cg as K,nw as L,hO as M,kE as N,KO as O,AE as P,uh as Q,lx as R,Mk as S,ok as T,qy as U,Eb as V,ly as W,Vh as X,rg as Y,Hh as Z,$k as _,wA as a,et as at,Nk as b,CA as c,Xe as ct,uA as d,We as dt,Pm as et,lA as f,Ve as ft,eA as g,sA as h,DA as i,ot as it,mO as j,WO as k,NA as l,Ke as lt,oA as m,Ue as mt,EA as n,F as nt,SA as o,Qe as ot,dA as p,He as pt,wg as q,xA as r,I as rt,TA as s,Je as st,OA as t,Lm as tt,MA as u,qe as ut,Pk as v,hk as w,jk as x,zk as y,ux as z};
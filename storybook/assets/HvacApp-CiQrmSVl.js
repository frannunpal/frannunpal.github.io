import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-DEAHbL4P.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Ht as i,It as a,St as o,g as s,t as c,un as l}from"./esm-DRJkNLRC.js";import{r as u,t as d}from"./es-BeIx8Rpp.js";import{Tn as f,t as p}from"./iframe-ChFPAf1w.js";import{$t as m,A as h,At as g,Dt as ee,E as _,Gt as te,Nt as ne,P as v,Rt as y,St as b,T as x,X as re,an as S,b as C,cn as ie,d as w,f as T,h as E,in as D,ot as ae,p as oe,pt as se,r as O,u as ce,vt as le,xt as ue,zt as de}from"./three.module-C0Ddz1ir.js";import{c as fe,f as pe,l as me,o as he,p as k,t as ge}from"./drei-tuZmhOaG.js";import{A,C as _e,D as j,E as M,M as N,N as ve,O as P,P as ye,S as be,T as xe,_ as Se,c as Ce,d as we,f as Te,g as Ee,h as De,i as F,j as Oe,k as ke,l as Ae,m as I,n as je,p as Me,r as Ne,s as Pe,t as Fe,u as Ie,w as Le,x as Re}from"./temperatureColor-C7zt66xm.js";function ze({index:e}){let t=I(e=>e.setHoveredElement),n=I(e=>e.setSelectedElement),r=ke+(e+.5)*A.floorHeight,i=(0,Ve.useMemo)(()=>new x(new ce(1,1,1)),[]);return(0,L.jsxs)(`group`,{position:[0,r,0],children:[(0,L.jsxs)(`mesh`,{onPointerOver:()=>t?.({type:`floor`,id:String(e)}),onPointerOut:()=>t?.(null),onClick:()=>n?.({type:`floor`,id:String(e)}),children:[(0,L.jsx)(`boxGeometry`,{args:[A.width,A.floorHeight,A.depth]}),(0,L.jsx)(`meshPhysicalMaterial`,{color:He,transparent:!0,opacity:.1,roughness:.4,metalness:.1,depthWrite:!1,side:2})]}),(0,L.jsx)(`lineSegments`,{geometry:i,scale:[A.width,A.floorHeight,A.depth],children:(0,L.jsx)(`lineBasicMaterial`,{color:Ue,transparent:!0,opacity:.5})})]})}function Be(){return(0,L.jsx)(`group`,{name:`building-shell`,children:Array.from({length:A.floorCount},(e,t)=>t).map(e=>(0,L.jsx)(ze,{index:e},e))})}var Ve,L,He,Ue,We=e((()=>{Ve=t(n(),1),O(),N(),F(),L=r(),He=new E(`#5c7cfa`),Ue=new E(`#748ffc`),Be.__docgenInfo={description:``,methods:[],displayName:`BuildingShell`}}));function Ge(e,t){let n=e.nodes[t];return new S(n.position.x,n.position.y,n.position.z)}function Ke({from:e,to:t}){let n=I(e=>e.setHoveredElement),r=I(e=>e.setSelectedElement),i=j.segments.find(n=>n.from===e&&n.to===t),{geometry:a,position:o,quaternion:s}=(0,Ye.useMemo)(()=>{let n=Ge(j,e),r=Ge(j,t),i=n.clone().add(r).multiplyScalar(.5),a=n.distanceTo(r),o=r.clone().sub(n).normalize(),s=new ee().setFromUnitVectors(new S(0,1,0),o);return{geometry:new C(Xe,Xe,a,8,1,!0),position:i,quaternion:s}},[e,t]),c=j.nodes[t],l=c.isSupply;return(0,R.jsx)(`mesh`,{geometry:a,position:o,quaternion:s,onPointerOver:()=>n?.({type:`duct`,id:i?.id??`${e}-${t}`}),onPointerOut:()=>n?.(null),onClick:()=>r?.({type:`duct`,id:i?.id??`${e}-${t}`}),children:(0,R.jsx)(`meshStandardMaterial`,{color:c.type===`unit`?$e:l?Ze:Qe,metalness:.45,roughness:.4,transparent:!0,opacity:.45,depthWrite:!1})})}function qe({nodeId:e}){let t=I(e=>e.setHoveredElement),n=I(e=>e.setSelectedElement),r=j.nodes[e].type===`unit`,i=r?$e:`#cbd5e1`;return(0,R.jsxs)(`mesh`,{position:Ge(j,e),onPointerOver:()=>t?.({type:`unit`,id:e}),onPointerOut:()=>t?.(null),onClick:()=>n?.({type:`unit`,id:e}),children:[r?(0,R.jsx)(`boxGeometry`,{args:z}):(0,R.jsx)(`sphereGeometry`,{args:[.24,10,10]}),(0,R.jsx)(`meshStandardMaterial`,{color:i,metalness:.3,roughness:.5})]})}function Je(){return(0,R.jsxs)(`group`,{name:`duct-mesh`,children:[j.segments.map(e=>(0,R.jsx)(Ke,{from:e.from,to:e.to},e.id)),Object.keys(j.nodes).map(e=>j.nodes[e].type===`junction`||j.nodes[e].type===`unit`?(0,R.jsx)(qe,{nodeId:e},e):null)]})}var Ye,R,Xe,Ze,Qe,$e,z,et=e((()=>{Ye=t(n(),1),O(),P(),F(),R=r(),Xe=.28,Ze=new E(`#94a3b8`),Qe=new E(`#64748b`),$e=new E(`#38bdf8`),z=[1.6,1,1.2],Je.__docgenInfo={description:``,methods:[],displayName:`DuctMesh`}}));function tt({grillId:e,kind:t}){let n=j.nodes[e],r=I(t=>t.grillOpen[e]!==!1),i=I(t=>t.returnGrillOpen[e]!==!1),a=I(e=>e.toggleGrill),o=I(e=>e.toggleReturnGrill),s=I(e=>e.setHoveredElement),c=I(e=>e.setSelectedElement),l=t===`supply`,u=l?r:i,d=l?u?rt:it:u?at:ot;return(0,B.jsxs)(`group`,{position:[n.position.x,n.position.y,n.position.z],onClick:()=>{l?a(e):o(e),c?.({type:`grill`,id:e})},onPointerOver:()=>s?.({type:`grill`,id:e}),onPointerOut:()=>s?.(null),children:[(0,B.jsxs)(`mesh`,{"data-testid":`${e}-plate`,children:[(0,B.jsx)(`boxGeometry`,{args:[1.5,.9,.12]}),(0,B.jsx)(`meshStandardMaterial`,{color:d,emissive:d,emissiveIntensity:u?.5:.25,transparent:!0,opacity:.95})]}),(0,B.jsxs)(`mesh`,{children:[(0,B.jsx)(`boxGeometry`,{args:[1.3,.1,.16]}),(0,B.jsx)(`meshStandardMaterial`,{color:`#1e293b`})]}),(0,B.jsxs)(`mesh`,{position:[0,.22,0],children:[(0,B.jsx)(`boxGeometry`,{args:[1.3,.1,.16]}),(0,B.jsx)(`meshStandardMaterial`,{color:`#1e293b`})]}),(0,B.jsxs)(`mesh`,{position:[0,-.22,0],children:[(0,B.jsx)(`boxGeometry`,{args:[1.3,.1,.16]}),(0,B.jsx)(`meshStandardMaterial`,{color:`#1e293b`})]})]})}function nt(){return(0,B.jsxs)(`group`,{name:`grill-markers`,children:[j.supplyGrillIds.map(e=>(0,B.jsx)(tt,{grillId:e,kind:`supply`},e)),j.returnGrillIds.map(e=>(0,B.jsx)(tt,{grillId:e,kind:`return`},e))]})}var B,rt,it,at,ot,st=e((()=>{O(),P(),F(),B=r(),rt=new E(`#22c55e`),it=new E(`#ef4444`),at=new E(`#facc15`),ot=new E(`#ef4444`),tt.__docgenInfo={description:``,methods:[],displayName:`GrillMarker`,props:{grillId:{required:!0,tsType:{name:`string`},description:``},kind:{required:!0,tsType:{name:`union`,raw:`'supply' | 'return'`,elements:[{name:`literal`,value:`'supply'`},{name:`literal`,value:`'return'`}]},description:``}}},nt.__docgenInfo={description:``,methods:[],displayName:`GrillMarkers`}}));function ct(e,t,n,r=0){let i=e.getNode(t),a=e.getNode(n);if(!i||!a)throw Error(`roomPath: missing grill node (${t}, ${n})`);let o={...i.position},s={...a.position},c=Math.max(-1,Math.min(1,r)),l=i.floor??0,u=o.y,d=l*A.floorHeight,f=Math.max(u-d-.4,.1)*(.2+.8*Math.abs(c)),p={x:c*6,y:o.y-f,z:c*4};return{a:o,b:p,c:s,length:Math.hypot(o.x-p.x,o.y-p.y,o.z-p.z)+Math.hypot(p.x-s.x,p.y-s.y,p.z-s.z)}}var lt=e((()=>{N()}));function V(e){return((e*2654435761|0)>>>8)%1e3/1e3*.9}function ut(e,t=600){let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Uint32Array(t),a=new Float32Array(t),o=new Uint32Array(t),s=new Float32Array(t),c=new Uint8Array(t),l=new Float32Array(t),u=new Uint8Array(t),d=new Uint8Array(t),f=Array(t).fill(null),p=new Map;e.segments.forEach((e,t)=>p.set(e.id,t));function m(e){i[e]=0,a[e]=V(e),o[e]=0,s[e]=0,l[e]=0}function h(e,t,n){let r=t?v(t,n,e):-1;r>=0?(i[e]=r,a[e]=0):m(e)}function g(t,n){let r=e.floorOfGrill(n),c=`seg-gr${r}-${n.endsWith(`-1`)?`1`:`0`}-to-dr${r}`,u=p.get(c);u===void 0?m(t):(i[t]=u,a[t]=V(t+3),o[t]=0,s[t]=0,l[t]=0)}function ee(t,n){let r=e.floorOfGrill(n);c[t]=r,u[t]=+!!n.endsWith(`-1`),l[t]=0,f[t]=null,o[t]=2,s[t]=0}function _(e,t,n){return n.grillOpen[e.id]?(ee(t,e.id),!0):!1}function te(t,n,r){let i=(e.returnGrillsByFloor[t]??[]).filter(e=>r.grillOpen[e]);return i.length===0?null:i.length===1?i[0]:i[n%i.length]}function ne(e,t,n){let r=te(t,e,n);r===null?m(e):g(e,r)}{let n=e.segments.map((e,t)=>({seg:e,idx:t})).filter(({seg:t})=>e.nodes[t.to].isSupply&&e.nodes[t.from].isSupply);if(n.length>0)for(let e=0;e<t;e++)i[e]=n[e%n.length].idx,a[e]=V(e+7),o[e]=0,s[e]=0,l[e]=0;else for(let e=0;e<t;e++)m(e)}function v(t,n,r){let i=e.getOutgoingSegments(t.id);if(i.length===0)return-1;if(t.isSupply&&t.id.startsWith(`supply-junc-`)){let a=Number(t.id.split(`-`)[2]),o=e.supplyGrillsByFloor.length-1,s=[];for(let t=a;t<=o;t++)(e.supplyGrillsByFloor[t]??[]).some(e=>n.grillOpen[e])&&s.push(t);if(s.length>0){if(s[r%s.length]===a){let e=i.find(e=>e.to.startsWith(`dist-s-`));if(e)return p.get(e.id)??-1}let e=i.find(e=>e.to.startsWith(`supply-junc-`));if(e)return p.get(e.id)??-1}let c=i.find(e=>e.to.startsWith(`supply-junc-`));if(c)return p.get(c.id)??-1;let l=i[0];return p.get(l.id)??-1}if(t.isSupply&&t.id.startsWith(`dist-s-`)){let a=i.filter(t=>{let r=e.getNode(t.to);return r?.type===`grill`&&n.grillOpen[r.id]});if(a.length>0){let e=a[r%a.length];return p.get(e.id)??-1}let o=e.getIncomingSegments(t.id).find(e=>e.from.startsWith(`supply-junc-`));if(o){let t=e.getNode(o.from);if(t){let e=v(t,n,r);if(e>=0)return e}}return-1}return p.get(i[0].id)??-1}function y(p,g){let ee=(p.airFlowRate??1)/1,v=8*p.fanSpeed*p.simSpeed*ee,y=p.targetTemperature??ft,b=je(y),x=Ne(y),re=(p.floorTemps??[]).map(e=>je(e));for(let y=0;y<t;y++){if(o[y]&2){let t=c[y],i=f[y],a=`grill-r-${t}-${d[y]}`;if(!i||!p.grillOpen[a]){let n=te(t,y,p);if(n===null){m(y);continue}d[y]=+!!n.endsWith(`-1`),i=ct(e,`grill-s-${t}-${u[y]}`,n,V(y+13)*2-1),f[y]=i}let o=dt*p.fanSpeed*p.simSpeed*ee;l[y]+=o*g/i.length;let s=Le(l[y],0,1),h=s<.5?s*2:(s-.5)*2,_=i.a,v=i.b,x=i.c;n[y*3]=s<.5?_.x+(v.x-_.x)*h:v.x+(x.x-v.x)*h,n[y*3+1]=s<.5?_.y+(v.y-_.y)*h:v.y+(x.y-v.y)*h,n[y*3+2]=s<.5?_.z+(v.z-_.z)*h:v.z+(x.z-v.z)*h;let S=re[t]??b,C=s*.8;r[y*3]=M(b[0],S[0],C),r[y*3+1]=M(b[1],S[1],C),r[y*3+2]=M(b[2],S[2],C),l[y]>=1&&ne(y,t,p);continue}if(o[y]&1){s[y]+=3.5*g;let t=e.segments[i[y]],a=e.nodes[t.to],o=Le(s[y],0,1),c=a.position.z>=0?1:-1;n[y*3]=a.position.x,n[y*3+1]=a.position.y+o*.8,n[y*3+2]=a.position.z+c*o*1.4,r[y*3]=M(b[0],1,o*.8),r[y*3+1]=M(b[1],1,o*.8),r[y*3+2]=M(b[2],1,o*.8),s[y]>=1&&m(y);continue}if(p.fanSpeed<=0)continue;let t=e.segments[i[y]],S=e.nodes[t.from],C=e.nodes[t.to];if(C.type===`grill`&&!p.grillOpen[C.id]){h(y,S,p);continue}a[y]+=v*g/t.length,a[y]>=1&&(C.type===`grill`?C.isSupply?_(C,y,p)?a[y]=0:h(y,S,p):p.grillOpen[C.id]?h(y,C,p):ne(y,C.floor??0,p):h(y,C,p));let ie=Le(a[y],0,1);n[y*3]=M(S.position.x,C.position.x,ie),n[y*3+1]=M(S.position.y,C.position.y,ie),n[y*3+2]=M(S.position.z,C.position.z,ie);let w=C.isSupply?b:x;r[y*3]=w[0],r[y*3+1]=w[1],r[y*3+2]=w[2]}}return{count:t,positions:n,colors:r,segmentIndices:i,progress:a,flags:o,exitProgress:s,roomFloor:c,roomProgress:l,roomSupplySlot:u,roomReturnSlot:d,step:y}}var dt,ft,pt=e((()=>{Fe(),_e(),xe(),lt(),dt=2.5,ft=21}));function mt(e,t){H.set(e,t)}function ht(e){return H.get(e)}function gt(){return[...H.values()]}function _t(){H.clear()}var H,U=e((()=>{H=new Map}));function vt(){let e=(0,W.useRef)(null),t=k(e=>e.size),n=k(e=>e.viewport.dpr),r=(0,W.useRef)({uVelocity0:{value:null},uVelocity1:{value:null},uVelocity2:{value:null},uFluidStrength:{value:xt},uHalfFootprint:{value:new D(A.width/2,A.depth/2)},uPointSize:{value:St},uScreenScale:{value:400}}),[i]=(0,W.useState)(()=>ut(j,bt)),a=(0,W.useMemo)(()=>{let t=new T;t.setAttribute(`position`,new w(i.positions,3)),t.setAttribute(`color`,new w(i.colors,3));let n=new w(new Float32Array(i.count).fill(-1),1);return e.current=n,t.setAttribute(`aFloor`,n),t.boundingSphere=new te(new S(0,5,0),60),t},[i]);return(0,W.useEffect)(()=>{let e,t=()=>{let t=r.current,n=!0;for(let e=0;e<A.floorCount;e++){let r=ht(e);r?t[`uVelocity${e}`].value=r.velocityProjectedTexture:n=!1}n&&e!==void 0&&window.clearInterval(e)};return e=window.setInterval(t,400),t(),()=>{e!==void 0&&window.clearInterval(e)}},[]),pe((o,s)=>{let c=Math.min(s,.05),l=I.getState();r.current.uScreenScale.value=t.height*n/2,l.stepThermal?.(c*l.simSpeed),i.step({fanSpeed:l.fanSpeed,mode:l.mode,targetTemperature:l.targetTemperature,grillOpen:{...l.grillOpen,...l.returnGrillOpen},simSpeed:l.simSpeed,floorTemps:l.floorTemps,airFlowRate:l.airFlowRate},c);let u=e.current?.array;if(u){for(let e=0;e<i.count;e++)u[e]=i.flags[e]&2?i.roomFloor[e]:-1;e.current.needsUpdate=!0}let d=a.getAttribute(`position`);d.needsUpdate=!0,a.getAttribute(`color`).needsUpdate=!0}),(0,yt.jsx)(`points`,{geometry:a,frustumCulled:!1,children:(0,yt.jsx)(`shaderMaterial`,{vertexShader:Ct,fragmentShader:wt,uniforms:r.current,transparent:!0,depthWrite:!1,blending:2})})}var W,yt,bt,xt,St,Ct,wt,Tt=e((()=>{W=t(n(),1),me(),O(),P(),N(),pt(),F(),U(),yt=r(),bt=3e5,xt=.02,St=.45,Ct=`
  // NOTE: three.js ShaderMaterial already injects position/normal/uv +
  // modelViewMatrix/projectionMatrix — do NOT redeclare them (redefinition).
  attribute vec3 color;      // three injects position but NOT color
  attribute float aFloor;   // -1 = duct/other, 0..2 = floor for fluid advection
  uniform sampler2D uVelocity0;
  uniform sampler2D uVelocity1;
  uniform sampler2D uVelocity2;
  uniform float uFluidStrength;
  uniform vec2 uHalfFootprint; // (10, 7.5)
  uniform float uPointSize;    // world-space blob size (m)
  uniform float uScreenScale;  // canvasHeightPx * pixelRatio / 2 (perspective scale)
  varying vec3 vColor;

  void main() {
    vColor = color;
    vec3 p = position;

    if (aFloor >= 0.0) {
      // map world XZ → fluid UV (0..1 over the floor footprint)
      vec2 uv = (p.xz + uHalfFootprint) / (uHalfFootprint * 2.0);
      vec2 vel;
      if (aFloor < 0.5) {
        vel = texture2D(uVelocity0, uv).xy;
      } else if (aFloor < 1.5) {
        vel = texture2D(uVelocity1, uv).xy;
      } else {
        vel = texture2D(uVelocity2, uv).xy;
      }
      p.xz += vel * uFluidStrength;
    }

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    // INVERSE BLIPS: points act like real world blobs — they GROW as the
    // camera zooms in (size / -mv.z), and a floor clamp keeps them visible
    // in the wide shot. min 6px (wide view) → max 90px (extreme zoom).
    float dist = max(-mv.z, 0.001);
    float size = uPointSize * uScreenScale / dist;
    gl_PointSize = clamp(size, 6.0, 90.0);
  }
`,wt=`
  varying vec3 vColor;

  // Cheap 2-octave value noise → organic puff edge (ink/smoke, not circle)
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);

    // Warp the radial falloff with a bit of noise → wispy, liquid-like edge
    // (INTENSIFICADO: 0.22 → 0.45 — much more organic ink edge)
    float warp = noise(c * 6.0 + 11.0) * 0.45;
    float d = r + warp;
    float alpha = smoothstep(0.5, 0.02, d + 0.15);

    // Bright core → soft transparent rim (intensificado: 0.6 → 1.3)
    vec3 col = vColor * (1.0 + (1.0 - clamp(r * 1.6, 0.0, 1.0)) * 1.3);
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(col, alpha);
  }
`,vt.__docgenInfo={description:``,methods:[],displayName:`AirParticles`}}));function Et(e){if(e.type===`floor`){let t=Number(e.id);return{position:[0,jt+(t+.5)*A.floorHeight,0],size:[A.width,A.floorHeight,A.depth]}}if(e.type===`unit`){let e=j.getUnitNode();return{position:[e.position.x,e.position.y,e.position.z],size:[z[0],z[1],z[2]]}}if(e.type===`grill`){let t=j.nodes[e.id];return t?{position:[t.position.x,t.position.y,t.position.z],size:[1.8,1.1,.4]}:null}if(e.type===`duct`){let t=j.segments.find(t=>t.id===e.id);if(!t)return null;let n=j.nodes[t.from],r=j.nodes[t.to],i=n?n.position.x:0,a=n?n.position.y:0,o=n?n.position.z:0,s=r?r.position.x:0,c=r?r.position.y:0,l=r?r.position.z:0;return{position:[(i+s)/2,(a+c)/2,(o+l)/2],size:[Math.abs(s-i)+.5,Math.abs(c-a)+.5,Math.abs(l-o)+.5]}}return null}function Dt(){let e=I(e=>e.hoveredElement),t=I(e=>e.selectedElement)??e,n=(0,Ot.useMemo)(()=>new x(new ce(1,1,1)),[]),r=(0,Ot.useMemo)(()=>t?Et(t):null,[t]);return!t||!r?null:(0,kt.jsx)(`lineSegments`,{geometry:n,position:r.position,scale:r.size,frustumCulled:!1,children:(0,kt.jsx)(`lineBasicMaterial`,{color:At,linewidth:2,transparent:!0,opacity:.9})})}var Ot,kt,At,jt,Mt=e((()=>{Ot=t(n(),1),O(),N(),P(),F(),et(),kt=r(),At=new E(`#22c55e`),jt=ke,Dt.__docgenInfo={description:``,methods:[],displayName:`SelectionBox`}}));function G(e,t,n){let r=n?re:se;return new ie(e,t,{depthBuffer:!1,stencilBuffer:!1,format:g,type:v,minFilter:r,magFilter:r,wrapS:oe,wrapT:oe,generateMipmaps:!1})}function K(e,t,n){return{read:G(e,t,n),write:G(e,t,n)}}function q(e){let t=e.read;e.read=e.write,e.write=t}function Nt(e){e.read.dispose(),e.write.dispose()}var Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt=e((()=>{O(),Pt=`
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform vec2 texelSize;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  vL = vUv - vec2(texelSize.x, 0.0);
  vR = vUv + vec2(texelSize.x, 0.0);
  vT = vUv + vec2(0.0, texelSize.y);
  vB = vUv - vec2(0.0, texelSize.y);
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Ft=`
precision mediump float;
varying highp vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main() {
  gl_FragColor = value * texture2D(uTexture, vUv);
}
`,It=`
varying vec2 vLocalUv;
uniform vec2 uCenter;
uniform vec2 uScale;

void main() {
  vLocalUv = position.xy;
  gl_Position = vec4(position.xy * uScale + uCenter, 0.0, 1.0);
}
`,Lt=`
precision highp float;
varying vec2 vLocalUv;
uniform vec3 color;

void main() {
  float r = length(vLocalUv);
  if (r > 1.0) discard;
  float a = 1.0 - r;
  a *= a;
  gl_FragColor = vec4(color * a, a);
}
`,Rt=`
precision mediump float;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;

void main() {
  float L = texture2D(uVelocity, vL).y;
  float R = texture2D(uVelocity, vR).y;
  float T = texture2D(uVelocity, vT).x;
  float B = texture2D(uVelocity, vB).x;
  float vorticity = R - L - T + B;
  gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
}
`,zt=`
precision highp float;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;

void main() {
  float L = texture2D(uCurl, vL).x;
  float R = texture2D(uCurl, vR).x;
  float T = texture2D(uCurl, vT).x;
  float B = texture2D(uCurl, vB).x;
  float C = texture2D(uCurl, vUv).x;
  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
  force /= length(force) + 0.0001;
  force *= curl * C;
  force.y *= -1.0;
  vec2 vel = texture2D(uVelocity, vUv).xy;
  gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
}
`,Bt=`
precision mediump float;
varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;
uniform float uReflectWalls;

void main() {
  float L = texture2D(uVelocity, vL).x;
  float R = texture2D(uVelocity, vR).x;
  float T = texture2D(uVelocity, vT).y;
  float B = texture2D(uVelocity, vB).y;
  vec2 C = texture2D(uVelocity, vUv).xy;
  // No-flow-through-walls (reflection): mirror the velocity at boundaries.
  // Disable to let flow leave the screen — mofu / FluidCursor behaviour.
  if (uReflectWalls > 0.5) {
    if (vL.x < 0.0) { L = -C.x; }
    if (vR.x > 1.0) { R = -C.x; }
    if (vT.y > 1.0) { T = -C.y; }
    if (vB.y < 0.0) { B = -C.y; }
  }
  float div = 0.5 * (R - L + T - B);
  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}
`,Vt=`
precision mediump float;
varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;

void main() {
  float L = texture2D(uPressure, vL).x;
  float R = texture2D(uPressure, vR).x;
  float T = texture2D(uPressure, vT).x;
  float B = texture2D(uPressure, vB).x;
  float divergence = texture2D(uDivergence, vUv).x;
  float pressure = (L + R + B + T - divergence) * 0.25;
  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}
`,Ht=`
precision mediump float;
varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;

void main() {
  float L = texture2D(uPressure, vL).x;
  float R = texture2D(uPressure, vR).x;
  float T = texture2D(uPressure, vT).x;
  float B = texture2D(uPressure, vB).x;
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity.xy -= vec2(R - L, T - B);
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`,Ut=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;
uniform float uBFECC;

void main() {
  if (uBFECC < 0.5) {
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    gl_FragColor = dissipation * texture2D(uSource, coord);
  } else {
    vec2 vel = texture2D(uVelocity, vUv).xy;
    vec2 spotOld = vUv - vel * dt * texelSize;
    vec2 velBack = texture2D(uVelocity, spotOld).xy;
    vec2 spotForward = spotOld + velBack * dt * texelSize;
    vec2 error = spotForward - vUv;
    vec2 spotMid = vUv - error * 0.5;
    vec2 velMid = texture2D(uVelocity, spotMid).xy;
    vec2 coord = spotMid - velMid * dt * texelSize;
    gl_FragColor = dissipation * texture2D(uSource, coord);
  }
  gl_FragColor.a = 1.0;
}
`,Wt={performance:{simResolution:128,dyeResolution:256,pressureIterations:6},balanced:{simResolution:256,dyeResolution:512,pressureIterations:12},quality:{simResolution:384,dyeResolution:1024,pressureIterations:20}},Gt=class{simResolution;dyeResolution;pressureIterations;densityDissipation;velocityDissipation;pressureDissipation;curlStrength;splatRadius;splatForce;baseDelta;enableVorticity;bfecc;reflectWalls;renderer;scene=new y;camera=new le(-1,1,1,-1,0,1);geometry=new T;mesh;splatScene=new y;splatGeometry=new T;splatMesh;velocity;density;dye;pressure;divergence;curl;enableDye=!1;dyeDissipation;clearMaterial;splatMaterial;curlMaterial;vorticityMaterial;divergenceMaterial;pressureMaterial;gradientSubtractMaterial;advectVelocityMaterial;advectDensityMaterial;advectDyeMaterial;splats=[];viewportWidth=1;viewportHeight=1;simWidth;simHeight;dyeWidth;dyeHeight;constructor(e,t={}){this.renderer=e;let n=Wt[t.profile??`balanced`];this.simResolution=t.simResolution??n.simResolution,this.dyeResolution=t.dyeResolution??n.dyeResolution,this.pressureIterations=t.pressureIterations??n.pressureIterations,this.densityDissipation=t.densityDissipation??.91,this.velocityDissipation=t.velocityDissipation??.985,this.pressureDissipation=t.pressureDissipation??.8,this.curlStrength=t.curlStrength??.55,this.splatRadius=t.splatRadius??42e-5,this.splatForce=t.splatForce??6,this.baseDelta=t.baseDelta??1/60,this.enableVorticity=t.enableVorticity??!1,this.bfecc=t.bfecc??!0,this.reflectWalls=t.reflectWalls??!0,this.geometry.setAttribute(`position`,new h(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.mesh=new ae(this.geometry,void 0),this.mesh.frustumCulled=!1,this.scene.add(this.mesh),this.splatGeometry.setAttribute(`position`,new h(new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),3)),this.splatGeometry.setIndex(new m(new Uint16Array([0,1,2,1,3,2]),1)),this.splatMesh=new ae(this.splatGeometry,void 0),this.splatMesh.frustumCulled=!1,this.splatScene.add(this.splatMesh),this.simWidth=this.simResolution,this.simHeight=this.simResolution,this.dyeWidth=this.dyeResolution,this.dyeHeight=this.dyeResolution,this.velocity=K(this.simWidth,this.simHeight,!0),this.density=K(this.dyeWidth,this.dyeHeight,!0),this.dye=K(this.dyeWidth,this.dyeHeight,!0),this.pressure=K(this.simWidth,this.simHeight,!1),this.dyeDissipation=t.dyeDissipation??this.densityDissipation,this.divergence=G(this.simWidth,this.simHeight,!1),this.curl=G(this.simWidth,this.simHeight,!1);let r=new D(1/this.simWidth,1/this.simHeight),i=new D(1/this.dyeWidth,1/this.dyeHeight);this.clearMaterial=this.createMaterial(Ft,{texelSize:{value:r.clone()},uTexture:{value:null},value:{value:this.pressureDissipation}}),this.splatMaterial=new de({vertexShader:It,fragmentShader:Lt,uniforms:{uCenter:{value:new D},uScale:{value:new D},color:{value:new S}},depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:201,blendSrcAlpha:201,blendDstAlpha:201}),this.splatMesh.material=this.splatMaterial,this.curlMaterial=this.createMaterial(Rt,{texelSize:{value:r.clone()},uVelocity:{value:null}}),this.vorticityMaterial=this.createMaterial(zt,{texelSize:{value:r.clone()},uVelocity:{value:null},uCurl:{value:null},curl:{value:this.curlStrength},dt:{value:.016}}),this.divergenceMaterial=this.createMaterial(Bt,{texelSize:{value:r.clone()},uVelocity:{value:null},uReflectWalls:{value:1}}),this.pressureMaterial=this.createMaterial(Vt,{texelSize:{value:r.clone()},uPressure:{value:null},uDivergence:{value:null}}),this.gradientSubtractMaterial=this.createMaterial(Ht,{texelSize:{value:r.clone()},uPressure:{value:null},uVelocity:{value:null}}),this.advectVelocityMaterial=this.createMaterial(Ut,{texelSize:{value:r.clone()},uVelocity:{value:null},uSource:{value:null},dt:{value:.016},dissipation:{value:1},uBFECC:{value:0}}),this.advectDensityMaterial=this.createMaterial(Ut,{texelSize:{value:i.clone()},uVelocity:{value:null},uSource:{value:null},dt:{value:.016},dissipation:{value:1},uBFECC:{value:0}}),this.advectDyeMaterial=this.createMaterial(Ut,{texelSize:{value:i.clone()},uVelocity:{value:null},uSource:{value:null},dt:{value:.016},dissipation:{value:1},uBFECC:{value:0}})}get velocityTexture(){return this.velocity.read.texture}get velocityProjectedTexture(){return this.velocity.write.texture}get densityTexture(){return this.density.read.texture}get dyeTexture(){return this.dye.read.texture}resize(e,t){this.viewportWidth=Math.max(1,e),this.viewportHeight=Math.max(1,t);let n=this.viewportWidth/this.viewportHeight,r,i,a,o;if(n>=1?(r=this.simResolution,i=Math.max(1,Math.round(this.simResolution/n)),a=this.dyeResolution,o=Math.max(1,Math.round(this.dyeResolution/n))):(r=Math.max(1,Math.round(this.simResolution*n)),i=this.simResolution,a=Math.max(1,Math.round(this.dyeResolution*n)),o=this.dyeResolution),r!==this.simWidth||i!==this.simHeight){this.simWidth=r,this.simHeight=i,this.velocity.read.setSize(r,i),this.velocity.write.setSize(r,i),this.pressure.read.setSize(r,i),this.pressure.write.setSize(r,i),this.divergence.setSize(r,i),this.curl.setSize(r,i);let e=1/r,t=1/i;this.clearMaterial.uniforms.texelSize.value.set(e,t),this.curlMaterial.uniforms.texelSize.value.set(e,t),this.vorticityMaterial.uniforms.texelSize.value.set(e,t),this.divergenceMaterial.uniforms.texelSize.value.set(e,t),this.pressureMaterial.uniforms.texelSize.value.set(e,t),this.gradientSubtractMaterial.uniforms.texelSize.value.set(e,t),this.advectVelocityMaterial.uniforms.texelSize.value.set(e,t)}if(a!==this.dyeWidth||o!==this.dyeHeight){this.dyeWidth=a,this.dyeHeight=o,this.density.read.setSize(a,o),this.density.write.setSize(a,o),this.dye.read.setSize(a,o),this.dye.write.setSize(a,o);let e=1/a,t=1/o;this.advectDensityMaterial.uniforms.texelSize.value.set(e,t),this.advectDyeMaterial.uniforms.texelSize.value.set(e,t)}}addSplat(e,t,n,r,i={}){this.splats.push({x:Math.min(1,Math.max(0,e)),y:Math.min(1,Math.max(0,t)),dx:n,dy:r,radius:i.radius??this.splatRadius,color:i.color,dyeColor:i.dyeColor})}step(e){let t=Math.min(Math.max(e,1e-6),1/60),n=this.baseDelta>0?t/this.baseDelta:1,r=this.renderer.getRenderTarget(),i=this.renderer.autoClear;this.renderer.autoClear=!1,this.vorticityMaterial.uniforms.curl.value=this.curlStrength;let a=+!!this.bfecc;this.advectVelocityMaterial.uniforms.uBFECC.value=a,this.advectDensityMaterial.uniforms.uBFECC.value=a;for(let e=0;e<this.splats.length;e+=1)this.applySplat(this.splats[e]);this.splats.length=0,this.enableVorticity&&(this.curlMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.blit(this.curl,this.curlMaterial),this.vorticityMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.vorticityMaterial.uniforms.uCurl.value=this.curl.texture,this.vorticityMaterial.uniforms.dt.value=t,this.blit(this.velocity.write,this.vorticityMaterial),q(this.velocity)),this.divergenceMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.divergenceMaterial.uniforms.uReflectWalls.value=+!!this.reflectWalls,this.blit(this.divergence,this.divergenceMaterial),this.clearMaterial.uniforms.uTexture.value=this.pressure.read.texture,this.clearMaterial.uniforms.value.value=this.pressureDissipation**+n,this.blit(this.pressure.write,this.clearMaterial),q(this.pressure),this.pressureMaterial.uniforms.uDivergence.value=this.divergence.texture;for(let e=0;e<this.pressureIterations;e+=1)this.pressureMaterial.uniforms.uPressure.value=this.pressure.read.texture,this.blit(this.pressure.write,this.pressureMaterial),q(this.pressure);this.gradientSubtractMaterial.uniforms.uPressure.value=this.pressure.read.texture,this.gradientSubtractMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.blit(this.velocity.write,this.gradientSubtractMaterial),q(this.velocity),this.advectVelocityMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.advectVelocityMaterial.uniforms.uSource.value=this.velocity.read.texture,this.advectVelocityMaterial.uniforms.dissipation.value=this.velocityDissipation**+n,this.advectVelocityMaterial.uniforms.dt.value=t,this.blit(this.velocity.write,this.advectVelocityMaterial),q(this.velocity),this.advectDensityMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.advectDensityMaterial.uniforms.uSource.value=this.density.read.texture,this.advectDensityMaterial.uniforms.dissipation.value=this.densityDissipation**+n,this.advectDensityMaterial.uniforms.dt.value=t,this.blit(this.density.write,this.advectDensityMaterial),q(this.density),this.enableDye&&(this.advectDyeMaterial.uniforms.uBFECC.value=a,this.advectDyeMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.advectDyeMaterial.uniforms.uSource.value=this.dye.read.texture,this.advectDyeMaterial.uniforms.dissipation.value=this.dyeDissipation**+n,this.advectDyeMaterial.uniforms.dt.value=t,this.blit(this.dye.write,this.advectDyeMaterial),q(this.dye)),this.renderer.setRenderTarget(r),this.renderer.autoClear=i}dispose(){this.scene.remove(this.mesh),this.splatScene.remove(this.splatMesh),this.geometry.dispose(),this.splatGeometry.dispose(),this.clearMaterial.dispose(),this.splatMaterial.dispose(),this.curlMaterial.dispose(),this.vorticityMaterial.dispose(),this.divergenceMaterial.dispose(),this.pressureMaterial.dispose(),this.gradientSubtractMaterial.dispose(),this.advectVelocityMaterial.dispose(),this.advectDensityMaterial.dispose(),this.advectDyeMaterial.dispose(),Nt(this.velocity),Nt(this.density),Nt(this.dye),Nt(this.pressure),this.divergence.dispose(),this.curl.dispose()}createMaterial(e,t){return new de({vertexShader:Pt,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1,toneMapped:!1})}blit(e,t){this.mesh.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}applySplat(e){let t=this.viewportWidth/this.viewportHeight,n=e.color??[e.dx,e.dy,1],r=3*Math.sqrt(e.radius),i=this.splatMaterial.uniforms;i.uCenter.value.set(e.x*2-1,e.y*2-1),i.uScale.value.set(r/t,r),i.color.value.set(n[0],n[1],n[2]),this.renderer.setRenderTarget(this.velocity.read),this.renderer.render(this.splatScene,this.camera),this.renderer.setRenderTarget(this.density.read),this.renderer.render(this.splatScene,this.camera),this.enableDye&&e.dyeColor&&(i.color.value.set(e.dyeColor[0],e.dyeColor[1],e.dyeColor[2]),this.renderer.setRenderTarget(this.dye.read),this.renderer.render(this.splatScene,this.camera))}},new le(-1,1,1,-1,0,1),Kt=class extends T{constructor(){super(),this.setAttribute(`position`,new h([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new h([0,2,0,0,2,0],2))}},new Kt}));function Jt(e,t){return[(e+A.width/2)/A.width,(t+A.depth/2)/A.depth]}var Yt=e((()=>{N()}));function Xt(){let e=k(e=>e.gl),t=(0,Zt.useRef)([]);return(0,Zt.useLayoutEffect)(()=>{let n=[],r=A.floorCount;for(let t=0;t<r;t++){let r;try{r=new Gt(e,Qt)}catch(e){console.error(`[hvac] FluidSimulation init failed:`,e);return}r.resize(Math.round(A.width*10),Math.round(A.depth*10)),mt(t,r),n.push(r)}return t.current=n,()=>{n.forEach(e=>e.dispose()),_t(),t.current=[]}},[e]),pe((e,n)=>{let r=t.current;if(r.length===0)return;let i=I.getState(),a=i.targetTemperature,o=[...je(a)],s=en*(i.airFlowRate/1),c={radius:$t,color:o};r.forEach((e,t)=>{let r=j.supplyGrillsByFloor[t]??[];for(let t of r){if(i.grillOpen[t]===!1)continue;let n=j.nodes[t],[r,a]=Jt(n.position.x,n.position.z),o=n.position.x>0?-1:1;e.addSplat(r,a,o*s,0,c)}e.step(Math.min(n,.05))})}),null}var Zt,Qt,$t,en,tn=e((()=>{Zt=t(n(),1),me(),qt(),P(),N(),Fe(),_e(),F(),U(),Yt(),Qt={profile:`performance`,enableVorticity:!0,curlStrength:.7,reflectWalls:!0,bfecc:!0},$t=.06,en=.8}));function nn({floor:e}){let t=(0,J.useRef)({uDensity:{value:null},uDensityScale:{value:14},uOpacity:{value:.45}});(0,J.useLayoutEffect)(()=>{let n=()=>{let n=ht(e);return n?(t.current.uDensity.value=n.densityTexture,!0):!1};if(n())return;let r=window.setInterval(()=>{n()&&window.clearInterval(r)},300);return()=>window.clearInterval(r)},[e]);let n=(0,J.useMemo)(()=>new b(A.width,A.depth,48,36),[]),r=ke+A.floorHeight*e+e*.05+an,i=(0,J.useMemo)(()=>new _(-Math.PI/2,0,0),[]);return(0,rn.jsx)(`mesh`,{geometry:n,position:(0,J.useMemo)(()=>[0,r,0],[e]),rotation:i,renderOrder:5,children:(0,rn.jsx)(`shaderMaterial`,{vertexShader:on,fragmentShader:sn,uniforms:t.current,transparent:!0,depthWrite:!1})})}var J,rn,an,on,sn,cn=e((()=>{J=t(n(),1),O(),N(),U(),rn=r(),an=.06,on=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sn=`
  uniform sampler2D uDensity;
  uniform float uDensityScale;
  uniform float uOpacity;
  varying vec2 vUv;

  void main() {
    vec4 d = texture2D(uDensity, vUv);
    float density = d.b; // .b carries the density amount in this library
    vec4 col = d;        // .rgb = tinted dye-ish color

    // Fake surface lighting from the density gradient (sample neighbors)
    float e = 0.002;
    float dl = texture2D(uDensity, vUv + vec2(-e, 0.0)).b;
    float dr = texture2D(uDensity, vUv + vec2( e, 0.0)).b;
    float dt_ = texture2D(uDensity, vUv + vec2(0.0,-e)).b;
    float db = texture2D(uDensity, vUv + vec2(0.0, e)).b;
    vec3 n = normalize(vec3(dr - dl, 1.0, db - dt_));
    float light = 0.6 + 0.4 * max(dot(n, normalize(vec3(0.4, 1.0, 0.3))), 0.0);

    float strength = clamp(density * uDensityScale, 0.0, 1.0);
    vec3 rgb = mix(vec3(0.12, 0.16, 0.25), col.rgb * light, strength);
    gl_FragColor = vec4(rgb, uOpacity * (0.15 + 0.85 * strength));
  }
`,nn.__docgenInfo={description:``,methods:[],displayName:`FluidSurfaceMesh`,props:{floor:{required:!0,tsType:{name:`number`},description:``}}}}));function ln(){let e=k(e=>e.camera),t=k(e=>e.pointer),n=k(e=>e.gl);return(0,un.useEffect)(()=>{let r=new ne,i=new ue(new S(0,1,0),-6.5),a=new S,o=null,s=()=>{if(t.x<-1||t.x>1||t.y<-1||t.y>1||(r.setFromCamera(t,e),!r.ray.intersectPlane(i,a)))return;let n=0,s=0;o&&(n=(a.x-o.x)*Y.splatForce,s=(a.z-o.z)*Y.splatForce),o=a.clone();let[c,l]=Jt(a.x,a.z),u={radius:Y.splatRadius,color:Y.color};for(let e of gt())e.addSplat(c,l,n,s,u)};n.domElement.style.cursor=`crosshair`;let c=window.setInterval(s,100);return()=>{window.clearInterval(c),n.domElement.style.cursor=``}},[e,t,n]),null}var un,Y,dn=e((()=>{un=t(n(),1),me(),O(),U(),Yt(),Y={splatRadius:.05,splatForce:.12,color:[.6,.8,1]}})),X,fn,pn,mn=e((()=>{me(),ge(),N(),We(),et(),st(),Tt(),Mt(),tn(),cn(),dn(),X=r(),fn={MIN_DISTANCE:5,MAX_DISTANCE:80,MAX_POLAR_DEG:1.45},pn=()=>(0,X.jsxs)(fe,{frameloop:`always`,camera:{position:[26,18,30],fov:45,near:.5,far:200},gl:{antialias:!0,powerPreference:`high-performance`},style:{width:`100%`,height:`100%`,display:`block`},children:[(0,X.jsx)(`color`,{attach:`background`,args:[`#0b1020`]}),(0,X.jsx)(`fog`,{attach:`fog`,args:[`#0b1020`,60,140]}),(0,X.jsx)(`ambientLight`,{intensity:.5}),(0,X.jsx)(`hemisphereLight`,{intensity:.4,color:`#93c5fd`,groundColor:`#334155`}),(0,X.jsx)(`directionalLight`,{position:[12,24,8],intensity:1.6,castShadow:!0,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024}),(0,X.jsxs)(`mesh`,{rotation:[-Math.PI/2,0,0],position:[0,0,0],children:[(0,X.jsx)(`planeGeometry`,{args:[90,90]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#0f172a`,roughness:.9})]}),(0,X.jsx)(`gridHelper`,{args:[60,20,`#1e293b`,`#1e293b`],position:[0,.02,0]}),(0,X.jsx)(Be,{}),(0,X.jsx)(Je,{}),(0,X.jsx)(nt,{}),(0,X.jsx)(vt,{}),(0,X.jsx)(Dt,{}),(0,X.jsx)(Xt,{}),Array.from({length:A.floorCount},(e,t)=>(0,X.jsx)(nn,{floor:t},t)),(0,X.jsx)(ln,{}),(0,X.jsx)(he,{enableDamping:!0,dampingFactor:.08,minDistance:fn.MIN_DISTANCE,maxDistance:fn.MAX_DISTANCE,maxPolarAngle:fn.MAX_POLAR_DEG,target:[0,6,0]})]}),pn.__docgenInfo={description:``,methods:[],displayName:`HvacScene`}}));function hn(e){return e===null?null:e<60?Math.max(0,Math.round(e)):`${Math.floor(e/60)}m ${Math.round(e%60)}s`}function Z(e){return`${e.toFixed(1)}°C`}function gn(e,t){return e||t||null}function _n(e){let{t}=u(`hvac`),n=Te(),r=we(),i=Se(),a=Ie(),o=Ae(),s=Ee(),c=Me(),l=De();if(e.type===`floor`){let l=Number(e.id),u=n[l]??i,d=Pe(l,c),f=Ce(c),p=be({targetTemperature:i,ambientTemperature:i,fanSpeed:a,openSupplyGrills:Math.max(d,1),floorVolume:Oe,airFlowRate:o,totalOpenSupplyGrills:Math.max(f,d,1)}),m=r[l]??null,h=Re({temperature:u,elapsed:0,reachedAt:m},i,p/s);return{title:t(`tooltip.label`,{floor:l}),rows:[{label:t(`tooltip.floorSize`),value:`${A.width} × ${A.depth} × ${A.floorHeight} m`},{label:t(`tooltip.floorArea`),value:`${A.width} × ${A.depth} = ${A.width*A.depth} m²`},{label:t(`tooltip.tempCurrent`),value:Z(u)},{label:t(`tooltip.target`),value:Z(i)},m===null?{label:t(`tooltip.eta`),value:hn(h)===null?t(`tooltip.never`):String(hn(h))}:{label:t(`tooltip.reached`,{time:`${Math.round(m)}s`}),value:`✓`},{label:t(`tooltip.flow`),value:`${(a*o*(d/Math.max(f,d,1))).toFixed(2)} m³/s`}]}}if(e.type===`grill`){let n=j.nodes[e.id].isSupply??e.id.startsWith(`grill-s-`),r=n?c[e.id]!==!1:l[e.id]!==!1;return{title:e.id,rows:[{label:t(n?`tooltip.supply`:`tooltip.return`),value:t(r?`tooltip.open`:`tooltip.closed`)},{label:t(`tooltip.airTemp`),value:Z(i)}]}}if(e.type===`duct`){let n=j.segments.find(t=>t.id===e.id),r=!n||j.nodes[n.to].isSupply;return{title:e.id,rows:[{label:t(r?`tooltip.supply`:`tooltip.return`),value:``},{label:t(`tooltip.airTemp`),value:Z(i)},{label:t(`tooltip.velocity`),value:`${(8*a).toFixed(1)} m/s`}]}}return e.type===`unit`?{title:t(`tooltip.unitTitle`),rows:[{label:t(`tooltip.generates`),value:Z(i)},{label:t(`tooltip.mode`),value:t(i>22?`tooltip.heatMode`:`tooltip.coolMode`)},{label:t(`tooltip.flow`),value:`${(a*o).toFixed(2)} m³/s`}]}:null}function vn(){let e=gn(I(e=>e.hoveredElement),I(e=>e.selectedElement)),t=_n(e??{type:`floor`,id:`0`});return!e||!t?null:(0,Q.jsx)(`div`,{style:{position:`absolute`,bottom:12,left:12,zIndex:10,pointerEvents:`none`,maxWidth:300},children:(0,Q.jsx)(l,{className:`hvac-tooltip`,style:{background:`var(--mantine-color-body)`,border:`1px solid var(--mantine-color-default-border)`,borderRadius:`var(--mantine-radius-sm)`,padding:`8px 12px`,boxShadow:`0 2px 8px rgba(0,0,0,0.15)`},children:(0,Q.jsxs)(s,{gap:2,children:[(0,Q.jsx)(a,{size:`xs`,fw:700,mb:1,children:t.title}),t.rows.map(e=>(0,Q.jsxs)(i,{gap:4,wrap:`nowrap`,children:[(0,Q.jsxs)(a,{size:`xs`,c:`dimmed`,style:{minWidth:110},children:[e.label,`:`]}),(0,Q.jsx)(a,{size:`xs`,children:e.value})]},e.label))]})})})}var Q,yn=e((()=>{d(),c(),P(),N(),_e(),F(),pt(),Q=r(),vn.__docgenInfo={description:``,methods:[],displayName:`ThermalTooltip`}})),bn=e((()=>{mn(),Tt(),We(),et(),st(),Mt(),yn(),tn(),cn(),U(),Yt(),dn()})),xn,Sn,Cn=e((()=>{xn=`_controls_1wjso_1`,Sn={controls:xn}})),wn,$,Tn,En=e((()=>{wn=t(n(),1),c(),d(),p(),ve(),bn(),Cn(),$=r(),ye(),Tn=({window:e,notifyReady:t})=>{let{t:n}=u(`hvac`),r=f();(0,wn.useEffect)(()=>{t?.({})},[t]);let a=(0,wn.useCallback)(()=>{r(`hvac-theatre`,{parentId:e?.id})},[r,e?.id]);return(0,$.jsxs)(l,{style:{width:`100%`,height:`100%`,position:`relative`},"data-windowid":e?.id,children:[(0,$.jsx)(pn,{}),(0,$.jsx)(vn,{}),(0,$.jsx)(i,{className:Sn.controls,gap:`xs`,wrap:`nowrap`,children:(0,$.jsxs)(o,{size:`xs`,variant:`light`,color:`cyan`,onClick:a,children:[`🎛️ `,n(`app.controls`)]})})]})},Tn.__docgenInfo={description:``,methods:[],displayName:`HvacApp`}}));e((()=>{En()}))();export{Tn as HvacApp};
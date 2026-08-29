import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{i as t,t as n}from"./react-vendor-ChRTX0B8.js";import{a as r,r as i}from"./app-storybook-BAjxxv4j.js";import{c as a,r as o,s,t as c}from"./vendor-DVa_tYQ5.js";import{Nn as l,Zn as u,gt as d,kt as f,qn as p,yr as m}from"./mantine-nBlS-r07.js";import{Ut as h,fr as g}from"./cities-CTh0XQXk.js";import{$ as _,At as v,C as y,Ht as b,It as x,Jt as S,L as C,N as w,Nt as ee,O as T,Tt as E,Vt as D,cn as O,dn as te,g as ne,gt as re,h as k,k as ie,lt as ae,m as A,nn as oe,o as j,p as se,sn as M,v as N,wt as ce,xt as le}from"./three-D5LqgIjC.js";import{C as P,E as ue,S as F,T as de,a as fe,b as I,c as pe,d as L,f as me,i as he,l as ge,m as _e,n as ve,o as ye,p as be,s as xe,t as R,u as Se,v as Ce,w as z,x as B,y as we}from"./hvac-BwXYNfqf.js";d(),i(),h();var V=e(t(),1);j();var H=n(),Te=new N(`#5c7cfa`),Ee=new N(`#748ffc`);function De({index:e}){let t=L(e=>e.setHoveredElement),n=L(e=>e.setSelectedElement),r=P+(e+.5)*z.floorHeight,i=(0,V.useMemo)(()=>new T(new se(1,1,1)),[]);return(0,H.jsxs)(`group`,{position:[0,r,0],children:[(0,H.jsxs)(`mesh`,{onPointerOver:()=>t?.({type:`floor`,id:String(e)}),onPointerOut:()=>t?.(null),onClick:()=>n?.({type:`floor`,id:String(e)}),children:[(0,H.jsx)(`boxGeometry`,{args:[z.width,z.floorHeight,z.depth]}),(0,H.jsx)(`meshPhysicalMaterial`,{color:Te,transparent:!0,opacity:.1,roughness:.4,metalness:.1,depthWrite:!1,side:2})]}),(0,H.jsx)(`lineSegments`,{geometry:i,scale:[z.width,z.floorHeight,z.depth],children:(0,H.jsx)(`lineBasicMaterial`,{color:Ee,transparent:!0,opacity:.5})})]})}function Oe(){return(0,H.jsx)(`group`,{name:`building-shell`,children:Array.from({length:z.floorCount},(e,t)=>t).map(e=>(0,H.jsx)(De,{index:e},e))})}j();var ke=.28,Ae=new N(`#94a3b8`),je=new N(`#64748b`),Me=new N(`#38bdf8`),U=[1.6,1,1.2];function W(e,t){let n=e.nodes[t];return new O(n.position.x,n.position.y,n.position.z)}function Ne({from:e,to:t}){let n=L(e=>e.setHoveredElement),r=L(e=>e.setSelectedElement),i=F.segments.find(n=>n.from===e&&n.to===t),{geometry:a,position:o,quaternion:s}=(0,V.useMemo)(()=>{let n=W(F,e),r=W(F,t),i=n.clone().add(r).multiplyScalar(.5),a=n.distanceTo(r),o=r.clone().sub(n).normalize(),s=new v().setFromUnitVectors(new O(0,1,0),o);return{geometry:new y(ke,ke,a,8,1,!0),position:i,quaternion:s}},[e,t]),c=F.nodes[t],l=c.isSupply;return(0,H.jsx)(`mesh`,{geometry:a,position:o,quaternion:s,onPointerOver:()=>n?.({type:`duct`,id:i?.id??`${e}-${t}`}),onPointerOut:()=>n?.(null),onClick:()=>r?.({type:`duct`,id:i?.id??`${e}-${t}`}),children:(0,H.jsx)(`meshStandardMaterial`,{color:c.type===`unit`?Me:l?Ae:je,metalness:.45,roughness:.4,transparent:!0,opacity:.45,depthWrite:!1})})}function Pe({nodeId:e}){let t=L(e=>e.setHoveredElement),n=L(e=>e.setSelectedElement),r=F.nodes[e].type===`unit`,i=r?Me:`#cbd5e1`;return(0,H.jsxs)(`mesh`,{position:W(F,e),onPointerOver:()=>t?.({type:`unit`,id:e}),onPointerOut:()=>t?.(null),onClick:()=>n?.({type:`unit`,id:e}),children:[r?(0,H.jsx)(`boxGeometry`,{args:U}):(0,H.jsx)(`sphereGeometry`,{args:[.24,10,10]}),(0,H.jsx)(`meshStandardMaterial`,{color:i,metalness:.3,roughness:.5})]})}function Fe(){return(0,H.jsxs)(`group`,{name:`duct-mesh`,children:[F.segments.map(e=>(0,H.jsx)(Ne,{from:e.from,to:e.to},e.id)),Object.keys(F.nodes).map(e=>F.nodes[e].type===`junction`||F.nodes[e].type===`unit`?(0,H.jsx)(Pe,{nodeId:e},e):null)]})}j();var Ie=new N(`#22c55e`),Le=new N(`#ef4444`),Re=new N(`#facc15`),ze=new N(`#ef4444`);function Be({grillId:e,kind:t}){let n=F.nodes[e],r=L(t=>t.grillOpen[e]!==!1),i=L(t=>t.returnGrillOpen[e]!==!1),a=L(e=>e.toggleGrill),o=L(e=>e.toggleReturnGrill),s=L(e=>e.setHoveredElement),c=L(e=>e.setSelectedElement),l=t===`supply`,u=l?r:i,d=l?u?Ie:Le:u?Re:ze;return(0,H.jsxs)(`group`,{position:[n.position.x,n.position.y,n.position.z],onClick:()=>{l?a(e):o(e),c?.({type:`grill`,id:e})},onPointerOver:()=>s?.({type:`grill`,id:e}),onPointerOut:()=>s?.(null),children:[(0,H.jsxs)(`mesh`,{"data-testid":`${e}-plate`,children:[(0,H.jsx)(`boxGeometry`,{args:[1.5,.9,.12]}),(0,H.jsx)(`meshStandardMaterial`,{color:d,emissive:d,emissiveIntensity:u?.5:.25,transparent:!0,opacity:.95})]}),(0,H.jsxs)(`mesh`,{children:[(0,H.jsx)(`boxGeometry`,{args:[1.3,.1,.16]}),(0,H.jsx)(`meshStandardMaterial`,{color:`#1e293b`})]}),(0,H.jsxs)(`mesh`,{position:[0,.22,0],children:[(0,H.jsx)(`boxGeometry`,{args:[1.3,.1,.16]}),(0,H.jsx)(`meshStandardMaterial`,{color:`#1e293b`})]}),(0,H.jsxs)(`mesh`,{position:[0,-.22,0],children:[(0,H.jsx)(`boxGeometry`,{args:[1.3,.1,.16]}),(0,H.jsx)(`meshStandardMaterial`,{color:`#1e293b`})]})]})}function Ve(){return(0,H.jsxs)(`group`,{name:`grill-markers`,children:[F.supplyGrillIds.map(e=>(0,H.jsx)(Be,{grillId:e,kind:`supply`},e)),F.returnGrillIds.map(e=>(0,H.jsx)(Be,{grillId:e,kind:`return`},e))]})}function He(e,t,n,r=0){let i=e.getNode(t),a=e.getNode(n);if(!i||!a)throw Error(`roomPath: missing grill node (${t}, ${n})`);let o={...i.position},s={...a.position},c=Math.max(-1,Math.min(1,r)),l=i.floor??0,u=o.y,d=l*z.floorHeight,f=Math.max(u-d-.4,.1)*(.2+.8*Math.abs(c)),p={x:c*6,y:o.y-f,z:c*4};return{a:o,b:p,c:s,length:Math.hypot(o.x-p.x,o.y-p.y,o.z-p.z)+Math.hypot(p.x-s.x,p.y-s.y,p.z-s.z)}}var Ue=2.5,We=21;function G(e){return((e*2654435761|0)>>>8)%1e3/1e3*.9}function Ge(e,t=600){let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Uint32Array(t),a=new Float32Array(t),o=new Uint32Array(t),s=new Float32Array(t),c=new Uint8Array(t),l=new Float32Array(t),u=new Uint8Array(t),d=new Uint8Array(t),f=Array(t).fill(null),p=new Map;e.segments.forEach((e,t)=>p.set(e.id,t));function m(e){i[e]=0,a[e]=G(e),o[e]=0,s[e]=0,l[e]=0}function h(e,t,n){let r=t?x(t,n,e):-1;r>=0?(i[e]=r,a[e]=0):m(e)}function g(t,n){let r=e.floorOfGrill(n),c=`seg-gr${r}-${n.endsWith(`-1`)?`1`:`0`}-to-dr${r}`,u=p.get(c);u===void 0?m(t):(i[t]=u,a[t]=G(t+3),o[t]=0,s[t]=0,l[t]=0)}function _(t,n){let r=e.floorOfGrill(n);c[t]=r,u[t]=+!!n.endsWith(`-1`),l[t]=0,f[t]=null,o[t]=2,s[t]=0}function v(e,t,n){return n.grillOpen[e.id]?(_(t,e.id),!0):!1}function y(t,n,r){let i=(e.returnGrillsByFloor[t]??[]).filter(e=>r.grillOpen[e]);return i.length===0?null:i.length===1?i[0]:i[n%i.length]}function b(e,t,n){let r=y(t,e,n);r===null?m(e):g(e,r)}{let n=e.segments.map((e,t)=>({seg:e,idx:t})).filter(({seg:t})=>e.nodes[t.to].isSupply&&e.nodes[t.from].isSupply);if(n.length>0)for(let e=0;e<t;e++)i[e]=n[e%n.length].idx,a[e]=G(e+7),o[e]=0,s[e]=0,l[e]=0;else for(let e=0;e<t;e++)m(e)}function x(t,n,r){let i=e.getOutgoingSegments(t.id);if(i.length===0)return-1;if(t.isSupply&&t.id.startsWith(`supply-junc-`)){let a=Number(t.id.split(`-`)[2]),o=e.supplyGrillsByFloor.length-1,s=[];for(let t=a;t<=o;t++)(e.supplyGrillsByFloor[t]??[]).some(e=>n.grillOpen[e])&&s.push(t);if(s.length>0){if(s[r%s.length]===a){let e=i.find(e=>e.to.startsWith(`dist-s-`));if(e)return p.get(e.id)??-1}let e=i.find(e=>e.to.startsWith(`supply-junc-`));if(e)return p.get(e.id)??-1}let c=i.find(e=>e.to.startsWith(`supply-junc-`));if(c)return p.get(c.id)??-1;let l=i[0];return p.get(l.id)??-1}if(t.isSupply&&t.id.startsWith(`dist-s-`)){let a=i.filter(t=>{let r=e.getNode(t.to);return r?.type===`grill`&&n.grillOpen[r.id]});if(a.length>0){let e=a[r%a.length];return p.get(e.id)??-1}let o=e.getIncomingSegments(t.id).find(e=>e.from.startsWith(`supply-junc-`));if(o){let t=e.getNode(o.from);if(t){let e=x(t,n,r);if(e>=0)return e}}return-1}return p.get(i[0].id)??-1}function S(p,g){let _=(p.airFlowRate??1)/1,x=8*p.fanSpeed*p.simSpeed*_,S=p.targetTemperature??We,C=R(S),w=ve(S),ee=(p.floorTemps??[]).map(e=>R(e));for(let S=0;S<t;S++){if(o[S]&2){let t=c[S],i=f[S],a=`grill-r-${t}-${d[S]}`;if(!i||!p.grillOpen[a]){let n=y(t,S,p);if(n===null){m(S);continue}d[S]=+!!n.endsWith(`-1`),i=He(e,`grill-s-${t}-${u[S]}`,n,G(S+13)*2-1),f[S]=i}let o=Ue*p.fanSpeed*p.simSpeed*_;l[S]+=o*g/i.length;let s=I(l[S],0,1),h=s<.5?s*2:(s-.5)*2,v=i.a,x=i.b,w=i.c;n[S*3]=s<.5?v.x+(x.x-v.x)*h:x.x+(w.x-x.x)*h,n[S*3+1]=s<.5?v.y+(x.y-v.y)*h:x.y+(w.y-x.y)*h,n[S*3+2]=s<.5?v.z+(x.z-v.z)*h:x.z+(w.z-x.z)*h;let T=ee[t]??C,E=s*.8;r[S*3]=B(C[0],T[0],E),r[S*3+1]=B(C[1],T[1],E),r[S*3+2]=B(C[2],T[2],E),l[S]>=1&&b(S,t,p);continue}if(o[S]&1){s[S]+=3.5*g;let t=e.segments[i[S]],a=e.nodes[t.to],o=I(s[S],0,1),c=a.position.z>=0?1:-1;n[S*3]=a.position.x,n[S*3+1]=a.position.y+o*.8,n[S*3+2]=a.position.z+c*o*1.4,r[S*3]=B(C[0],1,o*.8),r[S*3+1]=B(C[1],1,o*.8),r[S*3+2]=B(C[2],1,o*.8),s[S]>=1&&m(S);continue}if(p.fanSpeed<=0)continue;let t=e.segments[i[S]],T=e.nodes[t.from],E=e.nodes[t.to];if(E.type===`grill`&&!p.grillOpen[E.id]){h(S,T,p);continue}a[S]+=x*g/t.length,a[S]>=1&&(E.type===`grill`?E.isSupply?v(E,S,p)?a[S]=0:h(S,T,p):p.grillOpen[E.id]?h(S,E,p):b(S,E.floor??0,p):h(S,E,p));let D=I(a[S],0,1);n[S*3]=B(T.position.x,E.position.x,D),n[S*3+1]=B(T.position.y,E.position.y,D),n[S*3+2]=B(T.position.z,E.position.z,D);let O=E.isSupply?C:w;r[S*3]=O[0],r[S*3+1]=O[1],r[S*3+2]=O[2]}}return{count:t,positions:n,colors:r,segmentIndices:i,progress:a,flags:o,exitProgress:s,roomFloor:c,roomProgress:l,roomSupplySlot:u,roomReturnSlot:d,step:S}}var K=new Map;function Ke(e,t){K.set(e,t)}function qe(e){return K.get(e)}function Je(){return[...K.values()]}function Ye(){K.clear()}j();var Xe=3e5,Ze=.02,Qe=.45,$e=`
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
`,et=`
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
`;function tt(){let e=(0,V.useRef)(null),t=a(e=>e.size),n=a(e=>e.viewport.dpr),r=(0,V.useRef)({uVelocity0:{value:null},uVelocity1:{value:null},uVelocity2:{value:null},uFluidStrength:{value:Ze},uHalfFootprint:{value:new M(z.width/2,z.depth/2)},uPointSize:{value:Qe},uScreenScale:{value:400}}),[i]=(0,V.useState)(()=>Ge(F,Xe)),o=(0,V.useMemo)(()=>{let t=new k;t.setAttribute(`position`,new A(i.positions,3)),t.setAttribute(`color`,new A(i.colors,3));let n=new A(new Float32Array(i.count).fill(-1),1);return e.current=n,t.setAttribute(`aFloor`,n),t.boundingSphere=new S(new O(0,5,0),60),t},[i]);return(0,V.useEffect)(()=>{let e,t=()=>{let t=r.current,n=!0;for(let e=0;e<z.floorCount;e++){let r=qe(e);r?t[`uVelocity${e}`].value=r.velocityProjectedTexture:n=!1}n&&e!==void 0&&window.clearInterval(e)};return e=window.setInterval(t,400),t(),()=>{e!==void 0&&window.clearInterval(e)}},[]),s((a,s)=>{let c=Math.min(s,.05),l=L.getState();r.current.uScreenScale.value=t.height*n/2,l.stepThermal?.(c*l.simSpeed),i.step({fanSpeed:l.fanSpeed,mode:l.mode,targetTemperature:l.targetTemperature,grillOpen:{...l.grillOpen,...l.returnGrillOpen},simSpeed:l.simSpeed,floorTemps:l.floorTemps,airFlowRate:l.airFlowRate},c);let u=e.current?.array;if(u){for(let e=0;e<i.count;e++)u[e]=i.flags[e]&2?i.roomFloor[e]:-1;e.current.needsUpdate=!0}let d=o.getAttribute(`position`);d.needsUpdate=!0,o.getAttribute(`color`).needsUpdate=!0}),(0,H.jsx)(`points`,{geometry:o,frustumCulled:!1,children:(0,H.jsx)(`shaderMaterial`,{vertexShader:$e,fragmentShader:et,uniforms:r.current,transparent:!0,depthWrite:!1,blending:2})})}j();var nt=new N(`#22c55e`),rt=P;function it(e){if(e.type===`floor`)return{position:[0,rt+(Number(e.id)+.5)*z.floorHeight,0],size:[z.width,z.floorHeight,z.depth]};if(e.type===`unit`){let e=F.getUnitNode();return{position:[e.position.x,e.position.y,e.position.z],size:[U[0],U[1],U[2]]}}if(e.type===`grill`){let t=F.nodes[e.id];return t?{position:[t.position.x,t.position.y,t.position.z],size:[1.8,1.1,.4]}:null}if(e.type===`duct`){let t=F.segments.find(t=>t.id===e.id);if(!t)return null;let n=F.nodes[t.from],r=F.nodes[t.to],i=n?n.position.x:0,a=n?n.position.y:0,o=n?n.position.z:0,s=r?r.position.x:0,c=r?r.position.y:0,l=r?r.position.z:0;return{position:[(i+s)/2,(a+c)/2,(o+l)/2],size:[Math.abs(s-i)+.5,Math.abs(c-a)+.5,Math.abs(l-o)+.5]}}return null}function at(){let e=L(e=>e.hoveredElement),t=L(e=>e.selectedElement)??e,n=(0,V.useMemo)(()=>new T(new se(1,1,1)),[]),r=(0,V.useMemo)(()=>t?it(t):null,[t]);return!t||!r?null:(0,H.jsx)(`lineSegments`,{geometry:n,position:r.position,scale:r.size,frustumCulled:!1,children:(0,H.jsx)(`lineBasicMaterial`,{color:nt,linewidth:2,transparent:!0,opacity:.9})})}j();var ot=`
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
`,st=`
precision mediump float;
varying highp vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main() {
  gl_FragColor = value * texture2D(uTexture, vUv);
}
`,ct=`
varying vec2 vLocalUv;
uniform vec2 uCenter;
uniform vec2 uScale;

void main() {
  vLocalUv = position.xy;
  gl_Position = vec4(position.xy * uScale + uCenter, 0.0, 1.0);
}
`,lt=`
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
`,ut=`
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
`,dt=`
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
`,ft=`
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
`,pt=`
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
`,mt=`
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
`,q=`
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
`,ht={performance:{simResolution:128,dyeResolution:256,pressureIterations:6},balanced:{simResolution:256,dyeResolution:512,pressureIterations:12},quality:{simResolution:384,dyeResolution:1024,pressureIterations:20}};function J(e,t,n){let r=n?_:re;return new te(e,t,{depthBuffer:!1,stencilBuffer:!1,format:ee,type:C,minFilter:r,magFilter:r,wrapS:ne,wrapT:ne,generateMipmaps:!1})}function Y(e,t,n){return{read:J(e,t,n),write:J(e,t,n)}}function X(e){let t=e.read;e.read=e.write,e.write=t}function Z(e){e.read.dispose(),e.write.dispose()}var gt=class{simResolution;dyeResolution;pressureIterations;densityDissipation;velocityDissipation;pressureDissipation;curlStrength;splatRadius;splatForce;baseDelta;enableVorticity;bfecc;reflectWalls;renderer;scene=new D;camera=new le(-1,1,1,-1,0,1);geometry=new k;mesh;splatScene=new D;splatGeometry=new k;splatMesh;velocity;density;dye;pressure;divergence;curl;enableDye=!1;dyeDissipation;clearMaterial;splatMaterial;curlMaterial;vorticityMaterial;divergenceMaterial;pressureMaterial;gradientSubtractMaterial;advectVelocityMaterial;advectDensityMaterial;advectDyeMaterial;splats=[];viewportWidth=1;viewportHeight=1;simWidth;simHeight;dyeWidth;dyeHeight;constructor(e,t={}){this.renderer=e;let n=ht[t.profile??`balanced`];this.simResolution=t.simResolution??n.simResolution,this.dyeResolution=t.dyeResolution??n.dyeResolution,this.pressureIterations=t.pressureIterations??n.pressureIterations,this.densityDissipation=t.densityDissipation??.91,this.velocityDissipation=t.velocityDissipation??.985,this.pressureDissipation=t.pressureDissipation??.8,this.curlStrength=t.curlStrength??.55,this.splatRadius=t.splatRadius??42e-5,this.splatForce=t.splatForce??6,this.baseDelta=t.baseDelta??1/60,this.enableVorticity=t.enableVorticity??!1,this.bfecc=t.bfecc??!0,this.reflectWalls=t.reflectWalls??!0,this.geometry.setAttribute(`position`,new w(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.mesh=new ae(this.geometry,void 0),this.mesh.frustumCulled=!1,this.scene.add(this.mesh),this.splatGeometry.setAttribute(`position`,new w(new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),3)),this.splatGeometry.setIndex(new oe(new Uint16Array([0,1,2,1,3,2]),1)),this.splatMesh=new ae(this.splatGeometry,void 0),this.splatMesh.frustumCulled=!1,this.splatScene.add(this.splatMesh),this.simWidth=this.simResolution,this.simHeight=this.simResolution,this.dyeWidth=this.dyeResolution,this.dyeHeight=this.dyeResolution,this.velocity=Y(this.simWidth,this.simHeight,!0),this.density=Y(this.dyeWidth,this.dyeHeight,!0),this.dye=Y(this.dyeWidth,this.dyeHeight,!0),this.pressure=Y(this.simWidth,this.simHeight,!1),this.dyeDissipation=t.dyeDissipation??this.densityDissipation,this.divergence=J(this.simWidth,this.simHeight,!1),this.curl=J(this.simWidth,this.simHeight,!1);let r=new M(1/this.simWidth,1/this.simHeight),i=new M(1/this.dyeWidth,1/this.dyeHeight);this.clearMaterial=this.createMaterial(st,{texelSize:{value:r.clone()},uTexture:{value:null},value:{value:this.pressureDissipation}}),this.splatMaterial=new b({vertexShader:ct,fragmentShader:lt,uniforms:{uCenter:{value:new M},uScale:{value:new M},color:{value:new O}},depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:201,blendSrcAlpha:201,blendDstAlpha:201}),this.splatMesh.material=this.splatMaterial,this.curlMaterial=this.createMaterial(ut,{texelSize:{value:r.clone()},uVelocity:{value:null}}),this.vorticityMaterial=this.createMaterial(dt,{texelSize:{value:r.clone()},uVelocity:{value:null},uCurl:{value:null},curl:{value:this.curlStrength},dt:{value:.016}}),this.divergenceMaterial=this.createMaterial(ft,{texelSize:{value:r.clone()},uVelocity:{value:null},uReflectWalls:{value:1}}),this.pressureMaterial=this.createMaterial(pt,{texelSize:{value:r.clone()},uPressure:{value:null},uDivergence:{value:null}}),this.gradientSubtractMaterial=this.createMaterial(mt,{texelSize:{value:r.clone()},uPressure:{value:null},uVelocity:{value:null}}),this.advectVelocityMaterial=this.createMaterial(q,{texelSize:{value:r.clone()},uVelocity:{value:null},uSource:{value:null},dt:{value:.016},dissipation:{value:1},uBFECC:{value:0}}),this.advectDensityMaterial=this.createMaterial(q,{texelSize:{value:i.clone()},uVelocity:{value:null},uSource:{value:null},dt:{value:.016},dissipation:{value:1},uBFECC:{value:0}}),this.advectDyeMaterial=this.createMaterial(q,{texelSize:{value:i.clone()},uVelocity:{value:null},uSource:{value:null},dt:{value:.016},dissipation:{value:1},uBFECC:{value:0}})}get velocityTexture(){return this.velocity.read.texture}get velocityProjectedTexture(){return this.velocity.write.texture}get densityTexture(){return this.density.read.texture}get dyeTexture(){return this.dye.read.texture}resize(e,t){this.viewportWidth=Math.max(1,e),this.viewportHeight=Math.max(1,t);let n=this.viewportWidth/this.viewportHeight,r,i,a,o;if(n>=1?(r=this.simResolution,i=Math.max(1,Math.round(this.simResolution/n)),a=this.dyeResolution,o=Math.max(1,Math.round(this.dyeResolution/n))):(r=Math.max(1,Math.round(this.simResolution*n)),i=this.simResolution,a=Math.max(1,Math.round(this.dyeResolution*n)),o=this.dyeResolution),r!==this.simWidth||i!==this.simHeight){this.simWidth=r,this.simHeight=i,this.velocity.read.setSize(r,i),this.velocity.write.setSize(r,i),this.pressure.read.setSize(r,i),this.pressure.write.setSize(r,i),this.divergence.setSize(r,i),this.curl.setSize(r,i);let e=1/r,t=1/i;this.clearMaterial.uniforms.texelSize.value.set(e,t),this.curlMaterial.uniforms.texelSize.value.set(e,t),this.vorticityMaterial.uniforms.texelSize.value.set(e,t),this.divergenceMaterial.uniforms.texelSize.value.set(e,t),this.pressureMaterial.uniforms.texelSize.value.set(e,t),this.gradientSubtractMaterial.uniforms.texelSize.value.set(e,t),this.advectVelocityMaterial.uniforms.texelSize.value.set(e,t)}if(a!==this.dyeWidth||o!==this.dyeHeight){this.dyeWidth=a,this.dyeHeight=o,this.density.read.setSize(a,o),this.density.write.setSize(a,o),this.dye.read.setSize(a,o),this.dye.write.setSize(a,o);let e=1/a,t=1/o;this.advectDensityMaterial.uniforms.texelSize.value.set(e,t),this.advectDyeMaterial.uniforms.texelSize.value.set(e,t)}}addSplat(e,t,n,r,i={}){this.splats.push({x:Math.min(1,Math.max(0,e)),y:Math.min(1,Math.max(0,t)),dx:n,dy:r,radius:i.radius??this.splatRadius,color:i.color,dyeColor:i.dyeColor})}step(e){let t=Math.min(Math.max(e,1e-6),1/60),n=this.baseDelta>0?t/this.baseDelta:1,r=this.renderer.getRenderTarget(),i=this.renderer.autoClear;this.renderer.autoClear=!1,this.vorticityMaterial.uniforms.curl.value=this.curlStrength;let a=+!!this.bfecc;this.advectVelocityMaterial.uniforms.uBFECC.value=a,this.advectDensityMaterial.uniforms.uBFECC.value=a;for(let e=0;e<this.splats.length;e+=1)this.applySplat(this.splats[e]);this.splats.length=0,this.enableVorticity&&(this.curlMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.blit(this.curl,this.curlMaterial),this.vorticityMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.vorticityMaterial.uniforms.uCurl.value=this.curl.texture,this.vorticityMaterial.uniforms.dt.value=t,this.blit(this.velocity.write,this.vorticityMaterial),X(this.velocity)),this.divergenceMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.divergenceMaterial.uniforms.uReflectWalls.value=+!!this.reflectWalls,this.blit(this.divergence,this.divergenceMaterial),this.clearMaterial.uniforms.uTexture.value=this.pressure.read.texture,this.clearMaterial.uniforms.value.value=this.pressureDissipation**+n,this.blit(this.pressure.write,this.clearMaterial),X(this.pressure),this.pressureMaterial.uniforms.uDivergence.value=this.divergence.texture;for(let e=0;e<this.pressureIterations;e+=1)this.pressureMaterial.uniforms.uPressure.value=this.pressure.read.texture,this.blit(this.pressure.write,this.pressureMaterial),X(this.pressure);this.gradientSubtractMaterial.uniforms.uPressure.value=this.pressure.read.texture,this.gradientSubtractMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.blit(this.velocity.write,this.gradientSubtractMaterial),X(this.velocity),this.advectVelocityMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.advectVelocityMaterial.uniforms.uSource.value=this.velocity.read.texture,this.advectVelocityMaterial.uniforms.dissipation.value=this.velocityDissipation**+n,this.advectVelocityMaterial.uniforms.dt.value=t,this.blit(this.velocity.write,this.advectVelocityMaterial),X(this.velocity),this.advectDensityMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.advectDensityMaterial.uniforms.uSource.value=this.density.read.texture,this.advectDensityMaterial.uniforms.dissipation.value=this.densityDissipation**+n,this.advectDensityMaterial.uniforms.dt.value=t,this.blit(this.density.write,this.advectDensityMaterial),X(this.density),this.enableDye&&(this.advectDyeMaterial.uniforms.uBFECC.value=a,this.advectDyeMaterial.uniforms.uVelocity.value=this.velocity.read.texture,this.advectDyeMaterial.uniforms.uSource.value=this.dye.read.texture,this.advectDyeMaterial.uniforms.dissipation.value=this.dyeDissipation**+n,this.advectDyeMaterial.uniforms.dt.value=t,this.blit(this.dye.write,this.advectDyeMaterial),X(this.dye)),this.renderer.setRenderTarget(r),this.renderer.autoClear=i}dispose(){this.scene.remove(this.mesh),this.splatScene.remove(this.splatMesh),this.geometry.dispose(),this.splatGeometry.dispose(),this.clearMaterial.dispose(),this.splatMaterial.dispose(),this.curlMaterial.dispose(),this.vorticityMaterial.dispose(),this.divergenceMaterial.dispose(),this.pressureMaterial.dispose(),this.gradientSubtractMaterial.dispose(),this.advectVelocityMaterial.dispose(),this.advectDensityMaterial.dispose(),this.advectDyeMaterial.dispose(),Z(this.velocity),Z(this.density),Z(this.dye),Z(this.pressure),this.divergence.dispose(),this.curl.dispose()}createMaterial(e,t){return new b({vertexShader:ot,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1,toneMapped:!1})}blit(e,t){this.mesh.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}applySplat(e){let t=this.viewportWidth/this.viewportHeight,n=e.color??[e.dx,e.dy,1],r=3*Math.sqrt(e.radius),i=this.splatMaterial.uniforms;i.uCenter.value.set(e.x*2-1,e.y*2-1),i.uScale.value.set(r/t,r),i.color.value.set(n[0],n[1],n[2]),this.renderer.setRenderTarget(this.velocity.read),this.renderer.render(this.splatScene,this.camera),this.renderer.setRenderTarget(this.density.read),this.renderer.render(this.splatScene,this.camera),this.enableDye&&e.dyeColor&&(i.color.value.set(e.dyeColor[0],e.dyeColor[1],e.dyeColor[2]),this.renderer.setRenderTarget(this.dye.read),this.renderer.render(this.splatScene,this.camera))}};new le(-1,1,1,-1,0,1),new class extends k{constructor(){super(),this.setAttribute(`position`,new w([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new w([0,2,0,0,2,0],2))}};function _t(e,t){return[(e+z.width/2)/z.width,(t+z.depth/2)/z.depth]}var vt={profile:`performance`,enableVorticity:!0,curlStrength:.7,reflectWalls:!0,bfecc:!0},yt=.06,bt=.8;function xt(){let e=a(e=>e.gl),t=(0,V.useRef)([]);return(0,V.useLayoutEffect)(()=>{let n=[],r=z.floorCount;for(let t=0;t<r;t++){let r;try{r=new gt(e,vt)}catch(e){console.error(`[hvac] FluidSimulation init failed:`,e);return}r.resize(Math.round(z.width*10),Math.round(z.depth*10)),Ke(t,r),n.push(r)}return t.current=n,()=>{n.forEach(e=>e.dispose()),Ye(),t.current=[]}},[e]),s((e,n)=>{let r=t.current;if(r.length===0)return;let i=L.getState(),a=i.targetTemperature,o=[...R(a)],s=bt*(i.airFlowRate/1),c={radius:yt,color:o};r.forEach((e,t)=>{let r=F.supplyGrillsByFloor[t]??[];for(let t of r){if(i.grillOpen[t]===!1)continue;let n=F.nodes[t],[r,a]=_t(n.position.x,n.position.z),o=n.position.x>0?-1:1;e.addSplat(r,a,o*s,0,c)}e.step(Math.min(n,.05))})}),null}j();var St=.06,Ct=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,wt=`
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
`;function Tt({floor:e}){let t=(0,V.useRef)({uDensity:{value:null},uDensityScale:{value:14},uOpacity:{value:.45}});(0,V.useLayoutEffect)(()=>{let n=()=>{let n=qe(e);return n?(t.current.uDensity.value=n.densityTexture,!0):!1};if(n())return;let r=window.setInterval(()=>{n()&&window.clearInterval(r)},300);return()=>window.clearInterval(r)},[e]);let n=(0,V.useMemo)(()=>new E(z.width,z.depth,48,36),[]),r=P+z.floorHeight*e+e*.05+St,i=(0,V.useMemo)(()=>new ie(-Math.PI/2,0,0),[]);return(0,H.jsx)(`mesh`,{geometry:n,position:(0,V.useMemo)(()=>[0,r,0],[e]),rotation:i,renderOrder:5,children:(0,H.jsx)(`shaderMaterial`,{vertexShader:Ct,fragmentShader:wt,uniforms:t.current,transparent:!0,depthWrite:!1})})}j();var Q={splatRadius:.05,splatForce:.12,color:[.6,.8,1]};function Et(){let e=a(e=>e.camera),t=a(e=>e.pointer),n=a(e=>e.gl);return(0,V.useEffect)(()=>{let r=new x,i=new ce(new O(0,1,0),-6.5),a=new O,o=null,s=()=>{if(t.x<-1||t.x>1||t.y<-1||t.y>1||(r.setFromCamera(t,e),!r.ray.intersectPlane(i,a)))return;let n=0,s=0;o&&(n=(a.x-o.x)*Q.splatForce,s=(a.z-o.z)*Q.splatForce),o=a.clone();let[c,l]=_t(a.x,a.z),u={radius:Q.splatRadius,color:Q.color};for(let e of Je())e.addSplat(c,l,n,s,u)};n.domElement.style.cursor=`crosshair`;let c=window.setInterval(s,100);return()=>{window.clearInterval(c),n.domElement.style.cursor=``}},[e,t,n]),null}var Dt={MIN_DISTANCE:5,MAX_DISTANCE:80,MAX_POLAR_DEG:1.45},Ot=()=>(0,H.jsxs)(o,{frameloop:`always`,camera:{position:[26,18,30],fov:45,near:.5,far:200},gl:{antialias:!0,powerPreference:`high-performance`},style:{width:`100%`,height:`100%`,display:`block`},children:[(0,H.jsx)(`color`,{attach:`background`,args:[`#0b1020`]}),(0,H.jsx)(`fog`,{attach:`fog`,args:[`#0b1020`,60,140]}),(0,H.jsx)(`ambientLight`,{intensity:.5}),(0,H.jsx)(`hemisphereLight`,{intensity:.4,color:`#93c5fd`,groundColor:`#334155`}),(0,H.jsx)(`directionalLight`,{position:[12,24,8],intensity:1.6,castShadow:!0,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024}),(0,H.jsxs)(`mesh`,{rotation:[-Math.PI/2,0,0],position:[0,0,0],children:[(0,H.jsx)(`planeGeometry`,{args:[90,90]}),(0,H.jsx)(`meshStandardMaterial`,{color:`#0f172a`,roughness:.9})]}),(0,H.jsx)(`gridHelper`,{args:[60,20,`#1e293b`,`#1e293b`],position:[0,.02,0]}),(0,H.jsx)(Oe,{}),(0,H.jsx)(Fe,{}),(0,H.jsx)(Ve,{}),(0,H.jsx)(tt,{}),(0,H.jsx)(at,{}),(0,H.jsx)(xt,{}),Array.from({length:z.floorCount},(e,t)=>(0,H.jsx)(Tt,{floor:t},t)),(0,H.jsx)(Et,{}),(0,H.jsx)(c,{enableDamping:!0,dampingFactor:.08,minDistance:Dt.MIN_DISTANCE,maxDistance:Dt.MAX_DISTANCE,maxPolarAngle:Dt.MAX_POLAR_DEG,target:[0,6,0]})]});function kt(e){return e===null?null:e<60?Math.max(0,Math.round(e)):`${Math.floor(e/60)}m ${Math.round(e%60)}s`}function $(e){return`${e.toFixed(1)}°C`}function At(e,t){return e||t||null}function jt(e){let{t}=r(`hvac`),n=ge(),i=pe(),a=_e(),o=xe(),s=ye(),c=be(),l=Se(),u=me();if(e.type===`floor`){let r=Number(e.id),u=n[r]??a,d=he(r,l),f=fe(l),p=we({targetTemperature:a,ambientTemperature:a,fanSpeed:o,openSupplyGrills:Math.max(d,1),floorVolume:de,airFlowRate:s,totalOpenSupplyGrills:Math.max(f,d,1)}),m=i[r]??null,h=Ce({temperature:u,elapsed:0,reachedAt:m},a,p/c);return{title:t(`tooltip.label`,{floor:r}),rows:[{label:t(`tooltip.floorSize`),value:`${z.width} × ${z.depth} × ${z.floorHeight} m`},{label:t(`tooltip.floorArea`),value:`${z.width} × ${z.depth} = ${z.width*z.depth} m²`},{label:t(`tooltip.tempCurrent`),value:$(u)},{label:t(`tooltip.target`),value:$(a)},m===null?{label:t(`tooltip.eta`),value:kt(h)===null?t(`tooltip.never`):String(kt(h))}:{label:t(`tooltip.reached`,{time:`${Math.round(m)}s`}),value:`✓`},{label:t(`tooltip.flow`),value:`${(o*s*(d/Math.max(f,d,1))).toFixed(2)} m³/s`}]}}if(e.type===`grill`){let n=F.nodes[e.id].isSupply??e.id.startsWith(`grill-s-`),r=n?l[e.id]!==!1:u[e.id]!==!1;return{title:e.id,rows:[{label:t(n?`tooltip.supply`:`tooltip.return`),value:t(r?`tooltip.open`:`tooltip.closed`)},{label:t(`tooltip.airTemp`),value:$(a)}]}}if(e.type===`duct`){let n=F.segments.find(t=>t.id===e.id),r=!n||F.nodes[n.to].isSupply;return{title:e.id,rows:[{label:t(r?`tooltip.supply`:`tooltip.return`),value:``},{label:t(`tooltip.airTemp`),value:$(a)},{label:t(`tooltip.velocity`),value:`${(8*o).toFixed(1)} m/s`}]}}return e.type===`unit`?{title:t(`tooltip.unitTitle`),rows:[{label:t(`tooltip.generates`),value:$(a)},{label:t(`tooltip.mode`),value:t(a>22?`tooltip.heatMode`:`tooltip.coolMode`)},{label:t(`tooltip.flow`),value:`${(o*s).toFixed(2)} m³/s`}]}:null}function Mt(){let e=At(L(e=>e.hoveredElement),L(e=>e.selectedElement)),t=jt(e??{type:`floor`,id:`0`});return!e||!t?null:(0,H.jsx)(`div`,{style:{position:`absolute`,bottom:12,left:12,zIndex:10,pointerEvents:`none`,maxWidth:300},children:(0,H.jsx)(m,{className:`hvac-tooltip`,style:{background:`var(--mantine-color-body)`,border:`1px solid var(--mantine-color-default-border)`,borderRadius:`var(--mantine-radius-sm)`,padding:`8px 12px`,boxShadow:`0 2px 8px rgba(0,0,0,0.15)`},children:(0,H.jsxs)(f,{gap:2,children:[(0,H.jsx)(p,{size:`xs`,fw:700,mb:1,children:t.title}),t.rows.map(e=>(0,H.jsxs)(u,{gap:4,wrap:`nowrap`,children:[(0,H.jsxs)(p,{size:`xs`,c:`dimmed`,style:{minWidth:110},children:[e.label,`:`]}),(0,H.jsx)(p,{size:`xs`,children:e.value})]},e.label))]})})})}var Nt={controls:`_controls_1wjso_1`};d(),i(),ue();var Pt=({window:e,notifyReady:t})=>{let{t:n}=r(`hvac`),i=g();(0,V.useEffect)(()=>{t?.({})},[t]);let a=(0,V.useCallback)(()=>{i(`hvac-theatre`,{parentId:e?.id})},[i,e?.id]);return(0,H.jsxs)(m,{style:{width:`100%`,height:`100%`,position:`relative`},"data-windowid":e?.id,children:[(0,H.jsx)(Ot,{}),(0,H.jsx)(Mt,{}),(0,H.jsx)(u,{className:Nt.controls,gap:`xs`,wrap:`nowrap`,children:(0,H.jsxs)(l,{size:`xs`,variant:`light`,color:`cyan`,onClick:a,children:[`🎛️ `,n(`app.controls`)]})})]})};export{Pt as HvacApp};
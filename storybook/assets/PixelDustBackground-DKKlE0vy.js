import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-DEAHbL4P.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Rt as i,St as a,Tt as o,d as s,f as c,n as l,ot as u,r as d,vt as f,wt as p,zt as m}from"./three.module-C0Ddz1ir.js";var h,g,_,v;e((()=>{h=t(n(),1),d(),g=r(),_=4,v=()=>{let e=(0,h.useRef)(null),t=(0,h.useRef)(0);return(0,h.useEffect)(()=>{let n=e.current;if(!n)return;let r=new i,d=new f(-1,1,1,-1,.1,10);d.position.z=1;let h=new l({canvas:n,alpha:!0,antialias:!1}),g=Math.max(n.clientWidth||window.innerWidth,1),v=Math.max(n.clientHeight||window.innerHeight,1);h.setSize(g,v),h.setPixelRatio(1);let y=[],b=new Float32Array(240);for(let e=0;e<80;e++){let t=Math.random(),n=Math.random();y.push({x:t,y:n,size:_*(1+Math.floor(Math.random()*3)),speed:.002+Math.random()*.008,phase:Math.random()*Math.PI*2,alpha:.03+Math.random()*.1}),b[e*3]=t*2-1,b[e*3+1]=n*2-1,b[e*3+2]=0}let x=new c;x.setAttribute(`position`,new s(b,3));let S=new o({color:61695,size:_,transparent:!0,opacity:.15,blending:2,depthWrite:!1,sizeAttenuation:!1}),C=new p(x,S);r.add(C);let w=new a(2,2),T=new m({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uResolution:{value:[n.clientWidth,n.clientHeight]}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
          vec2 center = vec2(0.5);
          float d = distance(vUv, center);
          float glow = exp(-d * d * 8.0) * 0.04;
          float pulse = 0.5 + 0.5 * sin(uTime * 0.3);
          gl_FragColor = vec4(0.0, 0.94, 1.0, glow * (0.8 + 0.2 * pulse));
        }
      `}),E=new u(w,T);r.add(E);let D=0,O=()=>{D+=.015;let e=x.attributes.position.array;for(let t=0;t<80;t++){let n=y[t];n.x+=n.speed*Math.sin(D*.3+n.phase),n.y+=n.speed*Math.cos(D*.2+n.phase*1.3),n.x<0&&(n.x=1),n.x>1&&(n.x=0),n.y<0&&(n.y=1),n.y>1&&(n.y=0),e[t*3]=n.x*2-1,e[t*3+1]=n.y*2-1}x.attributes.position.needsUpdate=!0,T.uniforms.uTime.value=D,h.render(r,d),t.current=requestAnimationFrame(O)};O();let k=()=>{let e=window.innerWidth,t=window.innerHeight;h.setSize(e,t),T.uniforms.uResolution.value=[e,t]};return window.addEventListener(`resize`,k),k(),()=>{cancelAnimationFrame(t.current),window.removeEventListener(`resize`,k),h.dispose(),x.dispose(),S.dispose(),T.dispose()}},[]),(0,g.jsx)(`canvas`,{ref:e,style:{position:`fixed`,inset:0,width:`100%`,height:`100%`,display:`block`,zIndex:0,pointerEvents:`none`}})},v.__docgenInfo={description:``,methods:[],displayName:`PixelDustBackground`}}))();export{v as default};
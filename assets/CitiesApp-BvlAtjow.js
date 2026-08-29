const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GLTFExporter-BgP6aOxs.js","assets/three-D5LqgIjC.js","assets/rolldown-runtime-CNC7AqOf.js"])))=>i.map(i=>d[i]);
import{a as e,t}from"./rolldown-runtime-CNC7AqOf.js";import{i as n,t as r}from"./react-vendor-ChRTX0B8.js";import{a as i,c as a,i as o,m as s,n as c,o as l,r as u,s as d,t as f}from"./vendor-DVa_tYQ5.js";import{Gt as p,Vt as m,Zn as h,ar as g,gt as _,kt as v,lr as y,qn as b,rn as x,tr as S,yr as C}from"./mantine-nBlS-r07.js";import{C as w,Ct as T,D as E,Dt as ee,E as D,Et as O,Ot as k,Ut as A,a as te,d as ne,f as re,fr as ie,i as ae,jt as oe,k as se,l as ce,m as le,o as ue,p as de,s as fe,t as pe,w as me,wt as he}from"./cities-CTh0XQXk.js";import{$r as ge,Ni as _e,Pi as ve,ei as ye}from"./app-terminal-CmJlUYc8.js";import{$ as j,$t as be,A as xe,Bt as M,C as Se,Ct as Ce,D as we,E as Te,Et as Ee,F as De,Ht as N,I as Oe,L as ke,Lt as Ae,Mt as je,N as P,Nt as Me,P as Ne,Pt as Pe,Q as Fe,R as Ie,Rt as Le,T as Re,Tt as ze,Ut as Be,Vt as Ve,Wt as He,Yt as Ue,Zt as We,an as Ge,cn as F,ct as Ke,dn as I,dt as qe,f as Je,ft as Ye,gt as Xe,h as Ze,i as Qe,in as $e,j as et,ln as tt,lt as L,m as nt,mt as rt,n as it,nt as at,o as R,on as ot,ot as st,p as ct,rn as z,sn as B,st as lt,t as ut,u as V,ut as dt,v as H,w as ft,xt as pt,zt as mt}from"./three-D5LqgIjC.js";var U=e(n(),1);A(),_();var W=r(),ht=({phase:e,taskName:t,progress:n,onCancel:r})=>{let i=!!t,a=i?t:e?ee[e]?.label??e:``,o=Math.round(i?Math.min(100,Math.max(0,n)):n*100);return(0,W.jsx)(y,{fixed:!0,color:`#000`,backgroundOpacity:.7,zIndex:1e3,center:!0,children:(0,W.jsx)(C,{style:{maxWidth:400,width:`90%`},children:(0,W.jsxs)(v,{align:`center`,gap:`md`,children:[(0,W.jsx)(b,{size:`lg`,fw:500,c:`white`,children:a}),(0,W.jsx)(p,{value:o,w:`100%`,size:`lg`,radius:`md`,animated:n<(i?100:1),color:n>=(i?100:1)?`green`:`blue`}),(0,W.jsxs)(b,{size:`sm`,c:`gray.4`,children:[o,`%`]}),r&&n<1&&!i&&(0,W.jsx)(b,{size:`sm`,c:`gray.5`,style:{cursor:`pointer`},onClick:r,children:`Click to cancel`})]})})})};R();var gt=class e{_origin;_zoom;_width;_height;constructor(e,t){this._origin=new B(0,0),this._zoom=1,this._width=e,this._height=t}get zoom(){return this._zoom}set zoom(e){this._zoom=lt.clamp(e,k.min,k.max)}get origin(){return this._origin}get width(){return this._width}get height(){return this._height}worldToScreen(e){return e.clone().sub(this._origin).multiplyScalar(this._zoom)}screenToWorld(e){return e.clone().divideScalar(this._zoom).add(this._origin)}zoomToWorld(e,t){let n=this.screenToWorld(e);return this.zoom=t,n}zoomToScreen(e){return this.worldToScreen(e)}worldDimensions(){return new B(this._width/this._zoom,this._height/this._zoom)}onScreen(e){let t=this.worldToScreen(e);return t.x>=0&&t.x<=this._width&&t.y>=0&&t.y<=this._height}pan(e){this._origin.add(e.clone().divideScalar(this._zoom))}panTo(e){let t=this.worldDimensions();this._origin.set(e.x-t.x/2,e.y-t.y/2)}zoomAtPoint(e,t){let n=this.screenToWorld(e);this.zoom=t;let r=n.clone().sub(e.clone().divideScalar(t));this._origin.copy(r)}updateDimensions(e,t){this._width=e,this._height=t}reset(){this._origin.set(0,0),this._zoom=1}clone(){let t=new e(this._width,this._height);return t._origin=this._origin.clone(),t._zoom=this._zoom,t}},_t=class{ctx;_width;_height;dpr;constructor(e,t,n){let r=e.getContext(`2d`);if(!r)throw Error(`Failed to get 2D context from canvas`);this.ctx=r,this._width=t,this._height=n,this.dpr=window.devicePixelRatio||1,this.updateContainerSize(t,n)}get width(){return this._width}get height(){return this._height}updateContainerSize(e,t){this._width=e,this._height=t,this.dpr=window.devicePixelRatio||1,this.ctx.canvas.width=e*this.dpr,this.ctx.canvas.height=t*this.dpr,this.ctx.canvas.style.width=`${e}px`,this.ctx.canvas.style.height=`${t}px`,this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0)}clearCanvas(){this.ctx.clearRect(0,0,this._width,this._height)}setFillStyle(e){this.ctx.fillStyle=e}setStrokeStyle(e){this.ctx.strokeStyle=e}setLineWidth(e){this.ctx.lineWidth=e}setGlobalAlpha(e){this.ctx.globalAlpha=e}setLineDash(e){this.ctx.setLineDash(e)}resetLineDash(){this.ctx.setLineDash([])}drawPolygon(e,t=!0,n=!0){if(!(e.length<3)){this.ctx.beginPath(),this.ctx.moveTo(e[0].x,e[0].y);for(let t=1;t<e.length;t++)this.ctx.lineTo(e[t].x,e[t].y);this.ctx.closePath(),t&&this.ctx.fill(),n&&this.ctx.stroke()}}drawPolyline(e){if(!(e.length<2)){this.ctx.beginPath(),this.ctx.moveTo(e[0].x,e[0].y);for(let t=1;t<e.length;t++)this.ctx.lineTo(e[t].x,e[t].y);this.ctx.stroke()}}drawRectangle(e,t,n,r,i=!1){this.ctx.beginPath(),this.ctx.rect(e,t,n,r),this.ctx.fill(),i&&this.ctx.stroke()}drawCircle(e,t,n=!1){this.ctx.beginPath(),this.ctx.arc(e.x,e.y,t,0,Math.PI*2),this.ctx.fill(),n&&this.ctx.stroke()}drawLine(e,t){this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(t.x,t.y),this.ctx.stroke()}drawCross(e,t){let n=t/2;this.ctx.beginPath(),this.ctx.moveTo(e.x-n,e.y),this.ctx.lineTo(e.x+n,e.y),this.ctx.moveTo(e.x,e.y-n),this.ctx.lineTo(e.x,e.y+n),this.ctx.stroke()}drawText(e,t,n={}){let{font:r=`12px sans-serif`,color:i=`#000`,align:a=`left`,baseline:o=`top`}=n;this.ctx.font=r,this.ctx.fillStyle=i,this.ctx.textAlign=a,this.ctx.textBaseline=o,this.ctx.fillText(e,t.x,t.y)}beginPath(){this.ctx.beginPath()}moveTo(e){this.ctx.moveTo(e.x,e.y)}lineTo(e){this.ctx.lineTo(e.x,e.y)}closePath(){this.ctx.closePath()}fill(){this.ctx.fill()}stroke(){this.ctx.stroke()}};R();var vt=class e{controller;canvas;scheme;sunParams;constructor(e,t,n,r){this.controller=e,this.canvas=t,this.scheme=he(n),this.sunParams=r??{angle:225,elevation:45}}setSunParams(e){this.sunParams=e}draw(e,t,n,r){let i=e.roads&&(e.roads.main.length>0||e.roads.major.length>0||e.roads.minor.length>0),a=e.seaPolygon.length>0||e.coastline.length>0||e.riverPolygon.length>0||e.parks.length>0;if(!i&&!a&&t.length===0)return;let o=this.scheme,s=this.controller.zoom;if(this.canvas.clearCanvas(),this.canvas.setFillStyle(o.bgColour),this.canvas.drawRectangle(0,0,this.canvas.width,this.canvas.height),e.seaPolygon.length>0){let t=this.toScreen(e.seaPolygon);this.canvas.setFillStyle(o.seaColour),this.canvas.setStrokeStyle(o.seaColour),this.canvas.setLineWidth(.1),this.canvas.drawPolygon(t)}if(e.coastline.length>0){let t=this.toScreen(e.coastline);this.canvas.setStrokeStyle(o.bgColour),this.canvas.setLineWidth(30*s),this.canvas.drawPolyline(t)}if(o.grassColour&&e.parks.length>0){this.canvas.setFillStyle(o.grassColour),this.canvas.setLineWidth(1);for(let t of e.parks)t.length>=3&&this.canvas.drawPolygon(this.toScreen(t))}e.riverPolygon.length>0&&(this.canvas.setFillStyle(o.seaColour),this.canvas.setStrokeStyle(o.seaColour),this.canvas.setLineWidth(1),this.canvas.drawPolygon(this.toScreen(e.riverPolygon))),this.drawRoadOutlines(e,s),this.drawRoadInlines(e,s),s>=4&&this.drawRoadMarkings(e,s),this.drawBuildings(t,s,n,r),o.frameColour&&this.drawFrame()}drawRoadOutlines(e,t){let n=this.scheme.outlineSize??1;if(this.scheme.minorRoadOutline){this.canvas.setStrokeStyle(this.scheme.minorRoadOutline),this.canvas.setLineWidth((n+(this.scheme.minorWidth??2))*t);for(let t of e.roads.minor)this.canvas.drawPolyline(this.toScreen(t))}if(this.scheme.majorRoadOutline){this.canvas.setStrokeStyle(this.scheme.majorRoadOutline),this.canvas.setLineWidth((n+(this.scheme.majorWidth??4))*t);for(let t of e.roads.major)this.canvas.drawPolyline(this.toScreen(t))}if(this.scheme.mainRoadOutline){this.canvas.setStrokeStyle(this.scheme.mainRoadOutline),this.canvas.setLineWidth((n+(this.scheme.mainWidth??5))*t);for(let t of e.roads.main)this.canvas.drawPolyline(this.toScreen(t));for(let t of e.coastlineRoads)this.canvas.drawPolyline(this.toScreen(t))}this.scheme.majorRoadOutline&&e.secondaryRiver.length>0&&(this.canvas.setStrokeStyle(this.scheme.majorRoadOutline),this.canvas.setLineWidth((n+(this.scheme.majorWidth??4))*t),this.canvas.drawPolyline(this.toScreen(e.secondaryRiver)))}drawRoadInlines(e,t){if(this.scheme.minorRoadColour){this.canvas.setStrokeStyle(this.scheme.minorRoadColour),this.canvas.setLineWidth((this.scheme.minorWidth??2)*t);for(let t of e.roads.minor)this.canvas.drawPolyline(this.toScreen(t))}if(this.scheme.majorRoadColour){this.canvas.setStrokeStyle(this.scheme.majorRoadColour),this.canvas.setLineWidth((this.scheme.majorWidth??4)*t);for(let t of e.roads.major)this.canvas.drawPolyline(this.toScreen(t))}if(this.scheme.mainRoadColour){this.canvas.setStrokeStyle(this.scheme.mainRoadColour),this.canvas.setLineWidth((this.scheme.mainWidth??5)*t);for(let t of e.roads.main)this.canvas.drawPolyline(this.toScreen(t));for(let t of e.coastlineRoads)this.canvas.drawPolyline(this.toScreen(t))}this.scheme.majorRoadColour&&e.secondaryRiver.length>0&&(this.canvas.setStrokeStyle(this.scheme.majorRoadColour),this.canvas.setLineWidth((this.scheme.majorWidth??4)*t),this.canvas.drawPolyline(this.toScreen(e.secondaryRiver)))}drawRoadMarkings(e,t){let n=Math.max(4,8*t);if(e.roads.main.length>0){this.canvas.setStrokeStyle(`#ccaa00`),this.canvas.setLineWidth(2*t),this.canvas.setLineDash([n,n*.5]);for(let t of e.roads.main)this.canvas.drawPolyline(this.toScreen(t))}if(e.roads.major.length>0){this.canvas.setStrokeStyle(`rgba(255,255,255,0.6)`),this.canvas.setLineWidth(1.5*t),this.canvas.setLineDash([n*.6,n*.4]);for(let t of e.roads.major)this.canvas.drawPolyline(this.toScreen(t))}if(e.coastlineRoads.length>0){this.canvas.setStrokeStyle(`#ccaa00`),this.canvas.setLineWidth(2*t),this.canvas.setLineDash([n,n*.5]);for(let t of e.coastlineRoads)this.canvas.drawPolyline(this.toScreen(t))}this.canvas.resetLineDash()}drawBuildings(t,n,r,i){let a=this.scheme;if(this.sunParams.elevation>0)for(let e of t){let t=this.toScreen(e.footprint);this.drawBuildingShadow(t,e.height,n)}for(let e of t){let t=this.toScreen(e.footprint);n>=2.5&&a.buildingSideColour&&this.drawBuildingSides(t,e.height,n)}this.canvas.setLineWidth(1);let o=a.buildingColour??a.bgColour,s=o.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i),c=s?parseInt(s[1],16):128,l=s?parseInt(s[2],16):128,u=s?parseInt(s[3],16):128,d=e.relativeLuminance(c,l,u),f=d>.35?`#000000`:`#ffffff`,p=d>.35?`rgba(0,0,0,0.7)`:`rgba(255,255,255,0.8)`;for(let n of t){let t=this.toScreen(n.footprint),s=n.id===i,c=n.id===r,l=s?e.highlightColor(o,.4):c?e.highlightColor(o,.22):o;this.canvas.setFillStyle(l),this.canvas.drawPolygon(t),a.buildingStroke&&(this.canvas.setStrokeStyle(a.buildingStroke),this.canvas.setLineWidth(1),this.canvas.drawPolygon(t,!1,!0)),s?(this.canvas.setStrokeStyle(f),this.canvas.setLineWidth(2.5),this.canvas.drawPolygon(t,!1,!0)):c&&(this.canvas.setStrokeStyle(p),this.canvas.setLineWidth(2),this.canvas.drawPolygon(t,!1,!0))}}static relativeLuminance(e,t,n){let r=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4};return .2126*r(e)+.7152*r(t)+.0722*r(n)}static highlightColor(t,n){let r=t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);if(!r)return t;let i=parseInt(r[1],16),a=parseInt(r[2],16),o=parseInt(r[3],16);return e.relativeLuminance(i,a,o)>.35?`rgb(${Math.round(i*(1-n))},${Math.round(a*(1-n))},${Math.round(o*(1-n))})`:`rgb(${Math.round(i+(255-i)*n)},${Math.round(a+(255-a)*n)},${Math.round(o+(255-o)*n)})`}drawBuildingSides(e,t,n){if(e.length<3)return;let r=this.sunParams.angle*Math.PI/180,i=Math.sin(r),a=-Math.cos(r),o=1e3/n,s=t*.3,c=o/(o-s),l=e.map(e=>{let t=s*c;return new B(e.x+i*t,e.y+a*t)}),u=[];for(let t=0;t<e.length;t++){let n=(t+1)%e.length,r=[e[t],e[n],l[n],l[t]],i=(e[t].x+e[n].x)/2,a=(e[t].y+e[n].y)/2,o=Math.sqrt(i*i+a*a);u.push({avgDist:o,vertices:r})}u.sort((e,t)=>t.avgDist-e.avgDist);let d=this.scheme.buildingSideColour??this.scheme.buildingColour;if(d){this.canvas.setFillStyle(d);for(let e of u)this.canvas.beginPath(),this.canvas.moveTo(e.vertices[0]),this.canvas.lineTo(e.vertices[1]),this.canvas.lineTo(e.vertices[2]),this.canvas.lineTo(e.vertices[3]),this.canvas.closePath(),this.canvas.fill()}}drawBuildingShadow(t,n,r){if(t.length<3)return;let{angle:i,elevation:a}=this.sunParams,o=1-a/90,s=n*.5*o*Math.min(r,3),c=i*Math.PI/180,l=-Math.sin(c),u=Math.cos(c),d=t.map(e=>new B(e.x+l*s,e.y+u*s)),f=e.convexHull([...t,...d]);if(!(f.length<3)){this.canvas.setFillStyle(`rgba(0, 0, 0, 0.15)`),this.canvas.beginPath(),this.canvas.moveTo(f[0]);for(let e=1;e<f.length;e++)this.canvas.lineTo(f[e]);this.canvas.closePath(),this.canvas.fill()}}static convexHull(e){if(e.length<3)return e;let t=[...e].sort((e,t)=>e.x===t.x?e.y-t.y:e.x-t.x),n=(e,t,n)=>(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x),r=[];for(let e of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],e)<=0;)r.pop();r.push(e)}let i=[];for(let e=t.length-1;e>=0;e--){let r=t[e];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],r)<=0;)i.pop();i.push(r)}return i.pop(),r.pop(),r.concat(i)}drawFrame(){let e=this.scheme;this.canvas.setStrokeStyle(e.frameColour??`#000`),this.canvas.setLineWidth(10),this.canvas.ctx.strokeRect(10/2,10/2,this.canvas.width-10,this.canvas.height-10),e.frameTextColour&&e.frameColour&&this.canvas.drawText(`City Map`,new B(20,20),{color:e.frameTextColour,font:`14px sans-serif`})}toScreen(e){return e.map(e=>this.controller.worldToScreen(e))}getColourScheme(){return this.scheme}};R();var yt=.96,bt=100,xt=5;function St(e){let{controller:t,onZoomChange:n,onPanChange:r}=e,i=(0,U.useRef)(null),[a,o]=(0,U.useState)(!1),[s,c]=(0,U.useState)(!1),[l,u]=(0,U.useState)(`grab`),d=(0,U.useRef)(null),f=(0,U.useRef)(-100),p=(0,U.useCallback)(e=>lt.clamp(e,k.min,k.max),[]),m=(0,U.useCallback)(e=>{if(!t)return;e.preventDefault();let a=i.current;if(!a)return;f.current=Date.now(),c(!0);let o=a.getBoundingClientRect(),s=new B(e.clientX-o.left,e.clientY-o.top),l=e.deltaY,u=t.zoom,d=p(l>0?u*yt:u/yt);t.zoomAtPoint(s,d),n?.(t.zoom),r?.()},[t,p,n,r]),h=(0,U.useRef)(!1);(0,U.useEffect)(()=>{h.current=a},[a]);let g=(0,U.useCallback)(e=>{if(!t||e.button!==0)return;let n=i.current?.getBoundingClientRect();n&&(d.current=new B(e.clientX-n.left,e.clientY-n.top),o(!0),u(`grabbing`))},[t]),_=(0,U.useCallback)(e=>{if(!t||!h.current||!d.current)return;let n=i.current?.getBoundingClientRect();if(!n)return;let a=new B(e.clientX-n.left,e.clientY-n.top),o=a.clone().sub(d.current);o.length()<xt||(t.pan(o.negate()),d.current=a,r?.())},[t,r]),v=(0,U.useCallback)(()=>{o(!1),d.current=null,u(`grab`)},[]),y=(0,U.useCallback)(()=>{h.current&&(o(!1),d.current=null,u(`grab`))},[]),b=(0,U.useCallback)(()=>{t&&(t.reset(),n?.(t.zoom),r?.())},[t,n,r]),x=(0,U.useCallback)(()=>{if(!t)return;let e=p(t.zoom/yt),i=new B(t.width/2,t.height/2);t.zoomAtPoint(i,e),n?.(t.zoom),r?.()},[t,p,n,r]),S=(0,U.useCallback)(()=>{if(!t)return;let e=p(t.zoom*yt),i=new B(t.width/2,t.height/2);t.zoomAtPoint(i,e),n?.(t.zoom),r?.()},[t,p,n,r]);return(0,U.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{c(!1)},bt);return()=>clearTimeout(e)},[s]),(0,U.useEffect)(()=>{let e=i.current;if(e)return e.addEventListener(`wheel`,m,{passive:!1}),e.addEventListener(`mousedown`,g),window.addEventListener(`mousemove`,_),window.addEventListener(`mouseup`,v),e.addEventListener(`mouseleave`,y),()=>{e.removeEventListener(`wheel`,m),e.removeEventListener(`mousedown`,g),window.removeEventListener(`mousemove`,_),window.removeEventListener(`mouseup`,v),e.removeEventListener(`mouseleave`,y)}},[m,g,_,v,y]),{containerRef:i,isDragging:a,isScrolling:s,cursor:l,resetView:b,zoomIn:x,zoomOut:S}}function Ct(e,t){let n=(0,U.useRef)(null),r=(0,U.useRef)(null),i=(0,U.useRef)(e);(0,U.useEffect)(()=>{i.current=e});let a=(0,U.useCallback)(e=>{if(r.current&&=(r.current.disconnect(),null),n.current=e,!e)return;let t=new ResizeObserver(e=>{let t=e[0];if(!t)return;let{width:n,height:r}=t.contentRect;n>0&&r>0&&i.current(n,r)});t.observe(e),r.current=t},[]);return(0,U.useEffect)(()=>()=>{r.current?.disconnect()},[]),(0,U.useCallback)(e=>{a(e),typeof t==`function`&&t(e)},[a,t])}R();var wt=({onBuildingClick:e,onBuildingHover:t})=>{let n=(0,U.useRef)(null),r=(0,U.useRef)(null),i=(0,U.useRef)(null),a=(0,U.useRef)(null),[o,s]=(0,U.useState)(null),c=w(e=>e.mapData),l=w(e=>e.buildings),u=w(e=>e.colorSchemeId),d=w(e=>e.sunAngle),f=w(e=>e.sunElevation),p=D(e=>e.hoveredBuildingId),m=D(e=>e.selectedBuildingId),h=(0,U.useCallback)(()=>{!c||!i.current||i.current.draw(c,l,p,m)},[c,l,p,m]);(0,U.useEffect)(()=>{let e=a.current;if(!e)return;let t=e.parentElement;if(!t)return;let o=t.getBoundingClientRect(),p=o.width,m=o.height;if(p===0||m===0)return;let h=window.devicePixelRatio||1;e.width=p*h,e.height=m*h,e.style.width=`${p}px`,e.style.height=`${m}px`;let g=new gt(p,m),_=new _t(e,p,m),v=new vt(g,_,T[u]??T.default,{angle:d,elevation:f});return n.current=g,s(g),r.current=_,i.current=v,c&&v.draw(c,l),()=>{n.current=null,r.current=null,i.current=null}},[]);let g=Ct((0,U.useCallback)((e,t)=>{let i=a.current;if(!i)return;let o=window.devicePixelRatio||1;i.width=e*o,i.height=t*o,i.style.width=`${e}px`,i.style.height=`${t}px`,n.current&&r.current&&(n.current.updateDimensions(e,t),r.current.updateContainerSize(e,t),h())},[h])),{containerRef:_,cursor:v,isDragging:y,isScrolling:b}=St({controller:o,onZoomChange:()=>h(),onPanChange:()=>h()}),x=(0,U.useCallback)(e=>{_.current=e,g(e)},[_,g]);(0,U.useEffect)(()=>{if(!n.current||!r.current||!c)return;let e=T[u]??T.default,t=new vt(n.current,r.current,e,{angle:d,elevation:f});i.current=t,t.draw(c,l,p,m)},[u,c,l,d,f,p,m]),(0,U.useEffect)(()=>{h()},[h]);let S=(0,U.useCallback)(e=>{if(!t||!n.current||!l.length)return;let r=a.current;if(!r)return;let i=r.getBoundingClientRect(),o=e.clientX-i.left,s=e.clientY-i.top,c=n.current.screenToWorld(new B(o,s));for(let e of l)if(oe.insidePolygon(c,e.footprint)){t(e.id);return}t(null)},[l,t]),C=(0,U.useCallback)(t=>{if(!e||!n.current||!l.length)return;let r=a.current;if(!r)return;let i=r.getBoundingClientRect(),o=t.clientX-i.left,s=t.clientY-i.top,c=n.current.screenToWorld(new B(o,s));for(let t of l)if(oe.insidePolygon(c,t.footprint)){e(t.id);return}},[l,e]);return(0,W.jsx)(`div`,{ref:x,style:{width:`100%`,height:`100%`,overflow:`hidden`,cursor:y?`grabbing`:b?`default`:v},onMouseMove:S,onClick:C,children:(0,W.jsx)(`canvas`,{ref:a,style:{display:`block`,width:`100%`,height:`100%`,willChange:`transform`},"data-testid":`map-canvas-2d`})})};R();var Tt=parseInt(`184`.replace(/\D+/g,``));R();var Et=Object.defineProperty,Dt=(e,t,n)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ot=(e,t,n)=>(Dt(e,typeof t==`symbol`?t:t+``,n),n),kt=(()=>{let e={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},up:{value:new F(0,1,0)}},vertexShader:`
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `,fragmentShader:`
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${Tt>=154?`colorspace_fragment`:`encodings_fragment`}>

      }
    `},t=new N({name:`SkyShader`,fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:$e.clone(e.uniforms),side:1,depthWrite:!1});class n extends L{constructor(){super(new ct(1,1,1),t)}}return Ot(n,`SkyShader`,e),Ot(n,`material`,t),n})(),At=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.Stats=r()})(e,function(){var e=function(){function t(e){return i.appendChild(e.dom),e}function n(e){for(var t=0;t<i.children.length;t++)i.children[t].style.display=t===e?`block`:`none`;r=e}var r=0,i=document.createElement(`div`);i.style.cssText=`position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000`,i.addEventListener(`click`,function(e){e.preventDefault(),n(++r%i.children.length)},!1);var a=(performance||Date).now(),o=a,s=0,c=t(new e.Panel(`FPS`,`#0ff`,`#002`)),l=t(new e.Panel(`MS`,`#0f0`,`#020`));if(self.performance&&self.performance.memory)var u=t(new e.Panel(`MB`,`#f08`,`#201`));return n(0),{REVISION:16,dom:i,addPanel:t,showPanel:n,begin:function(){a=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(l.update(e-a,200),e>o+1e3&&(c.update(1e3*s/(e-o),100),o=e,s=0,u)){var t=performance.memory;u.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:i,setMode:n}};return e.Panel=function(e,t,n){var r=1/0,i=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,c=48*o,l=3*o,u=2*o,d=3*o,f=15*o,p=74*o,m=30*o,h=document.createElement(`canvas`);h.width=s,h.height=c,h.style.cssText=`width:80px;height:48px`;var g=h.getContext(`2d`);return g.font=`bold `+9*o+`px Helvetica,Arial,sans-serif`,g.textBaseline=`top`,g.fillStyle=n,g.fillRect(0,0,s,c),g.fillStyle=t,g.fillText(e,l,u),g.fillRect(d,f,p,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d,f,p,m),{dom:h,update:function(c,_){r=Math.min(r,c),i=Math.max(i,c),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,s,f),g.fillStyle=t,g.fillText(a(c)+` `+e+` (`+a(r)+`-`+a(i)+`)`,l,u),g.drawImage(h,d+o,f,p-o,m,d,f,p-o,m),g.fillRect(d+p-o,f,o,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d+p-o,f,o,a((1-c/_)*m))}}},e})}));function jt(e,t){typeof e==`function`?e(t):e!=null&&(e.current=t)}function Mt(e,t=[],n){let[r,i]=U.useState();return U.useLayoutEffect(()=>{let t=e();return i(t),jt(n,t),()=>jt(n,null)},t),r}var Nt=e(At());function Pt({showPanel:e=0,className:t,parent:n}){let r=Mt(()=>new Nt.default,[]);return U.useEffect(()=>{if(r){let a=n&&n.current||document.body;r.showPanel(e),a?.appendChild(r.dom);let s=(t??``).split(` `).filter(e=>e);s.length&&r.dom.classList.add(...s);let c=i(()=>r.begin()),l=o(()=>r.end());return()=>{s.length&&r.dom.classList.remove(...s),a?.removeChild(r.dom),c(),l()}}},[n,r,t,e]),null}R();function Ft(e,t,n=new F){let r=Math.PI*(e-.5),i=2*Math.PI*(t-.5);return n.x=Math.cos(i),n.y=Math.sin(r),n.z=Math.sin(i),n}var It=U.forwardRef(({inclination:e=.6,azimuth:t=.1,distance:n=1e3,mieCoefficient:r=.005,mieDirectionalG:i=.8,rayleigh:a=.5,turbidity:o=10,sunPosition:s=Ft(e,t),...l},u)=>{let d=U.useMemo(()=>new F().setScalar(n),[n]),[f]=U.useState(()=>new kt);return U.createElement(`primitive`,c({object:f,ref:u,"material-uniforms-mieCoefficient-value":r,"material-uniforms-mieDirectionalG-value":i,"material-uniforms-rayleigh-value":a,"material-uniforms-sunPosition-value":s,"material-uniforms-turbidity-value":o,scale:d},l))});R();var Lt=(()=>{let e=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),n=new Ze;return n.setAttribute(`position`,new nt(e,3)),n.setAttribute(`uv`,new nt(t,2)),n})(),G=class e{static get fullscreenGeometry(){return Lt}constructor(e=`Pass`,t=new Ve,n=new pt){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen===null?null:this.screen.material}set fullscreenMaterial(t){let n=this.screen;n===null?(n=new L(e.fullscreenGeometry,t),n.frustumCulled=!1,this.scene===null&&(this.scene=new Ve),this.scene.add(n),this.screen=n):n.material=t}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=V){}render(e,t,n,r,i){throw Error(`Render method not implemented!`)}setSize(e,t){}initialize(e,t,n){}dispose(){for(let t of Object.keys(this)){let n=this[t];(n instanceof I||n instanceof st||n instanceof be||n instanceof e)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Rt=class extends G{constructor(){super(`ClearMaskPass`,null,null),this.needsSwap=!1}render(e,t,n,r,i){let a=e.state.buffers.stencil;a.setLocked(!1),a.setTest(!1)}},zt=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Bt=`varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,Vt=class extends N{constructor(){super({name:`CopyMaterial`,defines:{COLOR_SPACE_CONVERSION:`1`,DEPTH_PACKING:`0`,COLOR_WRITE:`1`},uniforms:{inputBuffer:new z(null),depthBuffer:new z(null),channelWeights:new z(null),opacity:new z(1)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:zt,vertexShader:Bt}),this.depthFunc=1}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(e){let t=e!==null;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){let t=e!==null;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=e}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(e){this.colorSpaceConversion!==e&&(e?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(e){e===null?delete this.defines.USE_WEIGHTS:(this.defines.USE_WEIGHTS=`1`,this.uniforms.channelWeights.value=e),this.needsUpdate=!0}setInputBuffer(e){this.uniforms.inputBuffer.value=e}getOpacity(e){return this.uniforms.opacity.value}setOpacity(e){this.uniforms.opacity.value=e}},Ht=class extends G{constructor(e,t=!0){super(`CopyPass`),this.fullscreenMaterial=new Vt,this.needsSwap=!1,this.renderTarget=e,e===void 0&&(this.renderTarget=new I(1,1,{minFilter:j,magFilter:j,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name=`CopyPass.Target`),this.autoResize=t}get resize(){return this.autoResize}set resize(e){this.autoResize=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(e){this.autoResize=e}render(e,t,n,r,i){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){this.autoResize&&this.renderTarget.setSize(e,t)}initialize(e,t,n){n!==void 0&&(this.renderTarget.texture.type=n,n===1009?e!==null&&e.outputColorSpace===`srgb`&&(this.renderTarget.texture.colorSpace=M):this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`)}},Ut=new H,Wt=class extends G{constructor(e=!0,t=!0,n=!1){super(`ClearPass`,null,null),this.needsSwap=!1,this.color=e,this.depth=t,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(e,t,n){this.color=e,this.depth=t,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(e){this.overrideClearColor=e}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(e){this.overrideClearAlpha=e}render(e,t,n,r,i){let a=this.overrideClearColor,o=this.overrideClearAlpha,s=e.getClearAlpha(),c=a!==null,l=o>=0;c?(e.getClearColor(Ut),e.setClearColor(a,l?o:s)):l&&e.setClearAlpha(o),e.setRenderTarget(this.renderToScreen?null:t),e.clear(this.color,this.depth,this.stencil),c?e.setClearColor(Ut,s):l&&e.setClearAlpha(s)}},Gt=class extends G{constructor(e,t){super(`MaskPass`,e,t),this.needsSwap=!1,this.clearPass=new Wt(!1,!1,!0),this.inverse=!1}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get inverted(){return this.inverse}set inverted(e){this.inverse=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(e){this.inverted=e}render(e,t,n,r,i){let a=e.getContext(),o=e.state.buffers,s=this.scene,c=this.camera,l=this.clearPass,u=+!this.inverted,d=1-u;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.stencil.setFunc(a.ALWAYS,u,4294967295),o.stencil.setClear(d),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(e,null):(l.render(e,t),l.render(e,n))),this.renderToScreen?(e.setRenderTarget(null),e.render(s,c)):(e.setRenderTarget(t),e.render(s,c),e.setRenderTarget(n),e.render(s,c)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(a.EQUAL,1,4294967295),o.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.stencil.setLocked(!0)}},Kt=1/1e3,qt=1e3,Jt=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(e){typeof document<`u`&&document.hidden!==void 0&&(e?document.addEventListener(`visibilitychange`,this):document.removeEventListener(`visibilitychange`,this),this._autoReset=e)}get delta(){return this._delta*Kt}get fixedDelta(){return this._fixedDelta*Kt}set fixedDelta(e){this._fixedDelta=e*qt}get elapsed(){return this._elapsed*Kt}update(e){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(e===void 0?performance.now():e)-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(e){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Yt=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:n=!1,multisampling:r=0,frameBufferType:i}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,n,i,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Ht,this.depthRenderTarget=null,this.passes=[],this.timer=new Jt,this.autoRenderToScreen=!0,this.setRenderer(e)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(e){this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){let t=e.getSize(new B),n=e.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===1009&&e.outputColorSpace===`srgb`&&(this.inputBuffer.texture.colorSpace=M,this.outputBuffer.texture.colorSpace=M,this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(t.width,t.height);for(let t of this.passes)t.initialize(e,n,r)}}replaceRenderer(e,t=!0){let n=this.renderer,r=n.domElement.parentNode;return this.setRenderer(e),t&&r!==null&&(r.removeChild(n.domElement),r.appendChild(e.domElement)),n}createDepthTexture(){let e=new Te;e.name=`EffectComposer.InputDepth`,this.inputBuffer.stencilBuffer?(e.format=Re,e.type=ot):e.type=Ne;let t=e.clone();t.name=`EffectComposer.OutputDepth`;let n=e.clone();n.name=`EffectComposer.StableDepth`,this.inputBuffer.depthTexture=e,this.outputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:r,height:i}=this.inputBuffer;this.depthRenderTarget=new I(r,i,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:n})}blitDepthBuffer(e){let t=this.renderer,n=this.depthRenderTarget,r=t.properties,i=t.getContext();t.setRenderTarget(n);let a=r.get(e).__webglFramebuffer,o=r.get(n).__webglFramebuffer,s=e.stencilBuffer?i.DEPTH_BUFFER_BIT|i.STENCIL_BUFFER_BIT:i.DEPTH_BUFFER_BIT;i.bindFramebuffer(i.READ_FRAMEBUFFER,a),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,o),i.blitFramebuffer(0,0,e.width,e.height,0,0,n.width,n.height,s,i.NEAREST),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),t.setRenderTarget(null)}deleteDepthTexture(){let e=this.stableDepthTexture;for(let t of this.passes)t.getDepthTexture()===e&&t.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(e,t,n,r){let i=this.renderer,a=i===null?new B:i.getDrawingBufferSize(new B),o=new I(a.width,a.height,{minFilter:j,magFilter:j,samples:r,stencilBuffer:t,depthBuffer:e,type:n});return n===1009&&i!==null&&i.outputColorSpace===`srgb`&&(o.texture.colorSpace=M),o.texture.name=`EffectComposer.Buffer`,o.texture.generateMipmaps=!1,o}setMainScene(e){for(let t of this.passes)t.mainScene=e}setMainCamera(e){for(let t of this.passes)t.mainCamera=e}addPass(e,t){let n=this.passes,r=this.renderer,i=r.getDrawingBufferSize(new B),a=r.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(e.renderer=r,e.setSize(i.width,i.height),e.initialize(r,a,o),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),t===void 0?n.push(e):n.splice(t,0,e),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let e of n)e.setDepthTexture(this.stableDepthTexture)}else e.setDepthTexture(this.stableDepthTexture)}removePass(e){let t=this.passes,n=t.indexOf(e);if(n!==-1&&t.splice(n,1).length>0){let r=this.stableDepthTexture;r!==null&&(t.reduce((e,t)=>e||t.needsDepthTexture,!1)||(e.getDepthTexture()===r&&e.setDepthTexture(null),this.deleteDepthTexture())),this.autoRenderToScreen&&n===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){let e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){let t=this.renderer,n=this.copyPass,r=this.inputBuffer,i=this.outputBuffer,a,o=!1;e===void 0&&(this.timer.update(),e=this.timer.getDelta());for(let s of this.passes)if(s.enabled){if(s.render(t,r,i,e,o),s.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(r),s.needsSwap){if(o){n.renderToScreen=s.renderToScreen;let a=t.getContext(),c=t.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),n.render(t,r,i,e,o),c.setFunc(a.EQUAL,1,4294967295)}a=r,r=i,i=a}s instanceof Gt?o=!0:s instanceof Rt&&(o=!1)}}setSize(e,t,n){let r=this.renderer,i=r.getSize(new B);(e===void 0||t===void 0)&&(e=i.width,t=i.height),(i.width!==e||i.height!==t)&&r.setSize(e,t,n);let a=r.getDrawingBufferSize(new B);this.inputBuffer.setSize(a.width,a.height),this.outputBuffer.setSize(a.width,a.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(a.width,a.height);for(let e of this.passes)e.setSize(a.width,a.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let e of this.passes)e.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],G.fullscreenGeometry.dispose()}},K={NONE:0,DEPTH:1,CONVOLUTION:2},q={FRAGMENT_HEAD:`FRAGMENT_HEAD`,FRAGMENT_MAIN_UV:`FRAGMENT_MAIN_UV`,FRAGMENT_MAIN_IMAGE:`FRAGMENT_MAIN_IMAGE`,VERTEX_HEAD:`VERTEX_HEAD`,VERTEX_MAIN_SUPPORT:`VERTEX_MAIN_SUPPORT`},Xt=class{constructor(){this.shaderParts=new Map([[q.FRAGMENT_HEAD,null],[q.FRAGMENT_MAIN_UV,null],[q.FRAGMENT_MAIN_IMAGE,null],[q.VERTEX_HEAD,null],[q.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=K.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=at}},Zt=!1,Qt=class{constructor(e=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(e),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case 2:t=this.materialsFlatShadedDoubleSide;break;case 1:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case 2:t=this.materialsDoubleSide;break;case 1:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(e){if(!(e instanceof N))return e.clone();let t=e.uniforms,n=new Map;for(let e in t){let r=t[e].value;r.isRenderTargetTexture&&(t[e].value=null,n.set(e,r))}let r=e.clone();for(let e of n)t[e[0]].value=e[1],r.uniforms[e[0]].value=e[1];return r}setMaterial(e){if(this.disposeMaterials(),this.material=e,e!==null){let t=this.materials=[this.cloneMaterial(e),this.cloneMaterial(e),this.cloneMaterial(e)];for(let n of t)n.uniforms=Object.assign({},e.uniforms),n.side=0;t[2].skinning=!0,this.materialsBackSide=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.side=1,n}),this.materialsDoubleSide=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.side=2,n}),this.materialsFlatShaded=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.flatShading=!0,n.side=1,n}),this.materialsFlatShadedDoubleSide=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.flatShading=!0,n.side=2,n})}}render(e,t,n){let r=e.shadowMap.enabled;if(e.shadowMap.enabled=!1,Zt){let r=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),e.render(t,n);for(let e of r)e[0].material=e[1];this.meshCount!==r.size&&r.clear()}else{let r=t.overrideMaterial;t.overrideMaterial=this.material,e.render(t,n),t.overrideMaterial=r}e.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){let e=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let t of e)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Zt}static set workaroundEnabled(e){Zt=e}},J=-1,Y=class extends xe{constructor(e=null,t=J,n=J,r=1){super(),e!==null&&this.addEventListener(`change`,()=>e.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new B(1,1),this.preferredSize=new B(t,n),this.target=this.preferredSize,this.s=r,this.effectiveSize=new B,this.addEventListener(`change`,()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let e=this.baseSize,t=this.preferredSize,n=this.effectiveSize,r=this.scale;t.width===J?t.height===J?n.width=Math.round(e.width*r):n.width=Math.round(t.height*(e.width/Math.max(e.height,1))):n.width=t.width,t.height===J?t.width===J?n.height=Math.round(e.height*r):n.height=Math.round(t.width/Math.max(e.width/Math.max(e.height,1),1)):n.height=t.height}get width(){return this.effectiveSize.width}set width(e){this.preferredWidth=e}get height(){return this.effectiveSize.height}set height(e){this.preferredHeight=e}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(e){this.s!==e&&(this.s=e,this.preferredSize.setScalar(J),this.dispatchEvent({type:`change`}))}getScale(){return this.scale}setScale(e){this.scale=e}get baseWidth(){return this.baseSize.width}set baseWidth(e){this.baseSize.width!==e&&(this.baseSize.width=e,this.dispatchEvent({type:`change`}))}getBaseWidth(){return this.baseWidth}setBaseWidth(e){this.baseWidth=e}get baseHeight(){return this.baseSize.height}set baseHeight(e){this.baseSize.height!==e&&(this.baseSize.height=e,this.dispatchEvent({type:`change`}))}getBaseHeight(){return this.baseHeight}setBaseHeight(e){this.baseHeight=e}setBaseSize(e,t){(this.baseSize.width!==e||this.baseSize.height!==t)&&(this.baseSize.set(e,t),this.dispatchEvent({type:`change`}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(e){this.preferredSize.width!==e&&(this.preferredSize.width=e,this.dispatchEvent({type:`change`}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(e){this.preferredWidth=e}get preferredHeight(){return this.preferredSize.height}set preferredHeight(e){this.preferredSize.height!==e&&(this.preferredSize.height=e,this.dispatchEvent({type:`change`}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(e){this.preferredHeight=e}setPreferredSize(e,t){(this.preferredSize.width!==e||this.preferredSize.height!==t)&&(this.preferredSize.set(e,t),this.dispatchEvent({type:`change`}))}copy(e){this.s=e.scale,this.baseSize.set(e.baseWidth,e.baseHeight),this.preferredSize.set(e.preferredWidth,e.preferredHeight),this.dispatchEvent({type:`change`})}static get AUTO_SIZE(){return J}},X={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},$t=new Map([[X.ADD,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.ALPHA,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}`],[X.AVERAGE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.COLOR,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.COLOR_BURN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.COLOR_DODGE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.DARKEN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.DIFFERENCE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.DIVIDE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.DST,null],[X.EXCLUSION,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.HARD_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.HARD_MIX,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.HUE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.INVERT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.INVERT_RGB,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.LIGHTEN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.LINEAR_BURN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.LINEAR_DODGE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.LINEAR_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.LUMINOSITY,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.MULTIPLY,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.NEGATION,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.NORMAL,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}`],[X.OVERLAY,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.PIN_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.REFLECT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.SATURATION,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.SCREEN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.SOFT_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.SRC,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}`],[X.SUBTRACT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[X.VIVID_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`]]),en=class extends xe{constructor(e,t=1){super(),this._blendFunction=e,this.opacity=new z(t)}getOpacity(){return this.opacity.value}setOpacity(e){this.opacity.value=e}get blendFunction(){return this._blendFunction}set blendFunction(e){this._blendFunction=e,this.dispatchEvent({type:`change`})}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e}getShaderCode(){return $t.get(this.blendFunction)}},tn=class extends xe{constructor(e,t,{attributes:n=K.NONE,blendFunction:r=X.NORMAL,defines:i=new Map,uniforms:a=new Map,extensions:o=null,vertexShader:s=null}={}){super(),this.name=e,this.renderer=null,this.attributes=n,this.fragmentShader=t,this.vertexShader=s,this.defines=i,this.uniforms=a,this.extensions=o,this.blendMode=new en(r),this.blendMode.addEventListener(`change`,e=>this.setChanged()),this._inputColorSpace=at,this._outputColorSpace=``}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(e){this._inputColorSpace=e,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e,this.setChanged()}set mainScene(e){}set mainCamera(e){}getName(){return this.name}setRenderer(e){this.renderer=e}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(e){this.attributes=e,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(e){this.fragmentShader=e,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(e){this.vertexShader=e,this.setChanged()}setChanged(){this.dispatchEvent({type:`change`})}setDepthTexture(e,t=V){}update(e,t,n){}setSize(e,t){}initialize(e,t,n){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof I||t instanceof st||t instanceof be||t instanceof G)&&this[e].dispose()}}},nn={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},rn=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,an=`uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}`,on=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],sn=class extends N{constructor(e=new tt){super({name:`KawaseBlurMaterial`,uniforms:{inputBuffer:new z(null),texelSize:new z(new tt),scale:new z(1),kernel:new z(0)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:rn,vertexShader:an}),this.setTexelSize(e.x,e.y),this.kernelSize=nn.MEDIUM}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.inputBuffer=e}get kernelSequence(){return on[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(e){this.uniforms.scale.value=e}getScale(){return this.uniforms.scale.value}setScale(e){this.uniforms.scale.value=e}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(e){this.uniforms.kernel.value=e}setKernel(e){this.kernel=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t,e*.5,t*.5)}setSize(e,t){let n=1/e,r=1/t;this.uniforms.texelSize.value.set(n,r,n*.5,r*.5)}},cn=class extends G{constructor({kernelSize:e=nn.MEDIUM,resolutionScale:t=.5,width:n=Y.AUTO_SIZE,height:r=Y.AUTO_SIZE,resolutionX:i=n,resolutionY:a=r}={}){super(`KawaseBlurPass`),this.renderTargetA=new I(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name=`Blur.Target.A`,this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name=`Blur.Target.B`;let o=this.resolution=new Y(this,i,a,t);o.addEventListener(`change`,e=>this.setSize(o.baseWidth,o.baseHeight)),this._blurMaterial=new sn,this._blurMaterial.kernelSize=e,this.copyMaterial=new Vt}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(e){this._blurMaterial=e}get dithering(){return this.copyMaterial.dithering}set dithering(e){this.copyMaterial.dithering=e}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(e){this.blurMaterial.kernelSize=e}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get scale(){return this.blurMaterial.scale}set scale(e){this.blurMaterial.scale=e}getScale(){return this.blurMaterial.scale}setScale(e){this.blurMaterial.scale=e}getKernelSize(){return this.kernelSize}setKernelSize(e){this.kernelSize=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,n,r,i){let a=this.scene,o=this.camera,s=this.renderTargetA,c=this.renderTargetB,l=this.blurMaterial,u=l.kernelSequence,d=t;this.fullscreenMaterial=l;for(let t=0,n=u.length;t<n;++t){let n=t&1?c:s;l.kernel=u[t],l.inputBuffer=d.texture,e.setRenderTarget(n),e.render(a,o),d=n}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=d.texture,e.setRenderTarget(this.renderToScreen?null:n),e.render(a,o)}setSize(e,t){let n=this.resolution;n.setBaseSize(e,t);let r=n.width,i=n.height;this.renderTargetA.setSize(r,i),this.renderTargetB.setSize(r,i),this.blurMaterial.setSize(e,t)}initialize(e,t,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n===1009?e!==null&&e.outputColorSpace===`srgb`&&(this.renderTargetA.texture.colorSpace=M,this.renderTargetB.texture.colorSpace=M):(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`,this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`))}static get AUTO_SIZE(){return Y.AUTO_SIZE}},ln=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,un=class extends N{constructor(e=!1,t=null){super({name:`LuminanceMaterial`,defines:{THREE_REVISION:`184`.replace(/\D+/g,``)},uniforms:{inputBuffer:new z(null),threshold:new z(0),smoothing:new z(1),range:new z(null)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ln,vertexShader:Bt}),this.colorOutput=e,this.luminanceRange=t}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get threshold(){return this.uniforms.threshold.value}set threshold(e){this.smoothing>0||e>0?this.defines.THRESHOLD=`1`:delete this.defines.THRESHOLD,this.uniforms.threshold.value=e}getThreshold(){return this.threshold}setThreshold(e){this.threshold=e}get smoothing(){return this.uniforms.smoothing.value}set smoothing(e){this.threshold>0||e>0?this.defines.THRESHOLD=`1`:delete this.defines.THRESHOLD,this.uniforms.smoothing.value=e}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(e){this.smoothing=e}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(e){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(e){e?this.defines.COLOR=`1`:delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(e){return this.colorOutput}setColorOutputEnabled(e){this.colorOutput=e}get useRange(){return this.luminanceRange!==null}set useRange(e){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(e){e===null?delete this.defines.RANGE:this.defines.RANGE=`1`,this.uniforms.range.value=e,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(e){this.luminanceRange=e}},dn=class extends G{constructor({renderTarget:e,luminanceRange:t,colorOutput:n,resolutionScale:r=1,width:i=Y.AUTO_SIZE,height:a=Y.AUTO_SIZE,resolutionX:o=i,resolutionY:s=a}={}){super(`LuminancePass`),this.fullscreenMaterial=new un(n,t),this.needsSwap=!1,this.renderTarget=e,this.renderTarget===void 0&&(this.renderTarget=new I(1,1,{depthBuffer:!1}),this.renderTarget.texture.name=`LuminancePass.Target`);let c=this.resolution=new Y(this,o,s,r);c.addEventListener(`change`,e=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(e,t,n,r,i){let a=this.fullscreenMaterial;a.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){let n=this.resolution;n.setBaseSize(e,t),this.renderTarget.setSize(n.width,n.height)}initialize(e,t,n){n!==void 0&&n!==1009&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`)}},fn=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,pn=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}`,mn=class extends N{constructor(){super({name:`DownsamplingMaterial`,uniforms:{inputBuffer:new z(null),texelSize:new z(new B)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:fn,vertexShader:pn})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},hn=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,gn=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}`,_n=class extends N{constructor(){super({name:`UpsamplingMaterial`,uniforms:{inputBuffer:new z(null),supportBuffer:new z(null),texelSize:new z(new B),radius:new z(.85)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hn,vertexShader:gn})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}set supportBuffer(e){this.uniforms.supportBuffer.value=e}get radius(){return this.uniforms.radius.value}set radius(e){this.uniforms.radius.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},vn=class extends G{constructor(){super(`MipmapBlurPass`),this.needsSwap=!1,this.renderTarget=new I(1,1,{depthBuffer:!1}),this.renderTarget.texture.name=`Upsampling.Mipmap0`,this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new mn,this.upsamplingMaterial=new _n,this.resolution=new B}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(e){if(this.levels!==e){let t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<e;++n){let e=t.clone();e.texture.name=`Downsampling.Mipmap`+n,this.downsamplingMipmaps.push(e)}this.upsamplingMipmaps.push(t);for(let n=1,r=e-1;n<r;++n){let e=t.clone();e.texture.name=`Upsampling.Mipmap`+n,this.upsamplingMipmaps.push(e)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(e){this.upsamplingMaterial.radius=e}render(e,t,n,r,i){let{scene:a,camera:o}=this,{downsamplingMaterial:s,upsamplingMaterial:c}=this,{downsamplingMipmaps:l,upsamplingMipmaps:u}=this,d=t;this.fullscreenMaterial=s;for(let t=0,n=l.length;t<n;++t){let n=l[t];s.setSize(d.width,d.height),s.inputBuffer=d.texture,e.setRenderTarget(n),e.render(a,o),d=n}this.fullscreenMaterial=c;for(let t=u.length-1;t>=0;--t){let n=u[t];c.setSize(d.width,d.height),c.inputBuffer=d.texture,c.supportBuffer=l[t].texture,e.setRenderTarget(n),e.render(a,o),d=n}}setSize(e,t){let n=this.resolution;n.set(e,t);let r=n.width,i=n.height;for(let e=0,t=this.downsamplingMipmaps.length;e<t;++e)r=Math.round(r*.5),i=Math.round(i*.5),this.downsamplingMipmaps[e].setSize(r,i),e<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[e].setSize(r,i)}initialize(e,t,n){if(n!==void 0){let t=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let e of t)e.texture.type=n;if(n!==1009)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`,this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`;else if(e!==null&&e.outputColorSpace===`srgb`)for(let e of t)e.texture.colorSpace=M}}dispose(){super.dispose();for(let e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))e.dispose()}},yn=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,bn=class extends tn{constructor({blendFunction:e=X.SCREEN,luminanceThreshold:t=1,luminanceSmoothing:n=.03,mipmapBlur:r=!0,intensity:i=1,radius:a=.85,levels:o=8,kernelSize:s=nn.LARGE,resolutionScale:c=.5,width:l=Y.AUTO_SIZE,height:u=Y.AUTO_SIZE,resolutionX:d=l,resolutionY:f=u}={}){super(`BloomEffect`,yn,{blendFunction:e,uniforms:new Map([[`map`,new z(null)],[`intensity`,new z(i)]])}),this.renderTarget=new I(1,1,{depthBuffer:!1}),this.renderTarget.texture.name=`Bloom.Target`,this.blurPass=new cn({kernelSize:s}),this.luminancePass=new dn({colorOutput:!0}),this.luminanceMaterial.threshold=t,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new vn,this.mipmapBlurPass.enabled=r,this.mipmapBlurPass.radius=a,this.mipmapBlurPass.levels=o,this.uniforms.get(`map`).value=r?this.mipmapBlurPass.texture:this.renderTarget.texture;let p=this.resolution=new Y(this,d,f,c);p.addEventListener(`change`,e=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get dithering(){return this.blurPass.dithering}set dithering(e){this.blurPass.dithering=e}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(e){this.blurPass.kernelSize=e}get distinction(){return console.warn(this.name,`distinction was removed`),1}set distinction(e){console.warn(this.name,`distinction was removed`)}get intensity(){return this.uniforms.get(`intensity`).value}set intensity(e){this.uniforms.get(`intensity`).value=e}getIntensity(){return this.intensity}setIntensity(e){this.intensity=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}update(e,t,n){let r=this.renderTarget,i=this.luminancePass;i.enabled?(i.render(e,t),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,i.renderTarget):this.blurPass.render(e,i.renderTarget,r)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,t):this.blurPass.render(e,t,r)}setSize(e,t){let n=this.resolution;n.setBaseSize(e,t),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(e,t),this.mipmapBlurPass.setSize(e,t)}initialize(e,t,n){this.blurPass.initialize(e,t,n),this.luminancePass.initialize(e,t,n),this.mipmapBlurPass.initialize(e,t,n),n!==void 0&&(this.renderTarget.texture.type=n,e!==null&&e.outputColorSpace===`srgb`&&(this.renderTarget.texture.colorSpace=M))}},xn=`uniform float brightness;uniform float contrast;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=inputColor.rgb+vec3(brightness-0.5);if(contrast>0.0){color/=vec3(1.0-contrast);}else{color*=vec3(1.0+contrast);}outputColor=vec4(color+vec3(0.5),inputColor.a);}`,Sn=class extends tn{constructor({blendFunction:e=X.SRC,brightness:t=0,contrast:n=0}={}){super(`BrightnessContrastEffect`,xn,{blendFunction:e,uniforms:new Map([[`brightness`,new z(t)],[`contrast`,new z(n)]])}),this.inputColorSpace=M}get brightness(){return this.uniforms.get(`brightness`).value}set brightness(e){this.uniforms.get(`brightness`).value=e}getBrightness(){return this.brightness}setBrightness(e){this.brightness=e}get contrast(){return this.uniforms.get(`contrast`).value}set contrast(e){this.uniforms.get(`contrast`).value=e}getContrast(){return this.contrast}setContrast(e){this.contrast=e}},Cn=class extends G{constructor(e,t=`inputBuffer`){super(`ShaderPass`),this.fullscreenMaterial=e,this.input=t}setInput(e){this.input=e}render(e,t,n,r,i){let a=this.fullscreenMaterial.uniforms;t!==null&&a!==void 0&&a[this.input]!==void 0&&(a[this.input].value=t.texture),e.setRenderTarget(this.renderToScreen?null:n),e.render(this.scene,this.camera)}initialize(e,t,n){n!==void 0&&n!==1009&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`)}};function wn(e,t,n){let r=new Map([[Le,1],[Pe,2],[Me,4]]),i;if(r.has(t)||console.error(`Invalid noise texture format`),n===1009){i=new Uint8Array(e*r.get(t));for(let e=0,t=i.length;e<t;++e)i[e]=Math.random()*255+.5}else{i=new Float32Array(e*r.get(t));for(let e=0,t=i.length;e<t;++e)i[e]=Math.random()}return i}var Tn=class extends ft{constructor(e,t,n=Le,r=Ge){super(wn(e*t,n,r),e,t,n,r),this.needsUpdate=!0}},En=class extends G{constructor(e,t,n=null){super(`RenderPass`,e,t),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Wt,this.overrideMaterialManager=n===null?null:new Qt(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get renderToScreen(){return super.renderToScreen}set renderToScreen(e){super.renderToScreen=e,this.clearPass.renderToScreen=e}get overrideMaterial(){let e=this.overrideMaterialManager;return e===null?null:e.material}set overrideMaterial(e){let t=this.overrideMaterialManager;e===null?t!==null&&(t.dispose(),this.overrideMaterialManager=null):t===null?this.overrideMaterialManager=new Qt(e):t.setMaterial(e)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(e){this.overrideMaterial=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getSelection(){return this.selection}setSelection(e){this.selection=e}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(e){this.skipShadowMapUpdate=e}getClearPass(){return this.clearPass}render(e,t,n,r,i){let a=this.scene,o=this.camera,s=this.selection,c=o.layers.mask,l=a.background,u=e.shadowMap.autoUpdate,d=this.renderToScreen?null:t;s!==null&&o.layers.set(s.getLayer()),this.skipShadowMapUpdate&&(e.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(a.background=null),this.clearPass.enabled&&this.clearPass.render(e,t),e.setRenderTarget(d),this.overrideMaterialManager===null?e.render(a,o):this.overrideMaterialManager.render(e,a,o),o.layers.mask=c,a.background=l,e.shadowMap.autoUpdate=u}},Dn=`uniform vec3 hue;uniform float saturation;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(dot(inputColor.rgb,hue.xyz),dot(inputColor.rgb,hue.zxy),dot(inputColor.rgb,hue.yzx));float average=(color.r+color.g+color.b)/3.0;vec3 diff=average-color;if(saturation>0.0){color+=diff*(1.0-1.0/(1.001-saturation));}else{color+=diff*-saturation;}outputColor=vec4(min(color,1.0),inputColor.a);}`,On=class extends tn{constructor({blendFunction:e=X.SRC,hue:t=0,saturation:n=0}={}){super(`HueSaturationEffect`,Dn,{blendFunction:e,uniforms:new Map([[`hue`,new z(new F)],[`saturation`,new z(n)]])}),this.hue=t}get saturation(){return this.uniforms.get(`saturation`).value}set saturation(e){this.uniforms.get(`saturation`).value=e}getSaturation(){return this.saturation}setSaturation(e){this.saturation=e}get hue(){let e=this.uniforms.get(`hue`).value;return Math.acos((e.x*3-1)/2)}set hue(e){let t=Math.sin(e),n=Math.cos(e);this.uniforms.get(`hue`).value.set((2*n+1)/3,(-Math.sqrt(3)*t-n+1)/3,(Math.sqrt(3)*t-n+1)/3)}getHue(){return this.hue}setHue(e){this.hue=e}};Math.PI*.5;function kn(e,t,n){return e*(t-n)-t}function An(e,t,n){return Math.min(Math.max((e+t)/(t-n),0),1)}var jn=`#include <common>
#include <packing>
uniform vec2 cameraNearFar;
#define cameraNear cameraNearFar.x
#define cameraFar cameraNearFar.y
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){float depth=texture2D(normalDepthBuffer,uv).a;
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}
#else
uniform lowp sampler2D normalBuffer;
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}
#endif
uniform lowp sampler2D noiseTexture;uniform mat4 inverseProjectionMatrix;uniform mat4 projectionMatrix;uniform vec2 texelSize;uniform float intensity;uniform float minRadiusScale;uniform float fade;uniform float bias;uniform vec2 distanceCutoff;uniform vec2 proximityCutoff;varying vec2 vUv;varying vec2 vUv2;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 getViewPosition(const in vec2 screenPosition,const in float depth,const in float viewZ){vec4 clipPosition=vec4(vec3(screenPosition,depth)*2.0-1.0,1.0);float clipW=projectionMatrix[2][3]*viewZ+projectionMatrix[3][3];clipPosition*=clipW;return(inverseProjectionMatrix*clipPosition).xyz;}float getAmbientOcclusion(const in vec3 p,const in vec3 n,const in float depth,const in vec2 uv){float radiusScale=1.0-smoothstep(0.0,distanceCutoff.y,depth);radiusScale=radiusScale*(1.0-minRadiusScale)+minRadiusScale;float radius=RADIUS*radiusScale;float noise=texture2D(noiseTexture,vUv2).r;float baseAngle=noise*PI2;float rings=SPIRAL_TURNS*PI2;float occlusion=0.0;int taps=0;for(int i=0;i<SAMPLES_INT;++i){float alpha=(float(i)+0.5)*INV_SAMPLES_FLOAT;float angle=alpha*rings+baseAngle;vec2 rotation=vec2(cos(angle),sin(angle));vec2 coords=alpha*radius*rotation*texelSize+uv;if(coords.s<0.0||coords.s>1.0||coords.t<0.0||coords.t>1.0){continue;}float sampleDepth=readDepth(coords);float viewZ=getViewZ(sampleDepth);
#ifdef PERSPECTIVE_CAMERA
float linearSampleDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearSampleDepth=sampleDepth;
#endif
float proximity=abs(depth-linearSampleDepth);if(proximity<proximityCutoff.y){float falloff=1.0-smoothstep(proximityCutoff.x,proximityCutoff.y,proximity);vec3 Q=getViewPosition(coords,sampleDepth,viewZ);vec3 v=Q-p;float vv=dot(v,v);float vn=dot(v,n)-bias;float f=max(RADIUS_SQ-vv,0.0)/RADIUS_SQ;occlusion+=(f*f*f*max(vn/(fade+vv),0.0))*falloff;}++taps;}return occlusion/(4.0*max(float(taps),1.0));}void main(){
#ifdef NORMAL_DEPTH
vec4 normalDepth=texture2D(normalDepthBuffer,vUv);
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,normalDepth.a*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);normalDepth.a=a+b/d;
#endif
#else
vec4 normalDepth=vec4(texture2D(normalBuffer,vUv).xyz,readDepth(vUv));
#endif
float ao=0.0;float depth=normalDepth.a;float viewZ=getViewZ(depth);
#ifdef PERSPECTIVE_CAMERA
float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
if(linearDepth<distanceCutoff.y){vec3 viewPosition=getViewPosition(vUv,depth,viewZ);vec3 viewNormal=unpackRGBToNormal(normalDepth.rgb);ao+=getAmbientOcclusion(viewPosition,viewNormal,linearDepth,vUv);float d=smoothstep(distanceCutoff.x,distanceCutoff.y,linearDepth);ao=mix(ao,0.0,d);
#ifdef LEGACY_INTENSITY
ao=clamp(1.0-pow(1.0-ao,abs(intensity)),0.0,1.0);
#endif
}gl_FragColor.r=ao;}`,Mn=`uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}`,Nn=class extends N{constructor(e){super({name:`SSAOMaterial`,defines:{SAMPLES_INT:`0`,INV_SAMPLES_FLOAT:`0.0`,SPIRAL_TURNS:`0.0`,RADIUS:`1.0`,RADIUS_SQ:`1.0`,DISTANCE_SCALING:`1`,DEPTH_PACKING:`0`},uniforms:{depthBuffer:new z(null),normalBuffer:new z(null),normalDepthBuffer:new z(null),noiseTexture:new z(null),inverseProjectionMatrix:new z(new Ke),projectionMatrix:new z(new Ke),texelSize:new z(new B),cameraNearFar:new z(new B),distanceCutoff:new z(new B),proximityCutoff:new z(new B),noiseScale:new z(new B),minRadiusScale:new z(.33),intensity:new z(1),fade:new z(.01),bias:new z(0)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jn,vertexShader:Mn}),this.copyCameraSettings(e),this.resolution=new B,this.r=1}get near(){return this.uniforms.cameraNearFar.value.x}get far(){return this.uniforms.cameraNearFar.value.y}set normalDepthBuffer(e){this.uniforms.normalDepthBuffer.value=e,e===null?delete this.defines.NORMAL_DEPTH:this.defines.NORMAL_DEPTH=`1`,this.needsUpdate=!0}setNormalDepthBuffer(e){this.normalDepthBuffer=e}set normalBuffer(e){this.uniforms.normalBuffer.value=e}setNormalBuffer(e){this.uniforms.normalBuffer.value=e}set depthBuffer(e){this.uniforms.depthBuffer.value=e}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=V){this.depthBuffer=e,this.depthPacking=t}set noiseTexture(e){this.uniforms.noiseTexture.value=e}setNoiseTexture(e){this.uniforms.noiseTexture.value=e}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(e){this.defines.SAMPLES_INT=e.toFixed(0),this.defines.INV_SAMPLES_FLOAT=(1/e).toFixed(9),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(e){this.samples=e}get rings(){return Number(this.defines.SPIRAL_TURNS)}set rings(e){this.defines.SPIRAL_TURNS=e.toFixed(1),this.needsUpdate=!0}getRings(){return this.rings}setRings(e){this.rings=e}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e,this.defines.LEGACY_INTENSITY===void 0&&(this.defines.LEGACY_INTENSITY=`1`,this.needsUpdate=!0)}getIntensity(){return this.uniforms.intensity.value}setIntensity(e){this.uniforms.intensity.value=e}get fade(){return this.uniforms.fade.value}set fade(e){this.uniforms.fade.value=e}getFade(){return this.uniforms.fade.value}setFade(e){this.uniforms.fade.value=e}get bias(){return this.uniforms.bias.value}set bias(e){this.uniforms.bias.value=e}getBias(){return this.uniforms.bias.value}setBias(e){this.uniforms.bias.value=e}get minRadiusScale(){return this.uniforms.minRadiusScale.value}set minRadiusScale(e){this.uniforms.minRadiusScale.value=e}getMinRadiusScale(){return this.uniforms.minRadiusScale.value}setMinRadiusScale(e){this.uniforms.minRadiusScale.value=e}updateRadius(){let e=this.r*this.resolution.height;this.defines.RADIUS=e.toFixed(11),this.defines.RADIUS_SQ=(e*e).toFixed(11),this.needsUpdate=!0}get radius(){return this.r}set radius(e){this.r=Math.min(Math.max(e,1e-6),1),this.updateRadius()}getRadius(){return this.radius}setRadius(e){this.radius=e}get distanceScaling(){return!0}set distanceScaling(e){}isDistanceScalingEnabled(){return this.distanceScaling}setDistanceScalingEnabled(e){this.distanceScaling=e}get distanceThreshold(){return this.uniforms.distanceCutoff.value.x}set distanceThreshold(e){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(e,0),1),Math.min(Math.max(e+this.distanceFalloff,0),1))}get worldDistanceThreshold(){return-kn(this.distanceThreshold,this.near,this.far)}set worldDistanceThreshold(e){this.distanceThreshold=An(-e,this.near,this.far)}get distanceFalloff(){return this.uniforms.distanceCutoff.value.y-this.distanceThreshold}set distanceFalloff(e){this.uniforms.distanceCutoff.value.y=Math.min(Math.max(this.distanceThreshold+e,0),1)}get worldDistanceFalloff(){return-kn(this.distanceFalloff,this.near,this.far)}set worldDistanceFalloff(e){this.distanceFalloff=An(-e,this.near,this.far)}setDistanceCutoff(e,t){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(e,0),1),Math.min(Math.max(e+t,0),1))}get proximityThreshold(){return this.uniforms.proximityCutoff.value.x}set proximityThreshold(e){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(e,0),1),Math.min(Math.max(e+this.proximityFalloff,0),1))}get worldProximityThreshold(){return-kn(this.proximityThreshold,this.near,this.far)}set worldProximityThreshold(e){this.proximityThreshold=An(-e,this.near,this.far)}get proximityFalloff(){return this.uniforms.proximityCutoff.value.y-this.proximityThreshold}set proximityFalloff(e){this.uniforms.proximityCutoff.value.y=Math.min(Math.max(this.proximityThreshold+e,0),1)}get worldProximityFalloff(){return-kn(this.proximityFalloff,this.near,this.far)}set worldProximityFalloff(e){this.proximityFalloff=An(-e,this.near,this.far)}setProximityCutoff(e,t){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(e,0),1),Math.min(Math.max(e+t,0),1))}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t)}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNearFar.value.set(e.near,e.far),this.uniforms.projectionMatrix.value.copy(e.projectionMatrix),this.uniforms.inverseProjectionMatrix.value.copy(e.projectionMatrix).invert(),e instanceof Ce?this.defines.PERSPECTIVE_CAMERA=`1`:delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(e,t){let n=this.uniforms,r=n.noiseTexture.value;r!==null&&n.noiseScale.value.set(e/r.image.width,t/r.image.height),n.texelSize.value.set(1/e,1/t),this.resolution.set(e,t),this.updateRadius()}},Pn=`#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
vec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;
#else
vec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);
#endif
gl_FragColor=vec4(n[index],d[index]);}`,Fn=`uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}`,In=class extends N{constructor(){super({name:`DepthDownsamplingMaterial`,defines:{DEPTH_PACKING:`0`},uniforms:{depthBuffer:new z(null),normalBuffer:new z(null),texelSize:new z(new B)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Pn,vertexShader:Fn})}set depthBuffer(e){this.uniforms.depthBuffer.value=e}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=V){this.depthBuffer=e,this.depthPacking=t}set normalBuffer(e){this.uniforms.normalBuffer.value=e,e===null?delete this.defines.DOWNSAMPLE_NORMALS:this.defines.DOWNSAMPLE_NORMALS=`1`,this.needsUpdate=!0}setNormalBuffer(e){this.normalBuffer=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t)}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},Ln=class extends G{constructor({normalBuffer:e=null,resolutionScale:t=.5,width:n=Y.AUTO_SIZE,height:r=Y.AUTO_SIZE,resolutionX:i=n,resolutionY:a=r}={}){super(`DepthDownsamplingPass`);let o=new In;o.normalBuffer=e,this.fullscreenMaterial=o,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new I(1,1,{minFilter:Xe,magFilter:Xe,depthBuffer:!1,type:Ne}),this.renderTarget.texture.name=`DepthDownsamplingPass.Target`,this.renderTarget.texture.generateMipmaps=!1;let s=this.resolution=new Y(this,i,a,t);s.addEventListener(`change`,e=>this.setSize(s.baseWidth,s.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(e,t=V){this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t}render(e,t,n,r,i){e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){let n=this.resolution;n.setBaseSize(e,t),this.renderTarget.setSize(n.width,n.height),this.fullscreenMaterial.setSize(e,t)}initialize(e,t,n){let r=e.getContext();if(!(r.getExtension(`EXT_color_buffer_float`)||r.getExtension(`EXT_color_buffer_half_float`)))throw Error(`Rendering to float texture is not supported.`)}},Rn=`uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;
#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH)
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
#endif
#ifdef COLORIZE
uniform vec3 color;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){float aoLinear=texture2D(aoBuffer,uv).r;
#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH) && __VERSION__ == 300
vec4 normalDepth[4];normalDepth[0]=textureOffset(normalDepthBuffer,uv,ivec2(0,0));normalDepth[1]=textureOffset(normalDepthBuffer,uv,ivec2(0,1));normalDepth[2]=textureOffset(normalDepthBuffer,uv,ivec2(1,0));normalDepth[3]=textureOffset(normalDepthBuffer,uv,ivec2(1,1));float dot01=dot(normalDepth[0].rgb,normalDepth[1].rgb);float dot02=dot(normalDepth[0].rgb,normalDepth[2].rgb);float dot03=dot(normalDepth[0].rgb,normalDepth[3].rgb);float minDot=min(dot01,min(dot02,dot03));float s=step(THRESHOLD,minDot);float smallestDistance=1.0;int index;for(int i=0;i<4;++i){float distance=abs(depth-normalDepth[i].a);if(distance<smallestDistance){smallestDistance=distance;index=i;}}ivec2 offsets[4];offsets[0]=ivec2(0,0);offsets[1]=ivec2(0,1);offsets[2]=ivec2(1,0);offsets[3]=ivec2(1,1);ivec2 coord=ivec2(uv*vec2(textureSize(aoBuffer,0)))+offsets[index];float aoNearest=texelFetch(aoBuffer,coord,0).r;float ao=mix(aoNearest,aoLinear,s);
#else
float ao=aoLinear;
#endif
float l=luminance(inputColor.rgb);ao=mix(ao,0.0,l*luminanceInfluence);ao=clamp(ao*intensity,0.0,1.0);
#ifdef COLORIZE
outputColor=vec4(1.0-ao*(1.0-color),inputColor.a);
#else
outputColor=vec4(vec3(1.0-ao),inputColor.a);
#endif
}`,zn=64,Bn=class extends tn{constructor(e,t,{blendFunction:n=X.MULTIPLY,samples:r=9,rings:i=7,normalDepthBuffer:a=null,depthAwareUpsampling:o=!0,worldDistanceThreshold:s,worldDistanceFalloff:c,worldProximityThreshold:l,worldProximityFalloff:u,distanceThreshold:d=.97,distanceFalloff:f=.03,rangeThreshold:p=5e-4,rangeFalloff:m=.001,minRadiusScale:h=.1,luminanceInfluence:g=.7,radius:_=.1825,intensity:v=1,bias:y=.025,fade:b=.01,color:x=null,resolutionScale:S=1,width:C=Y.AUTO_SIZE,height:w=Y.AUTO_SIZE,resolutionX:T=C,resolutionY:E=w}={}){super(`SSAOEffect`,Rn,{blendFunction:n,attributes:K.DEPTH,defines:new Map([[`THRESHOLD`,`0.997`]]),uniforms:new Map([[`aoBuffer`,new z(null)],[`normalDepthBuffer`,new z(a)],[`luminanceInfluence`,new z(g)],[`color`,new z(null)],[`intensity`,new z(v)],[`scale`,new z(0)]])}),this.renderTarget=new I(1,1,{depthBuffer:!1}),this.renderTarget.texture.name=`AO.Target`,this.uniforms.get(`aoBuffer`).value=this.renderTarget.texture;let ee=this.resolution=new Y(this,T,E,S);ee.addEventListener(`change`,e=>this.setSize(ee.baseWidth,ee.baseHeight)),this.camera=e,this.depthDownsamplingPass=new Ln({normalBuffer:t,resolutionScale:S}),this.depthDownsamplingPass.enabled=a===null,this.ssaoPass=new Cn(new Nn(e));let D=new Tn(zn,zn,Me);D.wrapS=D.wrapT=mt;let O=this.ssaoMaterial;O.normalBuffer=t,O.noiseTexture=D,O.minRadiusScale=h,O.samples=r,O.radius=_,O.rings=i,O.fade=b,O.bias=y,O.distanceThreshold=d,O.distanceFalloff=f,O.proximityThreshold=p,O.proximityFalloff=m,s!==void 0&&(O.worldDistanceThreshold=s),c!==void 0&&(O.worldDistanceFalloff=c),l!==void 0&&(O.worldProximityThreshold=l),u!==void 0&&(O.worldProximityFalloff=u),a!==null&&(this.ssaoMaterial.normalDepthBuffer=a,this.defines.set(`NORMAL_DEPTH`,`1`)),this.depthAwareUpsampling=o,this.color=x}set mainCamera(e){this.camera=e,this.ssaoMaterial.copyCameraSettings(e)}get normalBuffer(){return this.ssaoMaterial.normalBuffer}set normalBuffer(e){this.ssaoMaterial.normalBuffer=e,this.depthDownsamplingPass.fullscreenMaterial.normalBuffer=e}getResolution(){return this.resolution}get ssaoMaterial(){return this.ssaoPass.fullscreenMaterial}getSSAOMaterial(){return this.ssaoMaterial}get samples(){return this.ssaoMaterial.samples}set samples(e){this.ssaoMaterial.samples=e}get rings(){return this.ssaoMaterial.rings}set rings(e){this.ssaoMaterial.rings=e}get radius(){return this.ssaoMaterial.radius}set radius(e){this.ssaoMaterial.radius=e}get depthAwareUpsampling(){return this.defines.has(`DEPTH_AWARE_UPSAMPLING`)}set depthAwareUpsampling(e){this.depthAwareUpsampling!==e&&(e?this.defines.set(`DEPTH_AWARE_UPSAMPLING`,`1`):this.defines.delete(`DEPTH_AWARE_UPSAMPLING`),this.setChanged())}isDepthAwareUpsamplingEnabled(){return this.depthAwareUpsampling}setDepthAwareUpsamplingEnabled(e){this.depthAwareUpsampling=e}get distanceScaling(){return!0}set distanceScaling(e){}get color(){return this.uniforms.get(`color`).value}set color(e){let t=this.uniforms,n=this.defines;e===null?n.has(`COLORIZE`)&&(n.delete(`COLORIZE`),t.get(`color`).value=null,this.setChanged()):n.has(`COLORIZE`)?t.get(`color`).value.set(e):(n.set(`COLORIZE`,`1`),t.get(`color`).value=new H(e),this.setChanged())}get luminanceInfluence(){return this.uniforms.get(`luminanceInfluence`).value}set luminanceInfluence(e){this.uniforms.get(`luminanceInfluence`).value=e}get intensity(){return this.uniforms.get(`intensity`).value}set intensity(e){this.uniforms.get(`intensity`).value=e}getColor(){return this.color}setColor(e){this.color=e}setDistanceCutoff(e,t){this.ssaoMaterial.distanceThreshold=e,this.ssaoMaterial.distanceFalloff=t}setProximityCutoff(e,t){this.ssaoMaterial.proximityThreshold=e,this.ssaoMaterial.proximityFalloff=t}setDepthTexture(e,t=V){this.depthDownsamplingPass.setDepthTexture(e,t),this.ssaoMaterial.depthBuffer=e,this.ssaoMaterial.depthPacking=t}update(e,t,n){let r=this.renderTarget;this.depthDownsamplingPass.enabled&&this.depthDownsamplingPass.render(e),this.ssaoPass.render(e,null,r)}setSize(e,t){let n=this.resolution;n.setBaseSize(e,t);let r=n.width,i=n.height;this.ssaoMaterial.copyCameraSettings(this.camera),this.ssaoMaterial.setSize(r,i),this.renderTarget.setSize(r,i),this.depthDownsamplingPass.resolution.scale=n.scale,this.depthDownsamplingPass.setSize(e,t)}initialize(e,t,n){try{let r=this.uniforms.get(`normalDepthBuffer`).value;r===null&&(this.depthDownsamplingPass.initialize(e,t,n),r=this.depthDownsamplingPass.texture,this.uniforms.get(`normalDepthBuffer`).value=r,this.ssaoMaterial.normalDepthBuffer=r,this.defines.set(`NORMAL_DEPTH`,`1`))}catch{this.depthDownsamplingPass.enabled=!1}}},Vn=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,Hn=`uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}`,Un=class extends N{constructor(e,t,n,r,i=!1){super({name:`EffectMaterial`,defines:{THREE_REVISION:`184`.replace(/\D+/g,``),DEPTH_PACKING:`0`,ENCODE_OUTPUT:`1`},uniforms:{inputBuffer:new z(null),depthBuffer:new z(null),resolution:new z(new B),texelSize:new z(new B),cameraNear:new z(.3),cameraFar:new z(1e3),aspect:new z(1),time:new z(0)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:i}),e&&this.setShaderParts(e),t&&this.setDefines(t),n&&this.setUniforms(n),this.copyCameraSettings(r)}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=V){this.depthBuffer=e,this.depthPacking=t}setShaderData(e){this.setShaderParts(e.shaderParts),this.setDefines(e.defines),this.setUniforms(e.uniforms),this.setExtensions(e.extensions)}setShaderParts(e){return this.fragmentShader=Vn.replace(q.FRAGMENT_HEAD,e.get(q.FRAGMENT_HEAD)||``).replace(q.FRAGMENT_MAIN_UV,e.get(q.FRAGMENT_MAIN_UV)||``).replace(q.FRAGMENT_MAIN_IMAGE,e.get(q.FRAGMENT_MAIN_IMAGE)||``),this.vertexShader=Hn.replace(q.VERTEX_HEAD,e.get(q.VERTEX_HEAD)||``).replace(q.VERTEX_MAIN_SUPPORT,e.get(q.VERTEX_MAIN_SUPPORT)||``),this.needsUpdate=!0,this}setDefines(e){for(let t of e.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(e){for(let t of e.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(e){this.extensions={};for(let t of e)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(e){this.encodeOutput!==e&&(e?this.defines.ENCODE_OUTPUT=`1`:delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(e){return this.encodeOutput}setOutputEncodingEnabled(e){this.encodeOutput=e}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}setDeltaTime(e){this.uniforms.time.value+=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,e instanceof Ce?this.defines.PERSPECTIVE_CAMERA=`1`:delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(e,t){let n=this.uniforms;n.resolution.value.set(e,t),n.texelSize.value.set(1/e,1/t),n.aspect.value=e/t}static get Section(){return q}};Number(`184`.replace(/\D+/g,``));var Z=255/256;new Float32Array([Z/256**3,Z/256**2,Z/256,Z]),new Float32Array([Z,Z/256,Z/256**2,1/256**3]);function Wn(e,t,n){for(let r of t){let t=`$1`+e+r.charAt(0).toUpperCase()+r.slice(1),i=RegExp(`([^\\.])(\\b`+r+`\\b)`,`g`);for(let e of n.entries())e[1]!==null&&n.set(e[0],e[1].replace(i,t))}}function Gn(e,t,n){let r=t.getFragmentShader(),i=t.getVertexShader(),a=r!==void 0&&/mainImage/.test(r),o=r!==void 0&&/mainUv/.test(r);if(n.attributes|=t.getAttributes(),r===void 0)throw Error(`Missing fragment shader (${t.name})`);if(o&&(n.attributes&K.CONVOLUTION)!==0)throw Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!a&&!o)throw Error(`Could not find mainImage or mainUv function (${t.name})`);{let s=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=n.shaderParts,l=c.get(q.FRAGMENT_HEAD)||``,u=c.get(q.FRAGMENT_MAIN_UV)||``,d=c.get(q.FRAGMENT_MAIN_IMAGE)||``,f=c.get(q.VERTEX_HEAD)||``,p=c.get(q.VERTEX_MAIN_SUPPORT)||``,m=new Set,h=new Set;if(o&&(u+=`	${e}MainUv(UV);
`,n.uvTransformation=!0),i!==null&&/mainSupport/.test(i)){let t=/mainSupport *\([\w\s]*?uv\s*?\)/.test(i);p+=`	${e}MainSupport(`,p+=t?`vUv);
`:`);
`;for(let e of i.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let t of e[1].split(/\s*,\s*/))n.varyings.add(t),m.add(t),h.add(t);for(let e of i.matchAll(s))h.add(e[1])}for(let e of r.matchAll(s))h.add(e[1]);for(let e of t.defines.keys())h.add(e.replace(/\([\w\s,]*\)/g,``));for(let e of t.uniforms.keys())h.add(e);h.delete(`while`),h.delete(`for`),h.delete(`if`),t.uniforms.forEach((t,r)=>n.uniforms.set(e+r.charAt(0).toUpperCase()+r.slice(1),t)),t.defines.forEach((t,r)=>n.defines.set(e+r.charAt(0).toUpperCase()+r.slice(1),t));let g=new Map([[`fragment`,r],[`vertex`,i]]);Wn(e,h,n.defines),Wn(e,h,g),r=g.get(`fragment`),i=g.get(`vertex`);let _=t.blendMode;if(n.blendModes.set(_.blendFunction,_),a){t.inputColorSpace!==null&&t.inputColorSpace!==n.colorSpace&&(d+=t.inputColorSpace===`srgb`?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace===``?t.inputColorSpace!==null&&(n.colorSpace=t.inputColorSpace):n.colorSpace=t.outputColorSpace,d+=`${e}MainImage(color0, UV, `,(n.attributes&K.DEPTH)!==0&&/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/.test(r)&&(d+=`depth, `,n.readDepth=!0),d+=`color1);
	`;let i=e+`BlendOpacity`;n.uniforms.set(i,_.opacity),d+=`color0 = blend${_.blendFunction}(color0, color1, ${i});

	`,l+=`uniform float ${i};

`}if(l+=r+`
`,i!==null&&(f+=i+`
`),c.set(q.FRAGMENT_HEAD,l),c.set(q.FRAGMENT_MAIN_UV,u),c.set(q.FRAGMENT_MAIN_IMAGE,d),c.set(q.VERTEX_HEAD,f),c.set(q.VERTEX_MAIN_SUPPORT,p),t.extensions!==null)for(let e of t.extensions)n.extensions.add(e)}}var Kn=class extends G{constructor(e,...t){super(`EffectPass`),this.fullscreenMaterial=new Un(null,null,null,e),this.listener=e=>this.handleEvent(e),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=1/0,this.timeScale=1}set mainScene(e){for(let t of this.effects)t.mainScene=e}set mainCamera(e){this.fullscreenMaterial.copyCameraSettings(e);for(let t of this.effects)t.mainCamera=e}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(e){this.fullscreenMaterial.encodeOutput=e}get dithering(){return this.fullscreenMaterial.dithering}set dithering(e){let t=this.fullscreenMaterial;t.dithering=e,t.needsUpdate=!0}setEffects(e){for(let e of this.effects)e.removeEventListener(`change`,this.listener);this.effects=e.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener(`change`,this.listener)}updateMaterial(){let e=new Xt,t=0;for(let n of this.effects)if(n.blendMode.blendFunction===X.DST)e.attributes|=n.getAttributes()&K.DEPTH;else if((e.attributes&n.getAttributes()&K.CONVOLUTION)!==0)throw Error(`Convolution effects cannot be merged (${n.name})`);else Gn(`e`+t++,n,e);let n=e.shaderParts.get(q.FRAGMENT_HEAD),r=e.shaderParts.get(q.FRAGMENT_MAIN_IMAGE),i=e.shaderParts.get(q.FRAGMENT_MAIN_UV),a=/\bblend\b/g;for(let t of e.blendModes.values())n+=t.getShaderCode().replace(a,`blend${t.blendFunction}`)+`
`;(e.attributes&K.DEPTH)===0?this.needsDepthTexture=!1:(e.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null),e.colorSpace===`srgb`&&(r+=`color0 = sRGBToLinear(color0);
	`),e.uvTransformation?(i=`vec2 transformedUv = vUv;
`+i,e.defines.set(`UV`,`transformedUv`)):e.defines.set(`UV`,`vUv`),e.shaderParts.set(q.FRAGMENT_HEAD,n),e.shaderParts.set(q.FRAGMENT_MAIN_IMAGE,r),e.shaderParts.set(q.FRAGMENT_MAIN_UV,i);for(let[t,n]of e.shaderParts)n!==null&&e.shaderParts.set(t,n.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(e)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(e,t=V){this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t;for(let n of this.effects)n.setDepthTexture(e,t)}render(e,t,n,r,i){for(let n of this.effects)n.update(e,t,r);if(!this.skipRendering||this.renderToScreen){let i=this.fullscreenMaterial;i.inputBuffer=t.texture,i.time+=r*this.timeScale,e.setRenderTarget(this.renderToScreen?null:n),e.render(this.scene,this.camera)}}setSize(e,t){this.fullscreenMaterial.setSize(e,t);for(let n of this.effects)n.setSize(e,t)}initialize(e,t,n){this.renderer=e;for(let r of this.effects)r.initialize(e,t,n);this.updateMaterial(),n!==void 0&&n!==1009&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`)}dispose(){super.dispose();for(let e of this.effects)e.removeEventListener(`change`,this.listener),e.dispose()}handleEvent(e){switch(e.type){case`change`:this.recompile();break}}},qn=class extends G{constructor(e,t,{renderTarget:n,resolutionScale:r=1,width:i=Y.AUTO_SIZE,height:a=Y.AUTO_SIZE,resolutionX:o=i,resolutionY:s=a}={}){super(`NormalPass`),this.needsSwap=!1,this.renderPass=new En(e,t,new Ye);let c=this.renderPass;c.ignoreBackground=!0,c.skipShadowMapUpdate=!0;let l=c.getClearPass();l.overrideClearColor=new H(7829503),l.overrideClearAlpha=1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new I(1,1,{minFilter:Xe,magFilter:Xe}),this.renderTarget.texture.name=`NormalPass.Target`);let u=this.resolution=new Y(this,o,s,r);u.addEventListener(`change`,e=>this.setSize(u.baseWidth,u.baseHeight))}set mainScene(e){this.renderPass.mainScene=e}set mainCamera(e){this.renderPass.mainCamera=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,n,r,i){let a=this.renderToScreen?null:this.renderTarget;this.renderPass.render(e,a,a)}setSize(e,t){let n=this.resolution;n.setBaseSize(e,t),this.renderTarget.setSize(n.width,n.height)}};new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1]),new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125]),new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4]),new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3]),Q(0,0,0,0),new Float32Array([0,0,0,0]),Q(0,0,0,1),new Float32Array([0,0,0,1]),Q(0,0,1,0),new Float32Array([0,0,1,0]),Q(0,0,1,1),new Float32Array([0,0,1,1]),Q(0,1,0,0),new Float32Array([0,1,0,0]),Q(0,1,0,1),new Float32Array([0,1,0,1]),Q(0,1,1,0),new Float32Array([0,1,1,0]),Q(0,1,1,1),new Float32Array([0,1,1,1]),Q(1,0,0,0),new Float32Array([1,0,0,0]),Q(1,0,0,1),new Float32Array([1,0,0,1]),Q(1,0,1,0),new Float32Array([1,0,1,0]),Q(1,0,1,1),new Float32Array([1,0,1,1]),Q(1,1,0,0),new Float32Array([1,1,0,0]),Q(1,1,0,1),new Float32Array([1,1,0,1]),Q(1,1,1,0),new Float32Array([1,1,1,0]),Q(1,1,1,1),new Float32Array([1,1,1,1]);function Jn(e,t,n){return e+(t-e)*n}function Q(e,t,n,r){return Jn(Jn(e,t,.75),Jn(n,r,.75),.875)}function Yn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}R(),new B,new B;function Xn(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}var $=function e(t,n,r){var i=this;Xn(this,e),Yn(this,`dot2`,function(e,t){return i.x*e+i.y*t}),Yn(this,`dot3`,function(e,t,n){return i.x*e+i.y*t+i.z*n}),this.x=t,this.y=n,this.z=r},Zn=[new $(1,1,0),new $(-1,1,0),new $(1,-1,0),new $(-1,-1,0),new $(1,0,1),new $(-1,0,1),new $(1,0,-1),new $(-1,0,-1),new $(0,1,1),new $(0,-1,1),new $(0,1,-1),new $(0,-1,-1)],Qn=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],$n=Array(512),er=Array(512);(function(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(var t=0;t<256;t++){var n=t&1?Qn[t]^e&255:Qn[t]^e>>8&255;$n[t]=$n[t+256]=n,er[t]=er[t+256]=Zn[n%12]}})(0),.5*(Math.sqrt(3)-1),(3-Math.sqrt(3))/6,Math.PI*2;function tr(e){if(typeof e==`number`)e=Math.abs(e);else if(typeof e==`string`){var t=e;e=0;for(var n=0;n<t.length;n++)e=(e+(n+1)*(t.charCodeAt(n)%96))%2147483647}return e===0&&(e=311),e}function nr(e){var t=tr(e);return function(){var e=t*48271%2147483647;return t=e,e/2147483647}}new function e(t){var n=this;Xn(this,e),Yn(this,`seed`,0),Yn(this,`init`,function(e){n.seed=e,n.value=nr(e)}),Yn(this,`value`,nr(this.seed)),this.init(t)}(Math.random()),R();var rr=(0,U.createContext)(null),ir=e=>(e.getAttributes()&2)==2,ar=(0,U.memo)((0,U.forwardRef)(({children:e,camera:t,scene:n,resolutionScale:r,enabled:i=!0,renderPriority:o=1,autoClear:s=!0,depthBuffer:c,enableNormalPass:l,stencilBuffer:u,multisampling:f=8,frameBufferType:p=ke},m)=>{let{gl:h,scene:g,camera:_,size:v}=a(),y=n||g,b=t||_,[x,S,C]=(0,U.useMemo)(()=>{let e=new Yt(h,{depthBuffer:c,stencilBuffer:u,multisampling:f,frameBufferType:p});e.addPass(new En(y,b));let t=null,n=null;return l&&(n=new qn(y,b),n.enabled=!1,e.addPass(n),r!==void 0&&(t=new Ln({normalBuffer:n.texture,resolutionScale:r}),t.enabled=!1,e.addPass(t))),[e,n,t]},[b,h,c,u,f,p,y,l,r]);(0,U.useEffect)(()=>x?.setSize(v.width,v.height),[x,v]),d((e,t)=>{if(i){let e=h.autoClear;h.autoClear=s,u&&!s&&h.clearStencil(),x.render(t),h.autoClear=e}},i?o:0);let w=(0,U.useRef)(null);(0,U.useLayoutEffect)(()=>{let e=[],t=w.current.__r3f;if(t&&x){let n=t.children;for(let t=0;t<n.length;t++){let r=n[t].object;if(r instanceof tn){let i=[r];if(!ir(r)){let e=null;for(;(e=n[t+1]?.object)instanceof tn&&!ir(e);)i.push(e),t++}let a=new Kn(b,...i);e.push(a)}else r instanceof G&&e.push(r)}for(let t of e)x?.addPass(t);S&&(S.enabled=!0),C&&(C.enabled=!0)}return()=>{for(let t of e)x?.removePass(t);S&&(S.enabled=!1),C&&(C.enabled=!1)}},[x,e,b,S,C]),(0,U.useEffect)(()=>{let e=h.toneMapping;return h.toneMapping=0,()=>{h.toneMapping=e}},[h]);let T=(0,U.useMemo)(()=>({composer:x,normalPass:S,downSamplingPass:C,resolutionScale:r,camera:b,scene:y}),[x,S,C,r,b,y]);return(0,U.useImperativeHandle)(m,()=>x,[x]),(0,W.jsx)(rr.Provider,{value:T,children:(0,W.jsx)(`group`,{ref:w,children:e})})})),or=0,sr=new WeakMap,cr=(e,t)=>function({blendFunction:n=t?.blendFunction,opacity:r=t?.opacity,...i}){let o=sr.get(e);if(!o){let t=`@react-three/postprocessing/${e.name}-${or++}`;l({[t]:e}),sr.set(e,o=t)}let s=a(e=>e.camera),c=U.useMemo(()=>[...t?.args??[],...i.args??[{...t,...i}]],[JSON.stringify(i)]);return(0,W.jsx)(o,{camera:s,"blendMode-blendFunction":n,"blendMode-opacity-value":r,...i,args:c})},lr=cr(bn,{blendFunction:0}),ur=cr(Sn),dr=cr(On),fr=(0,U.forwardRef)(function(e,t){let{camera:n,normalPass:r,downSamplingPass:i,resolutionScale:a}=(0,U.useContext)(rr);return(0,W.jsx)(`primitive`,{ref:t,object:(0,U.useMemo)(()=>r===null&&i===null?(console.error(`Please enable the NormalPass in the EffectComposer in order to use SSAO.`),{}):new Bn(n,r&&!i?r.texture:null,{blendFunction:21,samples:30,rings:4,distanceThreshold:1,distanceFalloff:0,rangeThreshold:.5,rangeFalloff:.1,luminanceInfluence:.9,radius:20,bias:.5,intensity:1,color:void 0,normalDepthBuffer:i?i.texture:null,resolutionScale:a??1,depthAwareUpsampling:!0,...e}),[n,i,r,a]),dispose:null})});R();var pr=`
varying vec3 vPosition;
varying vec3 vNormalLocal;

void main() {
  vNormalLocal = normal;                           // local-space normal (pre-rotation)
  vPosition = position;                             // local-space position
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,mr=`
uniform float uTime;
uniform float uEnabled;
uniform vec3  uDotColor;
uniform float uDotDensity;
uniform float uDotOpacity;
uniform vec3  uScanColor;
uniform float uScanSpeed;
uniform float uScanRangeMax;
uniform float uBuildingHeight;
uniform float uOpacity;

varying vec3 vPosition;
varying vec3 vNormalLocal;

void main() {
  // ── Base building color (dark tint of dotColor, matching original) ──────
  vec3 buildingBase = uDotColor * 0.12;

  if (uEnabled < 0.5) {
    gl_FragColor = vec4(buildingBase, uOpacity);
    return;
  }

  // ── Face-normal UV selection (local space, post-bake) ─────────────────
  // ThreeScene3D bakes Rx(-PI/2) into vertex positions/normals, so the
  // building height axis is local +Y (originally +Z). Roof normals → +Y,
  // E/W walls → +X, N/S walls → +Z.
  vec3 absN = abs(vNormalLocal);
  vec2 surfaceUV;
  if (absN.y > absN.x && absN.y > absN.z) {
    surfaceUV = vPosition.xz;          // roof/floor (XZ footprint plane)
  } else if (absN.x > absN.z) {
    surfaceUV = vPosition.yz;          // E/W walls (height + Z)
  } else {
    surfaceUV = vPosition.xy;          // N/S walls (X + height)
  }

  // ── Anti-aliased dot grid (matching ejemplo.js) ────────────────────────
  // Density is dots-per-unit; multiply UV directly (ejemplo.js: surfaceUV * dotDensity).
  vec2  scaledUV       = surfaceUV * uDotDensity;
  vec2  gridUV         = fract(scaledUV) - 0.5;
  float dotRadius      = 0.2;                        // ejemplo.js line 177
  float pixelFootprint = max(length(dFdx(scaledUV)), length(dFdy(scaledUV)));
  float blur           = max(pixelFootprint * 0.8, 0.01);
  float dotPat         = smoothstep(dotRadius + blur, dotRadius - blur, length(gridUV));
  // Fade to average density when pixel covers multiple cells (ejemplo.js line 187)
  dotPat = mix(dotPat, 0.125, smoothstep(0.15, 0.6, pixelFootprint));

  // ── Scanner sweep (along local Y = building height axis, post-bake) ────
  // ThreeScene3D bakes Rx(-PI/2) so the original +Z extrude axis becomes +Y.
  // Original: 4s sweep up, 2s pause at top
  float height = uScanRangeMax > 0.0 ? uScanRangeMax : 50.0;
  float cycle  = mod(uTime * uScanSpeed, 6.0);
  float scanY  = (cycle < 4.0)
    ? (height * cycle * 0.25)       // sweep up over 4s
    : 1.0e9;                        // beyond building height = invisible
  float scanEnv = smoothstep(0.0, 0.5, cycle) * smoothstep(4.0, 3.5, cycle);
  float dScan   = abs(vPosition.y - scanY);

  // ── Lambert lighting on the dark base only ─────────────────────────────
  // Dots and scanner are added AFTER lighting → they read as emissive
  // (not attenuated by the diffuse term), making them clearly visible
  // even on shadowed walls.
  vec3 n = length(vNormalLocal) > 0.001 ? normalize(vNormalLocal) : vec3(0.0, 1.0, 0.0);
  vec3 L = normalize(vec3(0.8, 0.6, -0.4));
  float diff = max(dot(n, L), 0.0);
  vec3 litBase = buildingBase * diff + buildingBase * 0.3;

  // ── Emissive overlays (dots + scanner core + scanner glow) ─────────────
  // Dots are pure emissive: dotColor lifted toward white at the dot center
  // and multiplied 3.5× so they read clearly on any building color.
  vec3 dotGlow = mix(uDotColor, vec3(1.0), 0.35);
  vec3 emissive = dotGlow * dotPat * uDotOpacity * 3.5;

  float scanCore = smoothstep(0.15, 0.0, dScan);
  float scanGlow = smoothstep(2.0,  0.0, dScan);
  emissive += uScanColor * scanCore * 4.0 * scanEnv;
  emissive += uScanColor * scanGlow * dotPat * 2.5 * scanEnv;

  gl_FragColor = vec4(litBase + emissive, uOpacity);
}
`;function hr(){return new N({uniforms:{uTime:{value:0},uEnabled:{value:0},uDotColor:{value:new H(4419204)},uDotDensity:{value:.25},uDotOpacity:{value:.4},uScanColor:{value:new H(52479)},uScanSpeed:{value:.7},uScanRangeMax:{value:50},uBuildingHeight:{value:20},uOpacity:{value:1}},vertexShader:pr,fragmentShader:mr,transparent:!0,side:2})}R();var gr=`
attribute float buildingId;
attribute float buildingHeight;

// Post-bake world space: Y = height, X/Z = footprint
varying vec3  vPosition;
varying vec3  vNormal;
varying vec3  vWorldNormal;
varying float vBuildingId;
varying float vBuildingHeight;
varying vec3  vColor;
varying vec3  vWorldPosition;

// Shadow map declarations
#include <shadowmap_pars_vertex>

void main() {
  vec4 worldPos     = modelMatrix * vec4(position, 1.0);
  vWorldPosition    = worldPos.xyz;
  vPosition         = position;
  vNormal           = normalize(normalMatrix * normal);
  vWorldNormal      = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  vBuildingId       = buildingId;
  vBuildingHeight   = buildingHeight;
  vColor            = color;

  #ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0
      vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * worldPos;
    #endif
  #endif

  gl_Position       = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,_r=`
uniform float uTime;
uniform float uEnabled;
uniform vec3  uDotColor;
uniform float uDotDensity;
uniform float uDotOpacity;
uniform vec3  uScanColor;
uniform float uScanSpeed;
uniform float uScanRangeMax;
uniform float uBuildingHeight;
uniform float uOpacity;
uniform float uSelectedBuildingId;
uniform float uHoveredBuildingId;
uniform float uUnselectedOpacity;
uniform vec3  uSunDir;
uniform vec3  uSunColor;
uniform float uAmbientStrength;
uniform vec3  uTintColor;
uniform float uShininess;
uniform float uWindowEmissiveIntensity;
uniform float uWindowLitFraction;
uniform float uWindowReflectionIntensity;
uniform float uWindowGridScale;
uniform float uFloorHeight;
uniform vec3  uWindowEmissiveColor;
uniform vec3  uCameraPosition;
uniform float uNormalStrength;
uniform float uCementRelief;
uniform float uAoCavityStrength;
uniform vec3  uWireframeColor;
uniform float uWireframeEnabled;

// Fog uniforms — manual
uniform vec3  fogColor;
uniform float fogNear;
uniform float fogFar;

// <common> defines PI, PI2, RECIPROCAL_PI, and helpers (interleavedGradientNoise,
// vogelDiskSample) that <shadowmap_pars_fragment> references in three >= 0.180.
// Must precede the shadow chunk.
#include <common>

// Shadow map parsing + getShadow()
#include <shadowmap_pars_fragment>

varying vec3  vPosition;
varying vec3  vNormal;
varying vec3  vWorldNormal;
varying float vBuildingId;
varying float vBuildingHeight;
varying vec3  vColor;
varying vec3  vWorldPosition;

// ── Hash helpers ─────────────────────────────────────────────────────────────

float hash1d(float f) {
  return fract(sin(f * 127.1 + 311.7) * 43758.5453);
}

vec3 buildingHue() {
  float h = hash1d(vBuildingId * 0.1);
  float s = hash1d(vBuildingId * 7.89 + 1.0);
  float v = hash1d(vBuildingId * 37.89 + 2.0);
  return vec3(h * 0.06, s * 0.03, v * 0.04);
}

// ── Lighting ──────────────────────────────────────────────────────────────────

// Window frame normal perturbation (ported from ejemplo.glsl)
// Post-bake convention: Y = height, X/Z = footprint
vec3 perturbNormal(vec3 norm, vec3 pos) {
  vec3 result = norm;

  // Window frame relief — post-bake coordinates (Y=height, X/Z=footprint)
  if (abs(norm.y) < 0.7 && uNormalStrength > 0.0) {
    float wave = floor(sin((pos.y * uWindowGridScale * 40.0 - 0.1) * PI) * 0.505 - 0.5) + 1.0;
    float horizCoord = abs(norm.x) > abs(norm.z) ? pos.z : pos.x;
    float pits = min(1.0, abs(sin((horizCoord * 80.0) * PI)) * 4.0) - 1.0;
    vec3 perturb = vec3(0.0);
    if (abs(norm.x) > abs(norm.z)) perturb.z += pits * 0.25;
    else perturb.x += pits * 0.25;
    perturb.y -= max(-1.0, min(1.0, -wave * 0.5));
    result = normalize(result + perturb * uNormalStrength);
  }

  // Cement tile joint micro-relief
  if (uCementRelief > 0.0) {
    float tileScale = 0.5;
    vec2 tileUV;
    if (abs(norm.y) > 0.7) {
      tileUV = pos.xz * tileScale;
    } else {
      float horizCoord = abs(norm.x) > abs(norm.z) ? pos.z : pos.x;
      tileUV = vec2(horizCoord, pos.y) * tileScale;
    }
    vec2 tileFract = fract(tileUV);
    float jointWidth = 0.04;
    float jx = step(1.0 - jointWidth, tileFract.x) + step(tileFract.x, jointWidth);
    float jz = step(1.0 - jointWidth, tileFract.y) + step(tileFract.y, jointWidth);
    float joint = clamp(jx + jz, 0.0, 1.0);
    float cementFactor = joint * 0.18;
    result = normalize(result + vec3(cementFactor * uCementRelief * 2.0));
  }

  return result;
}

vec3 computeLit(vec3 baseColor, float shadowFactor) {
  vec3 n = normalize(perturbNormal(vNormal, vPosition));
  vec3 L = normalize(uSunDir);
  float diff = max(dot(n, L), 0.0);

  // Sky ambient — not shadowed
  vec3 skyCol = vec3(0.3, 0.5, 0.95);
  float skyFactor = n.y * 0.5 + 0.5;

  // Screen-space curvature AO
  float localAO = 1.0;
  if (uAoCavityStrength > 0.0) {
    vec3 dPosX = dFdx(vWorldPosition);
    vec3 dPosY = dFdy(vWorldPosition);
    vec3 faceNormal = normalize(cross(dPosX, dPosY));
    float curvature = 1.0 - abs(dot(faceNormal, n));
    localAO = mix(1.0, 1.0 - uAoCavityStrength, curvature * 3.0);
  }

  vec3 ambient = baseColor * mix(vec3(1.0), skyCol, 0.4) * uAmbientStrength * skyFactor * localAO;

  // Directional sun — shadowed
  vec3 diffuse = baseColor * uSunColor * diff * (1.0 - uAmbientStrength * 0.5) * shadowFactor;

  vec3 light = ambient + diffuse;

  if (uShininess > 0.0) {
    vec3 halfVec = normalize(L + vec3(0.0, 1.0, 0.0));
    float spec = pow(max(dot(n, halfVec), 0.0), 32.0);
    light += uSunColor * spec * uShininess * 0.4 * shadowFactor;
  }

  return light;
}

// ── Window texture ────────────────────────────────────────────────────────────
//
// Post-bake convention:
//   vPosition.y = building height (metres from ground)
//   vPosition.x, vPosition.z = footprint coords
//   Roof normals: norm.y ≈ +1
//   Side normals: norm.x or norm.z dominant
//
void computeWindowPattern(
  vec3 pos, vec3 norm,
  out float glassDarken, out vec3 windowGlow, out float windowRef
) {
  glassDarken = 0.0;
  windowGlow  = vec3(0.0);
  windowRef   = 0.0;

  // Roof / floor faces — no windows
  // Use both normal check AND height position: computeVertexNormals() can
  // soften roof normals at edges, so also skip the top 2% of building height.
  if (abs(norm.y) > 0.7) return;
  if (pos.y >= vBuildingHeight * 0.98) return;

  // Horizontal UV: pick footprint axis perpendicular to face normal
  // X-facing side  → horizontal varies along Z-footprint
  // Z-facing side  → horizontal varies along X-footprint
  float horizCoord = abs(norm.x) > abs(norm.z) ? pos.z : pos.x;
  float vertCoord  = pos.y;  // height post-bake

  float colUV   = horizCoord * uWindowGridScale;
  float floorUV = vertCoord  * (1.0 / max(uFloorHeight, 0.5));

  // ── Floor bands (horizontal spandrels between floors) ────────────────────
  // mix(0.2, 1.0): 0.2 = glass dark, 1.0 = concrete spandrel
  float floorBand = mix(0.2, 1.0, floor(fract(floorUV - 0.35) * 2.0 + 0.1));

  // ── Window columns ────────────────────────────────────────────────────────
  float winWidth = 1.0 + hash1d(vBuildingId * 4.321) * 0.6;
  float colBand  = mix(0.2, 1.0, floor(fract(colUV + 0.05) * winWidth));

  // Wall where either spandrel or column frame is present
  float wallMask = max(floorBand, colBand);
  float isGlass  = 1.0 - step(0.5, wallMask);

  windowRef   = isGlass;
  glassDarken = 0.35 * isGlass;

  // ── Stochastic lit windows — progressive fill from bottom up ────────────
  vec2 cellId      = floor(vec2(colUV, floorUV));
  float floorLevel = floor(floorUV);
  float colSeed    = fract(cellId.x * 12.9898 + cellId.y * 78.233);
  // Fill order: first by floor (bottom-up), then random within floor.
  // This creates a glass-filling effect rather than all-at-once.
  float maxFloors  = max(vBuildingHeight / uFloorHeight, 1.0) + 1.0;
  float fillOrder  = (floorLevel + colSeed * 0.99) / maxFloors;
  float isLit      = step(fillOrder, uWindowLitFraction);
  windowGlow      += uWindowEmissiveColor * uWindowEmissiveIntensity * isLit * isGlass;

  // ── Sky reflection on glass — procedural skyline (ported from ejemplo.glsl GetEnvMapSkyline) ──
  if (uWindowReflectionIntensity > 0.0 && isGlass > 0.5) {
    vec3 refDir = reflect(-normalize(uCameraPosition - vWorldPosition), vNormal);
    float radial = atan(refDir.z, refDir.x) * 4.0;
    float skyline = floor((sin(5.3456 * radial) + sin(1.234 * radial) + sin(2.177 * radial)) * 0.6);
    radial *= 4.0;
    skyline += floor((sin(5.0 * radial) + sin(1.234 * radial) + sin(2.177 * radial)) * 0.6) * 0.1;
    float heightNorm = clamp(pos.y / max(vBuildingHeight, 1.0), 0.0, 1.0);
    float mask = clamp((refDir.z * 8.0 - skyline - 2.5 + heightNorm * 10.0) * 24.0, 0.0, 1.0);

    vec3 horizonRef = uSunColor * 0.7 + vec3(0.08, 0.06, 0.03);
    vec3 skyRef = mix(horizonRef, vec3(0.35, 0.5, 0.85), pow(heightNorm, 0.5));

    windowGlow += mix(skyRef * vec3(0.1, 0.07, 0.05), skyRef, mask) * uWindowReflectionIntensity;
  }
}

// ── Cement / concrete tile texture ───────────────────────────────────────────
//
// Applies to ALL building surfaces (walls + roofs). Returns a darkening factor
// for tile joints and a small per-tile brightness variation.
// Glass areas (isGlass from computeWindowPattern) override this with glassDarken.
//
float computeCementTexture(vec3 pos, vec3 norm) {
  float tileScale = 0.5;  // ~2m tiles
  vec2 tileUV;

  if (abs(norm.y) > 0.7) {
    tileUV = pos.xz * tileScale;  // roof: footprint XZ plane
  } else {
    float horizCoord = abs(norm.x) > abs(norm.z) ? pos.z : pos.x;
    tileUV = vec2(horizCoord, pos.y) * tileScale;  // wall: same UV axis as windows
  }

  vec2  tileFract  = fract(tileUV);
  float jointWidth = 0.04;
  float jx = step(1.0 - jointWidth, tileFract.x) + step(tileFract.x, jointWidth);
  float jz = step(1.0 - jointWidth, tileFract.y) + step(tileFract.y, jointWidth);
  float joint = clamp(jx + jz, 0.0, 1.0);

  vec2  cellId  = floor(tileUV);
  float tileVar = hash1d(cellId.x * 13.7 + cellId.y * 57.3) * 0.06 - 0.03;

  // joint > 0 darkens the mortar line; tileVar adds subtle per-tile roughness
  return joint * 0.18 - tileVar;
}

// ── Main ──────────────────────────────────────────────────────────────────────

void main() {
  // ── Selection dimming (color-based, not opacity) ───────────────────────
  float opacity = uOpacity;
  vec3 selTint = vec3(1.0);
  if (uSelectedBuildingId >= 0.0) {
    float d = abs(vBuildingId - uSelectedBuildingId);
    if (d > 0.5) selTint = vec3(uUnselectedOpacity);
  }

  // ── Hover highlight ──────────────────────────────────────────────────────
  float hoverGlow = 0.0;
  if (uHoveredBuildingId >= 0.0) {
    float d = abs(vBuildingId - uHoveredBuildingId);
    if (d < 0.5) hoverGlow = 0.45;
  }

  // ── Scanner enabled — bypass material shader, render dark base + scanner only ──
  if (uEnabled > 0.5) {
    // Flat dark colour so scanner emissives pop on a near-black surface
    vec3 darkBase = vColor * selTint * 0.06;

    // ── Face-normal UV for scanner dot grid (world-space normal, view-independent) ──
    vec3 absN = abs(vWorldNormal);
    vec2 surfaceUV;
    if (absN.y > absN.x && absN.y > absN.z) {
      surfaceUV = vPosition.xz;
    } else if (absN.x > absN.z) {
      surfaceUV = vPosition.yz;
    } else {
      surfaceUV = vPosition.xy;
    }

    // ── Anti-aliased dot grid ───────────────────────────────────────────────
    vec2  scaledUV       = surfaceUV * uDotDensity;
    vec2  gridUV         = fract(scaledUV) - 0.5;
    float dotRadius      = 0.2;
    float pixelFootprint = max(length(dFdx(scaledUV)), length(dFdy(scaledUV)));
    float blur           = max(pixelFootprint * 0.8, 0.01);
    float dotPat         = smoothstep(dotRadius + blur, dotRadius - blur, length(gridUV));
    dotPat = mix(dotPat, 0.125, smoothstep(0.15, 0.6, pixelFootprint));

    // ── Scanner sweep ───────────────────────────────────────────────────────
    float height  = uScanRangeMax > 0.0 ? uScanRangeMax : max(vBuildingHeight, uBuildingHeight);
    float cycle   = mod(uTime * uScanSpeed, 6.0);
    float scanY   = (cycle < 4.0) ? (height * cycle * 0.25) : 1.0e9;
    float scanEnv = smoothstep(0.0, 0.5, cycle) * smoothstep(4.0, 3.5, cycle);
    float dScan   = abs(vPosition.y - scanY);

    vec3 dotGlow    = mix(uDotColor, vec3(1.0), 0.35);
    vec3 emissive   = dotGlow * dotPat * uDotOpacity * 3.5;
    float scanCore  = smoothstep(0.15, 0.0, dScan);
    float scanGlowV = smoothstep(2.0,  0.0, dScan);
    emissive += uScanColor * scanCore  * 4.0 * scanEnv;
    emissive += uScanColor * scanGlowV * dotPat * 2.5 * scanEnv;
    emissive += hoverGlow;

    gl_FragColor = vec4(darkBase + emissive, opacity);
    return;
  }

  // ── Wireframe mode — solid color bypasses lighting / windows / fog ──────
  if (uWireframeEnabled > 0.5) {
    gl_FragColor = vec4(uWireframeColor, opacity);
    return;
  }

  // ── Base colour: regional + subtle per-building hue + cement texture ────
  vec3 tintedColor  = vColor * uTintColor * selTint + buildingHue() * 0.05;
  float cementFactor = computeCementTexture(vPosition, vNormal);
  tintedColor = tintedColor * (1.0 - cementFactor * 0.6);

  // ── Lighting ─────────────────────────────────────────────────────────────
  float shadowFactor = 1.0;
  #ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0
      shadowFactor = getShadow(
        directionalShadowMap[0],
        directionalLightShadows[0].shadowMapSize,
        directionalLightShadows[0].shadowIntensity,
        directionalLightShadows[0].shadowBias,
        directionalLightShadows[0].shadowRadius,
        vDirectionalShadowCoord[0]
      );
    #endif
  #endif
  vec3 litBase = computeLit(tintedColor, shadowFactor);

  // ── Procedural window pattern ─────────────────────────────────────────────
  float glassDarken = 0.0;
  vec3  windowGlow  = vec3(0.0);
  float windowRef   = 0.0;
  computeWindowPattern(vPosition, vWorldNormal, glassDarken, windowGlow, windowRef);

  vec3 finalColor = litBase * (1.0 - glassDarken) + windowGlow;

  // ── Sun-tinted fog ──────────────────────────────────────────────────────
  float fogDist = length(vWorldPosition - uCameraPosition);
  float fogFactor = smoothstep(fogNear, fogFar, fogDist);
  vec3 viewDir = normalize(uCameraPosition - vWorldPosition);
  float sunAlignment = max(dot(viewDir, normalize(uSunDir)), 0.0);
  vec3 tintedFog = fogColor + uSunColor * sunAlignment * 0.35;
  finalColor = mix(tintedFog, finalColor, 1.0 - fogFactor);

  gl_FragColor = vec4(finalColor + hoverGlow, 1.0);
}
`;function vr(){let e={uTime:{value:0},uEnabled:{value:0},uDotColor:{value:new H(4419204)},uDotDensity:{value:.25},uDotOpacity:{value:.4},uScanColor:{value:new H(52479)},uScanSpeed:{value:.7},uScanRangeMax:{value:50},uBuildingHeight:{value:20},uOpacity:{value:1},uSelectedBuildingId:{value:-1},uHoveredBuildingId:{value:-1},uUnselectedOpacity:{value:.15},uSunDir:{value:new F(.8,1,.4)},uSunColor:{value:new H(1,1,1)},uAmbientStrength:{value:.35},uTintColor:{value:new H(16777215)},uShininess:{value:0},uWindowEmissiveIntensity:{value:0},uWindowLitFraction:{value:.5},uWindowReflectionIntensity:{value:0},uWindowGridScale:{value:.5},uFloorHeight:{value:3.5},uWindowEmissiveColor:{value:new H(`#ffcc88`)},uCameraPosition:{value:new F(0,10,10)},uNormalStrength:{value:.2},uCementRelief:{value:.15},uAoCavityStrength:{value:.2},uWireframeColor:{value:new H(`#4a4a55`)},uWireframeEnabled:{value:0},fogColor:{value:new H(15789280)},fogNear:{value:100},fogFar:{value:1500}};return new N({uniforms:$e.merge([Qe.lights,e]),vertexShader:gr,fragmentShader:_r,vertexColors:!0,transparent:!0,side:2,lights:!0,fog:!1})}function yr(e,t,n,r,i){let a=e.uniforms;a.uSelectedBuildingId.value=t==null?-1:br(t,r),a.uHoveredBuildingId.value=n==null?-1:br(n,r),a.uUnselectedOpacity.value=i}function br(e,t){for(let n=0;n<t.length;n++)if(t[n]===e)return n;return-1}function xr(e,t){let n=e.uniforms;t.scanColor&&(n.uScanColor.value=new H(t.scanColor)),t.scanSpeed!=null&&(n.uScanSpeed.value=t.scanSpeed),t.dotColor&&(n.uDotColor.value=new H(t.dotColor)),t.dotDensity!=null&&(n.uDotDensity.value=t.dotDensity),t.dotOpacity!=null&&(n.uDotOpacity.value=t.dotOpacity),t.cityMaxHeight!=null&&(n.uScanRangeMax.value=t.cityMaxHeight)}function Sr(e,t){let n=e.uniforms;n.uOpacity.value=t}R();var Cr=`
varying vec2  vUv;
varying vec3  vWorldPos;

// Shadow map declarations
#include <shadowmap_pars_vertex>

void main() {
  vUv        = uv;
  vec4 wp   = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;

  #ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0
      vDirectionalShadowCoord[0] = directionalShadowMatrix[0] * wp;
    #endif
  #endif

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,wr=`
uniform vec3  uRoadColor;
uniform vec3  uCenterColor;   // double yellow
uniform vec3  uLaneColor;     // white dashes
uniform float uDashLen;
uniform float uGapLen;
uniform float uLaneWidth;     // fraction of half-road per lane

varying vec2  vUv;

// <common> defines PI, PI2, RECIPROCAL_PI, and helpers (interleavedGradientNoise,
// vogelDiskSample) that <shadowmap_pars_fragment> references in three >= 0.180.
// Must precede the shadow chunk.
#include <common>

// Shadow map parsing + getShadow()
#include <shadowmap_pars_fragment>

void main() {
  float along = vUv.x;       // metres along road
  float cross = vUv.y;       // -1 .. +1 across road

  vec3 col = uRoadColor;

  // ── Double yellow center line ──────────────────────────────────────────
  // Roads are 1.5-3 units wide, so use generous V-range thresholds
  float centerMark = 1.0 - smoothstep(0.0, 0.28, abs(cross));
  col = mix(col, uCenterColor, centerMark);

  // ── White dashed lane lines at ±laneWidth ─────────────────────────────
  float lanePos = uLaneWidth;
  float laneDist = abs(abs(cross) - lanePos);
  float dashPat = step(0.5, fract(along / (uDashLen + uGapLen)));
  float laneMark = (1.0 - smoothstep(0.0, 0.12, laneDist)) * dashPat;
  col = mix(col, uLaneColor, laneMark);

  // ── Solid white edge lines at V=±1 ────────────────────────────────────
  float edgeDist = 1.0 - abs(cross);
  float edgeMark = 1.0 - smoothstep(0.0, 0.12, edgeDist);
  col = mix(col, uLaneColor, edgeMark * 0.7);

  // ── Crosswalks at regular intervals along the road ────────────────────
  float block = mod(along, 50.0);
  float crosswalk = 1.0 - smoothstep(0.0, 4.0, abs(block - 25.0));
  float barPat = step(0.5, fract(cross * 6.0));
  col = mix(col, vec3(0.25), crosswalk * barPat * 0.5);

  // ── Shadow modulation — buildings cast shadows onto road surface ─────
  float shadowFactor = 1.0;
  #ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0
      shadowFactor = getShadow(
        directionalShadowMap[0],
        directionalLightShadows[0].shadowMapSize,
        directionalLightShadows[0].shadowIntensity,
        directionalLightShadows[0].shadowBias,
        directionalLightShadows[0].shadowRadius,
        vDirectionalShadowCoord[0]
      );
    #endif
  #endif
  // Darken road colour in shadow — subtler than buildings (asphalt scatters less)
  col = mix(col, col * 0.5, 1.0 - shadowFactor);

  gl_FragColor = vec4(col, 1.0);
}
`;function Tr(){let e={uRoadColor:{value:new H(4473924)},uCenterColor:{value:new H(16763904)},uLaneColor:{value:new H(13421772)},uDashLen:{value:3},uGapLen:{value:5},uLaneWidth:{value:.35}};return new N({uniforms:$e.merge([Qe.lights,e]),vertexShader:Cr,fragmentShader:wr,side:2,lights:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}R();function Er(e,t={}){let{camera:n}=a(),{cooldownMs:r=4e3,enableOrbitAfterFlyto:i=!0,onUserInteract:o}=t,s=(0,U.useRef)([]),c=(0,U.useRef)(!1),l=(0,U.useRef)(0),u=(0,U.useRef)(`idle`),f=(0,U.useRef)(0),p=(0,U.useRef)(null),m=(0,U.useRef)(null),h=(0,U.useRef)(!1),g=(0,U.useRef)(new F);(0,U.useEffect)(()=>{if(!e){s.current=[],u.current=`idle`;return}c.current=!1;let t=e.clone();u.current!==`idle`&&u.current!==`done`?s.current.push({type:`flyto`,target:t,addedAt:performance.now()}):(u.current=`flyto`,g.current.copy(t),l.current=performance.now())},[e]);let _=(0,U.useCallback)(()=>{if(s.current.length===0||performance.now()-l.current<r)return;let e=s.current.shift();e.type===`flyto`?(u.current=`flyto`,g.current.copy(e.target)):e.type===`orbit`&&(u.current=`orbiting`,g.current.copy(e.target),f.current=0),l.current=performance.now()},[r]),v=(0,U.useCallback)(()=>{c.current=!0,u.current=`done`,s.current=[],m.current&&(m.current.autoRotate=!1),p.current&&=(clearTimeout(p.current),null),o?.()},[o]);d(e=>{let t=e.controls;if(!t||(m.current=t,h.current||=(t.addEventListener(`start`,v),!0),(u.current===`idle`||u.current===`done`)&&_(),c.current))return;let r=g.current;if(r.lengthSq()===0&&u.current===`idle`)return;let a=new F(0,100,-200),o=new F().copy(r).add(a);if(u.current===`flyto`){let e=.04;if(n.position.lerp(o,e),t.target.lerp(r,e),t.update(),n.position.distanceTo(o)<5){u.current=`waiting`;let e=r.clone();p.current=setTimeout(()=>{c.current||(i&&s.current.push({type:`orbit`,target:e,addedAt:performance.now()}),u.current=`done`)},1e3)}return}if(u.current===`waiting`){n.position.copy(o),t.target.copy(r),t.update();return}if(u.current===`orbiting`){let e=Math.PI*2;if(f.current+=.8*.016,f.current>=e){u.current=`done`;return}let i=n.position.distanceTo(r);n.position.x=r.x+i*Math.sin(f.current),n.position.z=r.z+i*Math.cos(f.current),n.position.y=r.y+100,t.target.copy(r),t.update();return}}),(0,U.useEffect)(()=>()=>{p.current&&clearTimeout(p.current),m.current&&h.current&&(m.current.removeEventListener(`start`,v),h.current=!1)},[])}function Dr(e){return{uuid:e.uuid,name:e.name||e.type,type:e.type,visible:e.visible,position:e.position?{x:e.position.x,y:e.position.y,z:e.position.z}:{x:0,y:0,z:0},rotation:e.rotation?{x:e.rotation.x,y:e.rotation.y,z:e.rotation.z}:{x:0,y:0,z:0},scale:e.scale?{x:e.scale.x,y:e.scale.y,z:e.scale.z}:{x:1,y:1,z:1},children:(e.children??[]).map(Dr)}}function Or(e,t={}){t[e.uuid]=e;for(let n of e.children??[])Or(n,t);return t}function kr({snapshotVersion:e=0}){let t=a(e=>e.scene),n=w(e=>e.setSceneGraphTree);return(0,U.useEffect)(()=>{let e=Dr(t),r=Or(t);n(e,r)},[t,e,n]),null}R();function Ar(){let{gl:e,invalidate:t}=a();return(0,U.useEffect)(()=>{let n=e.domElement;if(!n)return;let r=e=>{e.preventDefault(),console.warn(`[ThreeRenderer] WebGL context lost — attempting restore...`)},i=()=>{console.log(`[ThreeRenderer] WebGL context restored — invalidating`),t()};return n.addEventListener(`webglcontextlost`,r),n.addEventListener(`webglcontextrestored`,i),()=>{n.removeEventListener(`webglcontextlost`,r),n.removeEventListener(`webglcontextrestored`,i)}},[e,t]),null}function jr(){let{invalidate:e}=a();return(0,U.useEffect)(()=>w.subscribe(()=>e()),[e]),null}function Mr({color:e}){let{scene:t,invalidate:n}=a();return(0,U.useEffect)(()=>{e&&t.background?.set(e),n()},[e,t,n]),null}function Nr(){let{gl:e}=a(),t=(0,U.useRef)(e);t.current=e;let n=w(e=>e.toneMappingType),r=w(e=>e.toneMappingExposure),i=w(e=>e.shadowMapType);return(0,U.useEffect)(()=>{t.current.toneMapping=n,t.current.toneMappingExposure=r},[n,r]),(0,U.useEffect)(()=>{t.current.shadowMap.enabled=!0,t.current.shadowMap.type=i,t.current.shadowMap.needsUpdate=!0},[i]),null}function Pr({fog:e}){let{scene:t,invalidate:n}=a(),r=(0,U.useRef)(t);r.current=t;let i=(0,U.useRef)(null);i.current||=new De(new H(`#000000`),1,1e3);let o=i.current;return(0,U.useEffect)(()=>{let e=()=>{let e=w.getState();if(e.fogEnabled??!0){let t=1-Math.min(.98,(e.fogDensity??0)*50),n=Math.max(1,(e.fogNear??50)*t),i=Math.max(n+1,(e.fogFar??800)*t);o.color.set(e.fogColor??`#f0ece0`),o.near=n,o.far=i;let a=r.current;a.fog!==o&&(a.fog=o)}else r.current.fog&&(r.current.fog=null);n()};return e(),w.subscribe(e)},[n,o]),null}function Fr({flyToTarget:e}){Er(e??null,{cooldownMs:4e3,enableOrbitAfterFlyto:!1});let{camera:t,invalidate:n}=a(),r=a(e=>e.controls),i=w(e=>e.camPitch),o=w(e=>e.camBearing),s=w(e=>e.camZoom);return(0,U.useEffect)(()=>{if(!r)return;let e=lt.degToRad(90-i),a=lt.degToRad(o),c=5e3*.5**(s/3),l=r.target;t.position.set(l.x+c*Math.sin(e)*Math.sin(a),l.y+c*Math.cos(e),l.z+c*Math.sin(e)*Math.cos(a)),r.update(),n()},[i,o,s,r,t,n]),null}var Ir=({mesh:e,geometry:t,scannerParams:n,buildingHeight:r,opacity:i=1,onClick:a,onPointerMove:o,onPointerOut:s})=>{let c=(0,U.useRef)(null);if(!c.current){c.current=hr();let e=c.current;e.uniforms.uEnabled.value=1,e.uniforms.uScanColor.value=new H(n.scanColor),e.uniforms.uScanSpeed.value=n.scanSpeed,e.uniforms.uDotColor.value=new H(n.dotColor),e.uniforms.uDotDensity.value=n.dotDensity,e.uniforms.uDotOpacity.value=n.dotOpacity,e.uniforms.uBuildingHeight.value=r,e.uniforms.uScanRangeMax.value=n.cityMaxHeight&&n.cityMaxHeight>0?n.cityMaxHeight:r*1.1}let l=c.current;return d(({invalidate:e},t)=>{l.uniforms.uTime&&(l.uniforms.uTime.value+=t,e())}),(0,U.useEffect)(()=>{l.uniforms.uOpacity&&(l.uniforms.uOpacity.value=i)},[i,l]),(0,W.jsx)(`mesh`,{geometry:t,position:e.position.toArray(),rotation:[e.rotation.x,e.rotation.y,e.rotation.z],scale:e.scale.toArray(),onClick:a,onPointerMove:o,onPointerOut:s,userData:e.userData,castShadow:e.castShadow,receiveShadow:e.receiveShadow,children:(0,W.jsx)(`primitive`,{object:l,attach:`material`})})},Lr=({geometry:e,idMap:t,hoveredBuildingId:n,selectedBuildingId:r,scannerActive:i,scannerParams:a,unselectedOpacity:o,onClick:s,onDoubleClick:c,onPointerMove:l,onPointerOut:u})=>{let f=(0,U.useRef)(null);f.current||=vr();let p=f.current,m=(0,U.useRef)(null);m.current||=new qe({depthPacking:je,side:2});let h=m.current;(0,U.useEffect)(()=>{yr(p,r??null,n??null,t,o)},[p,r,n,t,o]),(0,U.useEffect)(()=>{let e=p.uniforms,t=()=>{let t=w.getState(),[n,r,i]=se.getSunDirection(t.sunAngle??180,t.sunElevation??50);e.uSunDir.value.set(n,r,i),t.sunColor&&e.uSunColor.value.set(t.sunColor),e.uAmbientStrength.value=t.ambientIntensity??.3,Sr(p,t.buildingsOpacity??1),e.uTintColor&&(e.uTintColor.value.set(t.buildingTint??`#ffffff`),e.uShininess.value=t.buildingShininess??0,p.wireframe=t.buildingWireframe??!1),e.uWireframeColor&&(e.uWireframeColor.value.set(t.wireframeColor??`#4a4a55`),e.uWireframeEnabled.value=+!!t.buildingWireframe),e.uWindowEmissiveIntensity&&(e.uWindowEmissiveIntensity.value=t.windowEmissiveIntensity??0,e.uWindowLitFraction.value=t.windowLitFraction??.5,e.uWindowReflectionIntensity.value=t.windowReflectionIntensity??0,e.uWindowGridScale.value=t.windowGridScale??.5,e.uWindowEmissiveColor.value.set(t.windowEmissiveColor??`#ffcc88`),e.uFloorHeight.value=t.floorHeight??3.5,e.uNormalStrength.value=t.normalStrength??.2,e.uCementRelief.value=t.cementRelief??.15,e.uAoCavityStrength.value=t.aoCavityStrength??.2),e.fogColor&&(e.fogColor.value.set(t.fogColor??`#f0ece0`),e.fogNear.value=t.fogNear??50,e.fogFar.value=t.fogFar??800)};return t(),w.subscribe(t)},[p]),(0,U.useEffect)(()=>{i?(p.uniforms.uEnabled.value=1,a&&xr(p,a)):p.uniforms.uEnabled.value=0},[p,i,a]);let g=(0,U.useRef)(null);(0,U.useEffect)(()=>{g.current=p},[p]);let _=(0,U.useRef)(0),v=(0,U.useRef)(NaN),y=(0,U.useRef)(NaN),b=(0,U.useRef)(NaN);return d(({camera:e,invalidate:t},n)=>{let r=g.current;if(!r)return;let a=r.uniforms;i&&(_.current+=n,a.uTime.value=_.current,t());let o=e.position.x,s=e.position.y,c=e.position.z;(o!==v.current||s!==y.current||c!==b.current)&&(a.uCameraPosition.value.set(o,s,c),v.current=o,y.current=s,b.current=c)}),(0,W.jsx)(`mesh`,{geometry:e,onClick:s,onDoubleClick:c,onPointerMove:l,onPointerOut:u,userData:{isMergedBuildings:!0,idMap:t},castShadow:!0,receiveShadow:!0,customDepthMaterial:h,children:(0,W.jsx)(`primitive`,{object:p,attach:`material`})})},Rr=({mesh:e,colorOverride:t})=>{let n=(0,U.useMemo)(()=>e.geometry.clone(),[e.geometry]),r=(0,U.useMemo)(()=>Tr(),[]);return(0,U.useEffect)(()=>{t&&r.uniforms.uRoadColor.value.set(t)},[r,t]),(0,W.jsx)(`mesh`,{geometry:n,receiveShadow:!0,children:(0,W.jsx)(`primitive`,{object:r,attach:`material`})})},zr=({mesh:e,hovered:t,selected:n,scannerActive:r,scannerParams:i,unselectedOpacity:a,onClick:o,onPointerMove:s,onPointerOut:c,colorOverride:l,opacityOverride:u})=>{let d=(0,U.useMemo)(()=>e.geometry.clone(),[e.geometry]),f=e.material,p=e.userData.buildingHeight??20,m=(0,U.useMemo)(()=>f.opacity??1,[]),h=n===!1?a:1,g=t?.45:1,_=m*h*g,v=n===!0?.9:n===!1?.85:1,y=(0,U.useRef)(null);(0,U.useEffect)(()=>{y.current&&(y.current.opacity=_,y.current.transparent=_<1||f.transparent,y.current.needsUpdate=!0)},[_,f.transparent]);let b=(0,U.useMemo)(()=>l?new H(l):f.color,[l,f.color]);return r?(0,W.jsx)(Ir,{mesh:e,geometry:d,scannerParams:i??{scanColor:`#00ccff`,scanSpeed:.7,dotColor:`#436e84`,dotDensity:.33,dotOpacity:.8},buildingHeight:p,opacity:v,onClick:o,onPointerMove:s,onPointerOut:c},`scanner-${e.uuid}`):(0,W.jsx)(`mesh`,{geometry:d,position:e.position.toArray(),rotation:[e.rotation.x,e.rotation.y,e.rotation.z],scale:e.scale.toArray(),onClick:o,onPointerMove:s,onPointerOut:c,userData:e.userData,castShadow:e.castShadow,receiveShadow:e.receiveShadow,children:(0,W.jsx)(`meshStandardMaterial`,{ref:y,color:b,opacity:u??_,transparent:(u??_)<1||f.transparent,roughness:f.roughness,metalness:f.metalness,side:f.side,wireframe:f.wireframe})})},Br=({line:e})=>{let t=e.geometry,n=t.getAttribute(`position`),r=t.index,i=e.material;return n?(0,W.jsxs)(`lineSegments`,{children:[(0,W.jsxs)(`bufferGeometry`,{children:[(0,W.jsx)(`bufferAttribute`,{attach:`attributes-position`,args:[n.array,n.itemSize],count:n.count}),r&&(0,W.jsx)(`bufferAttribute`,{attach:`index`,args:[r.array,r.itemSize],count:r.count})]}),(0,W.jsx)(`lineBasicMaterial`,{color:i.color,transparent:i.transparent,opacity:i.opacity})]}):null},Vr=({dl:e})=>{let t=(0,U.useRef)(null),n=w(e=>e.sceneNodes.find(e=>e.schemaType===`shadow-settings`)?.values?.enabled??!0),r=w(e=>{let t=e.sceneNodes.find(e=>e.schemaType===`shadow-settings`);return Number(t?.values?.mapSize??`1024`)}),i=w(e=>e.sceneNodes.find(e=>e.schemaType===`shadow-settings`)?.values?.bias??.005),a=w(e=>e.sceneNodes.find(e=>e.schemaType===`shadow-settings`)?.values?.pcfRadius??3);return(0,U.useEffect)(()=>{if(t.current&&e.castShadow&&n){let e=t.current.shadow.map;e?.dispose?.(),t.current.shadow.mapSize.set(r,r),e&&(e.needsUpdate=!0)}},[r,n,e.castShadow]),(0,U.useEffect)(()=>{t.current&&e.castShadow&&n&&(t.current.target.updateMatrixWorld(),t.current.shadow.camera.updateProjectionMatrix())},[e.position.x,e.position.y,e.position.z,e.castShadow,n]),(0,W.jsx)(`directionalLight`,{ref:t,color:e.color,intensity:e.intensity,position:e.position.toArray(),castShadow:e.castShadow&&n,"shadow-mapSize-width":r,"shadow-mapSize-height":r,"shadow-bias":i,"shadow-radius":a,"shadow-camera-near":1,"shadow-camera-far":2e3,"shadow-camera-left":-400,"shadow-camera-right":400,"shadow-camera-top":400,"shadow-camera-bottom":-400})};function Hr({object:e,hoveredBuildingId:t,selectedBuildingId:n,scannerActive:r,scannerParams:i,unselectedOpacity:a,onClick:o,onDoubleClick:s,onPointerMove:c,onPointerOut:l,colorOverride:u,opacityOverride:d}){let f=w(e=>e.roadColor),p=w(e=>e.roadsOpacity),m=w(e=>e.parkColor),h=w(e=>e.parksOpacity),g=w(e=>e.riverColor),_=w(e=>e.riverOpacity),v=w(e=>e.seaColor),y=w(e=>e.seaOpacity);if(e.type===`Group`)return(0,W.jsx)(`group`,{children:e.children.map(e=>(0,W.jsx)(Hr,{object:e,hoveredBuildingId:t,selectedBuildingId:n,scannerActive:r,scannerParams:i,unselectedOpacity:a,onClick:o,onDoubleClick:s,onPointerMove:c,onPointerOut:l},e.uuid))});if(e instanceof L&&e.userData.isMergedBuildings){let u=e.geometry,d=e.userData.idMap;return d?(0,W.jsx)(Lr,{geometry:u,idMap:d,hoveredBuildingId:t,selectedBuildingId:n,scannerActive:r,scannerParams:i,unselectedOpacity:a,onClick:o,onDoubleClick:s,onPointerMove:c,onPointerOut:l}):null}if(e instanceof L&&e.userData.buildingId){let s=e.userData.buildingId;return(0,W.jsx)(zr,{mesh:e,hovered:t===s,selected:n==null?null:n!=null&&n===s,scannerActive:!!r,scannerParams:i,unselectedOpacity:a,onClick:o,onPointerMove:c,onPointerOut:l})}if(e instanceof L){let t=e.userData.meshType;return t===`road`?(0,W.jsx)(Rr,{mesh:e,colorOverride:f}):(0,W.jsx)(zr,{mesh:e,hovered:!1,selected:null,scannerActive:!1,unselectedOpacity:1,colorOverride:t===`road`?f:t===`park`?m:t===`river`?g:t===`sea`?v:u,opacityOverride:t===`road`?p:t===`park`?h:t===`river`?_:t===`sea`?y:d})}if(e instanceof Fe)return(0,W.jsx)(Br,{line:e});if(e instanceof Ee){let t=e;return(0,W.jsx)(`pointLight`,{color:t.color,intensity:t.intensity,distance:t.distance,decay:t.decay,position:t.position.toArray()})}if(e instanceof we)return(0,W.jsx)(Vr,{dl:e});if(e instanceof We||e instanceof Ae)return(0,W.jsx)(`primitive`,{object:e});if(e instanceof Ie){let t=e;return(0,W.jsx)(`hemisphereLight`,{color:t.color,groundColor:t.groundColor,intensity:t.intensity})}return null}function Ur(){let{scene:e}=a(),t=w(e=>e.buildingsEnabled),n=w(e=>e.roadsEnabled),r=w(e=>e.parksEnabled),i=w(e=>e.riverEnabled),o=w(e=>e.seaEnabled);return(0,U.useEffect)(()=>{let a=(t,n)=>{let r=e.getObjectByName(t);r&&(r.visible=n)};a(`Buildings`,t??!0),e.traverse(e=>{e.name.startsWith(`Roads_`)&&(e.visible=n??!0),e.name.startsWith(`Park_`)&&(e.visible=r??!0)}),a(`River`,i??!0),a(`Sea`,o??!0)},[t,n,r,i,o,e]),null}function Wr({cameraControlsRef:e,autoRotate:t}){let n=(0,U.useRef)(null);return(0,U.useEffect)(()=>(e&&n.current&&(e.current=n.current),()=>{e&&(e.current=null)}),[e]),(0,W.jsx)(f,{ref:n,enableDamping:!0,dampingFactor:.1,minDistance:O.MIN_DISTANCE,maxDistance:O.MAX_DISTANCE,minPolarAngle:0,maxPolarAngle:lt.degToRad(O.MAX_POLAR_DEG),autoRotate:t,autoRotateSpeed:2,makeDefault:!0})}var Gr=()=>{let e=(0,U.useRef)(null),[t,n]=(0,U.useState)(()=>w.getState().ambientLightEnabled??!0);return(0,U.useEffect)(()=>w.subscribe(()=>{n(w.getState().ambientLightEnabled??!0)}),[]),(0,U.useEffect)(()=>{let t=()=>{let t=w.getState();e.current&&(e.current.color.set(t.ambientColor??`#99bbdd`),e.current.intensity=(t.ambientIntensity??.3)*(t.ambientBoostFactor??1))};return t(),w.subscribe(t)},[]),t?(0,W.jsx)(`ambientLight`,{ref:e}):null},Kr=()=>{let e=(0,U.useRef)(null);return(0,U.useEffect)(()=>{let t=()=>{let t=w.getState();e.current&&(e.current.color.set(t.hemiLightSkyColor??`#88ccff`),e.current.groundColor.set(t.hemiLightGroundColor??`#332211`),e.current.intensity=t.hemiLightIntensity??.3)};return t(),w.subscribe(t)},[]),(0,W.jsx)(`hemisphereLight`,{ref:e,userData:{isBaseLight:!0,lightType:`hemisphere`}})},qr=()=>{let e=w(e=>e.ssaoSamples),t=w(e=>e.ssaoRadius),n=w(e=>e.ssaoIntensity),r=w(e=>e.ssaoLuminanceInfluence),i=w(e=>e.bloomLuminanceThreshold),a=w(e=>e.bloomLuminanceSmoothing),o=w(e=>e.bloomIntensityOverride),s=w(e=>e.bloomRadius);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`group`,{name:`SSAO`,userData:{isEffect:!0,effectType:`SSAO`,params:{samples:e,radius:t,intensity:n,luminanceInfluence:r}}}),(0,W.jsx)(`group`,{name:`Bloom`,userData:{isEffect:!0,effectType:`Bloom`,params:{luminanceThreshold:i,luminanceSmoothing:a,intensity:o,radius:s}}})]})},Jr=()=>{let e=w(e=>e.ssaoSamples),t=w(e=>e.ssaoRings),n=w(e=>e.ssaoRadius),r=w(e=>e.ssaoIntensity),i=w(e=>e.ssaoBias),a=w(e=>e.ssaoLuminanceInfluence),o=w(e=>e.ssaoColor),s=w(e=>e.bloomLuminanceThreshold),c=w(e=>e.bloomLuminanceSmoothing),l=w(e=>e.bloomIntensityOverride),u=w(e=>e.bloomRadius),d=w(e=>e.bloomLevels),f=w(e=>e.bloomMipmapBlur),p=w(e=>e.toneMappingContrast),m=w(e=>e.toneMappingSaturation);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(fr,{samples:e,rings:t,radius:n,intensity:r,bias:i,luminanceInfluence:a,color:(0,U.useMemo)(()=>o?new H(o):void 0,[o]),worldDistanceThreshold:200,worldDistanceFalloff:100,worldProximityThreshold:20,worldProximityFalloff:20}),(0,W.jsx)(lr,{luminanceThreshold:s,luminanceSmoothing:c,intensity:l,radius:u,levels:d,mipmapBlur:f}),(0,W.jsx)(ur,{brightness:0,contrast:p-1}),(0,W.jsx)(dr,{saturation:m-1,hue:0})]})},Yr=500;function Xr(e,t){let n=Math.PI/180*t,r=Math.PI/180*e;return[Yr*Math.cos(n)*Math.sin(r),Yr*Math.sin(n),Yr*Math.cos(n)*Math.cos(r)]}var Zr=({turbidity:e=2,rayleigh:t=1,mieCoefficient:n=.005,mieDirectionalG:r=.8})=>{let i=(0,U.useRef)(null),a=(0,U.useMemo)(()=>{let e=w.getState();return Xr(e.sunAngle??135,e.sunElevation??35)},[]);return(0,U.useEffect)(()=>{let e=()=>{let e=w.getState(),[t,n,r]=Xr(e.sunAngle??135,e.sunElevation??35),a=(i.current?.children[0]?.material)?.uniforms?.sunPosition;a&&a.value.set(t,n,r)};return e(),w.subscribe(e)},[]),(0,W.jsx)(`group`,{ref:i,children:(0,W.jsx)(It,{distance:45e4,sunPosition:a,turbidity:e,rayleigh:t,mieCoefficient:n,mieDirectionalG:r})})},Qr=({shadowMapSize:e=2048,shadowBias:t=.005,shadowNormalBias:n=0,shadowsEnabled:r=!0,pcfRadius:i=3})=>{let a=(0,U.useRef)(null);(0,U.useEffect)(()=>{if(a.current&&r){let t=a.current.shadow.map;t?.dispose?.(),a.current.shadow.mapSize.set(e,e),t&&(t.needsUpdate=!0)}},[e,r]),(0,U.useEffect)(()=>{let e=()=>{let e=w.getState(),t=a.current;if(!t)return;e.sunColor&&t.color.set(e.sunColor),t.intensity=(e.sunElevation??35)<0?0:e.directionalIntensity??.8;let n=(e.sunElevation??35)*(Math.PI/180),r=(e.sunAngle??135)*(Math.PI/180);t.position.set(500*Math.cos(n)*Math.sin(r),500*Math.sin(n),500*Math.cos(n)*Math.cos(r))};return e(),w.subscribe(e)},[]);let o=(0,U.useRef)([NaN,NaN,NaN]);return d(({invalidate:e})=>{if(!a.current)return;let[t,n,r]=o.current,{x:i,y:s,z:c}=a.current.position;(i!==t||s!==n||c!==r)&&(o.current=[i,s,c],a.current.target.updateMatrixWorld(),a.current.shadow.camera.updateProjectionMatrix(),e())}),(0,W.jsx)(`directionalLight`,{ref:a,castShadow:r,"shadow-mapSize-width":e,"shadow-mapSize-height":e,"shadow-bias":t,"shadow-normalBias":n,"shadow-radius":i,"shadow-camera-near":1,"shadow-camera-far":2e3,"shadow-camera-left":-1e3,"shadow-camera-right":1e3,"shadow-camera-top":1e3,"shadow-camera-bottom":-1e3})};function $r({sceneObjects:e,onBuildingHover:t,onBuildingClick:n,onBuildingDoubleClick:r,onCanvasDoubleClick:i,sky:a,lights:o,cameraControlsRef:s,fog:c,toneMapping:l,shadowConfig:u,sceneBackground:d,flyToTarget:f,autoRotate:p,hoveredBuildingId:m,selectedBuildingId:h,scannerActive:g,scannerParams:_,unselectedOpacity:v=.15,statsContainerRef:y,statsOpen:b}){let x=(0,U.useRef)(null),S=w(e=>e.shadowNormalBias),C=w(e=>e.sceneNodes),T=(0,U.useCallback)(e=>{if(!e)return null;let t=e.object;if(t.userData.isMergedBuildings){let n=e.face,r=t.geometry.getAttribute?.(`buildingId`);if(n&&r){let e=r.getX(n.a),i=t.userData.idMap;if(i&&e>=0&&e<i.length)return i[e]}return null}return t.userData?.buildingId??null},[]),E=(0,U.useCallback)(e=>{e.stopPropagation();let n=T(e.intersections?.[0]);n!==x.current&&(x.current=n,t?.(n))},[t,T]),ee=(0,U.useCallback)(e=>{e.stopPropagation();let t=T(e.intersections?.[0]);t&&n?.(t)},[n,T]),D=(0,U.useCallback)(e=>{e.stopPropagation();let t=T(e.intersections?.[0]);t&&r?.(t)},[r,T]),O=(0,U.useCallback)(()=>{x.current=null,t?.(null)},[t]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(jr,{}),(0,W.jsx)(Nr,{}),(0,W.jsx)(Ur,{}),(0,W.jsx)(Mr,{color:d}),(0,W.jsx)(Pr,{fog:c}),(0,W.jsx)(Fr,{flyToTarget:f}),b&&y&&(0,W.jsx)(Pt,{parent:y,showPanel:0,className:`three-stats-override`}),(0,W.jsx)(kr,{}),(0,W.jsx)(Wr,{cameraControlsRef:s,autoRotate:p}),a&&(0,W.jsx)(Zr,{turbidity:a.turbidity??2,rayleigh:a.rayleigh??1,mieCoefficient:a.mieCoefficient??.005,mieDirectionalG:a.mieDirectionalG??.8}),o?.ambient&&(0,W.jsx)(Gr,{}),o?.directional&&(0,W.jsx)(Qr,{shadowMapSize:u?.mapSize??2048,shadowBias:u?.bias??.005,shadowNormalBias:S,shadowsEnabled:u?.enabled??!0,pcfRadius:u?.pcfRadius??3}),!C.some(e=>e.schemaType===`hemisphere-light`)&&(0,W.jsx)(Kr,{}),(0,W.jsx)(`group`,{name:`effects`,children:(0,W.jsx)(qr,{})}),(0,W.jsxs)(`group`,{name:`scene-config`,children:[(0,W.jsx)(`group`,{name:`fog`,userData:{isConfig:!0,configType:`fog`,params:{enabled:c?.enabled??!0,color:c?.color??`#f0ece0`,density:c?.density??2e-4,near:c?.near??50,far:c?.far??800}}}),(0,W.jsx)(`group`,{name:`tone-mapping`,userData:{isConfig:!0,configType:`tone-mapping`,params:{exposure:l?.exposure??1.2}}}),(0,W.jsx)(`group`,{name:`shadow-settings`,userData:{isConfig:!0,configType:`shadow-settings`,params:{enabled:u?.enabled??!0,mapSize:u?.mapSize??2048,bias:u?.bias??.005,pcfRadius:u?.pcfRadius??3}}}),(0,W.jsx)(`group`,{name:`sky`,userData:{isConfig:!0,configType:`sky`,params:{turbidity:a?.turbidity??2,rayleigh:a?.rayleigh??1,mieCoefficient:a?.mieCoefficient??.005,mieDirectionalG:a?.mieDirectionalG??.8}}})]}),(0,W.jsxs)(ar,{enableNormalPass:!0,children:[(0,W.jsx)(Jr,{}),(0,W.jsx)(`group`,{attach:void 0,children:(e??[]).map(e=>(0,W.jsx)(Hr,{object:e,hoveredBuildingId:m,selectedBuildingId:h,scannerActive:g,scannerParams:_,unselectedOpacity:v,onDoubleClick:D,onClick:ee,onPointerMove:E,onPointerOut:O},e.uuid))})]})]})}var ei=e=>{let t=w.getState().toneMappingType,n=w.getState().toneMappingExposure,r=w.getState().shadowMapType;return(0,W.jsxs)(u,{frameloop:`always`,shadows:`basic`,camera:{position:[800,600,800],fov:45,near:1,far:1e6},gl:{antialias:!0,toneMapping:t,toneMappingExposure:n,powerPreference:`high-performance`},onCreated:({gl:e})=>{e.shadowMap.type=r},style:{width:`100%`,height:`100%`,display:`block`},onPointerMissed:e.onCanvasDoubleClick,onDoubleClick:e.onCanvasDoubleClick,children:[(0,W.jsx)(Ar,{}),(0,W.jsx)($r,{...e})]})};_(),R();var ti={width:28,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:13,borderRadius:4},ni=({statsContainerRef:e,statsOpen:t,onToggleStats:n,onCloseStats:r})=>{let[i,a]=(0,U.useState)(0),o=(0,U.useRef)(0),s=(0,U.useRef)(0);return(0,U.useEffect)(()=>{let e;o.current=performance.now();let t=()=>{s.current++;let n=performance.now(),r=n-o.current;r>=500&&(a(Math.round(s.current*1e3/r)),s.current=0,o.current=n),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},[]),(0,W.jsxs)(g,{opened:t,onClose:r,position:`bottom-start`,withArrow:!0,shadow:`md`,trapFocus:!1,children:[(0,W.jsx)(g.Target,{children:(0,W.jsx)(`div`,{onClick:n,style:{cursor:`pointer`,width:28,height:24,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:10,fontWeight:700,fontFamily:`monospace`,color:`var(--mantine-color-dimmed)`,background:`var(--mantine-color-default)`,border:`1px solid var(--mantine-color-default-border)`,borderRadius:`var(--mantine-radius-sm)`,lineHeight:1,userSelect:`none`},children:i})}),(0,W.jsx)(g.Dropdown,{p:0,style:{overflow:`hidden`},children:(0,W.jsx)(`div`,{ref:e,style:{width:80,height:48}})})]})},ri=({controlsRef:e})=>{let t=(0,U.useCallback)(()=>{let t=e.current;if(!t)return;let n=t.object,r=new F;n.getWorldDirection(r),n.position.addScaledVector(r,50),t.update()},[e]),n=(0,U.useCallback)(()=>{let t=e.current;if(!t)return;let n=t.object,r=new F;n.getWorldDirection(r),n.position.addScaledVector(r,-50),t.update()},[e]),r=(0,U.useCallback)(()=>{let t=e.current;t&&t.reset()},[e]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(m,{label:`Zoom in`,withArrow:!0,position:`right`,children:(0,W.jsx)(S,{variant:`default`,size:`sm`,style:ti,onClick:t,children:`+`})}),(0,W.jsx)(m,{label:`Zoom out`,withArrow:!0,position:`right`,children:(0,W.jsx)(S,{variant:`default`,size:`sm`,style:ti,onClick:n,children:`−`})}),(0,W.jsx)(m,{label:`Reset Camera`,withArrow:!0,position:`right`,children:(0,W.jsx)(S,{variant:`default`,size:`sm`,style:ti,onClick:r,children:`⌂`})})]})},ii=({onTheatreToggle:e})=>e?(0,W.jsx)(m,{label:`Open Theatre`,withArrow:!0,position:`right`,children:(0,W.jsx)(S,{variant:`default`,size:`sm`,onClick:e,style:ti,children:`🎭`})}):null,ai=({controlsRef:e,onTheatreToggle:t,statsContainerRef:n,statsOpen:r,onToggleStats:i,onCloseStats:a})=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{style:{position:`absolute`,top:8,left:8,zIndex:10,display:`flex`,flexDirection:`column`,gap:2,pointerEvents:`auto`},children:[(0,W.jsx)(ri,{controlsRef:e}),(0,W.jsx)(ni,{statsContainerRef:n,statsOpen:r,onToggleStats:i,onCloseStats:a})]}),(0,W.jsx)(`div`,{style:{position:`absolute`,top:116,left:8,zIndex:10,pointerEvents:`auto`},children:(0,W.jsx)(ii,{onTheatreToggle:t})})]});_();var oi=({sceneObjects:e,onBuildingHover:t,onBuildingClick:n,onBuildingDoubleClick:r,onCanvasDoubleClick:i,onTheatreToggle:a,sky:o,lights:s,fog:c,toneMapping:l,shadowConfig:u,sceneBackground:d,flyToTarget:f,autoRotate:p,unselectedOpacity:m,hoveredBuildingId:h,selectedBuildingId:g,scannerActive:_,scannerParams:v})=>{let y=(0,U.useRef)(null),b=(0,U.useRef)(null),[x,S]=(0,U.useState)(!1),w=(0,U.useCallback)(()=>S(e=>!e),[]),T=(0,U.useCallback)(()=>S(!1),[]);return(0,U.useEffect)(()=>{let e=`three-stats-override`;if(document.getElementById(e))return;let t=document.createElement(`style`);return t.id=e,t.textContent=`.three-stats-override{position:relative!important;top:auto!important;left:auto!important;z-index:auto!important}`,document.head.appendChild(t),()=>{document.getElementById(e)?.remove()}},[]),(0,W.jsxs)(C,{style:{width:`100%`,height:`100%`,position:`relative`,overflow:`hidden`},children:[(0,W.jsx)(ei,{sceneObjects:e,onBuildingHover:t,onBuildingClick:n,onBuildingDoubleClick:r,onCanvasDoubleClick:i,sky:o,lights:s,fog:c,toneMapping:l,shadowConfig:u,sceneBackground:d,flyToTarget:f,autoRotate:p,cameraControlsRef:y,unselectedOpacity:m,hoveredBuildingId:h,selectedBuildingId:g,scannerActive:_,scannerParams:v,statsContainerRef:b,statsOpen:x}),(0,W.jsx)(ai,{controlsRef:y,onTheatreToggle:a,statsContainerRef:b,statsOpen:x,onToggleStats:w,onCloseStats:T})]})};R(),ut();function si(e){let t=1/0,n=-1/0,r=1/0,i=-1/0;for(let a of e)a.x<t&&(t=a.x),a.x>n&&(n=a.x),a.y<r&&(r=a.y),a.y>i&&(i=a.y);return{minX:t,maxX:n,minY:r,maxY:i}}function ci(e){return e.reduce((e,t)=>e.clone().add(t),new B(0,0)).divideScalar(e.length)}function li(e,t,n){return e.map(e=>{let r=e.x-t.x,i=e.y-t.y;return new B(t.x+r*n,t.y+i*n)})}function ui(e,t,n){for(let t of e)if(!isFinite(t.x)||!isFinite(t.y))return new Ze;let r=new Be;r.moveTo(e[0].x,e[0].y);for(let t=1;t<e.length;t++)r.lineTo(e[t].x,e[t].y);r.closePath();let i=new et(r,{depth:t,bevelEnabled:!1});return i.translate(0,0,n-t/2),i}function di(e,t){switch(e.type){case`main`:return ui(t,e.height,e.heightOffset);case`setback`:{let n=si(t),r=n.maxX-n.minX,i=n.maxY-n.minY,a=r>0?e.width/r:1,o=i>0?e.depth/i:1,s=Math.min(a,o);return ui(li(t,ci(t),s),e.height,e.heightOffset)}case`cylinder`:{let t=Math.min(e.width,e.depth)/2,n=new Se(t,t,e.height,16);return n.rotateX(Math.PI/2),n.translate(e.cx,e.cy,e.heightOffset),n}case`dome`:{let t=new Ue(Math.min(e.width,e.depth)/2,16,8,0,Math.PI*2,0,Math.PI/2);return t.rotateX(Math.PI/2),t.translate(e.cx,e.cy,e.heightOffset),t}default:return null}}function fi(e){if(!e||e.length===0)return{geometry:new Ze,idMap:[],buildingCount:0};let t=[],n=[];for(let r=0;r<e.length;r++){let i=e[r],{footprint:a,height:o,id:s}=i;if(!a||a.length<3)continue;let c=!1;for(let e of a)if(!isFinite(e.x)||!isFinite(e.y)){c=!0;break}if(c)continue;let l=[];if(i.parts&&i.parts.length>0)for(let e of i.parts){let t=di(e,a);t&&l.push(t)}else{let e=ui(a,Math.max(1,o),o/2);e.getAttribute(`position`)?l.push(e):e.dispose()}if(l.length===0)continue;let u=new H(Ci(i));for(let e=0;e<l.length;e++){let t=l[e],n=t.getAttribute(`position`);if(!n){t.dispose();continue}let i=n.count,a=new Float32Array(i*3);for(let e=0;e<i;e++)a[e*3]=u.r,a[e*3+1]=u.g,a[e*3+2]=u.b;t.setAttribute(`color`,new P(a,3));let s=new Float32Array(i);s.fill(r),t.setAttribute(`buildingId`,new P(s,1));let c=new Float32Array(i);if(c.fill(o),t.setAttribute(`buildingHeight`,new P(c,1)),t.index){let n=t.toNonIndexed();t.dispose(),l[e]=n}}t.push(...l),n.push(s)}if(t.length===0)return{geometry:new Ze,idMap:[],buildingCount:0};let r=it(t,!1);for(let e of t)e.dispose();return{geometry:r,idMap:n,buildingCount:t.length}}R();var pi=11184810,mi={main:8,major:5,minor:3},hi=5283920,gi=1997e3,_i=1732256,vi=12888194;function yi(e,t,n=2){let r=[],i=[],a=n/2;for(let t of e)if(!(t.length<2))for(let e=0;e<t.length-1;e++){let n=t[e],o=t[e+1];if(!isFinite(n.x)||!isFinite(n.y)||!isFinite(o.x)||!isFinite(o.y))continue;let s=o.x-n.x,c=o.y-n.y,l=Math.sqrt(s*s+c*c);if(l<.001)continue;let u=-c/l*a,d=s/l*a,f=Math.floor(r.length/3);r.push(n.x+u,n.y+d,0),r.push(n.x-u,n.y-d,0),r.push(o.x+u,o.y+d,0),r.push(o.x-u,o.y-d,0),i.push(f,f+1,f+2),i.push(f+1,f+3,f+2)}if(r.length===0)return null;let o=new Ze;o.setAttribute(`position`,new P(r,3)),o.setIndex(i);let s=[];for(let t of e){if(t.length<2)continue;let e=0;for(let n=0;n<t.length-1;n++){let r=t[n],i=t[n+1];if(!isFinite(r.x)||!isFinite(r.y)||!isFinite(i.x)||!isFinite(i.y))continue;let a=i.x-r.x,o=i.y-r.y,c=Math.sqrt(a*a+o*o);c<.001||(s.push(e,1,e,-1,e+c,1,e+c,-1),e+=c)}}o.setAttribute(`uv`,new P(s,2)),o.computeVertexNormals();let c=new L(o,new dt({color:t,side:2}));return c.userData.meshType=`road`,c}function bi(e,t,n=1){if(e.length<3)return null;for(let t of e)if(!isFinite(t.x)||!isFinite(t.y))return null;let r=new Be;r.moveTo(e[0].x,e[0].y);for(let t=1;t<e.length;t++)r.lineTo(e[t].x,e[t].y);r.closePath();let i=new L(new He(r),new rt({color:t,transparent:n<1,opacity:n,roughness:.8,side:2}));return i.receiveShadow=!0,i}function xi(e,t,n=1){let r=[];for(let i of e){let e=bi(i,t,n);e&&r.push(e)}return r}function Si(e,t,n={}){let r=new Oe,i=0,a=0,o=0,s=fi(e);if(s.buildingCount>0){let e=new rt({vertexColors:!0,roughness:.6,metalness:.1}),t=new L(s.geometry,e);t.castShadow=!0,t.receiveShadow=!0,t.name=`Buildings`,t.userData.isMergedBuildings=!0,t.userData.idMap=s.idMap,r.add(t),i=s.buildingCount}let c=n.roadColor??pi,l=yi(t.roads.main,c,mi.main);l&&(l.name=`Roads_Main`,r.add(l),a+=t.roads.main.length);let u=yi(t.roads.major,c,mi.major);u&&(u.name=`Roads_Major`,r.add(u),a+=t.roads.major.length);let d=yi(t.roads.minor,c,mi.minor);d&&(d.name=`Roads_Minor`,r.add(d),a+=t.roads.minor.length);let f=yi(t.coastlineRoads,c,2);f&&(f.name=`Roads_Coast`,r.add(f));let p=n.parkColor??hi,m=xi(t.parks,p,.6),h=0;for(let e of m)e.name=`Park_${h++}`,e.userData.meshType=`park`,r.add(e),o++;if(t.riverPolygon.length>=3){let e=bi(t.riverPolygon,n.riverColor??gi,.7);e&&(e.name=`River`,e.userData.meshType=`river`,r.add(e))}if(t.seaPolygon.length>=3){let e=bi(t.seaPolygon,n.seaColor??_i,.7);e&&(e.name=`Sea`,e.userData.meshType=`sea`,r.add(e))}if(t.coastline.length>=3){let e=bi(t.coastline,n.coastColor??vi,.8);e&&(e.name=`Coastline`,r.add(e))}if(t.secondaryRiver.length>=3){let e=bi(t.secondaryRiver,n.riverColor??gi,.5);e&&(e.name=`River_Secondary`,r.add(e))}return r.rotation.x=-Math.PI/2,{group:r,stats:{buildingCount:i,roadCount:a,parkCount:o},idMap:s.idMap}}function Ci(e){let t=e.height,n=Math.min(1,t/50);return`rgb(${Math.round(180-n*60)}, ${Math.round(170-n*40)}, ${Math.round(160-n*30)})`}ye();function wi(e){return new Promise((t,n)=>{ge(async()=>{let{GLTFExporter:e}=await import(`./GLTFExporter-BgP6aOxs.js`);return{GLTFExporter:e}},__vite__mapDeps([0,1,2])).then(({GLTFExporter:r})=>{new r().parse(e,e=>{if(e instanceof ArrayBuffer)t(e);else try{let n=JSON.stringify(e);t(new TextEncoder().encode(n).buffer)}catch{n(Error(`Failed to serialize GLTF result`))}},e=>{n(e instanceof Error?e:Error(String(e)))},{binary:!0,includeCustomExtensions:!1,truncateDrawRange:!0})}).catch(n)})}_e();var Ti=ve(e=>({isRunning:!1,currentTask:null,queuedTasks:[],setCurrentTask:t=>e({currentTask:t}),updateProgress:(t,n)=>e(e=>e.currentTask?.name===t?{currentTask:{...e.currentTask,progress:Math.min(100,Math.max(0,n))}}:{queuedTasks:e.queuedTasks.map(e=>e.name===t?{...e,progress:Math.min(100,Math.max(0,n))}:e)}),enqueue:t=>e(e=>({queuedTasks:[...e.queuedTasks,{...t,progress:t.progress??0}]})),dequeue:t=>e(e=>({queuedTasks:e.queuedTasks.filter(e=>e.name!==t)})),clearQueue:()=>e({queuedTasks:[]}),setRunning:t=>e({isRunning:t}),reset:()=>e({isRunning:!1,currentTask:null,queuedTasks:[]})})),Ei=class{tasks=[];abortController=null;handlers={};add(e){this.tasks.push(e),Ti.getState().enqueue({name:e.name,userFriendlyName:e.userFriendlyName,progress:0})}on(e){this.handlers={...this.handlers,...e}}get isRunning(){return Ti.getState().isRunning}async runAll(){if(this.isRunning||this.tasks.length===0)return;this.abortController=new AbortController;let e=this.abortController.signal,t=Ti.getState();t.setRunning(!0);try{for(let n of this.tasks){if(e.aborted)break;let r={name:n.name,userFriendlyName:n.userFriendlyName,progress:0};t.setCurrentTask(r),t.dequeue(n.name),this.handlers.onTaskStart?.(n);try{await n.execute(r=>{e.aborted||(t.updateProgress(n.name,r),this.handlers.onTaskProgress?.(n,r))},e),e.aborted||(t.updateProgress(n.name,100),this.handlers.onTaskComplete?.(n))}catch(e){throw this.handlers.onError?.(n,e),e}}}finally{t.setCurrentTask(null),t.setRunning(!1),e.aborted||this.handlers.onAllComplete?.(),this.tasks=[],this.abortController=null}}cancel(){this.abortController?.abort(),this.abortController=null,Ti.getState().reset(),this.tasks=[]}},Di=null;function Oi(){return Di||=new Ei,Di}var ki=[`point-light`,`camera-light`,`sun-light`,`custom-geojson`,`spot-light`,`rect-area-light`,`hemisphere-light`,`primitive-mesh`];function Ai(e,t={center:[0,0]}){let n=[];for(let r of e){if(!r.enabled||!ki.includes(r.schemaType))continue;let e=me[r.schemaType];if(e?.toThreeJsObjects)try{let i=e.toThreeJsObjects(r,t);i&&i.length>0&&n.push(...i)}catch(e){console.warn(`[buildThreeJsNonGeoObjects] Error processing node "${r.id}" (${r.schemaType}):`,e)}}return n}var ji={position:`absolute`,fontFamily:`sans-serif`},Mi=({mapLoaded:e,generationStatus:t,generationPhase:n,generationProgress:r,seed:i})=>(0,W.jsxs)(W.Fragment,{children:[!e&&(0,W.jsx)(`div`,{style:{...ji,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,color:`#fff`},children:`Loading map...`}),t===`generating`&&(0,W.jsxs)(`div`,{style:{...ji,bottom:20,left:20,background:`rgba(30, 30, 40, 0.85)`,color:`#fff`,padding:`12px 16px`,borderRadius:8,fontSize:13},children:[(0,W.jsxs)(`div`,{style:{marginBottom:4},children:[n,`: `,(r*100).toFixed(0),`%`]}),(0,W.jsx)(`div`,{style:{width:150,height:4,background:`#444`,borderRadius:2,overflow:`hidden`},children:(0,W.jsx)(`div`,{style:{width:`${r*100}%`,height:`100%`,background:`#4CAF50`,transition:`width 0.3s ease`}})})]}),(0,W.jsxs)(`div`,{style:{...ji,bottom:10,right:10,background:`rgba(30, 30, 40, 0.7)`,color:`#aaa`,padding:`4px 8px`,borderRadius:4,fontSize:11},children:[`seed: `,i]})]}),Ni=(0,U.memo)(function({effects:e}){return e.length===0?null:(0,W.jsx)(W.Fragment,{children:e.map(e=>(0,W.jsx)(`div`,{style:e.style},e.key))})}),Pi={root:`_root_1ejy5_2`};_();function Fi(){let e=D(e=>e.filterPanelOpen),t=D(e=>e.toggleFilterPanel),n=D(e=>e.draftNumericFilters),r=D(e=>e.setDraftNumericFilter),i=D(e=>e.clearDraftNumericFilter),a=D(e=>e.clearAllDraftFilters),o=w(e=>e.buildings),s=D(e=>e.buildingFilters),c=D(e=>e.selectedBuildingId),{handleBuildingSelect:l}=fe(),u=(0,U.useRef)({}),d=(0,U.useCallback)((e,t)=>{D.getState().setBuildingFilter(e,t)},[]);(0,U.useCallback)(()=>{D.getState().clearBuildingFilters(),a()},[a]);let f=(0,U.useMemo)(()=>{let e=o[0];return E(e)},[o]),p=(0,U.useRef)(!1);(0,U.useEffect)(()=>{if(o.length>0&&!p.current&&Object.keys(s).length===0){let e=ue(f);for(let[t,n]of Object.entries(e))D.getState().setBuildingFilter(t,n);p.current=!0}},[o,s,f]);let m=(0,U.useMemo)(()=>ae(o,s),[o,s]);(0,U.useEffect)(()=>{D.getState().recalculateFilters(o)},[o,s]);let h=(0,U.useMemo)(()=>te(s),[s]),g=(0,U.useMemo)(()=>{let e={};for(let t of f){let n=new Set;for(let e of o){let r=t.key.split(`.`),i=e;for(let e of r){if(typeof i!=`object`||!i){i=void 0;break}i=i[e]}i!=null&&i!==``&&n.add(String(i))}if(t.type===`categorical`){let r=new Set;for(let e of t.options??[])r.add(e);for(let e of n)r.add(e);e[t.key]=Array.from(r)}else e[t.key]=Array.from(n).sort()}return e},[f,o]),_=(0,U.useMemo)(()=>{let e={};for(let t of f){if(t.type!==`numeric`)continue;let n=1/0,r=-1/0;for(let e of o){let i=t.key.split(`.`),a=e;for(let e of i){if(typeof a!=`object`||!a){a=void 0;break}a=a[e]}typeof a==`number`&&isFinite(a)&&(a<n&&(n=a),a>r&&(r=a))}let i=t.range;e[t.key]={min:n===1/0?i?.min??0:n,max:r===-1/0?i?.max??1e3:r}}return e},[f,o]),v=(0,U.useMemo)(()=>f.map(e=>({...e,range:_[e.key]??e.range})),[f,_]);(0,U.useEffect)(()=>{if(o.length===0||!p.current)return;let e=ue(v);for(let[t,n]of Object.entries(e)){let e=s[t];e&&`min`in e&&`max`in n&&u.current[t]===void 0&&(u.current[t]={min:e.min,max:e.max},(e.min!==n.min||e.max!==n.max)&&D.getState().setBuildingFilter(t,n))}},[v,o,s]);let y=(0,U.useCallback)(e=>s[e]??{enabled:!1,values:[]},[s]),b=(0,U.useCallback)(e=>{let t=s[e],n=f.find(t=>t.key===e);return t??{enabled:!1,min:n?.range?.min??0,max:n?.range?.max??1e3}},[s,f]),x=(0,U.useCallback)(e=>s[e]??{enabled:!1,value:``},[s]),S=(0,U.useCallback)((e,t)=>{i(e),D.getState().setBuildingFilter(e,t)},[i]),T=(0,U.useCallback)(()=>{D.getState().clearBuildingFilters(),a()},[a]);return(0,W.jsx)(C,{className:Pi.root,children:(0,W.jsx)(pe,{open:e,onToggle:t,activeCount:h,fields:v,fieldValues:g,buildings:o,filteredBuildings:m,filteredCount:m.length,selectedBuildingId:c,buildingFilters:s,draftNumericFilters:n,getCategorical:y,getNumeric:b,getText:x,onSetFilter:d,onDraftNumericFilter:r,onCommitNumericFilter:S,onReset:T,onSelectBuilding:l})})}_();function Ii(e,t){let n=t.split(`.`),r=e;for(let e of n){if(typeof r!=`object`||!r)return;r=r[e]}return r}function Li(e){return e==null||e===``?`—`:String(e)}function Ri(e){switch(e){case`categorical`:return`🏷️`;case`numeric`:return`🔢`;case`text`:return`📝`;case`ip`:return`🌐`}}function zi(){let e=D(e=>e.selectedBuildingId),t=w(e=>e.buildings),n=(0,U.useMemo)(()=>t.find(t=>t.id===e)??null,[t,e]),r=(0,U.useMemo)(()=>{let e=t[0];return E(e)},[t]);return(0,W.jsx)(`div`,{style:{position:`absolute`,bottom:8,left:8,zIndex:10,pointerEvents:`none`,maxWidth:280},children:(0,W.jsx)(C,{className:`building-tooltip`,style:{background:`var(--mantine-color-body)`,border:`1px solid var(--mantine-color-default-border)`,borderRadius:`var(--mantine-radius-sm)`,padding:`8px 12px`,boxShadow:`0 2px 8px rgba(0,0,0,0.15)`},children:n?(0,W.jsxs)(v,{gap:2,children:[(0,W.jsxs)(b,{size:`xs`,fw:700,mb:1,children:[`🏠 `,n.id]}),r.map(e=>{let t=Ii(n,e.key);return(0,W.jsxs)(h,{gap:4,wrap:`nowrap`,children:[(0,W.jsxs)(b,{size:`xs`,c:`dimmed`,style:{minWidth:80},children:[Ri(e.type),` `,e.label,`:`]}),(0,W.jsx)(b,{size:`xs`,children:e.type===`numeric`&&typeof t==`number`?t.toFixed(+(e.key===`height`)):Li(t)})]},e.key)})]}):(0,W.jsx)(b,{size:`xs`,c:`dimmed`,fs:`italic`,children:`Click a building to inspect`})})})}R(),_();var Bi={lat:39.47,lon:-.38},Vi=500,Hi=new se;function Ui(e,t){let n=null;return e.traverse(e=>{if(e instanceof L&&e.userData.buildingId===t){let t=new Je().setFromObject(e),r=new F;t.getCenter(r),n=r}}),n}function Wi(){let e=(0,U.useRef)(null),[t,n]=(0,U.useState)(()=>w.getState().vignetteEnabled??!0);return(0,U.useEffect)(()=>w.subscribe(()=>{n(w.getState().vignetteEnabled??!0)}),[]),(0,U.useEffect)(()=>{let t=()=>{let t=e.current;if(!t)return;let n=w.getState(),r=n.sunElevation,i=n.vignetteIntensity??.0425,a=n.vignetteOffset??.3,o=1+(r==null?0:1-Math.min(1,Math.max(0,(r+10)/20))),s=Math.min(1,Math.max(0,i*o)),c=Math.min(100,Math.max(0,a*50)),l=Math.min(100,Math.max(0,a*50+50));t.style.setProperty(`--vignette-alpha`,s.toFixed(3)),t.style.setProperty(`--vignette-inner`,`${c.toFixed(0)}%`),t.style.setProperty(`--vignette-outer`,`${l.toFixed(0)}%`)};return t(),w.subscribe(t)},[]),t?(0,W.jsx)(`div`,{ref:e,style:{position:`absolute`,inset:0,pointerEvents:`none`,zIndex:10,background:`radial-gradient(ellipse at center, transparent var(--vignette-inner, 15%), rgba(0,0,0,var(--vignette-alpha, 0.2)) var(--vignette-outer, 65%))`}}):null}var Gi=e=>{let t=w(e=>e.generationWidth),n=w(e=>e.generationHeight),r=w(e=>e.mapData),i=w(e=>e.buildings),a=w(e=>e.generation.status),o=w(e=>e.generation.phase),s=w(e=>e.generation.progress),c=w(e=>e.seed),l=Ti(e=>e.isRunning),u=Ti(e=>e.currentTask),[d,f]=(0,U.useState)(null),[p,m]=(0,U.useState)(0),h=(0,U.useRef)(null),g=(0,U.useRef)(!1),_=(0,U.useRef)(!1),v=(0,U.useRef)(!1),y=(0,U.useCallback)(()=>(h.current||=new le,h.current),[]),b=(0,U.useMemo)(()=>{let e=w.getState();if(e.sunAngle!==void 0&&e.sunElevation!==void 0){let t=e.sunElevation*(Math.PI/180),n=e.sunAngle*(Math.PI/180);return new F(Vi*Math.cos(t)*Math.sin(n),Vi*Math.sin(t),Vi*Math.cos(t)*Math.cos(n))}let t=Hi.getSunPosition3D(Bi,new Date,Vi);return new F(t.x,t.y,t.z)},[]),S=w(e=>e.skyTurbidity),T=w(e=>e.skyRayleigh),E=w(e=>e.skyMieCoefficient),ee=w(e=>e.skyMieDirectionalG),O=(0,U.useMemo)(()=>({sunPosition:b,turbidity:S,rayleigh:T,mieCoefficient:E,mieDirectionalG:ee}),[b,S,T,E,ee]),k=w(e=>e.sceneNodes),A=(0,U.useMemo)(()=>{let e={};for(let t of k)e[t.schemaType]=t;return e},[k]),te=A[`ambient-light`]?.enabled??!0,re=A[`directional-light`]?.enabled??!0,ie=(0,U.useMemo)(()=>({ambient:te?{color:`#99bbdd`,intensity:.3}:void 0,directional:re?{color:`#ffffff`,intensity:.8,position:new F(0,1,0)}:void 0}),[te,re]),ae=w(e=>e.scannerEnabled),oe=w(e=>e.scanColor),ue=w(e=>e.scanSpeed),de=w(e=>e.dotColor),fe=w(e=>e.dotDensity),pe=w(e=>e.dotOpacity),me=ae,he=(0,U.useMemo)(()=>{let e=i.reduce((e,t)=>t.height>e?t.height:e,0);return{scanColor:oe,scanSpeed:ue,dotColor:de,dotDensity:fe/48,dotOpacity:pe,cityMaxHeight:e>0?e*1.05:void 0}},[i,oe,ue,de,fe,pe]),ge=D(e=>e.selectedBuildingId),_e=D(e=>e.hoveredBuildingId),ve=me||!!ge,[ye,j]=(0,U.useState)(null);(0,U.useEffect)(()=>{D.getState().setSelectedBuildingId(null),D.getState().setHoveredBuildingId(null)},[]),(0,U.useEffect)(()=>{if(a!==`done`||!r||i.length===0)return;let e=r,o=i,s=D.getState().filteredBuildingIndices,l=s.length>0?o.filter((e,t)=>s.includes(t)):o;if(g.current||_.current)return;_.current=!0;let u=Oi();u.add({name:`geometry-generate`,userFriendlyName:`Building city geometry...`,execute:async(r,i)=>{try{let{group:i}=Si(l,e,{getBuildingColor:Ci});r(30);let a=new Ke().makeRotationX(-Math.PI/2);i.children.forEach(e=>{if(e.geometry){let t=e;t.geometry.applyMatrix4(a),t.isMesh&&t.geometry.computeVertexNormals()}e.position.set(0,0,0),e.rotation.set(0,0,0)}),i.rotation.set(0,0,0),r(60);let o=Math.max(t,n)*1.2,s=new L(new ze(o,o),new rt({color:13395507,roughness:.6,metalness:.1}));s.name=`Base`,s.rotation.x=-Math.PI/2,s.position.set(t/2,-.5,-n/2),s.receiveShadow=!0,i.add(s),r(80),f(i),g.current=!0,j(null),r(100)}catch(e){let t=e instanceof Error?e.message:`Geometry generation failed`;console.error(`[ThreeScene3D] Geometry generation error:`,e),j(t),_.current=!1,r(100)}}});let d=null;try{d=Si(l,e).group}catch(e){console.warn(`[ThreeScene3D] GLTF cache pre-processing failed:`,e)}d&&wi(d).then(e=>{let t=y();return t.get(c).then(n=>{if(n)return t.put({...n,gltfBuffer:e})})}).catch(e=>{console.warn(`[ThreeScene3D] GLTF cache write failed:`,e)}),u.runAll()},[a,r,i,c,y,k,p]),(0,U.useEffect)(()=>{g.current=!1,_.current=!1,v.current=!1,j(null),f(null)},[c]);let be=D(e=>e.filteredBuildingIndices),xe=(0,U.useRef)(!1);(0,U.useEffect)(()=>{!xe.current&&(be.length===0||(xe.current=!0,be.length===i.length&&i.length>0))||(g.current=!1,_.current=!1,v.current=!1,j(null),f(null),m(e=>e+1))},[be,i.length]),(0,U.useEffect)(()=>{if(v.current)return;v.current=!0;let e=Oi(),t=!1;return e.add({name:`cache-load`,userFriendlyName:`Loading city from cache...`,execute:async(e,n)=>{let r=y();e(10);let i=await r.get(c);if(!(n?.aborted||t)){if(i?.gltfBuffer){e(100);return}e(100)}}}),e.runAll(),()=>{t=!0}},[c,y]);let M=(0,U.useCallback)(e=>{D.getState().setHoveredBuildingId(e)},[]),Se=w(e=>e.threeFlyToTarget),[Ce,we]=(0,U.useState)(null),Te=(0,U.useMemo)(()=>Se?new F(Se.x,Se.y,Se.z):Ce,[Se]),Ee=(0,U.useCallback)(e=>{let t=D.getState().selectedBuildingId;D.getState().setSelectedBuildingId(t===e?null:e)},[]),De=(0,U.useCallback)(e=>{if(D.getState().setSelectedBuildingId(e),d){let t=Ui(d,e);t&&we(t)}},[d]);ce();let N=w(e=>e.createDefaultScene),Oe=(0,U.useRef)(!1);(0,U.useEffect)(()=>{k.length===0&&!Oe.current&&(Oe.current=!0,N())},[k.length,N]);let ke=(0,U.useMemo)(()=>{let e=A[`shadow-settings`];if(!e)return;let t=e.values;return{enabled:t.enabled??!0,mapSize:Number(t.mapSize??`2048`),bias:t.bias??.005,pcfRadius:t.pcfRadius??3}},[A]),Ae=w(e=>e.fogColor),je=w(e=>e.fogDensity),P=w(e=>e.fogNear),Me=w(e=>e.fogFar),Ne=(0,U.useMemo)(()=>{let e=A.fog;if(e)return{enabled:e.values.enabled??!0,color:Ae??e.values.color??`#f0ece0`,density:je??e.values.density??2e-4,near:P??e.values.near??50,far:Me??e.values.far??800}},[A,Ae,je,P,Me]),Pe=w(e=>e.toneMappingExposure),Fe=(0,U.useMemo)(()=>{let e=A[`tone-mapping`];if(e)return{exposure:Pe??e.values.exposure??1.2}},[A,Pe]),Ie=[`point-light`,`camera-light`,`sun-light`,`custom-geojson`,`spot-light`,`rect-area-light`,`hemisphere-light`,`primitive-mesh`],Le=(0,U.useMemo)(()=>{let e=w.getState().geoCoordinates??{lat:39.47,lon:-.38};return Ai(k,{center:[e.lon,e.lat],getSunDirection:()=>{let e=w.getState();return se.getSunDirection(e.sunAngle??180,e.sunElevation??50)},sunElevation:w.getState().sunElevation})},[(0,U.useMemo)(()=>k.filter(e=>Ie.includes(e.schemaType)).map(e=>`${e.id}:${e.enabled}`).join(`|`),[k])]),Re=(0,U.useMemo)(()=>{let e=A.fog;if(e&&(e.values.enabled??!0))return Ae??e.values.color??void 0},[A,Ae]),Be=(0,U.useMemo)(()=>A.camera?.values?.autoRotate??!1,[A]),Ve=(0,U.useMemo)(()=>A[`building-mesh`]?.values?.unselectedOpacity??.15,[A]),He=(0,U.useCallback)(()=>{D.getState().setSelectedBuildingId(null)},[]),Ue=(0,U.useMemo)(()=>{let e=1e4,t=new L(new ze(e,e),new rt({color:16777215,roughness:.9}));return t.name=`Ground`,t.rotation.x=-Math.PI/2,t.position.set(0,-1,0),t.receiveShadow=!0,t},[]),We=(0,U.useMemo)(()=>{let e=[Ue];for(let t of Le)e.push(t);return d&&(d.position.set(0,0,0),e.push(d)),e},[Ue,d,Le]),Ge=d!==null&&a===`done`;return(0,W.jsxs)(C,{style:{width:`100%`,height:`100%`,position:`relative`},children:[(0,W.jsx)(x,{visible:!Ge,zIndex:100,overlayProps:{blur:2,backgroundOpacity:.8},loaderProps:{children:(0,W.jsx)(`div`,{style:{textAlign:`center`,color:`#ccc`,padding:20},children:ye&&!l?(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`div`,{style:{fontSize:18,marginBottom:8,color:`#f66`},children:`Failed to build city view`}),(0,W.jsx)(`div`,{style:{fontSize:12,marginBottom:12,color:`#f99`},children:ye}),(0,W.jsx)(`button`,{onClick:()=>{j(null),g.current=!1,_.current=!1,ne()},style:{padding:`8px 16px`,background:`#555`,color:`#fff`,border:`none`,borderRadius:4,cursor:`pointer`},children:`Retry`})]}):l&&u?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`div`,{style:{fontSize:18,marginBottom:8},children:u.userFriendlyName}),(0,W.jsx)(`div`,{style:{width:200,height:4,background:`#333`,borderRadius:2,margin:`0 auto`,overflow:`hidden`},children:(0,W.jsx)(`div`,{style:{width:`${u.progress}%`,height:`100%`,background:`#6af`,transition:`width 0.3s`}})})]}):(0,W.jsx)(`div`,{style:{fontSize:18},children:`Loading city...`})})}}),(0,W.jsx)(oi,{sceneObjects:We,onBuildingHover:M,onBuildingClick:Ee,onBuildingDoubleClick:De,onCanvasDoubleClick:He,onTheatreToggle:e.onTheatreToggle,sky:O,lights:ie,fog:Ne,toneMapping:Fe,shadowConfig:ke,sceneBackground:Re,flyToTarget:Te,autoRotate:Be,unselectedOpacity:Ve,hoveredBuildingId:_e,selectedBuildingId:ge,scannerActive:ve,scannerParams:he}),(0,W.jsx)(Mi,{mapLoaded:Ge,generationStatus:a,generationPhase:o,generationProgress:s,seed:c}),(0,W.jsx)(Ni,{effects:[]}),(0,W.jsx)(Wi,{}),(0,W.jsx)(Fi,{}),(0,W.jsx)(zi,{}),c&&(0,W.jsxs)(`div`,{style:{position:`absolute`,bottom:10,right:10,fontFamily:`sans-serif`,background:`rgba(30, 30, 40, 0.7)`,color:`#aaa`,padding:`4px 8px`,borderRadius:4,fontSize:11},children:[`seed: `,c]})]})};_();var Ki=({parentWindowId:e})=>{let t=ie();return(0,W.jsx)(C,{style:{position:`relative`,width:`100%`,height:`100%`},children:(0,W.jsx)(Gi,{onTheatreToggle:(0,U.useCallback)(()=>{t(`cities-theatre`,{parentId:e})},[t,e])})})},qi=({window:e,notifyReady:t})=>{let{t:n}=s(`cities`),{status:r,phase:i,progress:a,error:o,generate:c,cancel:l}=de(),u=w(e=>e.viewMode),d=w(e=>e.seed),f=w(e=>e.setViewMode),p=w(e=>e.setSeed),m=w(e=>e.mapData),h=w(e=>e.roadsConfig),g=w(e=>e.coastlineConfig),_=w(e=>e.riverConfig),v=w(e=>e.parksConfig),y=w(e=>e.buildingsConfig),b=w(e=>e.generationWidth),x=w(e=>e.generationHeight),S=(0,U.useCallback)(()=>({seed:d,width:b,height:x,roads:h,coastline:g,river:_,parks:v,buildings:y}),[d,b,x,h,g,_,v,y]);(0,U.useEffect)(()=>{t?.({actions:{generate:c,cancel:l,setSeed:p,setViewMode:f},status:r,viewMode:u})},[t,c,l,p,f,r,u]),(0,U.useEffect)(()=>{m?.roads||c(S())},[]),(0,U.useEffect)(()=>{re(()=>c(S()))},[c,S]);let T=(0,U.useCallback)(e=>D.getState().setSelectedBuildingId(e),[]),E=(0,U.useCallback)(e=>{D.getState().setHoveredBuildingId(e)},[]);return u===`3d`||u===`3d-three`?(0,W.jsx)(Ki,{parentWindowId:e?.id}):(0,W.jsx)(C,{style:{display:`flex`,height:`100%`,width:`100%`,minHeight:0,minWidth:0,position:`relative`},children:(0,W.jsxs)(C,{style:{flex:1,minHeight:0,minWidth:0,position:`relative`,overflow:`hidden`},children:[r===`generating`&&(0,W.jsx)(ht,{phase:i,progress:a,onCancel:l}),r===`done`&&m&&u===`2d`&&(0,W.jsx)(wt,{onBuildingClick:T,onBuildingHover:E},d),r===`error`&&(0,W.jsxs)(C,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,padding:`20px`},children:[(0,W.jsx)(`p`,{children:n(`cities:generation.failed`)}),o&&(0,W.jsx)(`p`,{style:{color:`red`,fontSize:`12px`},children:o}),(0,W.jsx)(`button`,{onClick:()=>c(S()),children:n(`cities:generation.retry`)})]})]})})};export{qi as CitiesApp};
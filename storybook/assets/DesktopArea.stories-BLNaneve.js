import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{A as n,Lt as r,R as i,Wt as a,Z as o,a as s,b as c,en as l,i as u,j as d,n as f,x as p,z as m}from"./iframe-IBNi5Fts.js";import{l as h,t as g}from"./Animations-RlUplJAp.js";import{n as _,t as v}from"./useWindowButtonRegistry-c5-LKp6u.js";import{n as y,t as b}from"./Window-BNANKang.js";import{n as x,t as S}from"./CreateItemContextMenu-BVWCRdA6.js";import{a as C,o as w,r as T}from"./WallpaperSettings-IeHi7g53.js";import{n as E,t as D}from"./DesktopIcon-D_cl7lbo.js";import{n as O,t as k}from"./Taskbar-BawI7scd.js";var A,j,M=e((()=>{A=`_root_1z0nr_1`,j={root:A}})),N,P,F,I=e((()=>{N=t(l(),1),i(),f(),C(),s(),T(),M(),P=a(),F=({children:e,onContextMenu:t})=>{let n=m(e=>e.theme.desktop),r=w(m(e=>e.wallpaper)??void 0),i=u(e=>e.setViewportSize),a=(0,N.useRef)(null);return(0,N.useEffect)(()=>{let e=a.current;if(!e)return;let t=new ResizeObserver(e=>{let{width:t,height:n}=e[0]?.contentRect??{};t&&t>0&&n&&n>0&&i(t,n)});return t.observe(e),()=>t.disconnect()},[i]),(0,P.jsx)(`div`,{ref:a,className:j.root,"data-testid":`desktop-area`,style:{"--taskbar-height":`48px`,backgroundColor:n,backgroundImage:`url(${r??`/storybook/Images/wallpaper.jpg`})`,backgroundSize:`cover`,backgroundPosition:`center`},onContextMenu:t,children:e})},F.__docgenInfo={description:``,methods:[],displayName:`DesktopArea`}})),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{L=t(l(),1),I(),E(),y(),O(),x(),f(),_(),p(),h(),o(),s(),d(),R=a(),z=[`notepad`,`uploader`,`files`,`storybook`,`settings`,`linkedin`,`github`,`doom`,`terminal`],B=({Story:e})=>{let t=u(e=>e.setViewportSize);return(0,L.useEffect)(()=>{let e=()=>{t(window.innerWidth,window.innerHeight)};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[t]),(0,R.jsx)(e,{})},V={title:`Common components/DesktopArea`,component:F,parameters:{layout:`fullscreen`},decorators:[e=>(0,R.jsx)(B,{Story:e})]},H=({sortMode:e,seedIcons:t=!0}={})=>{let i=u(e=>e.viewportWidth),a=u(e=>e.viewportHeight),o=u(e=>e.windows),s=u(e=>e.openWindow),l=u(e=>e.icons),d=u(e=>e.setDesktopSortMode),f=u(e=>e.openContextMenu),p=(0,L.useRef)(!1),m=(0,L.useRef)(!1),h=Math.max(1,Math.floor((a-20)/80));return(0,L.useEffect)(()=>{e&&d(e)},[e,d]),(0,L.useEffect)(()=>{if(!t||m.current)return;m.current=!0;let e=z.map((e,t)=>{let r=c.find(t=>t.id===e);if(!r)return null;let i=Math.floor(t/h),a=t%h;return n({name:r.name,icon:r.icon,appId:e,x:20+i*80,y:20+a*80})}).filter(e=>e!==null);u.setState({icons:e})},[t,h]),(0,L.useEffect)(()=>{if(p.current||i===0||a===0)return;p.current=!0;let{x:e,y:t}=g(i,a,300,400);s({title:`Device Info`,content:`device-info`,icon:`📊`,fcIcon:`FcBarChart`,x:e,y:t,width:300,height:400,canMaximize:!1,alwaysOnTop:!0})},[s,i,a]),(0,R.jsx)(v,{children:(0,R.jsxs)(r,{style:{display:`flex`,flexDirection:`column`,height:`100vh`},children:[(0,R.jsx)(r,{style:{flex:1,position:`relative`},children:(0,R.jsxs)(F,{onContextMenu:e=>{e.preventDefault(),f(e.clientX,e.clientY,`desktop`)},children:[l.map(e=>(0,R.jsx)(D,{icon:e,onDoubleClick:()=>{},onContextMenu:()=>{}},e.id)),o.map(e=>(0,R.jsx)(b,{window:e},e.id))]})}),(0,R.jsx)(k,{}),(0,R.jsx)(S,{owner:`desktop`,parentId:`folder-desktop`,currentPath:`/home/Desktop`})]})})},U=({sortMode:e}={})=>{let t=u(e=>e.viewportWidth),i=u(e=>e.viewportHeight),a=u(e=>e.windows),o=u(e=>e.icons),s=u(e=>e.openWindow),l=u(e=>e.openContextMenu),d=u(e=>e.setDesktopSortMode),f=(0,L.useRef)(!1),p=(0,L.useRef)(!1),m=Math.max(1,Math.floor((i-20)/80));return(0,L.useEffect)(()=>{e&&d(e)},[e,d]),(0,L.useEffect)(()=>{if(p.current)return;p.current=!0;let e=z.map((e,t)=>{let r=c.find(t=>t.id===e);if(!r)return null;let i=Math.floor(t/m),a=t%m;return n({name:r.name,icon:r.icon,appId:e,x:20+i*80,y:20+a*80})}).filter(e=>e!==null);u.setState({icons:e})},[m]),(0,L.useEffect)(()=>{if(f.current||t===0||i===0)return;f.current=!0;let{x:e,y:n}=g(t,i,300,400);s({title:`Device Info`,content:`device-info`,icon:`📊`,fcIcon:`FcBarChart`,x:e,y:n,width:300,height:400,canMaximize:!1,alwaysOnTop:!0})},[s,t,i]),(0,L.useEffect)(()=>{let e=setTimeout(()=>{l(160,120,`desktop`)},100);return()=>clearTimeout(e)},[l]),(0,R.jsx)(v,{children:(0,R.jsxs)(r,{style:{display:`flex`,flexDirection:`column`,height:`100vh`},children:[(0,R.jsx)(r,{style:{flex:1,position:`relative`},children:(0,R.jsxs)(F,{onContextMenu:e=>{e.preventDefault(),l(e.clientX,e.clientY,`desktop`)},children:[o.map(e=>(0,R.jsx)(D,{icon:e,onDoubleClick:()=>{},onContextMenu:()=>{}},e.id)),a.map(e=>(0,R.jsx)(b,{window:e},e.id))]})}),(0,R.jsx)(k,{}),(0,R.jsx)(S,{owner:`desktop`,parentId:`folder-desktop`,currentPath:`/home/Desktop`})]})})},W={globals:{viewport:{value:`desktop`,isRotated:!1}},render:()=>(0,R.jsx)(H,{})},G={globals:{viewport:{value:`largeDesktop`,isRotated:!1}},render:()=>(0,R.jsx)(H,{})},K={globals:{viewport:{value:`tablet`,isRotated:!1}},render:()=>(0,R.jsx)(H,{})},q={globals:{viewport:{value:`mobile1`,isRotated:!1}},render:()=>(0,R.jsx)(H,{})},J={globals:{viewport:{value:`mobile2`,isRotated:!1}},render:()=>(0,R.jsx)(H,{})},Y={globals:{viewport:{value:`desktop`,isRotated:!1}},render:()=>(0,R.jsx)(U,{sortMode:`default`})},X={globals:{viewport:{value:`desktop`,isRotated:!1}},render:()=>(0,R.jsx)(U,{sortMode:`name-asc`})},Z={globals:{viewport:{value:`desktop`,isRotated:!1}},render:()=>(0,R.jsx)(U,{sortMode:`name-desc`})},Q={globals:{viewport:{value:`desktop`,isRotated:!1}},render:()=>(0,R.jsx)(U,{sortMode:`type`})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'desktop',
      isRotated: false
    }
  },
  render: () => <DesktopWithIcons />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'largeDesktop',
      isRotated: false
    }
  },
  render: () => <DesktopWithIcons />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'tablet',
      isRotated: false
    }
  },
  render: () => <DesktopWithIcons />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  },
  render: () => <DesktopWithIcons />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile2',
      isRotated: false
    }
  },
  render: () => <DesktopWithIcons />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'desktop',
      isRotated: false
    }
  },
  render: () => <DesktopWithContextMenuOpen sortMode="default" />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'desktop',
      isRotated: false
    }
  },
  render: () => <DesktopWithContextMenuOpen sortMode="name-asc" />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'desktop',
      isRotated: false
    }
  },
  render: () => <DesktopWithContextMenuOpen sortMode="name-desc" />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'desktop',
      isRotated: false
    }
  },
  render: () => <DesktopWithContextMenuOpen sortMode="type" />
}`,...Q.parameters?.docs?.source}}},$=[`Desktop`,`LargeDesktop`,`Tablet`,`MobilePortrait`,`MobileLandscape`,`SortDefault`,`SortNameAsc`,`SortNameDesc`,`SortByType`]}))();export{W as Desktop,G as LargeDesktop,J as MobileLandscape,q as MobilePortrait,Q as SortByType,Y as SortDefault,X as SortNameAsc,Z as SortNameDesc,K as Tablet,$ as __namedExportsOrder,V as default};
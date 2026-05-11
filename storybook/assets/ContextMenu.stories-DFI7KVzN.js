import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Mr as n,Oi as r,et as i,rr as a,tt as o,wi as s}from"./iframe-D_Nu-XZb.js";var c,l,u,d,f,p,m,h;e((()=>{c=t(r(),1),a(),o(),l=s(),u={title:`Common components/ContextMenu`,component:i,parameters:{layout:`centered`}},d={args:{opened:!0,position:{x:200,y:200}}},f={args:{opened:!1,position:{x:200,y:200}}},p=()=>{let[e,t]=(0,c.useState)(!1),[r,a]=(0,c.useState)({x:0,y:0});return(0,l.jsxs)(`div`,{style:{width:600,height:400,background:`#1a1b1e`,borderRadius:8,display:`flex`,alignItems:`center`,justifyContent:`center`},onContextMenu:e=>{e.preventDefault(),a({x:e.clientX,y:e.clientY}),t(!0)},children:[(0,l.jsx)(n,{variant:`subtle`,color:`gray`,children:`Right-click anywhere in this area`}),(0,l.jsx)(i,{opened:e,position:r,onClose:()=>t(!1),onOpenApp:()=>{},onToggleTheme:()=>{}})]})},m={render:()=>(0,l.jsx)(p,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true,
    position: {
      x: 200,
      y: 200
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    position: {
      x: 200,
      y: 200
    }
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveRender />
}`,...m.parameters?.docs?.source}}},h=[`OpenAtCenter`,`Closed`,`Interactive`]}))();export{f as Closed,m as Interactive,d as OpenAtCenter,h as __namedExportsOrder,u as default};
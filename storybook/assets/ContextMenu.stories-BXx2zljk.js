import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-DEAHbL4P.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{St as i,t as a}from"./esm-DRJkNLRC.js";import{Mt as o,Nt as s}from"./iframe-arg-aqN8.js";var c,l,u,d,f,p,m,h;e((()=>{c=t(n(),1),a(),s(),l=r(),u={title:`Common components/ContextMenu`,component:o,parameters:{layout:`centered`}},d={args:{opened:!0,position:{x:200,y:200}}},f={args:{opened:!1,position:{x:200,y:200}}},p=()=>{let[e,t]=(0,c.useState)(!1),[n,r]=(0,c.useState)({x:0,y:0});return(0,l.jsxs)(`div`,{style:{width:600,height:400,background:`#1a1b1e`,borderRadius:8,display:`flex`,alignItems:`center`,justifyContent:`center`},onContextMenu:e=>{e.preventDefault(),r({x:e.clientX,y:e.clientY}),t(!0)},children:[(0,l.jsx)(i,{variant:`subtle`,color:`gray`,children:`Right-click anywhere in this area`}),(0,l.jsx)(o,{opened:e,position:n,onClose:()=>t(!1),onOpenApp:()=>{},onToggleTheme:()=>{}})]})},m={render:()=>(0,l.jsx)(p,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
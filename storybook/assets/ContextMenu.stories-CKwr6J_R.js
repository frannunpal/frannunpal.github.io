import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{St as n,Wt as r,Z as i,b as a,en as o,pt as s,x as c}from"./iframe-DfGrJCrR.js";import{n as l,t as u}from"./ContextMenuAnchor-CskjKOq2.js";var d,f,p,m=e((()=>{i(),c(),l(),d=r(),f=a.filter(e=>e.id!==`settings`),p=({opened:e,position:t,onClose:n,onOpenApp:r,onToggleTheme:i})=>(0,d.jsxs)(s,{opened:e,onClose:n,closeOnClickOutside:!0,closeOnEscape:!0,closeOnItemClick:!0,withinPortal:!0,children:[(0,d.jsx)(u,{x:t.x,y:t.y}),(0,d.jsxs)(s.Dropdown,{children:[f.map(e=>(0,d.jsxs)(s.Item,{onClick:()=>r(e.id),children:[`Open `,e.name]},e.id)),(0,d.jsx)(s.Divider,{}),(0,d.jsx)(s.Item,{onClick:i,children:`Toggle Theme`})]})]}),p.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`}})),h,g,_,v,y,b,x,S;e((()=>{h=t(o(),1),i(),m(),g=r(),_={title:`Common components/ContextMenu`,component:p,parameters:{layout:`centered`}},v={args:{opened:!0,position:{x:200,y:200}}},y={args:{opened:!1,position:{x:200,y:200}}},b=()=>{let[e,t]=(0,h.useState)(!1),[r,i]=(0,h.useState)({x:0,y:0});return(0,g.jsxs)(`div`,{style:{width:600,height:400,background:`#1a1b1e`,borderRadius:8,display:`flex`,alignItems:`center`,justifyContent:`center`},onContextMenu:e=>{e.preventDefault(),i({x:e.clientX,y:e.clientY}),t(!0)},children:[(0,g.jsx)(n,{variant:`subtle`,color:`gray`,children:`Right-click anywhere in this area`}),(0,g.jsx)(p,{opened:e,position:r,onClose:()=>t(!1),onOpenApp:()=>{},onToggleTheme:()=>{}})]})},x={render:()=>(0,g.jsx)(b,{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true,
    position: {
      x: 200,
      y: 200
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    position: {
      x: 200,
      y: 200
    }
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveRender />
}`,...x.parameters?.docs?.source}}},S=[`OpenAtCenter`,`Closed`,`Interactive`]}))();export{y as Closed,x as Interactive,v as OpenAtCenter,S as __namedExportsOrder,_ as default};
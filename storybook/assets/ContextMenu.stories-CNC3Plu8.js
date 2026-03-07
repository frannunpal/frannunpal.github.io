import{j as e,r as l}from"./iframe-BNrdll36.js";import{A as u}from"./apps-B-6LmW0h.js";import{C as x}from"./ContextMenuAnchor-B1u3adIx.js";import{M as n}from"./Menu-Ch1qyj6L.js";import{B as g}from"./Button--RpCmFwV.js";import"./preload-helper-CRsgZnrw.js";import"./use-resolved-styles-api-CZsqKTpj.js";import"./polymorphic-factory-BW9slRGI.js";import"./Popover-DqYjx-9M.js";import"./OptionalPortal-BPKLB5ZY.js";import"./is-element-CoInZLNR.js";import"./Transition-DPFxZqvc.js";import"./index-CQr2-_tZ.js";import"./DirectionProvider-ChCYRQYr.js";import"./use-merged-ref-DpwU5jvX.js";import"./use-uncontrolled-n0Ml9xZi.js";import"./use-id-5ZNEkNgi.js";import"./UnstyledButton-BgOwkDkM.js";import"./AccordionChevron-D51JPf6N.js";import"./Loader-BLXZI6wm.js";const C=u.filter(t=>t.id!=="settings"),d=({opened:t,position:r,onClose:c,onOpenApp:p,onToggleTheme:o})=>e.jsxs(n,{opened:t,onClose:c,closeOnClickOutside:!0,closeOnEscape:!0,closeOnItemClick:!0,withinPortal:!0,children:[e.jsx(x,{x:r.x,y:r.y}),e.jsxs(n.Dropdown,{children:[C.map(m=>e.jsxs(n.Item,{onClick:()=>p(m.id),children:["Open ",m.name]},m.id)),e.jsx(n.Divider,{}),e.jsx(n.Item,{onClick:o,children:"Toggle Theme"})]})]});d.__docgenInfo={description:"",methods:[],displayName:"ContextMenu"};const X={title:"Common components/ContextMenu",component:d,parameters:{layout:"centered"}},s={args:{opened:!0,position:{x:200,y:200}}},i={args:{opened:!1,position:{x:200,y:200}}},h=()=>{const[t,r]=l.useState(!1),[c,p]=l.useState({x:0,y:0});return e.jsxs("div",{style:{width:600,height:400,background:"#1a1b1e",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"},onContextMenu:o=>{o.preventDefault(),p({x:o.clientX,y:o.clientY}),r(!0)},children:[e.jsx(g,{variant:"subtle",color:"gray",children:"Right-click anywhere in this area"}),e.jsx(d,{opened:t,position:c,onClose:()=>r(!1),onOpenApp:()=>{},onToggleTheme:()=>{}})]})},a={render:()=>e.jsx(h,{})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true,
    position: {
      x: 200,
      y: 200
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    position: {
      x: 200,
      y: 200
    }
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveRender />
}`,...a.parameters?.docs?.source}}};const U=["OpenAtCenter","Closed","Interactive"];export{i as Closed,a as Interactive,s as OpenAtCenter,U as __namedExportsOrder,X as default};

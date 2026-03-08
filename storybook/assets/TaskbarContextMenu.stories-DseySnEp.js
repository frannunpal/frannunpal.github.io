import{j as n,r,u as j}from"./iframe-U9dC9Cor.js";import{T as x}from"./TaskbarContextMenu-3WKSMOTL.js";import{u as i}from"./desktopStore-BmrVKCSf.js";import{W as P}from"./useWindowButtonRegistry-rcD5OXVH.js";import{u as k}from"./useDynamicIcon-B2vFVd2O.js";import"./preload-helper-D1UD9lgW.js";import"./ContextMenuAnchor-DirtRVq-.js";import"./Menu-BnSD2lCt.js";import"./use-resolved-styles-api-BuMwp7JB.js";import"./polymorphic-factory-DyzbqoLZ.js";import"./Popover-BF1G8HQF.js";import"./OptionalPortal-CIlUmR1F.js";import"./is-element-Bi8acN8O.js";import"./Transition-CkLLtgT1.js";import"./index-SsivZmaR.js";import"./DirectionProvider-Dir_r4eo.js";import"./use-merged-ref-WYOYf04b.js";import"./use-uncontrolled-B4fczV8L.js";import"./use-id-CiapeEnC.js";import"./UnstyledButton-VKVflIkY.js";import"./AccordionChevron-CAXHsCT_.js";import"./useOpenApp-CpsIN7bm.js";import"./apps-C9KmvF_j.js";import"./Animations-67kTFacj.js";import"./useAdaptiveDimensions-D5xa8B8u.js";import"./useTranslation-Cvul1C8x.js";import"./sortNodes-k3UPHZY_.js";const de={title:"Common components/TaskbarContextMenu",component:x,parameters:{layout:"fullscreen"},args:{menuPosition:{x:200,y:350},targetWindowId:"win-1",targetWindowState:"normal",onCloseWindow:()=>{},onMinimizeWindow:()=>{},onMaximizeWindow:()=>{},onRestoreWindow:()=>{},onWindowMenuClose:()=>{},onPanelMenuClose:()=>{}},decorators:[t=>n.jsx(P,{children:n.jsx("div",{style:{height:"100vh"},children:n.jsx(t,{})})})]},s={name:"Window menu — normal",args:{windowMenuOpened:!0,panelMenuOpened:!1,targetWindowState:"normal"}},d={name:"Window menu — minimized",args:{windowMenuOpened:!0,panelMenuOpened:!1,targetWindowState:"minimized"}},m={name:"Window menu — maximized",args:{windowMenuOpened:!0,panelMenuOpened:!1,targetWindowState:"maximized"}},p={args:{windowMenuOpened:!1,panelMenuOpened:!0}},l={args:{windowMenuOpened:!1,panelMenuOpened:!1}},R=[{title:"Notepad",content:"notepad",icon:"📝",fcIcon:"FcEditImage",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150},{title:"Terminal",content:"terminal",icon:"💻",fcIcon:"FcCommandLine",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}],T=({window:t,onContextMenu:o})=>{const c=k(t.fcIcon??"",{size:16});return n.jsxs("button",{style:{height:36,padding:"0 12px",background:"var(--mantine-color-default)",border:"1px solid var(--mantine-color-default-border)",borderRadius:6,color:"var(--mantine-color-text)",cursor:"pointer",fontSize:13,display:"flex",alignItems:"center",gap:6},onContextMenu:o,children:[c,t.title]},t.id)},E=()=>{const[t,o]=r.useState(!1),[c,g]=r.useState(!1),[h,O]=r.useState({x:0,y:0}),[w,S]=r.useState(null),M=i(e=>e.windows),W=i(e=>e.openWindow),z=i(e=>e.minimizeWindow),v=i(e=>e.maximizeWindow),b=i(e=>e.restoreWindow),y=i(e=>e.closeWindow),I=j(e=>e.theme.taskbar),C=w?M.find(e=>e.id===w)?.state??null:null;r.useEffect(()=>{i.setState({windows:[]}),R.forEach(e=>W(e))},[W]);const f=(e,a)=>{e.preventDefault(),e.stopPropagation(),O({x:e.clientX,y:e.clientY-8}),a?(S(a),o(!0)):g(!0)};return n.jsxs("div",{style:{height:"100vh",background:"var(--mantine-color-body)",display:"flex",alignItems:"flex-end"},children:[n.jsx("div",{style:{width:"100%",height:48,background:I,borderTop:"1px solid var(--mantine-color-default-border)",display:"flex",alignItems:"center",padding:"0 8px",gap:4},onContextMenu:e=>f(e),children:M.map(e=>n.jsx(T,{window:e,onContextMenu:a=>f(a,e.id)},e.id))}),n.jsx(x,{windowMenuOpened:t,panelMenuOpened:c,menuPosition:h,targetWindowId:w,targetWindowState:C,onCloseWindow:e=>{y(e),o(!1)},onMinimizeWindow:e=>{z(e),o(!1)},onMaximizeWindow:e=>{v(e),o(!1)},onRestoreWindow:e=>{b(e),o(!1)},onWindowMenuClose:()=>o(!1),onPanelMenuClose:()=>g(!1)})]})},u={render:()=>n.jsx(E,{})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Window menu — normal',
  args: {
    windowMenuOpened: true,
    panelMenuOpened: false,
    targetWindowState: 'normal'
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Window menu — minimized',
  args: {
    windowMenuOpened: true,
    panelMenuOpened: false,
    targetWindowState: 'minimized'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Window menu — maximized',
  args: {
    windowMenuOpened: true,
    panelMenuOpened: false,
    targetWindowState: 'maximized'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    windowMenuOpened: false,
    panelMenuOpened: true
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    windowMenuOpened: false,
    panelMenuOpened: false
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveRender />
}`,...u.parameters?.docs?.source}}};const me=["WindowMenuNormal","WindowMenuMinimized","WindowMenuMaximized","PanelMenu","BothClosed","Interactive"];export{l as BothClosed,u as Interactive,p as PanelMenu,m as WindowMenuMaximized,d as WindowMenuMinimized,s as WindowMenuNormal,me as __namedExportsOrder,de as default};

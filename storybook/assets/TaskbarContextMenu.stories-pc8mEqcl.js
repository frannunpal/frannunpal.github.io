import{n as e}from"./chunk-zsgVPwQN.js";import{Wt as t}from"./iframe-CEANyIen.js";import{n,t as r}from"./useWindowButtonRegistry-KZ4IeIH8.js";import{i,n as a,r as o,t as s}from"./TaskbarContextMenu-CC8fUxSJ.js";var c,l,u,d,f,p,m,h,g,_,v;e((()=>{a(),n(),o(),c=t(),l={title:`Common components/TaskbarContextMenu`,component:s,parameters:{layout:`fullscreen`},args:{menuPosition:{x:200,y:350},targetWindowId:`win-1`,targetWindowState:`normal`,onCloseWindow:()=>{},onMinimizeWindow:()=>{},onMaximizeWindow:()=>{},onRestoreWindow:()=>{},onClose:()=>{}},decorators:[e=>(0,c.jsx)(r,{children:(0,c.jsx)(`div`,{style:{height:`100vh`},children:(0,c.jsx)(e,{})})})]},u={name:`Window menu — normal`,args:{windowMenuOpened:!0,panelMenuOpened:!1,launcherMenuOpened:!1,targetWindowState:`normal`}},d={name:`Window menu — minimized`,args:{windowMenuOpened:!0,panelMenuOpened:!1,launcherMenuOpened:!1,targetWindowState:`minimized`}},f={name:`Window menu — maximized`,args:{windowMenuOpened:!0,panelMenuOpened:!1,launcherMenuOpened:!1,targetWindowState:`maximized`}},p={name:`Panel menu`,args:{windowMenuOpened:!1,panelMenuOpened:!0,launcherMenuOpened:!1}},m={name:`Launcher menu`,args:{windowMenuOpened:!1,panelMenuOpened:!1,launcherMenuOpened:!0}},h={name:`All menus closed`,args:{windowMenuOpened:!1,panelMenuOpened:!1,launcherMenuOpened:!1}},g=()=>{let{windowMenuOpened:e,panelMenuOpened:t,launcherMenuOpened:n,position:r,targetWindowId:a,openWindowMenu:o,openPanelMenu:l,closeMenu:u}=i(),d=[{id:`win-1`,title:`Notepad`,state:`normal`},{id:`win-2`,title:`Files`,state:`minimized`}],f=a?d.find(e=>e.id===a)?.state??`normal`:`normal`;return(0,c.jsxs)(`div`,{style:{height:`100vh`,background:`var(--mantine-color-body)`,display:`flex`,flexDirection:`column`},children:[(0,c.jsxs)(`div`,{style:{flex:1,padding:20},children:[(0,c.jsx)(`p`,{style:{color:`var(--mantine-color-text)`},children:`Right-click on any button below to open its context menu. The menu state is now unified - opening one menu will automatically close any other open menu.`}),(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,marginTop:16},children:d.map(e=>(0,c.jsx)(`button`,{onContextMenu:t=>o(t,e.id),style:{padding:`8px 16px`,background:`var(--mantine-color-default)`,border:`1px solid var(--mantine-color-default-border)`,borderRadius:4,cursor:`pointer`},children:e.title},e.id))})]}),(0,c.jsx)(`div`,{style:{padding:20,background:`var(--mantine-color-gray-1)`,borderTop:`1px solid var(--mantine-color-gray-3)`},onContextMenu:e=>{e.preventDefault(),l(e)},children:(0,c.jsx)(`span`,{children:`Right-click on this area for panel menu`})}),(0,c.jsx)(s,{windowMenuOpened:e,panelMenuOpened:t,launcherMenuOpened:n,menuPosition:r,targetWindowId:a,targetWindowState:f,onCloseWindow:()=>u(),onMinimizeWindow:()=>u(),onMaximizeWindow:()=>u(),onRestoreWindow:()=>u(),onClose:()=>u()})]})},_={name:`Interactive Example`,render:()=>(0,c.jsx)(g,{})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Window menu — normal',
  args: {
    windowMenuOpened: true,
    panelMenuOpened: false,
    launcherMenuOpened: false,
    targetWindowState: 'normal'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Window menu — minimized',
  args: {
    windowMenuOpened: true,
    panelMenuOpened: false,
    launcherMenuOpened: false,
    targetWindowState: 'minimized'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Window menu — maximized',
  args: {
    windowMenuOpened: true,
    panelMenuOpened: false,
    launcherMenuOpened: false,
    targetWindowState: 'maximized'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Panel menu',
  args: {
    windowMenuOpened: false,
    panelMenuOpened: true,
    launcherMenuOpened: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Launcher menu',
  args: {
    windowMenuOpened: false,
    panelMenuOpened: false,
    launcherMenuOpened: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All menus closed',
  args: {
    windowMenuOpened: false,
    panelMenuOpened: false,
    launcherMenuOpened: false
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Interactive Example',
  render: () => <InteractiveExample />
}`,..._.parameters?.docs?.source}}},v=[`WindowMenuNormal`,`WindowMenuMinimized`,`WindowMenuMaximized`,`PanelMenu`,`LauncherMenu`,`AllClosed`,`Interactive`]}))();export{h as AllClosed,_ as Interactive,m as LauncherMenu,p as PanelMenu,f as WindowMenuMaximized,d as WindowMenuMinimized,u as WindowMenuNormal,v as __namedExportsOrder,l as default};
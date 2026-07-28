import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{Gt as n,In as r,Xt as i,t as a}from"./iframe-wqeD3IfR.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{a(),o=t(),s={title:`Common components/TaskbarContextMenu`,component:n,parameters:{layout:`fullscreen`},args:{menuPosition:{x:200,y:350},targetWindowId:`win-1`,targetWindowState:`normal`,onCloseWindow:()=>{},onMinimizeWindow:()=>{},onMaximizeWindow:()=>{},onRestoreWindow:()=>{},onClose:()=>{}},decorators:[e=>(0,o.jsx)(r,{children:(0,o.jsx)(`div`,{style:{height:`100vh`},children:(0,o.jsx)(e,{})})})]},c={name:`Window menu — normal`,args:{windowMenuOpened:!0,panelMenuOpened:!1,launcherMenuOpened:!1,targetWindowState:`normal`}},l={name:`Window menu — minimized`,args:{windowMenuOpened:!0,panelMenuOpened:!1,launcherMenuOpened:!1,targetWindowState:`minimized`}},u={name:`Window menu — maximized`,args:{windowMenuOpened:!0,panelMenuOpened:!1,launcherMenuOpened:!1,targetWindowState:`maximized`}},d={name:`Panel menu`,args:{windowMenuOpened:!1,panelMenuOpened:!0,launcherMenuOpened:!1}},f={name:`Launcher menu`,args:{windowMenuOpened:!1,panelMenuOpened:!1,launcherMenuOpened:!0}},p={name:`All menus closed`,args:{windowMenuOpened:!1,panelMenuOpened:!1,launcherMenuOpened:!1}},m=()=>{let{windowMenuOpened:e,panelMenuOpened:t,launcherMenuOpened:r,position:a,targetWindowId:s,openWindowMenu:c,openPanelMenu:l,closeMenu:u}=i(),d=[{id:`win-1`,title:`Notepad`,state:`normal`},{id:`win-2`,title:`Files`,state:`minimized`}],f=s?d.find(e=>e.id===s)?.state??`normal`:`normal`;return(0,o.jsxs)(`div`,{style:{height:`100vh`,background:`var(--mantine-color-body)`,display:`flex`,flexDirection:`column`},children:[(0,o.jsxs)(`div`,{style:{flex:1,padding:20},children:[(0,o.jsx)(`p`,{style:{color:`var(--mantine-color-text)`},children:`Right-click on any button below to open its context menu. The menu state is now unified - opening one menu will automatically close any other open menu.`}),(0,o.jsx)(`div`,{style:{display:`flex`,gap:8,marginTop:16},children:d.map(e=>(0,o.jsx)(`button`,{onContextMenu:t=>c(t,e.id),style:{padding:`8px 16px`,background:`var(--mantine-color-default)`,border:`1px solid var(--mantine-color-default-border)`,borderRadius:4,cursor:`pointer`},children:e.title},e.id))})]}),(0,o.jsx)(`div`,{style:{padding:20,background:`var(--mantine-color-gray-1)`,borderTop:`1px solid var(--mantine-color-gray-3)`},onContextMenu:e=>{e.preventDefault(),l(e)},children:(0,o.jsx)(`span`,{children:`Right-click on this area for panel menu`})}),(0,o.jsx)(n,{windowMenuOpened:e,panelMenuOpened:t,launcherMenuOpened:r,menuPosition:a,targetWindowId:s,targetWindowState:f,onCloseWindow:()=>u(),onMinimizeWindow:()=>u(),onMaximizeWindow:()=>u(),onRestoreWindow:()=>u(),onClose:()=>u()})]})},h={name:`Interactive Example`,render:()=>(0,o.jsx)(m,{})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Window menu — normal',
  args: {
    windowMenuOpened: true,
    panelMenuOpened: false,
    launcherMenuOpened: false,
    targetWindowState: 'normal'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Window menu — minimized',
  args: {
    windowMenuOpened: true,
    panelMenuOpened: false,
    launcherMenuOpened: false,
    targetWindowState: 'minimized'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Window menu — maximized',
  args: {
    windowMenuOpened: true,
    panelMenuOpened: false,
    launcherMenuOpened: false,
    targetWindowState: 'maximized'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Panel menu',
  args: {
    windowMenuOpened: false,
    panelMenuOpened: true,
    launcherMenuOpened: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Launcher menu',
  args: {
    windowMenuOpened: false,
    panelMenuOpened: false,
    launcherMenuOpened: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All menus closed',
  args: {
    windowMenuOpened: false,
    panelMenuOpened: false,
    launcherMenuOpened: false
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Interactive Example',
  render: () => <InteractiveExample />
}`,...h.parameters?.docs?.source}}},g=[`WindowMenuNormal`,`WindowMenuMinimized`,`WindowMenuMaximized`,`PanelMenu`,`LauncherMenu`,`AllClosed`,`Interactive`]}))();export{p as AllClosed,h as Interactive,f as LauncherMenu,d as PanelMenu,u as WindowMenuMaximized,l as WindowMenuMinimized,c as WindowMenuNormal,g as __namedExportsOrder,s as default};
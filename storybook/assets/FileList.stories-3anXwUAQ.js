import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,t as n}from"./FileList-CJ_e2TgR.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Apps/FilesApp/FileList`,component:n,parameters:{layout:`fullscreen`}},i=[{id:`folder-1`,name:`Documents`,type:`folder`,parentId:`root`,children:[],createdAt:new Date,updatedAt:new Date},{id:`folder-2`,name:`Pictures`,type:`folder`,parentId:`root`,iconName:`VscImages`,iconColor:`#9b59b6`,children:[],createdAt:new Date,updatedAt:new Date},{id:`file-1`,name:`resume.pdf`,type:`file`,parentId:`root`,content:``,mimeType:`application/pdf`,createdAt:new Date,updatedAt:new Date},{id:`file-2`,name:`notes.txt`,type:`file`,parentId:`root`,content:`Hello world`,mimeType:`text/plain`,createdAt:new Date,updatedAt:new Date},{id:`file-3`,name:`readme.md`,type:`file`,parentId:`root`,content:`# Readme`,mimeType:`text/markdown`,createdAt:new Date,updatedAt:new Date}],a={args:{nodes:i,onNavigate:()=>{},onOpenFile:()=>{},onNodeContextMenu:()=>{}}},o={args:{nodes:[],onNavigate:()=>{},onOpenFile:()=>{},onNodeContextMenu:()=>{}}},s={args:{nodes:i.filter(e=>e.type===`folder`),onNavigate:()=>{},onOpenFile:()=>{},onNodeContextMenu:()=>{}}},c={args:{nodes:i.filter(e=>e.type===`file`),onNavigate:()=>{},onOpenFile:()=>{},onNodeContextMenu:()=>{}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: mockNodes,
    onNavigate: () => {},
    onOpenFile: () => {},
    onNodeContextMenu: () => {}
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: [],
    onNavigate: () => {},
    onOpenFile: () => {},
    onNodeContextMenu: () => {}
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: mockNodes.filter(n => n.type === 'folder'),
    onNavigate: () => {},
    onOpenFile: () => {},
    onNodeContextMenu: () => {}
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: mockNodes.filter(n => n.type === 'file'),
    onNavigate: () => {},
    onOpenFile: () => {},
    onNodeContextMenu: () => {}
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`EmptyFolder`,`OnlyFolders`,`OnlyFiles`]}))();export{a as Default,o as EmptyFolder,c as OnlyFiles,s as OnlyFolders,l as __namedExportsOrder,r as default};
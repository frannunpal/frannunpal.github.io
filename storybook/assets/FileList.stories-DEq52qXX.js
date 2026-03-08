import{F as s}from"./FileList-nI_E0peq.js";import"./iframe-DTUnew5m.js";import"./preload-helper-CRsgZnrw.js";import"./sortNodes-k3UPHZY_.js";import"./FileIcon-bD-ght3W.js";import"./useDynamicIcon-D5XK78SV.js";import"./Text-Ciw_5Qn7.js";import"./polymorphic-factory-C7kbvBSE.js";import"./UnstyledButton-BJTgS-FG.js";const N={title:"Apps/FilesApp/FileList",component:s,parameters:{layout:"fullscreen"}},a=[{id:"folder-1",name:"Documents",type:"folder",parentId:"root",children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-2",name:"Pictures",type:"folder",parentId:"root",iconName:"VscImages",iconColor:"#9b59b6",children:[],createdAt:new Date,updatedAt:new Date},{id:"file-1",name:"resume.pdf",type:"file",parentId:"root",content:"",mimeType:"application/pdf",createdAt:new Date,updatedAt:new Date},{id:"file-2",name:"notes.txt",type:"file",parentId:"root",content:"Hello world",mimeType:"text/plain",createdAt:new Date,updatedAt:new Date},{id:"file-3",name:"readme.md",type:"file",parentId:"root",content:"# Readme",mimeType:"text/markdown",createdAt:new Date,updatedAt:new Date}],e={args:{nodes:a,onNavigate:()=>{},onOpenFile:()=>{},onNodeContextMenu:()=>{}}},n={args:{nodes:[],onNavigate:()=>{},onOpenFile:()=>{},onNodeContextMenu:()=>{}}},t={args:{nodes:a.filter(r=>r.type==="folder"),onNavigate:()=>{},onOpenFile:()=>{},onNodeContextMenu:()=>{}}},o={args:{nodes:a.filter(r=>r.type==="file"),onNavigate:()=>{},onOpenFile:()=>{},onNodeContextMenu:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: mockNodes,
    onNavigate: () => {},
    onOpenFile: () => {},
    onNodeContextMenu: () => {}
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: [],
    onNavigate: () => {},
    onOpenFile: () => {},
    onNodeContextMenu: () => {}
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: mockNodes.filter(n => n.type === 'folder'),
    onNavigate: () => {},
    onOpenFile: () => {},
    onNodeContextMenu: () => {}
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: mockNodes.filter(n => n.type === 'file'),
    onNavigate: () => {},
    onOpenFile: () => {},
    onNodeContextMenu: () => {}
  }
}`,...o.parameters?.docs?.source}}};const y=["Default","EmptyFolder","OnlyFolders","OnlyFiles"];export{e as Default,n as EmptyFolder,o as OnlyFiles,t as OnlyFolders,y as __namedExportsOrder,N as default};

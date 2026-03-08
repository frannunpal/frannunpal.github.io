import{F as n}from"./FolderTree-B2prfp-g.js";import"./iframe-DTUnew5m.js";import"./preload-helper-CRsgZnrw.js";import"./FileIcon-bD-ght3W.js";import"./useDynamicIcon-D5XK78SV.js";import"./UnstyledButton-BJTgS-FG.js";import"./polymorphic-factory-C7kbvBSE.js";import"./Text-Ciw_5Qn7.js";const N={title:"Apps/FilesApp/FolderTree",component:n,parameters:{layout:"centered"}},d=[{id:"folder-desktop",name:"Desktop",type:"folder",parentId:null,children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-documents",name:"Documents",type:"folder",parentId:null,children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-pictures",name:"Pictures",type:"folder",parentId:null,children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-work",name:"Work",type:"folder",parentId:"folder-documents",children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-personal",name:"Personal",type:"folder",parentId:"folder-documents",children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-projects",name:"Projects",type:"folder",parentId:"folder-work",children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-reports",name:"Reports",type:"folder",parentId:"folder-work",children:[],createdAt:new Date,updatedAt:new Date}],e={args:{allNodes:d,currentFolderId:"folder-documents",onNavigate:()=>{}}},r={args:{allNodes:d,currentFolderId:null,onNavigate:()=>{}}},t={args:{allNodes:d,currentFolderId:"folder-desktop",onNavigate:()=>{}}},o={args:{allNodes:[],currentFolderId:null,onNavigate:()=>{}}},a={args:{allNodes:d,currentFolderId:"folder-projects",onNavigate:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    allNodes: mockNodes,
    currentFolderId: 'folder-documents',
    onNavigate: () => {}
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    allNodes: mockNodes,
    currentFolderId: null,
    onNavigate: () => {}
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    allNodes: mockNodes,
    currentFolderId: 'folder-desktop',
    onNavigate: () => {}
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    allNodes: [],
    currentFolderId: null,
    onNavigate: () => {}
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    allNodes: mockNodes,
    currentFolderId: 'folder-projects',
    onNavigate: () => {}
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","AtRoot","AtDesktop","Empty","DeepNested"];export{t as AtDesktop,r as AtRoot,a as DeepNested,e as Default,o as Empty,g as __namedExportsOrder,N as default};

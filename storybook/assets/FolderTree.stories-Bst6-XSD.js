import{F as n}from"./FolderTree-CP82asWx.js";import"./iframe-U9dC9Cor.js";import"./preload-helper-D1UD9lgW.js";import"./FileIcon-hHMFxt38.js";import"./useDynamicIcon-B2vFVd2O.js";import"./UnstyledButton-VKVflIkY.js";import"./polymorphic-factory-DyzbqoLZ.js";import"./Text-Dtnqn3Bo.js";const N={title:"Apps/FilesApp/FolderTree",component:n,parameters:{layout:"centered"}},d=[{id:"folder-desktop",name:"Desktop",type:"folder",parentId:null,children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-documents",name:"Documents",type:"folder",parentId:null,children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-pictures",name:"Pictures",type:"folder",parentId:null,children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-work",name:"Work",type:"folder",parentId:"folder-documents",children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-personal",name:"Personal",type:"folder",parentId:"folder-documents",children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-projects",name:"Projects",type:"folder",parentId:"folder-work",children:[],createdAt:new Date,updatedAt:new Date},{id:"folder-reports",name:"Reports",type:"folder",parentId:"folder-work",children:[],createdAt:new Date,updatedAt:new Date}],e={args:{allNodes:d,currentFolderId:"folder-documents",onNavigate:()=>{}}},r={args:{allNodes:d,currentFolderId:null,onNavigate:()=>{}}},t={args:{allNodes:d,currentFolderId:"folder-desktop",onNavigate:()=>{}}},o={args:{allNodes:[],currentFolderId:null,onNavigate:()=>{}}},a={args:{allNodes:d,currentFolderId:"folder-projects",onNavigate:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

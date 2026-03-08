import{F as l}from"./FileIcon-bD-ght3W.js";import"./iframe-DTUnew5m.js";import"./preload-helper-CRsgZnrw.js";import"./useDynamicIcon-D5XK78SV.js";const y={title:"Apps/FilesApp/FileIcon",component:l,parameters:{layout:"centered"}},p={id:"folder-1",name:"TestFolder",type:"folder",parentId:null,children:[],createdAt:new Date,updatedAt:new Date},i={...p,iconName:"VscHome",iconColor:"#ff6b6b"},e={args:{type:"folder",name:"MyFolder",folderNode:p}},r={args:{type:"folder",name:"MyFolder",folderNode:i}},o={args:{type:"file",name:"document.pdf"}},a={args:{type:"file",name:"readme.md"}},s={args:{type:"file",name:"notes.txt"}},n={args:{type:"file",name:"photo.png"}},t={args:{type:"file",name:"App.tsx"}},c={args:{type:"file",name:"config.json"}},d={args:{type:"file",name:"unknown.xyz"}},m={args:{type:"file",name:"document.pdf",size:48}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'folder',
    name: 'MyFolder',
    folderNode: mockFolderNode
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'folder',
    name: 'MyFolder',
    folderNode: mockFolderNodeWithIcon
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file',
    name: 'document.pdf'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file',
    name: 'readme.md'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file',
    name: 'notes.txt'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file',
    name: 'photo.png'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file',
    name: 'App.tsx'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file',
    name: 'config.json'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file',
    name: 'unknown.xyz'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file',
    name: 'document.pdf',
    size: 48
  }
}`,...m.parameters?.docs?.source}}};const S=["Folder","FolderWithCustomIcon","FilePdf","FileMarkdown","FileText","FileImage","FileCode","FileJson","FileUnknown","LargeSize"];export{t as FileCode,n as FileImage,c as FileJson,a as FileMarkdown,o as FilePdf,s as FileText,d as FileUnknown,e as Folder,r as FolderWithCustomIcon,m as LargeSize,S as __namedExportsOrder,y as default};

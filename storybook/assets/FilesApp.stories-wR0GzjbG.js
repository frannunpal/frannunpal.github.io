import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{s as i}from"./desktopStore-DNNBRfLb.js";import{ct as a,lt as o,t as s}from"./iframe-C8vRVE0J.js";import c,{t as l}from"./FilesApp-BvSKg5Os.js";import{a as u,s as d}from"./testUtils-v-c9Bf2o.js";import{n as f,t as p}from"./Storybook-DxjZv8mk.js";var m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{l(),o(),p(),s(),m=t(n(),1),h=r(),g={title:`Apps/FilesApp`,component:c,parameters:{layout:`fullscreen`}},_=u(),v=({sortMode:e}={})=>((0,m.useEffect)(()=>{e&&i.setState({filesSortMode:e})},[e]),(0,h.jsx)(f,{win:d({title:`Files`,content:`files`,fcIcon:`FcOpenedFolder`,width:700,height:480}),fsNodes:_})),y=({sortMode:e}={})=>((0,m.useEffect)(()=>{e&&i.setState({filesSortMode:e});let t=setTimeout(()=>{i.setState({contextMenu:{x:160,y:120,owner:`files`}})},100);return()=>clearTimeout(t)},[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{win:d({title:`Files`,content:`files`,fcIcon:`FcOpenedFolder`,width:700,height:480}),fsNodes:_}),(0,h.jsx)(a,{owner:`files`,parentId:`folder-documents`,currentPath:`/home/Documents`})]})),b={render:()=>(0,h.jsx)(v,{})},x={render:()=>(0,h.jsx)(f,{win:d({title:`Files`,content:`files`,fcIcon:`FcOpenedFolder`,width:700,height:480}),fsNodes:[]})},S={render:()=>(0,h.jsx)(y,{sortMode:`default`})},C={render:()=>(0,h.jsx)(y,{sortMode:`name-asc`})},w={render:()=>(0,h.jsx)(y,{sortMode:`name-desc`})},T={render:()=>(0,h.jsx)(y,{sortMode:`type`})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FilesAppWithSort />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    title: 'Files',
    content: 'files',
    fcIcon: 'FcOpenedFolder',
    width: 700,
    height: 480
  })} fsNodes={[]} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <FilesAppWithContextMenuOpen sortMode="default" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <FilesAppWithContextMenuOpen sortMode="name-asc" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <FilesAppWithContextMenuOpen sortMode="name-desc" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <FilesAppWithContextMenuOpen sortMode="type" />
}`,...T.parameters?.docs?.source}}},E=[`Default`,`EmptyFolder`,`SortDefault`,`SortNameAsc`,`SortNameDesc`,`SortByType`]}))();export{b as Default,x as EmptyFolder,T as SortByType,S as SortDefault,C as SortNameAsc,w as SortNameDesc,E as __namedExportsOrder,g as default};
import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$ as n,Bn as r,Xn as i,et as a,jt as o,nn as s,t as c,zn as l}from"./iframe-BVRYlV5g.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{u=t(i(),1),s(),a(),c(),d=r(),f=`folder-desktop`,p={id:`file-1`,name:`my-document.txt`,type:`file`,parentId:f,content:``,mimeType:`text/plain`,createdAt:new Date,updatedAt:new Date},m={id:`folder-1`,name:`My Projects`,type:`folder`,parentId:f,children:[],iconName:void 0,iconColor:void 0,createdAt:new Date,updatedAt:new Date},h=({contextMenu:e,fsNodes:t,clipboard:n,desktopSortMode:r,filesSortMode:i})=>((0,u.useEffect)(()=>{o.setState({contextMenu:{x:160,y:120,owner:`desktop`,...e},fsNodes:t??[],clipboard:n??{content:[],action:null},desktopSortMode:r??`default`,filesSortMode:i??`default`})},[n,e,t,r,i]),null),g={title:`Common components/CreateItemContextMenu`,component:n,parameters:{layout:`centered`},decorators:[e=>(0,d.jsx)(l,{children:(0,d.jsx)(`div`,{style:{width:400,height:300,background:`#f5f5f5`,borderRadius:8,position:`relative`},children:(0,d.jsx)(e,{})})})]},_={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{}),(0,d.jsx)(n,{owner:`desktop`,parentId:f,currentPath:`/home/Desktop`})]})},v={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{clipboard:{content:[p],action:`copy`},fsNodes:[p]}),(0,d.jsx)(n,{owner:`desktop`,parentId:f,currentPath:`/home/Desktop`})]})},y={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{contextMenu:{targetNodeId:p.id},fsNodes:[p]}),(0,d.jsx)(n,{owner:`desktop`,parentId:f,currentPath:`/home/Desktop`})]})},b={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{clipboard:{content:[p],action:`copy`},contextMenu:{targetNodeId:p.id},fsNodes:[p]}),(0,d.jsx)(n,{owner:`desktop`,parentId:f,currentPath:`/home/Desktop`})]})},x={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{contextMenu:{targetNodeId:m.id},fsNodes:[m]}),(0,d.jsx)(n,{owner:`desktop`,parentId:f,currentPath:`/home/Desktop`})]})},S={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{desktopSortMode:`default`}),(0,d.jsx)(n,{owner:`desktop`,parentId:f,currentPath:`/home/Desktop`})]})},C={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{desktopSortMode:`name-asc`}),(0,d.jsx)(n,{owner:`desktop`,parentId:f,currentPath:`/home/Desktop`})]})},w={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{desktopSortMode:`name-desc`}),(0,d.jsx)(n,{owner:`desktop`,parentId:f,currentPath:`/home/Desktop`})]})},T={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{desktopSortMode:`type`}),(0,d.jsx)(n,{owner:`desktop`,parentId:f,currentPath:`/home/Desktop`})]})},E={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{contextMenu:{owner:`files`},filesSortMode:`default`}),(0,d.jsx)(n,{owner:`files`,parentId:`folder-documents`,currentPath:`/home/Documents`})]})},D={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{contextMenu:{owner:`files`},filesSortMode:`name-asc`}),(0,d.jsx)(n,{owner:`files`,parentId:`folder-documents`,currentPath:`/home/Documents`})]})},O={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{contextMenu:{owner:`files`},filesSortMode:`name-desc`}),(0,d.jsx)(n,{owner:`files`,parentId:`folder-documents`,currentPath:`/home/Documents`})]})},k={render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{contextMenu:{owner:`files`},filesSortMode:`type`}),(0,d.jsx)(n,{owner:`files`,parentId:`folder-documents`,currentPath:`/home/Documents`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup />
      <CreateItemContextMenu owner="desktop" parentId={PARENT_ID} currentPath="/home/Desktop" />
    </>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup clipboard={{
      content: [mockFile],
      action: 'copy'
    }} fsNodes={[mockFile]} />
      <CreateItemContextMenu owner="desktop" parentId={PARENT_ID} currentPath="/home/Desktop" />
    </>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup contextMenu={{
      targetNodeId: mockFile.id
    }} fsNodes={[mockFile]} />
      <CreateItemContextMenu owner="desktop" parentId={PARENT_ID} currentPath="/home/Desktop" />
    </>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup clipboard={{
      content: [mockFile],
      action: 'copy'
    }} contextMenu={{
      targetNodeId: mockFile.id
    }} fsNodes={[mockFile]} />
      <CreateItemContextMenu owner="desktop" parentId={PARENT_ID} currentPath="/home/Desktop" />
    </>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup contextMenu={{
      targetNodeId: mockFolder.id
    }} fsNodes={[mockFolder]} />
      <CreateItemContextMenu owner="desktop" parentId={PARENT_ID} currentPath="/home/Desktop" />
    </>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup desktopSortMode="default" />
      <CreateItemContextMenu owner="desktop" parentId={PARENT_ID} currentPath="/home/Desktop" />
    </>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup desktopSortMode="name-asc" />
      <CreateItemContextMenu owner="desktop" parentId={PARENT_ID} currentPath="/home/Desktop" />
    </>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup desktopSortMode="name-desc" />
      <CreateItemContextMenu owner="desktop" parentId={PARENT_ID} currentPath="/home/Desktop" />
    </>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup desktopSortMode="type" />
      <CreateItemContextMenu owner="desktop" parentId={PARENT_ID} currentPath="/home/Desktop" />
    </>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup contextMenu={{
      owner: 'files'
    }} filesSortMode="default" />
      <CreateItemContextMenu owner="files" parentId="folder-documents" currentPath="/home/Documents" />
    </>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup contextMenu={{
      owner: 'files'
    }} filesSortMode="name-asc" />
      <CreateItemContextMenu owner="files" parentId="folder-documents" currentPath="/home/Documents" />
    </>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup contextMenu={{
      owner: 'files'
    }} filesSortMode="name-desc" />
      <CreateItemContextMenu owner="files" parentId="folder-documents" currentPath="/home/Documents" />
    </>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StoreSetup contextMenu={{
      owner: 'files'
    }} filesSortMode="type" />
      <CreateItemContextMenu owner="files" parentId="folder-documents" currentPath="/home/Documents" />
    </>
}`,...k.parameters?.docs?.source}}},A=[`CreateMode`,`CreateModeWithPaste`,`TargetFile`,`TargetFileWithPaste`,`TargetFolder`,`DesktopSortDefault`,`DesktopSortNameAsc`,`DesktopSortNameDesc`,`DesktopSortByType`,`FilesSortDefault`,`FilesSortNameAsc`,`FilesSortNameDesc`,`FilesSortByType`]}))();export{_ as CreateMode,v as CreateModeWithPaste,T as DesktopSortByType,S as DesktopSortDefault,C as DesktopSortNameAsc,w as DesktopSortNameDesc,k as FilesSortByType,E as FilesSortDefault,D as FilesSortNameAsc,O as FilesSortNameDesc,y as TargetFile,b as TargetFileWithPaste,x as TargetFolder,A as __namedExportsOrder,g as default};
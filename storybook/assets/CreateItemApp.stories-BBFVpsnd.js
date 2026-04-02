import{n as e}from"./chunk-zsgVPwQN.js";import{Wt as t}from"./iframe-D5qGmMgA.js";import{n,t as r}from"./CreateItemApp-C14-zwYs.js";var i,a=e((()=>{i=(e={})=>({id:`test-window`,title:`Test Window`,content:`test`,x:0,y:0,width:800,height:600,minWidth:640,minHeight:480,isOpen:!0,state:`normal`,zIndex:1,contentData:{},...e})})),o,s,c,l,u;e((()=>{n(),a(),o=t(),s={title:`Shared/CreateItemApp`,component:r,parameters:{layout:`centered`}},c={render:()=>(0,o.jsx)(r,{window:i({content:`createItem`,contentData:{mode:`folder`,parentId:`folder-desktop`,currentPath:`/home/Desktop`}})})},l={render:()=>(0,o.jsx)(r,{window:i({content:`createItem`,contentData:{mode:`file`,parentId:`folder-desktop`,currentPath:`/home/Desktop`}})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <CreateItemApp window={createMockWindowEntity({
    content: 'createItem',
    contentData: {
      mode: 'folder',
      parentId: 'folder-desktop',
      currentPath: '/home/Desktop'
    }
  })} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <CreateItemApp window={createMockWindowEntity({
    content: 'createItem',
    contentData: {
      mode: 'file',
      parentId: 'folder-desktop',
      currentPath: '/home/Desktop'
    }
  })} />
}`,...l.parameters?.docs?.source}}},u=[`NewFolder`,`NewFile`]}))();export{l as NewFile,c as NewFolder,u as __namedExportsOrder,s as default};
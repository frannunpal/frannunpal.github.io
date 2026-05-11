import{n as e}from"./chunk-jRWAZmH_.js";import{wi as t}from"./iframe-D_Nu-XZb.js";import{s as n}from"./testUtils-DOwt75rj.js";import{t as r}from"./Storybook-BnKkctl2.js";import i,{t as a}from"./CreateItemApp-BXQ7U-FA.js";var o,s,c,l,u,d;e((()=>{a(),r(),o=t(),s=n,c={title:`Shared/CreateItemApp`,component:i,parameters:{layout:`centered`}},l={render:()=>(0,o.jsx)(i,{window:s({content:`createItem`,contentData:{mode:`folder`,parentId:`folder-desktop`,currentPath:`/home/Desktop`}})})},u={render:()=>(0,o.jsx)(i,{window:s({content:`createItem`,contentData:{mode:`file`,parentId:`folder-desktop`,currentPath:`/home/Desktop`}})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <CreateItemApp window={createMockWindowEntity({
    content: 'createItem',
    contentData: {
      mode: 'folder',
      parentId: 'folder-desktop',
      currentPath: '/home/Desktop'
    }
  })} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <CreateItemApp window={createMockWindowEntity({
    content: 'createItem',
    contentData: {
      mode: 'file',
      parentId: 'folder-desktop',
      currentPath: '/home/Desktop'
    }
  })} />
}`,...u.parameters?.docs?.source}}},d=[`NewFolder`,`NewFile`]}))();export{u as NewFile,l as NewFolder,d as __namedExportsOrder,c as default};
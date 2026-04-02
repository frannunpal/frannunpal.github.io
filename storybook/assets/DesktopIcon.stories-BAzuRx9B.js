import{n as e}from"./chunk-zsgVPwQN.js";import{Wt as t,b as n,x as r}from"./iframe-NthRssR6.js";import{n as i,t as a}from"./Icons-BM9mw0-R.js";import{n as o,t as s}from"./DesktopIcon-BDUK6uYk.js";var c,l,u,d,f,p,m,h;e((()=>{o(),r(),i(),c=t(),l=n.map(e=>e.id),u={title:`Common components/DesktopIcon`,component:s,argTypes:{icon:{control:!1}},decorators:[e=>(0,c.jsx)(`div`,{style:{position:`relative`,width:200,height:200,background:`var(--mantine-color-body)`},children:(0,c.jsx)(e,{})})]},d={argTypes:{appId:{control:`select`,options:l}},args:{appId:`notepad`},render:({appId:e})=>{let t=n.find(t=>t.id===e);return(0,c.jsx)(s,{icon:{id:`1`,name:t.name,icon:t.icon,x:20,y:20,appId:e},onDoubleClick:()=>{},onContextMenu:()=>{}})}},f={argTypes:{appId:{control:`select`,options:l}},args:{appId:`files`},render:({appId:e})=>(0,c.jsx)(s,{icon:{id:`2`,name:`readme.txt`,icon:n.find(t=>t.id===e).icon,x:20,y:20,appId:e,nodeId:`node-1`},onDoubleClick:()=>{},onContextMenu:()=>{}})},p={argTypes:{iconName:{control:`select`,options:a},iconColor:{control:`color`}},args:{iconName:`VscFolder`,iconColor:`#4A90E2`},render:({iconName:e,iconColor:t})=>(0,c.jsx)(s,{icon:{id:`4`,name:`Projects`,icon:`📁`,x:20,y:20,appId:`files`,nodeId:`node-2`,iconName:e,iconColor:t},onDoubleClick:()=>{},onContextMenu:()=>{}})},m={argTypes:{name:{control:`text`},appId:{control:`select`,options:l}},args:{name:`Very Long Application Name`,appId:`files`},render:({name:e,appId:t})=>(0,c.jsx)(s,{icon:{id:`5`,name:e,icon:n.find(e=>e.id===t).icon,x:20,y:20,appId:t},onDoubleClick:()=>{},onContextMenu:()=>{}})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  argTypes: {
    appId: {
      control: 'select',
      options: appIds
    }
  },
  args: {
    appId: 'notepad'
  },
  render: ({
    appId
  }) => {
    const app = APPS.find(a => a.id === appId)!;
    return <DesktopIcon icon={{
      id: '1',
      name: app.name,
      icon: app.icon,
      x: 20,
      y: 20,
      appId
    }} onDoubleClick={() => {}} onContextMenu={() => {}} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  argTypes: {
    appId: {
      control: 'select',
      options: appIds
    }
  },
  args: {
    appId: 'files'
  },
  render: ({
    appId
  }) => {
    const app = APPS.find(a => a.id === appId)!;
    return <DesktopIcon icon={{
      id: '2',
      name: 'readme.txt',
      icon: app.icon,
      x: 20,
      y: 20,
      appId,
      nodeId: 'node-1'
    }} onDoubleClick={() => {}} onContextMenu={() => {}} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  argTypes: {
    iconName: {
      control: 'select',
      options: PRESET_ICONS
    },
    iconColor: {
      control: 'color'
    }
  },
  args: {
    iconName: 'VscFolder',
    iconColor: '#4A90E2'
  },
  render: ({
    iconName,
    iconColor
  }) => <DesktopIcon icon={{
    id: '4',
    name: 'Projects',
    icon: '📁',
    x: 20,
    y: 20,
    appId: 'files',
    nodeId: 'node-2',
    iconName,
    iconColor
  }} onDoubleClick={() => {}} onContextMenu={() => {}} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  argTypes: {
    name: {
      control: 'text'
    },
    appId: {
      control: 'select',
      options: appIds
    }
  },
  args: {
    name: 'Very Long Application Name',
    appId: 'files'
  },
  render: ({
    name,
    appId
  }) => {
    const app = APPS.find(a => a.id === appId)!;
    return <DesktopIcon icon={{
      id: '5',
      name,
      icon: app.icon,
      x: 20,
      y: 20,
      appId
    }} onDoubleClick={() => {}} onContextMenu={() => {}} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`AppIcon`,`FileNode`,`FolderCustomIcon`,`LongName`]}))();export{d as AppIcon,f as FileNode,p as FolderCustomIcon,m as LongName,h as __namedExportsOrder,u as default};
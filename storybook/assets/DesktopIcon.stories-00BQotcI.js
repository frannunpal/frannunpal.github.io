import{n as e}from"./chunk-zsgVPwQN.js";import{b as t,qt as n,x as r}from"./iframe-BB4AvYqh.js";import{n as i,t as a}from"./Icons-BZ7b4iuc.js";import{n as o,t as s}from"./DesktopIcon-C8EAlK8Q.js";var c,l,u,d,f,p,m,h;e((()=>{o(),r(),i(),c=n(),l=t.map(e=>e.id),u={title:`Common components/DesktopIcon`,component:s,argTypes:{icon:{control:!1}},decorators:[e=>(0,c.jsx)(`div`,{style:{position:`relative`,width:200,height:200,background:`var(--mantine-color-body)`},children:(0,c.jsx)(e,{})})]},d={argTypes:{appId:{control:`select`,options:l}},args:{appId:`notepad`},render:({appId:e})=>{let n=t.find(t=>t.id===e);return(0,c.jsx)(s,{icon:{id:`1`,name:n.name,icon:n.icon,x:20,y:20,appId:e},onDoubleClick:()=>{},onContextMenu:()=>{}})}},f={argTypes:{appId:{control:`select`,options:l}},args:{appId:`files`},render:({appId:e})=>(0,c.jsx)(s,{icon:{id:`2`,name:`readme.txt`,icon:t.find(t=>t.id===e).icon,x:20,y:20,appId:e,nodeId:`node-1`},onDoubleClick:()=>{},onContextMenu:()=>{}})},p={argTypes:{iconName:{control:`select`,options:a},iconColor:{control:`color`}},args:{iconName:`VscFolder`,iconColor:`#4A90E2`},render:({iconName:e,iconColor:t})=>(0,c.jsx)(s,{icon:{id:`4`,name:`Projects`,icon:`📁`,x:20,y:20,appId:`files`,nodeId:`node-2`,iconName:e,iconColor:t},onDoubleClick:()=>{},onContextMenu:()=>{}})},m={argTypes:{name:{control:`text`},appId:{control:`select`,options:l}},args:{name:`Very Long Application Name`,appId:`files`},render:({name:e,appId:n})=>(0,c.jsx)(s,{icon:{id:`5`,name:e,icon:t.find(e=>e.id===n).icon,x:20,y:20,appId:n},onDoubleClick:()=>{},onContextMenu:()=>{}})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
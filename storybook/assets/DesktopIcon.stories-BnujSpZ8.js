import{j as e}from"./iframe-DTUnew5m.js";import{D as a}from"./DesktopIcon-DCmJSS2Y.js";import{A as i}from"./apps-B-6LmW0h.js";import{P as m}from"./Icons-2dF7msl8.js";import"./preload-helper-CRsgZnrw.js";import"./FileIcon-bD-ght3W.js";import"./useDynamicIcon-D5XK78SV.js";import"./AppIcon-BAFT5x1f.js";import"./Text-Ciw_5Qn7.js";import"./polymorphic-factory-C7kbvBSE.js";const d=i.map(n=>n.id),P={title:"Common components/DesktopIcon",component:a,argTypes:{icon:{control:!1}},decorators:[n=>e.jsx("div",{style:{position:"relative",width:200,height:200,background:"var(--mantine-color-body)"},children:e.jsx(n,{})})]},p={argTypes:{appId:{control:"select",options:d}},args:{appId:"notepad"},render:({appId:n})=>{const o=i.find(r=>r.id===n);return e.jsx(a,{icon:{id:"1",name:o.name,icon:o.icon,x:20,y:20,appId:n},onDoubleClick:()=>{},onContextMenu:()=>{}})}},t={argTypes:{appId:{control:"select",options:d}},args:{appId:"files"},render:({appId:n})=>{const o=i.find(r=>r.id===n);return e.jsx(a,{icon:{id:"2",name:"readme.txt",icon:o.icon,x:20,y:20,appId:n,nodeId:"node-1"},onDoubleClick:()=>{},onContextMenu:()=>{}})}},c={argTypes:{iconName:{control:"select",options:m},iconColor:{control:"color"}},args:{iconName:"VscFolder",iconColor:"#4A90E2"},render:({iconName:n,iconColor:o})=>e.jsx(a,{icon:{id:"4",name:"Projects",icon:"📁",x:20,y:20,appId:"files",nodeId:"node-2",iconName:n,iconColor:o},onDoubleClick:()=>{},onContextMenu:()=>{}})},s={argTypes:{name:{control:"text"},appId:{control:"select",options:d}},args:{name:"Very Long Application Name",appId:"files"},render:({name:n,appId:o})=>{const r=i.find(l=>l.id===o);return e.jsx(a,{icon:{id:"5",name:n,icon:r.icon,x:20,y:20,appId:o},onDoubleClick:()=>{},onContextMenu:()=>{}})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const S=["AppIcon","FileNode","FolderCustomIcon","LongName"];export{p as AppIcon,t as FileNode,c as FolderCustomIcon,s as LongName,S as __namedExportsOrder,P as default};

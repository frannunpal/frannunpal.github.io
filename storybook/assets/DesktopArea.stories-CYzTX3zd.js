import{u as l,r as u,j as p}from"./iframe-BNrdll36.js";import{u as h,T as x}from"./desktopStore-6p6olQk_.js";import{d as I}from"./wallpaper-DBrFTLr9.js";import{D}from"./DesktopIcon-Br3nikSK.js";import{A as f}from"./apps-B-6LmW0h.js";import"./preload-helper-CRsgZnrw.js";import"./sortNodes-k3UPHZY_.js";import"./FileIcon-CS6U7Dwq.js";import"./index-05f7sRL8.js";import"./iconBase-C-XepopT.js";import"./AppIcon-Du5WmxoY.js";import"./useDynamicIcon-C2kRcZsm.js";import"./Text-CfvHUHkT.js";import"./polymorphic-factory-BW9slRGI.js";const b="_root_1z0nr_1",A={root:b},c=({children:o,onContextMenu:t})=>{const s=l(e=>e.theme.desktop),g=l(e=>e.wallpaper),i=h(e=>e.setViewportHeight),m=u.useRef(null);return u.useEffect(()=>{const e=m.current;if(!e)return;const d=new ResizeObserver(k=>{const a=k[0]?.contentRect.height;a&&a>0&&i(a)});return d.observe(e),()=>d.disconnect()},[i]),p.jsx("div",{ref:m,className:A.root,style:{"--taskbar-height":`${x}px`,backgroundColor:s,backgroundImage:`url(${g??I})`,backgroundSize:"cover",backgroundPosition:"center"},onContextMenu:t,children:o})};c.__docgenInfo={description:"",methods:[],displayName:"DesktopArea"};const N={title:"Common components/DesktopArea",component:c,parameters:{layout:"fullscreen"}},y=f.map(o=>o.id),r={},n={argTypes:{appId:{control:"select",options:y}},args:{appId:"notepad"},render:({appId:o})=>{const t=f.find(s=>s.id===o);return p.jsx(c,{children:p.jsx(D,{icon:{id:"1",name:t.name,icon:t.icon,x:20,y:20,appId:o},onDoubleClick:()=>{},onContextMenu:()=>{}})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    return <DesktopArea>
        <DesktopIcon icon={{
        id: '1',
        name: app.name,
        icon: app.icon,
        x: 20,
        y: 20,
        appId
      }} onDoubleClick={() => {}} onContextMenu={() => {}} />
      </DesktopArea>;
  }
}`,...n.parameters?.docs?.source}}};const O=["Empty","WithChildren"];export{r as Empty,n as WithChildren,O as __namedExportsOrder,N as default};

import{u,r as f,j as c}from"./iframe-U9dC9Cor.js";import{u as h,T as D}from"./desktopStore-BmrVKCSf.js";import{u as S}from"./useResolvedUrl-97qfKVBS.js";import{d as b}from"./wallpaper-aTrUdOVb.js";import{D as A}from"./DesktopIcon-BG_2PZfj.js";import{A as k}from"./apps-C9KmvF_j.js";import"./preload-helper-D1UD9lgW.js";import"./sortNodes-k3UPHZY_.js";import"./FileIcon-hHMFxt38.js";import"./useDynamicIcon-B2vFVd2O.js";import"./AppIcon-CBbNJwn9.js";import"./Text-Dtnqn3Bo.js";import"./polymorphic-factory-DyzbqoLZ.js";const y="_root_1z0nr_1",v={root:y},i=({children:o,onContextMenu:r})=>{const s=u(e=>e.theme.desktop),g=u(e=>e.wallpaper),x=S(g??void 0),d=h(e=>e.setViewportSize),m=f.useRef(null);return f.useEffect(()=>{const e=m.current;if(!e)return;const l=new ResizeObserver(I=>{const{width:a,height:p}=I[0]?.contentRect??{};a&&a>0&&p&&p>0&&d(a,p)});return l.observe(e),()=>l.disconnect()},[d]),c.jsx("div",{ref:m,className:v.root,style:{"--taskbar-height":`${D}px`,backgroundColor:s,backgroundImage:`url(${x??b})`,backgroundSize:"cover",backgroundPosition:"center"},onContextMenu:r,children:o})};i.__docgenInfo={description:"",methods:[],displayName:"DesktopArea"};const V={title:"Common components/DesktopArea",component:i,parameters:{layout:"fullscreen"}},C=k.map(o=>o.id),t={},n={argTypes:{appId:{control:"select",options:C}},args:{appId:"notepad"},render:({appId:o})=>{const r=k.find(s=>s.id===o);return c.jsx(i,{children:c.jsx(A,{icon:{id:"1",name:r.name,icon:r.icon,x:20,y:20,appId:o},onDoubleClick:()=>{},onContextMenu:()=>{}})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $=["Empty","WithChildren"];export{t as Empty,n as WithChildren,$ as __namedExportsOrder,V as default};

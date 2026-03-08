import{u,r as f,j as c}from"./iframe-EBfrZQCs.js";import{u as h,T as D}from"./desktopStore-CwB-cdNj.js";import{u as S}from"./useResolvedUrl-BzH8qatV.js";import{d as b}from"./wallpaper-DBrFTLr9.js";import{D as A}from"./DesktopIcon-DJ8WMWQy.js";import{A as k}from"./apps-B-6LmW0h.js";import"./preload-helper-CRsgZnrw.js";import"./sortNodes-k3UPHZY_.js";import"./FileIcon-DqfSu0yB.js";import"./useDynamicIcon-Z1W58oY5.js";import"./AppIcon-CIm0Tuzm.js";import"./Text-CmGhEjeA.js";import"./polymorphic-factory-CitjaWgV.js";const y="_root_1z0nr_1",v={root:y},i=({children:o,onContextMenu:r})=>{const s=u(e=>e.theme.desktop),g=u(e=>e.wallpaper),x=S(g??void 0),d=h(e=>e.setViewportSize),m=f.useRef(null);return f.useEffect(()=>{const e=m.current;if(!e)return;const l=new ResizeObserver(I=>{const{width:a,height:p}=I[0]?.contentRect??{};a&&a>0&&p&&p>0&&d(a,p)});return l.observe(e),()=>l.disconnect()},[d]),c.jsx("div",{ref:m,className:v.root,style:{"--taskbar-height":`${D}px`,backgroundColor:s,backgroundImage:`url(${x??b})`,backgroundSize:"cover",backgroundPosition:"center"},onContextMenu:r,children:o})};i.__docgenInfo={description:"",methods:[],displayName:"DesktopArea"};const V={title:"Common components/DesktopArea",component:i,parameters:{layout:"fullscreen"}},C=k.map(o=>o.id),t={},n={argTypes:{appId:{control:"select",options:C}},args:{appId:"notepad"},render:({appId:o})=>{const r=k.find(s=>s.id===o);return c.jsx(i,{children:c.jsx(A,{icon:{id:"1",name:r.name,icon:r.icon,x:20,y:20,appId:o},onDoubleClick:()=>{},onContextMenu:()=>{}})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

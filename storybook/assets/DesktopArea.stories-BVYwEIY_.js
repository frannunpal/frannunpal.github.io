import{u as l,r as u,j as p}from"./iframe-DTUnew5m.js";import{u as x,T as I}from"./desktopStore-Bl-LhsjV.js";import{u as D}from"./useResolvedUrl-ChVNyGze.js";import{d as b}from"./wallpaper-DBrFTLr9.js";import{D as A}from"./DesktopIcon-DCmJSS2Y.js";import{A as f}from"./apps-B-6LmW0h.js";import"./preload-helper-CRsgZnrw.js";import"./sortNodes-k3UPHZY_.js";import"./FileIcon-bD-ght3W.js";import"./useDynamicIcon-D5XK78SV.js";import"./AppIcon-BAFT5x1f.js";import"./Text-Ciw_5Qn7.js";import"./polymorphic-factory-C7kbvBSE.js";const y="_root_1z0nr_1",S={root:y},c=({children:o,onContextMenu:r})=>{const s=l(e=>e.theme.desktop),g=l(e=>e.wallpaper),k=D(g??void 0),i=x(e=>e.setViewportHeight),d=u.useRef(null);return u.useEffect(()=>{const e=d.current;if(!e)return;const m=new ResizeObserver(h=>{const a=h[0]?.contentRect.height;a&&a>0&&i(a)});return m.observe(e),()=>m.disconnect()},[i]),p.jsx("div",{ref:d,className:S.root,style:{"--taskbar-height":`${I}px`,backgroundColor:s,backgroundImage:`url(${k??b})`,backgroundSize:"cover",backgroundPosition:"center"},onContextMenu:r,children:o})};c.__docgenInfo={description:"",methods:[],displayName:"DesktopArea"};const O={title:"Common components/DesktopArea",component:c,parameters:{layout:"fullscreen"}},v=f.map(o=>o.id),t={},n={argTypes:{appId:{control:"select",options:v}},args:{appId:"notepad"},render:({appId:o})=>{const r=f.find(s=>s.id===o);return p.jsx(c,{children:p.jsx(A,{icon:{id:"1",name:r.name,icon:r.icon,x:20,y:20,appId:o},onDoubleClick:()=>{},onContextMenu:()=>{}})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const V=["Empty","WithChildren"];export{t as Empty,n as WithChildren,V as __namedExportsOrder,O as default};

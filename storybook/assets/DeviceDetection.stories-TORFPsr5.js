import{j as e,g as E,r as m}from"./iframe-EBfrZQCs.js";import{u as I}from"./useAdaptiveDimensions-voWJNl4G.js";import{P as V}from"./Paper-DPGHG3Io.js";import{S as u}from"./Stack-DKu2hy6J.js";import{f as C,u as L,a as z,B as g,c as B}from"./polymorphic-factory-CitjaWgV.js";import{T as r}from"./Text-CmGhEjeA.js";import"./preload-helper-CRsgZnrw.js";var f={root:"m_b183c0a2"};const N=B((t,{color:s})=>({root:{"--code-bg":s?E(s,t):void 0}})),i=C((t,s)=>{const o=L("Code",null,t),{classNames:n,className:a,style:D,styles:S,unstyled:W,vars:k,color:_,block:b,variant:H,mod:P,attributes:y,...T}=o,M=z({name:"Code",props:o,classes:f,className:a,style:D,classNames:n,styles:S,unstyled:W,attributes:y,vars:k,varsResolver:N});return e.jsx(g,{component:b?"pre":"code",variant:H,ref:s,mod:[{block:b},P],...M("root"),...T,dir:"ltr"})});i.classes=f;i.displayName="@mantine/core/Code";const h={mobile:768,tablet:1024},w=()=>{const t=window.innerWidth,s=window.matchMedia("(pointer: coarse)").matches;return t<h.mobile||s},j=()=>{const t=window.innerWidth;return t>=h.mobile&&t<h.tablet},v=()=>window.innerWidth>=h.tablet,x=()=>screen.orientation?screen.orientation.type.includes("portrait"):window.innerHeight>window.innerWidth;function R(){const[t,s]=m.useState(()=>({isMobile:w(),isTablet:j(),isDesktop:v(),isPortrait:x(),shouldShowWarning:w()&&x(),screenWidth:window.innerWidth,screenHeight:window.innerHeight})),o=m.useCallback(()=>{const n=w(),a=x();s({isMobile:n,isTablet:j(),isDesktop:v(),isPortrait:a,shouldShowWarning:n&&a,screenWidth:window.innerWidth,screenHeight:window.innerHeight})},[]);return m.useEffect(()=>(window.addEventListener("resize",o),screen.orientation?.addEventListener?.("change",o),()=>{window.removeEventListener("resize",o),screen.orientation?.removeEventListener?.("change",o)}),[o]),t}const A=()=>{const t=R(),s=I();return e.jsx(V,{p:"md",shadow:"sm",withBorder:!0,children:e.jsxs(u,{gap:"md",children:[e.jsxs(g,{children:[e.jsx(r,{fw:"bold",mb:"xs",size:"lg",children:"Device Detection"}),e.jsxs(u,{gap:4,children:[e.jsxs(r,{children:[e.jsx(i,{children:"isMobile:"})," ",t.isMobile.toString()]}),e.jsxs(r,{children:[e.jsx(i,{children:"isTablet:"})," ",t.isTablet.toString()]}),e.jsxs(r,{children:[e.jsx(i,{children:"isDesktop:"})," ",t.isDesktop.toString()]}),e.jsxs(r,{children:[e.jsx(i,{children:"isPortrait:"})," ",t.isPortrait.toString()]}),e.jsxs(r,{children:[e.jsx(i,{children:"shouldShowWarning:"})," ",t.shouldShowWarning.toString()]}),e.jsxs(r,{children:[e.jsx(i,{children:"screenWidth:"})," ",t.screenWidth,"px"]}),e.jsxs(r,{children:[e.jsx(i,{children:"screenHeight:"})," ",t.screenHeight,"px"]})]})]}),e.jsxs(g,{children:[e.jsx(r,{fw:"bold",mb:"xs",size:"lg",children:"Adaptive Dimensions"}),e.jsxs(u,{gap:4,children:[e.jsxs(r,{children:[e.jsx(i,{children:"defaultWidth:"})," ",s.defaultWidth,"px"]}),e.jsxs(r,{children:[e.jsx(i,{children:"defaultHeight:"})," ",s.defaultHeight,"px"]}),e.jsxs(r,{children:[e.jsx(i,{children:"minWidth:"})," ",s.minWidth,"px"]}),e.jsxs(r,{children:[e.jsx(i,{children:"minHeight:"})," ",s.minHeight,"px"]})]})]})]})})},U={title:"Hooks/Device Detection",component:A,decorators:[t=>e.jsx("div",{style:{padding:20,background:"var(--mantine-color-gray-1)",minHeight:"100vh"},children:e.jsx(t,{})})]},c={parameters:{viewport:{defaultViewport:"desktop"}}},d={parameters:{viewport:{defaultViewport:"tablet"}}},l={parameters:{viewport:{defaultViewport:"mobile1"}}},p={parameters:{viewport:{defaultViewport:"mobile2"}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...p.parameters?.docs?.source}}};const X=["Desktop","Tablet","MobilePortrait","MobileLandscape"];export{c as Desktop,p as MobileLandscape,l as MobilePortrait,d as Tablet,X as __namedExportsOrder,U as default};

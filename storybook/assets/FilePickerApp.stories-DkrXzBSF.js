import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-BscHEzdU.js";import{B as n,I as r,L as i,R as a}from"./iframe-BQQvVWb1.js";import{r as o,s}from"./testUtils-v-c9Bf2o.js";import{n as c,t as l}from"./Storybook-DY-8qWJi.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{n(),l(),u=t(),d={title:`Shared/FilePicker`,component:r,parameters:{layout:`fullscreen`},args:{onConfirm:()=>{},onCancel:()=>{}}},f=o(),p=({acceptedMimeTypes:e,windowTitle:t,windowFcIcon:n})=>(0,u.jsx)(c,{win:s({title:t,content:`files`,fcIcon:n,width:600,height:400}),fsNodes:f,children:(0,u.jsx)(r,{acceptedMimeTypes:e,onConfirm:()=>{},onCancel:()=>{}})}),m={render:()=>(0,u.jsx)(p,{windowTitle:`Open File`,windowFcIcon:`FcFolder`})},h={render:()=>(0,u.jsx)(p,{acceptedMimeTypes:[`image/*`],windowTitle:`Open Image`,windowFcIcon:`FcPicture`})},g={render:()=>(0,u.jsx)(p,{acceptedMimeTypes:[`application/pdf`],windowTitle:`Open PDF`,windowFcIcon:`FcDocument`})},_={render:()=>(0,u.jsx)(p,{acceptedMimeTypes:[`text/markdown`,`text/plain`],windowTitle:`Open Markdown`,windowFcIcon:`FcDocument`})},v=({children:e})=>(0,u.jsx)(c,{win:s({title:`Notepad`,content:`notepad`,fcIcon:`FcEditImage`,width:700,height:500}),fsNodes:f,children:(0,u.jsxs)(`div`,{style:{position:`relative`,width:`100%`,height:`100%`,background:`var(--mantine-color-gray-1)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--mantine-color-dimmed)`,fontSize:14},children:[`App content behind modal`,e]})}),y={render:()=>(0,u.jsx)(v,{children:(0,u.jsx)(i,{opened:!0,onConfirm:()=>{},onCancel:()=>{}})})},b={render:()=>(0,u.jsx)(v,{children:(0,u.jsx)(i,{opened:!0,acceptedMimeTypes:[`image/*`],onConfirm:()=>{},onCancel:()=>{}})})},x={render:()=>(0,u.jsx)(v,{children:(0,u.jsx)(a,{opened:!0,initialName:`untitled.md`,onConfirm:()=>{},onCancel:()=>{}})})},S={render:()=>(0,u.jsx)(v,{children:(0,u.jsx)(a,{opened:!0,initialName:`my-document.md`,onConfirm:()=>{},onCancel:()=>{}})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FilePickerStory windowTitle="Open File" windowFcIcon="FcFolder" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <FilePickerStory acceptedMimeTypes={['image/*']} windowTitle="Open Image" windowFcIcon="FcPicture" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <FilePickerStory acceptedMimeTypes={['application/pdf']} windowTitle="Open PDF" windowFcIcon="FcDocument" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <FilePickerStory acceptedMimeTypes={['text/markdown', 'text/plain']} windowTitle="Open Markdown" windowFcIcon="FcDocument" />
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ModalStoryWrapper>
      <FilePickerModal opened={true} onConfirm={() => {}} onCancel={() => {}} />
    </ModalStoryWrapper>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ModalStoryWrapper>
      <FilePickerModal opened={true} acceptedMimeTypes={['image/*']} onConfirm={() => {}} onCancel={() => {}} />
    </ModalStoryWrapper>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ModalStoryWrapper>
      <FileSaveModal opened={true} initialName="untitled.md" onConfirm={() => {}} onCancel={() => {}} />
    </ModalStoryWrapper>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ModalStoryWrapper>
      <FileSaveModal opened={true} initialName="my-document.md" onConfirm={() => {}} onCancel={() => {}} />
    </ModalStoryWrapper>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`ImagesOnly`,`PdfOnly`,`MarkdownOnly`,`ModalOpen`,`ModalImagesOnly`,`SaveModal`,`SaveModalWithInitialName`]}))();export{m as Default,h as ImagesOnly,_ as MarkdownOnly,b as ModalImagesOnly,y as ModalOpen,g as PdfOnly,x as SaveModal,S as SaveModalWithInitialName,C as __namedExportsOrder,d as default};
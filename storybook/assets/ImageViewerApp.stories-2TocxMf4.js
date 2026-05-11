import{n as e}from"./chunk-jRWAZmH_.js";import{wi as t}from"./iframe-CKI3poW4.js";import{i as n,s as r}from"./testUtils-DOwt75rj.js";import{n as i,t as a}from"./Storybook-BDDa_0to.js";import o,{t as s}from"./ImageViewerApp-D_18sKCF.js";var c,l,u,d,f,p,m;e((()=>{s(),a(),c=t(),l={title:`Apps/ImageViewerApp`,component:o,parameters:{layout:`fullscreen`}},u=n(),d={render:()=>(0,c.jsx)(i,{win:r({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:700,height:520,contentData:{src:`/storybook/Images/wallpaper.jpg`}}),fsNodes:u})},f={render:()=>(0,c.jsx)(i,{win:r({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:700,height:520}),fsNodes:u})},p={render:()=>(0,c.jsx)(i,{win:r({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:300,height:200,contentData:{src:`/storybook/Images/wallpaper.jpg`}}),fsNodes:u})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    title: 'Image Viewer',
    content: 'image-viewer',
    fcIcon: 'FcPicture',
    width: 700,
    height: 520,
    contentData: {
      src: \`\${import.meta.env.BASE_URL}Images/wallpaper.jpg\`
    }
  })} fsNodes={fsNodes} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    title: 'Image Viewer',
    content: 'image-viewer',
    fcIcon: 'FcPicture',
    width: 700,
    height: 520
  })} fsNodes={fsNodes} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    title: 'Image Viewer',
    content: 'image-viewer',
    fcIcon: 'FcPicture',
    width: 300,
    height: 200,
    contentData: {
      src: \`\${import.meta.env.BASE_URL}Images/wallpaper.jpg\`
    }
  })} fsNodes={fsNodes} />
}`,...p.parameters?.docs?.source}}},m=[`WithImage`,`NoImage`,`SmallWindow`]}))();export{f as NoImage,p as SmallWindow,d as WithImage,m as __namedExportsOrder,l as default};
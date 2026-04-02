import{n as e}from"./chunk-zsgVPwQN.js";import{Wt as t}from"./iframe-CuisHPBI.js";import{a as n,o as r}from"./Window-DSNhW7ZG.js";import{n as i}from"./makeWindow-BxXvFDfP.js";import{t as a}from"./AppWithPickerOpen-uL3OOSDU.js";import{i as o,o as s}from"./Storybook-C0ZVWtKq.js";var c,l,u,d,f,p,m;e((()=>{r(),s(),c=t(),l={title:`Apps/ImageViewerApp`,component:n,parameters:{layout:`fullscreen`}},u=o(),d={render:()=>(0,c.jsx)(a,{win:i({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:700,height:520,contentData:{src:`/storybook/Images/wallpaper.jpg`}}),fsNodes:u})},f={render:()=>(0,c.jsx)(a,{win:i({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:700,height:520}),fsNodes:u})},p={render:()=>(0,c.jsx)(a,{win:i({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:300,height:200,contentData:{src:`/storybook/Images/wallpaper.jpg`}}),fsNodes:u})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
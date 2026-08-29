import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{n,s as r,t as i,u as a}from"./Storybook-DAZTMkui.js";import o,{t as s}from"./ImageViewerApp-DgMlbATu.js";var c,l,u,d,f,p,m;e((()=>{s(),i(),c=t(),l={title:`Apps/ImageViewerApp`,component:o,parameters:{layout:`fullscreen`}},u=r(),d={render:()=>(0,c.jsx)(n,{win:a({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:700,height:520,contentData:{src:`/storybook/Images/wallpaper.jpg`}}),fsNodes:u})},f={render:()=>(0,c.jsx)(n,{win:a({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:700,height:520}),fsNodes:u})},p={render:()=>(0,c.jsx)(n,{win:a({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:300,height:200,contentData:{src:`/storybook/Images/wallpaper.jpg`}}),fsNodes:u})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
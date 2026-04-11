import{n as e}from"./chunk-zsgVPwQN.js";import{ur as t}from"./iframe-Cjnod8zE.js";import{c as n,n as r,o as i,t as a}from"./Storybook-Bd7qHmZZ.js";import o,{t as s}from"./ImageViewerApp-B2KmgKYV.js";var c,l,u,d,f,p,m;e((()=>{s(),a(),c=t(),l={title:`Apps/ImageViewerApp`,component:o,parameters:{layout:`fullscreen`}},u=i(),d={render:()=>(0,c.jsx)(r,{win:n({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:700,height:520,contentData:{src:`/storybook/Images/wallpaper.jpg`}}),fsNodes:u})},f={render:()=>(0,c.jsx)(r,{win:n({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:700,height:520}),fsNodes:u})},p={render:()=>(0,c.jsx)(r,{win:n({title:`Image Viewer`,content:`image-viewer`,fcIcon:`FcPicture`,width:300,height:200,contentData:{src:`/storybook/Images/wallpaper.jpg`}}),fsNodes:u})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
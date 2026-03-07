import{j as i}from"./iframe-BNrdll36.js";import{I as a,m as o}from"./Window-uPqwoy4q.js";import{A as p}from"./AppWithPickerOpen-CLgkfXkV.js";import"./preload-helper-CRsgZnrw.js";import"./index-CQr2-_tZ.js";import"./Transition-DPFxZqvc.js";import"./index-05f7sRL8.js";import"./iconBase-C-XepopT.js";import"./desktopStore-6p6olQk_.js";import"./apps-B-6LmW0h.js";import"./sortNodes-k3UPHZY_.js";import"./SettingsApp-Bs8N2TL3.js";import"./AppIcon-Du5WmxoY.js";import"./useDynamicIcon-C2kRcZsm.js";import"./WallpaperSettings-DtoBRpg1.js";import"./FilePickerApp-C9cbMQYq.js";import"./FileIcon-CS6U7Dwq.js";import"./Breadcrumbs-D1lfVFUO.js";import"./polymorphic-factory-BW9slRGI.js";import"./Text-CfvHUHkT.js";import"./is-element-CoInZLNR.js";import"./UnstyledButton-BgOwkDkM.js";import"./useTranslation-CsYNVJuM.js";import"./Group-1j-iWBma.js";import"./Button--RpCmFwV.js";import"./Loader-BLXZI6wm.js";import"./TextInput-CBRHuIFR.js";import"./InputBase-BQ7kPXDg.js";import"./use-id-5ZNEkNgi.js";import"./use-resolved-styles-api-CZsqKTpj.js";import"./CloseButton-DcEOJMJT.js";import"./SettingsSection-CiRHjmQ6.js";import"./Stack-6mhmhFEl.js";import"./wallpaper-DBrFTLr9.js";import"./SegmentedControl-xsRBb7Ku.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-DpwU5jvX.js";import"./use-uncontrolled-n0Ml9xZi.js";import"./AppearanceSettings-BpWA091q.js";import"./ColorPicker-Ck6ZXLeN.js";import"./Colors-7cWumA21.js";import"./clamp-DTmYCdls.js";import"./Popover-DqYjx-9M.js";import"./OptionalPortal-BPKLB5ZY.js";import"./DirectionProvider-ChCYRQYr.js";import"./Slider-DozWe2TY.js";import"./LauncherSettings-PinPzf5X.js";import"./ScrollArea-CBzsKrP4.js";import"./SimpleGrid-DiwF6zXJ.js";import"./FontSettings-CklARA1k.js";import"./Paper-BoG7r2uc.js";import"./LanguageSettings-Dn0YQDr1.js";import"./ResetSettings-DeHELayP.js";import"./useWindowButtonRegistry-Bcj2JC3j.js";import"./useAnimationDuration-BepWdIOj.js";import"./Animations-67kTFacj.js";import"./Menu-Ch1qyj6L.js";import"./AccordionChevron-D51JPf6N.js";import"./CalendarApp-6MzzNt4Y.js";import"./FilesApp-DzV00n2L.js";import"./useOpenApp-K6m1Sc-Q.js";import"./useAdaptiveDimensions-BWxc8-b8.js";import"./FolderTree-CY1DsslP.js";import"./FileList-DjhsTN0f.js";import"./PdfApp-DKeEkZgM.js";import"./StorybookApp-am9HPWva.js";import"./CreateItemApp-DNXNd488.js";import"./IconColorPicker-DCqy7zPs.js";import"./Icons-2dF7msl8.js";import"./Modal-B5lXi-UW.js";const Pe={title:"Apps/ImageViewerApp",component:a,parameters:{layout:"fullscreen"}},n={id:"folder-images",name:"Images",type:"folder",parentId:null,children:["file-wallpaper","file-wallpaper2"],createdAt:new Date,updatedAt:new Date},s={id:"file-wallpaper",name:"wallpaper.jpg",type:"file",parentId:"folder-images",content:"",mimeType:"image/jpeg",url:"/fran-desktop/storybook/Images/wallpaper.jpg",createdAt:new Date,updatedAt:new Date},c={id:"file-wallpaper2",name:"wallpaper2.jpg",type:"file",parentId:"folder-images",content:"",mimeType:"image/jpeg",url:"/fran-desktop/storybook/Images/wallpaper2.jpg",createdAt:new Date,updatedAt:new Date},m=[n,s,c],e={render:()=>i.jsx(p,{win:o({id:"win-image-viewer",title:"Image Viewer",content:"image-viewer",fcIcon:"FcPicture",width:700,height:520,x:0,y:0,contentData:{src:"/fran-desktop/storybook/Images/wallpaper.jpg"}}),fsNodes:m})},t={render:()=>i.jsx(p,{win:o({id:"win-image-viewer-empty",title:"Image Viewer",content:"image-viewer",fcIcon:"FcPicture",width:700,height:520,x:0,y:0}),fsNodes:m})},r={render:()=>i.jsx(p,{win:o({id:"win-image-viewer-small",title:"Image Viewer",content:"image-viewer",fcIcon:"FcPicture",width:300,height:200,x:0,y:0,contentData:{src:"/fran-desktop/storybook/Images/wallpaper.jpg"}}),fsNodes:m})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    id: 'win-image-viewer',
    title: 'Image Viewer',
    content: 'image-viewer',
    fcIcon: 'FcPicture',
    width: 700,
    height: 520,
    x: 0,
    y: 0,
    contentData: {
      src: \`\${import.meta.env.BASE_URL}Images/wallpaper.jpg\`
    }
  })} fsNodes={fsNodes} />
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    id: 'win-image-viewer-empty',
    title: 'Image Viewer',
    content: 'image-viewer',
    fcIcon: 'FcPicture',
    width: 700,
    height: 520,
    x: 0,
    y: 0
  })} fsNodes={fsNodes} />
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    id: 'win-image-viewer-small',
    title: 'Image Viewer',
    content: 'image-viewer',
    fcIcon: 'FcPicture',
    width: 300,
    height: 200,
    x: 0,
    y: 0,
    contentData: {
      src: \`\${import.meta.env.BASE_URL}Images/wallpaper.jpg\`
    }
  })} fsNodes={fsNodes} />
}`,...r.parameters?.docs?.source}}};const Ne=["WithImage","NoImage","SmallWindow"];export{t as NoImage,r as SmallWindow,e as WithImage,Ne as __namedExportsOrder,Pe as default};

import{j as i}from"./iframe-EBfrZQCs.js";import{I as a,m as o}from"./Window-BMM5-aU_.js";import{A as p}from"./AppWithPickerOpen-D2nT94cE.js";import"./preload-helper-CRsgZnrw.js";import"./index-DSqRWbxz.js";import"./Transition-BwN4kT9j.js";import"./VscIcon-DeXiUSO-.js";import"./useDynamicIcon-Z1W58oY5.js";import"./desktopStore-CwB-cdNj.js";import"./apps-B-6LmW0h.js";import"./sortNodes-k3UPHZY_.js";import"./SettingsApp-RiCb2uyT.js";import"./AppIcon-CIm0Tuzm.js";import"./WallpaperSettings-Dchblhl8.js";import"./useResolvedUrl-BzH8qatV.js";import"./FilePickerApp-BzKG2RfD.js";import"./FileIcon-DqfSu0yB.js";import"./Breadcrumbs-2M9hM8Oo.js";import"./polymorphic-factory-CitjaWgV.js";import"./Text-CmGhEjeA.js";import"./is-element-CsCIQYcM.js";import"./UnstyledButton-CYZ0_6oA.js";import"./useTranslation-CfQsQjN6.js";import"./Group-Dyp7zqJW.js";import"./Button-a3-AlcbN.js";import"./Loader-DqVMSaTN.js";import"./TextInput-DpB0r6sn.js";import"./InputBase-RM_eedGx.js";import"./use-id-C2-QLSHp.js";import"./use-resolved-styles-api-D94bfHEu.js";import"./CloseButton-NjFIAN3y.js";import"./SettingsSection-B9Pnxiwk.js";import"./Stack-DKu2hy6J.js";import"./wallpaper-DBrFTLr9.js";import"./SegmentedControl-B0OvewRX.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-D8gqU3v0.js";import"./use-uncontrolled-DTG28c8l.js";import"./AppearanceSettings-kIfb7aOe.js";import"./ColorPicker-BNhTkLZA.js";import"./Colors-BO33xmnN.js";import"./clamp-DTmYCdls.js";import"./Popover-BWv2rWGU.js";import"./OptionalPortal-CTDSEAQA.js";import"./DirectionProvider-BPMG83_F.js";import"./Slider-DCLzLOfr.js";import"./LauncherSettings-6Ggc41e8.js";import"./ScrollArea-ImpI-HQl.js";import"./SimpleGrid-CbfQTBaj.js";import"./FontSettings-CoA2Gphu.js";import"./Paper-DPGHG3Io.js";import"./LanguageSettings-BbqLWCR-.js";import"./ResetSettings-DFc4GJkS.js";import"./useWindowButtonRegistry-DScb9k0T.js";import"./useAnimationDuration-HfCRhMm2.js";import"./Animations-67kTFacj.js";import"./Menu-BFRMS7jO.js";import"./AccordionChevron-C9wk85QK.js";import"./CalendarApp-Tsl9Citj.js";import"./FilesApp-BwUBXD05.js";import"./useOpenApp-CMsSzYiX.js";import"./useAdaptiveDimensions-voWJNl4G.js";import"./FolderTree-BDvu52Ky.js";import"./FileList-Cqv6CUYL.js";import"./PdfApp-1HiyxDpN.js";import"./StorybookApp-zD8H1WDp.js";import"./iconBase-Cac3eC1y.js";import"./CreateItemApp-CuY02xOf.js";import"./IconColorPicker-DI7Tg9qW.js";import"./Icons-2dF7msl8.js";import"./Modal-7epdup7-.js";const Ne={title:"Apps/ImageViewerApp",component:a,parameters:{layout:"fullscreen"}},n={id:"folder-images",name:"Images",type:"folder",parentId:null,children:["file-wallpaper","file-wallpaper2"],createdAt:new Date,updatedAt:new Date},s={id:"file-wallpaper",name:"wallpaper.jpg",type:"file",parentId:"folder-images",content:"",mimeType:"image/jpeg",url:"/fran-desktop/storybook/Images/wallpaper.jpg",createdAt:new Date,updatedAt:new Date},c={id:"file-wallpaper2",name:"wallpaper2.jpg",type:"file",parentId:"folder-images",content:"",mimeType:"image/jpeg",url:"/fran-desktop/storybook/Images/wallpaper2.jpg",createdAt:new Date,updatedAt:new Date},m=[n,s,c],e={render:()=>i.jsx(p,{win:o({id:"win-image-viewer",title:"Image Viewer",content:"image-viewer",fcIcon:"FcPicture",width:700,height:520,x:0,y:0,contentData:{src:"/fran-desktop/storybook/Images/wallpaper.jpg"}}),fsNodes:m})},t={render:()=>i.jsx(p,{win:o({id:"win-image-viewer-empty",title:"Image Viewer",content:"image-viewer",fcIcon:"FcPicture",width:700,height:520,x:0,y:0}),fsNodes:m})},r={render:()=>i.jsx(p,{win:o({id:"win-image-viewer-small",title:"Image Viewer",content:"image-viewer",fcIcon:"FcPicture",width:300,height:200,x:0,y:0,contentData:{src:"/fran-desktop/storybook/Images/wallpaper.jpg"}}),fsNodes:m})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Ve=["WithImage","NoImage","SmallWindow"];export{t as NoImage,r as SmallWindow,e as WithImage,Ve as __namedExportsOrder,Ne as default};

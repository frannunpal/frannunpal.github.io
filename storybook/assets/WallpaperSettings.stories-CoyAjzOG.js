import{u as s,j as a}from"./iframe-BNrdll36.js";import{W as p}from"./WallpaperSettings-DtoBRpg1.js";import"./preload-helper-CRsgZnrw.js";import"./FilePickerApp-C9cbMQYq.js";import"./desktopStore-6p6olQk_.js";import"./apps-B-6LmW0h.js";import"./sortNodes-k3UPHZY_.js";import"./FileIcon-CS6U7Dwq.js";import"./index-05f7sRL8.js";import"./iconBase-C-XepopT.js";import"./Breadcrumbs-D1lfVFUO.js";import"./polymorphic-factory-BW9slRGI.js";import"./Text-CfvHUHkT.js";import"./is-element-CoInZLNR.js";import"./UnstyledButton-BgOwkDkM.js";import"./useTranslation-CsYNVJuM.js";import"./Group-1j-iWBma.js";import"./Button--RpCmFwV.js";import"./Loader-BLXZI6wm.js";import"./Transition-DPFxZqvc.js";import"./index-CQr2-_tZ.js";import"./TextInput-CBRHuIFR.js";import"./InputBase-BQ7kPXDg.js";import"./use-id-5ZNEkNgi.js";import"./use-resolved-styles-api-CZsqKTpj.js";import"./CloseButton-DcEOJMJT.js";import"./SettingsSection-CiRHjmQ6.js";import"./Stack-6mhmhFEl.js";import"./wallpaper-DBrFTLr9.js";import"./SegmentedControl-xsRBb7Ku.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-DpwU5jvX.js";import"./use-uncontrolled-n0Ml9xZi.js";const B={title:"Settings/WallpaperSettings",component:p,parameters:{layout:"padded"},decorators:[o=>a.jsx("div",{style:{maxWidth:600,margin:"0 auto"},children:a.jsx(o,{})})]},e={parameters:{docs:{description:{story:"Default wallpaper settings with Static Image module selected. Shows preview of current wallpaper and options to upload, choose from file system, or enter a URL."}}}},t={parameters:{docs:{description:{story:"Wallpaper settings with a custom wallpaper URL set."}}},decorators:[o=>(s.setState({wallpaper:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"}),a.jsx(o,{}))]},r={parameters:{docs:{description:{story:'Shows the wallpaper module selector (currently only "Static Image" is available). Future modules like dynamic backgrounds or videos can be added here.'}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default wallpaper settings with Static Image module selected. Shows preview of current wallpaper and options to upload, choose from file system, or enter a URL.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Wallpaper settings with a custom wallpaper URL set.'
      }
    }
  },
  decorators: [Story => {
    useSettingsStore.setState({
      wallpaper: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920'
    });
    return <Story />;
  }]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the wallpaper module selector (currently only "Static Image" is available). Future modules like dynamic backgrounds or videos can be added here.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const G=["Default","WithCustomWallpaper","WallpaperModuleSelector"];export{e as Default,r as WallpaperModuleSelector,t as WithCustomWallpaper,G as __namedExportsOrder,B as default};

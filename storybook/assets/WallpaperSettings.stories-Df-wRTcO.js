import{u as s,j as a}from"./iframe-U9dC9Cor.js";import{W as p}from"./WallpaperSettings-CEN_iOqy.js";import"./preload-helper-D1UD9lgW.js";import"./useResolvedUrl-97qfKVBS.js";import"./desktopStore-BmrVKCSf.js";import"./apps-C9KmvF_j.js";import"./sortNodes-k3UPHZY_.js";import"./FilePickerApp-CDq1H7ZD.js";import"./FileIcon-hHMFxt38.js";import"./useDynamicIcon-B2vFVd2O.js";import"./Breadcrumbs-BwM3e-g7.js";import"./polymorphic-factory-DyzbqoLZ.js";import"./Text-Dtnqn3Bo.js";import"./is-element-Bi8acN8O.js";import"./UnstyledButton-VKVflIkY.js";import"./useTranslation-Cvul1C8x.js";import"./Group-C3mkPUBX.js";import"./Button-BlMBDGXk.js";import"./Loader-DElCIoZg.js";import"./Transition-CkLLtgT1.js";import"./index-SsivZmaR.js";import"./TextInput-DiqM4NS-.js";import"./InputBase-CpR35aXm.js";import"./use-id-CiapeEnC.js";import"./use-resolved-styles-api-BuMwp7JB.js";import"./CloseButton-BWBrjiZx.js";import"./SettingsSection-C0qAlHrY.js";import"./Stack-Cm-oUvcw.js";import"./wallpaper-aTrUdOVb.js";import"./SegmentedControl-DqZHiGwc.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-WYOYf04b.js";import"./use-uncontrolled-B4fczV8L.js";const B={title:"Settings/WallpaperSettings",component:p,parameters:{layout:"padded"},decorators:[o=>a.jsx("div",{style:{maxWidth:600,margin:"0 auto"},children:a.jsx(o,{})})]},e={parameters:{docs:{description:{story:"Default wallpaper settings with Static Image module selected. Shows preview of current wallpaper and options to upload, choose from file system, or enter a URL."}}}},t={parameters:{docs:{description:{story:"Wallpaper settings with a custom wallpaper URL set."}}},decorators:[o=>(s.setState({wallpaper:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"}),a.jsx(o,{}))]},r={parameters:{docs:{description:{story:'Shows the wallpaper module selector (currently only "Static Image" is available). Future modules like dynamic backgrounds or videos can be added here.'}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

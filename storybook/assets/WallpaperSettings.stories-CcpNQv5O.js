import{u as s,j as a}from"./iframe-DTUnew5m.js";import{W as p}from"./WallpaperSettings-D2iJ5-r5.js";import"./preload-helper-CRsgZnrw.js";import"./useResolvedUrl-ChVNyGze.js";import"./desktopStore-Bl-LhsjV.js";import"./apps-B-6LmW0h.js";import"./sortNodes-k3UPHZY_.js";import"./FilePickerApp-beYeqPQr.js";import"./FileIcon-bD-ght3W.js";import"./useDynamicIcon-D5XK78SV.js";import"./Breadcrumbs-DZjbjuOC.js";import"./polymorphic-factory-C7kbvBSE.js";import"./Text-Ciw_5Qn7.js";import"./is-element-p28lS3c1.js";import"./UnstyledButton-BJTgS-FG.js";import"./useTranslation-DphYhn2X.js";import"./Group-BVZlK1MV.js";import"./Button-Cp3y7idV.js";import"./Loader-TqqKt8B9.js";import"./Transition-D56J4DjQ.js";import"./index-Bqmkwnfn.js";import"./TextInput-3bhAI-4j.js";import"./InputBase-CP_TToBK.js";import"./use-id-Cap3KBVR.js";import"./use-resolved-styles-api-B4Ecvuov.js";import"./CloseButton-BHFv3TQu.js";import"./SettingsSection-CGK_qNBW.js";import"./Stack-C6Jkg3KI.js";import"./wallpaper-DBrFTLr9.js";import"./SegmentedControl-BiMBQNRW.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-rvP5RKof.js";import"./use-uncontrolled-Dg6i_OhA.js";const B={title:"Settings/WallpaperSettings",component:p,parameters:{layout:"padded"},decorators:[o=>a.jsx("div",{style:{maxWidth:600,margin:"0 auto"},children:a.jsx(o,{})})]},e={parameters:{docs:{description:{story:"Default wallpaper settings with Static Image module selected. Shows preview of current wallpaper and options to upload, choose from file system, or enter a URL."}}}},t={parameters:{docs:{description:{story:"Wallpaper settings with a custom wallpaper URL set."}}},decorators:[o=>(s.setState({wallpaper:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"}),a.jsx(o,{}))]},r={parameters:{docs:{description:{story:'Shows the wallpaper module selector (currently only "Static Image" is available). Future modules like dynamic backgrounds or videos can be added here.'}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

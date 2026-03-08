import{u as s,j as a}from"./iframe-EBfrZQCs.js";import{W as p}from"./WallpaperSettings-Dchblhl8.js";import"./preload-helper-CRsgZnrw.js";import"./useResolvedUrl-BzH8qatV.js";import"./desktopStore-CwB-cdNj.js";import"./apps-B-6LmW0h.js";import"./sortNodes-k3UPHZY_.js";import"./FilePickerApp-BzKG2RfD.js";import"./FileIcon-DqfSu0yB.js";import"./useDynamicIcon-Z1W58oY5.js";import"./Breadcrumbs-2M9hM8Oo.js";import"./polymorphic-factory-CitjaWgV.js";import"./Text-CmGhEjeA.js";import"./is-element-CsCIQYcM.js";import"./UnstyledButton-CYZ0_6oA.js";import"./useTranslation-CfQsQjN6.js";import"./Group-Dyp7zqJW.js";import"./Button-a3-AlcbN.js";import"./Loader-DqVMSaTN.js";import"./Transition-BwN4kT9j.js";import"./index-DSqRWbxz.js";import"./TextInput-DpB0r6sn.js";import"./InputBase-RM_eedGx.js";import"./use-id-C2-QLSHp.js";import"./use-resolved-styles-api-D94bfHEu.js";import"./CloseButton-NjFIAN3y.js";import"./SettingsSection-B9Pnxiwk.js";import"./Stack-DKu2hy6J.js";import"./wallpaper-DBrFTLr9.js";import"./SegmentedControl-B0OvewRX.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-D8gqU3v0.js";import"./use-uncontrolled-DTG28c8l.js";const B={title:"Settings/WallpaperSettings",component:p,parameters:{layout:"padded"},decorators:[o=>a.jsx("div",{style:{maxWidth:600,margin:"0 auto"},children:a.jsx(o,{})})]},e={parameters:{docs:{description:{story:"Default wallpaper settings with Static Image module selected. Shows preview of current wallpaper and options to upload, choose from file system, or enter a URL."}}}},t={parameters:{docs:{description:{story:"Wallpaper settings with a custom wallpaper URL set."}}},decorators:[o=>(s.setState({wallpaper:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"}),a.jsx(o,{}))]},r={parameters:{docs:{description:{story:'Shows the wallpaper module selector (currently only "Static Image" is available). Future modules like dynamic backgrounds or videos can be added here.'}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

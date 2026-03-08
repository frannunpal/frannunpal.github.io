import{u as s,j as o}from"./iframe-DTUnew5m.js";import{L as n}from"./LauncherSettings-DXZZkazn.js";import"./preload-helper-CRsgZnrw.js";import"./AppIcon-BAFT5x1f.js";import"./useDynamicIcon-D5XK78SV.js";import"./SettingsSection-CGK_qNBW.js";import"./Stack-C6Jkg3KI.js";import"./polymorphic-factory-C7kbvBSE.js";import"./Text-Ciw_5Qn7.js";import"./TextInput-3bhAI-4j.js";import"./InputBase-CP_TToBK.js";import"./use-id-Cap3KBVR.js";import"./use-resolved-styles-api-B4Ecvuov.js";import"./CloseButton-BHFv3TQu.js";import"./UnstyledButton-BJTgS-FG.js";import"./ScrollArea-emAnltUB.js";import"./OptionalPortal-FiBzFgm1.js";import"./is-element-p28lS3c1.js";import"./Transition-D56J4DjQ.js";import"./index-Bqmkwnfn.js";import"./DirectionProvider-BLC1boeJ.js";import"./use-merged-ref-rvP5RKof.js";import"./to-int-PQE0s6ay.js";import"./SimpleGrid-DNuQErG9.js";const v={title:"Settings/Launcher",component:n,parameters:{layout:"padded"},decorators:[e=>o.jsx("div",{style:{maxWidth:600,margin:"0 auto",height:500},children:o.jsx(e,{})})]},t={parameters:{docs:{description:{story:"Launcher settings with default icon selected."}}}},r={decorators:[e=>(s.setState({launcherIcon:"FcAndroid"}),o.jsx(e,{}))],parameters:{docs:{description:{story:"Launcher settings with a custom icon selected."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Launcher settings with default icon selected.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useSettingsStore.setState({
      launcherIcon: 'FcAndroid'
    });
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Launcher settings with a custom icon selected.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const O=["Default","CustomIcon"];export{r as CustomIcon,t as Default,O as __namedExportsOrder,v as default};

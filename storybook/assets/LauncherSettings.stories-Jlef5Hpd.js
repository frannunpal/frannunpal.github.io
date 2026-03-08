import{u as s,j as o}from"./iframe-U9dC9Cor.js";import{L as n}from"./LauncherSettings-C9WLam6Z.js";import"./preload-helper-D1UD9lgW.js";import"./AppIcon-CBbNJwn9.js";import"./useDynamicIcon-B2vFVd2O.js";import"./SettingsSection-C0qAlHrY.js";import"./Stack-Cm-oUvcw.js";import"./polymorphic-factory-DyzbqoLZ.js";import"./Text-Dtnqn3Bo.js";import"./TextInput-DiqM4NS-.js";import"./InputBase-CpR35aXm.js";import"./use-id-CiapeEnC.js";import"./use-resolved-styles-api-BuMwp7JB.js";import"./CloseButton-BWBrjiZx.js";import"./UnstyledButton-VKVflIkY.js";import"./ScrollArea-BOw2r3pW.js";import"./OptionalPortal-CIlUmR1F.js";import"./is-element-Bi8acN8O.js";import"./Transition-CkLLtgT1.js";import"./index-SsivZmaR.js";import"./DirectionProvider-Dir_r4eo.js";import"./use-merged-ref-WYOYf04b.js";import"./to-int-PQE0s6ay.js";import"./SimpleGrid-BAuYoQRy.js";const v={title:"Settings/Launcher",component:n,parameters:{layout:"padded"},decorators:[e=>o.jsx("div",{style:{maxWidth:600,margin:"0 auto",height:500},children:o.jsx(e,{})})]},t={parameters:{docs:{description:{story:"Launcher settings with default icon selected."}}}},r={decorators:[e=>(s.setState({launcherIcon:"FcAndroid"}),o.jsx(e,{}))],parameters:{docs:{description:{story:"Launcher settings with a custom icon selected."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

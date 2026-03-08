import{u as s,j as o}from"./iframe-EBfrZQCs.js";import{L as n}from"./LauncherSettings-6Ggc41e8.js";import"./preload-helper-CRsgZnrw.js";import"./AppIcon-CIm0Tuzm.js";import"./useDynamicIcon-Z1W58oY5.js";import"./SettingsSection-B9Pnxiwk.js";import"./Stack-DKu2hy6J.js";import"./polymorphic-factory-CitjaWgV.js";import"./Text-CmGhEjeA.js";import"./TextInput-DpB0r6sn.js";import"./InputBase-RM_eedGx.js";import"./use-id-C2-QLSHp.js";import"./use-resolved-styles-api-D94bfHEu.js";import"./CloseButton-NjFIAN3y.js";import"./UnstyledButton-CYZ0_6oA.js";import"./ScrollArea-ImpI-HQl.js";import"./OptionalPortal-CTDSEAQA.js";import"./is-element-CsCIQYcM.js";import"./Transition-BwN4kT9j.js";import"./index-DSqRWbxz.js";import"./DirectionProvider-BPMG83_F.js";import"./use-merged-ref-D8gqU3v0.js";import"./to-int-PQE0s6ay.js";import"./SimpleGrid-CbfQTBaj.js";const v={title:"Settings/Launcher",component:n,parameters:{layout:"padded"},decorators:[e=>o.jsx("div",{style:{maxWidth:600,margin:"0 auto",height:500},children:o.jsx(e,{})})]},t={parameters:{docs:{description:{story:"Launcher settings with default icon selected."}}}},r={decorators:[e=>(s.setState({launcherIcon:"FcAndroid"}),o.jsx(e,{}))],parameters:{docs:{description:{story:"Launcher settings with a custom icon selected."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

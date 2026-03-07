import{u as s,j as o}from"./iframe-BNrdll36.js";import{L as n}from"./LauncherSettings-PinPzf5X.js";import"./preload-helper-CRsgZnrw.js";import"./AppIcon-Du5WmxoY.js";import"./useDynamicIcon-C2kRcZsm.js";import"./SettingsSection-CiRHjmQ6.js";import"./Stack-6mhmhFEl.js";import"./polymorphic-factory-BW9slRGI.js";import"./Text-CfvHUHkT.js";import"./TextInput-CBRHuIFR.js";import"./InputBase-BQ7kPXDg.js";import"./use-id-5ZNEkNgi.js";import"./use-resolved-styles-api-CZsqKTpj.js";import"./CloseButton-DcEOJMJT.js";import"./UnstyledButton-BgOwkDkM.js";import"./ScrollArea-CBzsKrP4.js";import"./OptionalPortal-BPKLB5ZY.js";import"./is-element-CoInZLNR.js";import"./Transition-DPFxZqvc.js";import"./index-CQr2-_tZ.js";import"./DirectionProvider-ChCYRQYr.js";import"./use-merged-ref-DpwU5jvX.js";import"./to-int-PQE0s6ay.js";import"./SimpleGrid-DiwF6zXJ.js";const v={title:"Settings/Launcher",component:n,parameters:{layout:"padded"},decorators:[e=>o.jsx("div",{style:{maxWidth:600,margin:"0 auto",height:500},children:o.jsx(e,{})})]},t={parameters:{docs:{description:{story:"Launcher settings with default icon selected."}}}},r={decorators:[e=>(s.setState({launcherIcon:"FcAndroid"}),o.jsx(e,{}))],parameters:{docs:{description:{story:"Launcher settings with a custom icon selected."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

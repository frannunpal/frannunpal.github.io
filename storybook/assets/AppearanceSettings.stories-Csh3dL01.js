import{u as i,j as e}from"./iframe-EBfrZQCs.js";import{A as m}from"./AppearanceSettings-kIfb7aOe.js";import"./preload-helper-CRsgZnrw.js";import"./ColorPicker-BNhTkLZA.js";import"./Colors-BO33xmnN.js";import"./clamp-DTmYCdls.js";import"./UnstyledButton-CYZ0_6oA.js";import"./polymorphic-factory-CitjaWgV.js";import"./use-resolved-styles-api-D94bfHEu.js";import"./Loader-DqVMSaTN.js";import"./Transition-BwN4kT9j.js";import"./index-DSqRWbxz.js";import"./use-id-C2-QLSHp.js";import"./use-merged-ref-D8gqU3v0.js";import"./use-uncontrolled-DTG28c8l.js";import"./InputBase-RM_eedGx.js";import"./CloseButton-NjFIAN3y.js";import"./Popover-BWv2rWGU.js";import"./OptionalPortal-CTDSEAQA.js";import"./is-element-CsCIQYcM.js";import"./DirectionProvider-BPMG83_F.js";import"./useTranslation-CfQsQjN6.js";import"./Stack-DKu2hy6J.js";import"./Text-CmGhEjeA.js";import"./SegmentedControl-B0OvewRX.js";import"./to-int-PQE0s6ay.js";import"./Group-Dyp7zqJW.js";import"./Slider-DCLzLOfr.js";const z={title:"Settings/Appearance",component:m,parameters:{layout:"padded"},decorators:[t=>e.jsx("div",{style:{maxWidth:600,margin:"0 auto"},children:e.jsx(t,{})})]},r={},o={decorators:[t=>(i.setState({theme:{mode:"dark",desktop:"#1a1b1e",taskbar:"rgba(26, 27, 30, 0.9)",window:"#25262b",accent:"#4dabf7"},themeSetManually:!0}),e.jsx(t,{}))]},a={decorators:[t=>(i.setState({theme:{mode:"light",desktop:"#f0f4f8",taskbar:"#ff6b6b",window:"#f8f9fa",accent:"#ff922b"},themeSetManually:!0,customThemeColors:{taskbar:"#ff6b6b",window:"#f8f9fa",accent:"#ff922b"}}),e.jsx(t,{}))]},n={decorators:[t=>(i.setState({animationDuration:.1}),e.jsx(t,{}))],parameters:{docs:{description:{story:"Appearance settings with fast animation duration (0.1s). Windows will open/close almost instantly."}}}},s={decorators:[t=>(i.setState({animationDuration:1}),e.jsx(t,{}))],parameters:{docs:{description:{story:"Appearance settings with slow animation duration (1.0s). Windows will take a full second to animate open/close."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useSettingsStore.setState({
      theme: {
        mode: 'dark',
        desktop: '#1a1b1e',
        taskbar: 'rgba(26, 27, 30, 0.9)',
        window: '#25262b',
        accent: '#4dabf7'
      },
      themeSetManually: true
    });
    return <Story />;
  }]
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useSettingsStore.setState({
      theme: {
        mode: 'light',
        desktop: '#f0f4f8',
        taskbar: '#ff6b6b',
        window: '#f8f9fa',
        accent: '#ff922b'
      },
      themeSetManually: true,
      customThemeColors: {
        taskbar: '#ff6b6b',
        window: '#f8f9fa',
        accent: '#ff922b'
      }
    });
    return <Story />;
  }]
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useSettingsStore.setState({
      animationDuration: 0.1
    });
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Appearance settings with fast animation duration (0.1s). Windows will open/close almost instantly.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useSettingsStore.setState({
      animationDuration: 1.0
    });
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Appearance settings with slow animation duration (1.0s). Windows will take a full second to animate open/close.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const B=["Default","DarkMode","CustomColors","FastAnimations","SlowAnimations"];export{a as CustomColors,o as DarkMode,r as Default,n as FastAnimations,s as SlowAnimations,B as __namedExportsOrder,z as default};

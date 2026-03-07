import{u as i,j as e}from"./iframe-BNrdll36.js";import{A as m}from"./AppearanceSettings-BpWA091q.js";import"./preload-helper-CRsgZnrw.js";import"./ColorPicker-Ck6ZXLeN.js";import"./Colors-7cWumA21.js";import"./clamp-DTmYCdls.js";import"./UnstyledButton-BgOwkDkM.js";import"./polymorphic-factory-BW9slRGI.js";import"./use-resolved-styles-api-CZsqKTpj.js";import"./Loader-BLXZI6wm.js";import"./Transition-DPFxZqvc.js";import"./index-CQr2-_tZ.js";import"./use-id-5ZNEkNgi.js";import"./use-merged-ref-DpwU5jvX.js";import"./use-uncontrolled-n0Ml9xZi.js";import"./InputBase-BQ7kPXDg.js";import"./CloseButton-DcEOJMJT.js";import"./Popover-DqYjx-9M.js";import"./OptionalPortal-BPKLB5ZY.js";import"./is-element-CoInZLNR.js";import"./DirectionProvider-ChCYRQYr.js";import"./useTranslation-CsYNVJuM.js";import"./Stack-6mhmhFEl.js";import"./Text-CfvHUHkT.js";import"./SegmentedControl-xsRBb7Ku.js";import"./to-int-PQE0s6ay.js";import"./Group-1j-iWBma.js";import"./Slider-DozWe2TY.js";const z={title:"Settings/Appearance",component:m,parameters:{layout:"padded"},decorators:[t=>e.jsx("div",{style:{maxWidth:600,margin:"0 auto"},children:e.jsx(t,{})})]},r={},o={decorators:[t=>(i.setState({theme:{mode:"dark",desktop:"#1a1b1e",taskbar:"rgba(26, 27, 30, 0.9)",window:"#25262b",accent:"#4dabf7"},themeSetManually:!0}),e.jsx(t,{}))]},a={decorators:[t=>(i.setState({theme:{mode:"light",desktop:"#f0f4f8",taskbar:"#ff6b6b",window:"#f8f9fa",accent:"#ff922b"},themeSetManually:!0,customThemeColors:{taskbar:"#ff6b6b",window:"#f8f9fa",accent:"#ff922b"}}),e.jsx(t,{}))]},n={decorators:[t=>(i.setState({animationDuration:.1}),e.jsx(t,{}))],parameters:{docs:{description:{story:"Appearance settings with fast animation duration (0.1s). Windows will open/close almost instantly."}}}},s={decorators:[t=>(i.setState({animationDuration:1}),e.jsx(t,{}))],parameters:{docs:{description:{story:"Appearance settings with slow animation duration (1.0s). Windows will take a full second to animate open/close."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

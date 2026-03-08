import{u as i,j as e}from"./iframe-U9dC9Cor.js";import{A as m}from"./AppearanceSettings-DlKuS_Ox.js";import"./preload-helper-D1UD9lgW.js";import"./ColorPicker-1YlEDuVv.js";import"./Colors-CBaN3Y8G.js";import"./clamp-DTmYCdls.js";import"./UnstyledButton-VKVflIkY.js";import"./polymorphic-factory-DyzbqoLZ.js";import"./use-resolved-styles-api-BuMwp7JB.js";import"./Loader-DElCIoZg.js";import"./Transition-CkLLtgT1.js";import"./index-SsivZmaR.js";import"./use-id-CiapeEnC.js";import"./use-merged-ref-WYOYf04b.js";import"./use-uncontrolled-B4fczV8L.js";import"./InputBase-CpR35aXm.js";import"./CloseButton-BWBrjiZx.js";import"./Popover-BF1G8HQF.js";import"./OptionalPortal-CIlUmR1F.js";import"./is-element-Bi8acN8O.js";import"./DirectionProvider-Dir_r4eo.js";import"./useTranslation-Cvul1C8x.js";import"./Stack-Cm-oUvcw.js";import"./Text-Dtnqn3Bo.js";import"./SegmentedControl-DqZHiGwc.js";import"./to-int-PQE0s6ay.js";import"./Group-C3mkPUBX.js";import"./Slider-DVFU4X73.js";const z={title:"Settings/Appearance",component:m,parameters:{layout:"padded"},decorators:[t=>e.jsx("div",{style:{maxWidth:600,margin:"0 auto"},children:e.jsx(t,{})})]},r={},o={decorators:[t=>(i.setState({theme:{mode:"dark",desktop:"#1a1b1e",taskbar:"rgba(26, 27, 30, 0.9)",window:"#25262b",accent:"#4dabf7"},themeSetManually:!0}),e.jsx(t,{}))]},a={decorators:[t=>(i.setState({theme:{mode:"light",desktop:"#f0f4f8",taskbar:"#ff6b6b",window:"#f8f9fa",accent:"#ff922b"},themeSetManually:!0,customThemeColors:{taskbar:"#ff6b6b",window:"#f8f9fa",accent:"#ff922b"}}),e.jsx(t,{}))]},n={decorators:[t=>(i.setState({animationDuration:.1}),e.jsx(t,{}))],parameters:{docs:{description:{story:"Appearance settings with fast animation duration (0.1s). Windows will open/close almost instantly."}}}},s={decorators:[t=>(i.setState({animationDuration:1}),e.jsx(t,{}))],parameters:{docs:{description:{story:"Appearance settings with slow animation duration (1.0s). Windows will take a full second to animate open/close."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

import{u as i,j as e}from"./iframe-DTUnew5m.js";import{A as m}from"./AppearanceSettings-Cjrt0AU7.js";import"./preload-helper-CRsgZnrw.js";import"./ColorPicker-DOGWBaVQ.js";import"./Colors-RLCP17Q8.js";import"./clamp-DTmYCdls.js";import"./UnstyledButton-BJTgS-FG.js";import"./polymorphic-factory-C7kbvBSE.js";import"./use-resolved-styles-api-B4Ecvuov.js";import"./Loader-TqqKt8B9.js";import"./Transition-D56J4DjQ.js";import"./index-Bqmkwnfn.js";import"./use-id-Cap3KBVR.js";import"./use-merged-ref-rvP5RKof.js";import"./use-uncontrolled-Dg6i_OhA.js";import"./InputBase-CP_TToBK.js";import"./CloseButton-BHFv3TQu.js";import"./Popover-OC0mRjZ8.js";import"./OptionalPortal-FiBzFgm1.js";import"./is-element-p28lS3c1.js";import"./DirectionProvider-BLC1boeJ.js";import"./useTranslation-DphYhn2X.js";import"./Stack-C6Jkg3KI.js";import"./Text-Ciw_5Qn7.js";import"./SegmentedControl-BiMBQNRW.js";import"./to-int-PQE0s6ay.js";import"./Group-BVZlK1MV.js";import"./Slider-DKGZpXrZ.js";const z={title:"Settings/Appearance",component:m,parameters:{layout:"padded"},decorators:[t=>e.jsx("div",{style:{maxWidth:600,margin:"0 auto"},children:e.jsx(t,{})})]},r={},o={decorators:[t=>(i.setState({theme:{mode:"dark",desktop:"#1a1b1e",taskbar:"rgba(26, 27, 30, 0.9)",window:"#25262b",accent:"#4dabf7"},themeSetManually:!0}),e.jsx(t,{}))]},a={decorators:[t=>(i.setState({theme:{mode:"light",desktop:"#f0f4f8",taskbar:"#ff6b6b",window:"#f8f9fa",accent:"#ff922b"},themeSetManually:!0,customThemeColors:{taskbar:"#ff6b6b",window:"#f8f9fa",accent:"#ff922b"}}),e.jsx(t,{}))]},n={decorators:[t=>(i.setState({animationDuration:.1}),e.jsx(t,{}))],parameters:{docs:{description:{story:"Appearance settings with fast animation duration (0.1s). Windows will open/close almost instantly."}}}},s={decorators:[t=>(i.setState({animationDuration:1}),e.jsx(t,{}))],parameters:{docs:{description:{story:"Appearance settings with slow animation duration (1.0s). Windows will take a full second to animate open/close."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

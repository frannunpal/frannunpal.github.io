import{n as e}from"./chunk-zsgVPwQN.js";import{R as t,Wt as n,z as r}from"./iframe-DfGrJCrR.js";import{n as i,t as a}from"./AppearanceSettings-BWFwNybv.js";var o,s,c,l,u,d,f,p;e((()=>{i(),t(),o=n(),s={title:`Settings/Appearance`,component:a,parameters:{layout:`padded`},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:600,margin:`0 auto`},children:(0,o.jsx)(e,{})})]},c={},l={decorators:[e=>(r.setState({theme:{mode:`dark`,desktop:`#1a1b1e`,taskbar:`rgba(26, 27, 30, 0.9)`,window:`#25262b`,accent:`#4dabf7`},themeSetManually:!0}),(0,o.jsx)(e,{}))]},u={decorators:[e=>(r.setState({theme:{mode:`light`,desktop:`#f0f4f8`,taskbar:`#ff6b6b`,window:`#f8f9fa`,accent:`#ff922b`},themeSetManually:!0,customThemeColors:{taskbar:`#ff6b6b`,window:`#f8f9fa`,accent:`#ff922b`}}),(0,o.jsx)(e,{}))]},d={decorators:[e=>(r.setState({animationDuration:.1}),(0,o.jsx)(e,{}))],parameters:{docs:{description:{story:`Appearance settings with fast animation duration (0.1s). Windows will open/close almost instantly.`}}}},f={decorators:[e=>(r.setState({animationDuration:1}),(0,o.jsx)(e,{}))],parameters:{docs:{description:{story:`Appearance settings with slow animation duration (1.0s). Windows will take a full second to animate open/close.`}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`DarkMode`,`CustomColors`,`FastAnimations`,`SlowAnimations`]}))();export{u as CustomColors,l as DarkMode,c as Default,d as FastAnimations,f as SlowAnimations,p as __namedExportsOrder,s as default};
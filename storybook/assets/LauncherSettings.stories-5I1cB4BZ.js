import{n as e}from"./chunk-zsgVPwQN.js";import{T as t,m as n,p as r}from"./SettingsApp-BvDQlnDJ.js";import{Hn as i,t as a}from"./iframe-7KWrXVss.js";var o,s,c,l,u;e((()=>{n(),a(),o=i(),s={title:`Settings/Launcher`,component:r,parameters:{layout:`padded`},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:600,margin:`0 auto`,height:500},children:(0,o.jsx)(e,{})})]},c={parameters:{docs:{description:{story:`Launcher settings with default icon selected.`}}}},l={decorators:[e=>(t.setState({launcherIcon:`FcAndroid`}),(0,o.jsx)(e,{}))],parameters:{docs:{description:{story:`Launcher settings with a custom icon selected.`}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Launcher settings with default icon selected.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Default`,`CustomIcon`]}))();export{l as CustomIcon,c as Default,u as __namedExportsOrder,s as default};
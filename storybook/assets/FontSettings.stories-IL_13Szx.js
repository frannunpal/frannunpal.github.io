import{n as e}from"./chunk-zsgVPwQN.js";import{R as t,Wt as n,z as r}from"./iframe-B_JqdEIP.js";import{a as i,i as a,n as o,r as s,t as c}from"./FontSettings-Iiyr6EdN.js";var l,u,d,f,p,m,h,g,_;e((()=>{s(),o(),t(),l=n(),u=new i({defaultOptions:{queries:{retry:!1}}}),d={title:`Settings/Font`,component:c,parameters:{layout:`padded`},decorators:[e=>(0,l.jsx)(a,{client:u,children:(0,l.jsx)(`div`,{style:{maxWidth:600,margin:`0 auto`},children:(0,l.jsx)(e,{})})})]},f={},p={decorators:[e=>(r.setState({downloadedFonts:[`Source Code Pro`,`Open Sans`]}),(0,l.jsx)(e,{}))],parameters:{docs:{description:{story:`Font settings with some fonts already downloaded and ready to use.`}}}},m={decorators:[e=>(r.setState({font:`Roboto`,downloadedFonts:[`Roboto`],fontSize:16}),(0,l.jsx)(e,{}))],parameters:{docs:{description:{story:`Font settings with a custom downloaded font selected and larger font size.`}}}},h={decorators:[e=>(r.setState({fontSize:20}),(0,l.jsx)(e,{}))],parameters:{docs:{description:{story:`Font settings with larger font size (20px).`}}}},g={decorators:[e=>(r.setState({fontSize:10}),(0,l.jsx)(e,{}))],parameters:{docs:{description:{story:`Font settings with smaller font size (10px).`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useSettingsStore.setState({
      downloadedFonts: ['Source Code Pro', 'Open Sans']
    });
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Font settings with some fonts already downloaded and ready to use.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useSettingsStore.setState({
      font: 'Roboto',
      downloadedFonts: ['Roboto'],
      fontSize: 16
    });
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Font settings with a custom downloaded font selected and larger font size.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useSettingsStore.setState({
      fontSize: 20
    });
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Font settings with larger font size (20px).'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useSettingsStore.setState({
      fontSize: 10
    });
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Font settings with smaller font size (10px).'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithDownloadedFonts`,`CustomFontSelected`,`LargeFontSize`,`SmallFontSize`]}))();export{m as CustomFontSelected,f as Default,h as LargeFontSize,g as SmallFontSize,p as WithDownloadedFonts,_ as __namedExportsOrder,d as default};
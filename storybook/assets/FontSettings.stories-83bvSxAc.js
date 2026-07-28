import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{a as t}from"./settingsStore-BvWzekOE.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{Gn as r,Hn as i,Un as a,t as o}from"./iframe-CpxgCcgs.js";import{n as s,t as c}from"./FontSettings-D8NGEgKf.js";var l,u,d,f,p,m,h,g,_;e((()=>{i(),s(),o(),l=n(),u=new r({defaultOptions:{queries:{retry:!1}}}),d={title:`Settings/Font`,component:c,parameters:{layout:`padded`},decorators:[e=>(0,l.jsx)(a,{client:u,children:(0,l.jsx)(`div`,{style:{maxWidth:600,margin:`0 auto`},children:(0,l.jsx)(e,{})})})]},f={},p={decorators:[e=>(t.setState({downloadedFonts:[`Source Code Pro`,`Open Sans`]}),(0,l.jsx)(e,{}))],parameters:{docs:{description:{story:`Font settings with some fonts already downloaded and ready to use.`}}}},m={decorators:[e=>(t.setState({font:`Roboto`,downloadedFonts:[`Roboto`],fontSize:16}),(0,l.jsx)(e,{}))],parameters:{docs:{description:{story:`Font settings with a custom downloaded font selected and larger font size.`}}}},h={decorators:[e=>(t.setState({fontSize:20}),(0,l.jsx)(e,{}))],parameters:{docs:{description:{story:`Font settings with larger font size (20px).`}}}},g={decorators:[e=>(t.setState({fontSize:10}),(0,l.jsx)(e,{}))],parameters:{docs:{description:{story:`Font settings with smaller font size (10px).`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
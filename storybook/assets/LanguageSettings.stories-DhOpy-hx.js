import{r as s,u as a,j as o}from"./iframe-DTUnew5m.js";import{L as n}from"./LanguageSettings-CEWHWR7o.js";import"./preload-helper-CRsgZnrw.js";import"./SettingsSection-CGK_qNBW.js";import"./Stack-C6Jkg3KI.js";import"./polymorphic-factory-C7kbvBSE.js";import"./Text-Ciw_5Qn7.js";import"./useTranslation-DphYhn2X.js";import"./UnstyledButton-BJTgS-FG.js";import"./Group-BVZlK1MV.js";const x={title:"Settings/LanguageSettings",component:n,parameters:{layout:"padded"}},e={decorators:[r=>(s.useEffect(()=>{a.setState({language:"en"})},[]),o.jsx(r,{}))]},t={decorators:[r=>(s.useEffect(()=>{a.setState({language:"es"})},[]),o.jsx(r,{}))]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useEffect(() => {
      useSettingsStore.setState({
        language: 'en'
      });
    }, []);
    return <Story />;
  }]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useEffect(() => {
      useSettingsStore.setState({
        language: 'es'
      });
    }, []);
    return <Story />;
  }]
}`,...t.parameters?.docs?.source}}};const E=["Default","Spanish"];export{e as Default,t as Spanish,E as __namedExportsOrder,x as default};

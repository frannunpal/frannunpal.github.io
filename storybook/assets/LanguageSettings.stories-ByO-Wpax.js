import{r as s,u as a,j as o}from"./iframe-EBfrZQCs.js";import{L as n}from"./LanguageSettings-BbqLWCR-.js";import"./preload-helper-CRsgZnrw.js";import"./SettingsSection-B9Pnxiwk.js";import"./Stack-DKu2hy6J.js";import"./polymorphic-factory-CitjaWgV.js";import"./Text-CmGhEjeA.js";import"./useTranslation-CfQsQjN6.js";import"./UnstyledButton-CYZ0_6oA.js";import"./Group-Dyp7zqJW.js";const x={title:"Settings/LanguageSettings",component:n,parameters:{layout:"padded"}},e={decorators:[r=>(s.useEffect(()=>{a.setState({language:"en"})},[]),o.jsx(r,{}))]},t={decorators:[r=>(s.useEffect(()=>{a.setState({language:"es"})},[]),o.jsx(r,{}))]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

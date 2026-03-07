import{r as s,u as a,j as o}from"./iframe-BNrdll36.js";import{L as n}from"./LanguageSettings-Dn0YQDr1.js";import"./preload-helper-CRsgZnrw.js";import"./SettingsSection-CiRHjmQ6.js";import"./Stack-6mhmhFEl.js";import"./polymorphic-factory-BW9slRGI.js";import"./Text-CfvHUHkT.js";import"./useTranslation-CsYNVJuM.js";import"./UnstyledButton-BgOwkDkM.js";import"./Group-1j-iWBma.js";const x={title:"Settings/LanguageSettings",component:n,parameters:{layout:"padded"}},e={decorators:[r=>(s.useEffect(()=>{a.setState({language:"en"})},[]),o.jsx(r,{}))]},t={decorators:[r=>(s.useEffect(()=>{a.setState({language:"es"})},[]),o.jsx(r,{}))]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

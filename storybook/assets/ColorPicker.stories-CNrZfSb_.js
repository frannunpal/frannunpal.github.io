import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{n as i,t as a}from"./ColorPicker-BUORT_FW.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Shared/ColorPicker`,component:a,parameters:{layout:`centered`}},l=e=>{let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(a,{...e,value:t,onChange:n})},u={render:e=>(0,s.jsx)(l,{...e}),args:{value:`#228be6`}},d={render:e=>(0,s.jsx)(l,{...e}),args:{value:`#fa5252`}},f={render:e=>(0,s.jsx)(l,{...e}),args:{value:`notacolor`,error:`Invalid color value`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledColorPicker {...args} />,
  args: {
    value: '#228be6'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledColorPicker {...args} />,
  args: {
    value: '#fa5252'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledColorPicker {...args} />,
  args: {
    value: 'notacolor',
    error: 'Invalid color value'
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithPreselectedColor`,`WithError`]}))();export{u as Default,f as WithError,d as WithPreselectedColor,p as __namedExportsOrder,c as default};
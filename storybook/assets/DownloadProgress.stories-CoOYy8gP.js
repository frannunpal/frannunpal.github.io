import{n as e}from"./chunk-jRWAZmH_.js";import{B as t,V as n}from"./iframe-C7ji4tt1.js";var r,i,a,o,s,c,l,u,d,f;e((()=>{n(),r={title:`Shared/DownloadProgress`,component:t,parameters:{layout:`centered`},argTypes:{ariaLabel:{control:`text`,description:`Accessible label for the progress bar`},minDisplayTime:{control:{type:`number`,min:0,max:5e3},description:`Minimum display time in ms before hiding after completion`}}},i={status:`idle`,loaded:0,total:null,percent:null,error:null},a={status:`downloading`,loaded:512e3,total:1024e3,percent:50,error:null},o={status:`done`,loaded:1024e3,total:1024e3,percent:100,error:null},s={status:`error`,loaded:256e3,total:1024e3,percent:25,error:`Network error`},c={args:{state:i}},l={args:{state:a}},u={args:{state:o,minDisplayTime:0}},d={args:{state:s}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: idleState
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: downloadingState
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: doneState,
    minDisplayTime: 0
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: errorState
  }
}`,...d.parameters?.docs?.source}}},f=[`Idle`,`Downloading`,`Done`,`Error`]}))();export{u as Done,l as Downloading,d as Error,c as Idle,f as __namedExportsOrder,r as default};
import{n as e}from"./chunk-zsgVPwQN.js";import{Wt as t}from"./iframe-DfGrJCrR.js";import{c as n,s as r}from"./Window-ZzciGPVD.js";import{n as i}from"./makeWindow-BxXvFDfP.js";import{t as a}from"./AppWithPickerOpen-Bj5-aoMV.js";import{n as o,o as s}from"./Storybook-BFxgPpyd.js";var c,l,u,d,f;e((()=>{n(),s(),c=t(),l={title:`Apps/PdfApp`,component:r,parameters:{layout:`fullscreen`}},u={render:()=>(0,c.jsx)(a,{win:i({title:`PDF Viewer`,content:`pdf`,fcIcon:`FcDocument`,width:780,height:580,contentData:{src:`/storybook/Desktop/CV_2026_English.pdf`}}),fsNodes:o()})},d={render:()=>(0,c.jsx)(a,{win:i({title:`PDF Viewer`,content:`pdf`,fcIcon:`FcDocument`,width:780,height:580}),fsNodes:o()})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    title: 'PDF Viewer',
    content: 'pdf',
    fcIcon: 'FcDocument',
    width: 780,
    height: 580,
    contentData: {
      src: \`\${import.meta.env.BASE_URL}Desktop/CV_2026_English.pdf\`
    }
  })} fsNodes={createDocumentFsNodes()} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    title: 'PDF Viewer',
    content: 'pdf',
    fcIcon: 'FcDocument',
    width: 780,
    height: 580
  })} fsNodes={createDocumentFsNodes()} />
}`,...d.parameters?.docs?.source}}},f=[`Default`,`NoFile`]}))();export{u as Default,d as NoFile,f as __namedExportsOrder,l as default};
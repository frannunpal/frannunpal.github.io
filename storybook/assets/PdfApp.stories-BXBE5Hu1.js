import{n as e}from"./chunk-jRWAZmH_.js";import{wi as t}from"./iframe-CKI3poW4.js";import{n,s as r}from"./testUtils-DOwt75rj.js";import{n as i,t as a}from"./Storybook-BDDa_0to.js";import o,{t as s}from"./PdfApp-XtABaMqT.js";var c,l,u,d,f;e((()=>{s(),a(),c=t(),l={title:`Apps/PdfApp`,component:o,parameters:{layout:`fullscreen`}},u={render:()=>(0,c.jsx)(i,{win:r({title:`PDF Viewer`,content:`pdf`,fcIcon:`FcDocument`,width:780,height:580,contentData:{src:`/storybook/Desktop/CV_2026_EN_v4.pdf`}}),fsNodes:n()})},d={render:()=>(0,c.jsx)(i,{win:r({title:`PDF Viewer`,content:`pdf`,fcIcon:`FcDocument`,width:780,height:580}),fsNodes:n()})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    title: 'PDF Viewer',
    content: 'pdf',
    fcIcon: 'FcDocument',
    width: 780,
    height: 580,
    contentData: {
      src: \`\${import.meta.env.BASE_URL}Desktop/CV_2026_EN_v4.pdf\`
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
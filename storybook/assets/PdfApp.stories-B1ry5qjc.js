import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-BscHEzdU.js";import{n,s as r}from"./testUtils-v-c9Bf2o.js";import{n as i,t as a}from"./Storybook-bVrNhr4A.js";import o,{t as s}from"./PdfApp-DQQrxI9u.js";var c,l,u,d,f;e((()=>{s(),a(),c=t(),l={title:`Apps/PdfApp`,component:o,parameters:{layout:`fullscreen`}},u={render:()=>(0,c.jsx)(i,{win:r({title:`PDF Viewer`,content:`pdf`,fcIcon:`FcDocument`,width:780,height:580,contentData:{src:`/storybook/Desktop/CV_2026_EN_v4.pdf`}}),fsNodes:n()})},d={render:()=>(0,c.jsx)(i,{win:r({title:`PDF Viewer`,content:`pdf`,fcIcon:`FcDocument`,width:780,height:580}),fsNodes:n()})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
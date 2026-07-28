import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{a as n,n as r,t as i,u as a}from"./Storybook-CLNrt3mI.js";import o,{t as s}from"./PdfApp-QmDx69Uh.js";var c,l,u,d,f;e((()=>{s(),i(),c=t(),l={title:`Apps/PdfApp`,component:o,parameters:{layout:`fullscreen`}},u={render:()=>(0,c.jsx)(r,{win:a({title:`PDF Viewer`,content:`pdf`,fcIcon:`FcDocument`,width:780,height:580,contentData:{src:`/storybook/Desktop/CV_2026_EN_v4.pdf`}}),fsNodes:n()})},d={render:()=>(0,c.jsx)(r,{win:a({title:`PDF Viewer`,content:`pdf`,fcIcon:`FcDocument`,width:780,height:580}),fsNodes:n()})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
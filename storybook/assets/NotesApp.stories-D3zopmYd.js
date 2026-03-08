import{j as e}from"./iframe-U9dC9Cor.js";import{m as i,c as t,B as y,a as W,b as S,D as A}from"./Window-DddBGFMP.js";import{A as n}from"./AppWithPickerOpen-XTSOsURC.js";import{V as o}from"./VscIcon-B9mYMaw9.js";import"./preload-helper-D1UD9lgW.js";import"./index-SsivZmaR.js";import"./Transition-CkLLtgT1.js";import"./desktopStore-BmrVKCSf.js";import"./apps-C9KmvF_j.js";import"./sortNodes-k3UPHZY_.js";import"./SettingsApp-CnaCGwC0.js";import"./AppIcon-CBbNJwn9.js";import"./useDynamicIcon-B2vFVd2O.js";import"./WallpaperSettings-CEN_iOqy.js";import"./useResolvedUrl-97qfKVBS.js";import"./FilePickerApp-CDq1H7ZD.js";import"./FileIcon-hHMFxt38.js";import"./Breadcrumbs-BwM3e-g7.js";import"./polymorphic-factory-DyzbqoLZ.js";import"./Text-Dtnqn3Bo.js";import"./is-element-Bi8acN8O.js";import"./UnstyledButton-VKVflIkY.js";import"./useTranslation-Cvul1C8x.js";import"./Group-C3mkPUBX.js";import"./Button-BlMBDGXk.js";import"./Loader-DElCIoZg.js";import"./TextInput-DiqM4NS-.js";import"./InputBase-CpR35aXm.js";import"./use-id-CiapeEnC.js";import"./use-resolved-styles-api-BuMwp7JB.js";import"./CloseButton-BWBrjiZx.js";import"./SettingsSection-C0qAlHrY.js";import"./Stack-Cm-oUvcw.js";import"./wallpaper-aTrUdOVb.js";import"./SegmentedControl-DqZHiGwc.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-WYOYf04b.js";import"./use-uncontrolled-B4fczV8L.js";import"./AppearanceSettings-DlKuS_Ox.js";import"./ColorPicker-1YlEDuVv.js";import"./Colors-CBaN3Y8G.js";import"./clamp-DTmYCdls.js";import"./Popover-BF1G8HQF.js";import"./OptionalPortal-CIlUmR1F.js";import"./DirectionProvider-Dir_r4eo.js";import"./Slider-DVFU4X73.js";import"./LauncherSettings-C9WLam6Z.js";import"./ScrollArea-BOw2r3pW.js";import"./SimpleGrid-BAuYoQRy.js";import"./FontSettings-Ccxa0xFL.js";import"./Paper-ByTz6eXy.js";import"./LanguageSettings-DtVijbTS.js";import"./ResetSettings-DJbkNdbe.js";import"./useWindowButtonRegistry-rcD5OXVH.js";import"./useAnimationDuration-CI8m7S-H.js";import"./Animations-67kTFacj.js";import"./Menu-BnSD2lCt.js";import"./AccordionChevron-CAXHsCT_.js";import"./CalendarApp-fq-CuZuq.js";import"./FilesApp-Gd4NNyLp.js";import"./useOpenApp-CpsIN7bm.js";import"./useAdaptiveDimensions-D5xa8B8u.js";import"./FolderTree-CP82asWx.js";import"./FileList-wSI4Lc67.js";import"./PdfApp-7qWbdqc-.js";import"./StorybookApp-CHqs-kNk.js";import"./iconBase-BTUdkooo.js";import"./CreateItemApp--Tfsih1Q.js";import"./IconColorPicker-C_hxnPh3.js";import"./Icons-2dF7msl8.js";import"./Modal-h5Xev0xu.js";const D={id:"folder-notes",name:"Notes",type:"folder",parentId:null,children:["file-welcome","file-todo"],createdAt:new Date,updatedAt:new Date},p={id:"file-welcome",name:"welcome.md",type:"file",parentId:"folder-notes",content:`# Welcome to NotesApp

This is a **markdown** editor powered by [TipTap](https://tiptap.dev).

## Features

- Rich text editing
- *Italic*, **bold**, ~~strikethrough~~
- \`inline code\` and code blocks
- Bullet and ordered lists
- Blockquotes

> Write something great today.
`,mimeType:"text/markdown",url:void 0,createdAt:new Date,updatedAt:new Date},b={id:"file-todo",name:"todo.md",type:"file",parentId:"folder-notes",content:`# TODO

- [ ] Buy groceries
- [ ] Write documentation
- [x] Set up NotesApp
`,mimeType:"text/markdown",url:void 0,createdAt:new Date,updatedAt:new Date},a=[D,p,b],$=({isDirty:m,canUndo:h,canRedo:f,isBold:u,isItalic:x,isStrike:w,isCode:g,isH1:N,isH2:j,isBulletList:I,isOrderedList:k,isBlockquote:B,isCodeBlock:v})=>e.jsxs("div",{className:t.container,children:[e.jsxs("div",{className:t.toolbar,role:"toolbar","aria-label":"Text formatting",children:[e.jsx("button",{className:`${t.toolbarBtn} ${u?t.active:""}`,disabled:!1,title:"Bold","aria-label":"Bold",children:e.jsx(o,{name:"VscBold"})}),e.jsx("button",{className:`${t.toolbarBtn} ${x?t.active:""}`,disabled:!1,title:"Italic","aria-label":"Italic",children:e.jsx(o,{name:"VscItalic"})}),e.jsx("button",{className:`${t.toolbarBtn} ${w?t.active:""}`,disabled:!1,title:"Strikethrough","aria-label":"Strikethrough",children:e.jsx(y,{name:"BiStrikethrough"})}),e.jsx("button",{className:`${t.toolbarBtn} ${g?t.active:""}`,disabled:!1,title:"Inline code","aria-label":"Inline code",children:e.jsx(o,{name:"VscCode"})}),e.jsx("span",{className:t.separator}),e.jsx("button",{className:`${t.toolbarBtn} ${N?t.active:""}`,disabled:!1,title:"Heading 1","aria-label":"Heading 1",children:e.jsx(W,{})}),e.jsx("button",{className:`${t.toolbarBtn} ${j?t.active:""}`,disabled:!1,title:"Heading 2","aria-label":"Heading 2",children:e.jsx(S,{})}),e.jsx("span",{className:t.separator}),e.jsx("button",{className:`${t.toolbarBtn} ${I?t.active:""}`,disabled:!1,title:"Bullet list","aria-label":"Bullet list",children:e.jsx(o,{name:"VscListUnordered"})}),e.jsx("button",{className:`${t.toolbarBtn} ${k?t.active:""}`,disabled:!1,title:"Ordered list","aria-label":"Ordered list",children:e.jsx(o,{name:"VscListOrdered"})}),e.jsx("span",{className:t.separator}),e.jsx("button",{className:`${t.toolbarBtn} ${B?t.active:""}`,disabled:!1,title:"Blockquote","aria-label":"Blockquote",children:e.jsx(o,{name:"VscQuote"})}),e.jsx("button",{className:`${t.toolbarBtn} ${v?t.active:""}`,disabled:!1,title:"Code block","aria-label":"Code block",children:e.jsx(o,{name:"VscTerminal"})}),e.jsx("button",{className:t.toolbarBtn,disabled:!1,title:"Horizontal rule","aria-label":"Horizontal rule",children:e.jsx(o,{name:"VscHorizontalRule"})}),e.jsx("span",{className:t.separator}),e.jsx("button",{className:t.toolbarBtn,disabled:!h,title:"Undo","aria-label":"Undo",children:e.jsx(o,{name:"VscDiscard"})}),e.jsx("button",{className:t.toolbarBtn,disabled:!f,title:"Redo","aria-label":"Redo",children:e.jsx(o,{name:"VscRedo"})}),m&&e.jsx("span",{className:t.dirtyIndicator,title:"Unsaved changes",children:e.jsx(A,{})})]}),e.jsx("div",{className:t.editorContent,style:{display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-dimmed)",fontSize:14},children:"Use the controls in the Controls panel to toggle toolbar states"})]}),Je={title:"Apps/NotesApp",parameters:{layout:"fullscreen"},argTypes:{isDirty:{control:"boolean",description:"Shows the FcSynchronize unsaved indicator"},canUndo:{control:"boolean",description:"Enable Undo button"},canRedo:{control:"boolean",description:"Enable Redo button"},isBold:{control:"boolean",description:"Bold text active state"},isItalic:{control:"boolean",description:"Italic text active state"},isStrike:{control:"boolean",description:"Strikethrough text active state"},isCode:{control:"boolean",description:"Inline code active state"},isH1:{control:"boolean",description:"Heading 1 active state"},isH2:{control:"boolean",description:"Heading 2 active state"},isBulletList:{control:"boolean",description:"Bullet list active state"},isOrderedList:{control:"boolean",description:"Ordered list active state"},isBlockquote:{control:"boolean",description:"Blockquote active state"},isCodeBlock:{control:"boolean",description:"Code block active state"}},args:{isDirty:!1,canUndo:!1,canRedo:!1,isBold:!1,isItalic:!1,isStrike:!1,isCode:!1,isH1:!1,isH2:!1,isBulletList:!1,isOrderedList:!1,isBlockquote:!1,isCodeBlock:!1}},s={render:()=>e.jsx(n,{win:i({id:"win-notes",title:"Notepad",content:"notepad",fcIcon:"FcEditImage",width:700,height:520,x:0,y:0}),fsNodes:a})},r={render:()=>e.jsx(n,{win:i({id:"win-notes-content",title:"Notepad",content:"notepad",fcIcon:"FcEditImage",width:700,height:520,x:0,y:0,contentData:{initialContent:p.content??""}}),fsNodes:a})},l={render:()=>e.jsx(n,{win:i({id:"win-notes-small",title:"Notepad",content:"notepad",fcIcon:"FcEditImage",width:360,height:280,x:0,y:0,contentData:{initialContent:b.content??""}}),fsNodes:a})},c={render:()=>e.jsx(n,{win:i({id:"win-notes-open",title:"welcome.md",content:"notepad",fcIcon:"FcEditImage",width:700,height:520,x:0,y:0,contentData:{fileId:"file-welcome",initialName:"welcome.md",initialContent:p.content??""}}),fsNodes:a})},d={render:m=>e.jsx(n,{win:i({id:"win-notes-controls",title:"NotesApp - Toolbar States",content:"notepad",fcIcon:"FcEditImage",width:700,height:520,x:0,y:0}),fsNodes:a,children:e.jsx($,{...m})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    id: 'win-notes',
    title: 'Notepad',
    content: 'notepad',
    fcIcon: 'FcEditImage',
    width: 700,
    height: 520,
    x: 0,
    y: 0
  })} fsNodes={fsNodes} />
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    id: 'win-notes-content',
    title: 'Notepad',
    content: 'notepad',
    fcIcon: 'FcEditImage',
    width: 700,
    height: 520,
    x: 0,
    y: 0,
    contentData: {
      initialContent: fileWelcome.content ?? ''
    }
  })} fsNodes={fsNodes} />
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    id: 'win-notes-small',
    title: 'Notepad',
    content: 'notepad',
    fcIcon: 'FcEditImage',
    width: 360,
    height: 280,
    x: 0,
    y: 0,
    contentData: {
      initialContent: fileTodo.content ?? ''
    }
  })} fsNodes={fsNodes} />
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithPickerOpen win={makeWindow({
    id: 'win-notes-open',
    title: 'welcome.md',
    content: 'notepad',
    fcIcon: 'FcEditImage',
    width: 700,
    height: 520,
    x: 0,
    y: 0,
    contentData: {
      fileId: 'file-welcome',
      initialName: 'welcome.md',
      initialContent: fileWelcome.content ?? ''
    }
  })} fsNodes={fsNodes} />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <AppWithPickerOpen win={makeWindow({
    id: 'win-notes-controls',
    title: 'NotesApp - Toolbar States',
    content: 'notepad',
    fcIcon: 'FcEditImage',
    width: 700,
    height: 520,
    x: 0,
    y: 0
  })} fsNodes={fsNodes}>
      <MockToolbar {...args} />
    </AppWithPickerOpen>
}`,...d.parameters?.docs?.source}}};const Ke=["Default","WithContent","SmallWindow","WithOpenFile","ToolbarStates"];export{s as Default,l as SmallWindow,d as ToolbarStates,r as WithContent,c as WithOpenFile,Ke as __namedExportsOrder,Je as default};

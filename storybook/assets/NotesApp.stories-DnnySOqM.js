import{j as e}from"./iframe-DTUnew5m.js";import{m as i,c as t,B as y,a as W,b as S,D as A}from"./Window-BUOcuZOu.js";import{A as n}from"./AppWithPickerOpen-DQo779zS.js";import{V as o}from"./VscIcon-Dzao96iO.js";import"./preload-helper-CRsgZnrw.js";import"./index-Bqmkwnfn.js";import"./Transition-D56J4DjQ.js";import"./desktopStore-Bl-LhsjV.js";import"./apps-B-6LmW0h.js";import"./sortNodes-k3UPHZY_.js";import"./SettingsApp-CCeHToXz.js";import"./AppIcon-BAFT5x1f.js";import"./useDynamicIcon-D5XK78SV.js";import"./WallpaperSettings-D2iJ5-r5.js";import"./useResolvedUrl-ChVNyGze.js";import"./FilePickerApp-beYeqPQr.js";import"./FileIcon-bD-ght3W.js";import"./Breadcrumbs-DZjbjuOC.js";import"./polymorphic-factory-C7kbvBSE.js";import"./Text-Ciw_5Qn7.js";import"./is-element-p28lS3c1.js";import"./UnstyledButton-BJTgS-FG.js";import"./useTranslation-DphYhn2X.js";import"./Group-BVZlK1MV.js";import"./Button-Cp3y7idV.js";import"./Loader-TqqKt8B9.js";import"./TextInput-3bhAI-4j.js";import"./InputBase-CP_TToBK.js";import"./use-id-Cap3KBVR.js";import"./use-resolved-styles-api-B4Ecvuov.js";import"./CloseButton-BHFv3TQu.js";import"./SettingsSection-CGK_qNBW.js";import"./Stack-C6Jkg3KI.js";import"./wallpaper-DBrFTLr9.js";import"./SegmentedControl-BiMBQNRW.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-rvP5RKof.js";import"./use-uncontrolled-Dg6i_OhA.js";import"./AppearanceSettings-Cjrt0AU7.js";import"./ColorPicker-DOGWBaVQ.js";import"./Colors-RLCP17Q8.js";import"./clamp-DTmYCdls.js";import"./Popover-OC0mRjZ8.js";import"./OptionalPortal-FiBzFgm1.js";import"./DirectionProvider-BLC1boeJ.js";import"./Slider-DKGZpXrZ.js";import"./LauncherSettings-DXZZkazn.js";import"./ScrollArea-emAnltUB.js";import"./SimpleGrid-DNuQErG9.js";import"./FontSettings-CExlbusc.js";import"./Paper-kZ-ksZcK.js";import"./LanguageSettings-CEWHWR7o.js";import"./ResetSettings-B_TRLD5m.js";import"./useWindowButtonRegistry-clhv7RY5.js";import"./useAnimationDuration-B-ZHPhDZ.js";import"./Animations-67kTFacj.js";import"./Menu-B1d0fIAt.js";import"./AccordionChevron-BjX6ADvt.js";import"./CalendarApp-DzSvaA4J.js";import"./FilesApp-DPpsVSn4.js";import"./useOpenApp-BisNTOXP.js";import"./useAdaptiveDimensions-C-Kiaz6q.js";import"./FolderTree-B2prfp-g.js";import"./FileList-nI_E0peq.js";import"./PdfApp-NwQMpO3b.js";import"./StorybookApp-COtEVbrW.js";import"./iconBase-DnDmCQVP.js";import"./CreateItemApp-Rb-tIwaH.js";import"./IconColorPicker-CxNUylIU.js";import"./Icons-2dF7msl8.js";import"./Modal-DKI4BlOW.js";const D={id:"folder-notes",name:"Notes",type:"folder",parentId:null,children:["file-welcome","file-todo"],createdAt:new Date,updatedAt:new Date},p={id:"file-welcome",name:"welcome.md",type:"file",parentId:"folder-notes",content:`# Welcome to NotesApp

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

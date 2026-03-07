import{j as e}from"./iframe-BNrdll36.js";import{m as o,c as t,a as v,b as y,D as W}from"./Window-uPqwoy4q.js";import{A as i}from"./AppWithPickerOpen-CLgkfXkV.js";import{V as S,a as A,b as D,c as $,d as C,e as O,f as T,g as F,h as H,i as E}from"./index-05f7sRL8.js";import{BiStrikethrough as V}from"./index-BDNWvj3h.js";import"./preload-helper-CRsgZnrw.js";import"./index-CQr2-_tZ.js";import"./Transition-DPFxZqvc.js";import"./desktopStore-6p6olQk_.js";import"./apps-B-6LmW0h.js";import"./sortNodes-k3UPHZY_.js";import"./SettingsApp-Bs8N2TL3.js";import"./AppIcon-Du5WmxoY.js";import"./useDynamicIcon-C2kRcZsm.js";import"./WallpaperSettings-DtoBRpg1.js";import"./FilePickerApp-C9cbMQYq.js";import"./FileIcon-CS6U7Dwq.js";import"./Breadcrumbs-D1lfVFUO.js";import"./polymorphic-factory-BW9slRGI.js";import"./Text-CfvHUHkT.js";import"./is-element-CoInZLNR.js";import"./UnstyledButton-BgOwkDkM.js";import"./useTranslation-CsYNVJuM.js";import"./Group-1j-iWBma.js";import"./Button--RpCmFwV.js";import"./Loader-BLXZI6wm.js";import"./TextInput-CBRHuIFR.js";import"./InputBase-BQ7kPXDg.js";import"./use-id-5ZNEkNgi.js";import"./use-resolved-styles-api-CZsqKTpj.js";import"./CloseButton-DcEOJMJT.js";import"./SettingsSection-CiRHjmQ6.js";import"./Stack-6mhmhFEl.js";import"./wallpaper-DBrFTLr9.js";import"./SegmentedControl-xsRBb7Ku.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-DpwU5jvX.js";import"./use-uncontrolled-n0Ml9xZi.js";import"./AppearanceSettings-BpWA091q.js";import"./ColorPicker-Ck6ZXLeN.js";import"./Colors-7cWumA21.js";import"./clamp-DTmYCdls.js";import"./Popover-DqYjx-9M.js";import"./OptionalPortal-BPKLB5ZY.js";import"./DirectionProvider-ChCYRQYr.js";import"./Slider-DozWe2TY.js";import"./LauncherSettings-PinPzf5X.js";import"./ScrollArea-CBzsKrP4.js";import"./SimpleGrid-DiwF6zXJ.js";import"./FontSettings-CklARA1k.js";import"./Paper-BoG7r2uc.js";import"./LanguageSettings-Dn0YQDr1.js";import"./ResetSettings-DeHELayP.js";import"./useWindowButtonRegistry-Bcj2JC3j.js";import"./useAnimationDuration-BepWdIOj.js";import"./Animations-67kTFacj.js";import"./Menu-Ch1qyj6L.js";import"./AccordionChevron-D51JPf6N.js";import"./CalendarApp-6MzzNt4Y.js";import"./FilesApp-DzV00n2L.js";import"./useOpenApp-K6m1Sc-Q.js";import"./useAdaptiveDimensions-BWxc8-b8.js";import"./FolderTree-CY1DsslP.js";import"./FileList-DjhsTN0f.js";import"./PdfApp-DKeEkZgM.js";import"./StorybookApp-am9HPWva.js";import"./iconBase-C-XepopT.js";import"./CreateItemApp-DNXNd488.js";import"./IconColorPicker-DCqy7zPs.js";import"./Icons-2dF7msl8.js";import"./Modal-B5lXi-UW.js";const R={id:"folder-notes",name:"Notes",type:"folder",parentId:null,children:["file-welcome","file-todo"],createdAt:new Date,updatedAt:new Date},p={id:"file-welcome",name:"welcome.md",type:"file",parentId:"folder-notes",content:`# Welcome to NotesApp

This is a **markdown** editor powered by [TipTap](https://tiptap.dev).

## Features

- Rich text editing
- *Italic*, **bold**, ~~strikethrough~~
- \`inline code\` and code blocks
- Bullet and ordered lists
- Blockquotes

> Write something great today.
`,mimeType:"text/markdown",url:void 0,createdAt:new Date,updatedAt:new Date},m={id:"file-todo",name:"todo.md",type:"file",parentId:"folder-notes",content:`# TODO

- [ ] Buy groceries
- [ ] Write documentation
- [x] Set up NotesApp
`,mimeType:"text/markdown",url:void 0,createdAt:new Date,updatedAt:new Date},n=[R,p,m],L=({isDirty:d,canUndo:b,canRedo:h,isBold:f,isItalic:u,isStrike:x,isCode:w,isH1:g,isH2:N,isBulletList:j,isOrderedList:I,isBlockquote:k,isCodeBlock:B})=>e.jsxs("div",{className:t.container,children:[e.jsxs("div",{className:t.toolbar,role:"toolbar","aria-label":"Text formatting",children:[e.jsx("button",{className:`${t.toolbarBtn} ${f?t.active:""}`,disabled:!1,title:"Bold","aria-label":"Bold",children:e.jsx(S,{})}),e.jsx("button",{className:`${t.toolbarBtn} ${u?t.active:""}`,disabled:!1,title:"Italic","aria-label":"Italic",children:e.jsx(A,{})}),e.jsx("button",{className:`${t.toolbarBtn} ${x?t.active:""}`,disabled:!1,title:"Strikethrough","aria-label":"Strikethrough",children:e.jsx(V,{})}),e.jsx("button",{className:`${t.toolbarBtn} ${w?t.active:""}`,disabled:!1,title:"Inline code","aria-label":"Inline code",children:e.jsx(D,{})}),e.jsx("span",{className:t.separator}),e.jsx("button",{className:`${t.toolbarBtn} ${g?t.active:""}`,disabled:!1,title:"Heading 1","aria-label":"Heading 1",children:e.jsx(v,{})}),e.jsx("button",{className:`${t.toolbarBtn} ${N?t.active:""}`,disabled:!1,title:"Heading 2","aria-label":"Heading 2",children:e.jsx(y,{})}),e.jsx("span",{className:t.separator}),e.jsx("button",{className:`${t.toolbarBtn} ${j?t.active:""}`,disabled:!1,title:"Bullet list","aria-label":"Bullet list",children:e.jsx($,{})}),e.jsx("button",{className:`${t.toolbarBtn} ${I?t.active:""}`,disabled:!1,title:"Ordered list","aria-label":"Ordered list",children:e.jsx(C,{})}),e.jsx("span",{className:t.separator}),e.jsx("button",{className:`${t.toolbarBtn} ${k?t.active:""}`,disabled:!1,title:"Blockquote","aria-label":"Blockquote",children:e.jsx(O,{})}),e.jsx("button",{className:`${t.toolbarBtn} ${B?t.active:""}`,disabled:!1,title:"Code block","aria-label":"Code block",children:e.jsx(T,{})}),e.jsx("button",{className:t.toolbarBtn,disabled:!1,title:"Horizontal rule","aria-label":"Horizontal rule",children:e.jsx(F,{})}),e.jsx("span",{className:t.separator}),e.jsx("button",{className:t.toolbarBtn,disabled:!b,title:"Undo","aria-label":"Undo",children:e.jsx(H,{})}),e.jsx("button",{className:t.toolbarBtn,disabled:!h,title:"Redo","aria-label":"Redo",children:e.jsx(E,{})}),d&&e.jsx("span",{className:t.dirtyIndicator,title:"Unsaved changes",children:e.jsx(W,{})})]}),e.jsx("div",{className:t.editorContent,style:{display:"flex",alignItems:"center",justifyContent:"center",color:"var(--mantine-color-dimmed)",fontSize:14},children:"Use the controls in the Controls panel to toggle toolbar states"})]}),nt={title:"Apps/NotesApp",parameters:{layout:"fullscreen"},argTypes:{isDirty:{control:"boolean",description:"Shows the FcSynchronize unsaved indicator"},canUndo:{control:"boolean",description:"Enable Undo button"},canRedo:{control:"boolean",description:"Enable Redo button"},isBold:{control:"boolean",description:"Bold text active state"},isItalic:{control:"boolean",description:"Italic text active state"},isStrike:{control:"boolean",description:"Strikethrough text active state"},isCode:{control:"boolean",description:"Inline code active state"},isH1:{control:"boolean",description:"Heading 1 active state"},isH2:{control:"boolean",description:"Heading 2 active state"},isBulletList:{control:"boolean",description:"Bullet list active state"},isOrderedList:{control:"boolean",description:"Ordered list active state"},isBlockquote:{control:"boolean",description:"Blockquote active state"},isCodeBlock:{control:"boolean",description:"Code block active state"}},args:{isDirty:!1,canUndo:!1,canRedo:!1,isBold:!1,isItalic:!1,isStrike:!1,isCode:!1,isH1:!1,isH2:!1,isBulletList:!1,isOrderedList:!1,isBlockquote:!1,isCodeBlock:!1}},a={render:()=>e.jsx(i,{win:o({id:"win-notes",title:"Notepad",content:"notepad",fcIcon:"FcEditImage",width:700,height:520,x:0,y:0}),fsNodes:n})},s={render:()=>e.jsx(i,{win:o({id:"win-notes-content",title:"Notepad",content:"notepad",fcIcon:"FcEditImage",width:700,height:520,x:0,y:0,contentData:{initialContent:p.content??""}}),fsNodes:n})},r={render:()=>e.jsx(i,{win:o({id:"win-notes-small",title:"Notepad",content:"notepad",fcIcon:"FcEditImage",width:360,height:280,x:0,y:0,contentData:{initialContent:m.content??""}}),fsNodes:n})},l={render:()=>e.jsx(i,{win:o({id:"win-notes-open",title:"welcome.md",content:"notepad",fcIcon:"FcEditImage",width:700,height:520,x:0,y:0,contentData:{fileId:"file-welcome",initialName:"welcome.md",initialContent:p.content??""}}),fsNodes:n})},c={render:d=>e.jsx(i,{win:o({id:"win-notes-controls",title:"NotesApp - Toolbar States",content:"notepad",fcIcon:"FcEditImage",width:700,height:520,x:0,y:0}),fsNodes:n,children:e.jsx(L,{...d})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const at=["Default","WithContent","SmallWindow","WithOpenFile","ToolbarStates"];export{a as Default,r as SmallWindow,c as ToolbarStates,s as WithContent,l as WithOpenFile,at as __namedExportsOrder,nt as default};

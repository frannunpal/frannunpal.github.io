import{n as e}from"./chunk-zsgVPwQN.js";import{Wt as t}from"./iframe-D5qGmMgA.js";import{n,t as r}from"./DirtyIndicator-BPW4E6TI.js";import{n as i,t as a}from"./VscIcon-BPEH2aHZ.js";import{n as o,t as s}from"./makeWindow-BxXvFDfP.js";import{n as c,t as l}from"./AppWithPickerOpen-DTH0Ar01.js";import{n as u,t as d}from"./NotesApp.module-CcxYfep3.js";var f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{s(),c(),i(),n(),u(),f=t(),p={id:`folder-notes`,name:`Notes`,type:`folder`,parentId:null,children:[`file-welcome`,`file-todo`],createdAt:new Date,updatedAt:new Date},m={id:`file-welcome`,name:`welcome.md`,type:`file`,parentId:`folder-notes`,content:`# Welcome to NotesApp

This is a **markdown** editor powered by [TipTap](https://tiptap.dev).

## Features

- Rich text editing
- *Italic*, **bold**, ~~strikethrough~~
- \`inline code\` and code blocks
- Bullet and ordered lists
- Blockquotes

> Write something great today.
`,mimeType:`text/markdown`,url:void 0,createdAt:new Date,updatedAt:new Date},h={id:`file-todo`,name:`todo.md`,type:`file`,parentId:`folder-notes`,content:`# TODO

- [ ] Buy groceries
- [ ] Write documentation
- [x] Set up NotesApp
`,mimeType:`text/markdown`,url:void 0,createdAt:new Date,updatedAt:new Date},g=[p,m,h],_=({isDirty:e,canUndo:t,canRedo:n,isBold:i,isItalic:o,isStrike:s,isCode:c,isH1:l,isH2:u,isBulletList:p,isOrderedList:m,isBlockquote:h,isCodeBlock:g})=>(0,f.jsxs)(`div`,{className:d.container,children:[(0,f.jsxs)(`div`,{className:d.toolbar,role:`toolbar`,"aria-label":`Text formatting`,children:[(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${i?d.active:``}`,disabled:!1,title:`Bold`,"aria-label":`Bold`,children:(0,f.jsx)(a,{name:`VscBold`})}),(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${o?d.active:``}`,disabled:!1,title:`Italic`,"aria-label":`Italic`,children:(0,f.jsx)(a,{name:`VscItalic`})}),(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${s?d.active:``}`,disabled:!1,title:`Strikethrough`,"aria-label":`Strikethrough`,children:(0,f.jsx)(`s`,{children:`S`})}),(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${c?d.active:``}`,disabled:!1,title:`Inline code`,"aria-label":`Inline code`,children:(0,f.jsx)(a,{name:`VscCode`})}),(0,f.jsx)(`span`,{className:d.separator}),(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${l?d.active:``}`,disabled:!1,title:`Heading 1`,"aria-label":`Heading 1`,children:(0,f.jsx)(`strong`,{children:`H1`})}),(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${u?d.active:``}`,disabled:!1,title:`Heading 2`,"aria-label":`Heading 2`,children:(0,f.jsx)(`strong`,{children:`H2`})}),(0,f.jsx)(`span`,{className:d.separator}),(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${p?d.active:``}`,disabled:!1,title:`Bullet list`,"aria-label":`Bullet list`,children:(0,f.jsx)(a,{name:`VscListUnordered`})}),(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${m?d.active:``}`,disabled:!1,title:`Ordered list`,"aria-label":`Ordered list`,children:(0,f.jsx)(a,{name:`VscListOrdered`})}),(0,f.jsx)(`span`,{className:d.separator}),(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${h?d.active:``}`,disabled:!1,title:`Blockquote`,"aria-label":`Blockquote`,children:(0,f.jsx)(a,{name:`VscQuote`})}),(0,f.jsx)(`button`,{className:`${d.toolbarBtn} ${g?d.active:``}`,disabled:!1,title:`Code block`,"aria-label":`Code block`,children:(0,f.jsx)(a,{name:`VscTerminal`})}),(0,f.jsx)(`button`,{className:d.toolbarBtn,disabled:!1,title:`Horizontal rule`,"aria-label":`Horizontal rule`,children:(0,f.jsx)(a,{name:`VscHorizontalRule`})}),(0,f.jsx)(`span`,{className:d.separator}),(0,f.jsx)(`button`,{className:d.toolbarBtn,disabled:!t,title:`Undo`,"aria-label":`Undo`,children:(0,f.jsx)(a,{name:`VscDiscard`})}),(0,f.jsx)(`button`,{className:d.toolbarBtn,disabled:!n,title:`Redo`,"aria-label":`Redo`,children:(0,f.jsx)(a,{name:`VscRedo`})}),e&&(0,f.jsx)(`span`,{className:d.dirtyIndicator,title:`Unsaved changes`,children:(0,f.jsx)(r,{})})]}),(0,f.jsx)(`div`,{className:d.editorContent,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--mantine-color-dimmed)`,fontSize:14},children:`Use the controls in the Controls panel to toggle toolbar states`})]}),v={title:`Apps/NotesApp`,parameters:{layout:`fullscreen`},argTypes:{isDirty:{control:`boolean`,description:`Shows the FcSynchronize unsaved indicator`},canUndo:{control:`boolean`,description:`Enable Undo button`},canRedo:{control:`boolean`,description:`Enable Redo button`},isBold:{control:`boolean`,description:`Bold text active state`},isItalic:{control:`boolean`,description:`Italic text active state`},isStrike:{control:`boolean`,description:`Strikethrough text active state`},isCode:{control:`boolean`,description:`Inline code active state`},isH1:{control:`boolean`,description:`Heading 1 active state`},isH2:{control:`boolean`,description:`Heading 2 active state`},isBulletList:{control:`boolean`,description:`Bullet list active state`},isOrderedList:{control:`boolean`,description:`Ordered list active state`},isBlockquote:{control:`boolean`,description:`Blockquote active state`},isCodeBlock:{control:`boolean`,description:`Code block active state`}},args:{isDirty:!1,canUndo:!1,canRedo:!1,isBold:!1,isItalic:!1,isStrike:!1,isCode:!1,isH1:!1,isH2:!1,isBulletList:!1,isOrderedList:!1,isBlockquote:!1,isCodeBlock:!1}},y={render:()=>(0,f.jsx)(l,{win:o({id:`win-notes`,title:`Notepad`,content:`notepad`,fcIcon:`FcEditImage`,width:700,height:520,x:0,y:0}),fsNodes:g})},b={render:()=>(0,f.jsx)(l,{win:o({id:`win-notes-content`,title:`Notepad`,content:`notepad`,fcIcon:`FcEditImage`,width:700,height:520,x:0,y:0,contentData:{initialContent:m.content??``}}),fsNodes:g})},x={render:()=>(0,f.jsx)(l,{win:o({id:`win-notes-small`,title:`Notepad`,content:`notepad`,fcIcon:`FcEditImage`,width:360,height:280,x:0,y:0,contentData:{initialContent:h.content??``}}),fsNodes:g})},S={render:()=>(0,f.jsx)(l,{win:o({id:`win-notes-open`,title:`welcome.md`,content:`notepad`,fcIcon:`FcEditImage`,width:700,height:520,x:0,y:0,contentData:{fileId:`file-welcome`,initialName:`welcome.md`,initialContent:m.content??``}}),fsNodes:g})},C={render:e=>(0,f.jsx)(l,{win:o({id:`win-notes-controls`,title:`NotesApp - Toolbar States`,content:`notepad`,fcIcon:`FcEditImage`,width:700,height:520,x:0,y:0}),fsNodes:g,children:(0,f.jsx)(_,{...e})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithContent`,`SmallWindow`,`WithOpenFile`,`ToolbarStates`]}))();export{y as Default,x as SmallWindow,C as ToolbarStates,b as WithContent,S as WithOpenFile,w as __namedExportsOrder,v as default};
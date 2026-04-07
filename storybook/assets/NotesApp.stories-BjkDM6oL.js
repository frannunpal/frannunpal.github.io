import{n as e}from"./chunk-zsgVPwQN.js";import{i as t,r as n}from"./NotesApp-3dT3XIKA.js";import{Bn as r,lt as i,t as a,ut as o}from"./iframe-CsmZnCZ1.js";import{c as s,n as c,t as l}from"./Storybook-DkFkcTld.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{l(),a(),t(),u=r(),d={id:`folder-notes`,name:`Notes`,type:`folder`,parentId:null,children:[`file-welcome`,`file-todo`],createdAt:new Date,updatedAt:new Date},f={id:`file-welcome`,name:`welcome.md`,type:`file`,parentId:`folder-notes`,content:`# Welcome to NotesApp

This is a **markdown** editor powered by [TipTap](https://tiptap.dev).

## Features

- Rich text editing
- *Italic*, **bold**, ~~strikethrough~~
- \`inline code\` and code blocks
- Bullet and ordered lists
- Blockquotes

> Write something great today.
`,mimeType:`text/markdown`,url:void 0,createdAt:new Date,updatedAt:new Date},p={id:`file-todo`,name:`todo.md`,type:`file`,parentId:`folder-notes`,content:`# TODO

- [ ] Buy groceries
- [ ] Write documentation
- [x] Set up NotesApp
`,mimeType:`text/markdown`,url:void 0,createdAt:new Date,updatedAt:new Date},m=[d,f,p],h=({isDirty:e,canUndo:t,canRedo:r,isBold:a,isItalic:s,isStrike:c,isCode:l,isH1:d,isH2:f,isBulletList:p,isOrderedList:m,isBlockquote:h,isCodeBlock:g})=>(0,u.jsxs)(`div`,{className:n.container,children:[(0,u.jsxs)(`div`,{className:n.toolbar,role:`toolbar`,"aria-label":`Text formatting`,children:[(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${a?n.active:``}`,disabled:!1,title:`Bold`,"aria-label":`Bold`,children:(0,u.jsx)(o,{name:`VscBold`})}),(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${s?n.active:``}`,disabled:!1,title:`Italic`,"aria-label":`Italic`,children:(0,u.jsx)(o,{name:`VscItalic`})}),(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${c?n.active:``}`,disabled:!1,title:`Strikethrough`,"aria-label":`Strikethrough`,children:(0,u.jsx)(`s`,{children:`S`})}),(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${l?n.active:``}`,disabled:!1,title:`Inline code`,"aria-label":`Inline code`,children:(0,u.jsx)(o,{name:`VscCode`})}),(0,u.jsx)(`span`,{className:n.separator}),(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${d?n.active:``}`,disabled:!1,title:`Heading 1`,"aria-label":`Heading 1`,children:(0,u.jsx)(`strong`,{children:`H1`})}),(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${f?n.active:``}`,disabled:!1,title:`Heading 2`,"aria-label":`Heading 2`,children:(0,u.jsx)(`strong`,{children:`H2`})}),(0,u.jsx)(`span`,{className:n.separator}),(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${p?n.active:``}`,disabled:!1,title:`Bullet list`,"aria-label":`Bullet list`,children:(0,u.jsx)(o,{name:`VscListUnordered`})}),(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${m?n.active:``}`,disabled:!1,title:`Ordered list`,"aria-label":`Ordered list`,children:(0,u.jsx)(o,{name:`VscListOrdered`})}),(0,u.jsx)(`span`,{className:n.separator}),(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${h?n.active:``}`,disabled:!1,title:`Blockquote`,"aria-label":`Blockquote`,children:(0,u.jsx)(o,{name:`VscQuote`})}),(0,u.jsx)(`button`,{className:`${n.toolbarBtn} ${g?n.active:``}`,disabled:!1,title:`Code block`,"aria-label":`Code block`,children:(0,u.jsx)(o,{name:`VscTerminal`})}),(0,u.jsx)(`button`,{className:n.toolbarBtn,disabled:!1,title:`Horizontal rule`,"aria-label":`Horizontal rule`,children:(0,u.jsx)(o,{name:`VscHorizontalRule`})}),(0,u.jsx)(`span`,{className:n.separator}),(0,u.jsx)(`button`,{className:n.toolbarBtn,disabled:!t,title:`Undo`,"aria-label":`Undo`,children:(0,u.jsx)(o,{name:`VscDiscard`})}),(0,u.jsx)(`button`,{className:n.toolbarBtn,disabled:!r,title:`Redo`,"aria-label":`Redo`,children:(0,u.jsx)(o,{name:`VscRedo`})}),e&&(0,u.jsx)(`span`,{className:n.dirtyIndicator,title:`Unsaved changes`,children:(0,u.jsx)(i,{})})]}),(0,u.jsx)(`div`,{className:n.editorContent,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--mantine-color-dimmed)`,fontSize:14},children:`Use the controls in the Controls panel to toggle toolbar states`})]}),g={title:`Apps/NotesApp`,parameters:{layout:`fullscreen`},argTypes:{isDirty:{control:`boolean`,description:`Shows the FcSynchronize unsaved indicator`},canUndo:{control:`boolean`,description:`Enable Undo button`},canRedo:{control:`boolean`,description:`Enable Redo button`},isBold:{control:`boolean`,description:`Bold text active state`},isItalic:{control:`boolean`,description:`Italic text active state`},isStrike:{control:`boolean`,description:`Strikethrough text active state`},isCode:{control:`boolean`,description:`Inline code active state`},isH1:{control:`boolean`,description:`Heading 1 active state`},isH2:{control:`boolean`,description:`Heading 2 active state`},isBulletList:{control:`boolean`,description:`Bullet list active state`},isOrderedList:{control:`boolean`,description:`Ordered list active state`},isBlockquote:{control:`boolean`,description:`Blockquote active state`},isCodeBlock:{control:`boolean`,description:`Code block active state`}},args:{isDirty:!1,canUndo:!1,canRedo:!1,isBold:!1,isItalic:!1,isStrike:!1,isCode:!1,isH1:!1,isH2:!1,isBulletList:!1,isOrderedList:!1,isBlockquote:!1,isCodeBlock:!1}},_={render:()=>(0,u.jsx)(c,{win:s({id:`win-notes`,title:`Notepad`,content:`notepad`,fcIcon:`FcEditImage`,width:700,height:520,x:0,y:0}),fsNodes:m})},v={render:()=>(0,u.jsx)(c,{win:s({id:`win-notes-content`,title:`Notepad`,content:`notepad`,fcIcon:`FcEditImage`,width:700,height:520,x:0,y:0,contentData:{initialContent:f.content??``}}),fsNodes:m})},y={render:()=>(0,u.jsx)(c,{win:s({id:`win-notes-small`,title:`Notepad`,content:`notepad`,fcIcon:`FcEditImage`,width:360,height:280,x:0,y:0,contentData:{initialContent:p.content??``}}),fsNodes:m})},b={render:()=>(0,u.jsx)(c,{win:s({id:`win-notes-open`,title:`welcome.md`,content:`notepad`,fcIcon:`FcEditImage`,width:700,height:520,x:0,y:0,contentData:{fileId:`file-welcome`,initialName:`welcome.md`,initialContent:f.content??``}}),fsNodes:m})},x={render:e=>(0,u.jsx)(c,{win:s({id:`win-notes-controls`,title:`NotesApp - Toolbar States`,content:`notepad`,fcIcon:`FcEditImage`,width:700,height:520,x:0,y:0}),fsNodes:m,children:(0,u.jsx)(h,{...e})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithContent`,`SmallWindow`,`WithOpenFile`,`ToolbarStates`]}))();export{_ as Default,y as SmallWindow,x as ToolbarStates,v as WithContent,b as WithOpenFile,S as __namedExportsOrder,g as default};
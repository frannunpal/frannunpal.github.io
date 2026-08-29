import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-DEAHbL4P.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{l as i}from"./desktopStore-DUgjMYb3.js";import{In as a,Zt as o,t as s}from"./iframe-ChFPAf1w.js";import c,{t as l}from"./CalendarApp-BTwxXw2f.js";import{t as u,u as d}from"./Storybook-DAZTMkui.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{s(),l(),f=t(n(),1),u(),p=r(),m=({windows:e})=>((0,f.useEffect)(()=>{i.setState({windows:e})},[e]),null),h=()=>(0,p.jsx)(p.Fragment,{children:i(e=>e.windows).map(e=>(0,p.jsx)(o,{window:e},e.id))}),g={title:`Common components/Window`,component:o,decorators:[(e,t)=>{let n=Array.isArray(t.parameters.windows)?t.parameters.windows:[t.args.window],r=Array.isArray(t.parameters.windows);return(0,p.jsxs)(a,{children:[(0,p.jsx)(m,{windows:n}),(0,p.jsx)(`div`,{style:{position:`relative`,width:`100vw`,height:`100vh`,background:`var(--mantine-color-body)`},children:r?(0,p.jsx)(h,{}):(0,p.jsx)(e,{})})]})}],args:{window:d({id:`win-story`,title:`My Window`,icon:`📝`,content:`AppEmptyState`,fcIcon:`FcEditImage`,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})}},_={args:{window:{id:`win-story`,title:`My Window`,content:`notepad`,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200,isOpen:!0,state:`normal`,zIndex:1,fcIcon:`FcEditImage`}}},v={args:{window:d({state:`maximized`,title:`A very long window title that should not be truncated in the title bar since it is maximized`,fcIcon:`FcEditImage`})}},y={args:{window:{id:`win-1`,title:`A very long window title that should be truncated in the title bar since the window it's not maximized`,content:`notepad`,x:100,y:100,width:200,height:200,minWidth:200,minHeight:150,isOpen:!0,state:`normal`,zIndex:1}}},b={args:{window:d({canMaximize:!1})}},x={args:{window:{id:`win-always-on-top`,title:`This window has the always on top, prop`,content:`notepad`,x:200,y:150,width:400,height:300,minWidth:350,minHeight:250,isOpen:!0,state:`normal`,zIndex:10001,fcIcon:`FcNewFolder`,alwaysOnTop:!0,canMaximize:!1}},parameters:{windows:[d({id:`win-behind`,title:`Background Window`,zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),d({id:`win-always-on-top`,title:`This window has the always on top, prop`,icon:`📁`,fcIcon:`FcNewFolder`,alwaysOnTop:!0,canMaximize:!1,width:400,height:300,minWidth:350,minHeight:250,zIndex:10001,x:200,y:150})]}},S={args:{window:d({id:`win-unfocused`,title:`Unfocused Window`,icon:`📝`,zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})},parameters:{windows:[d({id:`win-unfocused`,title:`Unfocused Window`,icon:`📝`,zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),d({id:`win-focused`,title:`Focused Window`,icon:`📝`,zIndex:2,x:120,y:120,width:600,height:400,minWidth:300,minHeight:200})]}},C={args:{window:d({title:`App with Menu`,fcIcon:`FcEditImage`}),menuBar:[{type:`menu`,label:`File`,icon:`FcFile`,items:[{type:`item`,label:`New`,icon:`FcPlus`,onClick:()=>{}},{type:`item`,label:`Open`,onClick:()=>{}},{type:`divider`},{type:`item`,label:`Save`,onClick:()=>{}}]},{type:`menu`,label:`Edit`,items:[{type:`item`,label:`Undo`,onClick:()=>{},disabled:!0},{type:`item`,label:`Redo`,onClick:()=>{}}]},{type:`switch`,label:`Word wrap`,checked:!1,onChange:()=>{}}]}},w={args:{window:d({title:`All menu types`,fcIcon:`FcSettings`,width:800}),menuBar:[{type:`menu`,label:`File`,items:[{type:`item`,label:`Close`,onClick:()=>{}}]},{type:`combobox`,label:`View`,options:[`List`,`Grid`,`Details`],value:`List`,onChange:()=>{}},{type:`switch`,label:`Show hidden`,checked:!1,onChange:()=>{}},{type:`slider`,label:`Zoom`,min:50,max:200,value:100,onChange:()=>{}},{type:`text-input`,placeholder:`Search...`,value:``,onChange:()=>{}}]}},T={args:{window:d({title:`Calendar`,content:`calendar`,icon:`📅`,fcIcon:`FcCalendar`,canMaximize:!1,width:340,height:380,minWidth:320,minHeight:360})},render:e=>(0,p.jsx)(o,{...e,children:(0,p.jsx)(c,{})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    window: {
      id: 'win-story',
      title: 'My Window',
      content: 'notepad',
      x: 60,
      y: 60,
      width: 600,
      height: 400,
      minWidth: 300,
      minHeight: 200,
      isOpen: true,
      state: 'normal',
      zIndex: 1,
      fcIcon: 'FcEditImage'
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      state: 'maximized',
      title: 'A very long window title that should not be truncated in the title bar since it is maximized',
      fcIcon: 'FcEditImage'
    })
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    window: {
      id: 'win-1',
      title: "A very long window title that should be truncated in the title bar since the window it's not maximized",
      content: 'notepad',
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      minWidth: 200,
      minHeight: 150,
      isOpen: true,
      state: 'normal',
      zIndex: 1
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      canMaximize: false
    })
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    window: {
      id: 'win-always-on-top',
      title: 'This window has the always on top, prop',
      content: 'notepad',
      x: 200,
      y: 150,
      width: 400,
      height: 300,
      minWidth: 350,
      minHeight: 250,
      isOpen: true,
      state: 'normal',
      zIndex: 10001,
      fcIcon: 'FcNewFolder',
      alwaysOnTop: true,
      canMaximize: false
    }
  },
  parameters: {
    windows: [makeWindow({
      id: 'win-behind',
      title: 'Background Window',
      zIndex: 1,
      x: 60,
      y: 60,
      width: 600,
      height: 400,
      minWidth: 300,
      minHeight: 200
    }), makeWindow({
      id: 'win-always-on-top',
      title: 'This window has the always on top, prop',
      icon: '📁',
      fcIcon: 'FcNewFolder',
      alwaysOnTop: true,
      canMaximize: false,
      width: 400,
      height: 300,
      minWidth: 350,
      minHeight: 250,
      zIndex: 10001,
      x: 200,
      y: 150
    })]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      id: 'win-unfocused',
      title: 'Unfocused Window',
      icon: '📝',
      zIndex: 1,
      x: 60,
      y: 60,
      width: 600,
      height: 400,
      minWidth: 300,
      minHeight: 200
    })
  },
  parameters: {
    windows: [makeWindow({
      id: 'win-unfocused',
      title: 'Unfocused Window',
      icon: '📝',
      zIndex: 1,
      x: 60,
      y: 60,
      width: 600,
      height: 400,
      minWidth: 300,
      minHeight: 200
    }), makeWindow({
      id: 'win-focused',
      title: 'Focused Window',
      icon: '📝',
      zIndex: 2,
      x: 120,
      y: 120,
      width: 600,
      height: 400,
      minWidth: 300,
      minHeight: 200
    })]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      title: 'App with Menu',
      fcIcon: 'FcEditImage'
    }),
    menuBar: [{
      type: 'menu',
      label: 'File',
      icon: 'FcFile',
      items: [{
        type: 'item',
        label: 'New',
        icon: 'FcPlus',
        onClick: () => {}
      }, {
        type: 'item',
        label: 'Open',
        onClick: () => {}
      }, {
        type: 'divider'
      }, {
        type: 'item',
        label: 'Save',
        onClick: () => {}
      }]
    }, {
      type: 'menu',
      label: 'Edit',
      items: [{
        type: 'item',
        label: 'Undo',
        onClick: () => {},
        disabled: true
      }, {
        type: 'item',
        label: 'Redo',
        onClick: () => {}
      }]
    }, {
      type: 'switch',
      label: 'Word wrap',
      checked: false,
      onChange: () => {}
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      title: 'All menu types',
      fcIcon: 'FcSettings',
      width: 800
    }),
    menuBar: [{
      type: 'menu',
      label: 'File',
      items: [{
        type: 'item',
        label: 'Close',
        onClick: () => {}
      }]
    }, {
      type: 'combobox',
      label: 'View',
      options: ['List', 'Grid', 'Details'],
      value: 'List',
      onChange: () => {}
    }, {
      type: 'switch',
      label: 'Show hidden',
      checked: false,
      onChange: () => {}
    }, {
      type: 'slider',
      label: 'Zoom',
      min: 50,
      max: 200,
      value: 100,
      onChange: () => {}
    }, {
      type: 'text-input',
      placeholder: 'Search...',
      value: '',
      onChange: () => {}
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      title: 'Calendar',
      content: 'calendar',
      icon: '📅',
      fcIcon: 'FcCalendar',
      canMaximize: false,
      width: 340,
      height: 380,
      minWidth: 320,
      minHeight: 360
    })
  },
  render: args => <Window {...args}>
      <CalendarAppComponent />
    </Window>
}`,...T.parameters?.docs?.source}}},E=[`Normal`,`Maximized`,`NarrowTitle`,`NoMaximizeButton`,`AlwaysOnTop`,`Unfocused`,`WithMenuBar`,`WithMenuBarAllTypes`,`CalendarWindow`]}))();export{x as AlwaysOnTop,T as CalendarWindow,v as Maximized,y as NarrowTitle,b as NoMaximizeButton,_ as Normal,S as Unfocused,C as WithMenuBar,w as WithMenuBarAllTypes,E as __namedExportsOrder,g as default};
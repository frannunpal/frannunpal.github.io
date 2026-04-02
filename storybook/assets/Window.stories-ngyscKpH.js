import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Wt as n,en as r,i,n as a}from"./iframe-D5qGmMgA.js";import{r as o,t as s}from"./CalendarApp-CWQYdfB8.js";import{n as c,t as l}from"./useWindowButtonRegistry-BXYz_0qZ.js";import{n as u,t as d}from"./Window-B_TKcr4T.js";import{n as f,t as p}from"./makeWindow-BxXvFDfP.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{u(),o(),a(),c(),m=t(r(),1),p(),h=n(),g=({windows:e})=>((0,m.useEffect)(()=>{i.setState({windows:e})},[e]),null),_=()=>(0,h.jsx)(h.Fragment,{children:i(e=>e.windows).map(e=>(0,h.jsx)(d,{window:e},e.id))}),v={title:`Common components/Window`,component:d,decorators:[(e,t)=>{let n=Array.isArray(t.parameters.windows)?t.parameters.windows:[t.args.window],r=Array.isArray(t.parameters.windows);return(0,h.jsxs)(l,{children:[(0,h.jsx)(g,{windows:n}),(0,h.jsx)(`div`,{style:{position:`relative`,width:`100vw`,height:`100vh`,background:`var(--mantine-color-body)`},children:r?(0,h.jsx)(_,{}):(0,h.jsx)(e,{})})]})}],args:{window:f({id:`win-story`,title:`My Window`,icon:`📝`,content:`AppEmptyState`,fcIcon:`FcEditImage`,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})}},y={args:{window:{id:`win-story`,title:`My Window`,content:`notepad`,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200,isOpen:!0,state:`normal`,zIndex:1,fcIcon:`FcEditImage`}}},b={args:{window:f({state:`maximized`,title:`A very long window title that should not be truncated in the title bar since it is maximized`,fcIcon:`FcEditImage`})}},x={args:{window:{id:`win-1`,title:`A very long window title that should be truncated in the title bar since the window it's not maximized`,content:`notepad`,x:100,y:100,width:200,height:200,minWidth:200,minHeight:150,isOpen:!0,state:`normal`,zIndex:1}}},S={args:{window:f({canMaximize:!1})}},C={args:{window:{id:`win-always-on-top`,title:`This window has the always on top, prop`,content:`notepad`,x:200,y:150,width:400,height:300,minWidth:350,minHeight:250,isOpen:!0,state:`normal`,zIndex:10001,fcIcon:`FcNewFolder`,alwaysOnTop:!0,canMaximize:!1}},parameters:{windows:[f({id:`win-behind`,title:`Background Window`,zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),f({id:`win-always-on-top`,title:`This window has the always on top, prop`,icon:`📁`,fcIcon:`FcNewFolder`,alwaysOnTop:!0,canMaximize:!1,width:400,height:300,minWidth:350,minHeight:250,zIndex:10001,x:200,y:150})]}},w={args:{window:f({id:`win-unfocused`,title:`Unfocused Window`,icon:`📝`,zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})},parameters:{windows:[f({id:`win-unfocused`,title:`Unfocused Window`,icon:`📝`,zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),f({id:`win-focused`,title:`Focused Window`,icon:`📝`,zIndex:2,x:120,y:120,width:600,height:400,minWidth:300,minHeight:200})]}},T={args:{window:f({title:`App with Menu`,fcIcon:`FcEditImage`}),menuBar:[{type:`menu`,label:`File`,icon:`FcFile`,items:[{type:`item`,label:`New`,icon:`FcPlus`,onClick:()=>{}},{type:`item`,label:`Open`,onClick:()=>{}},{type:`divider`},{type:`item`,label:`Save`,onClick:()=>{}}]},{type:`menu`,label:`Edit`,items:[{type:`item`,label:`Undo`,onClick:()=>{},disabled:!0},{type:`item`,label:`Redo`,onClick:()=>{}}]},{type:`switch`,label:`Word wrap`,checked:!1,onChange:()=>{}}]}},E={args:{window:f({title:`All menu types`,fcIcon:`FcSettings`,width:800}),menuBar:[{type:`menu`,label:`File`,items:[{type:`item`,label:`Close`,onClick:()=>{}}]},{type:`combobox`,label:`View`,options:[`List`,`Grid`,`Details`],value:`List`,onChange:()=>{}},{type:`switch`,label:`Show hidden`,checked:!1,onChange:()=>{}},{type:`slider`,label:`Zoom`,min:50,max:200,value:100,onChange:()=>{}},{type:`text-input`,placeholder:`Search...`,value:``,onChange:()=>{}}]}},D={args:{window:f({title:`Calendar`,content:`calendar`,icon:`📅`,fcIcon:`FcCalendar`,canMaximize:!1,width:340,height:380,minWidth:320,minHeight:360})},render:e=>(0,h.jsx)(d,{...e,children:(0,h.jsx)(s,{})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      state: 'maximized',
      title: 'A very long window title that should not be truncated in the title bar since it is maximized',
      fcIcon: 'FcEditImage'
    })
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      canMaximize: false
    })
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
      <CalendarApp />
    </Window>
}`,...D.parameters?.docs?.source}}},O=[`Normal`,`Maximized`,`NarrowTitle`,`NoMaximizeButton`,`AlwaysOnTop`,`Unfocused`,`WithMenuBar`,`WithMenuBarAllTypes`,`CalendarWindow`]}))();export{C as AlwaysOnTop,D as CalendarWindow,b as Maximized,x as NarrowTitle,S as NoMaximizeButton,y as Normal,w as Unfocused,T as WithMenuBar,E as WithMenuBarAllTypes,O as __namedExportsOrder,v as default};
import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./CalendarApp-DedaHve-.js";import{Hn as r,Kt as i,Qn as a,it as o,jt as s,t as c}from"./iframe-7KWrXVss.js";import{c as l,t as u}from"./Storybook-ebwJHVJj.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{c(),d=t(a(),1),u(),f=r(),p=({windows:e})=>((0,d.useEffect)(()=>{s.setState({windows:e})},[e]),null),m=()=>(0,f.jsx)(f.Fragment,{children:s(e=>e.windows).map(e=>(0,f.jsx)(o,{window:e},e.id))}),h={title:`Common components/Window`,component:o,decorators:[(e,t)=>{let n=Array.isArray(t.parameters.windows)?t.parameters.windows:[t.args.window],r=Array.isArray(t.parameters.windows);return(0,f.jsxs)(i,{children:[(0,f.jsx)(p,{windows:n}),(0,f.jsx)(`div`,{style:{position:`relative`,width:`100vw`,height:`100vh`,background:`var(--mantine-color-body)`},children:r?(0,f.jsx)(m,{}):(0,f.jsx)(e,{})})]})}],args:{window:l({id:`win-story`,title:`My Window`,icon:`📝`,content:`AppEmptyState`,fcIcon:`FcEditImage`,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})}},g={args:{window:{id:`win-story`,title:`My Window`,content:`notepad`,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200,isOpen:!0,state:`normal`,zIndex:1,fcIcon:`FcEditImage`}}},_={args:{window:l({state:`maximized`,title:`A very long window title that should not be truncated in the title bar since it is maximized`,fcIcon:`FcEditImage`})}},v={args:{window:{id:`win-1`,title:`A very long window title that should be truncated in the title bar since the window it's not maximized`,content:`notepad`,x:100,y:100,width:200,height:200,minWidth:200,minHeight:150,isOpen:!0,state:`normal`,zIndex:1}}},y={args:{window:l({canMaximize:!1})}},b={args:{window:{id:`win-always-on-top`,title:`This window has the always on top, prop`,content:`notepad`,x:200,y:150,width:400,height:300,minWidth:350,minHeight:250,isOpen:!0,state:`normal`,zIndex:10001,fcIcon:`FcNewFolder`,alwaysOnTop:!0,canMaximize:!1}},parameters:{windows:[l({id:`win-behind`,title:`Background Window`,zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),l({id:`win-always-on-top`,title:`This window has the always on top, prop`,icon:`📁`,fcIcon:`FcNewFolder`,alwaysOnTop:!0,canMaximize:!1,width:400,height:300,minWidth:350,minHeight:250,zIndex:10001,x:200,y:150})]}},x={args:{window:l({id:`win-unfocused`,title:`Unfocused Window`,icon:`📝`,zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})},parameters:{windows:[l({id:`win-unfocused`,title:`Unfocused Window`,icon:`📝`,zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),l({id:`win-focused`,title:`Focused Window`,icon:`📝`,zIndex:2,x:120,y:120,width:600,height:400,minWidth:300,minHeight:200})]}},S={args:{window:l({title:`App with Menu`,fcIcon:`FcEditImage`}),menuBar:[{type:`menu`,label:`File`,icon:`FcFile`,items:[{type:`item`,label:`New`,icon:`FcPlus`,onClick:()=>{}},{type:`item`,label:`Open`,onClick:()=>{}},{type:`divider`},{type:`item`,label:`Save`,onClick:()=>{}}]},{type:`menu`,label:`Edit`,items:[{type:`item`,label:`Undo`,onClick:()=>{},disabled:!0},{type:`item`,label:`Redo`,onClick:()=>{}}]},{type:`switch`,label:`Word wrap`,checked:!1,onChange:()=>{}}]}},C={args:{window:l({title:`All menu types`,fcIcon:`FcSettings`,width:800}),menuBar:[{type:`menu`,label:`File`,items:[{type:`item`,label:`Close`,onClick:()=>{}}]},{type:`combobox`,label:`View`,options:[`List`,`Grid`,`Details`],value:`List`,onChange:()=>{}},{type:`switch`,label:`Show hidden`,checked:!1,onChange:()=>{}},{type:`slider`,label:`Zoom`,min:50,max:200,value:100,onChange:()=>{}},{type:`text-input`,placeholder:`Search...`,value:``,onChange:()=>{}}]}},w={args:{window:l({title:`Calendar`,content:`calendar`,icon:`📅`,fcIcon:`FcCalendar`,canMaximize:!1,width:340,height:380,minWidth:320,minHeight:360})},render:e=>(0,f.jsx)(o,{...e,children:(0,f.jsx)(n,{})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      state: 'maximized',
      title: 'A very long window title that should not be truncated in the title bar since it is maximized',
      fcIcon: 'FcEditImage'
    })
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      canMaximize: false
    })
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Normal`,`Maximized`,`NarrowTitle`,`NoMaximizeButton`,`AlwaysOnTop`,`Unfocused`,`WithMenuBar`,`WithMenuBarAllTypes`,`CalendarWindow`]}))();export{b as AlwaysOnTop,w as CalendarWindow,_ as Maximized,v as NarrowTitle,y as NoMaximizeButton,g as Normal,x as Unfocused,S as WithMenuBar,C as WithMenuBarAllTypes,T as __namedExportsOrder,h as default};
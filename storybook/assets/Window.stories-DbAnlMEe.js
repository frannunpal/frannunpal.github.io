import{j as e,r as y}from"./iframe-BNrdll36.js";import{W as w,m as n}from"./Window-uPqwoy4q.js";import{C as x}from"./CalendarApp-6MzzNt4Y.js";import{u as h}from"./desktopStore-6p6olQk_.js";import{W}from"./useWindowButtonRegistry-Bcj2JC3j.js";import"./preload-helper-CRsgZnrw.js";import"./index-CQr2-_tZ.js";import"./Transition-DPFxZqvc.js";import"./index-05f7sRL8.js";import"./iconBase-C-XepopT.js";import"./SettingsApp-Bs8N2TL3.js";import"./AppIcon-Du5WmxoY.js";import"./useDynamicIcon-C2kRcZsm.js";import"./WallpaperSettings-DtoBRpg1.js";import"./FilePickerApp-C9cbMQYq.js";import"./sortNodes-k3UPHZY_.js";import"./FileIcon-CS6U7Dwq.js";import"./Breadcrumbs-D1lfVFUO.js";import"./polymorphic-factory-BW9slRGI.js";import"./Text-CfvHUHkT.js";import"./is-element-CoInZLNR.js";import"./UnstyledButton-BgOwkDkM.js";import"./useTranslation-CsYNVJuM.js";import"./Group-1j-iWBma.js";import"./Button--RpCmFwV.js";import"./Loader-BLXZI6wm.js";import"./TextInput-CBRHuIFR.js";import"./InputBase-BQ7kPXDg.js";import"./use-id-5ZNEkNgi.js";import"./use-resolved-styles-api-CZsqKTpj.js";import"./CloseButton-DcEOJMJT.js";import"./SettingsSection-CiRHjmQ6.js";import"./Stack-6mhmhFEl.js";import"./wallpaper-DBrFTLr9.js";import"./SegmentedControl-xsRBb7Ku.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-DpwU5jvX.js";import"./use-uncontrolled-n0Ml9xZi.js";import"./AppearanceSettings-BpWA091q.js";import"./ColorPicker-Ck6ZXLeN.js";import"./Colors-7cWumA21.js";import"./clamp-DTmYCdls.js";import"./Popover-DqYjx-9M.js";import"./OptionalPortal-BPKLB5ZY.js";import"./DirectionProvider-ChCYRQYr.js";import"./Slider-DozWe2TY.js";import"./LauncherSettings-PinPzf5X.js";import"./ScrollArea-CBzsKrP4.js";import"./SimpleGrid-DiwF6zXJ.js";import"./FontSettings-CklARA1k.js";import"./Paper-BoG7r2uc.js";import"./LanguageSettings-Dn0YQDr1.js";import"./ResetSettings-DeHELayP.js";import"./useAnimationDuration-BepWdIOj.js";import"./Animations-67kTFacj.js";import"./Menu-Ch1qyj6L.js";import"./AccordionChevron-D51JPf6N.js";import"./FilesApp-DzV00n2L.js";import"./useOpenApp-K6m1Sc-Q.js";import"./apps-B-6LmW0h.js";import"./useAdaptiveDimensions-BWxc8-b8.js";import"./FolderTree-CY1DsslP.js";import"./FileList-DjhsTN0f.js";import"./PdfApp-DKeEkZgM.js";import"./StorybookApp-am9HPWva.js";import"./CreateItemApp-DNXNd488.js";import"./IconColorPicker-DCqy7zPs.js";import"./Icons-2dF7msl8.js";import"./Modal-B5lXi-UW.js";const f=({windows:t})=>(y.useEffect(()=>{h.setState({windows:t})},[t]),null),b=()=>{const t=h(i=>i.windows);return e.jsx(e.Fragment,{children:t.map(i=>e.jsx(w,{window:i},i.id))})},Un={title:"Common components/Window",component:w,decorators:[(t,i)=>{const u=Array.isArray(i.parameters.windows)?i.parameters.windows:[i.args.window],g=Array.isArray(i.parameters.windows);return e.jsxs(W,{children:[e.jsx(f,{windows:u}),e.jsx("div",{style:{position:"relative",width:"100vw",height:"100vh",background:"var(--mantine-color-body)"},children:g?e.jsx(b,{}):e.jsx(t,{})})]})}],args:{window:n({id:"win-story",title:"My Window",icon:"📝",content:"AppEmptyState",fcIcon:"FcEditImage",x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})}},o={args:{window:{id:"win-story",title:"My Window",content:"notepad",x:60,y:60,width:600,height:400,minWidth:300,minHeight:200,isOpen:!0,state:"normal",zIndex:1,fcIcon:"FcEditImage"}}},r={args:{window:n({state:"maximized",title:"A very long window title that should not be truncated in the title bar since it is maximized",fcIcon:"FcEditImage"})}},a={args:{window:n({title:"A very long window title that should be truncated in the title bar",width:200,height:200})}},d={args:{window:n({canMaximize:!1})}},s={args:{window:n({id:"win-always-on-top",title:"Create Folder",fcIcon:"FcNewFolder",alwaysOnTop:!0,canMaximize:!1,width:400,height:300,minWidth:350,minHeight:250,zIndex:10001,x:200,y:150})},parameters:{windows:[n({id:"win-behind",title:"Background Window",zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),n({id:"win-always-on-top",title:"Create Folder",icon:"📁",fcIcon:"FcNewFolder",alwaysOnTop:!0,canMaximize:!1,width:400,height:300,minWidth:350,minHeight:250,zIndex:10001,x:200,y:150})]}},m={args:{window:n({id:"win-unfocused",title:"Unfocused Window",icon:"📝",zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})},parameters:{windows:[n({id:"win-unfocused",title:"Unfocused Window",icon:"📝",zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),n({id:"win-focused",title:"Focused Window",icon:"📝",zIndex:2,x:120,y:120,width:600,height:400,minWidth:300,minHeight:200})]}},c={args:{window:n({title:"App with Menu",fcIcon:"FcEditImage"}),menuBar:[{type:"menu",label:"File",icon:"FcFile",items:[{type:"item",label:"New",icon:"FcPlus",onClick:()=>{}},{type:"item",label:"Open",onClick:()=>{}},{type:"divider"},{type:"item",label:"Save",onClick:()=>{}}]},{type:"menu",label:"Edit",items:[{type:"item",label:"Undo",onClick:()=>{},disabled:!0},{type:"item",label:"Redo",onClick:()=>{}}]},{type:"switch",label:"Word wrap",checked:!1,onChange:()=>{}}]}},l={args:{window:n({title:"All menu types",fcIcon:"FcSettings",width:800}),menuBar:[{type:"menu",label:"File",items:[{type:"item",label:"Close",onClick:()=>{}}]},{type:"combobox",label:"View",options:["List","Grid","Details"],value:"List",onChange:()=>{}},{type:"switch",label:"Show hidden",checked:!1,onChange:()=>{}},{type:"slider",label:"Zoom",min:50,max:200,value:100,onChange:()=>{}},{type:"text-input",placeholder:"Search...",value:"",onChange:()=>{}}]}},p={args:{window:n({title:"Calendar",content:"calendar",icon:"📅",fcIcon:"FcCalendar",canMaximize:!1,width:340,height:380,minWidth:320,minHeight:360})},render:t=>e.jsx(w,{...t,children:e.jsx(x,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      state: 'maximized',
      title: 'A very long window title that should not be truncated in the title bar since it is maximized',
      fcIcon: 'FcEditImage'
    })
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      title: 'A very long window title that should be truncated in the title bar',
      width: 200,
      height: 200
    })
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      canMaximize: false
    })
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    window: makeWindow({
      id: 'win-always-on-top',
      title: 'Create Folder',
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
    })
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
      title: 'Create Folder',
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
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ln=["Normal","Maximized","NarrowTitle","NoMaximize","AlwaysOnTop","Unfocused","WithMenuBar","WithMenuBarAllTypes","CalendarWindow"];export{s as AlwaysOnTop,p as CalendarWindow,r as Maximized,a as NarrowTitle,d as NoMaximize,o as Normal,m as Unfocused,c as WithMenuBar,l as WithMenuBarAllTypes,Ln as __namedExportsOrder,Un as default};

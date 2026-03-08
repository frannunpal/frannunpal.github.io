import{j as e,r as y}from"./iframe-U9dC9Cor.js";import{W as w,m as n}from"./Window-DddBGFMP.js";import{C as x}from"./CalendarApp-fq-CuZuq.js";import{u as h}from"./desktopStore-BmrVKCSf.js";import{W}from"./useWindowButtonRegistry-rcD5OXVH.js";import"./preload-helper-D1UD9lgW.js";import"./index-SsivZmaR.js";import"./Transition-CkLLtgT1.js";import"./VscIcon-B9mYMaw9.js";import"./useDynamicIcon-B2vFVd2O.js";import"./SettingsApp-CnaCGwC0.js";import"./AppIcon-CBbNJwn9.js";import"./WallpaperSettings-CEN_iOqy.js";import"./useResolvedUrl-97qfKVBS.js";import"./FilePickerApp-CDq1H7ZD.js";import"./sortNodes-k3UPHZY_.js";import"./FileIcon-hHMFxt38.js";import"./Breadcrumbs-BwM3e-g7.js";import"./polymorphic-factory-DyzbqoLZ.js";import"./Text-Dtnqn3Bo.js";import"./is-element-Bi8acN8O.js";import"./UnstyledButton-VKVflIkY.js";import"./useTranslation-Cvul1C8x.js";import"./Group-C3mkPUBX.js";import"./Button-BlMBDGXk.js";import"./Loader-DElCIoZg.js";import"./TextInput-DiqM4NS-.js";import"./InputBase-CpR35aXm.js";import"./use-id-CiapeEnC.js";import"./use-resolved-styles-api-BuMwp7JB.js";import"./CloseButton-BWBrjiZx.js";import"./SettingsSection-C0qAlHrY.js";import"./Stack-Cm-oUvcw.js";import"./wallpaper-aTrUdOVb.js";import"./SegmentedControl-DqZHiGwc.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-WYOYf04b.js";import"./use-uncontrolled-B4fczV8L.js";import"./AppearanceSettings-DlKuS_Ox.js";import"./ColorPicker-1YlEDuVv.js";import"./Colors-CBaN3Y8G.js";import"./clamp-DTmYCdls.js";import"./Popover-BF1G8HQF.js";import"./OptionalPortal-CIlUmR1F.js";import"./DirectionProvider-Dir_r4eo.js";import"./Slider-DVFU4X73.js";import"./LauncherSettings-C9WLam6Z.js";import"./ScrollArea-BOw2r3pW.js";import"./SimpleGrid-BAuYoQRy.js";import"./FontSettings-Ccxa0xFL.js";import"./Paper-ByTz6eXy.js";import"./LanguageSettings-DtVijbTS.js";import"./ResetSettings-DJbkNdbe.js";import"./useAnimationDuration-CI8m7S-H.js";import"./Animations-67kTFacj.js";import"./Menu-BnSD2lCt.js";import"./AccordionChevron-CAXHsCT_.js";import"./FilesApp-Gd4NNyLp.js";import"./useOpenApp-CpsIN7bm.js";import"./apps-C9KmvF_j.js";import"./useAdaptiveDimensions-D5xa8B8u.js";import"./FolderTree-CP82asWx.js";import"./FileList-wSI4Lc67.js";import"./PdfApp-7qWbdqc-.js";import"./StorybookApp-CHqs-kNk.js";import"./iconBase-BTUdkooo.js";import"./CreateItemApp--Tfsih1Q.js";import"./IconColorPicker-C_hxnPh3.js";import"./Icons-2dF7msl8.js";import"./Modal-h5Xev0xu.js";const f=({windows:t})=>(y.useEffect(()=>{h.setState({windows:t})},[t]),null),b=()=>{const t=h(i=>i.windows);return e.jsx(e.Fragment,{children:t.map(i=>e.jsx(w,{window:i},i.id))})},Ln={title:"Common components/Window",component:w,decorators:[(t,i)=>{const u=Array.isArray(i.parameters.windows)?i.parameters.windows:[i.args.window],g=Array.isArray(i.parameters.windows);return e.jsxs(W,{children:[e.jsx(f,{windows:u}),e.jsx("div",{style:{position:"relative",width:"100vw",height:"100vh",background:"var(--mantine-color-body)"},children:g?e.jsx(b,{}):e.jsx(t,{})})]})}],args:{window:n({id:"win-story",title:"My Window",icon:"📝",content:"AppEmptyState",fcIcon:"FcEditImage",x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})}},o={args:{window:{id:"win-story",title:"My Window",content:"notepad",x:60,y:60,width:600,height:400,minWidth:300,minHeight:200,isOpen:!0,state:"normal",zIndex:1,fcIcon:"FcEditImage"}}},r={args:{window:n({state:"maximized",title:"A very long window title that should not be truncated in the title bar since it is maximized",fcIcon:"FcEditImage"})}},a={args:{window:n({title:"A very long window title that should be truncated in the title bar",width:200,height:200})}},d={args:{window:n({canMaximize:!1})}},s={args:{window:n({id:"win-always-on-top",title:"Create Folder",fcIcon:"FcNewFolder",alwaysOnTop:!0,canMaximize:!1,width:400,height:300,minWidth:350,minHeight:250,zIndex:10001,x:200,y:150})},parameters:{windows:[n({id:"win-behind",title:"Background Window",zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),n({id:"win-always-on-top",title:"Create Folder",icon:"📁",fcIcon:"FcNewFolder",alwaysOnTop:!0,canMaximize:!1,width:400,height:300,minWidth:350,minHeight:250,zIndex:10001,x:200,y:150})]}},m={args:{window:n({id:"win-unfocused",title:"Unfocused Window",icon:"📝",zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})},parameters:{windows:[n({id:"win-unfocused",title:"Unfocused Window",icon:"📝",zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),n({id:"win-focused",title:"Focused Window",icon:"📝",zIndex:2,x:120,y:120,width:600,height:400,minWidth:300,minHeight:200})]}},c={args:{window:n({title:"App with Menu",fcIcon:"FcEditImage"}),menuBar:[{type:"menu",label:"File",icon:"FcFile",items:[{type:"item",label:"New",icon:"FcPlus",onClick:()=>{}},{type:"item",label:"Open",onClick:()=>{}},{type:"divider"},{type:"item",label:"Save",onClick:()=>{}}]},{type:"menu",label:"Edit",items:[{type:"item",label:"Undo",onClick:()=>{},disabled:!0},{type:"item",label:"Redo",onClick:()=>{}}]},{type:"switch",label:"Word wrap",checked:!1,onChange:()=>{}}]}},l={args:{window:n({title:"All menu types",fcIcon:"FcSettings",width:800}),menuBar:[{type:"menu",label:"File",items:[{type:"item",label:"Close",onClick:()=>{}}]},{type:"combobox",label:"View",options:["List","Grid","Details"],value:"List",onChange:()=>{}},{type:"switch",label:"Show hidden",checked:!1,onChange:()=>{}},{type:"slider",label:"Zoom",min:50,max:200,value:100,onChange:()=>{}},{type:"text-input",placeholder:"Search...",value:"",onChange:()=>{}}]}},p={args:{window:n({title:"Calendar",content:"calendar",icon:"📅",fcIcon:"FcCalendar",canMaximize:!1,width:340,height:380,minWidth:320,minHeight:360})},render:t=>e.jsx(w,{...t,children:e.jsx(x,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Rn=["Normal","Maximized","NarrowTitle","NoMaximize","AlwaysOnTop","Unfocused","WithMenuBar","WithMenuBarAllTypes","CalendarWindow"];export{s as AlwaysOnTop,p as CalendarWindow,r as Maximized,a as NarrowTitle,d as NoMaximize,o as Normal,m as Unfocused,c as WithMenuBar,l as WithMenuBarAllTypes,Rn as __namedExportsOrder,Ln as default};

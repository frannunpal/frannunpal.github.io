import{j as e,r as y}from"./iframe-EBfrZQCs.js";import{W as w,m as n}from"./Window-BMM5-aU_.js";import{C as x}from"./CalendarApp-Tsl9Citj.js";import{u as h}from"./desktopStore-CwB-cdNj.js";import{W}from"./useWindowButtonRegistry-DScb9k0T.js";import"./preload-helper-CRsgZnrw.js";import"./index-DSqRWbxz.js";import"./Transition-BwN4kT9j.js";import"./VscIcon-DeXiUSO-.js";import"./useDynamicIcon-Z1W58oY5.js";import"./SettingsApp-RiCb2uyT.js";import"./AppIcon-CIm0Tuzm.js";import"./WallpaperSettings-Dchblhl8.js";import"./useResolvedUrl-BzH8qatV.js";import"./FilePickerApp-BzKG2RfD.js";import"./sortNodes-k3UPHZY_.js";import"./FileIcon-DqfSu0yB.js";import"./Breadcrumbs-2M9hM8Oo.js";import"./polymorphic-factory-CitjaWgV.js";import"./Text-CmGhEjeA.js";import"./is-element-CsCIQYcM.js";import"./UnstyledButton-CYZ0_6oA.js";import"./useTranslation-CfQsQjN6.js";import"./Group-Dyp7zqJW.js";import"./Button-a3-AlcbN.js";import"./Loader-DqVMSaTN.js";import"./TextInput-DpB0r6sn.js";import"./InputBase-RM_eedGx.js";import"./use-id-C2-QLSHp.js";import"./use-resolved-styles-api-D94bfHEu.js";import"./CloseButton-NjFIAN3y.js";import"./SettingsSection-B9Pnxiwk.js";import"./Stack-DKu2hy6J.js";import"./wallpaper-DBrFTLr9.js";import"./SegmentedControl-B0OvewRX.js";import"./to-int-PQE0s6ay.js";import"./use-merged-ref-D8gqU3v0.js";import"./use-uncontrolled-DTG28c8l.js";import"./AppearanceSettings-kIfb7aOe.js";import"./ColorPicker-BNhTkLZA.js";import"./Colors-BO33xmnN.js";import"./clamp-DTmYCdls.js";import"./Popover-BWv2rWGU.js";import"./OptionalPortal-CTDSEAQA.js";import"./DirectionProvider-BPMG83_F.js";import"./Slider-DCLzLOfr.js";import"./LauncherSettings-6Ggc41e8.js";import"./ScrollArea-ImpI-HQl.js";import"./SimpleGrid-CbfQTBaj.js";import"./FontSettings-CoA2Gphu.js";import"./Paper-DPGHG3Io.js";import"./LanguageSettings-BbqLWCR-.js";import"./ResetSettings-DFc4GJkS.js";import"./useAnimationDuration-HfCRhMm2.js";import"./Animations-67kTFacj.js";import"./Menu-BFRMS7jO.js";import"./AccordionChevron-C9wk85QK.js";import"./FilesApp-BwUBXD05.js";import"./useOpenApp-CMsSzYiX.js";import"./apps-B-6LmW0h.js";import"./useAdaptiveDimensions-voWJNl4G.js";import"./FolderTree-BDvu52Ky.js";import"./FileList-Cqv6CUYL.js";import"./PdfApp-1HiyxDpN.js";import"./StorybookApp-zD8H1WDp.js";import"./iconBase-Cac3eC1y.js";import"./CreateItemApp-CuY02xOf.js";import"./IconColorPicker-DI7Tg9qW.js";import"./Icons-2dF7msl8.js";import"./Modal-7epdup7-.js";const f=({windows:t})=>(y.useEffect(()=>{h.setState({windows:t})},[t]),null),b=()=>{const t=h(i=>i.windows);return e.jsx(e.Fragment,{children:t.map(i=>e.jsx(w,{window:i},i.id))})},Ln={title:"Common components/Window",component:w,decorators:[(t,i)=>{const u=Array.isArray(i.parameters.windows)?i.parameters.windows:[i.args.window],g=Array.isArray(i.parameters.windows);return e.jsxs(W,{children:[e.jsx(f,{windows:u}),e.jsx("div",{style:{position:"relative",width:"100vw",height:"100vh",background:"var(--mantine-color-body)"},children:g?e.jsx(b,{}):e.jsx(t,{})})]})}],args:{window:n({id:"win-story",title:"My Window",icon:"📝",content:"AppEmptyState",fcIcon:"FcEditImage",x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})}},o={args:{window:{id:"win-story",title:"My Window",content:"notepad",x:60,y:60,width:600,height:400,minWidth:300,minHeight:200,isOpen:!0,state:"normal",zIndex:1,fcIcon:"FcEditImage"}}},r={args:{window:n({state:"maximized",title:"A very long window title that should not be truncated in the title bar since it is maximized",fcIcon:"FcEditImage"})}},a={args:{window:n({title:"A very long window title that should be truncated in the title bar",width:200,height:200})}},d={args:{window:n({canMaximize:!1})}},s={args:{window:n({id:"win-always-on-top",title:"Create Folder",fcIcon:"FcNewFolder",alwaysOnTop:!0,canMaximize:!1,width:400,height:300,minWidth:350,minHeight:250,zIndex:10001,x:200,y:150})},parameters:{windows:[n({id:"win-behind",title:"Background Window",zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),n({id:"win-always-on-top",title:"Create Folder",icon:"📁",fcIcon:"FcNewFolder",alwaysOnTop:!0,canMaximize:!1,width:400,height:300,minWidth:350,minHeight:250,zIndex:10001,x:200,y:150})]}},m={args:{window:n({id:"win-unfocused",title:"Unfocused Window",icon:"📝",zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200})},parameters:{windows:[n({id:"win-unfocused",title:"Unfocused Window",icon:"📝",zIndex:1,x:60,y:60,width:600,height:400,minWidth:300,minHeight:200}),n({id:"win-focused",title:"Focused Window",icon:"📝",zIndex:2,x:120,y:120,width:600,height:400,minWidth:300,minHeight:200})]}},c={args:{window:n({title:"App with Menu",fcIcon:"FcEditImage"}),menuBar:[{type:"menu",label:"File",icon:"FcFile",items:[{type:"item",label:"New",icon:"FcPlus",onClick:()=>{}},{type:"item",label:"Open",onClick:()=>{}},{type:"divider"},{type:"item",label:"Save",onClick:()=>{}}]},{type:"menu",label:"Edit",items:[{type:"item",label:"Undo",onClick:()=>{},disabled:!0},{type:"item",label:"Redo",onClick:()=>{}}]},{type:"switch",label:"Word wrap",checked:!1,onChange:()=>{}}]}},l={args:{window:n({title:"All menu types",fcIcon:"FcSettings",width:800}),menuBar:[{type:"menu",label:"File",items:[{type:"item",label:"Close",onClick:()=>{}}]},{type:"combobox",label:"View",options:["List","Grid","Details"],value:"List",onChange:()=>{}},{type:"switch",label:"Show hidden",checked:!1,onChange:()=>{}},{type:"slider",label:"Zoom",min:50,max:200,value:100,onChange:()=>{}},{type:"text-input",placeholder:"Search...",value:"",onChange:()=>{}}]}},p={args:{window:n({title:"Calendar",content:"calendar",icon:"📅",fcIcon:"FcCalendar",canMaximize:!1,width:340,height:380,minWidth:320,minHeight:360})},render:t=>e.jsx(w,{...t,children:e.jsx(x,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

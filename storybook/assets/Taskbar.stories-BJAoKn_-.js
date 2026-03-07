import{r as i,u as s,j as e}from"./iframe-BNrdll36.js";import{T as m}from"./Taskbar-S9VUsH1I.js";import{u as n}from"./desktopStore-6p6olQk_.js";import{W as g}from"./useWindowButtonRegistry-Bcj2JC3j.js";import"./preload-helper-CRsgZnrw.js";import"./useAnimationDuration-BepWdIOj.js";import"./Animations-67kTFacj.js";import"./apps-B-6LmW0h.js";import"./useDynamicIcon-C2kRcZsm.js";import"./useOpenApp-K6m1Sc-Q.js";import"./useAdaptiveDimensions-BWxc8-b8.js";import"./AppIcon-Du5WmxoY.js";import"./Text-CfvHUHkT.js";import"./polymorphic-factory-BW9slRGI.js";import"./CalendarApp-6MzzNt4Y.js";import"./use-uncontrolled-n0Ml9xZi.js";import"./UnstyledButton-BgOwkDkM.js";import"./AccordionChevron-D51JPf6N.js";import"./use-resolved-styles-api-CZsqKTpj.js";import"./clamp-DTmYCdls.js";import"./TaskbarContextMenu-DhgWx3Ru.js";import"./ContextMenuAnchor-B1u3adIx.js";import"./Menu-Ch1qyj6L.js";import"./Popover-DqYjx-9M.js";import"./OptionalPortal-BPKLB5ZY.js";import"./is-element-CoInZLNR.js";import"./Transition-DPFxZqvc.js";import"./index-CQr2-_tZ.js";import"./DirectionProvider-ChCYRQYr.js";import"./use-merged-ref-DpwU5jvX.js";import"./use-id-5ZNEkNgi.js";import"./useTranslation-CsYNVJuM.js";import"./Stack-6mhmhFEl.js";import"./Group-1j-iWBma.js";import"./CloseButton-DcEOJMJT.js";import"./Loader-BLXZI6wm.js";import"./sortNodes-k3UPHZY_.js";const X={title:"Common components/Taskbar",component:m,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx(g,{children:e.jsx("div",{style:{height:"100vh",background:"var(--mantine-color-body)"},children:e.jsx(t,{})})})]},a={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"})},[]),e.jsx(t,{}))]},r={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"}),n.getState().addNotification({id:"app-update",title:"New version available!",message:"Close this notification to install it.",onClose:()=>window.location.reload(),fcIcon:"FcEngineering"})},[]),e.jsx(t,{}))]},c={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"});const o=n.getState().openWindow;o({title:"Notepad",content:"notepad",icon:"📝",fcIcon:"FcEditImage",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),n.getState().addNotification({id:"app-update",title:"New version available!",message:"Close this notification to install it.",onClose:()=>window.location.reload(),fcIcon:"FcEngineering"})},[]),e.jsx(t,{}))]},d={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[]}),s.setState({language:"en"});const o=n.getState().openWindow;o({title:"Notepad",content:"notepad",icon:"📝",fcIcon:"FcEditImage",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),o({title:"Terminal",content:"terminal",icon:"💻",fcIcon:"FcCommandLine",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),o({title:"Files",content:"files",icon:"📁",fcIcon:"FcOpenedFolder",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150})},[]),e.jsx(t,{}))]},p={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"es"})},[]),e.jsx(t,{}))]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useEffect(() => {
      useDesktopStore.setState({
        windows: [],
        icons: [],
        notifications: []
      });
      useSettingsStore.setState({
        language: 'en'
      });
    }, []);
    return <Story />;
  }]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useEffect(() => {
      useDesktopStore.setState({
        windows: [],
        icons: [],
        notifications: []
      });
      useSettingsStore.setState({
        language: 'en'
      });
      useDesktopStore.getState().addNotification({
        id: 'app-update',
        title: 'New version available!',
        message: 'Close this notification to install it.',
        onClose: () => window.location.reload(),
        fcIcon: 'FcEngineering'
      });
    }, []);
    return <Story />;
  }]
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useEffect(() => {
      useDesktopStore.setState({
        windows: [],
        icons: [],
        notifications: []
      });
      useSettingsStore.setState({
        language: 'en'
      });
      const open = useDesktopStore.getState().openWindow;
      open({
        title: 'Notepad',
        content: 'notepad',
        icon: '📝',
        fcIcon: 'FcEditImage',
        x: 0,
        y: 0,
        width: 600,
        height: 400,
        minWidth: 200,
        minHeight: 150
      });
      useDesktopStore.getState().addNotification({
        id: 'app-update',
        title: 'New version available!',
        message: 'Close this notification to install it.',
        onClose: () => window.location.reload(),
        fcIcon: 'FcEngineering'
      });
    }, []);
    return <Story />;
  }]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useEffect(() => {
      useDesktopStore.setState({
        windows: [],
        icons: []
      });
      useSettingsStore.setState({
        language: 'en'
      });
      const open = useDesktopStore.getState().openWindow;
      open({
        title: 'Notepad',
        content: 'notepad',
        icon: '📝',
        fcIcon: 'FcEditImage',
        x: 0,
        y: 0,
        width: 600,
        height: 400,
        minWidth: 200,
        minHeight: 150
      });
      open({
        title: 'Terminal',
        content: 'terminal',
        icon: '💻',
        fcIcon: 'FcCommandLine',
        x: 0,
        y: 0,
        width: 600,
        height: 400,
        minWidth: 200,
        minHeight: 150
      });
      open({
        title: 'Files',
        content: 'files',
        icon: '📁',
        fcIcon: 'FcOpenedFolder',
        x: 0,
        y: 0,
        width: 600,
        height: 400,
        minWidth: 200,
        minHeight: 150
      });
    }, []);
    return <Story />;
  }]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useEffect(() => {
      useDesktopStore.setState({
        windows: [],
        icons: [],
        notifications: []
      });
      useSettingsStore.setState({
        language: 'es'
      });
    }, []);
    return <Story />;
  }]
}`,...p.parameters?.docs?.source}}};const Y=["Empty","WithNotifications","WithNotificationsAndWindows","WithWindows","SpanishLanguage"];export{a as Empty,p as SpanishLanguage,r as WithNotifications,c as WithNotificationsAndWindows,d as WithWindows,Y as __namedExportsOrder,X as default};

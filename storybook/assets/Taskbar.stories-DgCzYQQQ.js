import{r as i,u as s,j as e}from"./iframe-U9dC9Cor.js";import{T as m}from"./Taskbar-ChSbhXYs.js";import{u as n}from"./desktopStore-BmrVKCSf.js";import{W as g}from"./useWindowButtonRegistry-rcD5OXVH.js";import"./preload-helper-D1UD9lgW.js";import"./useAnimationDuration-CI8m7S-H.js";import"./Animations-67kTFacj.js";import"./apps-C9KmvF_j.js";import"./useDynamicIcon-B2vFVd2O.js";import"./useOpenApp-CpsIN7bm.js";import"./useAdaptiveDimensions-D5xa8B8u.js";import"./AppIcon-CBbNJwn9.js";import"./Text-Dtnqn3Bo.js";import"./polymorphic-factory-DyzbqoLZ.js";import"./CalendarApp-fq-CuZuq.js";import"./use-uncontrolled-B4fczV8L.js";import"./UnstyledButton-VKVflIkY.js";import"./AccordionChevron-CAXHsCT_.js";import"./use-resolved-styles-api-BuMwp7JB.js";import"./clamp-DTmYCdls.js";import"./TaskbarContextMenu-3WKSMOTL.js";import"./ContextMenuAnchor-DirtRVq-.js";import"./Menu-BnSD2lCt.js";import"./Popover-BF1G8HQF.js";import"./OptionalPortal-CIlUmR1F.js";import"./is-element-Bi8acN8O.js";import"./Transition-CkLLtgT1.js";import"./index-SsivZmaR.js";import"./DirectionProvider-Dir_r4eo.js";import"./use-merged-ref-WYOYf04b.js";import"./use-id-CiapeEnC.js";import"./useTranslation-Cvul1C8x.js";import"./Stack-Cm-oUvcw.js";import"./Group-C3mkPUBX.js";import"./CloseButton-BWBrjiZx.js";import"./Loader-DElCIoZg.js";import"./sortNodes-k3UPHZY_.js";const X={title:"Common components/Taskbar",component:m,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx(g,{children:e.jsx("div",{style:{height:"100vh",background:"var(--mantine-color-body)"},children:e.jsx(t,{})})})]},a={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"})},[]),e.jsx(t,{}))]},r={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"}),n.getState().addNotification({id:"app-update",title:"New version available!",message:"Close this notification to install it.",onClose:()=>window.location.reload(),fcIcon:"FcEngineering"})},[]),e.jsx(t,{}))]},c={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"});const o=n.getState().openWindow;o({title:"Notepad",content:"notepad",icon:"📝",fcIcon:"FcEditImage",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),n.getState().addNotification({id:"app-update",title:"New version available!",message:"Close this notification to install it.",onClose:()=>window.location.reload(),fcIcon:"FcEngineering"})},[]),e.jsx(t,{}))]},d={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[]}),s.setState({language:"en"});const o=n.getState().openWindow;o({title:"Notepad",content:"notepad",icon:"📝",fcIcon:"FcEditImage",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),o({title:"Terminal",content:"terminal",icon:"💻",fcIcon:"FcCommandLine",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),o({title:"Files",content:"files",icon:"📁",fcIcon:"FcOpenedFolder",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150})},[]),e.jsx(t,{}))]},p={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"es"})},[]),e.jsx(t,{}))]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

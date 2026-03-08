import{r as i,u as s,j as e}from"./iframe-DTUnew5m.js";import{T as m}from"./Taskbar-CRhlgSUZ.js";import{u as n}from"./desktopStore-Bl-LhsjV.js";import{W as g}from"./useWindowButtonRegistry-clhv7RY5.js";import"./preload-helper-CRsgZnrw.js";import"./useAnimationDuration-B-ZHPhDZ.js";import"./Animations-67kTFacj.js";import"./apps-B-6LmW0h.js";import"./useDynamicIcon-D5XK78SV.js";import"./useOpenApp-BisNTOXP.js";import"./useAdaptiveDimensions-C-Kiaz6q.js";import"./AppIcon-BAFT5x1f.js";import"./Text-Ciw_5Qn7.js";import"./polymorphic-factory-C7kbvBSE.js";import"./CalendarApp-DzSvaA4J.js";import"./use-uncontrolled-Dg6i_OhA.js";import"./UnstyledButton-BJTgS-FG.js";import"./AccordionChevron-BjX6ADvt.js";import"./use-resolved-styles-api-B4Ecvuov.js";import"./clamp-DTmYCdls.js";import"./TaskbarContextMenu-DyRC0fBC.js";import"./ContextMenuAnchor-CEVTJs5R.js";import"./Menu-B1d0fIAt.js";import"./Popover-OC0mRjZ8.js";import"./OptionalPortal-FiBzFgm1.js";import"./is-element-p28lS3c1.js";import"./Transition-D56J4DjQ.js";import"./index-Bqmkwnfn.js";import"./DirectionProvider-BLC1boeJ.js";import"./use-merged-ref-rvP5RKof.js";import"./use-id-Cap3KBVR.js";import"./useTranslation-DphYhn2X.js";import"./Stack-C6Jkg3KI.js";import"./Group-BVZlK1MV.js";import"./CloseButton-BHFv3TQu.js";import"./Loader-TqqKt8B9.js";import"./sortNodes-k3UPHZY_.js";const X={title:"Common components/Taskbar",component:m,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx(g,{children:e.jsx("div",{style:{height:"100vh",background:"var(--mantine-color-body)"},children:e.jsx(t,{})})})]},a={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"})},[]),e.jsx(t,{}))]},r={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"}),n.getState().addNotification({id:"app-update",title:"New version available!",message:"Close this notification to install it.",onClose:()=>window.location.reload(),fcIcon:"FcEngineering"})},[]),e.jsx(t,{}))]},c={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"});const o=n.getState().openWindow;o({title:"Notepad",content:"notepad",icon:"📝",fcIcon:"FcEditImage",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),n.getState().addNotification({id:"app-update",title:"New version available!",message:"Close this notification to install it.",onClose:()=>window.location.reload(),fcIcon:"FcEngineering"})},[]),e.jsx(t,{}))]},d={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[]}),s.setState({language:"en"});const o=n.getState().openWindow;o({title:"Notepad",content:"notepad",icon:"📝",fcIcon:"FcEditImage",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),o({title:"Terminal",content:"terminal",icon:"💻",fcIcon:"FcCommandLine",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),o({title:"Files",content:"files",icon:"📁",fcIcon:"FcOpenedFolder",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150})},[]),e.jsx(t,{}))]},p={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"es"})},[]),e.jsx(t,{}))]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

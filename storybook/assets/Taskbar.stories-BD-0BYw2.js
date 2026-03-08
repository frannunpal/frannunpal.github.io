import{r as i,u as s,j as e}from"./iframe-EBfrZQCs.js";import{T as m}from"./Taskbar-vKIf3Cn7.js";import{u as n}from"./desktopStore-CwB-cdNj.js";import{W as g}from"./useWindowButtonRegistry-DScb9k0T.js";import"./preload-helper-CRsgZnrw.js";import"./useAnimationDuration-HfCRhMm2.js";import"./Animations-67kTFacj.js";import"./apps-B-6LmW0h.js";import"./useDynamicIcon-Z1W58oY5.js";import"./useOpenApp-CMsSzYiX.js";import"./useAdaptiveDimensions-voWJNl4G.js";import"./AppIcon-CIm0Tuzm.js";import"./Text-CmGhEjeA.js";import"./polymorphic-factory-CitjaWgV.js";import"./CalendarApp-Tsl9Citj.js";import"./use-uncontrolled-DTG28c8l.js";import"./UnstyledButton-CYZ0_6oA.js";import"./AccordionChevron-C9wk85QK.js";import"./use-resolved-styles-api-D94bfHEu.js";import"./clamp-DTmYCdls.js";import"./TaskbarContextMenu-jnolA2qA.js";import"./ContextMenuAnchor-DnyVMyDg.js";import"./Menu-BFRMS7jO.js";import"./Popover-BWv2rWGU.js";import"./OptionalPortal-CTDSEAQA.js";import"./is-element-CsCIQYcM.js";import"./Transition-BwN4kT9j.js";import"./index-DSqRWbxz.js";import"./DirectionProvider-BPMG83_F.js";import"./use-merged-ref-D8gqU3v0.js";import"./use-id-C2-QLSHp.js";import"./useTranslation-CfQsQjN6.js";import"./Stack-DKu2hy6J.js";import"./Group-Dyp7zqJW.js";import"./CloseButton-NjFIAN3y.js";import"./Loader-DqVMSaTN.js";import"./sortNodes-k3UPHZY_.js";const X={title:"Common components/Taskbar",component:m,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx(g,{children:e.jsx("div",{style:{height:"100vh",background:"var(--mantine-color-body)"},children:e.jsx(t,{})})})]},a={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"})},[]),e.jsx(t,{}))]},r={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"}),n.getState().addNotification({id:"app-update",title:"New version available!",message:"Close this notification to install it.",onClose:()=>window.location.reload(),fcIcon:"FcEngineering"})},[]),e.jsx(t,{}))]},c={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"en"});const o=n.getState().openWindow;o({title:"Notepad",content:"notepad",icon:"📝",fcIcon:"FcEditImage",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),n.getState().addNotification({id:"app-update",title:"New version available!",message:"Close this notification to install it.",onClose:()=>window.location.reload(),fcIcon:"FcEngineering"})},[]),e.jsx(t,{}))]},d={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[]}),s.setState({language:"en"});const o=n.getState().openWindow;o({title:"Notepad",content:"notepad",icon:"📝",fcIcon:"FcEditImage",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),o({title:"Terminal",content:"terminal",icon:"💻",fcIcon:"FcCommandLine",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),o({title:"Files",content:"files",icon:"📁",fcIcon:"FcOpenedFolder",x:0,y:0,width:600,height:400,minWidth:200,minHeight:150})},[]),e.jsx(t,{}))]},p={decorators:[t=>(i.useEffect(()=>{n.setState({windows:[],icons:[],notifications:[]}),s.setState({language:"es"})},[]),e.jsx(t,{}))]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

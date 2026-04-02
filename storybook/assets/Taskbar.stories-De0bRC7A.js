import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{R as n,Wt as r,en as i,i as a,n as o,z as s}from"./iframe-CEANyIen.js";import{n as c,t as l}from"./useWindowButtonRegistry-KZ4IeIH8.js";import{n as u,t as d}from"./Taskbar-VxEPfErw.js";var f,p,m,h,g,_,v,y;e((()=>{f=t(i(),1),u(),o(),n(),c(),p=r(),m={title:`Common components/Taskbar`,component:d,parameters:{layout:`fullscreen`},decorators:[e=>(0,p.jsx)(l,{children:(0,p.jsx)(`div`,{style:{height:`100vh`,background:`var(--mantine-color-body)`},children:(0,p.jsx)(e,{})})})]},h={decorators:[e=>((0,f.useEffect)(()=>{a.setState({windows:[],icons:[],notifications:[]}),s.setState({language:`en`})},[]),(0,p.jsx)(e,{}))]},g={decorators:[e=>((0,f.useEffect)(()=>{a.setState({windows:[],icons:[],notifications:[]}),s.setState({language:`en`}),a.getState().addNotification({id:`app-update`,title:`New version available!`,message:`Close this notification to install it.`,onClose:()=>window.location.reload(),fcIcon:`FcEngineering`})},[]),(0,p.jsx)(e,{}))]},_={decorators:[e=>((0,f.useEffect)(()=>{a.setState({windows:[],icons:[]}),s.setState({language:`en`});let e=a.getState().openWindow;a.getState().addNotification({id:`notification-en`,title:`Welcome!!`,message:`Here's a notification.`,fcIcon:`FcApproval`}),e({title:`Notepad`,content:`notepad`,icon:`📝`,fcIcon:`FcEditImage`,x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),e({title:`Terminal`,content:`terminal`,icon:`💻`,fcIcon:`FcCommandLine`,x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),e({title:`Files`,content:`files`,icon:`📁`,fcIcon:`FcOpenedFolder`,x:0,y:0,width:600,height:400,minWidth:200,minHeight:150})},[]),(0,p.jsx)(e,{}))]},v={decorators:[e=>((0,f.useEffect)(()=>{a.setState({windows:[],icons:[],notifications:[]}),s.setState({language:`es`}),a.getState().addNotification({id:`notification-es`,title:`¡Bienvenido!`,message:`Las notificaciones están en español.`,fcIcon:`FcApproval`}),a.getState().addNotification({id:`notification-es-2`,title:`Actualización disponible`,message:`Haz clic para instalar la nueva versión.`,fcIcon:`FcDownload`})},[]),(0,p.jsx)(e,{}))]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
      useDesktopStore.getState().addNotification({
        id: 'notification-en',
        title: 'Welcome!!',
        message: "Here's a notification.",
        fcIcon: 'FcApproval'
      });
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      useDesktopStore.getState().addNotification({
        id: 'notification-es',
        title: '¡Bienvenido!',
        message: 'Las notificaciones están en español.',
        fcIcon: 'FcApproval'
      });
      useDesktopStore.getState().addNotification({
        id: 'notification-es-2',
        title: 'Actualización disponible',
        message: 'Haz clic para instalar la nueva versión.',
        fcIcon: 'FcDownload'
      });
    }, []);
    return <Story />;
  }]
}`,...v.parameters?.docs?.source}}},y=[`Empty`,`WithNotifications`,`WithWindowsAndNotifications`,`SpanishLanguage`]}))();export{h as Empty,v as SpanishLanguage,g as WithNotifications,_ as WithWindowsAndNotifications,y as __namedExportsOrder,m as default};
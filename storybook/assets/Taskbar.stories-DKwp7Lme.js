import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{S as n}from"./SettingsApp-DooW131c.js";import{Bn as r,Ut as i,Xn as a,jt as o,mt as s,t as c}from"./iframe-CsmZnCZ1.js";var l,u,d,f,p,m,h,g;e((()=>{l=t(a(),1),c(),u=r(),d={title:`Common components/Taskbar`,component:s,parameters:{layout:`fullscreen`},decorators:[e=>(0,u.jsx)(i,{children:(0,u.jsx)(`div`,{style:{height:`100vh`,background:`var(--mantine-color-body)`},children:(0,u.jsx)(e,{})})})]},f={decorators:[e=>((0,l.useEffect)(()=>{o.setState({windows:[],icons:[],notifications:[]}),n.setState({language:`en`})},[]),(0,u.jsx)(e,{}))]},p={decorators:[e=>((0,l.useEffect)(()=>{o.setState({windows:[],icons:[],notifications:[]}),n.setState({language:`en`}),o.getState().addNotification({id:`app-update`,title:`New version available!`,message:`Close this notification to install it.`,onClose:()=>window.location.reload(),fcIcon:`FcEngineering`})},[]),(0,u.jsx)(e,{}))]},m={decorators:[e=>((0,l.useEffect)(()=>{o.setState({windows:[],icons:[]}),n.setState({language:`en`});let e=o.getState().openWindow;o.getState().addNotification({id:`notification-en`,title:`Welcome!!`,message:`Here's a notification.`,fcIcon:`FcApproval`}),e({title:`Notepad`,content:`notepad`,icon:`📝`,fcIcon:`FcEditImage`,x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),e({title:`Terminal`,content:`terminal`,icon:`💻`,fcIcon:`FcCommandLine`,x:0,y:0,width:600,height:400,minWidth:200,minHeight:150}),e({title:`Files`,content:`files`,icon:`📁`,fcIcon:`FcOpenedFolder`,x:0,y:0,width:600,height:400,minWidth:200,minHeight:150})},[]),(0,u.jsx)(e,{}))]},h={decorators:[e=>((0,l.useEffect)(()=>{o.setState({windows:[],icons:[],notifications:[]}),n.setState({language:`es`}),o.getState().addNotification({id:`notification-es`,title:`¡Bienvenido!`,message:`Las notificaciones están en español.`,fcIcon:`FcApproval`}),o.getState().addNotification({id:`notification-es-2`,title:`Actualización disponible`,message:`Haz clic para instalar la nueva versión.`,fcIcon:`FcDownload`})},[]),(0,u.jsx)(e,{}))]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Empty`,`WithNotifications`,`WithWindowsAndNotifications`,`SpanishLanguage`]}))();export{f as Empty,h as SpanishLanguage,p as WithNotifications,m as WithWindowsAndNotifications,g as __namedExportsOrder,d as default};
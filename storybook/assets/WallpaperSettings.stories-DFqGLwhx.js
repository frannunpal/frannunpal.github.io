import{n as e}from"./chunk-zsgVPwQN.js";import{dn as t,t as n,ur as r}from"./iframe-sl_BymGr.js";import{n as i,t as a}from"./WallpaperSettings-DqQ1xK77.js";var o,s,c,l,u,d;e((()=>{n(),i(),o=r(),s={title:`Settings/WallpaperSettings`,component:a,parameters:{layout:`padded`},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:600,margin:`0 auto`},children:(0,o.jsx)(e,{})})]},c={parameters:{docs:{description:{story:`Default wallpaper settings with Static Image module selected. Shows preview of current wallpaper and options to upload, choose from file system, or enter a URL.`}}}},l={parameters:{docs:{description:{story:`Wallpaper settings with a custom wallpaper URL set.`}}},decorators:[e=>(t.setState({wallpaper:`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920`}),(0,o.jsx)(e,{}))]},u={parameters:{docs:{description:{story:`Gradient wallpaper module. Allows creating CSS gradients with up to 5 colors, angle control, and preset selections.`}}},decorators:[e=>(t.setState({wallpaperModule:`gradient`,wallpaper:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`}),(0,o.jsx)(e,{}))]},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default wallpaper settings with Static Image module selected. Shows preview of current wallpaper and options to upload, choose from file system, or enter a URL.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Wallpaper settings with a custom wallpaper URL set.'
      }
    }
  },
  decorators: [Story => {
    useSettingsStore.setState({
      wallpaper: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920'
    });
    return <Story />;
  }]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Gradient wallpaper module. Allows creating CSS gradients with up to 5 colors, angle control, and preset selections.'
      }
    }
  },
  decorators: [Story => {
    useSettingsStore.setState({
      wallpaperModule: 'gradient',
      wallpaper: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    });
    return <Story />;
  }]
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithCustomWallpaper`,`GradientModule`]}))();export{c as Default,u as GradientModule,l as WithCustomWallpaper,d as __namedExportsOrder,s as default};
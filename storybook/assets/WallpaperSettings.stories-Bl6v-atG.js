import{n as e}from"./chunk-zsgVPwQN.js";import{S as t,f as n,p as r}from"./SettingsApp-DooW131c.js";import{Bn as i,t as a}from"./iframe-CsmZnCZ1.js";var o,s,c,l,u,d;e((()=>{a(),r(),o=i(),s={title:`Settings/WallpaperSettings`,component:n,parameters:{layout:`padded`},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:600,margin:`0 auto`},children:(0,o.jsx)(e,{})})]},c={parameters:{docs:{description:{story:`Default wallpaper settings with Static Image module selected. Shows preview of current wallpaper and options to upload, choose from file system, or enter a URL.`}}}},l={parameters:{docs:{description:{story:`Wallpaper settings with a custom wallpaper URL set.`}}},decorators:[e=>(t.setState({wallpaper:`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920`}),(0,o.jsx)(e,{}))]},u={parameters:{docs:{description:{story:`Shows the wallpaper module selector (currently only "Static Image" is available). Future modules like dynamic backgrounds or videos can be added here.`}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        story: 'Shows the wallpaper module selector (currently only "Static Image" is available). Future modules like dynamic backgrounds or videos can be added here.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithCustomWallpaper`,`WallpaperModuleSelector`]}))();export{c as Default,u as WallpaperModuleSelector,l as WithCustomWallpaper,d as __namedExportsOrder,s as default};
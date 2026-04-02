import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,t as n}from"./AppIcon-ol8tRSTz.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Shared/AppIcon`,component:n,parameters:{layout:`centered`},argTypes:{fcIcon:{control:`select`,options:[`FcSettings`,`FcFolder`,`FcDocument`,`FcCalendar`,`FiGithub`,`FiLinkedin`],description:`Fc*, Fi*, or Vsc* icon name`},size:{control:{type:`number`,min:8,max:96},description:`Icon size in pixels`},color:{control:`color`,description:`Color (applies to Fi icons only)`},iconUrl:{control:`text`,description:`Custom icon image URL`},fallback:{control:`text`,description:`Emoji or text fallback when no icon matches`}}},i={args:{fcIcon:`FcSettings`,size:32}},a={args:{fcIcon:`FiGithub`,size:32,color:`#333`}},o={args:{iconUrl:`https://cdn.simpleicons.org/react`,size:32}},s={args:{fallback:`🚀`,size:32}},c={args:{fcIcon:`FcDocument`,size:32}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fcIcon: 'FcSettings',
    size: 32
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fcIcon: 'FiGithub',
    size: 32,
    color: '#333'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    iconUrl: 'https://cdn.simpleicons.org/react',
    size: 32
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fallback: '🚀',
    size: 32
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fcIcon: 'FcDocument',
    size: 32
  }
}`,...c.parameters?.docs?.source}}},l=[`FcIcon`,`FiIcon`,`CustomUrl`,`EmojiFallback`,`PdfIcon`]}))();export{o as CustomUrl,s as EmojiFallback,i as FcIcon,a as FiIcon,c as PdfIcon,l as __namedExportsOrder,r as default};
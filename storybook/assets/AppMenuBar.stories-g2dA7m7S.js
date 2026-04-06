import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Hn as n,Qn as r,st as i,t as a}from"./iframe-7eX3wc7Y.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(r(),1),a(),s=n(),c={title:`Common components/AppMenuBar`,component:i,parameters:{layout:`padded`}},l={render:()=>(0,s.jsx)(i,{elements:[{type:`menu`,label:`File`,icon:`FcDocument`,items:[{type:`item`,label:`New`,icon:`FcPlus`,onClick:()=>{}},{type:`item`,label:`Open...`,icon:`FcOpenedFolder`,onClick:()=>{}},{type:`divider`},{type:`item`,label:`Save`,icon:`FcCheckmark`,onClick:()=>{}},{type:`item`,label:`Save As...`,onClick:()=>{}}]},{type:`menu`,label:`Edit`,items:[{type:`item`,label:`Undo`,onClick:()=>{}},{type:`item`,label:`Redo`,onClick:()=>{},disabled:!0},{type:`divider`},{type:`item`,label:`Cut`,onClick:()=>{}},{type:`item`,label:`Copy`,onClick:()=>{}},{type:`item`,label:`Paste`,onClick:()=>{}}]}]})},u={render:()=>(0,s.jsx)(()=>{let[e,t]=(0,o.useState)(`Arial`);return(0,s.jsx)(i,{elements:[{type:`combobox`,label:`Font`,options:[`Arial`,`Helvetica`,`Times New Roman`,`Courier New`,`Verdana`],value:e,onChange:t}]})},{})},d={render:()=>(0,s.jsx)(()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(i,{elements:[{type:`switch`,label:`Dark mode`,checked:e,onChange:t}]})},{})},f={render:()=>(0,s.jsx)(()=>{let[e,t]=(0,o.useState)(`Arial`),[n,r]=(0,o.useState)(!1),[a,c]=(0,o.useState)(100),[l,u]=(0,o.useState)(``);return(0,s.jsx)(i,{elements:[{type:`menu`,label:`File`,items:[{type:`item`,label:`New`,onClick:()=>{}},{type:`item`,label:`Open`,onClick:()=>{}},{type:`divider`},{type:`item`,label:`Exit`,onClick:()=>{}}]},{type:`combobox`,label:`Font`,options:[`Arial`,`Helvetica`,`Courier`],value:e,onChange:t},{type:`switch`,label:`Dark`,checked:n,onChange:r},{type:`slider`,label:`Zoom`,min:50,max:200,value:a,onChange:c},{type:`text-input`,placeholder:`Search...`,value:l,onChange:u}]})},{})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const elements: AppMenuElement[] = [{
      type: 'menu',
      label: 'File',
      icon: 'FcDocument',
      items: [{
        type: 'item',
        label: 'New',
        icon: 'FcPlus',
        onClick: () => {}
      }, {
        type: 'item',
        label: 'Open...',
        icon: 'FcOpenedFolder',
        onClick: () => {}
      }, {
        type: 'divider'
      }, {
        type: 'item',
        label: 'Save',
        icon: 'FcCheckmark',
        onClick: () => {}
      }, {
        type: 'item',
        label: 'Save As...',
        onClick: () => {}
      }]
    }, {
      type: 'menu',
      label: 'Edit',
      items: [{
        type: 'item',
        label: 'Undo',
        onClick: () => {}
      }, {
        type: 'item',
        label: 'Redo',
        onClick: () => {},
        disabled: true
      }, {
        type: 'divider'
      }, {
        type: 'item',
        label: 'Cut',
        onClick: () => {}
      }, {
        type: 'item',
        label: 'Copy',
        onClick: () => {}
      }, {
        type: 'item',
        label: 'Paste',
        onClick: () => {}
      }]
    }];
    return <AppMenuBar elements={elements} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Wrapper = () => {
      const [value, setValue] = useState('Arial');
      const elements: AppMenuElement[] = [{
        type: 'combobox',
        label: 'Font',
        options: ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana'],
        value,
        onChange: setValue
      }];
      return <AppMenuBar elements={elements} />;
    };
    return <Wrapper />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Wrapper = () => {
      const [checked, setChecked] = useState(false);
      const elements: AppMenuElement[] = [{
        type: 'switch',
        label: 'Dark mode',
        checked,
        onChange: setChecked
      }];
      return <AppMenuBar elements={elements} />;
    };
    return <Wrapper />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Wrapper = () => {
      const [font, setFont] = useState('Arial');
      const [dark, setDark] = useState(false);
      const [zoom, setZoom] = useState(100);
      const [search, setSearch] = useState('');
      const elements: AppMenuElement[] = [{
        type: 'menu',
        label: 'File',
        items: [{
          type: 'item',
          label: 'New',
          onClick: () => {}
        }, {
          type: 'item',
          label: 'Open',
          onClick: () => {}
        }, {
          type: 'divider'
        }, {
          type: 'item',
          label: 'Exit',
          onClick: () => {}
        }]
      }, {
        type: 'combobox',
        label: 'Font',
        options: ['Arial', 'Helvetica', 'Courier'],
        value: font,
        onChange: setFont
      }, {
        type: 'switch',
        label: 'Dark',
        checked: dark,
        onChange: setDark
      }, {
        type: 'slider',
        label: 'Zoom',
        min: 50,
        max: 200,
        value: zoom,
        onChange: setZoom
      }, {
        type: 'text-input',
        placeholder: 'Search...',
        value: search,
        onChange: setSearch
      }];
      return <AppMenuBar elements={elements} />;
    };
    return <Wrapper />;
  }
}`,...f.parameters?.docs?.source}}},p=[`WithMenus`,`WithCombobox`,`WithSwitch`,`AllTypes`]}))();export{f as AllTypes,u as WithCombobox,l as WithMenus,d as WithSwitch,p as __namedExportsOrder,c as default};
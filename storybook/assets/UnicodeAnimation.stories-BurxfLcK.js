import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{Dt as n,Et as r}from"./iframe-CpxgCcgs.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),a={title:`Shared/UnicodeAnimation`,component:r,parameters:{layout:`centered`},argTypes:{name:{control:`select`,options:[`braille`,`braillewave`,`dna`,`scan`,`rain`,`scanline`,`pulse`,`snake`,`sparkle`,`cascade`,`columns`,`orbit`,`breathe`,`waverows`,`checkerboard`,`helix`,`fillsweep`,`diagswipe`],description:`Spinner animation name from unicode-animations`},style:{control:`object`,description:`Inline styles (merged with monospace font)`},className:{control:`text`,description:`CSS class name`}}},o={args:{name:`braille`}},s={args:{name:`dna`}},c={args:{name:`pulse`}},l={args:{name:`rain`}},u={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`24px`,fontFamily:`monospace`},children:[`braille`,`braillewave`,`dna`,`scan`,`rain`,`scanline`,`pulse`,`snake`,`sparkle`,`cascade`,`columns`,`orbit`,`breathe`,`waverows`,`checkerboard`,`helix`,`fillsweep`,`diagswipe`].map(e=>(0,i.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,i.jsx)(r,{name:e}),(0,i.jsx)(`div`,{style:{fontSize:`10px`,marginTop:`4px`,color:`#888`},children:e})]},e))})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'braille'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'dna'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pulse'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'rain'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    fontFamily: 'monospace'
  }}>
      {(['braille', 'braillewave', 'dna', 'scan', 'rain', 'scanline', 'pulse', 'snake', 'sparkle', 'cascade', 'columns', 'orbit', 'breathe', 'waverows', 'checkerboard', 'helix', 'fillsweep', 'diagswipe'] as const).map(name => <div key={name} style={{
      textAlign: 'center'
    }}>
          <UnicodeAnimation name={name} />
          <div style={{
        fontSize: '10px',
        marginTop: '4px',
        color: '#888'
      }}>{name}</div>
        </div>)}
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Braille`,`DNA`,`Pulse`,`Rain`,`AllSpinners`]}))();export{u as AllSpinners,o as Braille,s as DNA,c as Pulse,l as Rain,d as __namedExportsOrder,a as default};
import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-DEAHbL4P.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{n as i,t as a}from"./ChatWindow-BYAlAiQ9.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{o=t(n()),i(),s=r(),c={title:`Common components/ChatWindow`,component:a,parameters:{layout:`centered`},argTypes:{onSend:{action:`send`},onRetry:{action:`retry`},onAttachmentClick:{action:`attachmentClick`},showTimestamps:{control:`boolean`},showAvatars:{control:`boolean`},showSenderName:{control:`boolean`},disabled:{control:`boolean`},allowAttachments:{control:`boolean`},loading:{control:`boolean`}}},l=[{id:`1`,content:`Hello! How can I help you today?`,sender:`other`,senderName:`Assistant`,timestamp:new Date(Date.now()-6e4)},{id:`2`,content:`I need help with the chat component`,sender:`user`,timestamp:new Date(Date.now()-3e4)},{id:`3`,content:`Sure! Let me explain how it works...`,sender:`other`,senderName:`Assistant`,timestamp:new Date}],u={args:{messages:l,showTimestamps:!0,showAvatars:!0,showSenderName:!0,placeholder:`Type a message...`}},d={args:{messages:[],emptyMessage:`No messages yet. Start a conversation!`,placeholder:`Type a message...`}},f={args:{messages:[{id:`1`,content:`Hey there!`,sender:`other`,senderName:`Alice`,avatarUrl:`https://i.pravatar.cc/150?img=1`,timestamp:new Date},{id:`2`,content:`Hi Alice!`,sender:`user`,avatarUrl:`https://i.pravatar.cc/150?img=2`,timestamp:new Date}],showAvatars:!0,showSenderName:!0}},p={args:{messages:l,typingText:`Alice is typing...`,typingAvatarUrl:`https://i.pravatar.cc/150?img=2`,showAvatars:!0,showSenderName:!0}},m={args:{messages:[{id:`1`,content:`Here are the files you requested`,sender:`user`,timestamp:new Date,attachments:[{id:`att-1`,type:`image`,name:`screenshot.png`,url:`https://picsum.photos/200/150`,mimeType:`image/png`},{id:`att-2`,type:`file`,name:`document.pdf`,url:`#`,size:245678,mimeType:`application/pdf`}]},{id:`2`,content:`Thanks! I'll review them.`,sender:`other`,senderName:`Bot`,timestamp:new Date}],allowAttachments:!0,showAvatars:!0,showSenderName:!0}},h={args:{messages:[{id:`1`,content:`Hello`,sender:`other`,senderName:`Bot`,timestamp:new Date},{id:`2`,content:`This failed to send`,sender:`user`,status:`error`,errorMessage:`Network error. Click to retry.`,timestamp:new Date},{id:`3`,content:`This is pending...`,sender:`user`,status:`pending`,timestamp:new Date}],showAvatars:!0,showSenderName:!0}},g={args:{messages:[],loading:!0,loadingMessage:`Loading conversation...`}},_={args:{messages:l,error:`Connection lost. Messages may not be sent.`,showAvatars:!0,showSenderName:!0}},v={args:{messages:[],allowAttachments:!0,acceptedFileTypes:[`image/*`,`application/pdf`],maxAttachmentSize:5*1024*1024,placeholder:`Type a message or attach files...`}},y=()=>{let[e,t]=(0,o.useState)([]),[n,r]=(0,o.useState)();return(0,s.jsx)(a,{messages:e,onSend:async e=>{let n={id:Date.now().toString(),content:e,sender:`user`,timestamp:new Date};t(e=>[...e,n]),r(`Bot is typing...`),setTimeout(()=>{r(void 0);let n={id:(Date.now()+1).toString(),content:`You said: "${e}"`,sender:`other`,senderName:`Bot`,timestamp:new Date};t(e=>[...e,n])},1500)},typingText:n,showAvatars:!0,showSenderName:!0,placeholder:`Type a message...`})},b={render:()=>(0,s.jsx)(y,{})},x={args:{messages:[{id:`1`,content:`You find yourself at a crossroads. The path splits in three directions.`,sender:`other`,senderName:`Narrator`,timestamp:new Date(Date.now()-5e3)},{id:`2`,content:`To the north, you see smoke rising from a distant village.`,sender:`other`,senderName:`Narrator`,timestamp:new Date(Date.now()-4e3)},{id:`3`,content:`To the east, a dark forest looms. To the west, the sound of running water.`,sender:`other`,senderName:`Narrator`,timestamp:new Date}],mode:`story`,storyChoices:[{id:`choice-1`,text:`Go north towards the village`,disabled:!1},{id:`choice-2`,text:`Enter the dark forest`,disabled:!1},{id:`choice-3`,text:`Follow the sound of water`,disabled:!1}],onStoryChoice:e=>console.log(`Choice selected:`,e),canContinueStory:!1,showAvatars:!0,showSenderName:!0}},S={args:{messages:[{id:`1`,content:`The mysterious figure nods slowly.`,sender:`other`,senderName:`Narrator`,timestamp:new Date}],mode:`story`,storyChoices:[],canContinueStory:!0,onStoryContinue:()=>console.log(`Continue pressed`),showAvatars:!0,showSenderName:!0}},C=()=>{let[e,t]=(0,o.useState)(null);return(0,s.jsx)(a,{messages:[{id:`1`,content:`What would you like to do next?`,sender:`other`,senderName:`Game Master`,timestamp:new Date}],onSend:()=>{},actionButtons:[{id:`hunt`,label:`Hunt for food`,color:`red`,onClick:()=>t(`hunt`)},{id:`think`,label:`Think carefully`,color:`blue`,onClick:()=>t(`think`)},{id:`plan`,label:`Plan your next move`,color:`green`,onClick:()=>t(`plan`)},{id:`wait`,label:`Wait and observe`,color:`gray`,onClick:()=>t(`wait`)}],showAvatars:!0,showSenderName:!0,placeholder:``})},w={render:()=>(0,s.jsx)(C,{})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    showTimestamps: true,
    showAvatars: true,
    showSenderName: true,
    placeholder: 'Type a message...'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [],
    emptyMessage: 'No messages yet. Start a conversation!',
    placeholder: 'Type a message...'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: '1',
      content: 'Hey there!',
      sender: 'other',
      senderName: 'Alice',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      timestamp: new Date()
    }, {
      id: '2',
      content: 'Hi Alice!',
      sender: 'user',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      timestamp: new Date()
    }],
    showAvatars: true,
    showSenderName: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    typingText: 'Alice is typing...',
    typingAvatarUrl: 'https://i.pravatar.cc/150?img=2',
    showAvatars: true,
    showSenderName: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: '1',
      content: 'Here are the files you requested',
      sender: 'user',
      timestamp: new Date(),
      attachments: [{
        id: 'att-1',
        type: 'image',
        name: 'screenshot.png',
        url: 'https://picsum.photos/200/150',
        mimeType: 'image/png'
      }, {
        id: 'att-2',
        type: 'file',
        name: 'document.pdf',
        url: '#',
        size: 245678,
        mimeType: 'application/pdf'
      }]
    }, {
      id: '2',
      content: "Thanks! I'll review them.",
      sender: 'other',
      senderName: 'Bot',
      timestamp: new Date()
    }],
    allowAttachments: true,
    showAvatars: true,
    showSenderName: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: '1',
      content: 'Hello',
      sender: 'other',
      senderName: 'Bot',
      timestamp: new Date()
    }, {
      id: '2',
      content: 'This failed to send',
      sender: 'user',
      status: 'error',
      errorMessage: 'Network error. Click to retry.',
      timestamp: new Date()
    }, {
      id: '3',
      content: 'This is pending...',
      sender: 'user',
      status: 'pending',
      timestamp: new Date()
    }],
    showAvatars: true,
    showSenderName: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [],
    loading: true,
    loadingMessage: 'Loading conversation...'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    error: 'Connection lost. Messages may not be sent.',
    showAvatars: true,
    showSenderName: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [],
    allowAttachments: true,
    acceptedFileTypes: ['image/*', 'application/pdf'],
    maxAttachmentSize: 5 * 1024 * 1024,
    placeholder: 'Type a message or attach files...'
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveChat />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: '1',
      content: 'You find yourself at a crossroads. The path splits in three directions.',
      sender: 'other',
      senderName: 'Narrator',
      timestamp: new Date(Date.now() - 5000)
    }, {
      id: '2',
      content: 'To the north, you see smoke rising from a distant village.',
      sender: 'other',
      senderName: 'Narrator',
      timestamp: new Date(Date.now() - 4000)
    }, {
      id: '3',
      content: 'To the east, a dark forest looms. To the west, the sound of running water.',
      sender: 'other',
      senderName: 'Narrator',
      timestamp: new Date()
    }],
    mode: 'story',
    storyChoices: [{
      id: 'choice-1',
      text: 'Go north towards the village',
      disabled: false
    }, {
      id: 'choice-2',
      text: 'Enter the dark forest',
      disabled: false
    }, {
      id: 'choice-3',
      text: 'Follow the sound of water',
      disabled: false
    }],
    onStoryChoice: (choiceId: string) => console.log('Choice selected:', choiceId),
    canContinueStory: false,
    showAvatars: true,
    showSenderName: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: '1',
      content: 'The mysterious figure nods slowly.',
      sender: 'other',
      senderName: 'Narrator',
      timestamp: new Date()
    }],
    mode: 'story',
    storyChoices: [],
    canContinueStory: true,
    onStoryContinue: () => console.log('Continue pressed'),
    showAvatars: true,
    showSenderName: true
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ActionButtonsExample />
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Empty`,`WithAvatars`,`WithTypingIndicator`,`WithAttachments`,`WithError`,`Loading`,`GlobalError`,`WithAttachmentInput`,`Interactive`,`StoryMode`,`StoryModeContinue`,`WithActionButtons`]}))();export{u as Default,d as Empty,_ as GlobalError,b as Interactive,g as Loading,x as StoryMode,S as StoryModeContinue,w as WithActionButtons,v as WithAttachmentInput,m as WithAttachments,f as WithAvatars,h as WithError,p as WithTypingIndicator,T as __namedExportsOrder,c as default};
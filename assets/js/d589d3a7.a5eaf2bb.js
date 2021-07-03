(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,p=e.groupId,m=e.className,h=(0,r.Z)(),g=h.tabGroupChoices,k=h.setTabGroupChoices,b=(0,a.useState)(c),f=b[0],v=b[1],y=a.Children.toArray(e.children),N=[];if(null!=p){var T=g[p];null!=T&&T!==f&&d.some((function(e){return e.value===T}))&&v(T)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),a=d[n].value;v(a),null!=p&&(k(p,a),setTimeout((function(){var e,n,a,r,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case l:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},601:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(1395),s=n(8215),l={sidebar_position:2},u={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The QuizGen API allows a fast and flexible way to integrate AI generated quizzes into your existing application with minimal friction. Quiz generation can be done with multiple types of source contents, including YouTube videos and web article links. A full list of supported Source Types are listed in this table",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/docs/getting-started",editUrl:"https://github.com/QatapultAI/docs/edit/master/website/docs/getting-started.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/docs/docs/intro"},next:{title:"Receiving Quizzes",permalink:"/docs/docs/receiving-quizzes"}},c=[{value:"Using the API",id:"using-the-api",children:[]},{value:"Receiving the Quiz",id:"receiving-the-quiz",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The QuizGen API allows a fast and flexible way to integrate AI generated quizzes into your existing application with minimal friction. Quiz generation can be done with multiple types of source contents, including YouTube videos and web article links. A full list of supported Source Types are listed in this table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Support Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Article Links"),(0,i.kt)("td",{parentName:"tr",align:null},"Links wth static content supported (","[more info]","(./Source Types.md/#Text))")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"YouTube"),(0,i.kt)("td",{parentName:"tr",align:null},"Videos with clear voice audio and/or closed captions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Files"),(0,i.kt)("td",{parentName:"tr",align:null},"Files up to 1GB supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"All types of raw text is supported, structured content preferred")))),(0,i.kt)("h2",{id:"using-the-api"},"Using the API"),(0,i.kt)("p",null,"All quiz generation endpoints follow the same pattern:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Send a request"),(0,i.kt)("li",{parentName:"ul"},"Get a response confirming the status of your generation request or a failure to start the generation"),(0,i.kt)("li",{parentName:"ul"},"Receive an event on your webhook after your quiz is generated"),(0,i.kt)("li",{parentName:"ul"},"Send a response to the event confirming that you've received the quiz")),(0,i.kt)("p",null,"To be able to send a request for generation, you first need to obtain an access token, which is availble in your dashboard. You must attach this access token in all your requests using the bearer token format."),(0,i.kt)(o.Z,{groupId:"one",defaultValue:"curl",values:[{label:"curl",value:"curl"},{label:"fetch",value:"fetch"},{label:"axios",value:"axios"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\\n  --url https://api.qaapi.io/v1/generate/text \\\n  --header 'Authorization: Bearer *access_token_here*' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n    \"text\": \"*your_source_content*\", etc...\n}'\n"))),(0,i.kt)(s.Z,{value:"fetch",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'fetch("https://api.qaapi.io/v1/generate/text", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json",\n    Authorization: `Bearer ${access_token}`,\n  },\n  body: JSON.stringify({\n    source: "YOUTUBE",\n    vid: "12345678910",\n    numQuestions: 10,\n  }),\n})\n  .then((response) => response.json())\n  .then((response) => {\n    console.log(response);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n'))),(0,i.kt)(s.Z,{value:"axios",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"axios --request POST \\\n  --url https://api.qaapi.io/v1/generate/text \\\n  --header 'Authorization: Bearer *access_token_here*' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n    \"text\": \"*your_source_content*\", etc...\n}'\n")))),(0,i.kt)("h2",{id:"receiving-the-quiz"},"Receiving the Quiz"),(0,i.kt)("p",null,"To receive the quiz when when it's done, you need to set up a webhook on your ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard"),". If you're testing the integration locally, we recommend using a ",(0,i.kt)("a",{parentName:"p",href:"https://ngrok.com"},"ngrok"),", a tool that gives you a publicly available URL that tunnels traffic to your local server. You can also use ",(0,i.kt)("a",{parentName:"p",href:"https://glitch.com"},"glitch")," for quick prototyping. Once you've setup your webhook with a public URL, you're ready to receive your quizzes!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important"),": Make sure to send a response as soon as you receive a request on your webhook. Ideally, you should send a response immediately before doing any other server-side logic. Here's a quick example."))}p.isMDXComponent=!0}}]);
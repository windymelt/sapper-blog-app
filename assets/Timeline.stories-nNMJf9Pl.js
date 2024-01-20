import{s as j,e as v,o as h,t as x,c as C,g as D,z as I,q as k,p as b,d as y,a as c,i as N,m as i,v as J}from"./lifecycle-t8zHgh76.js";import{S as q,i as z,c as O,b as U,m as G,t as Q,a as V,d as W}from"./index-8gpSowaI.js";import{T as X}from"./Time-qvSohMQA.js";function Y(s){let u,a,E="",d,r,p,m,e,_,F,l,S,g,f,A,o;return e=new X({props:{date:s[1]}}),{c(){u=v("li"),a=v("span"),a.innerHTML=E,d=h(),r=v("h3"),p=x(s[0]),m=h(),O(e.$$.fragment),_=h(),F=v("p"),l=v("a"),S=x(s[3]),g=h(),f=v("p"),A=x(s[2]),this.h()},l(n){u=C(n,"LI",{class:!0});var t=D(u);a=C(t,"SPAN",{class:!0,"data-svelte-h":!0}),I(a)!=="svelte-1ok84mf"&&(a.innerHTML=E),d=k(t),r=C(t,"H3",{class:!0});var B=D(r);p=b(B,s[0]),B.forEach(y),m=k(t),U(e.$$.fragment,t),_=k(t),F=C(t,"P",{class:!0});var L=D(F);l=C(L,"A",{class:!0,href:!0});var w=D(l);S=b(w,s[3]),w.forEach(y),L.forEach(y),g=k(t),f=C(t,"P",{class:!0});var P=D(f);A=b(P,s[2]),P.forEach(y),t.forEach(y),this.h()},h(){c(a,"class","ring-3 absolute -start-1.5 mt-2 flex h-3 w-3 items-center justify-center rounded-full bg-indigo-700 ring-white dark:ring-gray-900"),c(r,"class","mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white"),c(l,"class","no-underline hover:underline"),c(l,"href",s[4]),c(F,"class","mt-2 text-lg font-bold text-indigo-700 dark:text-indigo-400"),c(f,"class","my-2 text-sm font-normal text-gray-500 dark:text-gray-400"),c(u,"class","mb-10 ms-6")},m(n,t){N(n,u,t),i(u,a),i(u,d),i(u,r),i(r,p),i(u,m),G(e,u,null),i(u,_),i(u,F),i(F,l),i(l,S),i(u,g),i(u,f),i(f,A),o=!0},p(n,[t]){(!o||t&1)&&J(p,n[0]);const B={};t&2&&(B.date=n[1]),e.$set(B),(!o||t&8)&&J(S,n[3]),(!o||t&16)&&c(l,"href",n[4]),(!o||t&4)&&J(A,n[2])},i(n){o||(Q(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){n&&y(u),W(e)}}}function Z(s,u,a){let{eventTitle:E}=u,{eventDate:d}=u,{description:r}=u,{presentationTitle:p}=u,{presentationLink:m}=u;return s.$$set=e=>{"eventTitle"in e&&a(0,E=e.eventTitle),"eventDate"in e&&a(1,d=e.eventDate),"description"in e&&a(2,r=e.description),"presentationTitle"in e&&a(3,p=e.presentationTitle),"presentationLink"in e&&a(4,m=e.presentationLink)},[E,d,r,p,m]}class K extends q{constructor(u){super(),z(this,u,Z,Y,j,{eventTitle:0,eventDate:1,description:2,presentationTitle:3,presentationLink:4})}}K.__docgen={version:3,name:"Timeline.svelte",data:[{visibility:"public",description:null,keywords:[],name:"eventTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"eventDate",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"description",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"presentationTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"presentationLink",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const tu={title:"Timline",component:K,tags:["autodocs"],argTypes:{eventTitle:{control:{type:"text"},describe:"登壇したイベント名"},eventDate:{control:{type:"text"},describe:"登壇したイベントの日付"},presentationTitle:{control:{type:"text"},describe:"登壇資料のタイトル"},presentationLink:{control:{type:"text"},describe:"登壇資料のURL"},description:{control:{type:"text"},describe:"発表内容の概要"}}},T={args:{eventTitle:"JSConf JP 2023",eventDate:"2023-11-19",presentationTitle:"JavaScript なしで動作するモダンなコードの書き方",presentationLink:"https://example.com/",description:"Next.js、Remix、SvelteKit といった近年のフレームワークは、JavaScript がなくても動作することを一つの価値として提供しています。例えばSvelteKit のフォームではプログレッシブエンハンスメントとして、JavaScript が利用できる環境ではリッチなユーザー体験を提供しつつ、JavaScript が使えない環境においては HTML のフォームとして振る舞うことでアプリケーションの機能を変わらず提供できます。 React Server Component はサーバー側で HTML に変換されるため、クライアントに JavaScript のコードが配信されることはありません。React Server Component では useState() を使用できないといった制約がありますので、我々開発者は React Server Component の利点を十分に発揮するために、JavaScript を用いた状態管理を行う範囲を狭めることが求められています。このトークでは、CSS の :has() セレクターや、Popover API といった、従来は JavaScript を用いなければ提供できなかった機能を代替する方法を紹介します。"}};var R,H,M;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    eventTitle: "JSConf JP 2023",
    eventDate: "2023-11-19",
    presentationTitle: "JavaScript なしで動作するモダンなコードの書き方",
    presentationLink: "https://example.com/",
    description: "Next.js、Remix、SvelteKit といった近年のフレームワークは、JavaScript がなくても動作することを一つの価値として提供しています。例えばSvelteKit のフォームではプログレッシブエンハンスメントとして、JavaScript が利用できる環境ではリッチなユーザー体験を提供しつつ、JavaScript が使えない環境においては HTML のフォームとして振る舞うことでアプリケーションの機能を変わらず提供できます。 React Server Component はサーバー側で HTML に変換されるため、クライアントに JavaScript のコードが配信されることはありません。React Server Component では useState() を使用できないといった制約がありますので、我々開発者は React Server Component の利点を十分に発揮するために、JavaScript を用いた状態管理を行う範囲を狭めることが求められています。このトークでは、CSS の :has() セレクターや、Popover API といった、従来は JavaScript を用いなければ提供できなかった機能を代替する方法を紹介します。"
  }
}`,...(M=(H=T.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const nu=["Default"];export{T as Default,nu as __namedExportsOrder,tu as default};
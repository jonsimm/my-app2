(this["webpackJsonpmy-app2"]=this["webpackJsonpmy-app2"]||[]).push([[0],{23:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r,i,a,c,s,o,u,l,p,b,j,v,d,h,O=n(0),f=n.n(O),y=n(12),m=n.n(y),g=n(2),x=(n(23),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))}),w=n(6),E=n(7),S=n(8),T=n(3),k=(n(16),n(5)),D=n.n(k),C=n(10),V=function(){function e(t){Object(S.a)(this,e),this.baseUrl=t}return Object(E.a)(e,[{key:"getCollectionUrl",value:function(){return this.baseUrl+"/events"}},{key:"getElementUrl",value:function(e){return this.baseUrl+"/events/"+encodeURIComponent(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={method:e},r={};return"PUT"!==e&&"POST"!==e||(r["Content-Type"]="application/json"),Object.getOwnPropertyNames(r).length>0&&(n.headers=r),null!==t&&(n.body=JSON.stringify(t)),n}},{key:"allEvents",value:function(){var e=Object(C.a)(D.a.mark((function e(){var t,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.getCollectionUrl());case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.events);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"appendEvent",value:function(){var e=Object(C.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.getCollectionUrl(),this.getOptions("POST",t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeEvent",value:function(){var e=Object(C.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.getElementUrl(t),this.getOptions("DELETE"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),A=n(17),N=n(9),P=(r=g.f.bound,i=g.f.bound,a=g.f.bound,c=function(){function e(t,n){Object(S.a)(this,e),this.eventSvc=n,Object(w.a)(this,"appStore",s,this),Object(w.a)(this,"events",o,this),Object(g.m)(this),this.appStore=t}return Object(E.a)(e,[{key:"refreshEvents",value:function(){var e=Object(C.a)(D.a.mark((function e(){var t,n=this;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.eventSvc.allEvents();case 2:t=e.sent,Object(g.o)((function(){n.events=t}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addEvent",value:function(e){this.events.push(Object(N.a)(Object(N.a)({},e),{},{id:Math.max.apply(Math,Object(A.a)(this.events.map((function(e){return e.id}))).concat([0]))+1})),this.eventSvc.appendEvent(e)}},{key:"deleteEvent",value:function(e){this.events.splice(this.events.findIndex((function(t){return t.id===e})),1),this.eventSvc.removeEvent(e)}}]),e}(),s=Object(T.a)(c.prototype,"appStore",[g.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=Object(T.a)(c.prototype,"events",[g.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(T.a)(c.prototype,"refreshEvents",[r],Object.getOwnPropertyDescriptor(c.prototype,"refreshEvents"),c.prototype),Object(T.a)(c.prototype,"addEvent",[i],Object.getOwnPropertyDescriptor(c.prototype,"addEvent"),c.prototype),Object(T.a)(c.prototype,"deleteEvent",[a],Object.getOwnPropertyDescriptor(c.prototype,"deleteEvent"),c.prototype),c),F=(u=g.f.bound,l=g.f.bound,p=function(){function e(t){Object(S.a)(this,e),Object(w.a)(this,"appStore",b,this),Object(w.a)(this,"currentViewType",j,this),Object(g.m)(this),this.appStore=t,this.currentViewType="agenda"}return Object(E.a)(e,[{key:"changeViewType",value:function(e){this.currentViewType=e}},{key:"addEvent",value:function(e){this.appStore.eventStore.addEvent(e)}}]),e}(),b=Object(T.a)(p.prototype,"appStore",[g.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=Object(T.a)(p.prototype,"currentViewType",[g.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(T.a)(p.prototype,"changeViewType",[u],Object.getOwnPropertyDescriptor(p.prototype,"changeViewType"),p.prototype),Object(T.a)(p.prototype,"addEvent",[l],Object.getOwnPropertyDescriptor(p.prototype,"addEvent"),p.prototype),p),U=(v=Object(E.a)((function e(){Object(S.a)(this,e),Object(w.a)(this,"eventStore",d,this),Object(w.a)(this,"viewStore",h,this),Object(g.m)(this),this.eventStore=new P(this,new V("/api")),this.viewStore=new F(this)})),d=Object(T.a)(v.prototype,"eventStore",[g.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=Object(T.a)(v.prototype,"viewStore",[g.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v),z=n(4),I=n(1),J=Object(z.a)((function(e){return Object(I.jsxs)("div",{children:[Object(I.jsxs)("h1",{children:["View Header - ",e.store.viewStore.currentViewType]}),Object(I.jsxs)("div",{onChange:function(t){return e.store.viewStore.changeViewType(t.target.value)},children:[Object(I.jsx)("input",{type:"radio",name:"viewType",checked:"agenda"===e.store.viewStore.currentViewType,value:"agenda"}),"Agenda",Object(I.jsx)("input",{type:"radio",name:"viewType",checked:"day"===e.store.viewStore.currentViewType,value:"day"}),"Day"]})]})})),L=Object(z.a)((function(e){var t=e.events,n=e.keyFn,r=e.contentFn;return Object(I.jsx)("ul",{children:t.map((function(e){return Object(I.jsx)("li",{children:r(e)},n(e))}))})})),M=Object(z.a)((function(e){var t=e.store;return Object(I.jsx)(L,{events:t.eventStore.events.slice(),keyFn:function(e){return e.id},contentFn:function(e){return e.description}})})),B=n(14),G=n(18),H=function(e){var t=Object(O.useState)({startDateTime:"",endDateTime:"",timeOfDay:0,dayOfWeek:0,description:"",student:""}),n=Object(G.a)(t,2),r=n[0],i=n[1],a=function(e){i(Object(N.a)(Object(N.a)({},r),{},Object(B.a)({},e.target.name,"number"===e.target.type?Number(e.target.value):e.target.value)))};return Object(I.jsxs)("form",{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Description"}),Object(I.jsx)("input",{type:"text",name:"description",value:r.description,onChange:a})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Start Time"}),Object(I.jsx)("input",{type:"datetime-local",name:"startDateTime",value:r.startDateTime,onChange:a})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"End Time"}),Object(I.jsx)("input",{type:"datetime-local",name:"endDateTime",value:r.endDateTime,onChange:a})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Student"}),Object(I.jsx)("input",{type:"text",name:"student",value:r.student,onChange:a})]}),Object(I.jsx)("button",{type:"button",onClick:function(){e.onSubmitEvent(Object(N.a)({},r))},children:"Add Event"})]})},R=(n(27),Object(z.a)((function(e){var t=e.event,n=e.onDeleteEvent,r=function(e){return new Date(e).toTimeString()};return Object(I.jsxs)("div",{className:"AgendaEvent-frame",children:[Object(I.jsx)("div",{className:"AgendaEvent-description",children:t.description}),Object(I.jsx)("div",{className:"AgendaEvent-student",children:t.student}),Object(I.jsx)("button",{className:"AgendaEvent-button",onClick:function(){n(t.id)},children:"X"}),Object(I.jsx)("div",{className:"AgendaEvent-label",children:"Start:"}),Object(I.jsx)("div",{className:"AgendaEvent-time",children:r(t.startDateTime)}),Object(I.jsx)("div",{className:"AgendaEvent-label",children:"End:"}),Object(I.jsx)("div",{className:"AgendaEvent-time",children:r(t.endDateTime)})]},t.id)}))),W=Object(z.a)((function(e){var t=e.store;return Object(I.jsx)("div",{children:t.eventStore.events.map((function(e){return Object(I.jsx)(R,{event:e,onDeleteEvent:t.eventStore.deleteEvent})}))})})),X=Object(z.a)((function(e){return Object(O.useEffect)((function(){e.store.eventStore.refreshEvents()}),[e.store]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(J,{store:e.store}),Object(I.jsx)(I.Fragment,{children:"agenda"===e.store.viewStore.currentViewType?Object(I.jsx)(W,{store:e.store}):Object(I.jsx)(M,{store:e.store})}),Object(I.jsx)(H,{onSubmitEvent:e.store.viewStore.addEvent})]})}));Object(g.g)({enforceActions:"always"});var q=new U;m.a.render(Object(I.jsx)(f.a.StrictMode,{children:Object(I.jsx)(X,{store:q})}),document.getElementById("root")),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.7da25e4f.chunk.js.map
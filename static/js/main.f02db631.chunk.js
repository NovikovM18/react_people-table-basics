(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c.n(n),a=c(5),l=c(6),r=c(0),j=c(2),b=(c(16),c(4)),o=c(11),i=c(9),h=c.n(i),p=function(){var e=Object(o.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate-academy.github.io/react_people-table/api/people.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),u=(c(18),c(19),c(1)),d=function(e){var t=e.person;return Object(u.jsxs)("tr",{className:"Person",children:[Object(u.jsx)("td",{className:"Person__cell",children:t.name}),Object(u.jsx)("td",{className:"Person__cell",children:t.sex}),Object(u.jsx)("td",{className:"Person__cell",children:t.born}),Object(u.jsx)("td",{className:"Person__cell",children:t.died}),Object(u.jsx)("td",{className:"Person__cell",children:t.motherName}),Object(u.jsx)("td",{className:"Person__cell",children:t.fatherName})]})},O=function(e){var t=e.people;return Object(u.jsxs)("table",{className:"PeopleTable",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"PeopleTable__header",children:[Object(u.jsx)("th",{className:"PeopleTable__cell",children:"Name"}),Object(u.jsx)("th",{className:"PeopleTable__cell",children:"Sex"}),Object(u.jsx)("th",{className:"PeopleTable__cell",children:"Born"}),Object(u.jsx)("th",{className:"PeopleTable__cell",children:"Died"}),Object(u.jsx)("th",{className:"PeopleTable__cell",children:"Mother's name"}),Object(u.jsx)("th",{className:"PeopleTable__cell",children:"Father's name"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsx)(d,{person:e},e.slug)}))})]})},m=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(!0),a=Object(b.a)(s,2),j=a[0],o=a[1];return Object(r.useEffect)((function(){p().then((function(e){return function(e){return e.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName}))||null,father:e.find((function(e){return e.name===t.fatherName}))||null})}))}(e)})).then((function(e){n(e),o(!1)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"People table"}),j?Object(u.jsx)("p",{children:"is Loading"}):Object(u.jsx)(O,{people:c})]})},x=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsxs)("nav",{children:[Object(u.jsx)(a.b,{to:"/",className:"nav-link",children:"Home"}),Object(u.jsx)(a.b,{to:"/people",className:"nav-link",children:"People"})]})}),Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{path:"/",element:Object(u.jsx)("h1",{children:"Home page"})}),Object(u.jsx)(j.b,{path:"/people",element:Object(u.jsx)(m,{})}),Object(u.jsx)(j.b,{path:"/home",element:Object(u.jsx)(j.a,{to:"/",replace:!0})}),Object(u.jsx)(j.b,Object(l.a)({},Object(u.jsx)("p",{children:"Page Not Found"})))]})]})};s.a.render(Object(u.jsx)(a.a,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f02db631.chunk.js.map
(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(7),u=a(5),o=a(6),s=a(1),m=(a(15),a(3));var f=function(){return Object(n.useEffect)((function(){var e,t=document.getElementsByClassName("toast"),a=Object(m.a)(t);try{var n=function(){var t=e.value;setTimeout((function(){return t.classList.add("transition")}),0),setTimeout((function(){return t.classList.add("hide")}),1e3)};for(a.s();!(e=a.n()).done;)n()}catch(r){a.e(r)}finally{a.f()}})),r.a.createElement("div",{id:"toast",className:"toast"},"Thank you for your submission! We've updated your profile!")};var d=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],i=function(t){e.inputUpdate(t.target.name,t.target.value)},u=function(e){e.preventDefault(),o()},o=function(){l(!c)},m=function(e){switch(e){case"phone":return"tel";case"email":return"email";default:return"text"}},d=Object.entries(e.fields);return!1===c?function(t){var a=t.map((function(e){return r.a.createElement("label",{key:e[0],className:"data"},function(e){switch(e){case"email":return"Email address";case"phone":return"Phone number";default:return"Name"}}(e[0]),r.a.createElement("input",{type:m(e[0]),name:e[0],onChange:i,value:e[1],required:!0}))}));return r.a.createElement("form",{className:"container",onSubmit:u},r.a.createElement("h2",null,e.fieldName[0].toUpperCase()+e.fieldName.substring(1)),r.a.createElement("div",{className:"form"},a),r.a.createElement("div",{className:"button-container"},r.a.createElement("input",{type:"submit"})))}(d):function(t){var a=t.map((function(e){return r.a.createElement("div",{key:e[0]},r.a.createElement("h3",null,e[0][0].toUpperCase()+e[0].substring(1)),r.a.createElement("p",null,e[1]))}));return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,e.fieldName[0].toUpperCase()+e.fieldName.substring(1)),r.a.createElement("div",{className:"display"},a),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:o},"Edit")),r.a.createElement(f,null))}(d)};var p=function(e){var t,a=Object(n.useState)(!1),c=Object(s.a)(a,2),l=c[0],i=c[1],u=function(){i(!l)},o=function(t){t.preventDefault(),e.removeEntry(t.target.name,Number(t.target.value))},d=function(t){e.complexInputUpdate(e.fieldName,Number(t.target.getAttribute("data-index")),t.target.name,t.target.value)},p=[],v=[],E=Object(m.a)(e.fields);try{for(E.s();!(t=E.n()).done;){var b=t.value;v.push(Object.entries(b))}}catch(x){E.e(x)}finally{E.f()}if(!1===l){var y,N=Object(m.a)(v.entries());try{var h=function(){var t=Object(s.a)(y.value,2),a=t[0],n=t[1].map((function(e){return r.a.createElement("label",{key:e[0],className:"data"},e[0],function(e,t,a){return e.includes("Tasks")?r.a.createElement("textarea",{onChange:d,name:e,"data-index":a,value:t}):r.a.createElement("input",{onChange:d,type:e.includes("date")?"date":"text",name:e,"data-index":a,value:t})}(e[0],e[1],a))}));p.push(r.a.createElement("div",{className:"form",key:a},n,r.a.createElement("button",{onClick:o,value:a,name:e.fieldName},"x")))};for(N.s();!(y=N.n()).done;)h()}catch(x){N.e(x)}finally{N.f()}}else{var O,j=Object(m.a)(v.entries());try{for(j.s();!(O=j.n()).done;){var g=Object(s.a)(O.value,2),k=g[0],C=g[1],S=C.map((function(e){return r.a.createElement("div",{key:e[0],className:"Tasks"===e[0]?"tasks":""},r.a.createElement("h3",null,e[0]),r.a.createElement("p",null,e[1]))}));console.log(C),p.push(r.a.createElement("div",{className:"display",key:k},S))}}catch(x){j.e(x)}finally{j.f()}}return r.a.createElement("form",{className:"container"},r.a.createElement("h2",null,e.fieldName[0].toUpperCase()+e.fieldName.substring(1)),p,r.a.createElement("div",{className:"button-container"},l?"":r.a.createElement("button",{value:e.fieldName,onClick:function(t){t.preventDefault(),console.log(l),e.addEntry(t.target.value)}},"+"),l?r.a.createElement("button",{onClick:u},"Edit"):r.a.createElement("input",{type:"submit",onClick:function(e){e.preventDefault(),u()}}),l&&r.a.createElement(f,null)))};var v=function(e){var t=[{"School name":"School name","Title of study":"Title of study","Start date":"2000-01-01","End date":"2000-01-01"}],a=[{"Company name":"Company name","Position title":"Position title",Tasks:"List your main tasks in this position.","Start date":"2000-01-01","End date":"2000-01-01"}],c=Object(n.useState)({name:"Full name",phone:"Phone",email:"Email"}),l=Object(s.a)(c,2),m=l[0],f=l[1],v=Object(n.useState)(a),E=Object(s.a)(v,2),b=E[0],y=E[1],N=Object(n.useState)(t),h=Object(s.a)(N,2),O=h[0],j=h[1],g=function(e,t,a,n){console.log(e,t,a,n),"education"===e?j((function(e){return e.map((function(e,r){return r===t&&(e[a]=n),e}))})):y((function(e){return e.map((function(e,r){return r===t&&(e[a]=n),e}))}))},k=function(e){"education"===e?j((function(e){return[].concat(Object(i.a)(e),[JSON.parse(JSON.stringify(t[0]))])})):y((function(e){return[].concat(Object(i.a)(e),[JSON.parse(JSON.stringify(a[0]))])})),console.log(t,a)},C=function(e,t){if(console.log(e,t),"education"===e){var a=O.filter((function(e,a){return a!==t}));j(a)}else{var n=b.filter((function(e,a){return a!==t}));y(n)}};return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"CV Submission")),r.a.createElement(d,{inputUpdate:function(e,t){f((function(a){return Object(o.a)(Object(o.a)({},a),{},Object(u.a)({},e,t))}))},fieldName:"personal",fields:m}),r.a.createElement(p,{complexInputUpdate:g,fieldName:"education",fields:O,addEntry:k,removeEntry:C}),r.a.createElement(p,{complexInputUpdate:g,fieldName:"work",fields:b,addEntry:k,removeEntry:C}),r.a.createElement("div",{className:"fake"}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d0eb8d5f.chunk.js.map
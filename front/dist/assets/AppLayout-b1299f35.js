import{bB as _,r as d,o as l,a as i,b as e,u as o,F as h,aQ as m,n as c,t as v}from"./index-c1e26543.js";const k="/icons/burger.svg",f="/icons/x-lg.svg";const b={class:"header"},$=e("h2",{class:"header-title-first"},"Organize",-1),y=e("h2",{class:"header-title-second"},"Me",-1),C=[$,y],B=["onClick"],P=["src"],S={class:"side-panel-item-name"},A={__name:"AppLayout",setup(L){const a=_(),t=d(!1),p=d([{name:"Tasks",slug:"tasks",icon:"list-check.svg",path:"/tasks"},{name:"Habits checker",slug:"habits",icon:"journal-check.svg",path:"/habits"},{name:"Settings",slug:"settings",icon:"gear.svg",path:"/settings"}]);function r(){t.value=!t.value}function g(){t.value=!1}return(u,n)=>(l(),i("div",null,[e("header",b,[e("img",{src:k,class:"header-burger-menu",onClick:n[0]||(n[0]=s=>r())}),e("div",{class:"header-title",onClick:n[1]||(n[1]=s=>u.$router.push({path:o(a).fullPath}))},C)]),e("div",{class:c(["side-panel",{open:t.value}])},[e("img",{src:f,class:"side-panel-close-button",onClick:n[2]||(n[2]=s=>r())}),e("ul",null,[(l(!0),i(h,null,m(p.value,s=>(l(),i("li",{key:s.slug,class:c(o(a).name===s.slug?"side-panel-item selected":"side-panel-item"),onClick:x=>{u.$router.push({path:s.path}),g()}},[e("img",{class:c(o(a).name===s.slug?"side-panel-item-icon selected":"side-panel-item-icon"),src:`/icons/menu/${s.icon}`},null,10,P),e("div",S,v(s.name),1)],10,B))),128))])],2)]))}};export{A as _};

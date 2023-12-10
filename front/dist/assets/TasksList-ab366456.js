import{d as b,c as v,o as c,a as f,b as d,t as g,n as D,e as h,f as x,u,g as T,r as C,h as $,i as _,w as B,j as S}from"./index-c1e26543.js";import{d as N}from"./vuedraggable.umd-344b00da.js";import{_ as j}from"./AppLayout-b1299f35.js";const m=b("task",{state:()=>({tasks:[],loading:!0}),actions:{async loadTasks(){this.loading=!0;const i=[{id:101,assignedDate:"2023-07-30",libelle:"Learn HTML",positionInDay:1,createdDate:"2023-08-01",done:!0},{id:102,assignedDate:"2023-06-30",positionInDay:2,libelle:"Learn CSS",createdDate:"2023-07-11",done:!1},{id:103,assignedDate:"2023-07-30",positionInDay:3,libelle:"Learn JS",createdDate:"2023-07-12",done:!1}];this.tasks=i.slice().sort((a,e)=>new Date(a.assignedDate)-new Date(e.assignedDate)),this.loading=!1},toggleCheckTask(i){const a=this.tasks.find(e=>e.id===i);a.done=!a.done}}}),w="/icons/clipboard.svg";const L={class:"task"},V={class:"task-clickable"},I=["checked"],O={__name:"TaskItem",props:{task:{type:Object,required:!0}},emits:["copiedNotify"],setup(i,{emit:a}){const e=i,k=m(),l=v(()=>r(e.task.createdDate,new Date));function r(o,s){const p=new Date(o),y=(new Date(s)-p)/(1e3*60*60*24);return Math.round(y)}function t(o){const s=["#31f900","#57f900","#71f900","#96f900","#b5f900","#d3f900","#f6f900","#f9d300","#f9b100","#f98f00","#f98100","#f96900","#f95700","#f93200","#f91c00","#fb0000"];return o<1?s[0]:o>s.length?s[s.length-1]:s[o]}function n(o){navigator.clipboard.writeText(o),a("copiedNotify")}return(o,s)=>(c(),f("div",L,[d("div",{id:"task-text",class:D(e.task.done?"task-text done":"task-text")},g(e.task.libelle),3),d("div",V,[d("img",{src:w,class:"task-clickable-copy",onClick:s[0]||(s[0]=p=>n(e.task.libelle))}),l.value>0?(c(),f("div",{key:0,id:"task-clickable-late-pill",class:"task-clickable-late-pill",style:h(`background-color: ${t(l.value)}`)},g(l.value)+" "+g(l.value===1?"jour":"jours"),5)):x("",!0),d("input",{class:"task-clickable-checkbox",type:"checkbox",id:"checkbox",name:"checkbox",checked:!!e.task.done,onClick:s[1]||(s[1]=p=>u(k).toggleCheckTask(e.task.id))},null,8,I)])]))}};const M={key:0,class:"center-message-no-content"},P={key:1},z=d("div",{class:"task-list-title-date"}," Jeudi 8 juin ",-1),K={__name:"TasksList",setup(i){const a=T(),e=m(),k=C(!1);$(async()=>{e.loadTasks()});function l(r,t="info"){if(t==="error"){a.error(r,{position:"top-right",timeout:2e3,hideProgressBar:!0,closeButton:!1});return}if(t==="success"){a.success(r,{position:"top-right",timeout:2e3,hideProgressBar:!0,closeButton:!1});return}if(t==="info"){a.info(r,{position:"top-right",timeout:2e3,hideProgressBar:!0,closeButton:!1});return}}return(r,t)=>(c(),f("div",null,[_(j),d("main",null,[u(e).tasks.length===0?(c(),f("div",M," No tasks ")):(c(),f("div",P,[z,_(u(N),{modelValue:u(e).tasks,"onUpdate:modelValue":t[1]||(t[1]=n=>u(e).tasks=n),itemKey:"",onStart:t[2]||(t[2]=n=>k.value=!0),onEnd:t[3]||(t[3]=n=>k.value=!1)},{item:B(({element:n})=>[(c(),S(O,{key:n.id,task:n,onCopiedNotify:t[0]||(t[0]=o=>l("Copied!","info"))},null,8,["task"]))]),_:1},8,["modelValue"])]))])]))}};export{K as default};
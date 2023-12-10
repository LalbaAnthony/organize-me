import{d as _,o as d,a as c,b as t,t as v,n as h,u as o,r as m,k as p,g as y,c as g,h as M,l as O,i as f,w as T,j as D}from"./index-c1e26543.js";import{d as k}from"./vuedraggable.umd-344b00da.js";import{_ as H}from"./AppLayout-b1299f35.js";const u=_("habits",{state:()=>({habits:[],blankHabits:[{id:1,order:1,libelle:"Musique de playlist Motiv",isMainOfTheDay:!1,done:!1},{id:2,order:2,libelle:"Ouvrir volets, reg par fenêtre",isMainOfTheDay:!1,done:!1},{id:3,order:3,libelle:"Faire sp ((max p + L + équi) *4)",isMainOfTheDay:!1,done:!1},{id:4,order:4,libelle:"Coiff, bouton, yeux",isMainOfTheDay:!1,done:!1},{id:5,order:5,libelle:"Dts sinon jamais pech (que 3 min si bien fait)",isMainOfTheDay:!1,done:!1},{id:6,order:6,libelle:"Meditation + Memento mori (positif)",isMainOfTheDay:!1,done:!1},{id:7,order:7,libelle:"Ecrire dans métro + Chess + Podcaste",isMainOfTheDay:!1,done:!1},{id:8,order:8,libelle:"Stop Fumer, prend plaisir à te priver, pr temps",isMainOfTheDay:!1,done:!1},{id:9,order:9,libelle:"Mettre lunettes, lever yeux pr energie",isMainOfTheDay:!1,done:!1},{id:10,order:10,libelle:"Cours / Alternance (avec to-do) en tryhardant",isMainOfTheDay:!0,done:!1},{id:11,order:11,libelle:"Nouvelles au hasard (dont M, ...)",isMainOfTheDay:!1,done:!1},{id:12,order:12,libelle:"Boire bcp(Øsirop) + Mang bcp sinon anor",isMainOfTheDay:!1,done:!1},{id:13,order:13,libelle:"Dts sinon jamais pech (que 3 min si bien fait)",isMainOfTheDay:!1,done:!1},{id:14,order:14,libelle:"Cours / Alternance (avec to-do) en tryhardant",isMainOfTheDay:!0,done:!1},{id:15,order:15,libelle:"Soc / Maga",isMainOfTheDay:!1,done:!1},{id:16,order:16,libelle:"Check pronote et sync avec Memo Rouge",isMainOfTheDay:!1,done:!1},{id:17,order:17,libelle:"Memo ROUGE",isMainOfTheDay:!1,done:!1},{id:18,order:18,libelle:"Memo ORANGE",isMainOfTheDay:!1,done:!1},{id:19,order:19,libelle:"Memo BLEU",isMainOfTheDay:!1,done:!1},{id:20,order:20,libelle:"Boire bcp(Øsirop) + Mang bcp sinon anor",isMainOfTheDay:!1,done:!1},{id:21,order:21,libelle:"Dts sinon jamais pech (que 3 min si bien fait)",isMainOfTheDay:!1,done:!1},{id:22,order:22,libelle:"Stop nrop",isMainOfTheDay:!1,done:!1},{id:23,order:23,libelle:"Cut barb ou aiss ou nez ou pb ou luc ou roufl",isMainOfTheDay:!1,done:!1},{id:24,order:24,libelle:"Charger tél ABSOLUMENT SUR BUREAU",isMainOfTheDay:!1,done:!1},{id:25,order:25,libelle:"Dodo 22h00, car sinon perd temps pr matin",isMainOfTheDay:!1,done:!1}]}),actions:{clearHabitsFromLocal(){localStorage.removeItem("habits")},saveHabitsToLocal(){localStorage.setItem("habits",JSON.stringify(this.habits))},resetHabitsFromBlank(){this.habits=this.blankHabits,this.saveHabitsToLocal()},resetHabitsOrder(){this.habits.sort((l,a)=>l.order-a.order),this.saveHabitsToLocal()},toggleCheckHabit(l){const a=this.habits.find(e=>e.id===l);a.done=!a.done,this.saveHabitsToLocal()},loadHabitsFromLocalOrBlank(){return this.habits=JSON.parse(localStorage.getItem("habits")),this.habits||this.resetHabitsFromBlank(),this.saveHabitsToLocal(),this.habits}}});const S={class:"habit-clickable"},B=["checked"],x={__name:"HabitItem",props:{habit:{type:Object,required:!0}},setup(l){const a=l,e=u();return(b,n)=>(d(),c("div",{class:h(a.habit.isMainOfTheDay?"habit is-main":"habit"),onClick:n[0]||(n[0]=i=>o(e).toggleCheckHabit(a.habit.id))},[t("div",{id:"habit-text",class:h(a.habit.done?"habit-text done":"habit-text")},v(a.habit.libelle),3),t("div",S,[t("input",{class:"habit-clickable-checkbox",type:"checkbox",id:"checkbox",name:"checkbox",checked:!!a.habit.done},null,8,B)])],2))}},C="/icons/bottom-action/sort-numeric-down.svg",L="/icons/bottom-action/arrow-clockwise.svg",$="/icons/pencil-square.svg";const w=t("img",{src:C,alt:"Reset check icon"},null,-1),A=[w],F=t("img",{src:L,alt:"Reset order icon"},null,-1),N=[F],E=t("img",{src:$,alt:"Add icon"},null,-1),U=[E],q={__name:"BottomActionHabits",setup(l){const a=u(),e=m(!1);function b(){e.value=!e.value}return p(e,()=>{e.value!==!1&&setTimeout(()=>{e.value=!1},"10000")}),(n,i)=>(d(),c("div",null,[t("div",{class:h(e.value?"bottom-action-panel open":"bottom-action-panel")},[t("div",null,[t("button",{class:"bottom-action-panel-item yellow",onClick:i[0]||(i[0]=s=>o(a).resetHabitsOrder())},A)]),t("div",null,[t("button",{class:"bottom-action-panel-item red",onClick:i[1]||(i[1]=s=>o(a).resetHabitsFromBlank())},N)])],2),t("button",{class:"bottom-action-button",onClick:i[2]||(i[2]=s=>b())},U)]))}},I={key:0,class:"center-message-no-content"},R={key:1},G={__name:"HabitsList",setup(l){const a=y(),e=u(),b=m(!1),n=g(()=>e.habits.every(i=>i.done));return M(()=>{new Date(Number(localStorage.getItem("lastTimeHabitsOpened"))).getDate()!==new Date().getDate()&&e.clearHabitsFromLocal(),e.loadHabitsFromLocalOrBlank(),localStorage.setItem("lastTimeHabitsOpened",Date.now())}),O(()=>{e.saveHabitsToLocal()}),p(n,()=>{n.value===!0&&a.success("Congrats! All habits marked as done!",{position:"top-right",timeout:5e3,hideProgressBar:!0,closeButton:!1})}),(i,s)=>(d(),c("div",null,[f(H),f(q),t("main",null,[o(e).habits.length===0?(d(),c("div",I," No habits ")):(d(),c("div",R,[f(o(k),{class:"dragable-list",modelValue:o(e).habits,"onUpdate:modelValue":s[0]||(s[0]=r=>o(e).habits=r),itemKey:"",onStart:s[1]||(s[1]=r=>b.value=!0),onEnd:s[2]||(s[2]=r=>{b.value=!1,o(e).saveHabitsToLocal()})},{item:T(({element:r})=>[(d(),D(x,{key:r.id,habit:r},null,8,["habit"]))]),_:1},8,["modelValue"])]))])]))}};export{G as default};

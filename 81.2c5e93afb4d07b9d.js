"use strict";(self.webpackChunkfront_proyecto_angular=self.webpackChunkfront_proyecto_angular||[]).push([[81],{9761:(U,r,t)=>{t.r(r),t.d(r,{UtilitiesModule:()=>h});var l=t(6895),u=t(9624),i=t(1571),g=t(3205),a=t(3535),m=t(1740);function d(e,o){if(1&e&&(i.TgZ(0,"div",11),i._UZ(1,"i"),i.TgZ(2,"div"),i._uU(3),i.qZA()()),2&e){const n=o.$implicit;i.xp6(1),i.Gre("text-2xl pi pi-",n.properties.name,""),i.xp6(2),i.hij("pi-",n.properties.name,"")}}let Z=(()=>{class e{constructor(n){this.iconService=n,this.icons=[],this.filteredIcons=[]}ngOnInit(){this.iconService.getIcons().subscribe(n=>{let s=n=n.filter(c=>-1===c.icon.tags.indexOf("deprecate"));s.sort((c,p)=>c.properties.name<p.properties.name?-1:c.properties.name<p.properties.name?1:0),this.icons=s,this.filteredIcons=n})}onFilter(n){const s=n.target.value;this.filteredIcons=s?this.icons.filter(c=>c.icon.tags[0].includes(s)):this.icons}}return e.\u0275fac=function(n){return new(n||e)(i.Y36(g.C))},e.\u0275cmp=i.Xpm({type:e,selectors:[["ng-component"]],decls:54,vars:1,consts:[[1,"card"],["lang","markup"],[1,"pi","pi-check",2,"margin-right",".5rem"],[1,"pi","pi-times"],[1,"pi","pi-check"],[1,"pi","pi-check",2,"font-size","2rem"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],["href","https://github.com/primefaces/primeicons/issues",1,"text-primary","hover:underline"],["pInputText","","placeholder","Search an icon",1,"w-full","p-3","mt-3","mb-5","w-full","p-3","mt-3","mb-5",3,"input"],[1,"grid","text-center"],["class","col-6 sm:col-4 lg:col-3 xl:col-2 pb-5",4,"ngFor","ngForOf"],[1,"col-6","sm:col-4","lg:col-3","xl:col-2","pb-5"]],template:function(n,s){1&n&&(i.TgZ(0,"div",0)(1,"h2"),i._uU(2,"Icons"),i.qZA(),i.TgZ(3,"h5"),i._uU(4,"Download"),i.qZA(),i.TgZ(5,"app-code",1),i.IAx(),i._uU(6,"\nnpm install primeicons --save\n"),i.fQ9(),i.qZA(),i.TgZ(7,"h5"),i._uU(8,"Getting Started"),i.qZA(),i.TgZ(9,"p"),i._uU(10,"PrimeIcons use the "),i.TgZ(11,"strong"),i._uU(12,"pi pi-{icon}"),i.qZA(),i._uU(13," syntax such as "),i.TgZ(14,"strong"),i._uU(15,"pi pi-check"),i.qZA(),i._uU(16,". A standalone icon can be displayed using an element such as "),i.TgZ(17,"i"),i._uU(18,"i"),i.qZA(),i._uU(19," or "),i.TgZ(20,"i"),i._uU(21,"span"),i.qZA()(),i.TgZ(22,"app-code",1),i.IAx(),i._uU(23,'\n<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>\n'),i.fQ9(),i.qZA(),i._UZ(24,"i",2)(25,"i",3),i.TgZ(26,"h5"),i._uU(27,"Size"),i.qZA(),i.TgZ(28,"p"),i._uU(29,"Size of the icons can easily be changed using font-size property."),i.qZA(),i.TgZ(30,"app-code",1),i.IAx(),i._uU(31,'\n<i class="pi pi-check"></i>\n'),i.fQ9(),i.qZA(),i._UZ(32,"i",4),i.TgZ(33,"app-code",1),i.IAx(),i._uU(34,'\n<i class="pi pi-check" style="font-size: 2rem"></i>\n'),i.fQ9(),i.qZA(),i._UZ(35,"i",5),i.TgZ(36,"h5"),i._uU(37,"Spinning Animation"),i.qZA(),i.TgZ(38,"p"),i._uU(39,"Special pi-spin class applies infinite rotate to an icon."),i.qZA(),i.TgZ(40,"app-code",1),i.IAx(),i._uU(41,'\n<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>\n'),i.fQ9(),i.qZA(),i._UZ(42,"i",6),i.TgZ(43,"h5"),i._uU(44,"List of Icons"),i.qZA(),i.TgZ(45,"p"),i._uU(46,"Here is the current list of PrimeIcons, more icons will be added periodically. You may also "),i.TgZ(47,"a",7),i._uU(48,"request new icons"),i.qZA(),i._uU(49," at the issue tracker."),i.qZA(),i.TgZ(50,"div")(51,"input",8),i.NdJ("input",function(p){return s.onFilter(p)}),i.qZA()(),i.TgZ(52,"div",9),i.YNc(53,d,4,4,"div",10),i.qZA()()),2&n&&(i.xp6(53),i.Q6J("ngForOf",s.filteredIcons))},dependencies:[l.sg,a.h,m.o],encapsulation:2}),e})(),f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[u.Bz.forChild([{path:"icons",data:{breadcrumb:"Prime Icons"},component:Z}]),u.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[l.ez,f,a.a,m.j]}),e})()}}]);
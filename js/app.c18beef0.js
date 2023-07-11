(function(){"use strict";var e={279:function(e,a,i){var t=i(963),o=i(252);function n(e,a,i,t,n,r){const s=(0,o.up)("HeaderComponent"),l=(0,o.up)("NavComponent"),c=(0,o.up)("router-view"),p=(0,o.up)("FooterComp");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s),(0,o.Wm)(l),(0,o.Wm)(c),(0,o.Wm)(p)])}const r={class:"class-04-header"},s=(0,o._)("section",{class:"header-left"},[(0,o._)("div",null,[(0,o._)("h2",null," My personal portfolio "),(0,o._)("p",null," Please, contact me if you are interested in my work ")])],-1),l=[s];function c(e,a,i,t,n,s){return(0,o.wg)(),(0,o.iD)("header",r,l)}var p={name:"HeaderComponent"},u=i(744);const h=(0,u.Z)(p,[["render",c]]);var g=h;function d(e,a,i,t,n,r){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",null,[(0,o._)("div",null,[(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(s,{class:"nav-link",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(s,{class:"nav-link",to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(s,{class:"nav-link",to:"/gallery"},{default:(0,o.w5)((()=>[(0,o.Uk)("Gallery")])),_:1})])])])])}var m={name:"NavComponent"};const f=(0,u.Z)(m,[["render",d],["__scopeId","data-v-b19eec94"]]);var v=f;const b=e=>((0,o.dD)("data-v-102fe5c4"),e=e(),(0,o.Cn)(),e),C=b((()=>(0,o._)("p",null,"Copyright © Made by João Bento 2023",-1))),y=b((()=>(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",{target:"_blank",href:"https://www.facebook.com/joaobento.crescencio",class:"fa-brands fa-facebook-f"})]),(0,o._)("li",null,[(0,o._)("a",{target:"_blank",href:"https://www.linkedin.com/in/jb-crescencio-a649bb253/",class:"fa-brands fa-linkedin-in"})]),(0,o._)("li",null,[(0,o._)("a",{target:"_blank",href:"https://github.com/JB-Cezar",class:"fa-brands fa-github"})])],-1))),A=[C,y];function w(e,a,i,t,n,r){return(0,o.wg)(),(0,o.iD)("footer",null,A)}var D={name:"FooterComp"};const k=(0,u.Z)(D,[["render",w],["__scopeId","data-v-102fe5c4"]]);var P=k,Q={name:"App",components:{HeaderComponent:g,NavComponent:v,FooterComp:P}};const N=(0,u.Z)(Q,[["render",n]]);var T=N,O=i.p+"img/HTML5_logo_and_wordmark.svg.39ba1194.png",M=i.p+"img/CSS3_logo_and_wordmark.svg.446f263d.png",I=i.p+"img/seal-color.3b9bc976.png",J=i.p+"img/Unofficial_JavaScript_logo_2.svg.98b92caf.png",z="data:image/png;base64,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",W=i.p+"img/React-icon.svg.88331ccc.webp",B=i.p+"img/Vue.js_Logo_2.svg.1d641c37.png",H=i.p+"img/PHP-logo.svg.ef620c01.png",G=i.p+"img/Bootstrap_logo.svg.68ac63c8.png",K=i.p+"img/MySQL-Logo.f93206ef.png";const j={class:"home"},L=(0,o.uE)('<h1>My Skills</h1><aside class="bigBlok"><section class="blok" id="skills"><article><h3>Developer Skills</h3><section><figure><img src="'+O+'" alt="HTML5"><small id="html" style="width:97%;"></small><p>97%</p></figure><figure><img src="'+M+'" alt="css3"><small id="css" style="width:70%;"></small><p>70%</p></figure><figure><img src="'+I+'" alt="scss"><small id="css" style="width:67%;"></small><p>67%</p></figure><figure><img src="'+J+'" alt="js"><small id="php" style="width:95%;"></small><p>95%</p></figure><figure><img src="'+z+'" alt="jquery"><small id="php" style="width:87%;"></small><p>87%</p></figure><figure><img src="'+W+'" alt="React"><small id="php" style="width:85%;"></small><p>85%</p></figure><figure><img src="'+B+'" alt="vue"><small id="vue" style="width:80%;"></small><p>80%</p></figure><figure><img src="'+H+'" alt="php"><small id="php" style="width:70%;"></small><p>70%</p></figure><figure><img src="'+G+'" alt="Bootstrap"><small id="php" style="width:60%;"></small><p>60%</p></figure><figure><img src="'+K+'" alt="MySQL"><small id="php" style="width:95%;"></small><p>95%</p></figure></section></article></section><aside><section class="blok" id="work"><article><h3>Work</h3><section><aside><h4>Kitchen Assistant - McDonald&#39;s</h4><small>2020-2021</small></aside><p> Responsible for helping with the daily operation of the restaurant, keeping the area clean and organized, assisting with customer service and ensuring service efficiency. </p></section><section><aside><h4>IT Technician - SEPLAG</h4><small>2021-2022</small></aside><p> Provide technical assistance and guidance to users of technology products such as software, hardware, electronic devices and computer networks. The purpose of technical support is to solve problems that users may have with their device or technology services. </p></section></article></section><section class="blok" id="education"><article><h3>Education</h3><section><aside><h4>High School</h4><small>2017-2019</small><p>School Tiradentes</p></aside><aside><h4>Computer Engineering</h4><small>2019-2021</small><p>UNIC</p></aside><aside><h4>Web Developer</h4><small>2023-2024</small><p>Tamwood</p></aside></section></article></section><section class="blok" id="language"><article><h3>Language</h3><section><aside><h4>English:</h4><p>Bilingual</p></aside><aside><h4>Portuguese:</h4><p>Fluent</p></aside><aside><h4>Spanish:</h4><p>Bilingual</p></aside></section></article></section></aside></aside>',2),E=[L];function R(e,a,i,t,n,r){return(0,o.wg)(),(0,o.iD)("main",j,E)}var x={name:"HomePage"};const U=(0,u.Z)(x,[["render",R]]);var S=U,V=i.p+"img/p1.5867a829.png",F=i.p+"img/p2.659a9864.png",X=i.p+"img/p3.0f45551b.png",Z=i.p+"img/p4.6bc20659.png",q=i.p+"img/p5.05046f3d.png",Y=i.p+"img/p6.d60f7d35.png",_=i.p+"img/p7.e5a83055.png";const $={class:"gallery"},ee=(0,o.uE)('<h1>My Projects</h1><aside><div class="pic"><figure><img src="'+V+'" alt="Robotic LTDA"><figcaption><h3>Horaizon Robotic LTDA</h3><small>02/12/2023</small></figcaption></figure></div><div class="pic"><a target="_blank" href="https://github.com/Dayhun/TourGuide"><figure><img src="'+F+'" alt=""><figcaption><h3>Tour Guide</h3><small>03/16/2023</small></figcaption></figure></a></div><div class="pic"><a target="_blank" href="https://github.com/JB-Cezar/RPG-game"><figure><img src="'+X+'" alt=""><figcaption><h3>RPG Game</h3><small>04/19/2023</small></figcaption></figure></a></div><div class="pic"><a target="_blank" href="https://github.com/JB-Cezar/Shop-Cart"><figure><img src="'+Z+'" alt=""><figcaption><h3>Shop Cart</h3><small>03/30/2023</small></figcaption></figure></a></div><div class="pic"><a target="_blank" href="https://github.com/ayapan0811/FinalProject-JS2"><figure><img src="'+q+'" alt=""><figcaption><h3>Bowwow Sitter</h3><small>05/13/2023</small></figcaption></figure></a></div><div class="pic"><a target="_blank" href="https://github.com/JB-Cezar/Final-Project-PHP"><figure><img src="'+Y+'" alt=""><figcaption><h3>Food Truck</h3><small>06/08/2023</small></figcaption></figure></a></div><div class="pic"><a target="_blank" href="https://github.com/seonlim/Weather-Lim-Santiago-Joan"><figure><img src="'+_+'" alt=""><figcaption><h3>Sunny Weather</h3><small>07/08/2023</small></figcaption></figure></a></div></aside>',2),ae=[ee];function ie(e,a,i,t,n,r){return(0,o.wg)(),(0,o.iD)("main",$,ae)}var te={name:"GalleryPage"};const oe=(0,u.Z)(te,[["render",ie]]);var ne=oe,re=i.p+"img/eu.e4bd17b8.jpeg";const se=(0,o.uE)('<h1 style="color:white;">About Me</h1><section class="about"><figure><img class="profile-image" src="'+re+'" alt="me"><figcaption><p> I&#39;m João Bento Cezar Crescencio, I&#39;m Brazilian, currently living in New Westminster BC Canada. </p><br><p> I work as a social activist, in the cause of childhood cancer, I have been a volunteer at the Association of Friends of Children with Cancer of Mato Grosso for over 10 years, I was a <a target="_blank" href="https://al-mt.jusbrasil.com.br/noticias/100612959/al-anuncia-o-nome-dos-24-novos-deputados-mirins">Child State Deputy</a> of the 5th Legislature of the Child Parliament 2013, where I presented and defended the <a target="_blank" href="https://www.al.mt.gov.br/storage/webdisco/cp/20130827151425621000.pdf.">Volunteer Mirin</a> Law project, from which I received the motion of applause from that house of laws, </p><br><p> I am a member of the Catholic Church, instituted through the Ministry of the Acolyte for over 12 years I am part of the archdiocese of Cuiabá Mato Grosso, I serve in the São Gonçalo Parish of the Salesian Mission of which we also do annual voluntary work in the indigenous village of Merurino municipality of Barra do Mato Grosso herons. </p><br><p> I am a volunteer from the Heart in the actions that I propose to carry out. I worked as a Media Assistant at Crescencio e Crescencio LTDA for 03 years (2019-2022), CMC Imóveis, as a Realtor in the year 2021, I did an internship as a Computer Technician at SEPAG/MT -Secretary of State for Planning and Management -SEPLAG-MT 01 year and a half.As a member of the CIEE - Business-School Integration Center, my objective within each of these activities is to grow more and more within each area, but the one that I identify with and like the most is the IT area. </p><p> I really believe that with my studies in the English language and the WD course. from College in Canada, can be a differential in my professional curriculum. </p><br><p> I remain at your disposal for any clarification you deem necessary.Cat </p></figcaption></figure></section><section class="blok"><aside class="download"><a href="../../../PHP/resume/RESUME JOAO B C CRESCENCIO.docx.pdf" download="Resume João Bento">Download My Resume</a></aside></section>',3),le=[se];function ce(e,a,i,t,n,r){return(0,o.wg)(),(0,o.iD)("main",null,le)}var pe={name:"AboutPage"};const ue=(0,u.Z)(pe,[["render",ce]]);var he=ue,ge=i(201);const de=[{path:"/",name:"HomePage",component:S},{path:"/gallery",name:"GalleryPage",component:ne},{path:"/about",name:"AboutPage",component:he}],me=(0,ge.p7)({history:(0,ge.PO)("/portifolio/"),routes:de});var fe=me;const ve=(0,t.ri)(T);ve.use(fe),ve.mount("#app")}},a={};function i(t){var o=a[t];if(void 0!==o)return o.exports;var n=a[t]={exports:{}};return e[t](n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(a,t,o,n){if(!t){var r=1/0;for(p=0;p<e.length;p++){t=e[p][0],o=e[p][1],n=e[p][2];for(var s=!0,l=0;l<t.length;l++)(!1&n||r>=n)&&Object.keys(i.O).every((function(e){return i.O[e](t[l])}))?t.splice(l--,1):(s=!1,n<r&&(r=n));if(s){e.splice(p--,1);var c=o();void 0!==c&&(a=c)}}return a}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[t,o,n]}}(),function(){i.d=function(e,a){for(var t in a)i.o(a,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){i.p="/portifolio/"}(),function(){var e={143:0};i.O.j=function(a){return 0===e[a]};var a=function(a,t){var o,n,r=t[0],s=t[1],l=t[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var p=l(i)}for(a&&a(t);c<r.length;c++)n=r[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(p)},t=self["webpackChunkportifolio_jb"]=self["webpackChunkportifolio_jb"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(279)}));t=i.O(t)})();
//# sourceMappingURL=app.c18beef0.js.map
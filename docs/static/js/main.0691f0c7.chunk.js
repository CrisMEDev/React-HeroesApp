(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{34:function(e,a,r){var t={"./dc-arrow.jpg":35,"./dc-batman.jpg":36,"./dc-black.jpg":37,"./dc-blue.jpg":38,"./dc-flash.jpg":39,"./dc-green.jpg":40,"./dc-martian.jpg":41,"./dc-robin.jpg":42,"./dc-superman.jpg":43,"./dc-wonder.jpg":44,"./marvel-captain.jpg":45,"./marvel-cyclops.jpg":46,"./marvel-daredevil.jpg":47,"./marvel-hawkeye.jpg":48,"./marvel-hulk.jpg":49,"./marvel-iron.jpg":50,"./marvel-silver.jpg":51,"./marvel-spider.jpg":52,"./marvel-thor.jpg":53,"./marvel-wolverine.jpg":54};function c(e){var a=s(e);return r(a)}function s(e){if(!r.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=s,e.exports=c,c.id=34},35:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-arrow.15b27bc2.jpg"},36:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-batman.ab9eadc3.jpg"},37:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-black.3747c663.jpg"},38:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-blue.cc8169a3.jpg"},39:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-flash.b3922f25.jpg"},40:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-green.01c54ee1.jpg"},41:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-martian.78565f7d.jpg"},42:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-robin.ea4afe99.jpg"},43:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-superman.e9391474.jpg"},44:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/dc-wonder.970ba2d6.jpg"},45:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-captain.d2c7774d.jpg"},46:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-cyclops.f1442408.jpg"},47:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-daredevil.2f4f1a57.jpg"},48:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hawkeye.1f78e874.jpg"},49:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-hulk.d1af5fe5.jpg"},50:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-iron.b394df11.jpg"},51:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-silver.1d43a08b.jpg"},52:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-spider.054016b4.jpg"},53:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-thor.c63e651c.jpg"},54:function(e,a,r){"use strict";r.r(a),a.default=r.p+"static/media/marvel-wolverine.ee676488.jpg"},69:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(20),s=r.n(c),n=r(10),i=Object(t.createContext)(),l=r(4),o="[auth] login",u="[auth] logout",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},j=r(5),h=r(2),p=r(0),m={type:o,payload:{name:"Cristian",email:"cr15moresp@gmail.com"}},b=function(e){var a=e.history,r=Object(t.useContext)(i).dispatch;return Object(p.jsxs)("div",{className:"container mt-5",children:[Object(p.jsx)("h1",{children:"Login Screen"}),Object(p.jsx)("hr",{}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r(m),a.replace(e)},children:"Login"})]})},v=function(){var e=Object(t.useContext)(i),a=e.user,r=e.dispatch,c=Object(h.g)();return Object(p.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(p.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(p.jsx)("div",{className:"navbar-collapse",children:Object(p.jsxs)("div",{className:"navbar-nav",children:[Object(p.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(p.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(p.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(p.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(p.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(p.jsx)("div",{className:"nav-item nav-link text-info",children:a.name}),Object(p.jsx)("button",{className:"btn nav-item nav-link me-4",onClick:function(){c.replace("/login"),r({type:u})},children:"Logout"})]})})]})},f=r(34),O=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance,s=e.characters;return Object(p.jsxs)("div",{className:"row g-4",style:{maxWidth:540},children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)("img",{src:f("./".concat(a,".jpg")).default,className:"img-fluid rounded-start",alt:r})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:r}),Object(p.jsx)("p",{className:"card-text",children:t}),t!==s&&Object(p.jsx)("p",{className:"card-text",children:s}),Object(p.jsx)("p",{className:"card-text",children:Object(p.jsx)("small",{className:"text-muted",children:c})}),Object(p.jsx)(j.b,{className:"btn btn-outline-dark",to:"/hero/".concat(a),children:"About..."})]})})]})},g=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],x=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return g.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(p.jsx)("div",{className:"row gy-8 animate__animated animate__fadeIn",children:r.map((function(e){return Object(p.jsx)(O,Object(l.a)({},e),e.id)}))})},C=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Marvel Screen"}),Object(p.jsx)("hr",{}),Object(p.jsx)(x,{publisher:"Marvel Comics"})]})},_=function(e){var a=e.history,r=Object(h.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,g.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(p.jsx)(h.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(p.jsxs)("div",{className:"row mt-5",children:[Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("img",{className:"img-thumbnail animate__animated animate__rollIn",alt:s,src:f("./".concat(r,".jpg")).default})}),Object(p.jsxs)("div",{className:"col-8",children:[Object(p.jsx)("h3",{children:s}),Object(p.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(p.jsxs)("li",{className:"list-group-item",children:[" ",Object(p.jsx)("b",{children:"Alter ego: "}),i]}),Object(p.jsxs)("li",{className:"list-group-item",children:[" ",Object(p.jsx)("b",{children:"Publisher: "}),n]}),Object(p.jsxs)("li",{className:"list-group-item",children:[" ",Object(p.jsx)("b",{children:"First appearance: "}),l]})]}),Object(p.jsx)("h5",{children:"Characters"}),Object(p.jsx)("p",{children:o}),Object(p.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})},N=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"DC Screen"}),Object(p.jsx)("hr",{}),Object(p.jsx)(x,{publisher:"DC Comics"})]})},y=r(23),k=r.n(y),S=r(12),w=function(e){var a=e.history,r=Object(h.h)(),c=k.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1],i=function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(S.a)({},a.name,a.value)))};return[c,i,function(){s(e)}]}({searchHero:s}),o=Object(n.a)(i,3),u=o[0],d=o[1],j=(o[2],u.searchHero),m=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),g.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Search Screen"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-5",children:[Object(p.jsx)("h4",{children:"Search Form"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.trim().length<=3||a.push("?q=".concat(j))},children:[Object(p.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchHero",value:j,onChange:d,autoComplete:"off"}),Object(p.jsx)("button",{type:"submit",className:"btn m-1 w-100 btn-outline-primary",children:"Search"})]})]}),Object(p.jsxs)("div",{className:"col-7",children:[Object(p.jsx)("h4",{children:"Results"}),Object(p.jsx)("hr",{}),""===s&&Object(p.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==s&&0===m.length&&Object(p.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",s]}),m.map((function(e){return Object(p.jsx)(O,Object(l.a)({},e),e.id)}))]})]})]})},M=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("div",{className:"container mt-3",children:Object(p.jsxs)(h.d,{children:[Object(p.jsx)(h.b,{exact:!0,path:"/marvel",component:C}),Object(p.jsx)(h.b,{exact:!0,path:"/hero/:heroeId",component:_}),Object(p.jsx)(h.b,{exact:!0,path:"/dc",component:N}),Object(p.jsx)(h.b,{exact:!0,path:"/search",component:w}),Object(p.jsx)(h.a,{to:"/marvel"})]})})]})},D=r(13),A=["isAuthenticated","component"],B=function(e){var a=e.isAuthenticated,r=e.component,t=Object(D.a)(e,A);return localStorage.setItem("lastPath",t.location.pathname),Object(p.jsx)(h.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(p.jsx)(r,Object(l.a)({},e)):Object(p.jsx)(h.a,{to:"/login"})}}))},F=["isAuthenticated","component"],J=function(e){var a=e.isAuthenticated,r=e.component,t=Object(D.a)(e,F);return Object(p.jsx)(h.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(p.jsx)(h.a,{to:"/"}):Object(p.jsx)(r,Object(l.a)({},e))}}))},T=function(){var e=Object(t.useContext)(i).user;return Object(p.jsx)(j.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(h.d,{children:[Object(p.jsx)(J,{exact:!0,isAuthenticated:e.logged,path:"/login",component:b}),",",Object(p.jsx)(B,{isAuthenticated:e.logged,path:"/",component:M})]})})})},I=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},P=function(){var e=Object(t.useReducer)(d,{},I),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(p.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(p.jsx)(T,{})})};s.a.render(Object(p.jsx)(P,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.0691f0c7.chunk.js.map
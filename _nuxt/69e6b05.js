(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(19).concat([function(t,e,n){"use strict";n(89);var o=n(4),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"not-found"},[n("div",{staticClass:"container"},[n("div",{staticClass:"not-found__wrapper"},[n("p",{staticClass:"title"},[t._v("Page not found!")]),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[t._v("Back to main page")])],1)])])}),[],!1,null,null,null);e.a=component.exports},,,,,,,,function(t,e,n){"use strict";n.r(e);var o={data:function(){return{links:[{title:"Blog",url:"/blog"},{title:"About",url:"/about"},{title:"Admin",url:"/admin"}]}}},r=(n(101),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("b-nav",{staticClass:"w-100"},[n("b-nav-item",{staticClass:"hover-link",attrs:{to:"/"}},[t._v(" Home ")]),t._v(" "),n("b-nav-item",{staticClass:"hover-link",attrs:{to:"/blog"}},[t._v(" Blog ")]),t._v(" "),n("b-nav-item",{staticClass:"hover-link",attrs:{to:"/about"}},[t._v(" About")]),t._v(" "),n("b-nav-item",{staticClass:"admin hover-link",attrs:{to:"/admin"}},[t._v(" Admin")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},,,,,,,,,,,,,,function(t,e,n){"use strict";var o=n(2),r=n(73),l=n(74),c=n(75),d=n(76),f=n(77),m=n(78);o.default.component("Intro",r.default),o.default.component("PostsList",c.default),o.default.component("Message",l.default),o.default.component("AppButton",d.default),o.default.component("AppInput",f.default),o.default.component("AppTextArea",m.default)},,,,,,function(t,e,n){var content=n(90);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("14ae4020",content,!0,{sourceMap:!1})},,function(t,e,n){var content=n(102);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("f9108cae",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(104);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("938f3782",content,!0,{sourceMap:!1})},,,,,,,,,,function(t,e,n){var content=n(129);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("7e1c1b26",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(131);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("4e2e0848",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(133);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("a2accfe8",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(135);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("733068c4",content,!0,{sourceMap:!1})},,,,,,,,function(t,e,n){"use strict";var o={components:{Header:n(27).default},middleware:["auth-check","auth"],methods:{logoutUser:function(){var t=this;this.$store.dispatch("logoutUser").then((function(){t.$router.push("/admin/auth")}))}}},r=(n(103),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("no-ssr",[n("div",{staticClass:"wrapper"},[n("Header"),t._v(" "),n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("Intro",{attrs:{title:"Admin Page"}},[n("nuxt-link",{staticClass:"link hover-link",attrs:{to:"/admin"}},[t._v("Admin")]),t._v(" "),n("nuxt-link",{staticClass:"link hover-link",attrs:{to:"/admin/new-post"}},[t._v("\n          New Post\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"link hover-link",attrs:{to:"/admin/comments"}},[t._v("\n          Comments\n        ")]),t._v(" "),n("span",{staticClass:"link hover-link",on:{click:t.logoutUser}},[t._v(" Logout ")])],1),t._v(" "),n("Nuxt")],1)],1)])}),[],!1,null,null,null);e.a=component.exports},function(t,e,n){"use strict";var o={components:{Header:n(27).default}},r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Header"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,required:!0}}},r=(n(128),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var o={props:{mesClass:{type:String,default:"sucess"},message:{type:String,required:!0}}},r=(n(130),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message",class:t.mesClass},[n("p",[t._v(t._s(t.message))])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var o={components:{postPreview:n(79).default},props:{posts:{type:Array,required:!0},admin:{type:Boolean,default:!1}}},r=(n(134),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"post-list"},[n("div",{staticClass:"container"},[n("div",{staticClass:"posts__wrapper"},t._l(t.posts,(function(e){return n("postPreview",{key:e.id,attrs:{admin:t.admin,post:e}})})),1)])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var o={props:{btnClass:{type:String,default:"btnPrimary"}}},r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._g(t._b({staticClass:"btn",class:t.btnClass},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var o={props:{value:{type:String,default:""},type:{type:String,default:"text"},required:{type:Boolean,default:!0}}},r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control"},[n("label",[t._t("default")],2),t._v(" "),n("input",t._b({attrs:{type:t.type,required:t.required},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1))])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var o={props:{value:{type:String,default:""}}},r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control"},[n("label",[t._t("default")],2),t._v(" "),n("textarea",{domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var o={props:{post:{type:Object,required:!0},admin:{type:Boolean,default:!1}},computed:{getLink:function(){return this.admin?"/admin/".concat(this.post.id):"/blog/".concat(this.post.id)}}},r=(n(132),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"card-link",attrs:{href:"#",to:t.getLink}},[n("b-card",{staticClass:"postPreview",staticStyle:{"max-width":"40rem"},attrs:{deck:"","img-width":"1","bg-variant":"warning"}},[n("b-img",{attrs:{src:t.post.img}}),t._v(" "),n("b-card-title",{staticClass:"dark"},[t._v(t._s(t.post.title))]),t._v(" "),n("b-card-sub-title",[t._v(t._s(t.post.descr))]),t._v(" "),n("div")],1)],1)}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){n(81),t.exports=n(82)},,,,function(t,e,n){"use strict";n.r(e),e.default=function(t){t.store.dispatch("initAuth",null)}},function(t,e,n){"use strict";n.r(e),e.default=function(t){t.store.getters.checkAuthUser||t.redirect("/admin/auth")}},,,,function(t,e,n){"use strict";n(47)},function(t,e,n){var o=n(13)(!1);o.push([t.i,".not-found__wrapper{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:80vh}",""]),t.exports=o},,,,,,,function(t,e,n){var content=n(98);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("12ba2d00",content,!0,{sourceMap:!1})},function(t,e,n){var o=n(13),r=n(99),l=n(100),c=o(!1),d=r(l);c.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;font-size:100%;vertical-align:baseline}a:active,a:hover{outline:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}html{box-sizing:border-box}:focus{outline:0}audio,img,video{max-width:100%;height:auto}audio,canvas,iframe,img,svg,video{vertical-align:middle}iframe{border:0}textarea{resize:none;overflow:auto;vertical-align:top;box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none}button,input,select,textarea{outline:none;border:none;font-size:100%;margin:0}button,input{line-height:normal}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}html{line-height:1.4;font-size:18px;color:#101010;height:100%}@media screen and (max-width:1280px){html{font-size:16px}}@media screen and (max-width:768px){html{font-size:15px}}@media screen and (max-width:480px){html{font-size:14px}}body{font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;padding:0;background-color:#f7f7f7}*,:after,:before{box-sizing:border-box}h1,h2,h3,h4,h5,h6{margin:0}button,input,select,textarea{border:1px solid #dcdfe6}a{text-decoration:none}li,ul{list-style-type:none;margin:0;padding:0}.section,section{position:relative;padding:40px 0}@media screen and (max-width:1280px){.section,section{padding:36px 0;padding:28px 0;padding:20px 0}}.wrapper{margin:0 auto;background-image:url('+d+')}.wrapper,.wrapper-content{display:flex;flex-direction:column;min-height:100vh}.wrapper-content.wrapper-content--fixed{margin-top:80px}.button-single-wrapper{width:130px;display:flex;justify-content:center}.buttons-wrapper{display:flex;justify-content:space-around;align-content:center;width:300px;align-items:center;margin:20px auto auto}.col-sm-4,.col-sm-5{margin:auto}.container{width:100%;flex:0 0 auto;position:relative;max-width:1280px;margin:0 auto}@media screen and (max-width:980px){.container{max-width:768px}}@media screen and (max-width:768px){.container{max-width:480px}}@media screen and (max-width:480px){.container{max-width:320px}}.dark{color:#101010}.bisque{color:bisque}.title{margin-bottom:20px;color:#333;font-size:30px;font-weight:700}label{display:block;font-size:16px;margin-bottom:10px;text-align:center}input{padding:16px 26px;margin-bottom:30px;border-radius:20px}textarea{padding:30px 27px;border-radius:14px}input,textarea{width:100%}.link{cursor:pointer;margin-right:8px}.link:last-child{margin-right:0}.link.linkWhite{border-bottom:1px solid #fff;color:#fff}.link.linkBisque{color:bisque}.link.linkFalse{border-bottom:1px solid #b53f3f;color:#b53f3f}.link.linkTrue{border-bottom:1px solid #7bd782;color:#7bd782}.hover-link{background-image:linear-gradient(90deg,#28a745,#28a745 50%,bisque 0);background-size:200% 100%;background-position:-100%;display:inline-block;padding:5px 0;position:relative;-webkit-background-clip:text;-webkit-text-fill-color:transparent;transition:all .3s ease-in-out}.hover-link:before{content:"";background:#28a745;display:block;position:absolute;bottom:-3px;left:0;width:0;height:3px;transition:all .3s ease-in-out}.hover-link:hover{background-position:0}.hover-link:hover:before{width:100%}.btn{display:inline-block;padding:.8em 2em;line-height:1;text-transform:uppercase;cursor:pointer;border-radius:30px}.btn.btnDefaul{color:#fff;border:1px solid #333;background-color:#333}.btn.btnPrimary{color:#fff;border:1px solid #494ce8;background-color:#494ce8}.btn.btnDanger{color:#fff;border:1px solid #b54040;background-color:#b53f3f}.btn.btnWhite{color:#333;border:1px solid #fff;background-color:#fff}.navbar{position:fixed;top:0;left:0;right:0;z-index:99;padding:20px 0;background-color:#fff;box-shadow:0 3px 10px rgba(0,0,0,.1)}.navbar.logo{font-size:24px}.navbar-content{justify-content:space-between}.navbar-content,.navbar-list{display:flex;align-items:center}.navbar-list{justify-content:center}.navbar-item{margin-right:30px;cursor:pointer}.navbar-item:last-child{margin-right:0}.navbar-link{display:block;color:#aaaad5}.navbar-link.active{color:#4343aa}table{width:100%;line-height:1.5em;border-collapse:separate;border-spacing:0 34px}table thead th{padding:20px 22px;white-space:nowrap;font-size:22px;cursor:pointer}table td{padding:20px}table tbody tr{background-color:#fff;font-weight:600;transition:all .25s cubic-bezier(.02,.01,.47,1);box-shadow:0 30px 30px rgba(0,0,0,.02)}table tbody tr:hover{box-shadow:0 30px 30px rgba(0,0,0,.04);transform:translateY(-6px);transition-delay:0s!important}.status{margin-right:10px}.status:before{display:inline-block;content:"\\A";width:10px;height:10px;border-radius:50%}.status.false{color:#ff5722}.status.false:before{background:#ff5722}.status.true{color:#8bc34a}.status.true:before{background:#8bc34a}',""]),t.exports=c},,function(t,e,n){t.exports=n.p+"img/BackGround.ec0615a.jpeg"},function(t,e,n){"use strict";n(49)},function(t,e,n){var o=n(13)(!1);o.push([t.i,".logo a{color:#333}.nav-item a{color:beige}.admin{margin-left:auto}",""]),t.exports=o},function(t,e,n){"use strict";n(50)},function(t,e,n){var o=n(13)(!1);o.push([t.i,"nuxt-link{color:bisque}",""]),t.exports=o},function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return v})),n.d(e,"mutations",(function(){return x})),n.d(e,"actions",(function(){return k})),n.d(e,"getters",(function(){return w}));var o=n(0),r=n.n(o),l=n(18),c=n.n(l),d=n(39),f=n.n(d);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){r()(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=function(){return{postsLoaded:[],postEdit:{},idToken:null}},x={setPosts:function(t,e){t.postsLoaded=e},addPost:function(t,e){t.postsLoaded.push(e)},editPost:function(t,e){var n=t.postsLoaded.findIndex((function(t){return t.id===e.id}));t.postsLoaded[n]=e},setToken:function(t,e){t.idToken=e},destroyToken:function(t){t.idToken=null}},k={nuxtServerInit:function(t,e){var n=t.commit;return c.a.get("https://blog-nuxt-78497-default-rtdb.firebaseio.com/posts.json").then((function(t){var e=[];for(var o in console.log(t),t.data)e.push(h(h({},t.data[o]),{},{id:o}));n("setPosts",e)})).catch((function(t){return console.log(t)}))},authUser:function(t,e){var n=t.commit;return c.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyAf3kjVGrJeJHeydvSZp1mO6hhh4_UZorw"),{email:e.email,password:e.password,returnSecureToken:!0}).then((function(t){var e=t.data.idToken;n("setToken",e),localStorage.setItem("token",e),f.a.set("jwt",e)})).catch((function(t){console.log(t)}))},initAuth:function(t,e){var n,o=t.commit;if(e){if(!e.headers.cookie)return!1;var r=e.headers.cookie.split(";").find((function(t){return t.trim().startsWith("jwt=")}));if(!r)return!1;n=r.split("=")[1]}else if(!(n=localStorage.getItem("token")))return!1;o("setToken",n)},logoutUser:function(t){(0,t.commit)("destroyToken"),localStorage.removeItem("token"),f.a.remove("jwt")},addPost:function(t,e){var n=t.commit;return c.a.post("https://blog-nuxt-78497-default-rtdb.firebaseio.com/posts.json",e).then((function(t){n("addPost",h(h({},e),{},{id:t.data.name}))})).catch((function(t){return console.log(t)}))},setEditPost:function(t,e){t.commit;return c.a.get("https://blog-nuxt-78497-default-rtdb.firebaseio.com/posts/".concat(e,".json")).then((function(t){return t}))},editPost:function(t,e){var n=t.commit;return c.a.put("https://blog-nuxt-78497-default-rtdb.firebaseio.com/posts/".concat(e.id,".json"),e).then((function(t){n("editPost",e)})).catch((function(t){return console.log(t)}))},deletePost:function(t,e){t.commit;return c.a.delete("https://blog-nuxt-78497-default-rtdb.firebaseio.com/posts/".concat(e,".json"))},addComment:function(t,e){t.commit;return c.a.post("https://blog-nuxt-78497-default-rtdb.firebaseio.com/comments.json",e).catch((function(t){return console.log(t)}))}},w={getPostsLoaded:function(t){return t.postsLoaded},checkAuthUser:function(t){return null!=t.idToken},getEditPost:function(t){return t.postEdit}}},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(60)},function(t,e,n){var o=n(13)(!1);o.push([t.i,".intro{width:100%;margin:30px 0;text-align:center;color:bisque}.intro h2{font-size:26px}",""]),t.exports=o},function(t,e,n){"use strict";n(61)},function(t,e,n){var o=n(13)(!1);o.push([t.i,".message{font-size:22px}.message.sucess{color:#26de81}.message.error{color:#fc5c65}",""]),t.exports=o},function(t,e,n){"use strict";n(62)},function(t,e,n){var o=n(13)(!1);o.push([t.i,".postPreview{padding:16px;margin-bottom:20px;text-align:center}.postPreview img{margin-bottom:16px}.postPreview .post-content p{color:#999}.postPreview .card-link{color:#7c5bf3}.postPreview nuxt-link{color:#000}.postPreview .posts__wrapper{display:inline}",""]),t.exports=o},function(t,e,n){"use strict";n(63)},function(t,e,n){var o=n(13)(!1);o.push([t.i,".posts__wrapper{display:flex}",""]),t.exports=o}]),[[80,21,1,22]]]);
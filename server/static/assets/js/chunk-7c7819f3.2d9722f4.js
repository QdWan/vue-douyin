(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c7819f3"],{"0e42":function(t,s,e){},"1cb8":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"spinner7"},[e("div",{staticClass:"spinner-container container1"},[e("div",{staticClass:"circle1"}),e("div",{staticClass:"circle2"}),e("div",{staticClass:"circle3"}),e("div",{staticClass:"circle4"})]),e("div",{staticClass:"spinner-container container2"},[e("div",{staticClass:"circle1"}),e("div",{staticClass:"circle2"}),e("div",{staticClass:"circle3"}),e("div",{staticClass:"circle4"})]),e("div",{staticClass:"spinner-container container3"},[e("div",{staticClass:"circle1"}),e("div",{staticClass:"circle2"}),e("div",{staticClass:"circle3"}),e("div",{staticClass:"circle4"})])])}],n={},c=n,o=(e("6aab"),e("2877")),r=Object(o["a"])(c,i,a,!1,null,"578604de",null);s["a"]=r.exports},"288d":function(t,s,e){},"6aab":function(t,s,e){"use strict";var i=e("0e42"),a=e.n(i);a.a},"89d4":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"myList"},[e("div",{staticClass:"topBar"},[e("span",{staticClass:"backbtn iconfont icon-left",on:{click:t.GoBack}}),e("p",{staticClass:"title"},[t._v(t._s(t.Title))])]),e("scroll",{staticClass:"scroll-wrap",class:{"scroll-wrap-bottom":t.needBottomMargin},attrs:{pullup:!0},on:{scrollToEnd:t.scrollToEnd}},[e("ul",[t._t("default")],2)])],1)},a=[],n=e("e9fc"),c={props:{Title:{type:String,default:""},needBottomMargin:{type:Boolean,default:!1}},methods:{GoBack:function(){this.$router.back()},scrollToEnd:function(){this.$emit("scrollToEnd")}},components:{Scroll:n["a"]}},o=c,r=(e("cfc8"),e("2877")),l=Object(r["a"])(o,i,a,!1,null,"1aedd296",null);s["a"]=l.exports},"8aa9":function(t,s,e){"use strict";var i=e("288d"),a=e.n(i);a.a},"9be9":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("tip",{ref:"tip"}),e("my-list",{attrs:{Title:t.title},on:{scrollToEnd:t.scrollToEnd}},[t._l(t.list,(function(s){return e("li",{key:s.userId,staticClass:"list-item",on:{click:function(e){return t.chooseUser(e,s.userId)}}},[e("img",{staticClass:"avatar",attrs:{src:""+t.baseURL+s.userAvatar,width:"45",height:"45",alt:""}}),e("div",{staticClass:"main"},[e("p",{staticClass:"name"},[t._v(t._s(s.userNickname))]),e("p",{staticClass:"desc"},[t._v(t._s(s.userDesc))])]),"me"===t.$route.params.id?e("div",{staticClass:"btn",class:{"btn-inactive":s.bothStatus},domProps:{innerHTML:t._s(s.bothStatus?"互相关注":"关注")},on:{click:function(e){return t.triggerFollow(s)}}}):"me"!==t.$route.params.id&&"me"!==s.myRelation?e("div",{staticClass:"btn",class:{"btn-inactive":!!["follow","both"].includes(s.myRelation)},domProps:{innerHTML:t._s(t.getBtnHtml(s.myRelation))},on:{click:function(e){return t.triggerFollow(s)}}}):t._e()])})),t.isLoading?e("loading"):e("no-more",{staticClass:"no-more"})],2)],1)},a=[],n=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),c=(e("6762"),e("2fdb"),e("89d4")),o=e("41ea"),r=e("d94a"),l=e("2f62"),u=e("1cb8");function d(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,i)}return e}function f(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?d(Object(e),!0).forEach((function(s){Object(n["a"])(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var p=21,h={activated:function(){this.list=[],this.page=0,this.isEnd=!1,this.fetchFansList()},data:function(){return{list:[],isLoading:!1,page:0,isEnd:!1,baseURL:o["a"],timer:null}},methods:{fetchFansList:function(){var t=this;if(!this.isEnd){var s="me"===this.$route.params.id?this.loginInfo.userId:this.$route.params.id;this.isLoading=!0,this.page++,this.$axios.get("/api/user/".concat(s,"/Fans/page/").concat(this.page,"/").concat(this.loginInfo.userId)).then((function(s){t.isLoading=!1,s.data.data.length<p&&(t.isEnd=!0),t.list=t.list.concat(s.data.data)}))}},triggerFollow:function(t){var s=this;this.timer||(this.timer=setTimeout((function(){s.$axios.get("/api/user/".concat(s.loginInfo.userId,"/triggerFollow/").concat(t.userId)).then((function(e){if("me"===s.$route.params.id)e.data.data.includes("取消")?(s.$refs.tip.show("取关成功"),t.bothStatus=!1):(s.$refs.tip.show("关注成功"),t.bothStatus=!0);else if(e.data.data.includes("取消"))switch(s.$refs.tip.show("取关成功"),t.myRelation){case"follow":t.myRelation="none";break;case"both":t.myRelation="fan";break}else switch(s.$refs.tip.show("关注成功"),t.myRelation){case"fan":t.myRelation="both";break;case"none":t.myRelation="follow";break}s.$socket.emit("sendTriggerFollow",{fromUserId:s.loginInfo.userId,toUserId:t.userId}),s.timer=null})).catch((function(t){s.$refs.tip.show("网络错误"),s.timer=null}))}),300))},chooseUser:function(t,s){t.target.className.includes("btn")||this.$router.push("/profile/".concat(s))},scrollToEnd:function(){this.fetchFansList()},getBtnHtml:function(t){switch(t){case"fan":case"none":return"关注";case"follow":return"已关注";case"both":return"互相关注"}}},computed:f({title:function(){return"me"===this.$route.params.id?"我的粉丝":"TA的粉丝"}},Object(l["c"])(["loginInfo"])),components:{MyList:c["a"],Loading:u["a"],NoMore:r["a"]}},m=h,b=(e("8aa9"),e("2877")),v=Object(b["a"])(m,i,a,!1,null,"188174fa",null);s["default"]=v.exports},cfc8:function(t,s,e){"use strict";var i=e("df3c"),a=e.n(i);a.a},df3c:function(t,s,e){}}]);
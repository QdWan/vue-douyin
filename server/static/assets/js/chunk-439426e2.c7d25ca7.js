(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-439426e2"],{df5d:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("scroll",{staticClass:"search-list",attrs:{pullup:!0},on:{scrollToEnd:t.scrollToEnd}},[e("tip",{ref:"tip"}),e("ul",{staticClass:"container"},t._l(t.searches,function(s,i){return e("li",{key:i,staticClass:"search-item",on:{click:function(s){t.chooseVideo(i)}}},[e("img",{staticClass:"videoCover",style:t.VideoItemHeightStyle,attrs:{src:s.Video.videoCover}}),e("div",{staticClass:"bottom"},[e("p",{staticClass:"videoDesc"},[t._v(t._s(s.Video.videoDesc.substr(0,40)+"..."))]),e("div",{staticClass:"userAndLike"},[e("div",{staticClass:"avatarAndName"},[e("img",{staticClass:"avatar",attrs:{src:""+t.baseURL+s.Video.userAvatar,alt:""}}),e("p",{staticClass:"name"},[t._v(t._s(s.Video.userNickname))])]),e("div",{staticClass:"like"},[e("span",{staticClass:"iconfont icon-heart"}),e("p",{staticClass:"likeNum"},[t._v(t._s(s.WSLCNum.likeNum))])])])])])}))],1)},a=[],c=e("be94"),o=e("41ea"),n=e("e9fc"),r=e("2f62"),l={props:{searches:{type:Array,default:function(){return[]}}},data:function(){return{baseURL:o["a"]}},computed:Object(c["a"])({VideoItemHeightStyle:function(){var t=document.body.clientWidth,s=t/2*1.3+"px";return{height:s}}},Object(r["c"])(["loginInfo"])),methods:{scrollToEnd:function(){0!==this.searches.length&&this.$emit("scrollToEnd")},chooseVideo:function(t){this.$emit("chooseVideo",t)},sliceVideoDesc:function(t){return"".concat(t.substr(0,20),"'...'")}},components:{Scroll:n["a"]}},u=l,d=(e("f883"),e("2877")),f=Object(d["a"])(u,i,a,!1,null,"7702cb0f",null);f.options.__file="searchVideoList.vue";s["default"]=f.exports},f883:function(t,s,e){"use strict";var i=e("fafb"),a=e.n(i);a.a},fafb:function(t,s,e){}}]);
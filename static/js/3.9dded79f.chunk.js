(window["webpackJsonpreact-js-course"]=window["webpackJsonpreact-js-course"]||[]).push([[3],{298:function(e,t,a){},299:function(e,t,a){e.exports={PostInput:"MyPosts_PostInput__1Ljwk",postsBlock:"MyPosts_postsBlock__2ifKf"}},300:function(e,t,a){e.exports={item:"Post_item__ihtu9"}},301:function(e,t,a){e.exports={"Profile-image":"ProfileInfo_Profile-image__1JMED",descBlock:"ProfileInfo_descBlock__2zXqS",userPhoto:"ProfileInfo_userPhoto__1UIR7"}},302:function(e,t,a){"use strict";a.r(t);var n=a(24),s=a(25),o=a(27),r=a(26),u=a(28),c=a(0),l=a.n(c),i=a(298),m=a.n(i),p=a(299),f=a.n(p),d=a(90),E=a(130),P=a(86),b=a(37),g=a(300),h=a.n(g),v=function(e){return l.a.createElement("div",{className:h.a.item},l.a.createElement("img",{src:"https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg",alt:""}),e.message,l.a.createElement("div",null,l.a.createElement("span",null,"Like")," ",e.likes))},j=Object(P.a)(10),D=Object(E.a)({form:"newPostText"})((function(e){return l.a.createElement("form",{className:f.a.PostInput,onSubmit:e.handleSubmit},l.a.createElement("h3",null,"My Posts"),l.a.createElement(d.a,{validate:[P.b,j],component:b.b,name:"newPostText",placeholder:"Post message"}),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",value:"Add Post"})),l.a.createElement("input",{type:"reset"}))})),I=function(e){return l.a.createElement("div",null,l.a.createElement(D,{onSubmit:function(t){e.addPost(t.newPostText)}}),l.a.createElement("div",{className:f.a.postsBlock},e.postsData.map((function(e){return l.a.createElement(v,{message:e.content,likesCount:e.likesCount})}))))},_=a(97),O=a(8),k=Object(O.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e(Object(_.e)(t))},addPost:function(t){e(Object(_.a)(t))}}}))(I),w=a(301),y=a.n(w),S=a(119),x=a.n(S),B=a(131),N=function(e){var t=Object(c.useState)(!1),a=Object(B.a)(t,2),n=a[0],s=a[1],o=Object(c.useState)(e.status),r=Object(B.a)(o,2),u=r[0],i=r[1];Object(c.useEffect)((function(){i(e.status)}),[e.status]);var m=function(t){t.preventDefault(),s(!1),e.updateStatus(u)};return l.a.createElement(l.a.Fragment,null,!n&&l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){e.pageID!==e.myID&&e.pageID||s(!0)}},e.status?u:"no-status")),n&&l.a.createElement("form",{onSubmit:m},l.a.createElement("input",{onBlur:m,onChange:function(e){i(e.target.value)},value:u,autoFocus:!0})))},T=a(35),C=function(e){return e.profile?l.a.createElement("div",null,l.a.createElement("div",{className:y.a.descBlock},l.a.createElement("img",{className:y.a.userPhoto,src:e.profile.photos.large?e.profile.photos.large:x.a,alt:"avatar"}),l.a.createElement(N,{status:e.status,updateStatus:e.updateStatus,pageID:e.pageID,myID:e.myID}))):l.a.createElement(T.a,null)},M=function(e){return e.profile?l.a.createElement("div",{className:m.a.Profile},l.a.createElement(C,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,pageID:e.match.params.userid,myID:e.myID}),l.a.createElement(k,null)):l.a.createElement(T.a,null)},U=a(5),J=a(29),F=a(59),L=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userid;e||(e=this.props.myID),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(M,this.props))}}]),t}(l.a.Component);t.default=Object(U.d)(J.f,F.a,Object(O.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,myID:e.auth.id}}),{getUserProfile:_.c,getUserStatus:_.d,updateStatus:_.f}))(L)}}]);
//# sourceMappingURL=3.9dded79f.chunk.js.map
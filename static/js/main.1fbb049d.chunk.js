(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={buttons:"Affairs_buttons__3jIdG",buttonOnClick:"Affairs_buttonOnClick__G2m6B"}},function(e,a,t){e.exports={wrap:"Message_wrap__3k2jG",avatar:"Message_avatar__Fa1Y3",corner:"Message_corner__X0mg3",allText:"Message_allText__1rQph",name:"Message_name__1ta80",message:"Message_message__1avDb",time:"Message_time__pbq-N"}},,function(e,a,t){e.exports={wrapp:"Greeting_wrapp__2PLdk",error:"Greeting_error__2drPb",errorNull:"Greeting_errorNull__3Avvu"}},,,function(e,a,t){e.exports={hoverBlock:"Header_hoverBlock__1kK9s",touch:"Header_touch__13A96",LinkClassName:"Header_LinkClassName__3aQnm"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2_8Sf",errorInput:"SuperInputText_errorInput__bLG68",error:"SuperInputText_error__LNard"}},function(e,a,t){e.exports={blue:"HW4_blue__379k-",column:"HW4_column__2NwEc",testSpanError:"HW4_testSpanError__3QWwZ"}},function(e,a,t){e.exports={default:"SuperButton_default__3pSku",red:"SuperButton_red__LQMJs",disabled:"SuperButton_disabled__1WgQs"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Bx01J",spanClassName:"SuperCheckbox_spanClassName__2uwo9"}},,,function(e,a,t){e.exports={App:"App_App__3hJxJ"}},function(e,a,t){e.exports={wrap:"hw2_wrap__2MTBr"}},function(e,a,t){e.exports={error:"Error_error__Qwjd8"}},,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(27),t(18)),s=t.n(o),u=t(6),m=t(10),i=t.n(m),d=t(1),p=t(5),E=t.n(p);var _=function(e){return r.a.createElement("div",{className:E.a.wrap},r.a.createElement("div",{className:E.a.avatar},r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:E.a.corner}),r.a.createElement("div",{className:E.a.allText},r.a.createElement("div",{className:E.a.name}," ",e.name),r.a.createElement("span",{className:E.a.message},e.message),r.a.createElement("div",{className:E.a.time},e.time)))},f="https://techmesse.com/img/anonymous.jpg",h="\u0412\u0430\u0434\u0438\u043c",v="\u041d\u0435\u0434\u0443\u0440\u043d\u043e \u0432\u044b\u0448\u043b\u043e, \u043f\u0440\u0430\u0432\u0434\u0430?",b="22:00";var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement("div",null,r.a.createElement(_,{avatar:f,name:h,message:v,time:b})))},g=t(2),N=t(9),C=t(14),w=t.n(C),x=["red","className"],j=function(e){var a=e.red,t=e.className,n=Object(N.a)(e,x),l="".concat(a?w.a.red:w.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var O=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement(j,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},S=t(4),y=t.n(S);var T=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(j,{className:"all"===e.filter?y.a.buttonOnClick:y.a.buttons,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(j,{className:"high"===e.filter?y.a.buttonOnClick:y.a.buttons,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(j,{className:"middle"===e.filter?y.a.buttonOnClick:y.a.buttons,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(j,{className:"low"===e.filter?y.a.buttonOnClick:y.a.buttons,onClick:function(){e.setFilter("low")}},"Low"))},I=t(19),A=t.n(I),B=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var J=function(){var e=Object(n.useState)(B),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(g.a)(c,2),s=o[0],u=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement("div",{className:A.a.wrap},r.a.createElement(T,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:s})),r.a.createElement("hr",null))},M=t(21),L=t(7),H=t.n(L),P=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?H.a.errorInput:H.a.input;return r.a.createElement("div",null,r.a.createElement("div",{className:l?H.a.error:H.a.errorNull},l),r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement(j,{onClick:n},"add"),r.a.createElement("span",null,c))},W=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),m=Object(g.a)(u,2),i=m[0],d=m[1],p=a.length;return r.a.createElement(P,{name:o,setNameCallback:function(e){e.currentTarget.value.trim()?(s(e.currentTarget.value.trim()),d("")):(d("Warning!!!"),s(""))},addUser:function(){t(o),alert("Hello ".concat(o," !"))},error:i,totalUsers:p})},F=t(30);var G=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,"homeworks 3",r.a.createElement("div",{className:H.a.wrapp},r.a.createElement(W,{users:t,addUserCallback:function(e){l([].concat(Object(M.a)(t),[{_id:Object(F.a)(),name:e}]))}})),r.a.createElement("hr",null))},Q=t(12),U=t.n(Q),K=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],X=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(N.a)(e,K),m="".concat(U.a.error," ").concat(s||""),i="".concat(U.a.input," ").concat(c?U.a.errorInput:U.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i},u)),c&&r.a.createElement("span",{className:m},c))},q=t(13),D=t.n(q),R=t(15),Y=t.n(R),Z=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(N.a)(e,Z),o="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(g.a)(s,2),m=u[0],i=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(X,{value:t,onChangeText:l,onEnter:o,error:c,spanClassName:D.a.testSpanError}),r.a.createElement(X,{className:D.a.blue}),r.a.createElement(j,null,"default"),r.a.createElement(j,{red:!0,onClick:o},"delete "),r.a.createElement(j,{disabled:!0},"disabled"),r.a.createElement($,{checked:m,onChangeChecked:i},"some text "),r.a.createElement($,{checked:m,onChange:function(e){return i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var V=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(J,null),r.a.createElement(G,null),r.a.createElement(z,null))},ee=t(20),ae=t.n(ee);var te=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:ae.a.error},"Error"),r.a.createElement("div",null))};var ne=function(){return r.a.createElement("div",null,"I'm Junior :(")};var re=function(){return r.a.createElement("div",null,"I'm JuniorPlus :)")},le="/pre-junior",ce="/junior",oe="/junior+";var se=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",element:r.a.createElement(d.a,{to:le})}),r.a.createElement(d.b,{path:le,element:r.a.createElement(V,null)}),r.a.createElement(d.b,{path:ce,element:r.a.createElement(ne,null)}),r.a.createElement(d.b,{path:oe,element:r.a.createElement(re,null)}),"// add routes",r.a.createElement(d.b,{path:"/*",element:r.a.createElement(te,null)})))};var ue=function(){return r.a.createElement("div",{className:i.a.hoverBlock},r.a.createElement(u.b,{to:le,className:i.a.LinkClassName},"PreJunior"),r.a.createElement(u.b,{to:ce,className:i.a.LinkClassName},"Junior"),r.a.createElement(u.b,{to:oe,className:i.a.LinkClassName},"JuniorPlus"),r.a.createElement("div",{className:i.a.touch},"Touch me ( \u0361\xb0 \u035c\u0296 \u0361\xb0) "))};var me=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(ue,null),r.a.createElement(se,null)))};var ie=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.1fbb049d.chunk.js.map
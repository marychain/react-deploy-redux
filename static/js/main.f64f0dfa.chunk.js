(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{153:function(A,e,t){},155:function(A,e,t){},195:function(A,e,t){"use strict";t.r(e);var i=t(0),c=t.n(i),a=t(37),g=t.n(a),s=(t(87),t(88),t(9)),l=t(81),k=t(8),J=t(6),o=t.p+"static/media/drhouse.19ccc6d6.jpg",S=t.p+"static/media/everybody.30c7ea26.jpg",n=t.p+"static/media/dr_house.24fbdd32.jpg",C=t(198),B=[{id:234234,author:"Doctor House",photoAuthor:o,nickname:"best_doctor",text:"Everybody lies..",contentPhoto:S,time:"25 april",comment:348,like:967,retvit:98},{id:234235,author:"Doctor House",photoAuthor:o,nickname:"best_doctor",text:"You can't always get everything you want, but if you try, it turns out that sometimes you can.",contentPhoto:n,time:"09 april",comment:568,like:67,retvit:23}],m={posts:[]},I=function(A){return{type:"add_post",payload:A}},Q=Object(J.b)({reducer:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"load_posts":return Object(k.a)(Object(k.a)({},A),{},{posts:B});case"add_post":return Object(k.a)(Object(k.a)({},A),{},{posts:[].concat(Object(l.a)(A.posts),[e.payload]),form:C.a});default:return A}},form:C.a}),E=Object(J.c)(Q),j=(t(153),t.p+"static/media/likes.9b4eef74.png"),r=t(2),h=function(A){var e=Object(s.d)((function(A){return A.reducer.posts}));return Object(r.jsx)("div",{className:"App",children:e.map((function(A){return Object(r.jsxs)("div",{className:"post",children:[Object(r.jsx)("div",{className:"photo",children:Object(r.jsx)("img",{className:"photo__author",src:A.photoAuthor,alt:"#"})}),Object(r.jsxs)("div",{className:"author__post",children:[Object(r.jsxs)("div",{className:"author",children:[Object(r.jsx)("h3",{className:"name",children:A.author}),Object(r.jsx)("img",{className:"photo__check",src:"data:image/png;base64,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",alt:"#"}),Object(r.jsxs)("a",{className:"link__nickname",href:"https://www.google.com/search?q=dr+house&oq=dr+house&aqs=chrome.0.69i59j46j69i59j0l7.8516j0j7&sourceid=chrome&ie=UTF-8",children:["@",A.nickname]}),Object(r.jsxs)("time",{className:"date",children:["\u2022 ",A.time]})]}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h2",{className:"content__message",children:A.text}),Object(r.jsx)("img",{className:"content__photo",src:A.contentPhoto,alt:"#"})]}),Object(r.jsxs)("div",{className:"activity",children:[Object(r.jsxs)("div",{className:"activity__items",children:[Object(r.jsx)("img",{className:"activity__photo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3gAAAN4B3eqDagAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKQSURBVFiFxde7bxVHFMfxzyy2eBROiHgIxUVoLMUyaZKCl0RoQ0SBKCgAIapUARqSKpHyB0RJQ0MDEhAFIVFFQi5MEfFoEmQoSI2gACEXqUz8mBR7Fsbre41l3Xs90mh3ds+c729m58ycTTln61mqdaVjaLWGKaUh7Men2FlUeFnUp7ifc55fleOcc9eKzTiB65hBXmWdiT4nsHklRuq0BlJKFc7gJ3zcev0Cz2O0r+LZjpiN0S72P+BKznnxvTOAg3hSjGYBkziPsZVGE/3HcC76LBR+nuDgMvtW56OYLTrdxsT7oCuImQgfjb9ZHO0oACcxF4YvsG+t4A5C9oXPHIyTSwSE0gb+CKO9ghciRsN3I2KiFHA3XjzDSK/hhYiRYGTcbQLgWPGNjvQLXog4UvCOweVoTPUbXoiYCublCnsiIh8si9H+lYa1p8J4NKYHKOBxXMcr9bYJHw1QwK64vqrwTzQ+G6CAz+P6uMKf0TiVUtrWb3JKaSe+juZf8IF3J92lAUTA78F6ja3Nw++9i80LfYR/W3C+KXfCCrfixSJ+xFAPwRV+LeBT2PBWQBhtUq+HxughxnsAP4R7hd8/FElK23gjfolZaA6Nc2uAbsFX6pygzJSuYbi0XZIT5pzf4HxKaTKUDmFDaxXvVWdAM/gXw5ZmRF+qk5qNRbdpXMw5T2qXLiM4XKyH3fFsGN/hv9aoutUF9ZZ7GlXX2eoi4EY4uRPtA5amae26qM4Rp/EbTmH7qj5XB/gXmA/HZ9Wn5WIBu4qt+BCfqJPQNUdMGz6i3prL9Lq5f43jvdwXOoXhlOXTO4eb2NVreFvAzy3wNC5gRz/AncLwXoTS3+rs6NGykOlD6fhnNMiy7n/H/wNHr1201aV+7gAAAABJRU5ErkJggg==",alt:"#"}),Object(r.jsx)("p",{children:A.comment})]}),Object(r.jsxs)("div",{className:"activity__items",children:[Object(r.jsx)("img",{className:"activity__photo",src:"data:image/png;base64,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",alt:"#"}),Object(r.jsx)("p",{children:A.retvit})]}),Object(r.jsxs)("div",{className:"activity__items",children:[Object(r.jsx)("img",{className:"activity__photo",src:j,alt:"#"}),Object(r.jsx)("p",{children:A.like})]}),Object(r.jsx)("div",{className:"activity__items",children:Object(r.jsx)("img",{className:"activity__photo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFASURBVFiF7dc/TgJBGAXwH2iPLbEi6iloPYMF2noGWzgFNBr/YeFZ9AYSG6OJxsJeWAuGZJElDGF3wcSXTPJm9pt5b76Zndllzais0LeKVuB3GK1uJx4VdJGEchEMrUW8VBPzxEsxsUi8UBNVnP8S+pzDkxCbq4lehkAnVe9kGOzmJb6bIV5FO9XWlp2l+qLBY9L0jsfAeziV/c6PwrNeqD/gI2L8KGybnU3bdAbSqIc+UQPH4BtvkbGWiS3t9NpYA5Ml2MJx4H0MC9JLX2B9JBMDJ7gMvIKrggy0cBN4gv5kCRqpoIbisJ/iB2zAHvg38G/gTxt4nsOXQuxllIVb48OE8alWuoEhrlfojw3YA1kZaOKsIL3mPAOvqbbDUIrGS7qyg4HF3/x5lSfUmP45reEIe/lOdAYD3OOrYJ04/AAnsnmy+0YvEAAAAABJRU5ErkJggg==",alt:"#"})})]})]})]},A.id)}))})},p=t(39),w=t(82),d=t(197),u=t(196),R=t.p+"static/media/wilson.4b58c9a8.jpg",O=t.p+"static/media/cuddy.f00f3b19.jpg",b=(t(155),function(A){var e=Object(s.c)(),t=Object(i.useState)({id:234236,author:"",photoAuthor:o,nickname:"nick_name",text:"",contentPhoto:"",time:"23 april",comment:674,like:8964,retvit:367}),c=Object(w.a)(t,2),a=c[0],g=c[1],l=function(A){g(Object(k.a)(Object(k.a)({},a),{},Object(p.a)({},A.target.name,A.target.value)))};return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:"form",onSubmit:function(A){A.preventDefault(),e(I(a)),a.id=a.id+1},children:[Object(r.jsx)("h1",{className:"form__head",children:"Enter public data"}),Object(r.jsxs)("div",{className:"form__items",children:[Object(r.jsx)("div",{className:"items__fields",children:Object(r.jsx)("div",{children:Object(r.jsx)(d.a,{className:"items__field",name:"text",component:"input",type:"text",placeholder:"Input text*",value:a.text,onChange:l})})}),Object(r.jsx)("div",{className:"items__fields",children:Object(r.jsx)("div",{children:Object(r.jsx)(d.a,{className:"items__field",name:"contentPhoto",component:"input",type:"text",placeholder:"link img*",value:a.contentPhoto,onChange:l})})}),Object(r.jsxs)("div",{className:"items__fields",children:[Object(r.jsx)("label",{className:"items__field__label",children:"Author select"}),Object(r.jsx)("div",{children:Object(r.jsxs)(d.a,{className:"items__field",name:"author",component:"select",onChange:function(A){"James Wilson"===A.target.value?g(Object(k.a)(Object(k.a)({},a),{},{author:A.target.value,photoAuthor:R})):"Lisa Cuddy"===A.target.value?g(Object(k.a)(Object(k.a)({},a),{},{author:A.target.value,photoAuthor:O})):"Doctor House"===A.target.value&&g(Object(k.a)(Object(k.a)({},a),{},{author:A.target.value,photoAuthor:o}))},value:a.author,children:[Object(r.jsx)("option",{value:"Doctor House",children:"Doctor House"}),Object(r.jsx)("option",{value:"Lisa Cuddy",children:"Lisa Cuddy"}),Object(r.jsx)("option",{value:"James Wilson",children:"James Wilson"})]})})]})]}),Object(r.jsx)("button",{type:"submit",className:"form__btn",children:"Add"})]})})}),D=b=Object(u.a)({form:"contact"})(b);var M=function(){var A=Object(s.c)();return Object(i.useEffect)((function(){A({type:"load_posts"})}),[A]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h,{}),Object(r.jsx)(D,{onSubmit:function(e){A(I(e)),console.log(e)}})]})},L=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,199)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,g=e.getTTFB;t(A),i(A),c(A),a(A),g(A)}))};g.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{store:E,children:Object(r.jsx)(M,{})})}),document.getElementById("root")),L()},87:function(A,e,t){},88:function(A,e,t){}},[[195,1,2]]]);
//# sourceMappingURL=main.f64f0dfa.chunk.js.map
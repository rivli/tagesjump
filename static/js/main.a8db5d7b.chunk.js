(this.webpackJsonptagesjumptestapp=this.webpackJsonptagesjumptestapp||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(8),s=c.n(n),i=(c(25),c(5)),o=c(3),l=c(18),u=c(19),j=c(10),d=c(2),p="LOAD_PRODUCTS",O="LOAD_MATERIALS",b="ADD_TO_CART",f="REMOVE_FROM_CART",v="ADD_TO_FAVORITES",m="REMOVE_FROM_FAVORITES",h={items:[],materials:{}};var x={cart:localStorage.cart?JSON.parse(localStorage.cart):{},favorites:localStorage.favorites?JSON.parse(localStorage.favorites):{}};var _=Object(o.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case p:return Object(d.a)(Object(d.a)({},e),{},{items:Object(j.a)(r)});case O:return Object(d.a)(Object(d.a)({},e),{},{materials:Object(d.a)({},r)});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case b:var a=e.cart;return a[r.id]=r,Object(d.a)(Object(d.a)({},e),{},{cart:Object(d.a)({},a)});case f:return delete(a=e.cart)[r],Object(d.a)(Object(d.a)({},e),{},{cart:Object(d.a)({},a)});case v:var n=e.favorites;return n[r.id]=r,Object(d.a)(Object(d.a)({},e),{},{favorites:Object(d.a)({},n)});case m:return delete(n=e.favorites)[r],Object(d.a)(Object(d.a)({},e),{},{favorites:Object(d.a)({},n)});default:return e}}}),g=[u.a],y=Object(o.createStore)(_,{},Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,g))),N=(c(32),c(33),c(34),c(1)),S=function(){return Object(N.jsxs)("header",{children:[Object(N.jsxs)("ul",{className:"breadcrumb",children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"*",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"*",children:"\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"*",children:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u044b \u0441\u0442\u0435\u043b\u043b\u0430\u0436\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c"})})]}),Object(N.jsx)("h1",{children:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u044b \u0441\u0442\u0435\u043b\u043b\u0430\u0436\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c"})]})},C=c(9),T=c(16),k=c(20),A=c(7),F=c.n(A),E=c(15),R=(c(37),c(38),Object(i.b)((function(e){return{cart:e.user.cart,favorites:e.user.favorites}}),{addToCart:function(e){return function(t){t({type:b,payload:e})}},removeFromCart:function(e){return function(t){t({type:f,payload:e})}},addToFavorites:function(e){return function(t){t({type:v,payload:e})}},removeFromFavorites:function(e){return function(t){t({type:m,payload:e})}}})((function(e){var t=e.product,c=e.addToCart,r=e.removeFromCart,a=e.cart,n=e.addToFavorites,s=e.removeFromFavorites,i=e.favorites;return Object(N.jsxs)("div",{className:"product",children:[t.price.old_price?Object(N.jsx)("div",{className:"product__sale",children:"\u0421\u043a\u0438\u0434\u043a\u0430"}):"",Object(N.jsx)("img",{className:"product__image",src:t.image.url,alt:t.name}),Object(N.jsx)("div",{className:"product__code",children:t.code}),Object(N.jsx)("div",{className:"product__title",children:t.name}),Object(N.jsxs)("div",{className:"product__actionsAndPriceBlock",children:[Object(N.jsxs)("div",{className:"product__price",children:[t.price.old_price?Object(N.jsxs)("span",{className:"product__oldPrice",children:[t.price.old_price,"\u20bd"]}):"",t.price.current_price,"\u20bd"]}),Object(N.jsxs)("div",{className:"product__actions",children:[a[t.id]?Object(N.jsx)("img",{src:"/images/icons/inCart.svg",className:"product__addToCart",alt:"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b",title:"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b",onClick:function(){return r(t.id)}}):Object(N.jsx)("img",{src:"/images/icons/cart.svg",className:"product__addToCart",alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",onClick:function(){return c(t)}}),i[t.id]?Object(N.jsx)("img",{src:"/images/icons/redFavorite.svg",alt:"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e",title:"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e",onClick:function(){return s(t.id)}}):Object(N.jsx)("img",{src:"/images/icons/favorite.svg",alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",onClick:function(){return n(t)}})]})]})]})}))),w=Object(i.b)((function(e){return{products:e.products,cart:e.user.cart,favorites:e.user.favorites}}),{loadProducts:function(){return function(){var e=Object(E.a)(F.a.mark((function e(t){var c,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./dataStorage/items.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,t({type:p,payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},loadMaterials:function(){return function(){var e=Object(E.a)(F.a.mark((function e(t){var c,r,a,n,s,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./dataStorage/materials.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,a={},n=Object(k.a)(r);try{for(n.s();!(s=n.n()).done;)i=s.value,a[i.id]=i}catch(o){n.e(o)}finally{n.f()}t({type:O,payload:a}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.products,c=e.loadProducts,a=e.loadMaterials,n=e.favorites,s=e.cart;Object(r.useEffect)((function(){c(),a()}),[c,a]);var i=Object(r.useState)({sortPrice:"asc",material:"any"}),o=Object(T.a)(i,2),l=o[0],u=o[1],p=Object(r.useState)([]),O=Object(T.a)(p,2),b=O[0],f=O[1],v=l.sortPrice,m=l.material,h=t.items,x=t.materials,_=function(e){u(Object(d.a)(Object(d.a)({},l),{},Object(C.a)({},e.target.name,e.target.value)))};return Object(r.useEffect)((function(){h.sort((function(e,t){return e.price.current_price-t.price.current_price})),f(h)}),[h]),Object(r.useEffect)((function(){var e=[];"any"!==m?Object.keys(h).map((function(t){h[t].material==m&&e.push(h[t])})):e=Object(j.a)(h),"asc"===v?e.sort((function(e,t){return e.price.current_price-t.price.current_price})):e.sort((function(e,t){return t.price.current_price-e.price.current_price})),f(e)}),[l,f]),Object(r.useEffect)((function(){return function(){localStorage.setItem("cart",JSON.stringify(s)),localStorage.setItem("favorites",JSON.stringify(n))}})),Object(N.jsxs)("main",{children:[Object(N.jsxs)("section",{children:[Object(N.jsxs)("div",{className:"selector",children:[Object(N.jsx)("div",{className:"selector__title",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"}),Object(N.jsxs)("select",{name:"sortPrice",onChange:function(e){return _(e)},value:v,children:[Object(N.jsx)("option",{value:"asc",children:"\u0426\u0435\u043d\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"}),Object(N.jsx)("option",{value:"desc",children:"\u0426\u0435\u043d\u0430 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"})]})]}),Object(N.jsxs)("div",{className:"selector",children:[Object(N.jsx)("div",{className:"selector__title",children:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b"}),Object(N.jsxs)("select",{name:"material",onChange:function(e){return _(e)},value:m,children:[Object(N.jsx)("option",{value:"any",children:"\u041b\u044e\u0431\u043e\u0439"}),0!==Object.keys(x).length?Object.keys(x).map((function(e){return Object(N.jsx)("option",{value:x[e].id,children:x[e].name},e)})):""]})]})]}),Object(N.jsx)("section",{className:"products",children:0===Object.keys(b).length?Object(N.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0442\u043e\u0432\u0430\u0440\u044b"}):Object.keys(b).map((function(e){return Object(N.jsx)(R,{product:b[e]},e)}))})]})}));var M=function(){return Object(N.jsx)(i.a,{store:y,children:Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(S,{}),Object(N.jsx)(w,{})]})})};s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(M,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a8db5d7b.chunk.js.map
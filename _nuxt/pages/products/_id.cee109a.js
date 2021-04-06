(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{275:function(t,e,r){var content=r(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("0e77f076",content,!0,{sourceMap:!1})},276:function(t,e,r){var content=r(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("3279ce56",content,!0,{sourceMap:!1})},309:function(t,e,r){"use strict";var n=r(275);r.n(n).a},310:function(t,e,r){(e=r(9)(!1)).push([t.i,".text[data-v-9e423a56]{color:rgba(0,0,0,.6)}",""]),t.exports=e},311:function(t,e,r){"use strict";var n=r(276);r.n(n).a},312:function(t,e,r){(e=r(9)(!1)).push([t.i,"",""]),t.exports=e},325:function(t,e,r){"use strict";r.r(e);r(260);var n=r(0).default.extend({name:"ProductPageHeader",props:{title:{type:String,required:!0},price:{type:Number,required:!0},size:{type:String,required:!0}}}),c=(r(311),r(4)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"light mb-2 py-4",attrs:{flat:""}},[r("v-card-text",{staticClass:"pa-0 text-center"},[r("span",{staticClass:"text-h4 mt-n1 font-weight-bold d-block mb-1"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"d-inline-flex align-center mx-auto"},[r("div",{staticClass:"text text-body-2 font-weight-medium"},[t._v("\n        $"+t._s(t.price)+"\n      ")]),t._v(" "),r("div",{staticClass:"text text-caption ml-3 font-weight-medium text-capitalize light lighten-1 px-2 rounded"},[t._v("\n        "+t._s(t.size)+"\n      ")])])])],1)}),[],!1,null,"6b25a3fa",null);e.default=component.exports},345:function(t,e,r){"use strict";r.r(e);r(134);var n=r(0),c=r(76),o=r.n(c);r(132);n.default.use(o.a);var l=n.default.extend({head:function(){return{title:"Store"}},data:function(){return{id:this.$route.params.id,cartCount:1,isOverlayVisible:!1,isImageLoaded:!1}},computed:{product:function(){var t=this;return this.$store.state.products.all.find((function(e){return e.id===t.id}))}},methods:{addToCart:function(){this.$store.dispatch("cart/addProductToCart",{productId:this.id,size:this.product.size,count:this.cartCount})}}}),d=(r(309),r(4)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column"},[r("v-spacer"),t._v(" "),r("ProductPageHeader",{attrs:{title:t.product.title,price:t.product.price,size:t.product.size}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-img",{staticClass:"elevation-3 rounded mx-auto light darken-2 flex-shrink-1 flex-grow-0 mb-6",attrs:{src:t.product.imageSrc,"aspect-ratio":1,"max-width":t.isImageLoaded?350:0,width:"100%"},on:{load:function(e){t.isImageLoaded=!0}}}),t._v(" "),t.isImageLoaded?t._e():r("v-card",{staticClass:"d-flex align-center justify-center mx-auto flex-shrink-1 flex-grow-0 mb-6",attrs:{flat:"",color:"transparent","aspect-ratio":1,"max-width":350,width:"100%"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"accent"}})],1),t._v(" "),r("v-spacer"),t._v(" "),r("CartButton",{on:{click:function(e){t.isOverlayVisible=!0}}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-card",{staticClass:"primary",attrs:{elevation:"0"}},[r("div",{staticClass:"d-flex pa-3 align-center"},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{fab:"",color:"accent",elevation:"0",disabled:t.cartCount<=1,"x-small":""},on:{click:function(e){t.cartCount--}}},[r("v-icon",{attrs:{small:""}},[t._v("\n          mdi-minus\n        ")])],1),t._v(" "),r("span",{staticClass:"text text-body-1 font-weight-medium mx-6"},[t._v("\n        "+t._s(t.cartCount)+"\n      ")]),t._v(" "),r("v-btn",{attrs:{fab:"",color:"accent",elevation:"0","x-small":""},on:{click:function(e){t.cartCount++}}},[r("v-icon",{attrs:{small:""}},[t._v("\n          mdi-plus\n        ")])],1),t._v(" "),r("v-spacer")],1),t._v(" "),r("div",{staticClass:"pa-3 pt-0"},[r("v-btn",{staticClass:"accent lighten-0",attrs:{block:"",elevation:"3"},on:{click:t.addToCart}},[t._v("\n        Add To Cart\n        "),r("v-icon",{staticClass:"ml-auto",attrs:{right:"",dense:""}},[t._v("\n          mdi-cart-arrow-down\n        ")])],1)],1)]),t._v(" "),r("v-spacer"),t._v(" "),r("CartCheckoutDialogs",{attrs:{isCartVisible:t.isOverlayVisible},on:{"hide-self":function(e){t.isOverlayVisible=!1}}})],1)}),[],!1,null,"9e423a56",null);e.default=component.exports;installComponents(component,{ProductPageHeader:r(325).default,CartButton:r(279).default,CartCheckoutDialogs:r(280).default})}}]);
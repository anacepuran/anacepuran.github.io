(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"078a":function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",[e("div",{staticClass:"text-h5 q-ma-lg"},[a._v(a._s(a.$t("customerAdm")))]),e("div",{staticClass:"row q-ma-md"},[e("div",{staticClass:"col"},[e("q-table",{attrs:{title:a.$t("customers"),data:a.customers,columns:a.columns,"row-key":"name","hide-bottom":"","hide-header":""},scopedSlots:a._u([{key:"header",fn:function(t){return[e("q-tr",{attrs:{props:t}},[e("q-th",{attrs:{"auto-width":""}}),a._l(t.cols,(function(o){return e("q-th",{key:o.name,attrs:{props:t}},[a._v("\n              "+a._s(o.label)+"\n            ")])}))],2)]}},{key:"body",fn:function(t){return[e("q-tr",{attrs:{props:t}},[e("q-td",{attrs:{"auto-width":""}},[e("q-btn",{attrs:{size:"sm",color:"primary",round:"",dense:"",icon:t.expand?"remove":"add"},on:{click:function(a){t.expand=!t.expand}}})],1),a._l(t.cols,(function(o){return e("q-td",{key:o.name,attrs:{props:t}},[e("div",{staticClass:"text-h6 q-ma-sm"},[a._v(a._s(o.value))])])})),e("q-td",{attrs:{"auto-width":""}},[e("q-btn",{attrs:{size:"sm",round:"",color:"negative",icon:"delete"},on:{click:function(t){a.confirmDelete=!0}}})],1)],2),e("q-tr",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"props.expand"}],attrs:{props:t}},[e("q-td",{attrs:{colspan:"100%"}},[e("div",{staticClass:"q-pa-md"},[e("q-table",{attrs:{"card-class":"bg-light-green-3 text-bold",grid:"",data:t.row.products,columns:a.columnsProducts,"row-key":"name","hide-header":"","hide-bottom":"","virtual-scroll":"",pagination:a.pagination,"rows-per-page-options":[0]},on:{"update:pagination":function(t){a.pagination=t}}})],1),e("div",{staticClass:"row q-ma-md"},[e("q-space"),e("q-btn",{attrs:{label:a.$t("addProduct"),color:"primary"},on:{click:function(t){a.addProduct=!0}}})],1)])],1)]}}])})],1)]),e("div",{staticClass:"row q-ma-md"},[e("q-space"),e("q-btn",{attrs:{icon:"add",color:"primary",size:"md",label:"Dodaj stranko"},on:{click:function(t){a.addCustomer=!0}}})],1),e("q-dialog",{attrs:{persistent:""},model:{value:a.confirmDelete,callback:function(t){a.confirmDelete=t},expression:"confirmDelete"}},[e("q-card",[e("q-card-section",{staticClass:"row items-center"},[e("q-avatar",{attrs:{icon:"delete",color:"red","text-color":"white",size:"md"}}),e("span",{staticClass:"q-ml-sm"},[a._v("Ali ste prepričani?")])],1),e("q-card-actions",[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Prekliči",color:"grey-7"}}),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Izbriši",color:"negative"}})],1)],1)],1),e("q-dialog",{model:{value:a.addProduct,callback:function(t){a.addProduct=t},expression:"addProduct"}},[e("q-card",{staticStyle:{width:"80vh"}},[e("q-card-section",{staticClass:"row items-center bg-secondary text-white"},[e("div",{staticClass:"text-h6"},[a._v(a._s(a.$t("addProduct")))]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:a.onReset}})],1),e("q-card-section",[e("q-input",{staticClass:"q-ma-md",attrs:{filled:"",label:a.$t("product")},model:{value:a.newProduct,callback:function(t){a.newProduct=t},expression:"newProduct"}}),e("q-input",{staticClass:"q-ma-md",attrs:{filled:"",label:a.$t("packing")},model:{value:a.newProductPacking,callback:function(t){a.newProductPacking=t},expression:"newProductPacking"}})],1),e("q-card-actions",{staticClass:"row"},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ma-sm",attrs:{label:a.$t("cancel"),flat:"",color:"secondary"}}),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ma-sm",attrs:{label:a.$t("add"),color:"primary"}})],1)],1)],1),e("q-dialog",{model:{value:a.addCustomer,callback:function(t){a.addCustomer=t},expression:"addCustomer"}},[e("q-card",{staticStyle:{width:"80vh"}},[e("q-card-section",{staticClass:"row items-center bg-secondary text-white"},[e("div",{staticClass:"text-h6"},[a._v(a._s(a.$t("addCustomer")))]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:a.onReset}})],1),e("q-card-section",{staticClass:"row"},[e("q-input",{staticClass:"col-8 q-ma-md",attrs:{filled:"",label:a.$t("customer")},model:{value:a.newCustomer,callback:function(t){a.newCustomer=t},expression:"newCustomer"}}),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ma-lg",attrs:{label:"Dodaj",color:"primary"}})],1)],1)],1)],1)},c=[],s={name:"Users",data(){return{pagination:{rowsPerPage:0},filter:"",newCustomer:"",newProduct:"",newProductPacking:"",addProduct:!1,customers:[{name:"Hofer",products:[{product:"Solata",packing:"500 glav/paleto"},{product:"Radič",packing:"100 glav/paleto"},{product:"Špinača",packing:"/"},{product:"BIO Solata",packing:"100 glav/paleto"},{product:"Solata Kristalka",packing:"100 glav/paleto"},{product:"Solata Rdeča Kristalka",packing:"/"}]},{name:"Mercator",products:[{product:"Solata",packing:"200 glav/paleto"},{product:"Radič",packing:"200 glav/paleto"},{product:"Špinača",packing:"/"}]},{name:"Spar",products:[{product:"Solata",packing:"/"},{product:"Radič",packing:"/"},{product:"Špinača",packing:"/"}]},{name:"Lidl",products:[{product:"Solata",packing:"/"},{product:"Radič",packing:"50 glav/paleto"},{product:"Špinača",packing:"/"}]}],addCustomer:!1,confirmDelete:!1,columns:[{name:"name",align:"left",label:"Stranka",field:"name"}],filterProducts:"",columnsProducts:[{name:"product",required:!0,label:"Product",align:"left",field:a=>a.product,sortable:!0},{name:"packing",align:"center",label:"Packing",field:"packing"}],data:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37},{name:"Eclair",calories:262,fat:16,carbs:23},{name:"Cupcake",calories:305,fat:3.7,carbs:67},{name:"Gingerbread",calories:356,fat:16,carbs:49},{name:"Jelly bean",calories:375,fat:0,carbs:94},{name:"Lollipop",calories:392,fat:.2,carbs:98},{name:"Honeycomb",calories:408,fat:3.2,carbs:87},{name:"Donut",calories:452,fat:25,carbs:51},{name:"KitKat",calories:518,fat:26,carbs:65}]}},methods:{onReset(){console.log("reset")}}},r=s,n=(e("dc8d"),e("2877")),i=e("9989"),l=e("eaac"),d=e("bd08"),p=e("357e"),u=e("db86"),m=e("9c40"),b=e("2c91"),q=e("27f9"),f=e("0016"),g=e("24e8"),v=e("f09f"),w=e("a370"),k=e("cb32"),C=e("4b7e"),h=e("7f67"),P=e("eebe"),x=e.n(P),y=Object(n["a"])(r,o,c,!1,null,null,null);t["default"]=y.exports;x()(y,"components",{QPage:i["a"],QTable:l["a"],QTr:d["a"],QTh:p["a"],QTd:u["a"],QBtn:m["a"],QSpace:b["a"],QInput:q["a"],QIcon:f["a"],QDialog:g["a"],QCard:v["a"],QCardSection:w["a"],QAvatar:k["a"],QCardActions:C["a"]}),x()(y,"directives",{ClosePopup:h["a"]})},"8bbf":function(a,t,e){},dc8d:function(a,t,e){"use strict";e("8bbf")}}]);
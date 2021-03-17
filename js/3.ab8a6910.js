(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2e81":function(e,s,t){"use strict";t("ac0b")},"2ff9":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("q-page",{staticClass:"q-ma-lg window-width"},[t("q-card",{staticClass:"q-ma-lg",attrs:{flat:"",bordered:""}},[t("q-card-section",{attrs:{horizontal:""}},[t("q-card-section",{staticClass:"q-ma-md"},[t("div",{staticClass:"text-overline"},[e._v("Profile")]),t("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[e._v(e._s(e.user.username))]),t("div",{staticClass:"text-caption"},[e._v("\n          "+e._s(e.user.name)+" "+e._s(e.user.surname)+"\n        ")]),t("div",{staticClass:"text-caption"},[e._v("\n          "+e._s(e.user.email)+"\n        ")])])],1),t("q-separator"),t("q-card-actions",[t("div",{staticClass:"text-overline q-ma-md"},[e._v("Last login: "+e._s(e.user.last_login))]),t("q-space"),t("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Edit profile"},on:{click:function(s){e.editUserData=!0}}})],1)],1),t("q-card",{staticClass:"q-ma-lg"},[t("q-card-section",{staticClass:"bg-secondary"},[t("div",{staticClass:"text-white text-h6"},[e._v("My projects")])]),t("q-list",{attrs:{bordered:"",separator:""}},e._l(e.myProjects,(function(s){return t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s.name,attrs:{clickable:""}},[t("q-item-section",{staticClass:"col-1",staticStyle:{width:"3%"}},[t("q-avatar",{attrs:{size:"md",color:"secondary","text-color":"white",icon:"folder_open"}})],1),t("q-item-section",[t("q-item-label",{staticClass:"q-ma-sm",staticStyle:{"font-size":"2.2vh"}},[e._v(e._s(s.name))]),t("q-item-label",{staticClass:"q-ma-sm",attrs:{caption:""}},[e._v("Deadline: "+e._s(s.deadline))])],1)],1)})),1)],1),t("q-dialog",{model:{value:e.editUserData,callback:function(s){e.editUserData=s},expression:"editUserData"}},[t("q-card",{staticClass:"q-pa-md",staticStyle:{width:"80vh"}},[t("q-card-section",{staticClass:"row items-center"},[t("div",{staticClass:"text-h6"},[e._v(e._s(e.dialogTitle))]),t("q-space"),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),t("UserForm",{attrs:{newUser:e.user,editUser:e.editUserData},on:{submitUser:function(s){return e.updateProfileInfo()}}})],1)],1)],1)},a=[],i=t("7053"),n=t.n(i),o=t("2f62"),l=t("aa74"),u={name:"Users",components:{UserForm:l["a"]},data(){return{user:{},editUserData:!1,dialogTitle:"Edit your profile information",projects:[]}},computed:{myProjects(){var e=this.getProjects(),s=[];for(var t in e)for(var r in e[t].users)e[t].users[r].user_name===this.user.username&&s.push(e[t]);return s}},methods:n()(n()(n()(n()(n()({},Object(o["c"])("user",["getCurrentUser"])),Object(o["b"])("user",["updateUser","updateCurrentUser"])),Object(o["c"])("project",["getProjects"])),Object(o["b"])("project",["fetchProjects"])),{},{updateProfileInfo(){this.editUserData=!1,setTimeout((()=>{this.user=this.getCurrentUser(),console.log("updated"),console.log(this.user)}),1e3)}}),mounted(){this.user=this.getCurrentUser(),this.fetchProjects()}},c=u,p=(t("2e81"),t("2877")),m=t("9989"),d=t("f09f"),h=t("a370"),U=t("eb85"),f=t("4b7e"),b=t("2c91"),v=t("9c40"),q=t("1c1c"),g=t("66e5"),w=t("4074"),_=t("cb32"),y=t("0170"),C=t("24e8"),P=t("714f"),x=t("7f67"),$=t("eebe"),j=t.n($),Q=Object(p["a"])(c,r,a,!1,null,null,null);s["default"]=Q.exports;j()(Q,"components",{QPage:m["a"],QCard:d["a"],QCardSection:h["a"],QSeparator:U["a"],QCardActions:f["a"],QSpace:b["a"],QBtn:v["a"],QList:q["a"],QItem:g["a"],QItemSection:w["a"],QAvatar:_["a"],QItemLabel:y["a"],QDialog:C["a"]}),j()(Q,"directives",{Ripple:P["a"],ClosePopup:x["a"]})},aa74:function(e,s,t){"use strict";var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.onReset}},[t("q-input",{attrs:{filled:"",label:"Name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.pushUser.name,callback:function(s){e.$set(e.pushUser,"name",s)},expression:"pushUser.name"}}),t("q-input",{attrs:{filled:"",label:"Surname","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.pushUser.surname,callback:function(s){e.$set(e.pushUser,"surname",s)},expression:"pushUser.surname"}}),t("q-input",{attrs:{filled:"",label:"Email",type:"email","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.pushUser.email,callback:function(s){e.$set(e.pushUser,"email",s)},expression:"pushUser.email"}}),t("q-input",{attrs:{filled:"",label:"Username","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.pushUser.username,callback:function(s){e.$set(e.pushUser,"username",s)},expression:"pushUser.username"}}),e.changePassword?t("q-input",{attrs:{filled:"",label:"Password","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.pushUser.password,callback:function(s){e.$set(e.pushUser,"password",s)},expression:"pushUser.password"}}):e._e(),!e.changePassword&&e.$props.editUser?t("q-btn",{staticClass:"q-ma-md",attrs:{size:"sm",label:"Change password"},on:{click:function(s){e.changePassword=!0}}}):e._e(),e.changePassword&&e.$props.editUser?t("q-btn",{staticStyle:{"margin-top":"-10px"},attrs:{size:"sm",label:"Leave the old password"},on:{click:function(s){e.changePassword=!1,e.pushUser.password=""}}}):e._e(),"/users"===this.$router.currentRoute.path?t("div",[t("q-select",{attrs:{filled:"",options:e.permissionOptions,label:"Permissions",width:"100%"},model:{value:e.pushUser.permissions,callback:function(s){e.$set(e.pushUser,"permissions",s)},expression:"pushUser.permissions"}})],1):e._e(),t("q-card-actions",{attrs:{horizontal:"",align:"right"}},[t("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),t("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1),t("div",{staticClass:"q-ma-md text-center"},[""!=e.error?t("p",{staticStyle:{color:"red"}},[e._v(e._s(e.error))]):e._e()])],1)},a=[],i=t("7053"),n=t.n(i),o=t("2f62"),l={name:"UserForm",data(){return{error:"",permissionOptions:["Admin","User"],changePassword:!1,allUsers:[],pushUser:{name:"",surname:"",email:"",username:"",password:"",permissions:"",last_login:""}}},props:{editUser:{type:Boolean},newUser:{type:Object}},mounted(){var e=this.getUsers();this.allUsers=this.usersToArray(e),this.onReset(),this.$props.editUser||(this.changePassword=!0)},methods:n()(n()(n()({},Object(o["c"])("user",["getUsers"])),Object(o["b"])("user",["postUser","updateUser"])),{},{usersToArray(e){var s=[];for(var t in e)s.push(e[t]);return s},onSubmit(){if(this.pushUser.username!==this.newUser.username){var e=!1;for(var s in this.allUsers)this.pushUser.username===this.allUsers[s].username&&(e=!0,this.error='User with the username "'+this.pushUser.username+'" already exists.')}var t="";e||(this.$props.editUser?(t="User updated.",this.updateUser(this.pushUser),this.onReset()):(t="User added.",this.postUser(this.pushUser),this.onReset()),this.$q.notify({color:"green",textColor:"white",icon:"cloud_done",message:t,position:"top-right",timeout:1e3}),this.error="",this.$emit("submitUser"))},onReset(){this.pushUser.name=this.$props.newUser.name,this.pushUser.surname=this.$props.newUser.surname,this.pushUser.email=this.$props.newUser.email,this.pushUser.username=this.$props.newUser.username,this.pushUser.password="",this.pushUser.permissions=this.$props.newUser.permissions,this.pushUser._id=this.$props.newUser._id,this.pushUser.last_login=this.$props.newUser.last_login,this.error=""}})},u=l,c=t("2877"),p=t("0378"),m=t("27f9"),d=t("9c40"),h=t("ddd8"),U=t("4b7e"),f=t("eebe"),b=t.n(f),v=Object(c["a"])(u,r,a,!1,null,null,null);s["a"]=v.exports;b()(v,"components",{QForm:p["a"],QInput:m["a"],QBtn:d["a"],QSelect:h["a"],QCardActions:U["a"]})},ac0b:function(e,s,t){}}]);
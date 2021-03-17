(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"1da1":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.onReset}},[s("q-input",{attrs:{filled:"",label:"Project name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.pushProject.name,callback:function(t){e.$set(e.pushProject,"name",t)},expression:"pushProject.name"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("q-select",{attrs:{filled:"",multiple:"",options:e.allUsers,label:"Users",color:"secondary","use-chips":"","stack-label":""},model:{value:e.pushProject.users,callback:function(t){e.$set(e.pushProject,"users",t)},expression:"pushProject.users"}})],1),s("q-space"),s("div",{staticClass:"col q-ma-md"},[s("q-btn",{attrs:{size:"md",label:"Set user roles",color:"secondary"},on:{click:function(t){e.setRoles=!e.setRoles}}})],1)],1),e.setRoles?s("q-list",{attrs:{separator:""}},e._l(e.pushProject.users,(function(t){return s("q-item",{key:t.label},[s("q-item-section",[e._v(e._s(t.label))]),s("q-space"),s("q-select",{staticStyle:{width:"250px"},attrs:{filled:"",options:e.roleOptions,label:"Users"},model:{value:t.role,callback:function(s){e.$set(t,"role",s)},expression:"user.role"}})],1)})),1):e._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"col q-ma-sm"},[s("q-btn",{attrs:{label:"Select deadline",icon:"event",color:"secondary"},on:{click:function(t){e.datePicker=!0}}})],1),s("div",{staticClass:"col q-ma-md"},[s("q-badge",{attrs:{color:"secondary"}},[e._v("\n                Deadline: "+e._s(e.selectDeadline)+"\n            ")])],1)]),s("q-dialog",{model:{value:e.datePicker,callback:function(t){e.datePicker=t},expression:"datePicker"}},[s("q-card",{staticClass:"q-ma-md"},[s("div",{staticClass:"row"},[s("q-date",{attrs:{mask:"DD/MM/YYYY",minimal:""},model:{value:e.selectDeadline,callback:function(t){e.selectDeadline=t},expression:"selectDeadline"}})],1),s("div",{staticClass:"row q-ma-md flex flex-center"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Save",color:"primary"},on:{click:function(t){e.pushProject.deadline=e.selectDeadline}}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Reset",flat:"",color:"primary"},on:{click:function(t){e.selectDeadline=""}}})],1)])],1),s("q-card-actions",{attrs:{horizontal:"",align:"right"}},[s("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1),s("div",{staticClass:"q-ma-md text-center"},[""!=e.error?s("p",{staticStyle:{color:"red"}},[e._v(e._s(e.error))]):e._e()])],1)},r=[],i=s("7053"),o=s.n(i),c=(s("4d90"),s("2f62")),l={name:"ProjectForm",data(){return{error:"",roleOptions:["Product Manager","Development Team Member","Methodology Admin"],allProjects:[],setRoles:!1,datePicker:!1,selectDeadline:"",pushProject:{name:"",users:[],deadline:""},today:""}},props:{editProject:{type:Boolean},newProject:{type:Object}},computed:{allUsers(){var e=[],t=this.getUsers();for(var s in t){var a={label:t[s].username,value:t[s].username,role:""};e.push(a)}return console.log(e),e}},mounted(){this.fetchProjects(),this.fetchUsers();var e=this.getProjects();this.allProjects=this.projectsToArray(e),this.onReset(),this.today=this.getDate(),this.selectDeadline=this.pushProject.deadline},methods:o()(o()(o()(o()(o()({},Object(c["c"])("project",["getProjects"])),Object(c["c"])("user",["getUsers"])),Object(c["b"])("project",["fetchProjects","postProject","updateProject"])),Object(c["b"])("user",["fetchUsers"])),{},{projectsToArray(e){var t=[];for(var s in e)t.push(e[s]);return t},usersPushData(e){var t=[],s=this.getUsers();for(var a in e)for(var r in s)if(e[a].label===s[r].username){var i={user_name:s[r].username,user_id:s[r]._id,user_role:e[a].role};t.push(i)}return t},getDate(){var e=new Date,t=`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear()}`;return t},checkProjectName(){var e=!1;if(this.pushProject.name!==this.newProject.name)for(var t in this.allProjects)this.pushProject.name===this.allProjects[t].name&&(e=!0,this.error='Project with the name "'+this.pushProject.name+'" already exists.');else e=!0;return e},setPushUser(){this.pushProject.users=this.usersPushData(this.pushProject.users),""!==this.selectDeadline&&this.today!==this.selectDeadline?this.pushProject.deadline=this.selectDeadline:this.pushProject.deadline="No deadline"},onSubmit(){var e="";this.checkProjectName()||(this.setPushUser(),this.$props.editProject?(e="Project updated.",this.updateProject(this.pushProject),this.onReset()):(e="Project added.",this.postProject(this.pushProject),this.onReset()),this.$q.notify({color:"green",textColor:"white",icon:"cloud_done",message:e,position:"top-right",timeout:1e3}),this.error="",this.$emit("submitProject"))},onReset(){this.pushProject.name=this.$props.newProject.name,this.pushProject.users=this.$props.newProject.users,this.pushProject.deadline=this.$props.newProject.deadline,this.pushProject._id=this.$props.newProject._id,this.selectDeadline=this.$props.newProject.deadline,this.error=""}})},n=l,d=s("2877"),p=s("0378"),u=s("27f9"),m=s("ddd8"),h=s("2c91"),j=s("9c40"),P=s("1c1c"),v=s("66e5"),f=s("4074"),q=s("58a81"),b=s("24e8"),_=s("f09f"),g=s("52ee"),C=s("4b7e"),y=s("7f67"),w=s("eebe"),D=s.n(w),S=Object(d["a"])(n,a,r,!1,null,null,null);t["a"]=S.exports;D()(S,"components",{QForm:p["a"],QInput:u["a"],QSelect:m["a"],QSpace:h["a"],QBtn:j["a"],QList:P["a"],QItem:v["a"],QItemSection:f["a"],QBadge:q["a"],QDialog:b["a"],QCard:_["a"],QDate:g["a"],QCardActions:C["a"]}),D()(S,"directives",{ClosePopup:y["a"]})},"27e4":function(e,t,s){},"3ea8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"q-ma-lg window-width"},[s("q-btn",{staticClass:"q-ma-xs",attrs:{"text-color":"primary",flat:"",icon:"arrow_back_ios",label:"All projects"},on:{click:function(t){return e.$router.push("/home")}}}),s("q-card",{staticClass:"q-ma-lg",attrs:{flat:"",bordered:""}},[s("q-card-section",{attrs:{horizontal:""}},[s("q-card-section",{staticClass:"q-ma-md bg-primary"},[s("div",{staticClass:"text-overline text-white",staticStyle:{transform:"rotate(-90deg)","margin-top":"150%"}},[e._v("Project")])]),s("q-card-section",{staticClass:"q-ma-md"},[s("div",{staticClass:"text-h5 q-ma-md"},[e._v(e._s(e.project.name))]),s("div",{staticClass:"text-overline q-ma-md"},[e._v("Deadline: "+e._s(e.project.deadline))])]),s("q-separator",{attrs:{vertical:""}}),s("q-card-section",{staticStyle:{width:"50%"}},e._l(e.project.users,(function(t){return s("div",{key:t.user_name,staticClass:"row q-ma-md"},[s("q-avatar",{staticClass:"q-ma-xs",attrs:{size:"20px","font-size":"15px",color:"secondary","text-color":"white",icon:"person"}}),s("span",{staticClass:"q-ma-xs",staticStyle:{"font-weight":"bold"}},[e._v(e._s(t.user_name))]),s("span",{staticClass:"text-caption text-dark-grey q-ma-xs"},[e._v(" "+e._s(t.user_role))])],1)})),0),s("q-card-section",{staticClass:"full-width"},[s("div",{staticClass:"row"},[s("q-space"),e.checkRole()?s("q-btn",{staticClass:"q-ma-md",attrs:{size:"md",icon:"edit",color:"primary",label:"Edit project"},on:{click:e.editFunction}}):e._e()],1)])],1)],1),s("q-dialog",{model:{value:e.editProjectData,callback:function(t){e.editProjectData=t},expression:"editProjectData"}},[s("q-card",{staticClass:"q-pa-md",staticStyle:{width:"80vh"}},[s("q-card-section",{staticClass:"row items-center"},[s("div",{staticClass:"text-h6"},[e._v(e._s(e.dialogTitle))]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("ProjectForm",{attrs:{newProject:e.editProject,editProject:e.editProjectData},on:{submitProject:function(t){return e.updateProjectInfo()}}})],1)],1),s("q-card",{staticClass:"q-ma-md"},[s("q-card-section",{staticClass:"bg-secondary"},[s("div",{staticClass:"text-white text-h6"},[e._v("Sprints")])]),s("q-list",{attrs:{bordered:"",separator:""}},e._l(e.projectSprints,(function(t){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t._id,attrs:{clickable:""}},[s("q-item-section",{staticClass:"col-1",staticStyle:{width:"3%"}},[s("q-avatar",{attrs:{size:"md",color:"secondary","text-color":"white",icon:"folder_open"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"q-ma-sm",staticStyle:{"font-size":"2.2vh"}},[e._v(e._s(t.name))])],1),s("q-item-section",[s("q-item-label",{staticClass:"q-ma-sm"},[s("span",{staticStyle:{opacity:".6"}},[e._v("From: ")]),e._v(e._s(t.start_date))]),s("q-item-label",{staticClass:"q-ma-sm"},[s("span",{staticStyle:{opacity:".6"}},[e._v("To: ")]),e._v(e._s(t.end_date))])],1)],1)})),1)],1)],1)},r=[],i=s("7053"),o=s.n(i),c=s("2f62"),l=s("1da1"),n={name:"Project",components:{ProjectForm:l["a"]},data(){return{user:{},projectId:"",editProjectData:!1,dialogTitle:"Edit project",editProject:{name:"",users:[],deadline:"",_id:""},projectSprints:[{name:"Sprint 1",start_date:"02/04/2021",end_date:"22/04/2021",_id:"1"},{name:"Sprint 2",start_date:"02/04/2021",end_date:"22/04/2021",_id:"2"},{name:"Sprint 3",start_date:"02/04/2021",end_date:"22/04/2021",_id:"3"}]}},computed:{project(){var e=this.getProjects();for(var t in e)if(e[t]._id===this.projectId)return e[t];return"No project found."}},methods:o()(o()(o()(o()({},Object(c["c"])("user",["getCurrentUser"])),Object(c["c"])("project",["getProjects"])),Object(c["b"])("project",["fetchProjects"])),{},{updateProjectInfo(){this.editProjectData=!1},checkRole(){if(this.user!=={}){if("Admin"===this.user.permissions)return!0;for(var e in this.project.users)if("Methodology Admin"===this.project.users[e].user_role)return!0}return!1},editFunction(){this.editProject.name=this.project.name,this.editProject.deadline=this.project.deadline,this.editProject._id=this.projectId;var e=[];for(var t in this.project.users){var s={label:this.project.users[t].user_name,value:this.project.users[t].user_name,role:this.project.users[t].user_role};e.push(s)}this.editProject.users=e,this.editProjectData=!0}}),mounted(){this.user=this.getCurrentUser(),this.fetchProjects(),this.projectId=this.$route.params.id}},d=n,p=(s("f04a"),s("2877")),u=s("9989"),m=s("9c40"),h=s("f09f"),j=s("a370"),P=s("eb85"),v=s("cb32"),f=s("2c91"),q=s("24e8"),b=s("1c1c"),_=s("66e5"),g=s("4074"),C=s("0170"),y=s("7f67"),w=s("714f"),D=s("eebe"),S=s.n(D),x=Object(p["a"])(d,a,r,!1,null,null,null);t["default"]=x.exports;S()(x,"components",{QPage:u["a"],QBtn:m["a"],QCard:h["a"],QCardSection:j["a"],QSeparator:P["a"],QAvatar:v["a"],QSpace:f["a"],QDialog:q["a"],QList:b["a"],QItem:_["a"],QItemSection:g["a"],QItemLabel:C["a"]}),S()(x,"directives",{ClosePopup:y["a"],Ripple:w["a"]})},f04a:function(e,t,s){"use strict";s("27e4")}}]);
(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{136:function(e,t,a){"use strict";(function(e){var n=a(22),r=a.n(n),l=a(135),i=a(0),o=a.n(i),c=a(10),m=a(12),d=a(3),s=a(87),u=a(55),g=a(32),y=a(44),f=(a(162),a(142),a(163),c.a.create({itemContainer:{marginBottom:5,backgroundColor:g.a.mainWhite,flexDirection:"row",paddingVertical:6},detailContainer:{paddingHorizontal:"3%",width:"100%",backgroundColor:g.a.mainWhite},cardContainer:{width:"100%",margin:10,padding:10,alignItems:"center"},underline:{width:"100%",borderBottomColor:"black",borderBottomWidth:1,alignItems:"center"},listTitle:{fontWeight:"bold"},troopTitle:{padding:10,backgroundColor:g.a.mainGrey,width:"100%"},troopTitleText:{fontSize:18,color:"white"},rowBodyText:{fontWeight:"bold"},rowHeaderText:{},container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:g.a.mainGrey},listContainer:{width:"100%",alignItems:"center"},rowContainer:{flex:1,alignSelf:"stretch",flexDirection:"row",alignItems:"center"},rowWidth:{flex:1,alignSelf:"stretch",alignItems:"center"}}));t.a=function(t){var a=t.data.unitList;return o.a.createElement(d.a,{style:f.container},o.a.createElement(l.StatusBar,{style:"auto"}),o.a.createElement(d.a,{style:f.listContainer},o.a.createElement(d.a,{style:f.troopTitle},o.a.createElement(m.a,{style:f.troopTitleText},t.data.title)),o.a.createElement(d.a,{style:f.detailContainer},o.a.createElement(d.a,{style:f.rowContainer},o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"MOV")),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"CC")),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"BS")),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"PH")),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"WIP")),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"ARM")),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"BTS")),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"W")),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"S")),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,null,"AVA"))),o.a.createElement(d.a,{style:f.underline}),o.a.createElement(d.a,{style:f.rowContainer},o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.mov)),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.cc)),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.bs)),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.ph)),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.wip)),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.arm)),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.bts)),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.w)),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.s)),o.a.createElement(d.a,{style:f.rowWidth},o.a.createElement(m.a,{style:f.rowBodyText},t.data.attribute.ava)))),o.a.createElement(d.a,{style:{backgroundColor:g.a.mainGrey,flexDirection:"row",width:"100%"}},o.a.createElement(d.a,{style:{flex:1}}),o.a.createElement(d.a,{style:{flex:6,alignItems:"flex-start"}},o.a.createElement(m.a,{style:{color:"white"}},"Name")),o.a.createElement(d.a,{style:{flex:1}},o.a.createElement(m.a,{style:{color:"white"}},"SWC")),o.a.createElement(d.a,{style:{flex:1}},o.a.createElement(m.a,{style:{color:"white"}},"Points")))),o.a.createElement(d.a,null,o.a.createElement(s.a,{data:a,renderItem:function(a){var n=y.d.filter((function(e){return e.id==a.item.unitSetId}))[0];console.log(t),console.log("item");var l=n.gunList.length,i=n.skillList.length,c=n.equipmentList.length,s=o.a.createElement(m.a,{style:{color:"green"}},"Skill: ",n.skillList.map((function(e,t){return o.a.createElement(m.a,{key:t},function(e,t,a){var n=" \u2022 ";a==t+1&&(n="");var r=y.c.filter((function(t){return t.id==e}));return o.a.createElement(m.a,{style:f.listTitle},r[0].title,n," ")}(e,t,i))})));i<=0&&(s=o.a.createElement(m.a,null));var g=o.a.createElement(m.a,{style:{color:"red"}},"Equipment: ",n.equipmentList.map((function(e,t){return o.a.createElement(m.a,{key:t},function(e,t,a){var n=" \u2022 ";a==t+1&&(n="");var r=y.b.filter((function(t){return t.id==e}));return o.a.createElement(m.a,{style:f.listTitle},r[0].title,n," ")}(e,t,c))})));c<=0&&(g=o.a.createElement(m.a,null));return o.a.createElement(u.a,{onPress:function(){!function(t,a){var n=e.unitList;e.unitList=[].concat(r()(n),[{unitId:t,unitSetId:a}]),console.log(e.unitList)}(t.data.id,a.item.unitSetId)}},o.a.createElement(d.a,{style:f.itemContainer},o.a.createElement(d.a,{style:{flex:1}}),o.a.createElement(d.a,{style:{flex:6,alignItems:"flex-start"}},o.a.createElement(m.a,null,t.data.title),o.a.createElement(d.a,{style:{marginVertical:2,alignContent:"flex-start"}},o.a.createElement(m.a,{style:{textAlign:"left"}},n.gunList.map((function(e,t){return o.a.createElement(m.a,{key:t},function(e,t,a){var n=" \u2022 ";a==t+1&&(n="");var r=y.e.filter((function(t){return t.id==e}));return o.a.createElement(m.a,{style:f.listTitle},r[0].title,n)}(e,t,l))})))),s,g),o.a.createElement(d.a,{style:{flex:1}},o.a.createElement(m.a,null,n.swc)),o.a.createElement(d.a,{style:{flex:1}},o.a.createElement(m.a,null,n.point))))}})))}}).call(this,a(57))},145:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return B}));var n=a(4),r=a.n(n),l=a(5),i=a.n(l),o=a(6),c=a.n(o),m=a(7),d=a.n(m),s=a(2),u=a.n(s),g=a(0),y=a.n(g),f=a(84),E=a(45),h=a(10),p=a(12),b=a(3),w=a(55),x=a(76),C=(a(121),a(126)),v=a(186),_=a(44);a(136);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=u()(e);if(t){var r=u()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d()(this,a)}}var T=function(e,t,a){var n=" \u2022 ";a==t+1&&(n="");var r=_.e.filter((function(t){return t.id==e}));return y.a.createElement(p.a,{style:I.listTitle},r[0].title,n)},W=function(e,t,a){var n=" \u2022 ";a==t+1&&(n="");var r=_.b.filter((function(t){return t.id==e}));return y.a.createElement(p.a,{style:I.listTitle},r[0].title,n," ")},k=function(e,t,a){var n=" \u2022 ";a==t+1&&(n="");var r=_.c.filter((function(t){return t.id==e}));return y.a.createElement(p.a,{style:I.listTitle},r[0].title,n," ")},L=[{title:"Refresh all",value:9}],B=function(t){c()(n,t);var a=S(n);function n(){var e;r()(this,n);for(var t=arguments.length,l=new Array(t),i=0;i<t;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={activeSections:[],collapsed:!0,multipleSelect:!1},e.toggleExpanded=function(){e.setState({collapsed:!e.state.collapsed})},e.setSections=function(t){e.setState({activeSections:t.includes(void 0)?[]:t})},e.renderHeader=function(e,t,a){var n=_.a.filter((function(t){return t.id==e.unitId}))[0],r=_.d.filter((function(t){return t.id==e.unitSetId}))[0],l=r.gunList.length,i=r.skillList.length,o=r.equipmentList.length,c=y.a.createElement(p.a,{style:{color:"green"}},"Skill: ",r.skillList.map((function(e,t){return y.a.createElement(p.a,{key:t},k(e,t,i))})));i<=0&&(c=y.a.createElement(p.a,null));var m=y.a.createElement(p.a,{style:{color:"red"}},"Equipment: ",r.equipmentList.map((function(e,t){return y.a.createElement(p.a,{key:t},W(e,t,o))})));return o<=0&&(m=y.a.createElement(p.a,null)),y.a.createElement(x.b,{duration:400,style:[I.header,a?I.active:I.inactive],transition:"backgroundColor"},y.a.createElement(b.a,null,y.a.createElement(p.a,{style:I.headerText},n.title)),y.a.createElement(b.a,{style:{flex:6,alignItems:"flex-start"}},y.a.createElement(p.a,null,n.title),y.a.createElement(b.a,{style:{marginVertical:2,alignContent:"flex-start"}},y.a.createElement(p.a,{style:{textAlign:"left"}},r.gunList.map((function(e,t){return y.a.createElement(p.a,{key:t},T(e,t,l))})))),c,m),y.a.createElement(b.a,{style:{flex:1}},y.a.createElement(p.a,null,r.swc)),y.a.createElement(b.a,{style:{flex:1}},y.a.createElement(p.a,null,r.point)))},e}return i()(n,[{key:"renderContent",value:function(e,t,a){return y.a.createElement(x.b,{duration:400,style:[I.content,a?I.active:I.inactive],transition:"backgroundColor"},y.a.createElement(x.a,{style:{textAlign:"center"}},y.a.createElement(b.a,{style:I.listContainer},y.a.createElement(v.a,{data:e}))))}},{key:"render",value:function(){var t=this,a=this.state,n=a.multipleSelect,r=a.activeSections;return y.a.createElement(b.a,{style:I.container},y.a.createElement(E.a,{contentContainerStyle:{paddingTop:30}},y.a.createElement(b.a,{style:I.multipleToggle},y.a.createElement(p.a,{style:I.multipleToggle__title},"Multiple Expand Allowed?"),y.a.createElement(f.a,{value:n,onValueChange:function(e){return t.setState({multipleSelect:e})}})),y.a.createElement(p.a,{style:I.selectTitle},"Please select below option to expand"),y.a.createElement(b.a,{style:I.selectors},L.map((function(e){return y.a.createElement(w.a,{key:e.title,onPress:function(){return t.setSections([9])}},y.a.createElement(b.a,{style:I.selector},y.a.createElement(p.a,{style:r.includes(9)&&I.activeSelector},e.title)))}))),y.a.createElement(C.a,{activeSections:r,sections:e.unitList,touchableComponent:w.a,expandMultiple:n,renderHeader:this.renderHeader,renderContent:this.renderContent,duration:400,onChange:this.setSections})))}}]),n}(g.Component),I=h.a.create({listContainer:{backgroundColor:"grey"},container:{flex:1,backgroundColor:"#F5FCFF",paddingTop:30},title:{textAlign:"center",fontSize:18,fontWeight:"300",marginBottom:20},header:{backgroundColor:"#F5FCFF",padding:10},headerText:{textAlign:"center",fontSize:16,fontWeight:"500"},content:{padding:20,backgroundColor:"#fff"},active:{backgroundColor:"rgba(255,255,255,1)"},inactive:{backgroundColor:"rgba(245,252,255,1)"},selectors:{marginBottom:10,flexDirection:"row",justifyContent:"center"},selector:{backgroundColor:"#F5FCFF",padding:10},activeSelector:{fontWeight:"bold"},selectTitle:{fontSize:14,fontWeight:"500",padding:10,textAlign:"center"},multipleToggle:{flexDirection:"row",justifyContent:"center",marginVertical:30,alignItems:"center"},multipleToggle__title:{fontSize:16,marginRight:8}})}).call(this,a(57))},162:function(e,t,a){"use strict";a(36),a(0),a(12),a(3)},163:function(e,t,a){"use strict";a.r(t),a.d(t,"ADD_UNIT_LIST",(function(){return n})),a.d(t,"addUnitList",(function(){return r}));var n="ADD_UNIT_LIST",r=function(e,t){return{type:n,unitId:e,unitSetId:t}}},170:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return g}));var n=a(0),r=a.n(n),l=a(10),i=a(197),o=a(109),c=a(142),m=a(191),d=a.n(m);e.unitList=[];var s=Object(o.b)({unitList:d.a}),u=Object(o.c)(s);function g(){return r.a.createElement(c.a,{store:u},r.a.createElement(i.a,null))}l.a.create({listContainer:{backgroundColor:"grey"},container:{flex:1,backgroundColor:"#F5FCFF",paddingTop:30},title:{textAlign:"center",fontSize:18,fontWeight:"300",marginBottom:20},header:{backgroundColor:"#F5FCFF",padding:10},headerText:{textAlign:"center",fontSize:16,fontWeight:"500"},content:{padding:20,backgroundColor:"#fff"},active:{backgroundColor:"rgba(255,255,255,1)"},inactive:{backgroundColor:"rgba(245,252,255,1)"},selectors:{marginBottom:10,flexDirection:"row",justifyContent:"center"},selector:{backgroundColor:"#F5FCFF",padding:10},activeSelector:{fontWeight:"bold"},selectTitle:{fontSize:14,fontWeight:"500",padding:10,textAlign:"center"},multipleToggle:{flexDirection:"row",justifyContent:"center",marginVertical:30,alignItems:"center"},multipleToggle__title:{fontSize:16,marginRight:8}})}).call(this,a(57))},186:function(e,t,a){"use strict";a(135);var n=a(0),r=a.n(n),l=a(10),i=a(12),o=a(3),c=a(44),m=a(32),d=function(e){var t;return t="-3"==e?m.a.rangeYellow:"0"==e?m.a.rangeBlue:"+3"==e||"+6"==e?m.a.rangeGreen:"-6"==e?m.a.rangeRed:"black",t},s=l.a.create({detailContainer:{paddingHorizontal:"3%",width:"100%"},cardContainer:{width:"100%",margin:10,padding:10,alignItems:"center"},underline:{width:"100%",borderBottomColor:"black",borderBottomWidth:1,alignItems:"center"},troopTitle:{padding:10,backgroundColor:m.a.mainGrey,width:"100%"},troopTitleText:{fontSize:18,color:"white"},rowBodyText:{fontWeight:"bold"},rowHeaderText:{},container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",width:"100%"},listContainer:{width:"100%",alignItems:"center"},rowContainer:{flex:1,alignSelf:"stretch",flexDirection:"row",alignItems:"center"},rowWidth:{flex:1,alignSelf:"stretch",alignItems:"center"}});t.a=function(e){var t=e.data.unitId,a=e.data.unitSetId,n=c.a.filter((function(e){return e.id==t}))[0],l=c.d.filter((function(e){return e.id==a}))[0];return r.a.createElement(o.a,{style:s.container},r.a.createElement(o.a,{style:s.listContainer},r.a.createElement(o.a,{style:s.troopTitle},r.a.createElement(i.a,{style:s.troopTitleText},n.title)),r.a.createElement(o.a,{style:s.detailContainer},r.a.createElement(o.a,{style:s.rowContainer},r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"MOV")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"CC")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"BS")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"PH")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"WIP")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"ARM")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"BTS")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"W")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"S")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"AVA"))),r.a.createElement(o.a,{style:s.underline}),r.a.createElement(o.a,{style:s.rowContainer},r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.mov)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.cc)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.bs)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.ph)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.wip)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.arm)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.bts)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.w)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.s)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},n.attribute.ava))))),l.gunList.map((function(e){return function(e){var t=c.e.filter((function(t){return t.id==e}))[0],a=r.a.createElement(o.a,null,r.a.createElement(o.a,{style:s.rowContainer},r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"Short")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"Medium")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"Long")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"Max"))),r.a.createElement(o.a,{style:s.underline}),r.a.createElement(o.a,{style:s.rowContainer},r.a.createElement(o.a,{style:[s.rowWidth,{backgroundColor:d(t.attribute.range.short_mod)}]},r.a.createElement(i.a,{style:s.rowBodyText},t.attribute.range.short_range," ",t.attribute.range.short_mod)),r.a.createElement(o.a,{style:[s.rowWidth,{backgroundColor:d(t.attribute.range.medium_mod)}]},r.a.createElement(i.a,{style:s.rowBodyText},t.attribute.range.medium_range," ",t.attribute.range.medium_mod)),r.a.createElement(o.a,{style:[s.rowWidth,{backgroundColor:d(t.attribute.range.long_mod)}]},r.a.createElement(i.a,{style:s.rowBodyText},t.attribute.range.long_range," ",t.attribute.range.long_mod)),r.a.createElement(o.a,{style:[s.rowWidth,{backgroundColor:d(t.attribute.range.max_mod)}]},r.a.createElement(i.a,{style:s.rowBodyText},t.attribute.range.max_range," ",t.attribute.range.max_mod))));1==t.attribute.range.no_range&&(a=r.a.createElement(o.a,null));var n=r.a.createElement(o.a,null,r.a.createElement(i.a,{style:{textAlign:"left"}},"Triat: ",t.trait));return t.trait||(n=r.a.createElement(o.a,null)),r.a.createElement(o.a,{key:Math.random(),style:s.cardContainer},r.a.createElement(o.a,{style:s.troopTitle},r.a.createElement(i.a,{style:s.troopTitleText},t.title)),r.a.createElement(o.a,{style:s.detailContainer},r.a.createElement(o.a,{style:s.rowContainer},r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"Dam")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"B")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"Ammo")),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,null,"Save"))),r.a.createElement(o.a,{style:s.underline}),r.a.createElement(o.a,{style:s.rowContainer},r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},t.attribute.dam)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},t.attribute.b)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},t.attribute.ammo)),r.a.createElement(o.a,{style:s.rowWidth},r.a.createElement(i.a,{style:s.rowBodyText},t.attribute.save))),a,n))}(e)})))}},191:function(e,t,a){a(11),a(22);a(163).ADD_UNIT_LIST},197:function(e,t,a){"use strict";var n=a(280),r=a(27),l=a(145),i=a(4),o=a.n(i),c=a(5),m=a.n(c),d=a(6),s=a.n(d),u=a(7),g=a.n(u),y=a(2),f=a.n(y),E=a(0),h=a.n(E),p=a(84),b=a(45),w=a(10),x=a(12),C=a(3),v=a(55),_=a(76),S=a(126),T=a(44),W=a(136),k=a(32);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return g()(this,a)}}var B=function(e){s()(a,e);var t=L(a);function a(){var e;o()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeSections:[],collapsed:!0,multipleSelect:!1},e.toggleExpanded=function(){e.setState({collapsed:!e.state.collapsed})},e.setSections=function(t){e.setState({activeSections:t.includes(void 0)?[]:t})},e.renderHeader=function(e,t,a){return h.a.createElement(_.b,{duration:400,style:[I.header,a?I.active:I.inactive,{flexDirection:"row",backgroundColor:k.a.mainBlack}],transition:"backgroundColor"},h.a.createElement(C.a,{style:{margin:2,backgroundColor:k.a.mainGrey,borderTopLeftRadius:45,borderBottomLeftRadius:45,flex:1}}),h.a.createElement(C.a,{style:{margin:2,backgroundColor:k.a.mainGrey,flex:6,alignItems:"flex-start",paddingLeft:10,paddingVertical:20}},h.a.createElement(x.a,{style:I.headerText},e.title)),h.a.createElement(C.a,{style:{margin:2,backgroundColor:k.a.mainGrey,borderTopRightRadius:13,borderBottomRightRadius:13,flex:1,alignItems:"center",justifyContent:"center"}},h.a.createElement(x.a,{style:I.headerText},"LI")))},e.renderContent=function(t,a,n){return h.a.createElement(_.b,{duration:400,style:[I.content,n?I.active:I.inactive],transition:"backgroundColor"},h.a.createElement(_.a,{style:{textAlign:"center"}},h.a.createElement(W.a,{data:t,navigation:e.props.navigation})))},e}return m()(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.multipleSelect,n=t.activeSections;return h.a.createElement(C.a,{style:I.container},h.a.createElement(C.a,{style:{backgroundColor:k.a.mainGrey,padding:15}},h.a.createElement(x.a,{style:{textAlign:"right",color:k.a.mainWhite,fontSize:18}},"SWC: ",h.a.createElement(x.a,{style:{fontWeight:"bold"}},"0/6")," Point: ",h.a.createElement(x.a,{style:{fontWeight:"bold"}},"0/30"))),h.a.createElement(b.a,{contentContainerStyle:{paddingTop:5}},h.a.createElement(C.a,{style:I.multipleToggle},h.a.createElement(x.a,{style:I.multipleToggle__title},"Multiple Expand Allowed?"),h.a.createElement(p.a,{value:a,onValueChange:function(t){return e.setState({multipleSelect:t})}})),h.a.createElement(S.a,{activeSections:n,sections:T.a,touchableComponent:v.a,expandMultiple:a,renderHeader:this.renderHeader,renderContent:this.renderContent,duration:400,onChange:this.setSections})))}}]),a}(E.Component),I=w.a.create({container:{flex:1,backgroundColor:k.a.mainBlack},title:{textAlign:"center",fontSize:18,fontWeight:"300",marginBottom:20},header:{backgroundColor:"#F5FCFF",padding:3},headerText:{textAlign:"center",fontSize:20,fontWeight:"500",color:k.a.mainWhite},content:{backgroundColor:k.a.mainWhite},active:{backgroundColor:"rgba(255,255,255,1)"},inactive:{backgroundColor:"rgba(245,252,255,1)"},selectors:{marginBottom:10,flexDirection:"row",justifyContent:"center"},selector:{backgroundColor:"#F5FCFF",padding:10},activeSelector:{fontWeight:"bold"},selectTitle:{fontSize:14,fontWeight:"500",padding:10,textAlign:"center"},multipleToggle:{flexDirection:"row",justifyContent:"flex-end",marginVertical:10,alignItems:"center",paddingHorizontal:10},multipleToggle__title:{fontSize:16,marginRight:8,color:k.a.mainWhite}}),A=a(281),M=(a(162),Object(n.a)({AllCartScreen:B,CartScreen:l.a})),R=Object(A.a)({AllCarts:M,Carts:l.a});t.a=Object(r.createAppContainer)(R)},201:function(e,t,a){a(202),e.exports=a(264)},202:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/infinity_app/expo-service-worker.js",{scope:"/infinity_app/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},222:function(e,t,a){a(4)},32:function(e,t,a){"use strict";t.a={mainGrey:"#2d3132",rangeYellow:"#f2bb13",rangeRed:"#e62e2d",rangeGreen:"#93d14a",rangeBlue:"#59b0f3",mainBlack:"#202020",mainWhite:"#dddddd"}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return o}));a(222),a(32);var n=[{id:"1",title:"Fusiliers",attribute:{mov:"4-4",cc:"13",bs:"12",ph:"10",wip:"12",arm:"1",bts:"0",w:"1",s:"2",ava:"T"},unitList:[{unitSetId:"1"},{unitSetId:"2"},{unitSetId:"3"},{unitSetId:"4"},{unitSetId:"5"},{unitSetId:"6"},{unitSetId:"7"}]},{id:"2",title:"Nokken",attribute:{mov:"4-4",cc:"13",bs:"12",ph:"10",wip:"13",arm:"2",bts:"3",w:"1",s:"2",ava:"2"},unitList:[{unitSetId:"8"},{unitSetId:"9"},{unitSetId:"10"}]}],r=[{id:"1",title:"Paramedic"},{id:"2",title:"Lieutenant"},{id:"3",title:"Hacker"}],l=[{id:"1",title:"MedKit"},{id:"2",title:"Hacking Device"},{id:"3",title:"Multispectral Visor L1"}],i=[{id:"1",title:"CombiRifle",tyle:"main",attribute:{dam:"13",b:"3",ammo:"N",save:"arm",range:{short_range:'0-8"',short_mod:"-3",medium_range:'8-16"',medium_mod:"+3",long_range:'16-32"',long_mod:"-3",max_range:'32-48"',max_mod:"-6"}}},{id:"2",title:"Spitfire",tyle:"main",attribute:{dam:"14",b:"4",ammo:"N",save:"ARM",range:{short_range:'0-8"',short_mod:"0",medium_range:'8-24"',medium_mod:"+3",long_range:'24-32"',long_mod:"-3",max_range:'32-48"',max_mod:"-6"}}},{id:"3",title:"Pistol(CC Mode)",tyle:"sub",attribute:{dam:"11",b:"1",ammo:"N",save:"--",range:{no_range:!0}},trait:"CC"},{id:"4",title:"CC Weapon",tyle:"close",attribute:{dam:"PH",b:"1",ammo:"N",save:"ARM",range:{no_range:!0}},trait:"CC"},{id:"5",title:"Missile Launcher (Blast Mode)",tyle:"main",attribute:{dam:"14",b:"1",ammo:"AP+Exp",save:"ARM",range:{short_range:'0-8"',short_mod:"-3",medium_range:'8-24"',medium_mod:"0",long_range:'24-40"',long_mod:"+3",max_range:'40-96"',max_mod:"-3"}}},{id:"6",title:"MULTI Sniper (Burst Mode)",tyle:"main",attribute:{dam:"15",b:"2",ammo:"AP",save:"ARM",range:{short_range:'0-8"',short_mod:"-3",medium_range:'8-16"',medium_mod:"0",long_range:'16-48"',long_mod:"+3",max_range:'48-96"',max_mod:"-3"}}},{id:"7",title:"MULTI Sniper (Anti-meteriel Mode)",tyle:"main",attribute:{dam:"15",b:"1",ammo:"DA",save:"ARM",range:{short_range:'0-8"',short_mod:"-3",medium_range:'8-16"',medium_mod:"0",long_range:'16-48"',long_mod:"+3",max_range:'48-96"',max_mod:"-3"}}},{id:"8",title:"HMG",tyle:"main",attribute:{dam:"15",b:"4",ammo:"N",save:"ARM",range:{short_range:'0-8"',short_mod:"-3",medium_range:'8-16"',medium_mod:"0",long_range:'16-32"',long_mod:"+3",max_range:'32-48"',max_mod:"-3"}}},{id:"9",title:"Boarding Shotgun (Blast Mode)",tyle:"main",attribute:{dam:"14",b:"2",ammo:"N",save:"ARM",range:{no_range:!0}},trait:"Direct Template (Small Teardrop)"},{id:"10",title:"Boarding Shotgun (Hit Mode)",tyle:"main",attribute:{dam:"14",b:"2",ammo:"AP",save:"ARM",range:{short_range:'0-8"',short_mod:"+6",medium_range:'8-16"',medium_mod:"0",long_range:'16-24"',long_mod:"-3"}}},{id:"11",title:"Light Shotgun (Blast Mode)",tyle:"main",attribute:{dam:"13",b:"2",ammo:"N",save:"ARM",range:{no_range:!0}},trait:"Direct Template (Small Teardrop)"},{id:"12",title:"Boarding Shotgun (Hit Mode)",tyle:"main",attribute:{dam:"14",b:"2",ammo:"AP",save:"ARM",range:{short_range:'0-8"',short_mod:"+6",medium_range:'8-16"',medium_mod:"0",long_range:'16-24"',long_mod:"-3",max_range:"",max_mod:""}}},{id:"13",title:"Spitfire",tyle:"main",attribute:{dam:"14",b:"4",ammo:"N",save:"ARM",range:{short_range:'0-8"',short_mod:"0",medium_range:'8-24"',medium_mod:"+3",long_range:'24-32"',long_mod:"-3",max_range:'32-48"',max_mod:"-6"}}}],o=[{id:"1",gunList:["1","3","4"],skillList:[],equipmentList:[],swc:0,point:1},{id:"2",gunList:["5","3","4"],skillList:[],equipmentList:[],swc:1.5,point:1},{id:"3",gunList:["1","3","4"],swc:0,point:1,skillList:["1"],equipmentList:["1"]},{id:"4",gunList:["1","3","4"],swc:0,point:1,skillList:["3"],equipmentList:["2"]},{id:"5",gunList:["1","3","4"],swc:0,point:1,skillList:["2"],equipmentList:[]},{id:"6",gunList:["8","3","4"],skillList:[],equipmentList:[],swc:1,point:1.5},{id:"7",gunList:["6","7","3","4"],skillList:[],equipmentList:[],swc:1.5,point:1.5},{id:"8",gunList:["9","10","3","4"],skillList:[],swc:0,point:2,equipmentList:["3"]},{id:"9",gunList:["13","3","4"],skillList:[],equipmentList:[],swc:1.5,point:2.5},{id:"10",gunList:["1","11","12","3","4"],swc:0,point:1,skillList:["3"],equipmentList:["2"]},{id:"11"},{id:"12"},{id:"13"},{id:"14"},{id:"15"},{id:"16"},{id:"17"},{id:"18"},{id:"19"},{id:"20"},{id:"21"},{id:"22"},{id:"23"}]}},[[201,1,2]]]);
//# sourceMappingURL=app.4c110318.chunk.js.map
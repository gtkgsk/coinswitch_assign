(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{18:function(e,t,a){e.exports={asset:"Asset_asset__3W6X1",image:"Asset_image__hzH6-",name:"Asset_name__19rnD",coin:"Asset_coin__3Yilx",symbol:"Asset_symbol__2EltI",price:"Asset_price__3AyTE",up:"Asset_up__Et17t",down:"Asset_down__3juDH"}},19:function(e,t,a){e.exports={header:"Details_header__2-Qqa",custom:"Details_custom__7tooy",link:"Details_link__3Z-ml",view:"Details_view__H7vfG",accounts:"Details_accounts__2GBam",nmbr:"Details_nmbr__2-bgW",message:"Details_message__2C0V4",items:"Details_items__13S5a"}},30:function(e,t,a){e.exports={header:"Customize_header__KV1sf",items:"Customize_items__bXTcn",message:"Customize_message__3MVvi",heading:"Customize_heading__2zQ2j"}},36:function(e,t,a){e.exports={currency:"Currency_currency__LR9e6",icon:"Currency_icon__39x14",name:"Currency_name__IfrzB"}},62:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(20),c=a.n(s),n=a(21),i=a(15),r=(a(62),a(5)),o=a(0),d=a.n(o),l=a(45),u=a.n(l),m=a(46),j=a.n(m),h=a(18),b=a.n(h),_=a(91),p=a(2),O=function(e){return Object(p.jsxs)("div",{className:b.a.asset,children:[Object(p.jsxs)("div",{className:b.a.image,children:[Object(p.jsx)(_.a,{size:"small",src:e.image}),Object(p.jsxs)("div",{className:b.a.name,children:[Object(p.jsx)("div",{className:b.a.coin,children:e.name}),Object(p.jsx)("div",{className:b.a.symbol,children:e.symbol})]})]}),Object(p.jsxs)("div",{className:b.a.price,children:[Object(p.jsx)("div",{children:"$".concat(Math.round(10*e.price)/1e3)}),e.change>=0&&Object(p.jsxs)("div",{className:b.a.up,children:[Object(p.jsx)(u.a,{style:{color:"green"}}),Math.round(10*e.change)/10]}),e.change<0&&Object(p.jsxs)("div",{className:b.a.down,children:[Object(p.jsx)(j.a,{style:{color:"red"}}),Math.round(10*e.change)/10]})]})]})},g=d.a.memo(O),x=a(19),f=a.n(x),v=a(89),y=function(){var e=Object(i.c)((function(e){return e.assets})),t=Object(i.c)((function(e){return e.count})),a=Object(i.b)();return Object(o.useEffect)((function(){var e=setInterval((function(){t>0&&fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false",{method:"GET",headers:{},body:null}).then((function(e){return e.json()})).then((function(e){a({type:"REFRESH_DATA",data:e})})).catch((function(e){}))}),3e4);return function(){return clearInterval(e)}}),[t]),Object(p.jsxs)(d.a.Fragment,{children:[Object(p.jsxs)("div",{className:f.a.header,children:[Object(p.jsx)("div",{className:f.a.custom,children:Object(p.jsx)(n.b,{className:f.a.link,to:"/customize",children:Object(p.jsx)(v.a,{size:"small",style:{color:"white"},children:"Customize"})})}),Object(p.jsxs)("div",{className:f.a.view,children:[Object(p.jsx)("span",{className:f.a.accounts,children:"Your Accounts"}),Object(p.jsx)("span",{className:f.a.nmbr,children:"$ 36,400"})]})]}),Object(p.jsxs)("div",{className:f.a.items,children:[0===t&&Object(p.jsx)("div",{className:f.a.message,children:"Please add currency to your tracker by pressing the Customise button above"}),t>0&&e.map((function(e){return e.show_option&&Object(p.jsx)(g,{id:e.data.id,name:e.data.name,image:e.data.image,symbol:e.data.symbol,price:e.data.current_price,change:e.data.price_change_percentage_24h},e.data.id)}))]})]})},N=a(90),w=a(12),k=Object(w.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(N.a),A=a(36),C=a.n(A),E=function(e){var t=Object(i.b)();return Object(p.jsxs)("div",{className:C.a.currency,children:[Object(p.jsxs)("div",{className:C.a.icon,children:[Object(p.jsx)(_.a,{size:"small",src:e.image}),Object(p.jsx)("div",{className:C.a.name,children:e.name})]}),Object(p.jsx)(k,{id:e.id,checked:e.show,value:"checkedA",inputProps:{"aria-label":"Switch A"},onChange:function(e){e.target.checked?t({type:"CUSTOMIZE_ON",data:e.target.id}):t({type:"CUSTOMIZE_OFF",data:e.target.id})}})]})},z=a(30),D=a.n(z),T=a(47),F=a.n(T),I=function(){var e=Object(i.c)((function(e){return e.assets})),t=Object(i.b)();return Object(o.useEffect)((function(){0===e.length&&fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false",{method:"GET",headers:{},body:null}).then((function(e){return e.json()})).then((function(e){t({type:"FETCH_DATA",data:e})})).catch((function(e){alert("Request API failed.please try again")}))}),[]),Object(p.jsxs)(d.a.Fragment,{children:[Object(p.jsxs)("div",{className:D.a.header,children:[Object(p.jsx)(n.b,{to:"/details",children:Object(p.jsx)(F.a,{style:{color:"white"}})}),Object(p.jsx)("div",{className:D.a.heading,children:"Customize Watchlist"})]}),Object(p.jsxs)("div",{className:D.a.items,children:[0===e.length&&Object(p.jsx)("div",{className:D.a.message,children:"Loading.........."}),e&&e.map((function(e){return Object(p.jsx)(E,{id:e.data.id,name:e.data.name,image:e.data.image,show:e.show_option},e.data.id)}))]})]})};var S=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{path:"/details",children:Object(p.jsx)(y,{})}),Object(p.jsx)(r.a,{path:"/customize",children:Object(p.jsx)(I,{})})]})})},M=a(24),H=a(48),R={assets:[],count:0},Z=Object(H.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;if("FETCH_DATA"===t.type){for(var a=[],s=0;s<t.data.length;s++)a.push({data:t.data[s],show_option:!1});return{assets:a,count:0}}if("REFRESH_DATA"===t.type){for(var c=[],n=0;n<t.data.length;n++)c[t.data[n].id]=t.data[n];var i=e.assets.map((function(e){return Object(M.a)(Object(M.a)({},e),{},{data:c[e.data.id]})}));return{assets:i,count:e.count}}if("CUSTOMIZE_ON"===t.type){var r=e.assets.map((function(e){return e.data.id===t.data?Object(M.a)(Object(M.a)({},e),{},{show_option:!0}):e})),o=e.count+1;return{assets:r,count:o}}if("CUSTOMIZE_OFF"===t.type){var d=e.assets.map((function(e){return e.data.id===t.id?Object(M.a)(Object(M.a)({},e),{},{show_option:!1}):e})),l=e.count-1;return{assets:d,count:l}}return e}));c.a.render(Object(p.jsx)(n.a,{children:Object(p.jsx)(i.a,{store:Z,children:Object(p.jsx)(S,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.c54b79df.chunk.js.map
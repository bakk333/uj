"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4960],{11475:function(e,n,s){s.d(n,{Z:function(){return l}});var a=s(97460),r=s(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},t=s(96110),l=r.forwardRef(function(e,n){return r.createElement(t.Z,(0,a.Z)({},e,{ref:n,icon:c}))})},53187:function(e,n,s){s.d(n,{W:function(){return i}});var a=s(85893);s(67294);var r=s(83062),c=s(26412),t=s(62625);let l={confirmed24:"#3AC79C",confirmed1:"#4483FF",confirmed:"#F6C242",all:"#F4655F"};function i(e){let{data:n}=e,{confirmedMinted:s,confirmedMinted1h:i,confirmedMinted24h:o,totalMinted:d,max:h}=n,m="18446744073709551615"===h,x=m?d:h,j=s===h,p=Number(d)/Number(x)*100,u=Number(s)/Number(x)*100,f=Number(i)/Number(x)*100,b=Number(o)/Number(x)*100,N=p.toFixed(2);return"100.00"!==N||j||(N="99.99"),(0,a.jsx)(r.Z,{title:(0,a.jsx)("div",{children:(0,a.jsxs)(c.Z,{layout:"vertical",column:1,size:"small",children:[(0,a.jsx)(c.Z.Item,{label:"Progress",children:(0,a.jsx)("span",{className:"hide-in-m no-break",children:"".concat((0,t.xO)(d),"/").concat(m?"-":(0,t.xO)(h))})}),(0,a.jsx)(c.Z.Item,{label:"Confirmed before 24 h",children:(0,a.jsx)("span",{style:{color:l.confirmed24},children:(0,t.xO)(o)})}),(0,a.jsx)(c.Z.Item,{label:"Confirmed between 1h and 24h",children:(0,a.jsx)("span",{style:{color:l.confirmed1},children:(0,t.xO)(parseFloat(i)-parseFloat(o))})}),(0,a.jsx)(c.Z.Item,{label:"Confirmed in 1h",children:(0,a.jsx)("span",{style:{color:l.confirmed},children:(0,t.xO)(parseFloat(s)-parseFloat(i))})}),(0,a.jsx)(c.Z.Item,{label:"In memory pool",children:(0,a.jsx)("span",{style:{color:l.all},children:(0,t.xO)(parseFloat(d)-parseFloat(s))})})]})}),children:(0,a.jsxs)("div",{className:"percent-container ".concat(j?"complete":""),children:[(0,a.jsx)("div",{className:"flex-row-center",children:m?(0,a.jsx)("span",{children:"-"}):(0,a.jsxs)("span",{children:[" ",N,"%"]})}),(0,a.jsxs)("div",{className:"percent",children:[(0,a.jsx)("div",{className:"percent-bar",style:{width:"".concat(p,"%"),backgroundColor:l.all}}),(0,a.jsx)("div",{className:"percent-bar",style:{width:"".concat(u,"%"),backgroundColor:l.confirmed,zIndex:2}}),(0,a.jsx)("div",{className:"percent-bar",style:{width:"".concat(f,"%"),backgroundColor:l.confirmed1,zIndex:2}}),(0,a.jsx)("div",{className:"percent-bar",style:{width:"".concat(b,"%"),backgroundColor:l.confirmed24,zIndex:2}})]})]})})}},27791:function(e,n,s){s.d(n,{R:function(){return p}});var a=s(85893),r=s(48054),c=s(92783),t=s(83062),l=s(11980);s(67294);var i=s(62625),o=s(41664),d=s.n(o),h=s(11163),m=s(25035),x=s(11475),j=s(26725);function p(e){let{transferHistory:n,tick:s,address:o,historyType:p,setHistoryType:u,page:f,setPage:b,pageSize:N,total:v,historyTypeConfig:w}=e,y=(0,h.useRouter)();if(!n)return(0,a.jsx)(r.Z,{active:!0});function g(e){return y.push("/brc20?q=".concat(e,"&tick=").concat(encodeURIComponent(s)))}return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsxs)("div",{className:"flex-row-between flex-wrap gap-16",children:[(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("span",{className:"display-domain main-color",children:s}),(0,a.jsx)("span",{className:"notice",children:", transactions of "})," ",o]}),(0,a.jsxs)("div",{className:"flex-row-v-center gap-16",children:[!j.GD&&(0,a.jsx)(d(),{href:"https://www.okx.com/web3/explorer/btc/address/".concat(o,"?tab=tokenTransfer&hmsr=unisat"),target:"_blank",className:"button border-btn",children:"View On OKLink"}),(0,a.jsxs)(d(),{href:"/brc20/".concat(encodeURIComponent(s)),className:"button border-btn",children:["View ",s]})]})]}),(0,a.jsx)(c.Z,{options:w,value:p,onChange:e=>{b(1),u(e)}}),n.length<1?(0,a.jsx)("div",{style:{marginTop:32},children:"No Data"}):(0,a.jsx)("div",{className:"scroll-x",children:(0,a.jsxs)("table",{className:"transfer-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Number"}),(0,a.jsx)("th",{children:"Method"}),(0,a.jsx)("th",{children:"Quantity"}),(0,a.jsx)("th",{children:"Balance"}),(0,a.jsx)("th",{className:"to",children:"From"}),(0,a.jsx)("th",{className:"to",children:"To"}),(0,a.jsx)("th",{className:"to",children:"Date Time"})]})}),(0,a.jsx)("tbody",{children:n.map((e,n)=>{let{blocktime:s,inscriptionId:r,inscriptionNumber:c,valid:l}=e,o=s<=0,h=e.amount+"";return("inscribe-mint"===e.type||"receive"===e.type)&&(h="+"+h),"send"===e.type&&(h="-"+h),(0,a.jsxs)("tr",{className:"history-item ".concat(l?"":"invalid"," ").concat(o?"unconfirmed":""),children:[(0,a.jsx)("td",{children:o?(0,a.jsxs)(d(),{href:"/inscription/".concat(r),className:"to",children:["#",c]}):(0,a.jsxs)(d(),{className:"to",href:"/inscription/".concat(r),children:["#",c]})}),(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:"type no-break ".concat(e.type," ").concat(o?"unconfirmed":""),onClick:()=>{u(e.type)},children:e.type})}),(0,a.jsx)("td",{className:"amount display-number",children:(0,a.jsx)(t.Z,{title:h,children:(0,i.xO)(h)})}),(0,a.jsx)("td",{className:"amount display-number",children:"transfer"===e.type?"-":(0,a.jsx)(t.Z,{title:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex-row-between gap-16",children:[(0,a.jsx)("span",{children:"Available:"}),(0,a.jsx)("span",{children:(0,i.xO)(e.availableBalance)})]}),(0,a.jsxs)("div",{className:"flex-row-between  gap-16",children:[(0,a.jsx)("span",{children:"Transferable:"}),(0,a.jsx)("span",{children:(0,i.xO)(e.transferBalance)})]})]}),children:(0,i.xO)(e.overallBalance)})}),e.from?(0,a.jsx)("td",{className:"to",onClick:()=>{g(e.from)},children:(0,i.Pu)(e.from,10)}):(0,a.jsx)("td",{}),(0,a.jsx)("td",{className:"to",onClick:()=>{g(e.to)},children:(0,i.Pu)(e.to,10)}),(0,a.jsxs)("td",{className:"time no-break",onClick:()=>{var n;n=e.txid,window.open("".concat("https://mempool.space/tx","/").concat(n))},children:[o?(0,a.jsxs)(t.Z,{title:"Unconfirmed transactions may become invalid.",children:["unconfirmed ",(0,a.jsx)(m.Z,{})]}):new Date(1e3*e.blocktime).toLocaleString(),!l&&(0,a.jsx)(t.Z,{title:"Your asset for this transaction is invalid.",children:(0,a.jsx)(x.Z,{style:{marginLeft:4}})})]})]},n)})})]})}),(0,a.jsx)("div",{className:"flex-row-center",style:{marginTop:16},children:(0,a.jsx)(l.Z,{showQuickJumper:v/N>50,current:f,pageSize:N,onChange:b,total:v,showSizeChanger:!1})})]})}}}]);
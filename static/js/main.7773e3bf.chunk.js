(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"id":0,"title":"Ollie","amount":4600,"until":"2019-12-29","then":4600,"bal":2795,"_as-of":"2019-11-01"},{"id":1,"title":"Maja","amount":860.5,"until":"2019-12-29","then":0,"bal":1400,"_as-of":"2019-11-13"}]')},5:function(e){e.exports=JSON.parse('{"needs":[{"id":1,"name":"Rent","req":705,"equal":false,"O":0.842,"ideal":0.25},{"id":2,"name":"Utilities","req":150,"equal":false,"O":0.842,"ideal":0.05},{"id":3,"name":"Groceries","req":242,"equal":false,"O":0.842,"ideal":0.05},{"id":4,"name":"Insurance","req":183.68,"equal":false,"O":1,"ideal":0.0415},{"id":5,"name":"Fuel","req":152.72,"equal":false,"O":1,"ideal":0.0332},{"id":6,"name":"Car Maintenance","req":109.75,"equal":false,"O":1,"ideal":0.0252},{"id":7,"name":"Medical","req":65,"equal":false,"O":0.76,"ideal":0.05}],"wants":[{"id":1,"name":"Fun","req":819,"equal":false,"O":0.842,"ideal":0.15},{"id":2,"name":"Gym","req":13.8,"equal":false,"O":1,"ideal":0.003},{"id":3,"name":"Subscriptions","req":166,"equal":false,"O":0.646,"ideal":0.03},{"id":4,"name":"Clothing","req":285,"equal":false,"O":0.645,"ideal":0.04},{"id":5,"name":"Additions","req":92,"equal":false,"O":1,"ideal":0.02},{"id":6,"name":"Personal Savings","req":276,"equal":false,"O":1,"ideal":0.06}],"savings":[{"id":1,"name":"Retirement","req":1092.42,"equal":false,"O":0.842,"ideal":0.2}]}')},66:function(e,t,a){e.exports=a(99)},71:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),u=(a(71),a(39)),o=a(8),i=a(9),m=a(11),s=a(10),d=a(12),p=a(28),h=a(102),f=a(110),E=a(56),O=a(111),b=a(5),g=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.person,t=b.needs,a=b.wants,n=b.savings,r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),c=p.reduce((function(e,t){return e+t.amount}),0),u=t.reduce((function(t,a){return t+a.req*(a.equal?.5:"Ollie"===e.title?a.O:1-a.O)}),0)+a.reduce((function(t,a){return t+a.req*(a.equal?.5:"Ollie"===e.title?a.O:1-a.O)}),0)+n.reduce((function(t,a){return t+a.req*(a.equal?.5:"Ollie"===e.title?a.O:1-a.O)}),0);return l.a.createElement(O.a.Body,null,l.a.createElement(O.a.Title,null,"Overview"),l.a.createElement(h.a,{noGutters:"true",className:"text-center reduce-font"},l.a.createElement(E.a,null,l.a.createElement(O.a.Subtitle,{className:"mb-2 text-muted border-bottom py-2"},"Income"),l.a.createElement(O.a.Text,null,r.format(e.amount))),l.a.createElement(E.a,null,l.a.createElement(O.a.Subtitle,{className:"mb-2 text-muted border-bottom py-2"},"Contribution"),l.a.createElement(O.a.Text,null,(e.amount/c*100).toFixed(1)+"%")),l.a.createElement(E.a,null,l.a.createElement(O.a.Subtitle,{className:"mb-2 text-muted border-bottom py-2"},"Costs"),l.a.createElement(O.a.Text,null,r.format(u))),l.a.createElement(E.a,null,l.a.createElement(O.a.Subtitle,{className:"mb-2 text-muted border-bottom py-2"},"+/-"),l.a.createElement(O.a.Text,{className:e.amount-u<0?"text-danger":"text-success"},r.format(e.amount-u)))))}}]),t}(n.Component),y=a(104),v=a(105),j=a(60),q=a(106),x=a(112),N=a(103),k=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),t=this.props,a=t.acct,n=t.person,r=this.props.mult;function c(e){return e.req*(e.equal?.5:"Ollie"===n.title?e.O:1-e.O)}function u(e){return e.ideal*n.amount}return l.a.createElement("tr",{className:"font-weight-light text-right"},l.a.createElement("td",null),l.a.createElement("td",{className:"font-weight-normal text-left"},a.name),l.a.createElement("td",null,l.a.createElement(x.a,{placement:"left",overlay:l.a.createElement(N.a,null,e.format(c(a))," | ",l.a.createElement("small",null,"*1"))},l.a.createElement("span",{className:r>1?"font-italic":""},e.format(c(a)*r)))),l.a.createElement("td",null,l.a.createElement("span",null,(100*function(e){return c(e)/n.amount}(a)).toFixed(1)+"%"," | "),l.a.createElement("small",{className:"text-muted"},(100*a.ideal).toFixed(1)+"%")),l.a.createElement("td",{className:"text-info"},l.a.createElement("span",{className:"text-muted-blue"},e.format(a.ideal*n.amount))),l.a.createElement("td",{className:u(a)-c(a)>=0?"text-success":"text-danger"},e.format(u(a)-c(a))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),t=this.props,a=t.person,n=t.category,r=t.name;function c(e){return e.req*(e.equal?.5:"Ollie"===a.title?e.O:1-e.O)}var u=n.reduce((function(e,t,n){return e.amount=(e.amount?e.amount:0)+c(t),e.percent=(e.percent?e.percent:0)+c(t)/a.amount,e.afford=(e.afford?e.afford:0)+function(e){return e.ideal*a.amount}(t),e.diff=e.afford-e.amount,e}),{}),o=n.reduce((function(e,t,a){return e.percent=(e.percent?e.percent:0)+t.ideal,e}),{});return l.a.createElement("tr",{className:"text-muted font-weight-light bg-light text-right"},l.a.createElement("td",{colSpan:"2",className:"text-dark font-weight-normal text-left"},r),l.a.createElement("td",null,e.format(u.amount)),l.a.createElement("td",null,l.a.createElement("span",null,(100*u.percent).toFixed(1)+"%"," | "),l.a.createElement("small",null,(100*o.percent).toFixed(1)+"%")),l.a.createElement("td",{className:"text-right"},e.format(o.percent*a.amount)),l.a.createElement("td",{className:"text-right"},e.format(u.diff)))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).handleMultChange=function(e){a.setState({mult:e.target.value})},a.state={mult:1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.person,a=b.needs,n=b.wants,r=b.savings;return l.a.createElement(O.a.Body,null,l.a.createElement(O.a.Title,null,l.a.createElement(y.a,null,l.a.createElement(h.a,null,l.a.createElement(E.a,{xs:6,sm:9,md:10,lg:10},"Difference"),l.a.createElement(E.a,{xs:6,sm:3,md:2,lg:2},l.a.createElement(v.a,{size:"small"},l.a.createElement(v.a.Prepend,null,l.a.createElement(v.a.Text,{id:"basic-addon1"},"\xd7")),l.a.createElement(j.a,{as:"input",type:"number",placeholder:"1",min:"1",onChange:this.handleMultChange})))))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement(q.a,{size:"sm small"},l.a.createElement("thead",{className:"text-right thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2",className:"text-left"},"Account"),l.a.createElement("th",null,"$"),l.a.createElement("th",null,"% | ",l.a.createElement("small",null,"% ideal")),l.a.createElement("th",null,l.a.createElement("small",null,"ideal")),l.a.createElement("th",null,"+/-"))),l.a.createElement("tbody",null,l.a.createElement(w,{category:a,name:"Needs",person:t}),a.map((function(a,n){return l.a.createElement(k,{person:t,mult:e.state.mult,acct:a,key:"post-list-key ".concat(n)})})),l.a.createElement(w,{category:n,name:"Wants",person:t}),n.map((function(a,n){return l.a.createElement(k,{person:t,mult:e.state.mult,acct:a,key:"post-list-key ".concat(n)})})),l.a.createElement(w,{category:r,name:"Savings",person:t}),r.map((function(a,n){return l.a.createElement(k,{person:t,mult:e.state.mult,acct:a,key:"post-list-key ".concat(n)})}))))))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.person,a=e.i;return l.a.createElement(E.a,null,l.a.createElement(O.a,{className:"d-block"},l.a.createElement(f.a.Toggle,{as:O.a.Header,eventKey:a},l.a.createElement("h6",null,t.title)),l.a.createElement(f.a.Collapse,{eventKey:a},l.a.createElement("div",null,l.a.createElement(g,{person:t}),l.a.createElement(S,{person:t})))))}}]),t}(n.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(f.a,{className:"w-100"},p.map((function(e,t){return l.a.createElement(C,{person:e,i:t,key:"post-list-key ".concat(t)})}))))}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"accAmount",value:function(e){return e.req*(e.equal?.5:"Ollie"===this.props.person?e.O:1-e.O)}},{key:"accPercent",value:function(e){var t=this,a=b.needs,n=b.wants,l=b.savings;return this.accAmount(e)/(a.reduce((function(e,a){return e+a.req*(a.equal?.5:"Ollie"===t.props.person?a.O:1-a.O)}),0)+n.reduce((function(e,a){return e+a.req*(a.equal?.5:"Ollie"===t.props.person?a.O:1-a.O)}),0)+l.reduce((function(e,a){return e+a.req*(a.equal?.5:"Ollie"===t.props.person?a.O:1-a.O)}),0))}},{key:"render",value:function(){var e=this.props,t=e.i,a=e.acct,n=e.amount,r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return l.a.createElement("tr",{className:"font-weight-light text-right",key:t},l.a.createElement("td",null),l.a.createElement("td",{className:"font-weight-normal text-left"},a.name),l.a.createElement("td",null,r.format(n*this.accPercent(a))),l.a.createElement("td",null,(100*this.accPercent(a)).toFixed(1)+"%"))}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"accAmount",value:function(e){var t=this;return e.reduce((function(e,a){return e+a.req*(a.equal?.5:"Ollie"===t.props.person?a.O:1-a.O)}),0)}},{key:"accPercent",value:function(e){var t=this,a=b.needs,n=b.wants,l=b.savings;return this.accAmount(e)/(a.reduce((function(e,a){return e+a.req*(a.equal?.5:"Ollie"===t.props.person?a.O:1-a.O)}),0)+n.reduce((function(e,a){return e+a.req*(a.equal?.5:"Ollie"===t.props.person?a.O:1-a.O)}),0)+l.reduce((function(e,a){return e+a.req*(a.equal?.5:"Ollie"===t.props.person?a.O:1-a.O)}),0))}},{key:"render",value:function(){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return l.a.createElement("tr",{className:"text-muted font-weight-light bg-light text-right"},l.a.createElement("td",{colSpan:"2",className:"text-dark font-weight-normal text-left text-capitalize"},this.props.cat[0]),l.a.createElement("td",null,e.format(this.props.amount*this.accPercent(this.props.cat[1]))),l.a.createElement("td",null,(100*this.accPercent(this.props.cat[1])).toFixed(1)+"%"))}}]),t}(n.Component),T=a(109),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).handleAmountChange=function(e){a.setState({amount:e.target.value})},a.handlePersonChange=function(e){a.setState({person:e.target.value})},a.state={person:"Ollie",amount:0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement(T.a,{className:"p-2 ml-2 w-100"},l.a.createElement(T.a.Group,{as:h.a,controlId:"exampleForm.ControlSelect1"},l.a.createElement(T.a.Label,{column:!0,className:"text-right"},"User"),l.a.createElement(E.a,null,l.a.createElement(T.a.Control,{as:"select",onChange:this.handlePersonChange},l.a.createElement("option",null,"Ollie"),l.a.createElement("option",null,"Maja")))),l.a.createElement(T.a.Group,{as:h.a,controlId:"exampleForm.ControlSelect2"},l.a.createElement(T.a.Label,{column:!0,className:"text-right"},"Budget Amount"),l.a.createElement(E.a,null,l.a.createElement(T.a.Control,{as:"input",onChange:this.handleAmountChange,type:"number",min:"0",placeholder:"0"}))),l.a.createElement("hr",null)),l.a.createElement("div",{className:"table-responsive"},l.a.createElement(q.a,{size:"sm"},l.a.createElement("thead",{className:"text-center thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2",className:"text-left"},"Account"),l.a.createElement("th",null,"$"),l.a.createElement("th",null,"%"))),Object.entries(b).map((function(t,a){return l.a.createElement("tbody",{key:a},l.a.createElement(M,{cat:t,amount:e.state.amount,person:e.state.person}),t[1].map((function(t,a){return l.a.createElement(D,{acct:t,key:a,i:a,amount:e.state.amount,person:e.state.person})})))})))))}}]),t}(n.Component),P=a(46),U=a.n(P),B=a(61),I=a.n(B),G=a(62),K=a.n(G),z=a(63),L=a.n(z);U.a.fcRoot(I.a,K.a,L.a);var J=function(){return Object.values(p).map((function(e){for(var t=new Date(e.until),a=b.needs.reduce((function(t,a){return t+a.req*(a.equal?.5:"Ollie"===e.title?a.O:1-a.O)}),0)+b.wants.reduce((function(t,a){return t+a.req*(a.equal?.5:"Ollie"===e.title?a.O:1-a.O)}),0)+b.savings.reduce((function(t,a){return t+a.req*(a.equal?.5:"Ollie"===e.title?a.O:1-a.O)}),0),n=[],l=new Date,r=0;r<7;r++)n.push({value:e.bal+(t<l?e.then:e.amount)*r-a*r}),l.setMonth(l.getMonth()+1);return{seriesname:e.title,data:n}}))},R={type:"msarea",width:"100%",height:"400",dataFormat:"json",dataSource:{chart:{theme:"fusion",caption:"Bank Balance",subCaption:"Ollie vs Maja Remaining Balance",xAxisName:"Month"},categories:[{category:function(){var e=new Intl.DateTimeFormat("us",{month:"short"}),t=new Date;t.setMonth(t.getMonth()-1);for(var a=[],n=0;n<7;n++)a.push({label:e.format(t.setMonth(t.getMonth()+1))});return a}()}],dataset:J()}},W=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return J(),l.a.createElement(U.a,R)}}]),t}(l.a.Component),$=(a(97),a(98),a(108)),_=a(107),H=a(64),Q=a.n(H);var V=function(){var e,t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(u.a)(o,2),m=i[0],s=i[1],d=Object(n.useState)(0),p=Object(u.a)(d,2),f=p[0],O=p[1];return r?l.a.createElement(y.a,null,l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement("h1",{className:"text-center my-3 py-3"},"Budget Tool"),l.a.createElement("hr",null))),l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement($.a,{defaultActiveKey:"budgetTool",id:"uncontrolled-tab-example"},l.a.createElement(_.a,{eventKey:"budgetTool",title:"Budget Tool"},l.a.createElement(A,null)),l.a.createElement(_.a,{eventKey:"personDetail",title:"Person Detail"},l.a.createElement("div",null,l.a.createElement("p",{className:"p-1"},"Select an individual to see how their income is distributed across costs")),l.a.createElement(F,null)),l.a.createElement(_.a,{eventKey:"graphDetail",title:"Graph"},l.a.createElement("div",null,l.a.createElement("p",{className:"p-1"},"Select an individual to see how their income is distributed across costs")),l.a.createElement(W,null)))))):l.a.createElement(y.a,{className:"text-center"},l.a.createElement("h1",{className:"text-center my-3 py-3"},"Locked"),l.a.createElement("p",null,"Please enter the appropriate lock code to enter"),l.a.createElement(Q.a,{length:4,initialValue:"",onChange:function(e,t){s(!1)},inputmode:"decimal",pattern:"\\\\d*",type:"numeric",ref:function(t){return e=t},style:{padding:"0px"},inputStyle:{borderColor:m?"#ff9b9b":"LightGray",background:m?"#ffe7e7":"transparent",fontSize:"1.25rem",fontFamily:"Quantico",margin:"0px"},inputFocusStyle:{borderColor:m?"#ff9b9b":"LightSkyBlue"},onComplete:function(t,a){"1407"===t?c(!0):(e.clear(),s(!0),O(f+1))}}),l.a.createElement("br",null),l.a.createElement("h6",null,l.a.createElement("small",null,f>0?"You have entered the wrong lock code [".concat(f,"]"):"")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.7773e3bf.chunk.js.map
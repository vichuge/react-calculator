(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),l=c(5),s=c.n(l),i=(c(15),c(9)),r=c(6),b=c(7),u=c(2),j=c(10),o=c(8),k=c(0),O=function(e){var t=e.result;return Object(k.jsx)("div",{className:"display",children:Object(k.jsx)("p",{children:t})})};O.defaultProps={result:"0"};var x=O,m=function(e){var t=e.buttonName,c=e.clickPanel;return Object(k.jsx)("button",{type:"button",onClick:function(){return c(t)},children:t})},d=function(e){var t=e.clickApp,c=function(e){t(e)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"g1",children:[Object(k.jsx)(m,{buttonName:"AC",clickPanel:c,className:"btn"}),Object(k.jsx)(m,{buttonName:"+/-",clickPanel:c}),Object(k.jsx)(m,{buttonName:"%",clickPanel:c}),Object(k.jsx)(m,{buttonName:"/",clickPanel:c})]}),Object(k.jsxs)("div",{className:"g1",children:[Object(k.jsx)(m,{buttonName:"7",clickPanel:c}),Object(k.jsx)(m,{buttonName:"8",clickPanel:c}),Object(k.jsx)(m,{buttonName:"9",clickPanel:c}),Object(k.jsx)(m,{buttonName:"X",clickPanel:c})]}),Object(k.jsxs)("div",{className:"g1",children:[Object(k.jsx)(m,{buttonName:"4",clickPanel:c}),Object(k.jsx)(m,{buttonName:"5",clickPanel:c}),Object(k.jsx)(m,{buttonName:"6",clickPanel:c}),Object(k.jsx)(m,{buttonName:"-",clickPanel:c})]}),Object(k.jsxs)("div",{className:"g1",children:[Object(k.jsx)(m,{buttonName:"1",clickPanel:c}),Object(k.jsx)(m,{buttonName:"2",clickPanel:c}),Object(k.jsx)(m,{buttonName:"3",clickPanel:c}),Object(k.jsx)(m,{buttonName:"+",clickPanel:c})]}),Object(k.jsxs)("div",{className:"g1",children:[Object(k.jsx)(m,{buttonName:"0",clickPanel:c}),Object(k.jsx)(m,{buttonName:".",clickPanel:c}),Object(k.jsx)(m,{buttonName:"=",clickPanel:c})]})]})},N=c(4),h=c.n(N),P=function(e,t,c){var a=h()(e),n=h()(t),l="";switch(c){case"+":l=a.plus(n);break;case"-":l=a.minus(n);break;case"X":l=a.times(n);break;case"/":l=a.div(n);break;case"%":l=a.mod(n);break;default:l="Error!"}return l.toString()},v=function(e,t){var c=e.total,a=e.next,n=e.operation;switch(t){case"+/-":c&&!a&&(c*=-1),c&&a&&(a*=-1);break;case"AC":c=null,a=null,n=null;break;case".":c&&!n&&c&&!c.includes(".")&&(c="".concat(c,".")),c&&n&&(a&&!a.includes(".")&&(a="".concat(a,".")),a||(a="0.")),c||(c="0.");break;case"=":c&&a&&n&&(c=P(c,a,n)),n||(c=null),a=null,n=null;break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":c&&!n&&(c+=t),c&&n&&a&&(a+=t),c&&n&&!a&&(a=t),c||(c=t);break;case"+":case"-":case"X":case"/":case"%":c&&!a&&(n=t),c||(c="0",n=t),c&&a&&n&&(c=P(c,a,n),"%"===(n=t)&&(n=null),a=null);break;default:c="Error!"}return{total:c,next:a,operation:n}},p=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(e){var a;return Object(r.a)(this,c),(a=t.call(this,e)).state={total:null,next:null,operation:null},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(b.a)(c,[{key:"handleClick",value:function(e){var t=v(this.state,e);this.setState(Object(i.a)({},t))}},{key:"render",value:function(){var e=this.state,t=e.total,c=e.operation,a=e.next,n="";return t||(n="0"),t&&(n=t),t&&c&&(n=t),t&&c&&a&&(n=a),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(x,{result:n}),Object(k.jsx)(d,{clickApp:this.handleClick})]})}}]),c}(n.a.Component);s.a.render(Object(k.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c984a0cb.chunk.js.map
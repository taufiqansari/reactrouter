(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{38:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(c.push(n.value),!e||c.length!==e);a=!0);}catch(i){u=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},39:function(t,e,r){t.exports={card:"Card_card__2Gh4Q"}},40:function(t,e,r){t.exports={form:"QuoteForm_form__2bY_X",loading:"QuoteForm_loading__14T5k",control:"QuoteForm_control__2VufD",actions:"QuoteForm_actions__1jFSf"}},48:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(38),c=r(39),a=r.n(c),u=r(1),i=function(t){return Object(u.jsx)("div",{className:a.a.card,children:t.children})},l=r(15),s=r(40),d=r.n(s),f=r(2),j=function(t){var e=Object(n.useState)(!1),r=Object(o.a)(e,2),c=r[0],a=r[1],s=Object(n.useRef)(),j=Object(n.useRef)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i,{children:[Object(u.jsx)(f.a,{when:c,message:function(){return"Are you sure you want  to leave the page ? All entered data will be lost!"}}),Object(u.jsxs)("form",{onFocus:function(){a(!0)},className:d.a.form,onSubmit:function(e){e.preventDefault();var r=s.current.value,n=j.current.value;t.onAddQuote({author:r,text:n})},children:[t.isLoading&&Object(u.jsx)("div",{className:d.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:d.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:s})]}),Object(u.jsxs)("div",{className:d.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:j})]}),Object(u.jsx)("div",{className:d.a.actions,children:Object(u.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})]})})};e.default=function(){var t=Object(f.g)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{onAddQuote:function(e){console.log(e),t.push("/quote")}}),";"]})}}}]);
//# sourceMappingURL=4.1a2abe63.chunk.js.map
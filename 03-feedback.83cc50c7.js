!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),s?p(e):u}function x(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=b();if(x(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function S(e){return f=void 0,m&&r?p(e):(r=o=void 0,u)}function h(){var e=b(),n=x(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=T(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(T(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?u:S(b())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),x=e(t)((function(e){var t={email:"",text:""};t.email=e.currentTarget.elements.email.value,t.text=e.currentTarget.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500);document.addEventListener("DOMContentLoaded",(function(){if(null!==localStorage.getItem("feedback-form-state")){var e=JSON.parse(localStorage.getItem("feedback-form-state"));return console.log(j.elements),j.elements.email.value=e.email,void(j.elements.message.value=e.text)}return})),j.addEventListener("input",x),j.addEventListener("submit",(function(e){e.preventDefault();var t={email:"",text:""};t.text=e.currentTarget.elements.message.value,t.email=e.currentTarget.elements.email.value,console.log(t),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.83cc50c7.js.map

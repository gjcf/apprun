!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";(function(t){var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this._events={}}return t.prototype.on=function(t,e,n){void 0===n&&(n={}),this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})},t.prototype.off=function(t,e){var n=this._events[t];n&&((n=n.filter(function(t){return t.fn!==e})).length?this._events[t]=n:delete this._events[t])},t.prototype.run=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[t];return console.assert(!!o,"No subscriber for event: "+t),o&&((o=o.filter(function(r){var o=r.fn,i=r.options;return i.delay?e.delay(t,o,n,i):o.apply(e,n),!r.options.once})).length?this._events[t]=o:delete this._events[t]),o?o.length:0},t.prototype.once=function(t,e,r){void 0===r&&(r={}),this.on(t,e,n({},r,{once:!0}))},t.prototype.delay=function(t,e,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),e.apply(o,n)},r.delay)},t}();e.App=r;var o,i="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;i.app&&i._AppRunVersions?o=i.app:(o=new r,i.app=o,i._AppRunVersions="AppRun-1"),e.default=o}).call(this,n(3))},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(0));e.app=i.default;var a=n(5),s=n(7);e.Component=s.Component;var u=n(2);e.on=u.on,e.update=u.update,e.event=u.update;var c=n(9);e.ROUTER_EVENT=c.ROUTER_EVENT,e.ROUTER_404_EVENT=c.ROUTER_404_EVENT,i.default.createElement=a.createElement,i.default.render=a.render,i.default.Fragment=a.Fragment,i.default.start=function(t,e,n,o,i){var a=r({},i,{render:!0,global_event:!0}),u=new s.Component(e,n,o);return i&&i.rendered&&(u.rendered=i.rendered),u.mount(t,a),u};var f=function(t){};i.default.on("$",f),i.default.on("debug",function(t){return f}),i.default.on(c.ROUTER_EVENT,f),i.default.on("#",f),i.default.route=c.route,i.default.on("route",function(t){return i.default.route&&i.default.route(t)}),"object"==typeof document&&document.addEventListener("DOMContentLoaded",function(){i.default.route===c.route&&(window.onpopstate=function(){return c.route(location.hash)},c.route(location.hash))}),e.default=i.default,"object"==typeof window&&(window.Component=s.Component,window.React=i.default)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Reflect={meta:new WeakMap,defineMetadata:function(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys:function(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata:function(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=function(t,n){return void 0===n&&(n={}),function(r,o,i){var a=t?t.toString():o;return e.Reflect.defineMetadata("apprun-update:"+a,{name:a,key:o,options:n},r),i}},e.on=function(t,n){return void 0===n&&(n={}),function(r,o){var i=t?t.toString():o;e.Reflect.defineMetadata("apprun-update:"+i,{name:i,key:o,options:n},r)}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(6)),i="_props";function a(t){var e=[],n=function(t){null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:""+t)};return t&&t.forEach(function(t){Array.isArray(t)?t.forEach(function(t){return n(t)}):n(t)}),e}e.createElement=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=a(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(Array.isArray(t))return t;if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:o};if("function"==typeof t)return t(e,o);throw new Error("Unknown tag in vdom "+t)};var s={};function u(t,e,n){void 0===n&&(n={}),null!=e&&(e=o.default(e,n),t&&(Array.isArray(e)?f(t,e):f(t,[e])))}function c(t,e){console.assert(!!t),function(t,e){var n=t.nodeName,r=""+(e.tag||"");return n.toUpperCase()===r.toUpperCase()}(t,e)?(f(t,e.children),p(t,e.props)):t.parentNode.replaceChild(d(e),t)}function f(t,e){for(var n=Math.min(t.childNodes.length,e.length),r=0;r<n;r++){var o=e[r],i=t.childNodes[r];if(o instanceof HTMLElement)t.insertBefore(o,i);else if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.textContent=o:t.replaceChild(l(o),i));else{var a=o.props&&o.props.key;if(a)if(i.key===a)c(t.childNodes[r],o);else{var u=s[a];u?(t.insertBefore(u,i),t.appendChild(i),c(t.childNodes[r],o)):t.insertBefore(d(o),i)}else c(t.childNodes[r],o)}}for(var f=t.childNodes.length;f>n;)t.removeChild(t.lastChild),f--;if(e.length>n){var p=document.createDocumentFragment();for(r=n;r<e.length;r++)p.appendChild(d(e[r]));t.appendChild(p)}}function l(t){if(0===t.indexOf("_html:")){var e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function d(t,e){if(void 0===e&&(e=!1),console.assert(null!=t),"string"==typeof t)return l(t);if(!t.tag||"function"==typeof t.tag)return l(JSON.stringify(t));var n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(n,t.props),t.children&&t.children.forEach(function(t){return n.appendChild(d(t,e))}),n}function p(t,e){console.assert(!!t);var n=t[i]||{};for(var r in e=function(t,e){e.class=e.class||e.className,delete e.className;var n={};return t&&Object.keys(t).forEach(function(t){return n[t]=null}),e&&Object.keys(e).forEach(function(t){return n[t]=e[t]}),n}(n,e||{}),t[i]=e,e){var o=e[r];if("style"===r)for(var a in t.style.cssText&&(t.style.cssText=""),o)t.style[a]!==o[a]&&(t.style[a]=o[a]);else if(r.startsWith("data-")){var u=r.substring(5).replace(/-(\w)/g,function(t){return t[1].toUpperCase()});t.dataset[u]!==o&&(o||""===o?t.dataset[u]=o:delete t.dataset[u])}else"id"===r||"class"===r||r.startsWith("role")||r.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(r)!==o&&(o?t.setAttribute(r,o):t.removeAttribute(r)):t[r]!==o&&(t[r]=o);"key"===r&&o&&(s[o]=t)}}e.updateElement=u,e.render=u,e.Fragment=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return a(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);e.createElement=r.createElement,e.Fragment=r.Fragment,e.render=function(t,e,n){r.updateElement(t,e,n)}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(0));var a=0;e.default=function t(e,n,o){if(void 0===o&&(o=0),0===o&&(a=0),"string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return t(e,n,a++)});var s=e;return e&&"function"==typeof e.tag&&Object.getPrototypeOf(e.tag).__isAppRunComponent&&(s=function(t,e,n){var o=t.tag,a=t.props,s=t.children,u=a&&a.id,c="_"+n+"_";u?c="_"+u+"_":u="_"+n+"_"+Date.now(),e.__componentCache||(e.__componentCache={});var f=e.__componentCache[c];f||(f=e.__componentCache[c]=new o(r({},a,{children:s})).mount(u)),f.mounted&&f.mounted(a,s);var l=f.state,d="";return l instanceof Promise||!f.view||(d=f._view(l,a),f.rendered&&setTimeout(function(){return f.rendered(l,a)})),i.default.createElement("section",r({},a,{id:u}),d)}(e,n,a++)),s&&Array.isArray(s.children)&&(s.children=s.children.map(function(e){return t(e,n,a++)})),s}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(0)),s=n(2),u=i(n(8)),c={};a.default.on("get-components",function(t){return t.components=c});var f=function(t){return t},l=function(){function t(t,e,n,o){var i=this;this.state=t,this.view=e,this.update=n,this.options=o,this._app=new a.App,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=function(){i._history_idx--,i._history_idx>=0?i.setState(i._history[i._history_idx],{render:!0,history:!1}):i._history_idx=0},this._history_next=function(){i._history_idx++,i._history_idx<i._history.length?i.setState(i._history[i._history_idx],{render:!0,history:!1}):i._history_idx=i._history.length-1},this.start=function(t,e){return void 0===t&&(t=null),void 0===e&&(e={render:!0}),i.mount(t,r({},e,{render:!0}))}}return t.prototype.render=function(t,e){a.default.render(t,e,this)},t.prototype._view=function(t,e){var n=this;if(void 0===e&&(e=null),this.view){var r=a.default.createElement;a.default.createElement=function(t,e){for(var o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];return e&&Object.keys(e).forEach(function(r){r.startsWith("$")&&(u.default(r,e,t,n),delete e[r])}),r.apply(void 0,[t,e].concat(o))};var o=e?this.view(t,e):this.view(t);return a.default.createElement=r,o}},t.prototype.renderState=function(t){var e=this;if(this.view){var n=this._view(t);if(a.default.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"==typeof document){var r="string"==typeof this.element?document.getElementById(this.element):this.element;if(r){if(this.unload){if(r._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),r.setAttribute("_c",this.tracking_id),"undefined"!=typeof MutationObserver)){var o=new MutationObserver(function(t){var n=t[0],i=n.removedNodes;(n.oldValue===e.tracking_id||Array.from(i).indexOf(r)>=0)&&(e.unload(e.state),o.disconnect())});r.parentNode&&o.observe(r.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["_c"]})}}else r.removeAttribute("_c");r._component=this}this.render(r,n),this.rendered&&this.rendered(this.state)}}},t.prototype.setState=function(t,e){var n=this;if(void 0===e&&(e={render:!0,history:!1}),t instanceof Promise)t.then(function(t){n.setState(t,e)}).catch(function(t){throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=this._history.concat([t]),this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}},t.prototype.mount=function(t,e){return void 0===t&&(t=null),console.assert(!this.element,"Component already mounted."),this.options=e=r({},this.options,e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),c[t]=c[t]||[],c[t].push(this),this},t.prototype.is_global_event=function(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))},t.prototype.add_action=function(t,e,n){var r=this;void 0===n&&(n={}),e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var s=e.apply(void 0,[r.state].concat(o));a.default.run("debug",{component:r,event:t,e:o,state:r.state,newState:s,options:n}),r.setState(s,n)},n))},t.prototype.add_actions=function(){var t=this,e=this.update||{};s.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=s.Reflect.getMetadata(n,t);e[r.name]=[t[r.key].bind(t),r.options]}});var n={};Array.isArray(e)?e.forEach(function(t){var e=t,r=e[0],o=e[1],i=e[2];r.toString().split(",").forEach(function(t){return n[t.trim()]=[o,i]})}):Object.keys(e).forEach(function(t){var r=e[t];("function"==typeof r||Array.isArray(r))&&t.split(",").forEach(function(t){return n[t.trim()]=r})}),n["."]||(n["."]=f),Object.keys(n).forEach(function(e){var r=n[e];"function"==typeof r?t.add_action(e,r):Array.isArray(r)&&t.add_action(e,r[0],r[1])})},t.prototype.run=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=t.toString();return this.is_global_event(o)?a.default.run.apply(a.default,[o].concat(n)):(e=this._app).run.apply(e,[o].concat(n))},t.prototype.on=function(t,e,n){var r=t.toString();return this._actions.push({name:r,fn:e}),this.is_global_event(r)?a.default.on(r,e,n):this._app.on(r,e,n)},t.prototype.unmount=function(){var t=this;this._actions.forEach(function(e){var n=e.name,r=e.fn;t.is_global_event(n)?a.default.off(n,r):t._app.off(n,r)})},t.__isAppRunComponent=!0,t}();e.Component=l},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e){return(e?t.state[e]:t.state)||""},i=function(t,e,n){if(e){var o=r({},t.state);o[e]=n,t.setState(o)}else t.setState(n)};e.default=function(t,e,n,r){if(t.startsWith("$on")){var a=e[t];if(t=t.substring(1),"boolean"==typeof a)e[t]=function(e){return r.run(t,e)};else if("string"==typeof a)e[t]=function(t){return r.run(a,t)};else if("function"==typeof a)e[t]=function(t){return r.setState(a(r.state,t))};else if(Array.isArray(a)){var s=a[0],u=a.slice(1);"string"==typeof s?e[t]=function(t){return r.run.apply(r,[s].concat(u,[t]))}:"function"==typeof s&&(e[t]=function(t){return r.setState(s.apply(void 0,[r.state].concat(u,[t])))})}}else if("$bind"===t){var c=e.type||"text",f="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(c){case"checkbox":e.checked=o(r,f),e.onclick=function(t){return i(r,f||t.target.name,t.target.checked)};break;case"radio":e.checked=o(r,f)===e.value,e.onclick=function(t){return i(r,f||t.target.name,t.target.value)};break;case"number":case"range":e.value=o(r,f),e.oninput=function(t){return i(r,f||t.target.name,Number(t.target.value))};break;default:e.value=o(r,f),e.oninput=function(t){return i(r,f||t.target.name,t.target.value)}}else"select"===n?(e.value=o(r,f),e.onchange=function(t){t.target.multiple||i(r,f||t.target.name,t.target.value)}):"option"===n&&(e.selected=o(r,f),e.onclick=function(t){return i(r,f||t.target.name,t.target.selected)})}else app.run("$",{key:t,tag:n,props:e,component:r})}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0));e.ROUTER_EVENT="//",e.ROUTER_404_EVENT="///",e.route=function(t){if(t||(t="#"),t.startsWith("#")){var n=t.split("/"),r=n[0],i=n.slice(1);o.default.run.apply(o.default,[r].concat(i))||o.default.run.apply(o.default,[e.ROUTER_404_EVENT,r].concat(i)),o.default.run.apply(o.default,[e.ROUTER_EVENT,r].concat(i))}else if(t.startsWith("/")){var a=t.split("/"),s=(a[0],a[1]);i=a.slice(2);o.default.run.apply(o.default,["/"+s].concat(i))||o.default.run.apply(o.default,[e.ROUTER_404_EVENT,"/"+s].concat(i)),o.default.run.apply(o.default,[e.ROUTER_EVENT,"/"+s].concat(i))}else o.default.run(t)||o.default.run(e.ROUTER_404_EVENT,t),o.default.run(e.ROUTER_EVENT,t)},e.default=e.route}])});
//# sourceMappingURL=apprun.js.map
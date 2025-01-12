(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>s});var a=n(601),r=n.n(a),o=n(314),i=n.n(o)()(r());i.push([t.id,':root {\n    --primary: white;\n    --secondary: #f5f6f8;\n    --highlight: rgb(228, 175, 99);\n    --border: #dfdfdf;\n    --alternate: #eeeeee;\n    --font: black;\n\n    --green: #b7e6d4;\n    --blue: #c4d6e8;\n    --orange: #f5c2a4;\n    --purple: #d0a8e5;\n\n    --red: #f28c8c;\n    --yellow: #f8e55e;\n}\n\n.dark {\n    --primary: #1e1e2f;\n    --secondary: #2a2a3b;\n    --highlight: rgb(228, 175, 99);\n    --border: #44475a;\n    --alternate: #33344a;\n    --font: #e4e4e4;\n\n    --green: #5a7d71;\n    --blue: #4b6a80;\n    --orange: #ffb34f;\n    --purple: #6d4e8d;\n\n    --red: #ff5c5c;\n    --yellow: #f1d14f;\n}\n\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    color: var(--font);\n    user-select: none;\n    -webkit-font-smoothing: antialiased;\n    font-family: "Outfit", sans-serif;\n    min-height: 100vh;\n    height: 100vh;\n    background-color: var(--primary);\n    display: grid;\n    grid-template-columns: 1fr auto;\n    overflow-y: scroll;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    color: var(--font);\n    overflow-wrap: break-word;\n}\n\nh2 {\n    font-weight: 500;\n}\n\np {\n    text-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    text-wrap: balance;\n}\n\n.f_blue {\n    color: rgb(89, 89, 239);\n}\n\n.f_orange {\n    color: var(--highlight)\n}\n\n.f_green {\n    color: rgb(56, 179, 56);\n}\n\n.sidebar {\n    position: fixed;\n    height: 100%;\n    width: 300px;\n    background: var(--secondary);\n    padding: 30px;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    overflow-x: hidden;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button.btn_darkMode {\n    margin-top: auto;\n    background-color: #33344a;\n    color: white;\n    border-color: #44475a;\n}\n\n.dark .btn_darkMode {\n    margin-top: auto;\n    background-color: #eeeeee;\n    color: black;\n    border-color: #dfdfdf;\n}\n\n.title {\n    font-size: 3rem;\n}\n\n.button {\n    font-size: 1.2rem;\n    font-weight: bold;\n    padding: 20px;\n    background-color: var(--alternate);\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    transition: transform .5s;\n    border: 2px solid var(--border);\n    color: var(--font);\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    padding: 50px;\n    margin-left: 300px;\n}\n\n.dark img {\n    filter: invert(1);\n}\n\n.page-header {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    min-height: 50px;\n}\n\n.page-header :first-child {\n    margin-right: auto;\n}\n\n.page-header img:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n.page-header img:active {\n    transform: scale(1.3);\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-template-rows: repeat(4, auto);\n    gap: 20px;\n    align-items: center;\n}\n\n.complete h2,\n.complete h3,\n.complete p:not(.prio) {\n    text-decoration: line-through;\n    opacity: 50%;\n}\n\n.task * {\n    width: fit-content;\n}\n\n.btns-container {\n    grid-area: 1 / 2 / 5 / 3;\n}\n\n.btn {\n    display: inline-block;\n    margin: 10px;\n}\n\n.cardview {\n    display: grid;\n    grid-template-columns: 10fr 6fr;\n    gap: 20px;\n}\n\n.card {\n    padding: 20px;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    gap: 20px;\n}\n\n.card h1 {\n    text-align: right;\n}\n\n.card .box {\n    margin: 0;\n    background-color: rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.recent_projects {\n    background-color: var(--blue);\n}\n\n.recent_tasks {\n    background-color: var(--green);\n}\n\n.tasks_todo {\n    grid-column: span 2;\n    background-color: var(--purple);\n}\n\n.box {\n    background-color: var(--secondary);\n    border-radius: 10px;\n    padding: 20px;\n    margin: 0 0 20px;\n}\n\n.hover {\n    transition: transform .5s;\n}\n\n.hover:hover {\n    outline: 2px solid var(--highlight);\n    transform: scale(1.03);\n    cursor: pointer;\n}\n\n.active img {\n    transform: rotate(180deg);\n}\n\n.project_title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project_title img {\n    transition: transform .2s ease-in-out;\n}\n\n.project_title img:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n.tasksContainer {\n    flex-direction: column;\n}\n\n.prio {\n    padding: 10px 20px;\n    border-radius: 10px;\n}\n\n.dark .prio {\n    color: var(--primary);\n}\n\n.low {\n    background-color: var(--yellow);\n}\n\n.medium {\n    background-color: var(--orange);\n}\n\n.high {\n    background-color: var(--red);\n}\n\n.svg-large {\n    height: 50px;\n    width: 50px;\n}\n\n.svg-mid {\n    height: 25px;\n    width: 25px;\n}\n\n.project_task {\n    display: grid;\n    gap: 20px;\n    margin: 20px 0;\n    grid-template-columns: 1fr auto auto;\n    align-items: center;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content form {\n    padding: 20px;\n    border-radius: 10px;\n    min-width: 1000px;\n    background-color: var(--primary);\n    display: grid;\n    gap: 20px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(2, auto);\n    grid-auto-rows: auto;\n}\n\n.modal-content input,\n.modal-content textarea,\n.modal-content select {\n    grid-column: span 2;\n    background-color: var(--secondary);\n    padding: 30px;\n    border: none;\n    border-bottom: 3px solid rgba(0, 0, 0, 0);\n    border-radius: 10px 10px 0 0;\n    color: var(--font);\n}\n\n.modal-content input[type="date"],\n.modal-content select {\n    grid-column: span 1;\n    font-size: 1rem;\n}\n\n.modal-content select {\n    border-bottom: 3px solid white;\n    appearance: none;\n}\n\n.dark input {\n    color-scheme: dark;\n}\n\n.modal-content input {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.modal-content .proj input {\n    color: var(--highlight);\n}\n\n.modal-content textarea {\n    margin: none;\n    resize: none;\n    min-height: 200px;\n}\n\n.modal-content input:focus,\n.modal-content textarea:focus,\n.modal-content select:focus {\n    outline: none;\n}\n\n.modal-content input:invalid,\n.modal-content textarea:invalid {\n    border-bottom-color: rgb(244, 87, 87);\n}\n\n.modal-content input:valid,\n.modal-content textarea:valid {\n    border-bottom-color: rgb(76, 208, 76);\n}',""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var o={},i=[],s=0;s<t.length;s++){var d=t[s],c=a.base?d[0]+a.base:d[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=r(m,a);a.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=a(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var d=a(t,r),c=0;c<o.length;c++){var l=n(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},659:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return t[a](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=a[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,n.d({},{a:()=>et});var a=n(72),r=n.n(a),o=n(825),i=n.n(o),s=n(659),d=n.n(s),c=n(56),l=n.n(c),u=n(540),p=n.n(u),m=n(113),h=n.n(m),f=n(365),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),r()(f.A,b),f.A&&f.A.locals&&f.A.locals;const g=n.p+"bead66d451a5b3997d16.svg",v=n.p+"cde33b85128d907f8cdf.svg",y=n.p+"6654d0c369d73fbd266a.svg",k=n.p+"5ca137ab9b7bb1aeaa89.svg",x=()=>{let t=new Date;return{date:new Intl.DateTimeFormat("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(t),datewTime:t}},w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function C(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const E={date:C({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:C({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:C({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},D={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function _(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}const L={ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:_({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:_({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:_({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:_({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:_({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function j(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let c;return c=t.valueCallback?t.valueCallback(d):d,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}const M={ordinalNumber:(I={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(I.matchPattern);if(!n)return null;const a=n[0],r=t.match(I.parsePattern);if(!r)return null;let o=I.valueCallback?I.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:j({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:j({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:j({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:j({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var I;const T={code:"en-US",formatDistance:(t,e,n)=>{let a;const r=w[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:E,formatRelative:(t,e,n,a)=>D[t],localize:L,match:M,options:{weekStartsOn:0,firstWeekContainsDate:1}};let P={};function A(){return P}Math.pow(10,8);const S=43200,G=Symbol.for("constructDateFrom");function W(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&G in t?t[G](e):t instanceof Date?new t.constructor(e):new Date(e)}function F(t,e){return W(e||t,t)}function N(t){const e=F(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function q(t,...e){const n=W.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}function O(t,e){const n=+F(t)-+F(e);return n<0?-1:n>0?1:n}function X(t,e){const n=F(t,e?.in);return+function(t,e){const n=F(t,e?.in);return n.setHours(23,59,59,999),n}(n,e)==+function(t,e){const n=F(t,e?.in),a=n.getMonth();return n.setFullYear(n.getFullYear(),a+1,0),n.setHours(23,59,59,999),n}(n,e)}function z(t,e,n){const[a,r,o]=q(n?.in,t,t,e),i=O(r,o),s=Math.abs(function(t,e,n){const[a,r]=q(n?.in,t,e);return 12*(a.getFullYear()-r.getFullYear())+(a.getMonth()-r.getMonth())}(r,o));if(s<1)return 0;1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-i*s);let d=O(r,o)===-i;X(a)&&1===s&&1===O(a,o)&&(d=!1);const c=i*(s-+d);return 0===c?0:c}function Y(t,e,n){const a=function(t,e){return+F(t)-+F(e)}(t,e)/1e3;return(r=n?.roundingMethod,t=>{const e=(r?Math[r]:Math.trunc)(t);return 0===e?0:e})(a);var r}function J(t,e,n){const a=A(),r=n?.locale??a.locale??T,o=O(t,e);if(isNaN(o))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:o}),[s,d]=q(n?.in,...o>0?[e,t]:[t,e]),c=Y(d,s),l=(N(d)-N(s))/1e3,u=Math.round((c-l)/60);let p;if(u<2)return n?.includeSeconds?c<5?r.formatDistance("lessThanXSeconds",5,i):c<10?r.formatDistance("lessThanXSeconds",10,i):c<20?r.formatDistance("lessThanXSeconds",20,i):c<40?r.formatDistance("halfAMinute",0,i):c<60?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",1,i):0===u?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",u,i);if(u<45)return r.formatDistance("xMinutes",u,i);if(u<90)return r.formatDistance("aboutXHours",1,i);if(u<1440){const t=Math.round(u/60);return r.formatDistance("aboutXHours",t,i)}if(u<2520)return r.formatDistance("xDays",1,i);if(u<S){const t=Math.round(u/1440);return r.formatDistance("xDays",t,i)}if(u<86400)return p=Math.round(u/S),r.formatDistance("aboutXMonths",p,i);if(p=z(d,s),p<12){const t=Math.round(u/S);return r.formatDistance("xMonths",t,i)}{const t=p%12,e=Math.trunc(p/12);return t<3?r.formatDistance("aboutXYears",e,i):t<9?r.formatDistance("overXYears",e,i):r.formatDistance("almostXYears",e+1,i)}}const R=document.querySelector("main"),H=(()=>{const t=document.getElementById("modal-container"),e=document.getElementById("modal-content"),n=(t,n)=>{for(;e.firstChild;)e.removeChild(e.firstChild);const a={container:document.createElement("form"),input:document.createElement("input"),btn_back:document.createElement("button"),btn_submit:document.createElement("button")};return a.container.classList.add("proj"),a.input.setAttribute("input","text"),a.input.setAttribute("placeholder","project title"),a.input.required=!0,"edit"===t&&(a.input.value=n.title),a.btn_back.classList.add("button"),a.btn_back.classList.add("hover"),a.btn_back.setAttribute("id","btn-back"),a.btn_back.setAttribute("type","button"),a.btn_back.textContent="back",a.btn_submit.classList.add("button"),a.btn_submit.classList.add("hover"),a.btn_submit.setAttribute("type","submit"),a.btn_submit.textContent=t,a.container.append(a.input,a.btn_back,a.btn_submit),a.btn_back.addEventListener("click",(()=>{r()})),a.container.addEventListener("input",(()=>{if(a.input.setCustomValidity(""),et.GetProjects().find((t=>t.title.toLowerCase()===a.input.value.toLowerCase()))){if("edit"!==t||n.title.toLowerCase()!=a.input.value.toLowerCase())return void a.input.setCustomValidity(" ");a.input.setCustomValidity("")}a.input.reportValidity()})),a.container.addEventListener("submit",(e=>{e.preventDefault(),"edit"===t?(n.title=a.input.value,r(),B(n)):(et.Add(a.input.value),r(),$())})),e.appendChild(a.container),a.input},a=(t,n,a)=>{for(;e.firstChild;)e.removeChild(e.firstChild);const o={container:document.createElement("form"),input:{title:document.createElement("input"),desc:document.createElement("textarea"),dueDate:document.createElement("input"),prio:document.createElement("select")},btn_back:document.createElement("button"),btn_submit:document.createElement("button")};o.input.title.setAttribute("input","text"),o.input.title.setAttribute("placeholder","task title"),o.input.title.required=!0,o.input.dueDate.setAttribute("type","date"),o.input.dueDate.required=!0,o.input.desc.setAttribute("input","textarea"),o.input.desc.setAttribute("placeholder","task description"),o.input.desc.required=!0,o.btn_back.classList.add("button"),o.btn_back.classList.add("hover"),o.btn_back.setAttribute("id","btn-back"),o.btn_back.setAttribute("type","button"),o.btn_back.textContent="back",o.btn_submit.classList.add("button"),o.btn_submit.classList.add("hover"),o.btn_submit.setAttribute("type","submit"),o.btn_submit.textContent=t;let i=["low","medium","high"];for(let t=0;t<i.length;t++){let e=document.createElement("option");e.textContent=i[t],o.input.prio.appendChild(e)}return o.container.append(o.input.title,o.input.desc,o.input.dueDate,o.input.prio,o.btn_back,o.btn_submit),o.btn_back.addEventListener("click",(()=>{r()})),"edit"===t&&(o.input.title.value=a.title,o.input.desc.value=a.desc,o.input.dueDate.value=a.dueDate,o.input.prio.value=a.prio),o.container.addEventListener("submit",(e=>{e.preventDefault(),"edit"===t?(a.title=o.input.title.value,a.desc=o.input.desc.value,a.dueDate=o.input.dueDate.value,a.prio=o.input.prio.value,r(),B(n)):n.AddTask(o.input.title.value,o.input.desc.value,o.input.dueDate.value,o.input.prio.value),r(),B(n)})),e.appendChild(o.container),o.input.title},r=()=>{t.style.display="none"};return{Open:(e,r,o)=>{let i;switch(e){case"create-proj":i=n("create");break;case"edit-proj":i=n("edit",r);break;case"create-task":i=a("create",r);break;case"edit-task":i=a("edit",r,o)}t.style.display="flex",i.focus()},Close:r}})();function U(){for(;R.firstChild;)R.removeChild(R.firstChild)}document.querySelectorAll(".sidebar button").forEach((t=>t.addEventListener("click",(()=>{switch(t.getAttribute("id")){case"btn-home":V();break;case"btn-projects":$()}}))));const V=()=>{if(document.querySelector("main")){U();let t={header:{container:document.createElement("div"),date:document.createElement("h1")},body:{container:document.createElement("div")}};t.header.date.textContent=x().date,t.header.container.classList.add("page-header"),t.header.container.append(t.header.date);let e={recent_projects:{container:document.createElement("div"),title:document.createElement("h1")},recent_tasks:{container:document.createElement("div"),title:document.createElement("h1")},tasks_todo:{container:document.createElement("div"),title:document.createElement("h1")}};e.recent_projects.title.textContent="recent projects.",e.recent_projects.container.classList.add("card"),e.recent_projects.container.classList.add("recent_projects"),e.recent_projects.container.append(e.recent_projects.title);let n=et.GetProjects().slice(-3);if(0!=n)for(let t=n.length-1;t>=0;t--){let a={container:document.createElement("div"),title:document.createElement("h2")};a.title.textContent=n[t].title,a.container.classList.add("box"),a.container.classList.add("hover"),a.container.appendChild(a.title),a.container.setAttribute("p_id",n[t].GetProjectID()),e.recent_projects.container.appendChild(a.container)}e.recent_projects.container.addEventListener("click",(t=>{let e=t.target.closest(".box");e&&B(et.GetProject(e.getAttribute("p_id")))})),e.recent_tasks.title.textContent="recent tasks.",e.recent_tasks.container.classList.add("card"),e.recent_tasks.container.classList.add("recent_tasks"),e.recent_tasks.container.append(e.recent_tasks.title);let a=et.RecentTasks();if(0!=a)for(let t=a.length-1;t>=0;t--){let n={container:document.createElement("div"),title:document.createElement("h2"),desc:document.createElement("p")};n.title.textContent=a[t].title,n.desc.textContent=a[t].desc,n.container.classList.add("box"),n.container.classList.add("hover"),n.container.append(n.title,n.desc),n.container.setAttribute("t_id",a[t].GetTaskID()),e.recent_tasks.container.appendChild(n.container)}e.tasks_todo.title.textContent="tasks todo.",e.tasks_todo.container.classList.add("card"),e.tasks_todo.container.classList.add("tasks_todo"),e.tasks_todo.container.append(e.tasks_todo.title);let r=et.GetUrgentTasks();if(0!=r)for(let t=0;t<r.length;t++){let n={container:document.createElement("div"),title:document.createElement("h2"),desc:document.createElement("p"),dueDate:document.createElement("p")};n.title.textContent=r[t].title,n.desc.textContent=r[t].desc;let o=J(r[t].dueDate,new Date);n.dueDate.textContent=o,n.dueDate.classList.add("dueDate"),n.container.classList.add("box"),n.container.classList.add("hover"),n.container.append(n.title,n.desc,n.dueDate),n.container.setAttribute("t_id",a[t].GetTaskID()),e.tasks_todo.container.appendChild(n.container)}t.body.container.classList.add("cardview"),t.body.container.classList.add("page-body"),t.body.container.append(e.tasks_todo.container,e.recent_tasks.container,e.recent_projects.container),R.append(t.header.container,t.body.container)}else console.error('Can\'t Find "main" Container')},$=()=>{if(document.querySelector("main")){U();const t={header:{container:document.createElement("div"),title:document.createElement("h1"),dropdownIcon:document.createElement("img"),addIcon:document.createElement("img")},body:document.createElement("div")};if(t.header.container.classList.add("page-header"),t.header.dropdownIcon.src=v,t.header.dropdownIcon.classList.add("svg-large"),t.header.dropdownIcon.addEventListener("click",(()=>{let t=document.querySelectorAll(".project"),e=document.querySelectorAll(".project.active");t.length===e.length?t.forEach((t=>{let e=t.querySelector(".tasksContainer");t.classList.remove("active"),e.style.display="none"})):t.forEach((t=>{let e=t.querySelector(".tasksContainer");t.classList.add("active"),e.style.display="flex"}))})),t.header.title.textContent="projects.",t.header.addIcon.src=g,t.header.addIcon.classList.add("svg-mid"),t.header.addIcon.addEventListener("click",(()=>{H.Open("create-proj")})),t.header.container.append(t.header.title,t.header.dropdownIcon,t.header.addIcon),R.appendChild(t.header.container),t.body.classList.add("page-body"),et.GetProjects()){let e=et.GetProjects();for(let n=0;n<e.length;n++){const a={container:document.createElement("div"),title:{container:document.createElement("div"),text:document.createElement("h2"),dropdownIcon:document.createElement("img")}};a.container.classList.add("project"),a.container.classList.add("box"),a.container.classList.add("hover"),a.container.setAttribute("p_id",e[n].GetProjectID()),a.title.container.classList.add("project_title"),a.title.text.classList.add("f_orange"),a.title.text.textContent=`${e[n].title} (${e[n].GetTasks().length})`,a.title.dropdownIcon.src=v,a.title.dropdownIcon.classList.add("svg-large"),a.title.container.append(a.title.text,a.title.dropdownIcon),a.container.appendChild(a.title.container),a.tasks=document.createElement("div"),a.tasks.classList.add("tasksContainer"),a.tasks.style.display="none";let r=e[n].GetTasks();for(let t=0;t<r.length;t++){let e=r[t];a.task={container:document.createElement("div"),description:{container:document.createElement("div"),title:document.createElement("h3"),text:document.createElement("p"),dueDate:document.createElement("p"),prio:document.createElement("p")}},a.task.container.classList.add("project_task"),a.task.container.setAttribute("t_id",e.GetTaskID()),e.complete&&a.task.description.container.classList.add("complete"),a.task.description.title.textContent=e.title,a.task.description.text.textContent=e.desc;let n=J(e.dueDate,new Date);switch(a.task.description.dueDate.textContent=n,a.task.description.prio.textContent=e.prio,a.task.description.prio.classList.add("prio"),e.prio){case"low":a.task.description.prio.classList.add("low");break;case"medium":a.task.description.prio.classList.add("medium");break;case"high":a.task.description.prio.classList.add("high")}a.task.description.container.append(a.task.description.title,a.task.description.text),a.task.container.append(a.task.description.container,a.task.description.dueDate,a.task.description.prio),a.tasks.appendChild(a.task.container)}a.container.appendChild(a.tasks),a.title.dropdownIcon.addEventListener("click",(t=>{t.stopPropagation(),a.container.classList.toggle("active"),a.container.classList.contains("active")?a.tasks.style.display="flex":a.tasks.style.display="none"})),a.container.addEventListener("click",(()=>{B(e[n])})),t.body.appendChild(a.container)}R.appendChild(t.body)}else console.warn("Projects Array is Null")}else console.error('Can\'t Find "main" Container')},B=t=>{U();let e={header:{container:document.createElement("div"),title:document.createElement("h1"),editIcon:document.createElement("img"),deleteIcon:document.createElement("img"),addIcon:document.createElement("img")},body:document.createElement("div")};e.header.title.textContent=t.title,e.header.title.classList.add("f_orange"),e.header.editIcon.src=k,e.header.editIcon.classList.add("svg-mid"),e.header.editIcon.addEventListener("click",(()=>{H.Open("edit-proj",t)})),e.header.deleteIcon.src=y,e.header.deleteIcon.classList.add("svg-mid"),e.header.deleteIcon.addEventListener("click",(()=>{et.Remove(t.GetProjectID()),$()})),e.header.addIcon.src=g,e.header.addIcon.classList.add("svg-mid"),e.header.addIcon.addEventListener("click",(()=>{H.Open("create-task",t)})),e.header.container.append(e.header.title,e.header.addIcon,e.header.editIcon,e.header.deleteIcon),e.header.container.classList.add("page-header"),e.body.classList.add("page-body");let n=t.GetTasks();if(0===n.length){let t=document.createElement("p");t.textContent="Can't see any todos, Create some tasks to get started",e.body.appendChild(t)}else for(let a=0;a<n.length;a++){let r={container:document.createElement("div"),text:{title:document.createElement("h2"),desc:document.createElement("p"),prio:document.createElement("p"),dueDate:document.createElement("p")},btns:{container:document.createElement("div"),btn_delete:document.createElement("img"),btn_edit:document.createElement("img")}};r.text.title.textContent=n[a].title,r.text.desc.textContent=n[a].desc,r.text.prio.textContent=n[a].prio,n[a].complete&&r.container.classList.add("complete");let o=J(n[a].dueDate,new Date);switch(r.text.dueDate.textContent=o,r.text.prio.classList.add("prio"),n[a].prio){case"low":r.text.prio.classList.add("low");break;case"medium":r.text.prio.classList.add("medium");break;case"high":r.text.prio.classList.add("high")}r.btns.btn_delete.src=y,r.btns.btn_delete.classList.add("svg-mid"),r.btns.btn_edit.src=k,r.btns.btn_edit.classList.add("svg-mid"),r.btns.btn_edit.classList.add("btn"),r.btns.btn_delete.classList.add("btn"),r.btns.btn_delete.addEventListener("click",(e=>{e.stopPropagation();let n=e.target.closest(".box");t.RemoveTask(n.getAttribute("t_id")),B(t)})),r.btns.btn_edit.addEventListener("click",(e=>{e.stopPropagation(),H.Open("edit-task",t,n[a])})),r.btns.container.classList.add("btns-container"),r.btns.container.append(r.btns.btn_edit,r.btns.btn_delete),r.container.append(r.text.title,r.text.desc,r.text.dueDate,r.text.prio,r.btns.container),r.container.classList.add("box"),r.container.classList.add("hover"),r.container.classList.add("task"),r.container.setAttribute("t_id",n[a].GetTaskID()),e.body.appendChild(r.container)}e.body.addEventListener("click",(e=>{let n=e.target.closest(".task");if(n){const e=t.GetTask(n.getAttribute("t_id"));e.complete=!e.complete,B(t)}})),R.append(e.header.container,e.body)};function Q(t,e){return+F(t)>+F(e)}const K=()=>{const t=localStorage.getItem("projects_data"),e=JSON.parse(t);for(let t=0;t<e.length;t++){let n=e[t].title;et.Add(n);let a=e[t].tasks.length;for(let n=0;n<a;n++){let a=e[t].tasks[n].task_title,r=e[t].tasks[n].desc,o=e[t].tasks[n].dueDate,i=e[t].tasks[n].prio;et.GetProjects()[t].AddTask(a,r,o,i)}}},Z=()=>{localStorage.setItem("projects_data",JSON.stringify(et))},tt=()=>!!localStorage.getItem("projects_data");window.addEventListener("beforeunload",(()=>{Z()})),document.getElementById("btn_darkMode").addEventListener("click",(t=>{document.body.classList.toggle("dark"),document.body.classList.contains("dark")?t.target.textContent="light mode.":t.target.textContent="dark mode."}));const et=(()=>{let t=0,e=0;const n=[];return{GetProject:t=>n.find((e=>e.GetProjectID()===Number(t))),GetProjects:()=>n,Add:t=>{n.findIndex((e=>e.title===t))>=0?console.error(`Project ${t} already exists`):n.push(function(t){const e=et.CreateProjectID(),n=[];return{title:t,AddTask:(t,e,a,r)=>n.push(function(t,e,n,a){const r=et.CreateTaskID(),o=x().datewTime;return{title:t,desc:e,dueDate:n,prio:a,GetDateCreated:()=>o,GetTaskID:()=>r}}(t,e,a,r)),GetTasks:()=>n,RemoveTask:t=>{let e=n.findIndex((e=>e.GetTaskID()===Number(t)));e>=0?n.splice(e,1):console.error(`Task ID ${t} doesn't exist`)},GetTask:t=>n.find((e=>e.GetTaskID()===Number(t))),GetProjectID:()=>e}}(t))},Remove:t=>{let e=n.findIndex((e=>e.GetProjectID()===Number(t)));e>=0?n.splice(e,1):console.error(`Project ID ${t} doesn't exist`)},RecentTasks:()=>{let t=[];return n.forEach((e=>{e.GetTasks().forEach((e=>{if(t.length<3)t.push(e);else{let n=t[0];e.complete||Q(e.GetDateCreated(),n.GetDateCreated())&&(t.push(e),t.sort(((t,e)=>t.GetDateCreated().getTime()-e.GetDateCreated().getTime())),t.shift())}}))})),t},CreateProjectID:()=>(t++,t),CreateTaskID:()=>(e++,e),GetUrgentTasks:()=>{let t=[];return n.forEach((e=>{e.GetTasks().forEach((e=>{if(t.length<3)t.push(e);else{let n=t[0];e.complete||Q(n.dueDate,e.dueDate)&&(t.push(e),t.sort(((t,e)=>t.dueDate-e.dueDate)),t.shift())}}))})),t},toJSON:()=>n.map((t=>({id:t.GetProjectID(),title:t.title,tasks:t.GetTasks().map((t=>({id:t.GetTaskID(),task_title:t.title,desc:t.desc,dueDate:t.dueDate,prio:t.prio})))})))}})();et.GetProjects(),tt()&&K(),V()})();
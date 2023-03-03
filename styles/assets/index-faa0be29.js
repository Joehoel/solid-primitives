(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const d={};function K(e){d.context=e}const Q=(e,t)=>e===t,P={equals:Q};let F=$;const y=1,x=2,H={owned:null,cleanups:null,context:null,owner:null};var u=null;let m=null,f=null,c=null,g=null,B=0;function V(e,t){const s=f,n=u,i=e.length===0,o=i?H:{owned:null,cleanups:null,context:null,owner:t===void 0?n:t},r=i?e:()=>e(()=>E(()=>T(o)));u=o,f=null;try{return S(r,!0)}finally{f=s,u=n}}function W(e,t){t=t?Object.assign({},P,t):P;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(i=i(s.value)),I(s,i));return[Z.bind(s),n]}function L(e,t,s){const n=M(e,t,!1,y);N(n)}function J(e,t,s){F=te;const n=M(e,t,!1,y);n.user=!0,g?g.push(n):N(n)}function E(e){if(f===null)return e();const t=f;f=null;try{return e()}finally{f=t}}function X(e){J(()=>E(e))}function Y(e){return u===null||(u.cleanups===null?u.cleanups=[e]:u.cleanups.push(e)),e}function Z(){const e=m;if(this.sources&&(this.state||e))if(this.state===y||e)N(this);else{const t=c;c=null,S(()=>A(this),!1),c=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function I(e,t,s){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=m&&m.running;r&&m.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?c.push(o):g.push(o),o.observers&&j(o)),r||(o.state=y)}if(c.length>1e6)throw c=[],new Error},!1)),t}function N(e){if(!e.fn)return;T(e);const t=u,s=f,n=B;f=u=e,k(e,e.value,n),f=s,u=t}function k(e,t,s){let n;try{n=e.fn(t)}catch(i){e.pure&&(e.state=y,e.owned&&e.owned.forEach(T),e.owned=null),D(i)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?I(e,n):e.value=n,e.updatedAt=s)}function M(e,t,s,n=y,i){const o={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:s};return u===null||u!==H&&(u.owned?u.owned.push(o):u.owned=[o]),o}function C(e){const t=m;if(e.state===0||t)return;if(e.state===x||t)return A(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)(e.state||t)&&s.push(e);for(let n=s.length-1;n>=0;n--)if(e=s[n],e.state===y||t)N(e);else if(e.state===x||t){const i=c;c=null,S(()=>A(e,s[0]),!1),c=i}}function S(e,t){if(c)return e();let s=!1;t||(c=[]),g?s=!0:g=[],B++;try{const n=e();return ee(s),n}catch(n){s||(g=null),c=null,D(n)}}function ee(e){if(c&&($(c),c=null),e)return;const t=g;g=null,t.length&&S(()=>F(t),!1)}function $(e){for(let t=0;t<e.length;t++)C(e[t])}function te(e){let t,s=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[s++]=n:C(n)}for(d.context&&K(),t=0;t<s;t++)C(e[t])}function A(e,t){const s=m;e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];i.sources&&(i.state===y||s?i!==t&&C(i):(i.state===x||s)&&A(i,t))}}function j(e){const t=m;for(let s=0;s<e.observers.length;s+=1){const n=e.observers[s];(!n.state||t)&&(n.state=x,n.pure?c.push(n):g.push(n),n.observers&&j(n))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),i=s.observers;if(i&&i.length){const o=i.pop(),r=s.observerSlots.pop();n<i.length&&(o.sourceSlots[r]=n,i[n]=o,s.observerSlots[n]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function se(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function D(e){throw e=se(e),e}function ne(e,t){return E(()=>e(t||{}))}function ie(e,t,s){let n=s.length,i=t.length,o=n,r=0,l=0,h=t[i-1].nextSibling,a=null;for(;r<i||l<o;){if(t[r]===s[l]){r++,l++;continue}for(;t[i-1]===s[o-1];)i--,o--;if(i===r){const p=o<n?l?s[l-1].nextSibling:s[o-l]:h;for(;l<o;)e.insertBefore(s[l++],p)}else if(o===l)for(;r<i;)(!a||!a.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[o-1]&&s[l]===t[i-1]){const p=t[--i].nextSibling;e.insertBefore(s[l++],t[r++].nextSibling),e.insertBefore(s[--o],p),t[i]=s[o]}else{if(!a){a=new Map;let w=l;for(;w<o;)a.set(s[w],w++)}const p=a.get(t[r]);if(p!=null)if(l<p&&p<o){let w=r,O=1,U;for(;++w<i&&w<o&&!((U=a.get(t[w]))==null||U!==p+O);)O++;if(O>p-l){const G=t[r];for(;l<p;)e.insertBefore(s[l++],G)}else e.replaceChild(s[l++],t[r++])}else r++;else t[r++].remove()}}}function le(e,t,s,n={}){let i;return V(o=>{i=o,t===document?e():q(t,e(),t.firstChild?null:void 0,s)},n.owner),()=>{i(),t.textContent=""}}function oe(e,t,s){const n=document.createElement("template");n.innerHTML=e;let i=n.content.firstChild;return s&&(i=i.firstChild),i}function q(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return v(e,t,n,s);L(i=>v(e,t(),i,s),n)}function v(e,t,s,n,i){for(d.context&&!s&&(s=[...e.childNodes]);typeof s=="function";)s=s();if(t===s)return s;const o=typeof t,r=n!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,o==="string"||o==="number"){if(d.context)return s;if(o==="number"&&(t=t.toString()),r){let l=s[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),s=b(e,s,n,l)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||o==="boolean"){if(d.context)return s;s=b(e,s,n)}else{if(o==="function")return L(()=>{let l=t();for(;typeof l=="function";)l=l();s=v(e,l,s,n)}),()=>s;if(Array.isArray(t)){const l=[],h=s&&Array.isArray(s);if(R(l,t,s,i))return L(()=>s=v(e,l,s,n,!0)),()=>s;if(d.context){if(!l.length)return s;for(let a=0;a<l.length;a++)if(l[a].parentNode)return s=l}if(l.length===0){if(s=b(e,s,n),r)return s}else h?s.length===0?_(e,l,n):ie(e,s,l):(s&&b(e),_(e,l));s=l}else if(t instanceof Node){if(d.context&&t.parentNode)return s=r?[t]:t;if(Array.isArray(s)){if(r)return s=b(e,s,n,t);b(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function R(e,t,s,n){let i=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],h=s&&s[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=R(e,l,h)||i;else if(typeof l=="function")if(n){for(;typeof l=="function";)l=l();i=R(e,Array.isArray(l)?l:[l],Array.isArray(h)?h:[h])||i}else e.push(l),i=!0;else{const a=String(l);h&&h.nodeType===3&&h.data===a?e.push(h):e.push(document.createTextNode(a))}}return i}function _(e,t,s=null){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],s)}function b(e,t,s,n){if(s===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const h=l.parentNode===e;!o&&!r?h?e.replaceChild(i,l):e.insertBefore(i,s):h&&l.remove()}else o=!0}}else e.insertBefore(i,s);return[i]}function re(e,t,s){const[n,i]=W(d.context?e:t(),s);return d.context&&X(()=>i(()=>t())),[n,i]}let fe=16;const ue={border:"0",padding:"0",visibility:"hidden",position:"absolute",top:"-9999px",left:"-9999px"},z=()=>parseFloat(getComputedStyle(document.documentElement).fontSize);function ce(){const[e,t]=re(fe,z),s=document.createElement("div");Object.assign(s.style,ue,{width:"1rem"}),document.body.appendChild(s);let n=!0;const i=new ResizeObserver(()=>{if(n)return n=!1;t(z())});return i.observe(s),Y(()=>{s.remove(),i.disconnect()}),e}const he=oe('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-v"><h4>Rem size: </h4></div></div>'),ae=()=>{const e=ce();return(()=>{const t=he.cloneNode(!0),s=t.firstChild,n=s.firstChild;return n.firstChild,q(n,e,null),t})()};le(()=>ne(ae,{}),document.getElementById("root"));

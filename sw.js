if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const l=e=>i(e,r),d={module:{uri:r},exports:t,require:l};s[r]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BSnUbO-i.css",revision:null},{url:"assets/index-eyN6_p9H.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"2d5bf27f153e9f6c8b440b79442356fa"},{url:"logo192.png",revision:"b5d1e97cb00fc3bc8e673bff291d3ae6"},{url:"logo512.png",revision:"54783ab98d7e1229cc69ca2b0c54a34e"},{url:"manifest.webmanifest",revision:"c40d7e95e7fe4b507f618dd33ea7a2db"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

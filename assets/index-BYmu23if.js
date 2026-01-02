(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const v=`/**\r
 * Hey there! 👋\r
 * I’m Denis, a MES Solution Engineer\r
 * at Nobia.\r
 *\r
 * A quick shoutout to Samuel Reed for the inspiration behind this project!\r
 * \r
 * Let’s roll up our sleeves and make this drag page \r
 * something fun and interactive. Shall we?\r
 */\r
\r
/** \r
 * Let's make everything transition smoothly. It's all in the details! \r
 */\r
\r
* {\r
  transition: all 1s;\r
}\r
\r
/**\r
 * Time to set the stage.\r
 * We'll start with a sleek, dark background.\r
 * Something easy on the eyes.\r
 */\r
\r
html, body {\r
  margin: 0;\r
  padding: 0;\r
  width: 100vw;\r
  height: 100vh;\r
  background-color: #1F2833;\r
}\r
\r
/**\r
 * Oops! Looks like we need to fix the text color\r
 * so it doesn't blend into the background. One sec!\r
 */\r
\r
pre, a {\r
  color: white;\r
}\r
\r
/**\r
 * There we go! Much better, right?\r
 * While we're at it, let's sprinkle in some colors\r
 * to make the code pop.\r
 */\r
\r
.selector { \r
  color: #E69F0F; \r
}\r
.selector .key { \r
  color: #64D5EA; \r
}\r
.key { \r
  color: #64D5EA; \r
}\r
.value { \r
  color: #BE84F2; \r
}\r
.value.px { \r
  color: #1b9930; \r
}\r
\r
/**\r
 * Perfect! Now, let’s tidy things up a bit.\r
 * Moving all this code into its own section will keep it neat.\r
 */\r
\r
.main-page-parent {\r
  display: flex;\r
  flex-direction: row;\r
  width: 100vw;\r
  height: 100vh;\r
  box-sizing: border-box;\r
  padding: 3%;\r
  gap: 1vh;\r
}\r
\r
/**\r
 * Brace yourself for some bouncing around!\r
 * We're adjusting things until we hit the sweet spot.\r
 * Don’t get dizzy. 😅\r
 */\r
\r
.main-page-parent {\r
  justify-content: center;\r
}\r
\r
/* \r
 * Aligning and organizing the content. \r
 * A good foundation makes everything better! \r
 */\r
\r
.main-page-child {\r
  display: flex;\r
  flex: 1;\r
  height: 100%;\r
  flex-direction: column;\r
  box-sizing: border-box;\r
  align-items: center;\r
  justify-content: start;\r
  gap: 1vh;\r
}\r
\r
/**\r
 * Almost there, I promise! Hang tight.\r
 */\r
\r
.scroll-box {\r
  padding-left: 2%;\r
  padding-right: 20%;\r
  padding-top: 2%;\r
  background-color: #0B0C10;\r
  display: flex;\r
  flex: 1;\r
  width: 100%;\r
  flex-direction: column;\r
  box-sizing: border-box;\r
  overflow-y: auto;\r
}\r
\r
/**\r
 * And.. voila!\r
 * Let's make the text feel cozy and readable.\r
 */\r
\r
.scroll-box {\r
  font-family: monospace;\r
  font-size: clamp(0.5rem, 0.9rem, 1.8rem);\r
}\r
.comment { \r
  color: #857F6B; \r
  font-style: italic; \r
}\r
\r
/**\r
 * There we go, looking more organized already.\r
 * Time to add some flair with borders and shadows.\r
 * A little magic dust for the design!\r
 */\r
 \r
.scroll-box {\r
  border: 1px solid #45A29E;\r
  scrollbar-color: #45A29E #1F2833;\r
  box-shadow: 8px 8px 5px 0px rgba(0, 0, 0, 0.2);\r
}\r
\r
/**\r
 * Much better, right?\r
 * Now let's deliver the content you came for.\r
 */`,$=`\r
/**\r
 * Let's crank up the font size a bit! \r
 * Bigger text = bigger impact. 💪\r
 */\r
\r
 .title {\r
  font-size: clamp(0.6rem, 2rem, 4rem);\r
  font-weight: bold;\r
}\r
\r
/**\r
 * Hmm, what about some emphasis?\r
 * An underline should do the trick!\r
 */\r
\r
.sub-title {\r
  font-size: clamp(0.5rem, 1.4rem, 3rem);\r
  font-weight: bold;\r
  text-decoration: underline;\r
}\r
\r
/**\r
 * Can't have contact info hiding in plain sight.\r
 * Let's make it stand out a bit more!\r
 */\r
\r
.content {\r
  font-size: clamp(0.4rem, 1.2rem, 2rem);\r
}\r
\r
/**\r
 * Ping me, I promise not to timeout! Get it? Ha. Ha.\r
 * Alright, time for the fun part!\r
 * Here's a sneak peek of what I've been working on.\r
 */`,L=`\r
/**\r
 * I know, it's not much to show yet. 😅\r
 * But hey, that's just the start—plenty more to come soon!\r
 *\r
 * I've included videos showcasing the applications—feel free to \r
 * click the links if you'd like to check them out! 😊\r
 *\r
 * For now, let's add a bit of polish to the links.\r
 */\r
 \r
 .link {\r
    font-size: clamp(0.4rem, 1.2rem, 2rem);\r
  }\r
  \r
/**\r
* And... we're done!\r
* Thank you so much for stopping by. \r
* I hope you enjoyed this little tour as much as I did creating it.\r
* Until next time—stay awesome! ✌️\r
*/\r
\r
`,B=`Denis Ureke\r
\r
Contact\r
\r
urekedenis at gmail.com\r
Denis Ureke at LinkeIn\r
DenisUreke at GitHub\r
\r
`,C=`Portfolio\r
\r
Some of my work\r
\r
https://github.com/DenisUreke/IOS-LinkPalm-final\r
https://github.com/DenisUreke/Andriod-BattleShip-Multiplayer-Game\r
https://github.com/DenisUreke/CSS-animations-website\r
https://github.com/DenisUreke/Tetris\r
https://github.com/DenisUreke/Python-Game`,x=document.getElementById("contact-content"),A=document.getElementById("style-tag"),u=document.getElementById("code-content"),I=document.getElementById("portfolio-content");let l="";async function y(e,n,s){let r="";const t=h(n);console.log(t);for(let o=0;o<t.length;o++){const a=t[o];r=S(r,a,s),e.innerHTML=r,await g(20)}if(l.trim()!==""){const o=l.trim();s===0?r=w(r,o):s===1&&(r=k(r,o)),e.innerHTML=r,l=""}}function S(e,n,s){if(l+=n,n===`
`){const r=l.trim();s===0?e=w(e,r):s===1&&(e=k(e,r)),l=""}else e+=n;return e}let i=0;function w(e,n){return e.includes(n)?i===0?(i+=1,e.replace(n,`<span class="title">${n}

</span>`)):i===1?(i+=1,e.replace(n,`<span class="sub-title">${n}

</span>`)):i===2||i===3?(i++,e.replace(n,`<span class="content">${n}
</span>`)):i===4?(i++,e.replace(n,`<span class="content">${n}

</span>`)):e.replace(n,`<span class="content">${n}</span>`):e+`<span>${n}</span><br>`}let d=0;function k(e,n){if(e.includes(n)){if(d===0)return d+=1,e.replace(n,`<span class="title">${n}

</span>`);if(d===1)return d+=1,e.replace(n,`<span class="sub-title">${n}

</span>`);if(d>=2){let s=z(n);return e.replace(n,`<span class="link"><a href="${n.trim()}" target="_blank">${s}</a></span>
`)}return e.replace(n,`<span class="content">${n}</span>`)}return e+`<span>${n}</span><br>`}function z(e){let n="",s=0;for(let r=e.length-1;r>=0;r-=1)if(e[r]==="/"){s=r+1;break}for(let r=s;r<=e.length-1;r++)n+=e[r];return n}let c="";async function f(e){let n="";for(let s=0;s<e.length;s++){const r=e[s];c=O(c,r),c.slice(-8).includes("/</span>")&&(c+="<br>"),r==="}"&&(c+="<br>");const o=c.slice(-2),a=/([a-zA-Z]\.|\.{2})/;u.innerHTML=c,(a.test(o)||r==="?"||r==="!")&&await g(1200),(r==="}"||r===",")&&await g(500),u.scrollTop=u.scrollHeight,window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),n+=r,(r===";"||r==="}")&&(A.textContent+=n,n=""),await g(20)}}let p=!1;const E=/(\/\*(?:[^](?!\/\*))*\*)$/,D=/([a-zA-Z- ^\n]*)$/,F=/([^:]*)$/,H=/(.*)$/,P=/\dp/,U=/p$/;function O(e,n){return p&&n!=="/"?e+=n:n==="/"&&p===!1?(p=!0,e+=n):n==="/"&&e.slice(-1)==="*"&&p===!0?(p=!1,e=e.replace(E,'<span class="comment">$1/</span>')):n===":"?e=e.replace(D,'<span class="key">$1</span>:'):n===";"?e=e.replace(F,'<span class="value">$1</span>;'):n==="{"?e=e.replace(H,'<span class="selector">$1</span>{'):n==="x"&&P.test(e.slice(-2))?e=e.replace(U,'<span class="value px">px</span>'):e+=n,e}function h(e){return e.replace(/[\r]/g,"").replace(/^\s+/gm,"").replace(/\s+$/gm,"").replace(/\n+/g,`
`).trim()}let m=!1;const b=document.getElementById("toggleButton");b.addEventListener("click",()=>{m=!m,b.innerText=m?"Calm Down!":"Hurry Up!"});function M(){document.getElementById("toggleButton").classList.add("hidden")}function g(e){return m?new Promise(n=>setTimeout(n,0)):new Promise(n=>setTimeout(n,e))}async function R(e,n,s){console.log("Starting with cleanedone:",e),await f(e),console.log("Finished cleanedone, moving to contact"),await y(x,B,0),console.log("Finished contact, starting cleanedtwo:",n),await f(n),await y(I,C,1),await f(G),M()}const j=h(v),N=h($),G=h(L);R(j,N);

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4272:(e,r,n)=>{Promise.resolve().then(n.bind(n,8696))},8696:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>k});var t=n(7437),l=n(2265),i=n(2544),s=n.n(i);function a(){return(0,t.jsx)("div",{className:"flex justify-center h-full",children:(0,t.jsx)("div",{className:"flex relative justify-center ".concat(s().shape)})})}function u(){return(0,t.jsx)("div",{className:"flex h-full justify-center",children:(0,t.jsx)("div",{className:"aspect-[2/3] rounded-[50%] shadow-[inset_0_0_0_var(--shape-width)_currentColor]"})})}let c=function(){for(var e,r,n=0,t="",l=arguments.length;n<l;n++)(e=arguments[n])&&(r=function e(r){var n,t,l="";if("string"==typeof r||"number"==typeof r)l+=r;else if("object"==typeof r){if(Array.isArray(r)){var i=r.length;for(n=0;n<i;n++)r[n]&&(t=e(r[n]))&&(l&&(l+=" "),l+=t)}else for(t in r)r[t]&&(l&&(l+=" "),l+=t)}return l}(e))&&(t&&(t+=" "),t+=r);return t};function o(e){let{cell:r,isFaded:n,handleClick:l}=e;return(0,t.jsx)("div",{className:c("grid-cell flex flex-col aspect-square p-5 cursor-pointer transition hover:bg-gray-400/10",{"opacity-10":n}),onClick:l,children:null!==r&&(r?(0,t.jsx)(a,{}):(0,t.jsx)(u,{}))})}var d=n(7517),f=n.n(d);function h(e){let{board:r,winner:n,isGameOver:l,handleClick:i}=e,s=r.map((e,r)=>{var s;let a=l&&!(null===(s=n.combination)||void 0===s?void 0:s.includes(r));return(0,t.jsx)(o,{isFaded:a,cell:e,handleClick:()=>i(r)},r)});return(0,t.jsx)("div",{className:"w-full aspect-square relative",children:(0,t.jsx)("div",{className:"\n                    ".concat(f().grid,"\n                    grid grid-cols-[repeat(3,1fr)] gap-px w-full\n                "),children:s})})}function x(){return{player:null,combination:null}}function p(e){let r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let n=0;n<r.length;n++){let[t,l,i]=r[n];if(null!==e[t]&&e[t]===e[l]&&e[t]===e[i])return{player:e[t],combination:r[n]}}return x()}function m(e,r){return null!==e.player||!v(r)}function v(e){return e.some(e=>null===e)}function j(){return Array(9).fill(null)}let g=["hard","medium","easy"],y={hard:1,medium:.7,easy:.5};function b(e){let{score:r,isActive:n,children:l}=e;return(0,t.jsxs)("div",{className:c("grid grid-cols-[repeat(2,1fr)] p-2 h-full rounded-xl items-center",{"shadow-[0_0_10px_0_currentColor]":n}),children:[l,(0,t.jsx)("div",{className:"text-5xl text-center",children:r})]})}function _(e){let{difficultyLevel:r,handleChange:n}=e;return(0,t.jsx)("fieldset",{children:g.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:e,name:e,value:e,checked:r===e,onChange:()=>n(e)}),(0,t.jsx)("label",{className:"p-2",htmlFor:e,children:e})]},e))})}function w(e){let{turn:r,score:n,difficultyLevel:l,handleChange:i}=e;return(0,t.jsxs)("div",{className:"grid w-full p-5 grid-cols-[repeat(3,1fr)] gap-x-4",children:[(0,t.jsx)(b,{score:n[1],isActive:1===r,children:(0,t.jsx)(a,{})}),(0,t.jsx)(b,{score:n[0],isActive:0===r,children:(0,t.jsx)(u,{})}),(0,t.jsx)(_,{difficultyLevel:l,handleChange:i})]})}let N=function(e,r){let n=(0,l.useRef)(e);(0,l.useEffect)(()=>{n.current=e},[e]),(0,l.useEffect)(()=>{if(null===r)return;let e=setInterval(()=>n.current(),r);return()=>clearInterval(e)},[r])};function C(e,r){switch(r.type){case"move":let n=e.board.map((n,t)=>t===r.payload.index?e.turn:n),t=p(n),l=[...e.score];return null!==t.player&&m(t,n)&&(l[t.player]+=1),{...e,board:n,turn:1===e.turn?0:1,winner:t,score:l};case"restart":return{...e,board:j(),winner:x()}}}function k(){let[e,r]=(0,l.useReducer)(C,void 0,()=>({turn:1,score:[0,0],board:j(),winner:x()})),[n,i]=(0,l.useState)(!1),[s,a]=(0,l.useState)("hard"),u=m(e.winner,e.board),o=(0,l.useCallback)(e=>{r({type:"move",payload:{index:e}})},[]),d=(0,l.useCallback)((e,r)=>{i(!0);let n=function(e,r){let n,t=1e3,l=-1;for(let i=0;i<e.length;i++)if(null===e[i]){void 0===n&&(n=i),e[i]=0;let s=function e(r,n,t){let l=function(e){switch(p(e).player){case 0:return -10;case 1:return 10;default:return 0}}(r);if(10===l||-10===l)return l;if(!v(r))return 0;if(t){let l=-1e3;for(let i=0;i<r.length;i++)null===r[i]&&(r[i]=1,l=Math.max(l,e(r,n,!t)),r[i]=null);return l}{let l=1e3;for(let i=0;i<r.length;i++)null===r[i]&&(r[i]=0,l=Math.min(l,e(r,n,!t)),r[i]=null);return l}}(e,0,!0);e[i]=null,s<t&&Math.random()<y[r]&&(t=s,l=i)}return -1!==l?l:null!=n?n:l}(e.board,r);-1!==n&&setTimeout(()=>{o(n),i(!1)},500)},[o]),f=(0,l.useCallback)((e,r,n)=>{0!==e.turn||r||m(e.winner,e.board)||d(e,n)},[d]);return N(()=>{f(e,n,s)},150),(0,t.jsxs)("div",{className:c("grid justify-center",{"_game-over":u}),children:[(0,t.jsx)(w,{turn:e.turn,score:e.score,difficultyLevel:s,handleChange:function(e){a(e)}}),(0,t.jsxs)("div",{className:"relative p-5 w-[min(100vw,calc(100vh-150px))] ",children:[(0,t.jsx)(h,{board:e.board,winner:e.winner,isGameOver:u,handleClick:function(r){1===e.turn&&null===e.board[r]&&o(r)}}),u&&(0,t.jsx)("div",{className:"absolute inset-0 flex justify-center items-center bg-neutral-950/60",children:(0,t.jsx)("button",{type:"button",className:"p-3 bg-indigo-500 text-white text-3xl font-semibold rounded-md shadow focus:outline-none",onClick:function(){r({type:"restart"})},children:"Restart"})})]})]})}},2544:e=>{e.exports={shape:"cross_shape__BgpVA"}},7517:e=>{e.exports={grid:"grid_grid__GYCmg"}}},e=>{var r=r=>e(e.s=r);e.O(0,[238,130,215,744],()=>r(4272)),_N_E=e.O()}]);
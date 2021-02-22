(this["webpackJsonppomo-timer"]=this["webpackJsonppomo-timer"]||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var r,i,c,o,a,s,b,l,u,j,f,d,h=t(0),m=t.n(h),O=t(9),x=t.n(O),k=t(2),p=t(3),g=Object(p.a)(r||(r=Object(k.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n  }\n  html, body, #root {\n    max-height: 100vh;\n    max-width: 100vw;\n    width: 100%;\n    height: 100%;\n  }\n  *, button, input {\n    border: 0;\n    background: none;\n    font-family: 'Montserrat', sans-serif;\n  }\n  html {\n    background: var(--background);\n  }\n  :root {\n    --primary: #403D39;\n    --background: #ff495c;\n    --white: #ffffff;\n  }\n"]))),v=t(4),w=(p.b.svg(i||(i=Object(k.a)(["\n  display: block;\n  margin: 20px auto;\n  max-width: 100%;\n"]))),p.b.svg(c||(c=Object(k.a)(["\n  display: block;\n  margin: 20px auto;\n  max-width: 100%;\n"])))),y=p.b.circle(o||(o=Object(k.a)(["\n  fill: none;\n"]))),S=p.b.circle(a||(a=Object(k.a)(["\n  fill: none;\n  transition: stroke-dashoffset 850ms ease-in-out;\n"]))),z=p.b.text(s||(s=Object(k.a)(["\n  fill: var(--white);\n  text-anchor: middle;\n  font-size: 3rem;\n"]))),E=p.b.text(b||(b=Object(k.a)(["\n  fill: var(--white);\n  text-anchor: middle;\n  margin-top: 100px;\n  font-size: 0.875rem;\n"]))),T=t(1),M=function(n){var e=n.size,t=n.progress,r=n.strokeWidth,i=n.circleOneStroke,c=n.circleTwoStroke,o=n.time,a=n.label,s=Object(h.useState)(0),b=Object(v.a)(s,2),l=b[0],u=b[1],j=e/2,f=e/2-r/2,d=2*Math.PI*f;return Object(h.useEffect)((function(){u((100-t)/100*d)}),[u,d,t,l]),Object(T.jsxs)(w,{width:e,height:e,children:[Object(T.jsx)(y,{stroke:i,cx:j,cy:j,r:f,strokeWidth:r}),Object(T.jsx)(S,{stroke:c,cx:j,cy:j,r:f,strokeDasharray:d,strokeDashoffset:l,strokeWidth:r}),Object(T.jsx)(z,{x:j,y:j,children:o}),Object(T.jsx)(E,{x:j,y:j+30,children:a})]})},I=[{title:"pomodoro",time:1500,label:"Time to work!"},{title:"short break",time:300,label:"Take a break!"},{title:"long break",time:900,label:"Take a break!"}],C=function(n){var e=Math.floor(n/60),t=Math.floor(n%60);return"".concat(e<9?"0".concat(e):e,":").concat(t<9?"0".concat(t):t)},R=p.b.div(l||(l=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n\n  height: 100%;\n\n  padding: 20px 0;\n"]))),W=p.b.span(u||(u=Object(k.a)(["\n  font-size: 2.25rem;\n  color: var(--white);\n"]))),D=p.b.div(j||(j=Object(k.a)(["\n  display: flex;\n"]))),A=p.b.button(f||(f=Object(k.a)(["\n  outline: none;\n\n  display: ",";\n\n  transition: opacity 300ms;\n\n  background: none;\n  font-size: 2.25rem;\n  color: var(--white);\n\n  margin: 0 10px;\n\n  cursor: pointer;\n\n  &:hover {\n    opacity: 50%;\n  }\n\n  &:active {\n    opacity: 30%;\n  }\n"])),(function(n){return n.visible?"block":"none"})),J=p.b.button(d||(d=Object(k.a)(["\n  outline: none;\n  background: rgba(255, 255, 255, ",");\n  height: 2.5rem;\n  width: 8.75rem;\n  border-radius: 0.25rem;\n  margin: 0 5px;\n\n  color: var(--primary);\n  font-size: 0.875rem;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.3);\n  }\n\n  cursor: pointer;\n  transition: background 200ms ease-in-out;\n"])),(function(n){return n.active?.8:.5})),P=function(){var n=Object(h.useState)(I[0].time),e=Object(v.a)(n,2),t=e[0],r=e[1],i=Object(h.useState)(t),c=Object(v.a)(i,2),o=c[0],a=c[1],s=Object(h.useState)(!1),b=Object(v.a)(s,2),l=(b[0],b[1],Object(h.useState)(!1)),u=Object(v.a)(l,2),j=u[0],f=u[1],d=Object(h.useState)(!1),m=Object(v.a)(d,2),O=m[0],x=m[1],k=Object(h.useState)(0),p=Object(v.a)(k,2),g=p[0],w=p[1],y=Object(h.useRef)({}),S=Math.floor(o)/t*100;function z(){x(!1),f(!1),a(t),clearInterval(y.current)}return Object(h.useEffect)((function(){o<0&&(f(!1),x(!1),a(t),z())}),[o,a,j,f]),Object(T.jsxs)(R,{children:[Object(T.jsxs)(W,{children:["pomo",Object(T.jsx)("strong",{children:"timer"})]}),Object(T.jsx)(D,{children:I.map((function(n,e){return Object(T.jsx)(J,{active:g===e,onClick:function(){return function(n){r(I[n].time),a(I[n].time),w(n),x(!1),f(!1),clearInterval(y.current)}(e)},children:n.title},e)}))}),Object(T.jsx)(M,{progress:S,label:I[g].label,time:C(o),size:280,strokeWidth:6,circleOneStroke:"rgba(255,255,255,0.3)",circleTwoStroke:"#ffffff"}),Object(T.jsxs)(D,{children:[Object(T.jsx)(A,{visible:!j,onClick:function(){return function(){f(!0),x(!1);var n=setInterval((function(){a((function(n){return n-.01}))}),10);y.current=n}()},children:O?"RESUME":"START"}),Object(T.jsx)(A,{visible:O,onClick:function(){return z()},children:"RESET"}),Object(T.jsx)(A,{visible:j,onClick:function(){return clearInterval(y.current),f(!1),void x(!0)},children:"PAUSE"})]})]})};x.a.render(Object(T.jsxs)(m.a.StrictMode,{children:[Object(T.jsx)(g,{}),Object(T.jsx)(P,{})]}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6ee3fb5a.chunk.js.map
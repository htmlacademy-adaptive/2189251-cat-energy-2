var e=document.querySelector(".header__nav"),c=document.querySelector(".header__nav-toggle");e.classList.remove("header__nav--nojs");c.addEventListener("click",()=>{e.classList.contains("header__nav--closed")?(e.classList.remove("header__nav--closed"),e.classList.add("header__nav--opened")):(e.classList.add("header__nav--closed"),e.classList.remove("header__nav--opened"))});var s=document.getElementById("slider-line"),r=document.querySelector(".example__image--before"),a=!1;s.addEventListener("mousedown",()=>{a=!0,document.body.style.cursor="ew-resize"});document.addEventListener("mousemove",d=>{if(!a)return;let n=s.parentNode.getBoundingClientRect(),t=d.clientX-n.left;t=Math.max(0,Math.min(t,n.width)),s.style.left=`${t}px`;let o=t/n.width*100;r.style.clipPath=`inset(0 ${100-o}% 0 0)`});document.addEventListener("mouseup",()=>{a=!1,document.body.style.cursor="default"});

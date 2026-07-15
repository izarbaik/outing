const swiper = new Swiper(".swiper",{

direction:"vertical",

effect:"creative",

grabCursor:true,

mousewheel:true,

speed:900,

creativeEffect:{

prev:{

translate:[0,"-100%",-1],

opacity:0.2,

scale:0.8

},

next:{

translate:[0,"100%",0],

opacity:0,

scale:1.2

}

}

});

document.querySelectorAll(".swiper-slide").forEach(slide=>{

slide.addEventListener("mousemove",(e)=>{

const img=slide.querySelector("img");

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

img.style.transform=`translate(${x}px,${y}px) scale(1.08)`;

});

slide.addEventListener("mouseleave",()=>{

slide.querySelector("img").style.transform="scale(1)";

});

});
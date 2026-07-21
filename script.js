/*==============================
      MOBILE MENU
==============================*/

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle){

    navToggle.addEventListener("click",()=>{

        navMenu.classList.add("show-menu");

    });

}

if(navClose){

    navClose.addEventListener("click",()=>{

        navMenu.classList.remove("show-menu");

    });

}

const navLinks=document.querySelectorAll(".nav-link");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("show-menu");

});

});

/*==============================
      STICKY NAVBAR
==============================*/

window.addEventListener("scroll",()=>{

const header=document.getElementById("header");

if(window.scrollY>=50){

header.classList.add("scroll-header");

}

else{

header.classList.remove("scroll-header");

}

});

/*==============================
      ACTIVE SECTION LINK
==============================*/

const sections=document.querySelectorAll("section[id]");

window.addEventListener("scroll",()=>{

const scrollY=window.pageYOffset;

sections.forEach(current=>{

const sectionHeight=current.offsetHeight;

const sectionTop=current.offsetTop-120;

const sectionId=current.getAttribute("id");

const navLink=document.querySelector('.nav-menu a[href*='+sectionId+']');

if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){

navLink.classList.add("active-link");

}

else{

navLink.classList.remove("active-link");

}

});

});
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;
        let current = 0;
        const increment = Math.max(1, target / 80);

        const update = () => {
            current += increment;

            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target + "+";
            }
        };

        update();
        counterObserver.unobserve(counter);
    });
});

counters.forEach((counter) => counterObserver.observe(counter));

const scrollTop=document.getElementById("scroll-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTop.classList.add("show-scroll");

}

else{

scrollTop.classList.remove("show-scroll");

}

});

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},1800);

});

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

document.getElementById("progress-bar").style.width=(scrollTop/height)*100+"%";

});

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

const reveals=document.querySelectorAll(".reveal");

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

reveals.forEach(r=>revealObserver.observe(r));

console.log("%c👋 Welcome Developer!","font-size:22px;color:#E50914;font-weight:bold;");

console.log("%cThanks for checking out my portfolio ❤️","font-size:16px;color:white;");

console.log("%cDesigned & Developed by Ayshu","font-size:16px;color:#E50914;");
const image=document.querySelector(".image-circle");

image.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

const rotateY=((x/470)-0.5)*18;

const rotateX=((y/470)-0.5)*-18;

image.style.transform=
`rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)`;

});

image.addEventListener("mouseleave",()=>{

image.style.transform="rotateX(0) rotateY(0)";

});

const words = [
    "Frontend Developer",
    "Full Stack Developer",
    "Software Developer",
    "React Developer",
    "Java Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,isDeleting ? 50 : 120);

}

typeEffect();


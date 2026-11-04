/*==============================
      MOBILE MENU
==============================*/

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle){

    navToggle.addEventListener("click",()=>{

        if (!navMenu) return;
        navMenu.classList.add("show-menu");
        navToggle.setAttribute("aria-expanded", "true");

    });

}

if(navClose){

    navClose.addEventListener("click",()=>{

        if (!navMenu) return;
        navMenu.classList.remove("show-menu");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");

    });

}

const navLinks=document.querySelectorAll(".nav-link");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if (navMenu) navMenu.classList.remove("show-menu");
if (navToggle) navToggle.setAttribute("aria-expanded", "false");

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

if (!navLink) return;

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

if (scrollTop) scrollTop.classList.add("show-scroll");

}

else{

if (scrollTop) scrollTop.classList.remove("show-scroll");

}

});

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hide");

},1800);

});

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progressBar = document.getElementById("progress-bar");
if (progressBar) progressBar.style.width=(scrollTop/height)*100+"%";

});

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if (!glow) return;
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

if (image) image.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

const rotateY=((x/470)-0.5)*18;

const rotateX=((y/470)-0.5)*-18;

image.style.transform=
`rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)`;

});

if (image) image.addEventListener("mouseleave",()=>{

image.style.transform="rotateX(0) rotateY(0)";

});

const words = [
    "Full Stack Developer",
    "Software Developer",
    "React Developer",
    "Frontend Developer",
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



// Fade page sections in when they enter the viewport and out when they leave.
// Existing theme, interactions, and content remain unchanged.
if ("IntersectionObserver" in window) {
    const scrollFadeSections = Array.from(document.querySelectorAll("body > section"));
    const scrollFadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("is-scroll-visible", entry.isIntersecting);
        });
    }, {
        threshold: 0.08,
        rootMargin: "-5% 0px -8% 0px"
    });

    scrollFadeSections.forEach((section) => {
        section.classList.add("scroll-fade-section");
        scrollFadeObserver.observe(section);
    });
} else {
    document.querySelectorAll("body > section").forEach((section) => {
        section.classList.add("is-scroll-visible");
    });
}


// Open the existing resume PDF in an accessible in-page dialog.
const readResumeButton = document.getElementById("read-resume-btn");
const resumeDialog = document.getElementById("resume-dialog");
const closeResumeButton = document.getElementById("close-resume-btn");

if (readResumeButton && resumeDialog) {
    readResumeButton.addEventListener("click", () => {
        if (typeof resumeDialog.showModal === "function") {
            resumeDialog.showModal();
        } else {
            window.open("AISWARIYA_A_Resume.pdf", "_blank", "noopener");
        }
    });
}
if (closeResumeButton && resumeDialog) {
    closeResumeButton.addEventListener("click", () => resumeDialog.close());
}
if (resumeDialog) {
    resumeDialog.addEventListener("click", (event) => {
        if (event.target === resumeDialog) resumeDialog.close();
    });
}

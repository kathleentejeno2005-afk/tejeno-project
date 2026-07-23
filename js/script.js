
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }else{

        header.style.background = "#111";
        header.style.boxShadow = "none";

    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(window.pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
const cards = document.querySelectorAll(".card, .service");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".7s ease";

    observer.observe(card);

});

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name=form.querySelector('input[type="text"]').value.trim();
    const email=form.querySelector('input[type="email"]').value.trim();
    const message=form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you for contacting Eventora!");
    form.reset();

});

}
;
const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#FFD700";
topBtn.style.color="#111";
topBtn.style.fontSize="22px";
topBtn.style.fontWeight="bold";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
topBtn.addEventListener("mouseover",()=>{

    topBtn.style.background="#ffffff";

});

topBtn.addEventListener("mouseout",()=>{

    topBtn.style.background="#FFD700";

});

window.addEventListener("load",()=>{

    console.log("Welcome to Eventora!");

});
const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${year} Eventora | All Rights Reserved`;
}
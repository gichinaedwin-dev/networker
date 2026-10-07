//Portfolio Javascript//
document.addEventListener("DOMContentLoaded",function()
{
    //Time-based Greeting//
    const greeting=document.querySelector("#greeting");
    if(greeting){
        const hour=new Date().getHours();
        let message;
        if(hour>=5&&hour<12){
            message="Goodmorning,Edwin!";}

    else if(hour>=12&&hour<17){
        message="Goodevening, Edwin!";
    }
    else{
        message="Goodnight, Edwin!";
    }
    greeting.textContent=message;}
});
//Mobile Menu//
const menuButton=
document.querySelector(".nav--toggle");
const nav=document.querySelector("#navlinks");

if(menuButton && nav){
    menuButton.addEventListener("click",function(){
        nav.classList.toggle("active");
    });
    const navLinks=nav.querySelectorAll("a");
    navLinks.forEach(function(link){
        link.addEventListener("click",function(){
            nav.classList.remove("active");
    });
});
}
//Contact Form//
const contactForm=document.querySelector("form");
if(contactForm){
    contactForm.addEventListener("submit",function(event)
{
    event.preventDefault();
    const name=document.querySelector("#name");
    const email=document.querySelector("#email");
    const message=document.querySelector("#message");
    if(
        name &&
        email &&
        message &&
        name.value.trim()!==""&&
        email.value.trim()!==""&&
        message.value.trim()!==""
 )
 {
    alert(
        "Thank you,"+
        name.value +
        "!Your message has been received."
    );
    contactForm.reset();
 }
 else{
    alert("Please fill in all the fields.");
 }
});
} 
//Current page//
const currentPage=
window.location.pathname.split("/").pop();
const navLinks=document.querySelectorAll("nav a");
navLinks.forEach(function (link){
    const linkpage=link.getAttribute("href");
    if(linkpage===currentPage){
        link.classList.add("active");
    }
});
//Project button//
const projectButtons=
document.querySelectorAll(".project a");
projectButtons.forEach(function(button){
    button.addEventListener("click",function(event){
        const link=button.getAttribute("herf");
        if(link==="#"){
            event.preventDefault();
            alert("This project page will be added soon.");
        }
    });
});
//Console Message//
console.log("portfolio JavaScript loaded successfully.");
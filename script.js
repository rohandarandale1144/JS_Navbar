let navToogler=document.querySelector(".nav-toggler");
navToogler.addEventListener("click", mynavToggle);

function mynavToggle(){
    navToogler.classList.toggle("active");
    let nav=document.querySelector(".nav");
    nav.classList.toggle("open");

    if(nav.classList.contains("open")){
        nav.style.maxHeight=nav.scrollHeight+"px";
    }
    else{
        nav.removeAttribute("style");
    }
}
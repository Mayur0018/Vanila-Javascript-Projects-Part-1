const navtoggle = document.getElementById("menu-toggle");
const navlinks = document.getElementById("nav-links");


navtoggle.addEventListener("click",function(){
    navlinks.classList.toggle('active');
    console.log(navlinks);
})

document.addEventListener("click",function(e){
    if(!navtoggle.contains(e.target) && !navlinks.contains(e.target)){
        navlinks.classList.remove("active")
    }
})
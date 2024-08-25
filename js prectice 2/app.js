let box = document.querySelector(".box");

box.addEventListener("mousemove", (details) => {
    let move = gsap.utils.mapRange(0, window.innerWidth, 200 + box.getBoundingClientRect().width / 2, window.innerWidth - (200 + box.getBoundingClientRect().width / 2), details.screenX);
    gsap.to(".box", {
        left: move,
        ease: Power3,
    })
})
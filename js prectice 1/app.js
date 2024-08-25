let box = document.querySelector("#box");

box.addEventListener("mousemove",(details)=>{
  let rectanglelocation = (box.getBoundingClientRect());
  let insideractagle = (details.screenX-rectanglelocation.left);
  if(insideractagle < rectanglelocation.width/2){
    let redcolor = gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insideractagle);
    gsap.to(box,{
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease : Power4,
 });
  }else{
    let bluecolor = gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,insideractagle);
    gsap.to(box,{
        backgroundColor: `rgb(0,0,${bluecolor})`,
        ease : Power4,
   })  
  }
});
 
box.addEventListener("mouseleave",()=>{
    gsap.to(box,{
        backgroundColor: "white",
    })
})
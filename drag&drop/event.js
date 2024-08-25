let body = document.querySelector("body");
let btn = document.querySelector("#btn");
let currmode = "light-mode";
btn.addEventListener("click",()=>{
    if(currmode === "light-mode"){
        currmode = "black-mode";
       body.classList.add("darkclass");
       body.classList.remove("whiteclass");
    }else{
        currmode = "light-mode";
        body.classList.add("whiteclass");
        body.classList.remove("darkclass");
    }
    console.log(currmode);
})

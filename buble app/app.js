let time = 60;
let score = 0;
let newhitnumber = 0;
let bubles = document.querySelector("#buuble");
let timer = document.querySelector("#timer");
let hitnumbers = document.querySelector("#hitnumbers");
let panel = document.querySelector(".panel");
let scorevalue = document.querySelector('#scorevalue');
let mainscore = document.querySelector("#mainscore");


let hitbuble = () => {
   newhitnumber = Math.floor(Math.random()* 10);
    hitnumbers.textContent = newhitnumber;
}


let printbuble = () => {
    let circle = "";
    for (i = 1; i <= 170; i++) {
        let count = Math.floor(Math.random() * 10);
        circle += `<div class="w-11 h-11 bg-red-900 rounded-full ml-1 mt-1 flex justify-center items-center font-bold text-fuchsia-50 hover:text-slate-950 hover:bg-slate-800 cursor-pointer">${count}</div>`;
        bubles.innerHTML = circle;
    }
}   

let inreasescore = () => {
    score += 10;
    scorevalue.textContent = score;
}



let settimer = () => {
    let timeinerval = setInterval(() => {
        if (time > 0) {
            time--;
            timer.textContent = time;
        } else {
            clearInterval(timeinerval);
            bubles.innerHTML ="<h1>Try Next Time Bruhhhhh.....</h1>";
        }
    }, 1000)
}

settimer();

bubles.addEventListener("click",(a)=>{
    let checkvalue = Number(a.target.textContent);
    if(checkvalue === newhitnumber){
       inreasescore();
       printbuble();
       hitbuble();
    }
});
settimer();
hitbuble();
printbuble();
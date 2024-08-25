// let number = prompt("enter anumber");
// if(number%5 ===0){
//     console.log("so we can called number divdev of 5",number);
// }else{
//     console.log("enter a valid number");
// }

// for(let i =0; i<=100; i++){
//     if(i%2 == 0){
//         console.log("the number is even",i);
//     }
// }

// let gamenimber =18;
// let number = prompt("enter the number");
// while (number != gamenimber) {
//     number = prompt("you guss the game number");
// }
// console.log("you have won this game");


// prectice od String

// let str1 = prompt("Enter your user name");
// let str2 = str1.length;
// let concet = str1.concat(str2);
// console.log("@"+concet);


// prectice of aaraY
// let sum =0;
// let studentMarks = [85,97,44,37,76,60];
// for (let val of studentMarks) {
//      sum += val;
// }
// let avg = sum / studentMarks.length;
// console.log(avg);

// let crickters = ["rohit","virat","dhoni"];
// for(i = 0; i<=crickters.length; i++){
//     console.log(crickters[2]);
// }

// let number = [250,645,300,900,50];
// for(let i=0; i<number.length; i++){
//     let offer = number[i] / 10;
//     number[i] -= offer;

// }
// console.log(number);

// let company = ["bloomberg","microsoft","uber","google","ibm","Netflix"];
// console.log(company);
// console.log(company.slice(1,3));
// company.splice(2,1,"Amazon");
// company.push("ola");

// function myfunction(msg){
//     console.log(msg);
// }
// myfunction("mayur is the best coder");
// myfunction("mayur is the one the best codder");

// arrowfunction

// const mul = (a,b) =>{
//     ans = a*b;
//     return(ans);
// }

// const finalAns = mul(10,21);
// console.log(finalAns);


// const finalAns1 =mul(100,200);
// console.log(finalAns1);

// pretice function

// function myfunction(str) {
//     let count = 0;
//     for (let val of str) {
//         if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
//             count++;
//         }

//     }
//     return count;
// }
// let ans = myfunction("sher");
// console.log(ans);

// let ans1 = myfunction("mayur is the best one");
// console.log(ans1);

// const vowels = (str) =>{
//     let count = 0;
//     for(let val of str){
//      if(val === "a" || val === "e" || val === "i" || val==="o" || val ==="u"){
//         count++;
//      }
//     }
//     console.log(count);
// }
// vowels("mayur is the best coder");

// for each Array
// let studentMarks = [1,2,3,4,5];
// studentMarks.forEach((val)=>{
//   let total = val*val;
//   console.log(total);
// })

// prectice qus
// let studentMarks = [70,85,90,91,85,455,75,95];
// let result = studentMarks.filter((val) =>{
//   return val>90;
// })
// console.log(result);

// let number = prompt("enter the number");
// let arr =[];
// for(i =1; i<=number; i++){
//  arr[i-1] =i;
// }
// console.log(arr);
// let finalAns = arr.reduce((prev,curr) =>{
//   return prev+curr;
// })
// console.log(finalAns);

// let product = arr.reduce((prev,curr) =>{
//   return prev*curr;
// })
// console.log(product);
// let heading = document.querySelector("h1");
// console.dir(heading.innerText.append = "from apna clg");
// heading.innerText = heading.innerText + "from apna clg";

// pre2
// let idx = 0;
// let box1 = document.querySelectorAll(".box");
// for(let div of box1){
// div.innerText =`mayur is the best coder ${idx}`;
// idx++;
// }
// box1[0].innerText ="mayur is the best coder";
// box1[1].innerText ="aakash is the best coder";
// box1[2].innerText ="mihir is the best coder";



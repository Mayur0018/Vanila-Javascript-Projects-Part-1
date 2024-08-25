// function sum(a,b){
//     console.log(a+b);
// }

// function calculater (a,b,sumCallback){
//     sumCallback(a,b);
// }

// sum(10,20);

// function getData(userid){
//     // console.log("Get the Dta Of user:-",userid);
// setTimeout((getData)=>{
//         console.log(userid);
//     },2000)

// }

// getData(123);


// callback heellll

// function student(name, nextname) {
//     setTimeout(() => {
//         if (nextname) {
//             nextname();
//         }

//         console.log("studentname", name);
//     }, 3000);
// }
// student(1, () => {
//     console.log("data fatcing");
//     student(2, () => {
//         console.log("fatch data 3");
//         student(3, () => {
//             console.log("Fatch Done");
//         })
//     })
// }); 

// promise 

function bloddyfang(number){
    return new Promise((resolve,rejct)=>{
        setTimeout(()=>{
            console.log("gabu is the best rider",number);
            resolve(200);
        },2000);
    });
}

// bloddyfang()

async function riders(){
await bloddyfang(1);
await bloddyfang(2);
await bloddyfang(3);
await bloddyfang(4);
await bloddyfang(5);
}
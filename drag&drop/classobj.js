// const student = {
//     name : "mayur nishad",
//     age : 21,
// }

// class student {
// number(){
//     console.log("student number");
// }
// schoolname(schoolname){
//     this.schoolname ="raghunath school";
// }
// }

// let aakash = new student();
// aakash.schoolname ="bhagvati";
// console.log(aakash);   


// let box = document.querySelector("box");
// console.log(box);

// class  user{
//     constructor(){
//         console.log("Prectice makes a Perfect");
//         this.studentno = "25";
//     }
//     name = "Aakash";
//     Email = "Mayurnish18@gmail.com";
// }

// let viewdata = new user();
// console.log(viewdata);

// let student = new user()

// class student{
//     constructor(name,email){
//         this.name = "name";
//         this.email = "email";
//     }
//     viewdata(){
//         console.log("View THE Data Of The Student");
//     }

// }
// let obj = new student("mayur","mayurnish18@gmail.com");


// prectice 2

// class admin {
//     constructor(){
//         console.log("hello");
//     }
//     study(){
//         console.log("I am admin i will Study U");
//     }
// }

// class user extends admin{
//     learn(){
//         console.log("I m learn About All regarding study");
//     }
// }

// let admin1 = new admin();
// console.log(admin1);

// class car {
//     start(){
//         console.log("mayur is the best coder");
//     }

//     setbrand(brand){
//        this.brand = "brand";
//     }
// }
// let cars = new car();
// cars.setbrand("Thar");

// class user {
//     constructor(name,email){
//        this.name = "myname";
//        this.email = "myemail";
//     }

//     viewdata(){
//         console.log("mayur is the beat coder");
//     }
// };
// let obj = new user("mayur","mayurnish18@gmail.com");

class user{
    constructor(name,age){
     this.name = name;
     this.age = age;
    }
    editdata(){
        console.log("admin edit his Data");
    }
}

class admin extends user{
    constructor(name,age){
        // this.surname ="surname";
        super(name,age);    
    }
    
    read(){
        console.log("user can read the data");
    }
}

let obj = new user("mayur","28");
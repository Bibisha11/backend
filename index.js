// function add(a,b){   //these are parameters//
//     sum = a+b;
//     return sum;
// }

// add(3,2);      //code reuasbility//
// add(5,6);      //input adding is arguments//

// let firstNumber = 10;
// let secondNumber = 20;
// console.log(firstNumber+secondNumber);


// function subtract(a,b){
//     console.log(a-b);
// }

// console.log("executed");

// let listOfFriends=["jyoti","Pragya","Niki"];

// const friends=["jyoti","Pragya","Niki"];
// // console.log(friends[0]);

// // for(i=0;i<friends.length;i++){
// //     console.log(friends[i]);

// // }
// function displayValue(display){
//    console.log(value);

// }
// friends.forEach((value)=>{
//     console.log(value);
// }
// );

// friends.forEach(displayValue);    //function was called for every value in the array//


// function displayValue(value){
//     console.log(value);

// }
// displayValue("Welcome Back");


// const array=[1,5,3,2,4,9,8,7,6,10];
// array.sort((a,b)=>a-b);  //sort as ascending order//
// console.log(array);

// const[a,b]=[1,2,3,4,5];
// console.log(a,b);  //output will be 1,2 because we have only 2 variables to store the values and rest of the values will be ignored//

// const user=[
//     {
//         userName:"jyoti",
//         rollNumber:1,
//         address:"Kapan"
//     },
//     {
//         userName:"Pragya",
//         rollNumber:2,
//         address:"Chabahil"
//     },
//     {
//         userName:"Nikki",
//         rollNumber:3,
//         address:"Gokarneshwor"
//     },
//     {
//         userName:"Bhawana",
//         rollNumber:4,
//         address:"Budhanilkantha"
//     }

// ];
// // console.log(user[0]);
// console.log(user.map(user=>user.userName));



// console.log("hello world!");

import express from "express";
import dotenv from "dotenv";
import loginrouter from "./router/auth.router.js";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello this is free login");
});

app.use("/api/v1/login", loginrouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


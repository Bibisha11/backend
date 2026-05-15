// console.log("hello");

// setTimeout(             //it's a promise used in time taking tasks to run in background//   //some might get executed some might not//
//     ()=>{
//         console.log("From settime out")   //it's runtime is successful due to event loop//
//     },200
// )
// console.log("hi")

// const myPromise = new Promise((resolve, reject) => {
//     resolve("hi");
// });

// myPromise.then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.error(err);
// }
// );

// async function getdata(){
//     try{

//     }
// }
// fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Error:", err);
//     });

//     async function getdata(){      
//         try{
//            const data= await fetch("https://fakestoreapi.com/products")    //await is used to make the code synchronous//
//            const realdata=await data.json();
//         }
//         catch(err){
//             console.log(err);
//         }
//     }
//     getdata();

// console.log("hello World!");
// import fs from "fs";  // fs is file system module used to read and write files in node js//
// console.log(fs);


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
    console.log(`Server listening to port ${port}`);
});
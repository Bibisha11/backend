const array=[
    {
    name:"Bibisha",
    phone:987654321
},
{
    name:"Jyoti",
    phone:987654321
},
{
    name:"Nikki",
    phone:987654321
},
{
    name:"Pragya",
    phone:987651234
}

]

array.forEach(user=>{
    user.email=user.name.toLowerCase()+"@gmail.com";
});

console.log(array);
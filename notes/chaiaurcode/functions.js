// function saymyname(){
//     console.log("h");
//     console.log("h");
//     console.log("h");
//     console.log("h");
//     console.log("h");
// }
// saymyname()//prints
// //saymyname reference to function name

// // function add(a,b){
// //     c = a+b
// //     console.log(c);
// // }
// function add(a,b){
//     c = a+b
//     return c
// }
// console.log(add(3,4))
// //if no parameter is passed then the result comes to be undefined

//WHAT IF THE NUMBER OF PARAMETERS PASSED IS NOT FIXED

//REST OPERATOTR(...)
// function print(val,val1,...num){
//     return num
// }
// console.log(print(1,3,4,5))//provides an array
// const user={
//     user:"sumit",
//     price:199
// }
// //passing object to a function
// function handleobject(user){
//    console.log(`username is ${user.user} `);

// }
// handleobject(user);

// const user = {
//     username:"sumit",
//     price:"999",
//     welcomemessage: function(){
        
//         console.log(`${this.username} `)//accesses username of this block
//         console.log(this);//gives context first hitesh then sam
          
//     }

// }
// user.welcomemessage();
// user.username="sam"
// user.welcomemessage();
//console.log(this);//empty object


// function chai(){
//     let username = "hitesh"
//     console.log(this.username)//this only refers to objects but not in functions
// }
// console.log(chai);

// const chai= () => {//arrow function
//     let username = "hitesh"
//     console.log(this.username);    
// }
//chai()

// const add  = (nums1,nums2)=>{//defining an arrow function
//     return nums1+nums2
// } 
//implicit return
//const add = (nums1,nums2)=>(nums1+nums2)
//write return in {} but not in ()
//returning object
// const add=(nums1,nums2)=>({username:"sumut"})//object must always be enclosed within curly braces

// console.log(add(3,4));


//iife immedeately invoked function expression
(function chai(){//named iife
    console.log(`DB`)
})();//immedeate function call if a semicolon is not applied then it doesnt know where to end 
((name)=>{//passing parameter in iife
    console.log(`${name}`);
    
})("hitesh")

// console.log("hitesh");
// const accountId=14335
// let accountEmail="hitesh"
// var accountPassword="12345"/*
// dont use var */
// accountCity="JAipur"
// let accountState
// //accountId=2//not allowed
// console.log(accountId);
// console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



// "use strict";//using new javascript
// //alert(3+3)we are using node js not browser
// console.log(3+3);
// //MDNdocs
// let name="sumit";
// let age=18;
// //assigns datatype automatically
// console.log(typeof "sumit");
// //null is a type of OBJECT



// let age = "25";
// let a = "33abc";
// let s = null;
// let t = undefined;
// console.log(typeof age);
// //conversion
// let number=Number(age);
// console.log(typeof number);
// let n = Number(a);
// console.log(typeof n);
// console.log(n);//gives nan even though its converted
// let m = Number(s);
// console.log(typeof m);
// console.log(m);//0
// let o = Number(t);
// console.log(typeof o);
// console.log(o)//nan
// //for boolean its 1 or 0 ""=> false "any string "=>true





// console.log(2**3);
// let str1 = "sumit "
// let str2 = "Vanshita"
// let str3 = str1+str2;
// console.log(str3);



//non primitive data type
//array,object,funtions

//Stack(primitive)=>CALL BY VALUE
//heap(non primitive)=>CALL BY REFERENCE
//OBJECT
 
// let user={ 
//     name:"Sumit",
//     upi: "user@ybl"
adarsh:"hello"
// }
// let user1=user
// user1.name="Vanshita"
// console.log(user.name)//call by reference




// const name = "vanshita"
// const rank = 53
// //console.log(name+rank); ##OUTDATED
// console.log(`Hello my name is ${name} my rank is ${rank} `);//any method can be used such a name.touppercase()
// const game= new String('vanshita')//initialising string using object
// console.log(game[0]);//accessing individual elements
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('t'));
// const newStr = "   Sumit   Vanshita  ";
// console.log(newStr.trim());
// const name1 = "Sumit-vanshita";
// console.log(name1.replace('m','v'));
// console.log(name1.split(' '));//creates array


// MATH AND NUMBER


// const balance = new Number(100)//defining like this gives access to its member functions

// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);//functionb chaining
// const othernumber = 123.8966
// console.log(othernumber.toPrecision(4));
// const hundreds=1000000;
// console.log(hundreds.toLocaleString('en-IN'));//to arrange in standard order
//console.log(Math);//prints math object but in console the same code gives all functions in MATH

// console.log(Math.min(4,3,6,8));//array passed to the functio
// console.log(Math.floor((Math.random()*10)+1));
// //to generate random number between min and max
// let min = 10;
// let max = 20;
// console.log(Math.floor((Math.random()*(max-min+1))+min));







//DATE

// let myDate = new Date()//return date in non readable format!!

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
 
// //creation of date
// let createdDate=new Date("2023-04-04")
// console.log(createdDate.toLocaleString());
// let mytime = Date.now()
// console.log(mytime);//returns time in milliseconds
// console.log(myDate.getTime());
// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);
// console.log(newDate.toLocaleString('default',{
//     weekday: "short",//format of week days
    
// }))
// console.log(newDate.toLocaleString());




//ARRAY(elements can be of different datatypes !!)
 // SHALLOW COPY copied by address
 //DEEP COPY copied by value

// const my = [1,2,3,4,5];
// const m1 = ["shaktiman","naag","me"];
// const myArr2=new Array(1,2,3,4,5)
// console.log(myArr2[0]);

//Array methods



// myArr2.push(6);
// myArr2.push(7);
// console.log(myArr2);
// myArr2.pop()//removes last element
// console.log(myArr2);
// myArr2.unshift(9);//puts value at front and shifts remaining elements larst element is removed
// myArr2.shift();
// console.log(myArr2);
// console.log(myArr2.includes(9));//returns true or false
// console.log(myArr2.indexOf(9));//returns -1 if not present
// console.log(myArr2);
// const a = myArr2.join()//converts array into string!!
// console.log(a);
// const sl = myArr2.slice(1,3);//no affect on array
// console.log(sl,myArr2);
// const sp = myArr2.splice(1,3);//substring is removed from array as well
// console.log(sp,myArr2);




// //####pushing an array in another will not append it willjust add it as another element 
// //concat joind two array and return a new array
// const a = [1,2,3,4,5];
// const b =[1,2,3,4,5,4];
// //const c  = a.concat(b);

// const c = [...a,...b];//3dots and spread operator
// console.log(c);
// const d = [1,2,3,4,[1,1,1,1,1,[1,1,1,1]]];
// const e  = d.flat(Infinity);//spreads the nested array
// console.log(e);

// console.log(Array.isArray("vanshita"));//checks if array or not!!
// console.log(Array.from("vanshita"))//creates array pf strings
// console.log(Array.of(1,2,3,4,4));//creates array of values



//objects
//object literals

// const jsuser = {
//     name:"hitesh",
//     "full name":"Sumit Ray",//this member cannot be accesed by using .
//     age:18,
//     location:"jaipur"
// }
// console.log(jsuser.name)
// console.log(jsuser["name"])
// console.log(jsuser["full name"])
// jsuser.name="sumit"
// //Object.freeze(jsuser)//makes members of object unchangable
// //jsuser.name="hit"
// console.log(jsuser.name);

// //functions are used as variables
 
// jsuser.greeting = function(){//adding a function
//     console.log("hello js user");
// }
// console.log(jsuser.greeting);//gives undefined as jsuser is freezed
// //gives reference to the function
// console.log(jsuser.greeting());
// jsuser.greeting2 = function(){//adding a function
//     console.log(`hello js user ${this.name}`);//this is used to access variable present in the function
// }
// console.log(jsuser.greeting2());

 

 const tinderuser = new Object();//SINGLETON OBJECT
 tinderuser.id="123abc"
 tinderuser.name="sammy"
//  console.log(tinderuser);
//  const regularuser = {
//     email:"some@gmail.com",
//          fullname:{
//         username:{
//            firstname:"hitesh",
//             lastname:"ray"
//          }
//      }
//  }
// console.log(regularuser.fullname.username.firstname);


//combining object

const obj1 = {1: "A" , 2: "b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = Object.assign({},obj1,obj2);
//using spread
const obj3 = {...obj1,...obj2}
console.log(obj3);



const users=[
    {
        id:1,
        name:"Sumit"
    },
    {
        id:1,
        name:"Sumit"
    },
    {
        id:1,
        name:"Sumit"
    }
]
//users[1].name
console.log(tinderuser);
console.log(Object.keys(tinderuser));//gives an array of keys
console.log(Object.values(tinderuser));
//to check if property exists in the object
console.log(tinderuser.hasOwnProperty('name'));


//destructure
const course={
    coursename:"js in hindi",
    price:"100",
    courseInstructor:"hitesh"
}
const {coursename:c} = course;//providing shorthand for variablename
console.log(c);

//API is a way through which different application servers 
 
//json carries details of the content inside the file or carries information from backend
//the data is transferred in a json file which then can be used in objects
//api can also provide data in form of an array of objects

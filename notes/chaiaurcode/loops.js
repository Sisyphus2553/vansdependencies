//for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }
// let myarray = ["maa","papa","hum"]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }


//break; continue is used as well'

//for of
//array specific loops
// const arr = [1,2,3,4,5];
// for (const num of arr) {
//    console.log(num);
    
// }

// const greetings= "hello world"
// for (const greet of greetings) {
//     console.log(greet);
    
// }
//  //map
  
//  const map = new Map();//holds key value pair
//  map.set('IN',"INDIA");
//  map.set('USA',"UNITED STATES OF AMERICA")
//  map.set('IN',"INDIA");//doesnt store repeated values

//  console.log(map);
//  for (const [key,value] of map) {//key,value destructures the map content
//    console.log(key);
    
//  }


//  const myObject = {
//     js:"javascript",
//     cpp:"c++"
//  }
//  for (const key in myObject) {
//     console.log(`${key} in ${myObject[key]}`);
    
//  }

//  //FOR IN IN ARRAY
//  const programmimg = ["js","java","c++"];
//  for (const lang in programmimg){
//     console.log(`${lang}`);
    
//  }

//  //difference between for in and for of
//  //for in gives keys for objects
//  //for of gives values
//  for (const lang in programmimg){
//     console.log(`${programmimg[lang]}`);
    
//  }

 //array specific for loops
 //const programmimg = ["js","java","c++"];
// programmimg.forEach( function (item) {
//     console.log(item);
// })//callback function doesnt have name
//the functions calls the elements in the  array as its parameter

//using callback
// programmimg.forEach((item)=>{
//     console.log(item);
    
// })
// function printme(item){
//     console.log(item);
    
// }
// programmimg.forEach(printme)

// array1.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

 
// const coding = [
//     {
//         language:"hindi",
//         country:"india"
//     },
//     {
//         language:"english",
//         country:"USA"
//     },
//     {
//         language:"spanish",
//         country:"spain"
//     }

// ]
// coding.forEach((item)=>{//takes each object from the array and prints specific data members
//     console.log(item.language);
    
// })


// const coding = ["js","ruby","java","python","cpp"]
// const value = coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(value);//it doesnt return any value

const mynums = [1,2,3,4,5,6,7,8,9,10]
//const newnums = mynums.filter((nums)=>nums>4)
 //console.log(newnums);
// const newnums=[]
// mynums.forEach((nums)=>{
//     if(nums>4){
//         newnums.push(nums);   
//     }
// })
// console.log(newnums);
// let num = mynums.filter((nums)=>nums>4);
// console.log(num);


//MAP returns value automatically

// const result  = mynums.map((nums)=>{return nums+10})//{}requires explixcit return
// console.log(result);
// const result1  = mynums.map((nums)=>nums+10)//returns automatically
// console.log(result);

//CHAINING

// const newnums =  mynums
//             .map((nums)=>nums*10)
//             .map((nums)=>nums+1)
//             .filter((nums)=>nums>50)
// console.log(newnums);

// const initial_value= 0;
// //REDUCE
// const result = mynums.reduce(
//     (accumulator,item)=>accumulator+item,initial_value
// )
// console.log(result);
//accumulator stores suM AT each iteration
//at the begining the accumulator has INITAIl_value
 

const shop = [{
    item:"fruits",
    price:99
},
{
    item:"stationary",
    price:1199
},
{
    item:"sweets",
    price:91119
},
{
    item:"grocery",
    price:9911
}
]
const shopsum = shop.reduce(
    (accumulator,item)=>item.price+accumulator,0
)
console.log(`the total price to be paid is ${shopsum}`);


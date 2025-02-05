// //if
// loggedin = 0;
// if(2=="2"){
//   console.log("exec1");
  
// }
// //===is true when data type is equal as well
//  if(2==="2"){//does not execute
//     console.log("exec");
    
//  }else{
//     console.log("else");
    
//  }
//variable declared in if is not accessible outside scope

//  or || , and && 

//switch case
// switch (key) {key can be string as well
//     case value:
        
//         break;

//     default:
//         break;
// }

const useremail="s"
if (useremail) {
    console.log("true");
    
}else{
    console.log("false");
    
}
//falsy valu
//0,-0,false,nan,undefined,"",null
//truthy
//"0","false", " ",[],{},function(){}
//if array is empty
// if (Array.length!==0) {
//     not empty
// }


//TO CHECK IF OBJECT IS EMPTY or not
const empty={}
if(Object.keys(empty).length===0){
    console.log("object is empty");
    
}

//NULLISHCOALESCENSEOPERATOR
let val1 = null??10; //if the first value is null assign the second value
console.log(val1);

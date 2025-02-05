 //promises are object that represents the eventual completion(or failure) of an asynchronous operation and its resulting value
//HOW PROMISES ARE CREATED
// const promiseone = new Promise(function(resolve,reject){
//     //do an async task
//     setTimeout(()=>{
//         console.log("async task complete");
//         resolve() //indicates to promise that the task is complete       
//     },1000);
    
// })
// promiseone.then(()=>{
//     console.log("promise consumed");
    
// })
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("aysnc task two")
//     resolve();
//     },1000)
// }).then(()=>{
//     console.log("promise completed");
    
// })
// const promisethree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve({username:"chai",email:"chai aur code"})
//     },1000)
// })
// promisethree.then((user)=>{
//     console.log(user);
    
// })

const promisefour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({user:"user",id:"id"})
        }else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    },1000)
})
// promisefour.then((user)=>{
//   console.log(user);
  
// }).catch((str)=>{
//     console.log(str);
    
// })
promisefour.then((u)=>{
    console.log(u.user)
    return u.user//where does this return go to?
}).then((user)=>{
  console.log(user);
  
}).catch((err)=>{//catch works for reject in similar way to how then works for resolve
    console.log(err);
    
}).finally(()=>{
    console.log("something happennd to the promise");
    
})
//printing username

const promisefive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error = true;
       if(!error){
        resolve({username:"username",password:"123"})
       }else{
        reject("error");
       }
    },1000)

})
async function consumepromisefive(){//once the promise is resolved or rejected the async gets executed
    try{
        const response = await promisefive//await completion of promise five ...receives the returned value from resolve and reject
    console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}
//async await dont handle error directly
consumepromisefive()


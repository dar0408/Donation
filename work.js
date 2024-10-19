// let myPromise = new Promise((resolve,reject)=>{
//     let s= true;
//     if(s){
//         resolve("promise claimed");
//     }else{
//         reject("promise not claimed");
//     }
// });
// myPromise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
// console.log(error);
// })


let num = [3,3,34,54,6534,233,342,342234,342,342,342,342,32,];
num.sort((a,b)=>b-a);
console.log(num);
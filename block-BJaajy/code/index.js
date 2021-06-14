const one = new Promise((resolve, reject) =>  //fullfulled
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) => //rejected
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) => //fullfilled
  setTimeout(() => resolve('John'), 3000)
);

const promises = [one,two,three];

 
Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

let one = fetch(`https://random.dog/woof.json`);
let two = fetch(`https://aws.random.cat/meow`);

Promise.race([one,two]).then((value)=>{
    console.log(value)
});
 /*output : Response {type: "cors", 
 url: "https://random.dog/woof.json", 
 redirected: false, status: 200, ok: true, …}
*/

const first = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('arya'),1000);
})
const second = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('sab'),1000);
})
const third = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('home'),1000);
})
const fourth = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('harri'),1000);
})

Promise.all([first,second,third,fourth]).then((value)=>{
    console.log(value)
});
//
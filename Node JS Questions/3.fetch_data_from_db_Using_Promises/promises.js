const url = "https://apis.ccbp.in/jokes/random";

//promises
const myPromise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Promise Rejected")
        },2000)
    })
}
myPromise().then((fromResolve)=>{
    console.log(fromResolve);
}).catch((fromResolve)=>{
    console.log(fromResolve)
})

// async/await
const doNetworkCall = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
  };
  
  const asyncPromise = doNetworkCall();
  console.log(asyncPromise)
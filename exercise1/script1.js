function randomPromise(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          const randomNumber=Math.random();
          if(randomNumber < 0.5){
            resolve("success!");
          } else{
            reject("failed");
          };
       },1000);
    });
}

randomPromise()
.then((message) => {
    console.log(message); 
})
.catch((error) => {
    console.error(error); 
});
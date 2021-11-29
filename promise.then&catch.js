function check(){
    return new Promise(function(resolve,reject){
       setTimeout(() => {
           const x=1;
           if (x>=10){
               console.log("Success")
               resolve()
           }
           else{
               console.log("Not success")
               reject()
           }
       }, 2000);

    })
}
check().then(function(){
    console.log("success again")
}).catch(function(){
    console.log("Not success again")
})

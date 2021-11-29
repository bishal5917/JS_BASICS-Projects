console.log("Lets go")

function something(){
    console.log("entered getdata")
    url="https://api.github.com/users"
    fetch(url).then((response)=>{
        console.log("first then")
       return response.json();
    }).then((data)=>{
        console.log("second then")
       console.log(data)
    })
}


console.log("Before calling function")
something();
console.log("after calling function")


//run this is browser to get results
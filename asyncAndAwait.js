async function getmydata(){
    url="https://api.github.com/users"
   const response= await fetch(url)
   console.log("being fetched")
   const data=await response.json()
   console.log("data fetched")
   return data
}
// imp  ==> async always return a promise  
// when program control goes to await , then it proceeds further leaving await part to do its
//  work silently in background
// and then return back

let fetched=getmydata();
console.log(fetched)
fetched.then(data=>console.log(data))

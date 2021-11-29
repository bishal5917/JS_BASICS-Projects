
localStorage.setItem("Name","Bishal")
localStorage.setItem("ADDRESS","SiliconValley")

// localStorage.clear = clears local storage
// windows.localStorage = to check in local storage

let name=localStorage.getItem(Name)
console.log(name)
let add=localStorage.getItem("ADDRESS")
console.log(add)

localStorage.removeItem("Name")
// to remove particular item
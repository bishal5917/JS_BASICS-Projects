let str = "Bishal Poudel is software engineer at google and full stack developer at facebook"
let to_search = /at/g
//if it is made global ,  it gives us all the indices

// exec=returns the index of thing to search

 let resulta=to_search.exec(str)
let resultb=to_search.exec(str)
 console.log(resulta,resultb)


//  test= returns true if that string is present
let resultc = to_search.test(str)
console.log(resultc)


// match = returns an array of results or null if not present
let resultd = str.match(to_search)
console.log(resultd)


// search = returns the index of that string given if present
let resulte = str.search(to_search)
console.log(resulte)


// replace=replaces that in the parent string
let resultf = str.replace(to_search, "on")
console.log(resultf)
console.log("sets in javascript")

let myset = new Set()

myset.add("bisal")
myset.add(9000)
myset.add("siliconValley")
//if i add same item on set two times , it wont take it
myset.add(9000)

console.log(myset)

//or we can do directly like this as one liner

let myset2 = new Set(["Bishalpoudel", 6000, "Georgia"])
console.log(myset2)

//checking if set has item or not
console.log(myset2.has("california"))
//returns false if there is no california on set2

//deleting something from set
console.log(myset2.delete(6000))
console.log("after deletion of 6000 ", myset2)

//iterating a set
myset2.forEach((element) => {
    console.log(element)
})

let mymap=new Map()

let key1="RTX 3090"
let key2={}
let key3= "Core i9,10000k"

mymap.set(key1,"Lets go")
mymap.set(key2,"CHarge")
mymap.set(key3,"Excellent Work")

console.log(mymap)
console.log(mymap.size)
console.log(mymap.get(key1))

//traversing the map
for (let [key,value] of mymap){
    console.log("Key is",key)
    console.log("value is",value)
}

//converting map to array
//array of keys
let keyarray=Array.from(mymap.keys())
console.log(keyarray)

//array of values
let valuearray=Array.from(mymap.values())
console.log(valuearray)

//getting members of value array
valuearray.forEach((element)=>{
    console.log(element)
})
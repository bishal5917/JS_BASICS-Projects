// let bike={
//     name:"ns",
//     topSpeed:"120km/h",
//     rider:"Bishal"
// }
// console.log(bike.name)
// console.log(bike.topSpeed)
// console.log(bike.rider)

//Lets create our own objects using OOP in javaScript

function bike(name,topSpeed,rider){
    this.name=name
    this.tspedd=topSpeed
    this.riderBoy=rider
    this.run=function(){
        console.log(`WAnna Go for a ride on ${this.name}`)
    }
}

bike1=new bike("MT07","300km/h","Bisal")
bike2=new bike("NS160","120km/h","BIsall")

console.log(bike2)
console.log(bike1.tspedd)
console.log(bike1.run())


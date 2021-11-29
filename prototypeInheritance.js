
function bike(name,topSpeed,rider){
    this.name=name
    this.tspedd=topSpeed
    this.riderBoy=rider
}
bike.prototype.gogo=function(){
    return `This is the best ${this.tspedd}`
}

function car(name,topSpeed,rider,steering){
    bike.call(this,name,topSpeed,rider)  //name,topspeed,rider wala inherit garxa , ani stteering ko chai afai deko
    this.steering=steering
}
//inheriting the prototype
car.prototype=Object.create(bike.prototype)

//manually setting the constructor
car.prototype.constructor=car.constructor

let ford=new car("hundai",300,"pinnell","round")
console.log(ford.tspedd)

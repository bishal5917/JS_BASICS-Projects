class bike{
    constructor(givenName,givenSpeed,givenRider){
        this.name=givenName;
        this.speed=givenSpeed;
        this.rider=givenRider;
    }
    run(){
        return `Your Bike has good topspeed of ${this.speed}`
    }
    static multiply(a,b){  //after using static we can access by class name
        return a*b
    }
}
class superBike extends bike{
    constructor(givenName,givenSpeed,givenRider,tyreSize){
        super(givenName,givenSpeed,givenRider);
        this.tyreSize=tyreSize;
    }
}

mt07=new superBike("MT07",300,"Bishal",350);
console.log(mt07.tyreSize);
console.log(mt07.name);
console.log(bike.multiply(3,3));
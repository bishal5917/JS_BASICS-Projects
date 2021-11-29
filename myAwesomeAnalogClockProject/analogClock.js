// console.log("Lets make awesome clock")

function handsRotation(){
    let mydate=new Date()
    gotHour=mydate.getHours()
    gotMin=mydate.getMinutes()
    // gotMin=30
    gotSec=mydate.getSeconds()
    hourHandRotationFactor=30*gotHour+gotMin*0.5
    minHandRotationFactor=6*gotMin
    secHandRotationFactor=6*gotSec
    //rotating
    hourhand.style.transform=`rotate(${hourHandRotationFactor}deg)`
    minhand.style.transform=`rotate(${minHandRotationFactor}deg)`
    sechand.style.transform=`rotate(${secHandRotationFactor}deg)`
}
//updating at each 1 second 
setInterval(() => {
    handsRotation();
}, 1000);
console.log("Lets make a clock in javascript")

let clockHere = document.getElementById("clockContainer")

function updateTime() {
    let getdate = new Date()
    let hour = getdate.getHours()
    let mins = getdate.getMinutes()
    let secs = getdate.getSeconds()
    // let ms=getdate.getMilliseconds()
    if (mins<10){
        mins="0"+mins
    }
    if (secs<10){
        secs="0"+secs
    }
    let ourTime = hour + ":" + mins + ":" + secs

    if (hour < 12) {
        ourTime = ourTime + "  " + "AM"
    }
    else {
        ourTime = ourTime + "  " + "PM"
    }
    clockHere.innerHTML = `<div id="time"> ${ourTime} </div>`
}

//running that function every second so that seconds can be seen being updated
setInterval(() => {
    updateTime();
}, 1000);
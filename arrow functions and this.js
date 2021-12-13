//lets see in case of a normal function first
const itachi = {
    name: "Itachi Uchiha",
    fight() {
        setTimeout(function () {
            console.log(this)
        }, 1000);
    }
}
//In this case even if we have called by using object name 
//but the window object is returned,because we are inside a callback function
//To solve that we have to do the following
itachi.fight()

const itachis = {
    name: "Itachi Uchiha",
    fight() {
        var outside = this
        setTimeout(function () {
            console.log(outside)
        }, 1000);
    }
}
//here we declared this outside the callback function 
//So in this case we will get the current object
itachis.fight()


//but in case of the arrow function that thing isnot needed,the arrow function
//dont rebind this keyword
const itachiArrow = {
    name: "Itachi Uchiha",
    fight() {
        setTimeout(() => {
            console.log(this)
        }, 1000);
    }
}
//In this case we used the arrow function, so we will get the current object
//the beauty of modern arrow function
itachiArrow.fight()
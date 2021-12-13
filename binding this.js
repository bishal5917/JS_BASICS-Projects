const levi = {
    name: "Levi Ackerman",
    fight() {
        console.log(this)
    }
}
//value of this always depends on how a function is called
//this always return a reference to a current object if that function is 
//invoked with the name of that object
//this always return a reference to a global object(window object) if that function is
//invoked outside the object ordirectly without the name of an obj
//this can be solved by the bind 
//the bind method is used to bind function to an object
levi.fight()

//here the function fight is only assigned to fightingAckerman but not called
fightingAckerman = levi.fight.bind(levi)
fightingAckerman()
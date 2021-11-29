let array=[1,2,2,3,4,5,6,7,8,9,10,11,12,12,31,313,4,5,5,7,22,989,31,08,557,858]


//one functions takes another function as argumrnt and calls it 
//these types of functions are callback functions

function printstring(callback){
    setTimeout(function(){
      console.log("THE NO TIME OPERATION FUNCTION")
      callback();
    },5000)
}

function printarray(array){
    setTimeout(function(){
        array.forEach(element => {
            console.log(element)
        });
    },2000)
}

printstring(printarray(array))
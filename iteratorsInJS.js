function dreamsIterator(array){
    let index=0
    return{
        next: function(){
           if (index<array.length){
               return {
                   value : array[index++],
                   done : false
               }
           }
           else{
               return{
               done:true
               }
           }
        }
    }
}
array=["SE@google","Mansion","iphone","kkr-rokits","ATH-Headphones","Gaming PC","Gaming-Laptop","Mt-07"]
let dreams=dreamsIterator(array)
console.log(dreams.next())
console.log(dreams.next())
console.log(dreams.next())
console.log(dreams.next())
console.log(dreams.next())
console.log(dreams.next())
console.log(dreams.next())
console.log(dreams.next())
console.log(dreams.next())
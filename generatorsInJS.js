//generators generate the value on the fly = i.e when needed or when invoked to generate

function* numsGenerator(){
    let i=0;
    while (true){
        yield i++;
    }
}

let numsgenerated=numsGenerator()
console.log(numsgenerated.next())
console.log(numsgenerated.next())
console.log(numsgenerated.next())
console.log(numsgenerated.next())
console.log(numsgenerated.next())
console.log(numsgenerated.next())

//it will keep generating when invoked
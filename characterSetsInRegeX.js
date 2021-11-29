let str="bisal is softwaresoftware engineer att gogle,He earns 9000000"

// character sets []
var regex=/bi[sh]al/   //there should be either s or h between i and a
var regex=/bi[a-z]al/   //there can be anything from a and z between i and a
var regex=/bi[^yu]al/   //there cannot be y or u between i and a

//quantifiers = to specify quantity {}
var regex=/engine{2}r/  //e can occur exactly two times after n
var regex=/go{0,2}gle/    //o can occur for 0,1 or 2 times

//grouping = to group ()
var regex=/(software){2}/   //software must occur exactly two times

let result=regex.exec(str)
console.log(result)

if (regex.test(str)){
    console.log("Found successsfully")
}
else{
    console.log("not found")
}
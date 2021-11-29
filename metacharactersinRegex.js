let str="bishal is software enginnnnnnr att google,He earns 9000000"

var regex=/bishal/g
var regex=/b.shal/g  // . ko thauma jun num ayeni match hunxa
var regex=/softwa+re/g  //euta ya tyo vanda badi a xa vani match
var regex=/engin*r/g     //n vaeni navaneni match hunxa , 
var regex=/^b/g    // b bata kei suru xa vani match hunxa
var regex=/e$/g     //e bata end huni xa vani match hunxa
var regex=/90*/g     // 9 paxi no-zer0 ra 9 paxi infinite 0 match hunxa

let result=regex.exec(str)
console.log(result)

if (regex.test(str)){
    console.log("Found successsfully")
}
else{
    console.log("not found")
}
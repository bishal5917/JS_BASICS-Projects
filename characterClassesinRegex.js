const str = "bishalPoudel lives in silicon valley.H e is an awesome engineer.H   e earns dollar9000 per month"

/*
Note :    w = word character
          W =Non-word character
          d=digit character
          D = Non-digit character
          s= whitespace character
          S= Non-whitespace character
*/

var regex = /\wPoudel/   // There must be one word character before Poudel
var regex = /\w+Poudel/  //There can be one or more than one word characters before Poudel
var regex = /\WPoudel/   //There shouldnot be any word characters before Poudel
var regex = /\WPoudel/   //There shouldnot be one or more than one word characters before Poudel
var regex = /dollar\d/   //There should be any one digit character after dollar
var regex = /dollar\d+/  //There can be one or more than one digits after dollar
var regex = /dollar\D/   //There shouldnot be any one digit character after dollar
var regex = /dollar\D+/  //There cannot be one or more than one digits after dollar
var regex = /H\s/        //There should be one whitespace after H
var regex = /H\s+/       //There should be one or more than one whitespace after H
var regex = /H\S/        //There shouldnot be one whitespace after H
var regex = /H\S+/       //There shouldnot be one or more than one whitespace after H

let result = regex.exec(str)
console.log(result)

if (regex.test(str)) {
    console.log("Found successsfully")
}
else {
    console.log("not found")
}
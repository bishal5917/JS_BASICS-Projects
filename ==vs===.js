let a=5917
let b="5917"

console.log(a==b) 
// Note: == performs type conversion if needed.This is not Strict .
//here it converted b to integer or a to string , so this will return true

console.log(a===b)
//Note:This is strict comparision operator.This doesnot perform any type conversions.
//since a is integer and b is string.So This will return false.



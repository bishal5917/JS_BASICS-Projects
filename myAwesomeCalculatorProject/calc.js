let userinput=document.getElementById('numsenter')
let entered_button=document.querySelectorAll('Button')
let inputareaval=''

for(butts of entered_button){
    butts.addEventListener('click',(b)=>{
    let gotbutton=b.target.innerText
    // console.log(gotbutton)
    if (gotbutton=="AC"){
        userinput.value=''
        window.location.reload(true)
    }
    else if(gotbutton=="="){
       userinput.value=eval(inputareaval)
    }
    else{
        inputareaval+=gotbutton
        userinput.value=inputareaval
    }
})
}



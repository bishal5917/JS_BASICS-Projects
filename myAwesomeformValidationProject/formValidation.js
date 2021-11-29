// verifying email
let verifyEmail=document.getElementById('email')
var emailboolean
verifyEmail.addEventListener('blur',()=>{
    // console.log("good to go")
    let gotemail=verifyEmail.value
    // console.log(gotemail)
    let regexForEmail=/[a-zA-z0-9]@gmail\.[a-z]/
    if (regexForEmail.test(gotemail)){
        // console.log("all good")
        emailboolean=1
    }
    else{
        // console.log("not good")
        emailboolean=0
        let emailbad=document.getElementById('emailcheck')
        emailbad.innerHTML=`<h5 class="bad">Entered email is invalid! format : poudelb172@gmail.com</h5>`
        setTimeout(() => {
            emailbad.innerHTML=''
        }, 3000);
    }
})

// verifying password
let verifyPassword=document.getElementById('pass')
var passboolean

verifyPassword.addEventListener('blur',()=>{
    // console.log("good to go")
    let gotpass=verifyPassword.value
    // console.log(gotpass)
    let regexForPass=/([a-zA-z0-9]){7}/
    if (regexForPass.test(gotpass)){
        // console.log("all good")
        passboolean=1
    }
    else{
        // console.log("not good")
        let passbad=document.getElementById('passcheck')
        passboolean=0
        passbad.innerHTML=`<h5 class="bad">Password must be at least 7 characters long</h5>`
        setTimeout(() => {
            passbad.innerHTML=''
        }, 3000);
    }
})

//verifying submit
let submitbtn=document.getElementById('sub')
let msgtouser=document.getElementById('msgToUser')
submitbtn.addEventListener('click',(clk)=>{
    clk.preventDefault()
    if (emailboolean==1 && passboolean==1){
        msgtouser.innerHTML=`<div id="showmsg"> <strong> Success </strong>: Logged in successfully 
        
                </div>`
        //after 3 seconds innerHTML of msgToUser will go blank
        setTimeout(function(){
        msgToUser.innerHTML=''
        },timeout=3000)
    }
    else if (emailboolean==0 || passboolean==0){
        msgtouser.innerHTML=`<div id="showmsgx"> <strong> Error </strong>: Please Enter valid input
        </div>`
        setTimeout(function(){
        msgtouser.innerHTML=''
        },timeout=3000)
        // console.log("invalid")
    }
})

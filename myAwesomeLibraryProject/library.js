console.log("Lets start the library project")

//class to get book details

tocheckstorage();

class bookdetails {
    constructor(enteredName, enteredWriter) {
        this.name = enteredName;
        this.writer = enteredWriter;
    }
    static clear() {
        let formsubmitaction = document.getElementById('formsub')
        formsubmitaction.reset();

    }

}
//code to handle form submit
let formsubmitaction = document.getElementById('formsub')
formsubmitaction.addEventListener('submit', handleForm);
function handleForm(e) {
    console.log("Details Taken")
    e.preventDefault();
    let bookName = document.getElementById('bnamex').value;
    let authorName = document.getElementById('bauthorx').value;
    let bookobj = new bookdetails(bookName, authorName);

    // console.log(bookobj)
    bookdetails.clear(); //after getting details,we cleared for another detail
    
    // function to show details in browser itself
    let date = new Date();
    function addToBrowser() {
        let tablebody = document.getElementById('toaddHere')
        let addstr = `  <tr>
                      <td>${bookobj.name}</td>
                      <td>${bookobj.writer}</td>
                      <td>${date}</td>
                      <td> <input type="submit" value="DEL" id="btnx"></td>
                  </tr>
               `
        tablebody.innerHTML += addstr
    }
    function addSuccessmessage(){
        let msgToUser=document.getElementById('msgToUser')
        msgToUser.innerHTML=`<div id="showmsg"> <strong> Success </strong>: Your Details were entered successfully 
        
                               </div>`
        //after 3 seconds innerHTML of msgToUser will go blank
        setTimeout(function(){
            msgToUser.innerHTML=''
        },timeout=3000)
    }
    function addErrormessage(){
        let msgToUser=document.getElementById('msgToUser')
        msgToUser.innerHTML=`<div id="showmsgx"> <strong> Error </strong>: Please Enter valid input
                                      </div>`
        setTimeout(function(){
            msgToUser.innerHTML=''
        },timeout=3000)
    }
    function storeinLocal(){
        let arr=[]
        arr.push(`${bookobj.name}`)
        arr.push(`${bookobj.writer}`)
        arr.push(`${date}`)
        let tostore=JSON.stringify(arr)
        localStorage.setItem(`mydata`,tostore)
        
    } 

    if (bookobj.name.length<=3 && bookobj.writer.length<=3){
        // return false
         addErrormessage();
    }
    else{
            addToBrowser();
            addSuccessmessage();
            storeinLocal();
    }
}
//checking the local storage if there is data
function tocheckstorage(){
    let storeditem=localStorage.getItem('mydata')
    let parsedarray=JSON.parse(storeditem)
    console.log(parsedarray[0])
    if (parsedarray==null){
        return false
    }
    else{
        let tablebodys = document.getElementById('toaddHere')
        let addstrs = `  <tr>
                      <td>${parsedarray[0]}</td>
                      <td>${parsedarray[1]}</td>
                      <td>${parsedarray[2]}</td>
                      <td> <input type="submit" value="DEL" id="btnx"></td>
                  </tr>
               `
        tablebodys.innerHTML += addstrs
    }
}

console.log(" Boy ")
console.log(5)
// let p=window.prompt("Enter your name")
// 
let valueinsert=localStorage.getItem('text')
let text
if (valueinsert==null){
    text=document.createTextNode("Click Here To Enter Your Text")
}
else{
    text=document.createTextNode(valueinsert)
}
let newElem = document.createElement('div')

newElem.setAttribute('class', "clem")
newElem.setAttribute('id', "ilem")
newElem.setAttribute('style', 'border:2px solid purple;margin:3px 5px;padding:50px 10px')
newElem.appendChild(text)

let cont = document.querySelector(".container")
let second = document.getElementById('anid')
cont.insertBefore(newElem,second)

newElem.addEventListener('click',function(e){
    let notext=document.getElementsByClassName('textarea').length;
    if (notext==0){
    let content=ilem.innerHTML
    newElem.innerHTML=` <textarea class="textarea" form-control" id="textareas" rows="3"> ${content}</textarea>`;
    }
    let savetext=document.getElementById('textareas');
    savetext.addEventListener('blur',function(){
        newElem.innerHTML=savetext.value
        localStorage.setItem('text',savetext.value);
    })
})
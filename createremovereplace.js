let element=document.createElement("li")
element.className="classE"
element.id="thisid"
// element.setAttribute()
element.innerText="Hello , created from js"
let ul=document.querySelector("ul.this")
ul.appendChild(element)
console.log(element)
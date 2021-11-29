let element=document.getElementById("heading")
element.addEventListener("click",function listen(e){
    console.log("You clicked my heading")
    variable=e.target.id
    variable=e.offsetX
    console.log(variable)
})

let elems=document.querySelector('.container')
elems.addEventListener("mouseenter",function m_enter(e){
    console.log("You entered mouse in list")
})

let mousemove=document.querySelector(".whole")
mousemove.addEventListener("mousemove",function(e){
    console.log("mouse moved");
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},200)`
}
)

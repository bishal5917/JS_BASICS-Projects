console.log("ajax = asynchronous programming and XML")

let bt=document.getElementById("btnclk");
bt.addEventListener("click",function(){
    console.log("Lets go");
  
    //creating xhr object
  const xhr=new XMLHttpRequest;
   
  //opening the xhr object
  xhr.open('GET','bikeInfo.json',true);

  //what to do on progress 
  xhr.onprogress=function(){
      console.log("onprogress");
  }
    xhr.onload=function(){
        console.log(this.responseText);
        let str=""
        let insert=document.getElementById("insert")
        obj=JSON.parse(this.responseText)
        for (key in obj){
            str+=`<li>${key}</li>`
        }
        insert.innerHTML=str
    }

    //   at last we have to send 
    xhr.send()
});

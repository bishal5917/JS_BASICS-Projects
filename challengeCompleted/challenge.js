let toinsert=document.getElementById('showhere')

function showdownloaddialogue(){
    let clicked=document.getElementById('btn')
    clicked.addEventListener('click',()=>{
        for (var i = 0; i <=20; i++){
            showcountThere(i);
        }
        function showcountThere(i){
            setTimeout(()=>{
                {
         
                toinsert.innerHTML=`<div class="text">
                Your Download will start automatically in 20 seconds.Please wait !
            </div>
            <div id="dialogue">Beginning Download in ${i} seconds</div>`
                }
            },i*1000);
        }
        setTimeout(() => {
            toinsert.innerHTML='Your Download must have begun ! '
            window.open('https://www.andraware.com/', '_blank');
        }, 20000);
    })
}

showdownloaddialogue();


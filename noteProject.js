console.log("Lets start the project");
showmynotes();

let getnote = document.getElementById('taid');

let notesubmit = document.getElementById('btid');

notesubmit.addEventListener('click', function () {

    localStorage.setItem('text', getnote.value)
    console.log(getnote.value)
    showmynotes();
})

function showmynotes() {
    let ifnote = localStorage.getItem("text")
    if (ifnote == null) {
       notearray=[]
    }
    else{
        notearray=JSON.parse(ifnote)
    }
    let noteadd = ""
    notearray.forEach(function (element, index) {
        noteadd += `     <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notearray.length != 0) {
      notesElm.innerHTML = noteadd;
    } else {
      notesElm.innerHTML = `Nothing to show!`;
    }
  }

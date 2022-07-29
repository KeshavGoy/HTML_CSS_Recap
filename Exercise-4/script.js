console.log("Welcome to Quick Notes.");
showNotes();
// User adding a Note

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTxt = document.getElementById('inputNote');
    let addTtl = document.getElementById('inputTitle');
    // console.log(addTxt.value);
    if(addTxt.value == "" || addTtl.value=="")
    {
        alert("Fill Both the Entries");
    }
    else
    {
        let notes = localStorage.getItem("notes");
        if(notes==null)
        {
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes);
        }

        notesObj.push([addTxt.value,addTtl.value]);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        addTxt.value = "";
        addTtl.value="";
        showNotes();
    }
});

// Function to show Elements from localStorage

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let cards = "";
    notesObj.forEach(function(element,index) {
        // console.log(element[0]);
        cards += `
        <div class="card">
            <h2 class="space card-title">${element[1]}</h2>
            <pre class="space card-content">${element[0]}</pre>
            <button onclick="deleteNote(this.id)" class="button space" id="${index}" type="submit">Delete Note</button>
        </div>
        `;

    });
    let notesElem = document.querySelector('.Notes-Area');
    if(cards.length!=0)
    {
        notesElem.innerHTML = cards;
    }
    else{
        notesElem.innerHTML = '<p class="space"><b>Not a Single Note Here. Add a note Using the "Add a Note" Section Above!</i></b></p>'
    }
}

// User Deleting a Note

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    let notesObj = JSON.parse(notes);
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

// User Searching in the Notes


let search = document.getElementById("search");

search.addEventListener('input',function(e){
    // console.log("Input event",inputVal);
    let inputVal = search.value;
    let cards = document.getElementsByClassName("card");
    Array.from(cards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('pre')[0].innerText.toLowerCase();
        let cardTtl = element.getElementsByTagName('h2')[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal.toLowerCase()) || cardTtl.includes(inputVal.toLowerCase()))
        {
            element.style.display = "block";
        }
        else{
            element.style.display="none";
        }
    })
});
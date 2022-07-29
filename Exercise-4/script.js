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
    let imp = localStorage.getItem("imp");
    if(notes==null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let cards = "";


    // checking important notes and displaying them first
    if(imp==null)
    {
        // console.log("No imp");
        impObj=[];
    }
    else{
        impObj = JSON.parse(imp);
        impObj.forEach(function(element){
            let content = notesObj[element];
            cards += `
        <div class="card" style="background-color:antiquewhite">
            <h2 class="space card-title">${content[1]}</h2>
            <pre class="space card-content">${content[0]}</pre>
            <div>
                <button onclick="deleteNote(this.id)" class="button space" id="${element}" type="submit">Delete Note</button>
                <button onclick="markImp(this.id.slice(8))" class="button space" id="markImp_${element}">Mark Normal</buttoon>
            </div>
        </div>
        `;

        });
    }


    notesObj.forEach(function(element,index) {
        // console.log(element[0]);
        if(!impObj.includes(index))
        {    
        cards += `
        <div class="card">
            <h2 class="space card-title">${element[1]}</h2>
            <pre class="space card-content">${element[0]}</pre>
            <div>
                <button onclick="deleteNote(this.id)" class="button space" id="${index}" type="submit">Delete Note</button>
                <button onclick="markImp(this.id.slice(8))" class="button space" id="markImp_${index}">Mark Imp</buttoon>
            </div>
        </div>
        `;
        }

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

// Marking Notes as Imp
function markImp(index_s){
    index = Number(index_s);
    let MarkImp = document.getElementById("markImp_"+index_s);
    let card = MarkImp.parentNode;
        // console.log(MarkImp);
    let imp = localStorage.getItem("imp");
    if(imp==null)
    {
        impObj = [];
    }
    else{
        impObj = JSON.parse(imp);
    }
    if(impObj.includes(index))
    {
        impObj.splice(impObj.indexOf(index),1);
        localStorage.setItem("imp",JSON.stringify(impObj));   
        MarkImp.innerText = "Mark Imp";
        card.style.backgroundColor="white";
    }
    else
    {
        impObj.push(index);
        impObj.sort();
        localStorage.setItem("imp",JSON.stringify(impObj));
        card.style.backgroundColor = "antiqueWhite";
        MarkImp.innerHTML = "Mark Norm";
    }
    showNotes();
}

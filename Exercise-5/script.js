console.log("Welcome to my library");

//Constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display(){

}

//Add methods to display prototype
Display.prototype.add = function(book){
    console.log("Adding");
    let tableBody = document.getElementById('tableBody');
    let uiString = `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
    tableBody.innerHTML += uiString;

}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
Display.prototype.validate = function(book){
    if(book['name'].length >=3 && book['author'].length >=3)
    {
        return true;
    }
    return false;
}
Display.prototype.show = function(check){
    let showMessage = document.querySelector('.showMessage');
    showMessage.innerHTML = `
    <div class="alert alert-${check}"><strong>${check.toUpperCase()}!</strong> Your book has been added.</div>
    `;
    setTimeout(() => {
        showMessage.innerHTML='';
    }, 2000);
}




//Add submit event Listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit',libraryFormSubmit);


function libraryFormSubmit(e){
    e.preventDefault();
    console.log("You have submitted");
    let name = document.getElementById("bookName");
    let author =document.getElementById("author");
    let Fiction = document.getElementById("Fiction");
    let Educational = document.getElementById("Educational");
    let Other = document.getElementById("Other");
    let type;
    if(Fiction.checked)
    {
        type = Fiction.value;
    }
    else if(Educational.checked)
    {
        type = Educational.value;
    }
    else{
        type = Other.value;
    }
    let book = new Book(name.value,author.value,type);
    console.log(book);
    // Will do this using display method
    // name.value = "";
    // author.value = "";
    // Fiction.checked = true;

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success');
    }
    else{
        display.show('fail');
    }
}
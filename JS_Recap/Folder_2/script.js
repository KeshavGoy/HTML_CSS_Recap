console.log("TEST");
let divElem = document.createElement('div');
divElem.className = 'Editable';
divElem.style.backgroundColor='salmon';
divElem.style.height='20vh';
divElem.style.width='30%';
let dom = document.querySelector('body');
dom.appendChild(divElem);
let inputElem = document.createElement('input');
inputElem.setAttribute('type','text');
// let editable = false;
divElem.addEventListener('dblclick',function(){
    divElem.replaceWith(inputElem);
    // editable = true;
})
inputElem.addEventListener('blur',()=>{
    localStorage.text = inputElem.value;
    let text = localStorage.text;
    divElem.innerText = text;
    inputElem.replaceWith(divElem);
})
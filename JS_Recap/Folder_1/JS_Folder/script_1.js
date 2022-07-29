// console.log("Practice Session has started.");
// let element = document.createElement('li');
// let text = document.createTextNode('I am a text Node');
// element.className = "ListItem";
// element.id = 'created';
// element.innerHTML = '<b>Created Li</b><br>'
// element.appendChild(text);
// element.setAttribute('title','myTitle');
// console.log(element);
// let ul = document.querySelector('ul');
// ul.appendChild(element);
// console.log(ul);

// let elem2 = document.createElement('h3');
// elem2.id = 'smaller_H';
// elem2.className = 'heading';
// let tnode = document.createTextNode("This is a created node for elem2");
// elem2.appendChild(tnode);
// element.replaceWith(elem2);

// let myul = document.getElementsByClassName('list');
// myul.replace  (element, document.getElementById('item1'));

let elem = document.createElement('h1');
elem.innerText = 'Go To GooGle Now';
let a = document.createElement('a');
a.appendChild(elem);
a.setAttribute('href','https://www.google.com');
document.querySelector('.child').appendChild(a);
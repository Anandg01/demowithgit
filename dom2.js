var item=document.querySelector('#items');

console.log(item.parentNode);

item.parentElement.style.background='red';

item.lastElementChild.style.background='yellow';

item.previousElementSibling.style.color='green';

console.log(item.firstElementChild);
item.firstElementChild.style.color='red';

var title= document.querySelectorAll('.title');

var newch=document.createElement('li');

newch.setAttribute( 'class' ,'list-group-item');
newch.textContent='Jay Shree Ram';
item.appendChild(newch);

const heade=document.querySelector('#header-title');


// create a text node
/*
const addtext= document.createTextNode('Hello , word');
heade.appendChild(addtext);
*/
var newli= document.createElement('li');
newli.setAttribute('class','list-group-item');

newli.textContent='Hello , word';

const reff=document.querySelector('li:first-Child');

item.insertBefore(newli,reff.nextSibling);

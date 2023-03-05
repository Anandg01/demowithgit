console.log(document.all);
document.textContent='chal hat';
console.log(document.forms);
const ht= document.getElementById('header-title');
ht.innerText='Chat hat';
ht.textContent='Jay Shree Ram';

ht.style.border='solid red 4px';

var items = document.getElementsByClassName('list-group-item');
items[1].textContent='Hello 2';
items[1].style.background='green';
items[1].style.fontweight='bold';
items[1].style.color='white';
//alert("jay shree Ram");
/*
var ht= document.getElementsByTagName('li');
//ht.style.border='solid red 5px';


for(var i=0; i<ht.length; i++){
    ht[i].style.fontWeight='bolder';
    ht[i].style.border='solid red 2px';
    ht[i].style.background='yellow';
    ht[i].style.height='50px';

}/*/



//use quearyselecto


//document.querySelector('.list-group-item:nth-child(2)').
//style.background='green';

//.querySelector('.list-group-item:nth-child(3)').
//style.display='none';

var odd =document.querySelectorAll('li:nth-child(odd)');

const li= document.querySelectorAll('li');

li[1].style.background='green';

for(var i=0; i<odd.length; i++){
    odd[i].style.background='green';
}





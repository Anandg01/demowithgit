var form =document.querySelector('#addf');

var iteml= document.querySelector('#items');

// for submit event

form.addEventListener('submit',additem);

function additem(e){
    e.preventDefault();

   var newitem=document.getElementById('inputI').value;
   
    var li=document.createElement('li');
    li.className='list-group-item';
     
    li.textContent=newitem;
    //iteml.appendChild(li);
//crreat X btn

var deletbtn= document.createElement('button');

// add calass to btn

deletbtn.className='btn btn-danger btn-sm float-right delete' ;

deletbtn.appendChild(document.createTextNode('X'));

// apply x to li
li.appendChild(deletbtn);
iteml.appendChild(li);

}

// remove item .. add a function 
iteml.addEventListener('click',removeitem);

function removeitem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('Are you Shure?')){
            var li=e.target.parentElement;
            iteml.removeChild(li);
        }
    }
}
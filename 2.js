// //console.dir(document);
// console.dir(document.domain);
// console.dir(document.URL);
// console.dir(document.title);
// console.dir(document.doctype);
// console.dir(document.head);
// console.dir(document.all);
// //console.dir(document.all[10].innerText="hello");

// var headertitle=document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headertitle.textContent);
// header.style.borderBottom = 'solid 3px black';
// var title = document.getElementsByClassName('title');
// console.log(title[0].innerText);
// title[0].style.fontWeight='bold';
// title[0].style.color='green';
// var item = document.getElementsByClassName('list-group-item');
// item[2].style.background='green';
// var items = document.getElementById('items');
// items.style.fontWeight='bold';
// items.style.color='orange';
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px black';

// var input = document.querySelector('input');
// input.value = 'Hello World!';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.background='green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';

// var list = document.querySelectorAll('.list-group-item');
// list[1].style.color='darkgreen';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0;i<odd.length;i++){
//         odd[i].style.backgroundColor='green';
//     }

var itemList = document.querySelector('#items');

// itemList.parentNode.style.backgroundColor='darkgrey';
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);
// itemList.parentElement.style.backgroundColor='darkgrey';
// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement);

//child nodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='yellow';
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

var newDiv = document.createElement('div');
newDiv.className='classndiv';
newDiv.id='idnsdiv';
newDiv.setAttribute('title','titlendiv');
var newDivText = document.createTextNode('Hello');
newDiv.appendChild(newDivText);
newDiv.style.fontSize = '20px' ;
console.log(newDiv);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

var newItem = document.createElement("li");
newItem.className = "list-group-item";
newItem.textContent = 'Hello';
itemList.insertBefore(newItem, itemList.firstChild);
console.log(newItem);
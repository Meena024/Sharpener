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

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.background='green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';

var list = document.querySelectorAll('.list-group-item');
list[1].style.color='darkgreen';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
        odd[i].style.backgroundColor='green';
    }
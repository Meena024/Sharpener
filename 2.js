// //console.dir(document);
// console.dir(document.domain);
// console.dir(document.URL);
// console.dir(document.title);
// console.dir(document.doctype);
// console.dir(document.head);
// console.dir(document.all);
// //console.dir(document.all[10].innerText="hello");

var headertitle=document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headertitle.textContent);
header.style.borderBottom = 'solid 3px black';
var title = document.getElementsByClassName('title');
console.log(title[0].innerText);
title[0].style.fontWeight='bold';
title[0].style.color='green';

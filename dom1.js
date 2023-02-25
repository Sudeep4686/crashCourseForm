// console.dir(document)
//console.log(document.domain);
//console.log(document.URL)
//console.log(document.title);
//console.log(document.forms);
var headerTitle = document.getElementById('header-title');
var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent="Hello123";
//headerTitle.innerText='GoodBye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';
//headerTitle.style.textDecoration
//const itemsheading=document.querySelector('.title:first-of-type');
//itemsheading.style.color='green';
//itemsheading.style.fontWeight = 'bold';
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='hello';
//items[2].style.backgroundColor='yellow';
//items[0].style.fontWeight='bold'
//items[1].style.fontWeight='bold'
//items[2].style.fontWeight='bold'
//items[3].style.fontWeight='bold'
//for (var i=0; i<items.length; i++){
//    items[i].style.fontWeight='bold'
//}
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='hello';
li[2].style.backgroundColor='yellow';
//items[0].style.fontWeight='bold'
//items[1].style.fontWeight='bold'
//items[2].style.fontWeight='bold'
//items[3].style.fontWeight='bold'
for (var i=0; i<li.length; i++){
    li[i].style.fontWeight='bold'
}
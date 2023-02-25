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
//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent='hello';
//li[2].style.backgroundColor='yellow';
//for (var i=0; i<li.length; i++){
//    li[i].style.fontWeight='bold'
//}

// Query selector //
//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #222';

//var input = document.querySelector('input');
//input.value = 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value="send";

//var item = document.querySelector('.list-group-item');
//item.style.color='red';

//var lastItem=document.querySelector('.list-group-item:last-child');
//lastItem.style.color='blue';

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor='green';

//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display='None';

//Traversing dom
var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4e5d8';
//console.log(itemList.parentNode.parentNode.parentNode);
//console.log(itemList.parentNode.parentElement);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4e5d8';
//console.log(itemList.parentElement.parentElement.parentElement);

// CHILDNODES
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//FirstChild
//console.log(itemList.firstChild);
// firstelementchild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello 1';

//lastChild
//console.log(itemList.lastChild);
// firstelementchild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='Hello 4';

//nextsibling
//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);
//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//Create an element

//create a div
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','hello Div');

// create a text node
var newDivText = document.createTextNode('hello');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);

parentNode=document.getElementById('items')
//helloworldelielement=<li>hello world</li>
parentNode.innerhtml = '<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li>'

parentNode.innerhtml='<li>Hello world</li>' + parentNode.innerhtml



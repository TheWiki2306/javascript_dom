// //console.dir(document);

// //console.dir(document);
// /*console.log(document.title);
// console.log(document.URL);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[14]);
// console.log(document.forms);
// console.log(document.links); */

// //GETELEMENTBYID
// //console.log(document.getElementById('header-title'));
// //var headerTitle = document.getElementById('header-title');
// //var header = document.getElementById('main-header');
// //console.log(headerTitle);
// //headerTitle.textContent = 'hello';
// //headerTitle.innerText = 'welcome';
// //console.log(headerTitle.innerText);
// //headerTitle.innerHTML = '<h2>THE BOSS<h2>'
// //header.style.borderBottom = 'solid 3px yellow';

// //GETELEMENTBYCLASSNAME
// // var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'hello 2';
// // items[1].style.fontWeight = 'bold';
// // items[1].style.color = 'yellow';
// // items[1].style.background = 'grey';

// // for (var i = 0; i < items.length; i++) {
// //     items[i].style.backgroundColor = '#f4f4f4';

// // }


// // var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent = 'hello 2';
// // li[1].style.fontWeight = 'bold';
// // li[1].style.color = 'yellow';
// // li[1].style.background = 'grey';

// // for (var i = 0; i < li.length; i++) {
// //     li[i].style.backgroundColor = '#f4f4f4';

// // }

// //QUERYSELECTOR
// // var header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 4px orangered';

// // var input = document.querySelector('input');
// // input.value = 'hello world';

// // var submit = document.querySelector('input[type="submit"]');
// // submit.value = 'send';

// // var item = document.querySelector('.list-group-item');
// // item.style.color = 'red';

// // var lastitem = document.querySelector('.list-group-item:last-child');
// // lastitem.style.color = 'yellow';

// // var nthItem = document.querySelector('.list-group-item:nth-child(2)');
// // nthItem.style.background = 'orange';


// // //QUERYSELECTORALL
// // var titles = document.querySelectorAll('.title');
// // console.log(titles);
// // titles[0].textContent = 'yo man!';

// // var odd = document.querySelectorAll('li:nth-child(odd)');

// // for (var i = 0; i < odd.length; i++) {
// //     odd[i].style.background = '#f4f4f4';

// // }

// //TRAVERSING THE DOM
// var itemsList = document.querySelector('#items');
// //PARENT NODE
// // console.log(itemsList.parentNode);

// // itemsList.parentNode.style.background = 'orangered';
// // console.log(itemsList.parentNode.parentNode);

// // //PARENT ELEMENT

// // console.log(itemsList.parentElement);

// // itemsList.parentElement.style.background = 'orangered';
// // console.log(itemsList.parentElement.parentElement);

// // //CHILD NODES
// // // console.log(itemsList.childNodes);
// // console.log(itemsList.children);
// // console.log(itemsList.children[1]);
// // itemsList.children[1].style.background = 'violet';

// // // //FIRST CHILD
// // console.log(itemsList.firstChild);
// // console.log(itemsList.firstElementChild);


// // // console.log(itemsList.nextSibling);
// // console.log(itemsList.nextElementSibling);

var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello g';

//add attr
newDiv.setAttribute('title', 'hello my g');

//add text
var newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);

var contain = document.querySelector('header .comtainer');
var h1 = document.querySelector('header h1');


contain.insertBefore(newDiv, h1);
console.log(newDiv);
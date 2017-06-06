var list = document.getElementById('list');
var add = document.getElementById('addElement');
var listElement= list.getElementsByTagName('li'),

function addList() {
    var newElement = listElement.lenght;
    list.innerHTML += '<li>item' + (newElement) + '</li>'
};

add.addEventListener('click', addList);
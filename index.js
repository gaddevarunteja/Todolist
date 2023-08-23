// Function to add delete buttons for each list item
function appendDeleteButtons() {
    var list_items = document.getElementsByTagName('LI');
    for(var i = 0; i < list_items.length; i++) {
        var deleteElement = document.createElement("SPAN");
        var txt = document.createTextNode('\u00d7');
        deleteElement.classList.add('deleteBtn');
        deleteElement.appendChild(txt);
        list_items[i].appendChild(deleteElement);
    }
}
appendDeleteButtons();

// Delete List Item Listener function which deletes list item onclick
function deleteListItemListener() {
    var delete_items = document.getElementsByClassName('deleteBtn');
    for(var i = 0; i < delete_items.length; i++) {
        delete_items[i].onclick = function() {
            this.parentElement.remove();
            // this.parentElement.style.display = "none";
            todoListSize();
        }
    }
}
deleteListItemListener();

// Check a list item onclick
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});

// add an item to list
function addItemToList() {
    var li = document.createElement('LI');
    var todo_item = document.getElementById('itemId').value;
    var txt = document.createTextNode(todo_item);
    li.appendChild(txt);
    if(todo_item === '') {
        alert('You must Enter To Do List Item');
    } else {
        document.getElementById('todo-ul').appendChild(li);
    }
    document.getElementById('itemId').value = "";
    appendDeleteButtons();
    deleteListItemListener();
    todoListSize();
}

// size of to-do list(number of to-do items in list)
function todoListSize() {
    var sz = document.getElementsByTagName('li').length;
    document.getElementById('sz').innerHTML = sz;
}

todoListSize();
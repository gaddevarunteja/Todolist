function appendDeleteButton(li) {
    var deleteElement = document.createElement("SPAN");
    var txt = document.createTextNode('\u00d7');
    deleteElement.classList.add('deleteBtn');
    deleteElement.appendChild(txt);
    li.appendChild(deleteElement);
    return deleteElement;
}
// Function to add delete buttons for each list item
function appendDeleteButtons() {
    var list_items = document.getElementsByTagName('LI');
    for(var i = 0; i < list_items.length; i++) {
        appendDeleteButton(list_items[i]);
    }
}
appendDeleteButtons();

function deleteListItemListener(delete_item) {
    delete_item.onclick = function() {
        this.parentElement.remove();
        // this.parentElement.style.display = "none";
        todoListSize();
    }
}
// Delete List Item Listener function which deletes list item onclick
function deleteListItemsListener() {
    var delete_items = document.getElementsByClassName('deleteBtn');
    for(var i = 0; i < delete_items.length; i++) {
        deleteListItemListener(delete_items[i]);
    }
}
deleteListItemsListener();

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
    var deleteButton = appendDeleteButton(li);
    deleteListItemListener(deleteButton);
    todoListSize();
}

// size of to-do list(number of to-do items in list)
function todoListSize() {
    var sz = document.getElementsByTagName('li').length;
    document.getElementById('sz').innerHTML = sz;
}

todoListSize();
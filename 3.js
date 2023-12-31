var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var listItems = itemList.querySelectorAll("li");

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('newItem').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem+' '+newItem1));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  var editButton = document.createElement("button");
  editButton.className = "btn btn-warning btn-sm float-right edit";
  editButton.textContent = "Edit";
  editButton.style.background = "green";
  li.appendChild(document.createTextNode(" "));
  li.appendChild(editButton);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


listItems.forEach(function (item) {
  var editButton = document.createElement("button");
  editButton.className = "btn btn-warning btn-sm float-right edit";
  editButton.textContent = "Edit";
  editButton.style.background = "green";
  item.appendChild(document.createTextNode(" "));
  item.appendChild(editButton);
});


var newItemTextBox = document.createElement('input');
        newItemTextBox.type = 'text';
        newItemTextBox.className = 'form-control mr-2';
        newItemTextBox.id = 'newItem';
        document.getElementById('addForm').insertBefore(newItemTextBox, document.getElementById('item').nextSibling);
      
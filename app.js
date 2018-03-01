let todoItemInput = document.getElementById('todoItemInput'),
listRoot = document.getElementById('listRoot');

todoItemInput.onchange = function(){
  let listItem = document.createElement('li');
  let listItemEdit = document.createElement('span');
      listItemEdit.setAttribute('class', 'edit');
  let listItemDelete = document.createElement('span');
      listItemDelete.setAttribute('class', 'remove');

  let listItemText = document.createTextNode(todoItemInput.value);
  let listItemEditText = document.createTextNode('edit');
  let listItemDeleteText = document.createTextNode('delete')

  listItem.appendChild(listItemText);
  listRoot.appendChild(listItem);
  listItemEdit.appendChild(listItemEditText);
  listItem.appendChild(listItemEdit);
  listItemDelete.appendChild(listItemDeleteText);
  listItem.appendChild(listItemDelete);
  todoItemInput.value = '';
  listRoot.addEventListener('click', editButtonClick);
  listRoot.addEventListener('click', deleteButtonClick);
}

function editButtonClick(e){
  if(e.target.getAttribute('class')=='edit'){
    e.target.innerText = '';
    let editInputElement = document.createElement('input');
    let editInputHandle = listRoot.getElementsByTagName('input');
    let trimDeleteString = [];
    for(let i = 0;i < e.target.parentNode.innerText.length - 6;i++){
      trimDeleteString.push(e.target.parentNode.innerText[i])
    }
    editInputElement.setAttribute('value', trimDeleteString.join(''));
    e.target.parentNode.appendChild(editInputElement);
    let parentListItemHandle = e.target.parentNode;
    editInputHandle[0].onchange = function(){
      e.target.parentNode.innerText = this.value;

      let listItemEditAgain = document.createElement('span');
      let listItemDeleteAgain = document.createElement('span');
      listItemEditAgain.setAttribute('class', 'edit');
      listItemDeleteAgain.setAttribute('class', 'remove');
      let listItemEditTextAgain = document.createTextNode('edit');
      let listItemDeleteTextAgain = document.createTextNode('delete');
      listItemEditAgain.appendChild(listItemEditTextAgain);
      listItemDeleteAgain.appendChild(listItemDeleteTextAgain);
      parentListItemHandle.appendChild(listItemEditAgain)
      parentListItemHandle.appendChild(listItemDeleteAgain);
    }
  }
}
function deleteButtonClick(e){
  if(e.target.getAttribute('class')=='remove'){
    e.target.parentNode.remove();
  }
}

// const todovalues=document.getElementById('todovalues');
// const todoInput=document.getElementById('todoinput');


// function addtodo(textcontent){

// }





// todoInput.addEventListener('keypress',(e)=>{
//   if (e.key == 'Enter'){
//    const todoValue = todoInput.value.trim();
//     if (todoValue == ''){
//       alert('Enter a todo')
//     }else{
//       element=document.createElement('div');
//       element.className='todolist';
//       element.textContent=todoValue;
//       todovalues.appendChild(element);
//       element=document.createElement('button')
//       element.textContent= 'X'
//       element.className="deletebutton"
//       todovalues.appendChild(element)
//     todoInput.value = '';
//    }
// };
// });


let todoInput = document.getElementById('todoinput');
const todoDiv = document.querySelector('#todosdiv');
const todo_value= document.querySelector('.todo_value');
// const errorValue = document.querySelector('.error');
let todos = [];
// let errorMessageDisplayed = false; // Flag to track if error message is displayed

// Function to load todos from local storage
function loadTodos() {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  if (storedTodos) {
    todos = storedTodos;
    // Display stored todos
    todos.forEach(todo => addTodoElement(todo));
  }
}

// Function to save todos to local storage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodoElement(todoText) {
  const todoElement = document.createElement('div');
  todoElement.className = 'todo_value';
  

  const todotextelement=document.createElement('div');
  todotextelement.className='todotxt'
  todotextelement.textContent=todoText;

  // Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete_button';
  deleteButton.innerText = '❌';
  deleteButton.addEventListener('click', () => {
    removeTodoElement(todoElement);
    removeTodoFromList(todoText);
  });

  // Create a checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      todotxt.style.textDecoration = 'line-through';
    } else {
      todotxt.style.textDecoration = 'none';
    }
  });

  // Append delete button and checkbox to the todoElement
  todoElement.appendChild(checkbox);
  todoElement.appendChild(todotextelement)
  todoElement.appendChild(deleteButton);
  
  

  // Append todoElement to the todoDiv
  todoDiv.appendChild(todoElement);
}


function addTodo(todoText) {
  todos.push(todoText);
  addTodoElement(todoText);
  saveTodos();
}

function removeTodoElement(todoElement) {
  todoDiv.removeChild(todoElement);
}

function removeTodoFromList(todoText) {
  todos = todos.filter(todo => todo !== todoText);
  saveTodos();
}


todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    let todoValue = todoInput.value;

    if (todoValue !== '') {
      addTodo(todoValue);

      todoInput.value = '';
    } else{
      alert("Enter todo value!!")
    }
  }
});

// Load todos when the page loads
window.addEventListener('load', loadTodos);

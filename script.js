/* 
kommentar 
for 
fleire
linjer
*/

// Kommentar for ein linje


console.log("Hello")


// Lager ein variabel som lagrer at den henter eit element fra HTML med id-navn addTodo
const addTodo = document.getElementById("addTodo") // Lager ein variabel som lagrer at den henter eit element fra HTML med #addTodo
console.log(addTodo)

addTodo.addEventListener("click", function (event) {
  event.preventDefault()
  const todoInput = document.getElementById("todoInput")
  // Gjør ein sjekk så man ikkje kan lage tomme elementer, .length > 0 gjør at det må være noe skrivd inn i input og .trim() tar vekk mellomrom så man ikkje kan lage element med kun mellomrom.
  if (todoInput.value.trim().length > 0 ) {
    event.preventDefault()
    console.log("click")

    console.log(todoInput)
    const todoInputValue = todoInput.value
    console.log(todoInputValue)

    const todoItem = document.createElement("li")
    todoItem.setAttribute("draggable", "true")
    todoItem.classList.add(".sortable-item")
    console.log(todoItem)
    todoItem.textContent = todoInputValue

    const deleteTodo = document.createElement("button")
    deleteTodo.textContent = "X"
    deleteTodo.addEventListener("click", function () {
        todoItem.remove()
    })

    const doneTodo = document.createElement("button")
    doneTodo.textContent = "gjort"
    doneTodo.addEventListener("click", function () {
        todoItem.classList.toggle('done')
    })

    const todoDisplay = document.getElementById("todoDisplay")
    console.log(todoDisplay)

    todoItem.appendChild(doneTodo)
    todoItem.appendChild(deleteTodo)
    todoDisplay.appendChild(todoItem) 
  }
    

})

const list = document.querySelector('#todoDisplay');
let draggingItem = null;

list.addEventListener('dragstart', (e) => {
  draggingItem = e.target;
  e.target.classList.add('dragging');
});

list.addEventListener('dragend', (e) => {
  e.target.classList.remove('dragging');
  document.querySelectorAll('.sortable-item').forEach(item => item.classList.remove('over'));
  draggingItem = null;
});

list.addEventListener('dragover', (e) => {
  e.preventDefault();
  const draggingOverItem = getDragAfterElement(list, e.clientY);

  // Remove .over from all items
  document.querySelectorAll('.sortable-item').forEach(item => item.classList.remove('over'));

  if (draggingOverItem) {
    draggingOverItem.classList.add('over'); // Add .over to the hovered item
    list.insertBefore(draggingItem, draggingOverItem);
  } else {
    list.appendChild(draggingItem); // Append to the end if no item below
  }
});


  function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('.sortable-item:not(.dragging)')];
  
      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
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
    console.log("click")

    const todoInput = document.getElementById("todoInput")
    console.log(todoInput)
    const todoInputValue = todoInput.value
    console.log(todoInputValue)

    const todoItem = document.createElement("li")
    console.log(todoItem)
    todoItem.textContent = todoInputValue

    const deleteTodo = document.createElement("button")
    deleteTodo.textContent = "X"
    deleteTodo.addEventListener("click", function () {
        todoItem.remove()
    })

    const todoDisplay = document.getElementById("todoDisplay")
    console.log(todoDisplay)

    todoItem.appendChild(deleteTodo)
    todoDisplay.appendChild(todoItem)
    
})
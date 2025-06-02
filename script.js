console.log("Hello")

const addTodo = document.getElementById("addTodo")
console.log(addTodo)

addTodo.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("click")

    const todoInput = document.getElementById("todoInput")
    console.log(todoInput)
    const todoInputValue = todoInput.value
    console.log(todoInputValue)

    const todoDisplay = document.getElementById("tododDisplay")
    console.log(todoDisplay)
    todoDisplay.textContent = todoInputValue
})
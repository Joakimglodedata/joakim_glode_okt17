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

let todoItemValues = []
console.log(todoItemValues)

addTodo.addEventListener("click", function (event) {
  event.preventDefault()
  console.log(todoItemValues)
  const todoInput = document.getElementById("todoInput")
  // Gjør ein sjekk så man ikkje kan lage tomme elementer, .length > 0 gjør at det må være noe skrivd inn i input og .trim() tar vekk mellomrom så man ikkje kan lage element med kun mellomrom.
  if (todoInput.value.trim().length > 0 /*&& todoItemValues != todoInput.value */) {
    event.preventDefault()
    console.log("click")

    console.log(todoInput)
    const todoInputValue = todoInput.value
    console.log(todoInputValue)

    const todoItem = document.createElement("li")
    console.log(todoItem)
    todoItem.textContent = todoInputValue
    todoItemValues.push(todoInputValue)
    console.log(todoItemValues)

    const deleteTodo = document.createElement("button")
    deleteTodo.textContent = "X"
    deleteTodo.addEventListener("click", function () {
        todoItem.remove()
      todoItemValues = todoItemValues.filter(element => element ==! todoInputValue)

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

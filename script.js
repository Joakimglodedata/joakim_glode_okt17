/* 
kommentar 
for 
fleire
linjer
*/

// Kommentar for ein linje


// console.log("Hello")


// Lager ein variabel som lagrer at den henter eit element fra HTML med id-navn addTodo
const addTodo = document.getElementById("addTodo") // Lager ein variabel som lagrer at den henter eit element fra HTML med #addTodo
console.log(addTodo)

// Setter opp ein array som fylles med teksten på gjøremål, bruker dette for å hindre at man kan produsere duplikat opplistinger.
let todoItemValueList = []
// console.log(todoItemValueList)

// Når knappen blir klikket blir siden ikkje lastet inn på nytt og den kjører funksjonen makeItem
addTodo.addEventListener("click", () => {
  event.preventDefault()
  makeItem ()
})

// Knapp som bruker arrays for å endrer teksten i todoInput og kjører makeItem, kva element den tar fra array'ene er tileldig og vi kan enkelt putte inn fleire verdier den kan bruke. 
// Ingen logikk i kva som blir plukket ut, men dette er meir ein gøy funksjon en noe faktisk hjelpsomt, kunne brukt (if) eller lignende for å gjøre utvalget av suffixer avhengig av kva prefix som først er valgt
addRandom.addEventListener("click", () => {
  event.preventDefault()
  const todoInput = document.getElementById("todoInput")
  const prefix = ["Vaske", "Støvsuge", "Rydde", "Børste", "Lage", "Fikse", "Hente"]
  const suffix = ["stuen", "kjørl", "mat", "kjeledyr", "inngangsdøren", "loftet"]

  todoInput.value = prefix[Math.floor(Math.random() * (prefix.length - 1))] + " " + suffix[Math.floor(Math.random() * (suffix.length - 1))]
  //console.log(prefix.length)
  makeItem ()
})

// Med å lage makeItem som ein separat funsksjon kan man enkelt legge til fleire måter å aktivere den, gjør spesielt testing mye simplere siden eg kan kjøre funksjonen når eg åpner siden med å legge in makeItem ().
function makeItem () {
  const todoInput = document.getElementById("todoInput")
  // Gjør ein sjekk så man ikkje kan lage tomme elementer, .length > 0 gjør at det må være noe skrivd inn i input og .trim() tar vekk mellomrom så man ikkje kan lage element med kun mellomrom.
  if (todoInput.value.trim().length > 0 && todoItemValueList.includes(todoInput.value) != true) {  
  console.log("click")
  console.log(todoInput)
  const todoInputValue = todoInput.value
  console.log(todoInputValue)

  const todoItem = document.createElement("li")
  console.log(todoItem)
  todoItem.textContent = todoInputValue
  todoItemValueList.push(todoInputValue)
  console.log(todoItemValueList)

  const deleteTodo = document.createElement("button")
  deleteTodo.textContent = "X"
  // Når knappen blir klikket tar den vekk todoItem elementet den blei produsert med, og redefinerer todoItemValueList uten todoInputValue som blei brukt for å lage det todoItem elementet 
  deleteTodo.addEventListener("click", function () {
      todoItem.remove()
    todoItemValueList = todoItemValueList.filter(element => element != todoInputValue)
  })

  // Lager ein knapp som kan toggle ein klasse som stryker ut teksten på TodoItem
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
}
makeItem ()


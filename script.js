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


// Knapp som bruker arrays for å endre teksten i todoInput og kjører makeItem, kva element den tar fra array'ene er tileldig og vi kan enkelt putte inn fleire verdier den kan bruke. 
// Ingen logikk i kva som blir plukket ut, men dette er meir ein gøy funksjon en noe faktisk hjelpsomt, kunne brukt (if) eller lignende for å gjøre utvalget av suffixer avhengig av kva prefix som først er valgt
addRandom.addEventListener("click", () => {
  event.preventDefault()
  const todoInput = document.getElementById("todoInput")
  const prefix = ["Vaske", "Støvsuge", "Rydde", "Børste", "Lage", "Fikse", "Hente", "Lufte", "Stryke", "Male"]
  const suffix = ["stue", "kjørl", "mat", "kjeledyr", "inngangsdør", "loft", "planter", "bil", "klær", "vegg"]
  // Math random generer nummer fra og med 0 og opp til men ikkje inkludert 1, ganger det med lengden på den relevante array'en for å øke rekkeviden også Math.floor runder det ned til eit helt tall
  todoInput.value = prefix[Math.floor(Math.random() * (prefix.length))] + " " + suffix[Math.floor(Math.random() * (suffix.length))]
  //console.log(prefix.length)

  // Før vi generer eit liste element sjekker vi om den genererte teksten allerede er lista, sjekken blir gjort i makeItem() også men der gjir det ein feilmelding og det virker tullete å gji for element nettsiden har generert
  // Kunne sette den til å generere ein ny tekst når sjekken feiler, men ser for meg det kan være problematisk om alle mulige tekster den kan generere allerede er laget.
  if (todoItemValueList.includes(todoInput.value) != true) {
    makeItem ()
  }
})

// Med å lage makeItem som ein separat funsksjon kan man enkelt legge til fleire måter å aktivere den, gjør spesielt testing mye simplere siden eg kan kjøre funksjonen når eg åpner siden med å legge in makeItem ().
function makeItem () {
  const todoInput = document.getElementById("todoInput")
  // Gjør ein sjekk så man ikkje kan lage tomme elementer, .length > 0 gjør at det må være noe skrivd inn i input og .trim() tar vekk mellomrom så man ikkje kan lage element med kun mellomrom.
  if (todoInput.value.trim().length > 0 && todoItemValueList.includes(todoInput.value) != true) {  
  const todoInputValue = todoInput.value
  console.log(todoInputValue)

  // Skaper eit liste element som blir tilgjit teksten som er i todoInputValue når man funksjonen blir aktivert
  const todoItem = document.createElement("li")
  console.log(todoItem)
  todoItem.textContent = todoInputValue
  todoItemValueList.push(todoInputValue)
  console.log(todoItemValueList)

  const deleteTodo = document.createElement("button")
  deleteTodo.textContent = "X"
  // Når knappen blir klikket tar den vekk forelder todoItem elementet, og redefinerer todoItemValueList uten todoInputValue som blei brukt for å lage det todoItem elementet 
  deleteTodo.addEventListener("click", function () {
      todoItem.remove()
    todoItemValueList = todoItemValueList.filter(element => element != todoInputValue)
  })

  // Lager ein knapp som kan toggle ein klasse som stryker ut teksten på forelder TodoItem
  const doneTodo = document.createElement("button")
  doneTodo.textContent = "gjort"
  doneTodo.addEventListener("click", function () {
      todoItem.classList.toggle('done')
  })

  const todoDisplay = document.getElementById("todoDisplay")
  console.log(todoDisplay)

  // Legger til dei genererte elementene under ein forelder 
  todoItem.appendChild(deleteTodo)
  todoItem.appendChild(doneTodo)
  todoDisplay.appendChild(todoItem) 
  } 
  // Gjir ein feilmelding for å informere at det ikkje er tillat å lage fleire element med samme tekst
  // Tenker det er unnødvendig å gji feilmelding når feltet er tomt siden det er noe man hovedsakelig gjør med uhell
  else if (todoItemValueList.includes(todoInput.value) === true) {
    // console.log(randomOutput)
    // console.log(todoInput.value)
    window.alert("Allerede eit gjøremål")
  }
}



document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const tasks = []

//As a user, I should be able to type a task into the input field.
//As a user, I should be able to click some form of a submit button.
//As a user, the task string that I provided should appear on the DOM after the submit button has been activated.
const form = document.querySelector('form#create-task-form')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const id 
  const description = event.target[0].value

  const newTaskObject = { 
    id: (tasks.length - 1)+ 1,
    name: description 
  }

  function renderTask (newTaskObject) {
    const li = document.createElement('li')
    li.dataset.id = newTaskObject.id 
    li.innerHTML = newTaskObject.name

    const ul = document.querySelector('ul#tasks')
    
    ul.appendChild(li)
  }

  tasks.push(newTaskObject)

  renderTask(newTaskObject)
  
  form.reset()
})

//A delete function that will remove tasks from your list


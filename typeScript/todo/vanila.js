const qs = (query) => {
  return document.querySelector(query)
}
const qsa = (query) => {
  return document.querySelectorAll(query)
}
const log = (val) => {
  console.log(val)
}

let todos = []

const addTodo = (evt) => {
  const id = Date.now()
  const title = qs('input[type=text]').value
  const date = qs('input[type=date]').value
  const done = false
  const todo = {
    id, //id : id
    title,//title: title
    date, //date: date
    done, //done: done
  }
  todos.unshift(todo)//todos.push(todo)
  evt.target.reset()
  qs('input[type=text]').focus()
  log(todos)
}//addTodo

const printTodo = () => {
  qs('ul').innerHTML = ''
  todos.forEach((todo) => {
    qs('ul').insertAdjacentHTML('beforeend', `
      <li class="li${todo.id}">
        <p>
          <input type="checkbox" value="${todo.id}">
          ${todo.title} 
          (${todo.date})
          <button value="${todo.id}">${todo.id}삭제</button>
        </p>
      </li>
    `)
  })
}//addTodo

const deleteBtnClickHandler = () => {
  qsa('ul button').forEach((btn) => {
    btn.addEventListener('click', e => {
      todos = todos.filter((todo) => {
        return todo.id !== parseInt(e.target.value)
      })//filter
      //e.target.parentElement.remove()
      //qs(`.li${e.target.value}`).remove()
      e.target.closest('li').remove()
    })//addEventListener
  })//forEach
}//deleteBtnClickHandler

qs('form').addEventListener('submit', e => {
  e.preventDefault()
  addTodo(e)
  printTodo()
  deleteBtnClickHandler()
})//submit






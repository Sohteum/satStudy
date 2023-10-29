interface Todo{
  id: number, 
  title: string, 
  date: string,
  done: boolean,
  tel?: string
}

const qs = (query: string): HTMLElement => {
  return document.querySelector(query) as HTMLElement
}

const qsa = (query: string): NodeList => {
  return document.querySelectorAll(query)
}
const log = (val: any): void => {
  console.log(val)
}

let todos: Todo[] = []

const addTodo = (evt: Event): void => {
  const id = Date.now()
  const title = (qs('input[type=text]') as HTMLInputElement).value
  const date = (qs('input[type=text]') as HTMLInputElement).value
  const done = false
  const todo = {
    id, //id : id
    title,//title: title
    date, //date: date
    done, //done: done
  }
  todos.unshift(todo);//todos.push(todo)
  (evt.target as HTMLFormElement).reset()
  qs('input[type=text]').focus()
  log(todos)
}//addTodo

const printTodo = () => {
  qs('ul').innerHTML = ''
  todos.forEach((todo: Todo) => {
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
  qsa('ul button').forEach((btn: Node) => {
    btn.addEventListener('click', (e: Event) => {
      todos = todos.filter((todo: Todo) => {
        return todo.id !== parseInt((e.target as HTMLButtonElement).value)
      });//filter
      ((e.target as HTMLButtonElement).closest('li') as HTMLElement).remove()
    })//addEventListener
  })//forEach
}//deleteBtnClickHandler

qs('form').addEventListener('submit', e => {
  e.preventDefault()
  addTodo(e)
  printTodo()
  deleteBtnClickHandler()
})//submit
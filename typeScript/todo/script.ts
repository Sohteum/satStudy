interface Todo {
  id: number,
  title: string,
  date: string,
  done: boolean,
  tel?: string //이건 들어가도 안들어가도 됨
}
//특정 타입을 임의로 만드는 것
//객체닷.
//아이디가 들어가고, ...하나씩 선언

const qs = (query: string): HTMLElement => {
  return document.querySelector(query) as HTMLElement
  // if(document.querySelector(query)){
  //    return document.querySelector(query) as HTMLElement }
}//함수의 파라미터는 반드시 타입을 지정한다, 리턴값은 밖에 선언, as 쓰면 as단언이라고 html이 나올거다 라고 단언하는것. html요소가 분명이 존재합니다. 라는 뜻
const qsa = (query: string): NodeList => {
  return document.querySelectorAll(query)
}
const log = (val: any): void => {
  console.log(val)
}//이건 아무거나 다 들어가야 하니까 애니//리턴을 하지 않으면 보이드 적기

let todos: Todo[] = []
//object로 들어가는 배열이다.

const addTodo = (evt: Event): void => {
  const id = Date.now()
  const title = (qs('input[type=text]') as HTMLInputElement).value
  //value는 폼요소만 쓸수있으니까 그외의 것은 value적을수없기에...
  const date = (qs('input[type=date]') as HTMLInputElement).value
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
  qsa('ul button').forEach((btn: Node) => { //qsa로 찾은건 노드리스트, 그거 하나는 노드
    btn.addEventListener('click', (e: Event) => { //타입을 선언할때는 파라미터가 하나여도 괄호를 해주어야함
      todos = todos.filter((todo: Todo) => {
        return todo.id !== parseInt((e.target as HTMLButtonElement).value)
        //
      });//filter
      //e.target.parentElement.remove()
      //qs(`.li${e.target.value}`).remove()
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






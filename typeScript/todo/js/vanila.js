const qs = (query) => {
  return document.querySelector(query)
}
const qsa = (query) => {
  return document.querySelectorAll(query)
}

const log = (val) => {
  console.log(val)
}
//이렇게 유틸리티로 만들어서 사용할 수 있음


let todos = [

]

const addTodo = (evt) => {
  const id = Date.now()
  const title = qs('input[type=text]').value
  const date = qs('input[type=date]').value
  const done = false
  const todo = {
    id,
    title,
    date,
    done
  }
  todos.unshift(todo)
  evt.target.reset()
  qs('input[type=text]').focus()
  log(todos)
}

const printTodo = () => {
  qs('ul').innerHTML = ''
  todos.forEach((todo) => {
    qs('ul').insertAdjacentHTML('beforeend', `
    <li>
    <input type="checkbox" value="${todo.id}">
    ${todo.title} (${todo.date})
    <button value="${todo.id}">삭제</button>
    </li>`)
  })//배열에는 포이치, 요즘은 어펜드말고 어드제이슨트
}

const deleteBtnClickHandler = () => {
  qsa('ul button').forEach((btn) => {
    btn.addEventListener('click', e => {
     todos = todos.filter((todo) => {
        return todo.id !== parseInt(e.target.value)
      })
      e.target.parentElement.remove()
    })
  })
  //쿼리셀렉터 올로 찾으면, 버튼은 여러개라서 노드리스트라는 배열로 나옴. 유사배열임. 포이치 사용가능
}

qs('form').addEventListener('submit', (e) => {
  e.preventDefault()
  addTodo(e)
  printTodo()

})



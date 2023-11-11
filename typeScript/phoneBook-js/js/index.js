import { addPhoneBook, getPhoneBook, printPhoneBook, qs } from "./functions.js";




let phoneBook = await getPhoneBook()
printPhoneBook(phoneBook)
//모듈방식이라서 에이싱크랑 어웨잇을 같이 쓸 필요가 없다.

qs('.add-form').addEventListener('submit', async(e) => {
  e.preventDefault();
  let id = Date.now()
  let name = qs('.name').value
  let mobile = qs('.mobile').value
  let etc = qs('.etc').value
  let phoneNumber = {
    id,
    name,
    mobile,
    etc,
  }
  phoneBook = await addPhoneBook(phoneBook, phoneNumber)
  printPhoneBook(phoneBook)
})
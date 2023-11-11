import { addPhoneBook, getPhoneBook, printPhoneBook, qs } from "./functions.js";




let phoneBook = await getPhoneBook()
printPhoneBook(phoneBook)
//모듈방식이라서 에이싱크랑 어웨잇을 같이 쓸 필요가 없다.

qs('.add-form').addEventListener('submit', async(e) => {
  e.preventDefault();
  let id = Date.now()
  let name = (qs('.name')as HTMLInputElement).value
  let mobile = (qs('.mobile')as HTMLInputElement).value
  let etc = (qs('.etc')as HTMLInputElement).value
  let phoneNumber = {
    id,
    name,
    mobile,
    etc,
  }
  phoneBook = await addPhoneBook(phoneBook, phoneNumber)
  printPhoneBook(phoneBook)
})

//value는 인풋이나 버튼에만 쓰는데 디브면 어쩔꺼야?라고 에러가 나는거
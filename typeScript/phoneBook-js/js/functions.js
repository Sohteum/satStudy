
export const qs = (selector) => {
  return document.querySelector(selector)
}

// common
export const getPhoneBook = () => {

  return new Promise((resolve) => {
    let phoneBook = window.localStorage.getItem('phoneBook')
    if (phoneBook) {
      resolve(JSON.parse(phoneBook))
      //resolve는 이제 실행해도된다는뜻
    } else {
      resolve([
        {
          id: 1,
          name: 'sample name',
          mobile: '000-0000-0000',
          etc: '000-0000-0000'

        },

      ])
    }//if else
  })//promise


}
//이미 데이터가 있으면 가져와서 제이슨으로 리턴하고, 아니면 빈배열로 시작한다

// index


export const printPhoneBook = (phoneBook) => {
  qs('.print').innerHTML='';
  phoneBook.forEach(phoneNumber=>{
    qs('.print').insertAdjacentHTML('beforeend', `
    <li>
    <p>이름 : ${phoneNumber.name}</p>
    <p>핸드폰 : ${phoneNumber.mobile}</p>
    <p>기타 : ${phoneNumber.etc}</p>
    
    </li>
    `)
  })
}

export const addPhoneBook =(phoneBook, phoneNumber)=>{
return new Promise(resolve=>{
  phoneBook.unshift(phoneNumber)
  localStorage.setItem('phoneBook', JSON.stringify(phoneBook))
  resolve(phoneBook)
})

}
//자바스크립트 파일을 제이슨으로 바꿀땐 stringify

// detail
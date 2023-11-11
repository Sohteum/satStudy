import { PhoneNumber } from './type';
//타입 임폴트할때 .js쓰면 안됨


export const qs = (selector: string): HTMLElement => {
  return document.querySelector(selector) as HTMLElement
  // return document.querySelector(selector) as HTMLElement
  // HTMLElement | null
}
//타입가드할때랑 변수함수선언할때만 써주면 됨. 근데 파람에는 꼭적게되어있음. 이벤트리스너는 굳이 적을 필요없음




// common
export const getPhoneBook = (): Promise<PhoneNumber[]> => {
//넘겨줄게 없을때는 보이드. 아니면 내가 넘기고 싶은 데이터형태
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
  ;

// index

export const printPhoneBook = (phoneBook:PhoneNumber[]): void => {
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


export const addPhoneBook =(phoneBook:PhoneNumber[], phoneNumber:PhoneNumber): Promise<PhoneNumber[]>=>{
  return new Promise(resolve=>{
    phoneBook.unshift(phoneNumber)
    localStorage.setItem('phoneBook', JSON.stringify(phoneBook))
    resolve(phoneBook)
  })
  
  }

// detail
/* 
 */
/* {

  function 알림창열기(구멍) {
    document.getElementById('alert').style.display = 구멍;
    //이렇게 사용하면 구멍안에 none도 넣고 block도 넣고 다넣어
    //함수를 여러개 만들기 싫을 때 사용하면되지만 필수는 아님
  }

  document.getElementById('open1').addEventListener('click', e => {
    document.querySelector('div').innerHTML = '아이디입력하세요'
    document.querySelector('div').style.display = 'block'

  })
  document.getElementById('open2').addEventListener('click', e => {
    document.querySelector('div').innerHTML = '비번입력하세요'
    document.querySelector('div').style.display = 'block'

  })
  document.querySelector('div button').addEventListener('click', e => {
    document.querySelector('div').style.display = 'block'
  })
} */

/* {
  function plus(구멍) {
    2 + 구멍
  } 
  plus(1)

} */

{


  document.querySelector(`.open`).addEventListener('click', e => {
    document.querySelector(`.black-bg`).classList.add('show-modal')
  })


  document.querySelector(`.btn-danger`).addEventListener('click', function (e) {
    document.querySelector(`.black-bg`).style.visibility = 'hidden'
  })

  
    document.getElementById('send').addEventListener('click',function(e) {
      console.log(tt);
      if (document.getElementById('email').value() == '') {
        alert('아이디와 비밀번호를 입력해주세요')
      } else {
        alert('안녕!')
      }
    })//비번 글자수가 6미만이면 더 길게 입력하라고 안내문 띄우기
}

{

}
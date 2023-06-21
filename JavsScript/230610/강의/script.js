// document.addEventListener('DOMContentLoaded'),

//이거는 디퍼랑 똑같은거

//전송버튼 누르면
//인풋에 입력한 값이 공백이면 알림창 띄워주세요
document.querySelector('button').addEventListener('click', e => {

  if (!document.getElementById('.text').value == '') {
    alert('내용을 입력해주세요')
  }
  if (document.getElementsById('.password').value.length < 7) {
    alert('비번은 6자리 이상으로 해주세요')
  }
  /*  
   if (document.querySelector('input').value == '') {
      alert('내용을 입력해주세요')
    } 
     */

  //패스워드입력란도 같이 내용 입력되도록 하기
  //비번 6자리 미만이면 alert되도록 하기 value.length 로 체크가능
})

{

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
}

{
  function plus(구멍) {
    2 + 구멍
  }
  plus(1)

}

{


document.querySelector(`.open`).addEventListener('click', function(){
  document.querySelector(`.black-bg`).style.display = 'none'
})

document.querySelector(`.btn-danger`).addEventListener('click', function(){
  document.querySelector(`.black-bg`).toggle.classList('show-modal')
})
/* document.querySelector(`.btn-danger`).addEventListener('click', function(){
  document.querySelector(`.black-bg`).add.classList('show-modal')
}) */

}
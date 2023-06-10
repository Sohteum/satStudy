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

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

// $('#login').on('click', function(){
//   $('.black-bg').addClass('show-modal')
// })
$('#login').on('click', function () {
  document.querySelector('.black-bg').classList.add('show-modal')
})
$('#close').on('click', function () {
  document.querySelector('.black-bg').classList.remove('show-modal')
})
//검은배경 누르면 모달창이 없어지도록 하기
$(".black-bg").on('click', function () {
  document.querySelector('.black-bg').classList.remove('show-modal')
})

e.target;//내가 실제로 누른곳
e.currentTarget;//이벤트리스너가 잘린곳
//this
e.preventDefault();//이벤트 기본동작막아줌
e.stopPropagation();//내 상위ㅇㅛ소로 이벤트 막아줌


if(e.target== document.querySelector('.blak-bg')){
document.querySelector('.black-bg').classList.remove('show-modal')
}
//자식을 클릭하면 부모까지 다 클릭한거야. 그게 이벤트버블링




{

/* 
  document.querySelector(`.open`).addEventListener('click', e => {
    document.querySelector(`.black-bg`).classList.add('show-modal')
  }) */


  document.querySelector(`.btn-danger`).addEventListener('click', function (e) {
    document.querySelector(`.black-bg`).style.visibility = 'hidden'
  })


  document.getElementById('send').addEventListener('click', function (e) {
    console.log(tt);
    if (document.getElementById('email').value() == '') {
      alert('아이디와 비밀번호를 입력해주세요')
    } else {
      alert('안녕!')
    }
  })//비번 글자수가 6미만이면 더 길게 입력하라고 안내문 띄우기
} 


let 지금사진 = 1


$('.slide-1').on('click', function () {
  $('.slide-container').css('transform', 'translateX(0vw)');
})
$('.slide-2').on('click', function () {
  $('.slide-container').css('transform', 'translateX(-100vw)');
})
$('.slide-3').on('click', function () {
  $('.slide-container').css({ 'transform': 'translateX(-200vw)' })
})
// 다음버튼 누르면 지금 보이는 사진이 1이면 2번 사진 보여주세요
//다음버튼 누르면 지금 보이는 사진이 2이면 3번 사진 보여주세요
//다음버튼 누르면 지금 보이는 사진이 3이면 1번사진 보여주세요
$('.next').on('click', function () {
  if (지금사진 == 1) {
    지금사진++
    $('.slide-container').css({ 'transform': `translateX(-100vw)` })
  } else if (지금사진 == 2) {
    지금사진++
    $('.slide-container').css({ 'transform': 'translateX(-200vw)' })
  } else if (지금사진 == 3) {
    지금사진++
    $('.slide-container').css({ 'transform': 'translateX(0vw)' })
  }
})

// $('.next').on('click', function () {
//   지금사진++
//   $('.slide-container').css('transform', `translateX(-'+지금사진+'00vw)`);
// })

function 함수() {
  return 123
}
var 변수 = 함수();
console.log(변수);

function vat(a) {
  var num = (a * 6).toFixed(1)
  return parseInt(num);
}
// console.log(num);


/* 컴은 이진법을 좋아해서 10+20을 둘다 이진법으로 바꾸고 다시 합침 
소수점이 있는 숫자는 하다가 중간에 자르고 반올림시킴 그래서 약간의 오차가 발생 */




// window.addEventListner('scroll', function () {
//   console.log(1);
// })


//문제 : 스크롤바 100px 이상 내리면 로고 폰트사이즈 줄이기
$(window).on('scroll', function () {
  $(window).scrollTop()
})

console.log();


//약관 다 읽으면 alert띄우기
/* div스크롤바내린양 +눈에보이는 div높이 = div의 실제높이 */

$('.lorem').on('scroll', function () {
  var 스크롤양 = document.querySelector('.lorem').scrollTop;
  var 실제높이 = document.querySelector('.lorem').scrollHeight;
  var 높이 = document.querySelector('.lorem').clientHeight;
  if(스크롤양 + 높이 > 실제높이 -10){
    alert('다읽음')
  }
})

/* document.querySelector('html').scrollTop
document.querySelector('html').clientHeight
window.clientHeight */

// 페이지스크롤바 100이상 내리면 로고 폰트 줄이기
$(window).on('scroll', function(){
  if (window.scrollY > 100) {
    $('.navbar-brand').css('font-size', '20px')
  }else{
    $('.navbar-brand').css('font-size', '25px')
  }
})



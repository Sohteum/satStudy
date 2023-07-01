/* 
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
}  */

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

// e.target;//내가 실제로 누른곳
// e.currentTarget;//이벤트리스너가 잘린곳
// //this
// e.preventDefault();//이벤트 기본동작막아줌
// e.stopPropagation();//내 상위ㅇㅛ소로 이벤트 막아줌


// if(e.target== document.querySelector('.blak-bg')){
// document.querySelector('.black-bg').classList.remove('show-modal')
// }
// //자식을 클릭하면 부모까지 다 클릭한거야. 그게 이벤트버블링




// {

// /* 
//   document.querySelector(`.open`).addEventListener('click', e => {
//     document.querySelector(`.black-bg`).classList.add('show-modal')
//   }) */


//   document.querySelector(`.btn-danger`).addEventListener('click', function (e) {
//     document.querySelector(`.black-bg`).style.visibility = 'hidden'
//   })


//   document.getElementById('send').addEventListener('click', function (e) {
//     console.log(tt);
//     if (document.getElementById('email').value() == '') {
//       alert('아이디와 비밀번호를 입력해주세요')
//     } else {
//       alert('안녕!')
//     }
//   })//비번 글자수가 6미만이면 더 길게 입력하라고 안내문 띄우기
// } 


let 지금사진 = 1


// $('.slide-1').on('click', function () {
//   $('.slide-container').css('transform', 'translateX(0vw)');
// })
// $('.slide-2').on('click', function () {
//   $('.slide-container').css('transform', 'translateX(-100vw)');
// })
// $('.slide-3').on('click', function () {
//   $('.slide-container').css({ 'transform': 'translateX(-200vw)' })
// })
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

$('.next').on('click', function () {
  지금사진++
  $('.slide-container').css('transform', 'translateX(-'+지금사진+'00vw)');
})

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
// $(window).on('scroll', function () {
//   $(window).scrollTop()
// })




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


//1. Swiper

 

// 캐러셀 (이미지슬라이드되는거) 만들고 싶으면 직접 코드 짜도 되겠지만

// 좀 이쁘게 아니면 쉽게 여러기능을 만들고 싶으면 Swiper 라이브러리 써도 됩니다.

// 호환 잘되고 이미지 lazy loading 이런 것도 되고 터치/드래그도 됩니다.

 

 

// https://swiperjs.com/get-started#use-swiper-from-cdn

// 여기가서 튜토리얼 그대로 js 파일, css 파일을 다운받아서 첨부한 뒤에

// html css js 예제코드 복사붙여넣기하면 캐러셀이 나옵니다.

// 사용법도 홈페이지 참고하면 됩니다. 

// 2. Chart.js 

 

// 웹페이지에 차트만들고 싶으면 씁니다.

// 실제 서비스면 관리자, admin 페이지 만들 때도 많을텐데 거기서 통계를 이쁘게 보여줄 때 유용하겠군요.

// div 박스에 css 스타일 넣어서 그래프만들고 그림그리고 해도 되겠지만 그럴 바엔 저거 쓰는게 낫습니다. 

// 코인거래소 같은 곳에는 더 프로페셔널한 유료 차트라이브러리 같은걸 쓰기도 합니다. 

 

 

 

// https://cdnjs.com/libraries/Chart.js

// 이런데 가서 js 파일 다운받거나 cdn 버전으로 구해서 html 파일에 넣으면 설치끝입니다.

 

// https://www.chartjs.org/docs/latest/

// 그리고 Chart.js 홈페이지 예제 코드 아무데나 붙여넣기 하면 차트나옴 

// 3. Animate On Scroll

 

// 스크롤 내리면 요소가 서서히 등장하는 애니메이션을 만들고 싶을 때 쓰면 좋습니다.

// 유저가 스크롤바를 ... div 박스 현재 y좌표만큼 내리면 애니메이션 보여달라고 코드짜면 되긴 하는데 귀찮으니까요 

 

// https://github.com/michalsnik/aos

// 여기서 css파일, js 파일 cdn버전 찾아서 html 파일에 넣고

// 그 다음에 밑에 <script> 태그 열어서 

// <script>
//   AOS.init();
// </script>
// 이러면 설치 끝이라는군요 

 

 

// https://michalsnik.github.io/aos/

// 그 다음에 위 사이트에서 예제 코드 따라서 복붙하면 구현 끝인듯요 

// <div data-aos="fade-up"></div>

// 원하는 박스에 이런거 추가하면 된다고합니다. 

// 시간, 방향 설정가능하고 원하는 클래스명 부착도 되는군요 

// 4. EmailJS

 

// 원래 이메일 전송은 서버가 해야하지만 Gmail 이런거 서버를 잠깐 빌리면

// 자바스크립트만으로 이메일 전송이 가능합니다. 

// 유저가 내 이메일 계정으로 이메일 전송도 가능하고 

// 내 이메일 계정으로 남에게 이메일 전송도 가능함 

 

 

// https://www.emailjs.com/docs/introduction/how-does-emailjs-work/

// 이 사이트 가서 가입하고 계정만들고

// 튜토리얼 그대로 복붙하고 거기에 내가 방금 만든 EmailJS 계정아이디만 잘 채우면 됩니다. 

// 5. Lodash

 

// array, object, 문자, 숫자 자료를 다루기 편해지는 기본함수들을 제공해줍니다.

// 예를 들어서 array 자료에 있는 마음에 안드는 'a' 라는 문자를 제거하고 싶으면

// 직접 반복문 돌리거나 filter 함수 쓰거나 그러면 되는건데 

// Lodash 설치해놨으면 그냥 _.pull(어레이자료, 'a'); 쓰면 됩니다. 

 

// https://lodash.com/

// 설치파일은 4kb 밖에 안된다는군요

// 하지만 초보라면 저런거 의존하는것보다 직접 어렵게 반복문 써서 알고리즘 짜는 것도 좋은 연습이 됩니다.

// 6. React 아니면 Vue 

 

// 페이지가 너무 많아서 UI 재활용이 자주 필요한 사이트나

// 모바일 앱처럼 페이지 이동없이 동작하는 Single Page Application을 만들 때 유용한 자바스크립트 라이브러리입니다. 

// 요즘은 원래 용도와 관계없이 마구잡이로 씁니다. 안쓰면 큰일나는줄 아는 사람이 많음

// 사용법은 길어서 홈페이지 내 무료강의 들어보든가 하십시오

//  7. Fullpage.js

 

// 웹페이지를 PPT처럼 만들어줍니다.

// 버튼누르면 다음 슬라이드보여주는데 하지만 이런 UI는 유행이 지났습니다.

// 상업적 이용은 아마 유료임 

 

// https://alvarotrigo.com/fullPage/

// 이건 동작예시

 

// https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs

// 여기서 css, js 파일을 cdn 식으로 설치하거나 그러면 되고

// 예시 html과 js 코드를 복사붙여넣기하면 완성입니다. 



/* 
모든 기존에 있던 orange클래스 제거
버튼0누르면 orange클래스 추가
모든 div에 붙은 show클래스명 제거
div0에 show클래스명 추가
 */
var btn = $('.tab-button')
var content = $('.tab-content')

//셀렉터를 반복하는것은 좋은것이 아님
// for(let i =0; i<3; i++){
//   $('.tab-button').eq(i).on('click', function(){
//    탭열기(i)
//   })
// }

function 탭열기(숫자) {
  btn.removeClass('orange')
  btn.eq(숫자).addClass('orange')
  content.removeClass('show')
  content.eq(숫자).addClass('show')
}

// $('.list').click(function (e) {
//   if (e.target == document.querySelectorAll('.tab-button')[0]) {
//     탭열기(0)
//   }
//   if (e.target == document.querySelectorAll('.tab-button')[1]) {
//     탭열기(1)
//   }
//   if (e.target == document.querySelectorAll('.tab-button')[2]) {
//     탭열기(2)
//   }
// })

$('.list').click(function (e) {
  탭열기(e.target.dataset.id)
})


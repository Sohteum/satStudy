console.log('일반(전역) this : ', this)

function 간지나는함수1() {
  console.log('간지나는함수1 this : ', this)
}
간지나는함수1();


// *전역변수 : 코드 내 모든 곳에서 참조해서 쓸 수 있는 범용적인, 범위가 넓은 변수입니다. 그냥 script태그 내에 쌩으로 var 변수 하나 만들면 그건 자연스레 전역변수가 됩니다.  



function 간지나는함수2() {
  'use strict';
  console.log('간지나는함수2 this : ', this)
}
간지나는함수2();

//strict mode에선 this 키워드를 일반함수 안에서 불렀을 때 undefined라는 값으로 강제로 지정해줍니다. 


var 오브젝트1 = {
  data: 'Kim',
  간지함수: function () { console.log('간지') }
}
오브젝트1.간지함수();

//오브젝트에 들어가는 함수들을 있어보이는 전문용어로 메소드 method라고 칭합니다. 


var 오브젝트11 = {
  data: 'Kim',
  간지함수: function () { console.log('오브젝트11 this : ', this) }
}

오브젝트11.간지함수();

//메소드안에서 this를 쓰시면 this는 메소드를 가지고 있는 오브젝트를 뜻합니다

let 오브젝트2 = {
  data: {
    간지함수: function () { console.log('오브젝트2 this : ', this) }
  }
}
오브젝트2.data.간지함수();//this : 오브젝트2.data

let 오브젝트3 = {
  data: {
    간지함수: () => { console.log('오브젝트3 arrow function this : ', this) }
  }
}
오브젝트3.data.간지함수();//this : window

// (1)
function 간지나는함수3() {
  console.log('간지나는함수3 this : ', this)
}
간지나는함수3()
// (2)
window.간지나는함수4 = function () { console.log('간지나는함수4 this : ', this) };
간지나는함수4()

function 간지나는함수5() {
  console.log('간지나는함수5 this : ', this)
}
간지나는함수5()
함수1();
function 함수1() {
  // console.log(안녕);
  //에러나서 주석처리 실행시 주석해제하고 보세요
  let 안녕 = 'Hello!';
}
//let 변수는 hoisting 되지만 var 변수처럼 지동으로 undefined 라는 값을 할당(일명 initialization) 해주지 않습니다 


//함수2();
//에러나서 주석처리 실행시 주석해제하고 보세요
var 함수2 = function () {
  console.log(안녕);
  var 안녕 = 'Hello!';
}
//변수 선언부분만 맨 위로 끌어올려지는데그 변수에다가 소괄호를 붙여봤자 아직 함수가 아니기 때문에 실행이 되지 않습니다.

let a = 1;
var 함수3 = function () {
  a = 2;
}
console.log(a);//1
//함수를 정의만 했지 실행을 안시켜서 a = 2라는 부분은 없는 코드나 마찬가지입니다. 


let a1 = 1;
var b1 = 2;
window.a1 = 3;
window.b1 = 4;
console.log(`a1:${a1} + b1:${b1}`, a1 + b1);

// a는 1, b는 4가 출력됩니다.
//a는 let 변수로 1을 할당하고 글로벌 변수로 3을 할당했습니다. 이 경우 우리가 a를 사용했을 때 조금 더 범위가 작고 가까운 1을 참조해서 사용합니다.
//(자바스크립트 변수를 사용할 때 참조할만한 변수가 내 주변에 없으면 계속 상위 중괄호로 시선을 돌리면서 참조합니다.)
//var b = 2 이것과 window.b = 4 이건 거의 동일한 기능을 하는 코드기 때문에 b는 그냥 4로 재할당이 되었다고 보시면 되겠습니다.

for (let i = 1; i < 6; i++) {
  setTimeout(function () { console.log(i); }, i * 1000);
}

// for (var i = 1; i < 6; i++) { setTimeout(function() { console.log(i); }, i*1000 ); } -- 콘솔창에 5가 계속 출력

//반복문을 해석한 후.. 1초가 지나면 setTimeout 내의 console.log(i)가 발동됩니다. 근데 i를 채워넣고싶어서 주변을 살펴보았더니 i값은 5밖에 없는 것입니다. 왜냐면 아까 반복문이 5번 실행되면서 i값은 0,1,2,3 ... 이렇게 차례로 변하다가 i값이 5가 되어 종료했습니다. 그리고 i 값은 var로 만든 전역변수입니다. 그래서 i값을 쓰려고 봤더니 전역변수 i = 5밖에 없어서 5를 집어넣어서 계속 실행해서 콘솔창에 5가 계속 출력되던 것입니다.

//해결책은 for 반복문에서 i변수를 만들 때 var 대신 let으로 바꾸는 것입니다. let 변수는 범위가 중괄호랬죠? for반복문도 중괄호에 해당됩니다. 그럼 이제 1초 후 console.log(i)가 실행될 때 i값을 채우려고 살펴보면 i값이 for 반복문 내에 남아있기 때문에 그걸 가져다 쓰게 됩니다.그래서 아까처럼 계속 5를 출력해주는게 아니라 1,2,3,4,5를 출력해줍니다. 

var 버튼들 = document.querySelectorAll('button');
var 모달창들 = document.querySelectorAll('div');
for (let i = 0; i < 3; i++) {
  버튼들[i].addEventListener('click', function () {
    모달창들[i].style.display = 'block';
  });
}



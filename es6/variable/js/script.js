//       재선언  재할당     범위
// var     O        O     function
// let     X        O        {}
// const   X        X        {}  


var 이름1;
var 이름1;//재선언이 가능
이름1 = 'Kim';//변수에 'Kim' 이라는 값을 집어넣는걸 할당

let 나이1;
//let 나이1; //에러

const 성별1 = '여자';
//const 성별1 = '남자'; //에러

//et, const로 만들면 이렇게 같은 이름의 변수를 두번 이상 재선언할 수 없습니다. 에러가 납니다. 
//var, let으로 만들면 재할당이 가능하고 const로 만들면 값 재할당이 불가능합니다. 


const 오브젝트 = { 이름: 'Kim' }
오브젝트.이름 = 'Park'; //가능 
//* const 변수에 오브젝트를 담으면 오브젝트 내의 데이터는 변경 가능합니다.
//Object.freeze() 소괄호에 오브젝트를 담으시면 불변의 Object가 완성됩니다. 
//(하지만 오브젝트 내의 오브젝트까지 freeze해주진 않습니다)


function 함수() {
  var 이름 = 'Kim';
  console.log(이름); //가능
}

//console.log(이름); //에러
//var 변수는 존재범위가 function입니다. 


if (1 == 1) {
  let 이름 = 'Kim';
  console.log('이름', 이름); //가능
}

//console.log(이름); //에러
//let, const 변수는 존재범위가 거의 모든 {중괄호} 입니다. (for, if, function 등)


// Hoisting : 변수나 함수의 선언부분을 변수의 범위 맨 위로 강제로 끌고가서 가장 먼저 해석합니다.

function 함수() {
  console.log('hello');
  var 이름 = 'Kim';
}

//해석
// function 함수(){
//   var 이름; 
//   console.log('hello');
//   이름 = 'Kim';
// }

console.log(이름);//undefined
// undefined라는건 변수가 선언은 되었는데 값을 아무것도 할당하지 않았을 때 undefined가 출력됩니다. 
var 이름 = 'Kim';
console.log(이름);//Kim

//실행순서
// var 이름;
// console.log(이름);
// 이름 = 'Kim'
// console.log(이름);

var 이름, 나이, 성별;
var 이름 = 'Kim', 나이, 성별;


var 나이 = 20;
function 함수() {
  console.log(나이)
}
함수();
//함수(){} 안쪽에 나이라는 변수 정의가 있으면 그걸 쓰겠지만 없으면 자연스럽게 바깥에 있는 변수를 가져다 씁니다

var 나이 = 20;
console.log(나이);
console.log(window.나이);

window.나이 = 20;  //전역변수만들기
console.log(window.나이);  //전역변수사용하기
window.나이 = 30;  //전역변수변경하기

if (true) {
  let a = 1;
  var b = 2;
  if (true) {
    let b = 3;
  }
  console.log(b);//2
}

const ng = 15
console.log('window.ng', window.ng)//undefined
// 쌩으로 전역변수를 만들면 window에도 보관이 됩니다. (**let,const는 바로 window에 들어갈수 없어요** var 키워드만 가능합니다.)




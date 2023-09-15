//Spread Operator ...

var 어레이 = ['hello', 'world'];
console.log(어레이);// ['hello', 'world']
console.log(...어레이);//hello world

var 문자 = 'hello';
console.log(문자[0]);//h
console.log(문자[1]);//e

var 문자 = 'hello';
console.log(문자);//hello
console.log(...문자);//h e l l o

var a = [1, 2, 3];
var b = [4, 5];
var c = [...a, ...b];
console.log(c);//(5) [1, 2, 3, 4, 5]

/*
var a = [1,2,3];
var b = a;
console.log(a);
console.log(b);
*/
//등호로 복사를 하시면 a와 b 변수는 [1,2,3]을 각각 따로 하나씩 가진게 아니라 **값공유**가 일어납니다. 그래서 a라는 array를 수정하면 b도 **똑같이 바뀌는** 신기한 버그가 일어납니다. 

var a = [1, 2, 3];
var b = [...a];
console.log(a);//[1, 2, 3]
console.log(b);//[1, 2, 3]

//spread를 이용해서 a값의 괄호를 제거해준 다음에 다시 괄호를 씌우는 겁니다. 그렇게 하시면 아까처럼 a와 b 변수의 값 공유가 일어나지 않습니다. 

var o1 = { a: 1, b: 2 };
var o2 = { c: 3, ...o1 };
console.log(o2);//{c: 3, a: 1, b: 2}
//오브젝트 shallow copy도 비슷한 방식으로 합니다. (강의에선 deep copy라고 한거같은데 deep copy는 오브젝트 안의 오브젝트까지도 엮임현상없이 카피하는걸 뜻합니다. shallow는 그냥 맨 위의 오브젝트하나만 카피하는걸 뜻합니다)


var o1 = { a: 1, b: 2 };
var o2 = { a: 3, ...o1 };
console.log(o2);//{a: 1, b: 2}
//이 중복이 발생하면 무조건 뒤에 오는 a가 이깁니다. 

//spread 연산자는 함수소괄호, 오브젝트 중괄호내, 어레이 대괄호내에서 보통 사용하셔야합니다. 다른 곳에서 그냥 썼다간 에러가날 수 있습니다. 


function 더하기(a, b, c) {
  console.log(a + b + c)
}
var 어레이 = [10, 20, 30];
더하기(...어레이);//60



var person = {
  인사: function () {
    console.log(this.name + '안녕')
  }
}
var person2 = {
  name: '손흥민'
}
person.인사.apply(person2);//손흥민안녕
//실행할함수.apply(적용할곳);
//person.인사()라는 함수를 쓰는데 person2라는 오브젝트에 적용해서 실행해라~ 


var person = {
  인사: function () {
    console.log(this.name + '안녕')
  }
}
var person2 = {
  name: '손흥민'
}
person.인사.apply(person2, [1, 2, 3]);//손흥민안녕
person.인사.call(person2, 1, 2, 3);//손흥민안녕
//apply와 call은 실행 결과도 똑같고 사용법도 똑같습니다. 하지만 차이점이 하나 있는데, 
// apply는 파라미터를 [array]로 한꺼번에 집어넣을 수 있고
//call은 파라미터를 1,2,3 이렇게 일반 함수처럼 만 집어넣을 수 있습니다. 

function 더하기(a, b, c) {
  console.log(a + b + c)
}
var 어레이 = [10, 20, 30];
더하기(...어레이);  //요즘방식 넣기 //60
더하기.apply(undefined, 어레이);  //옛날방식 넣기 //60
//더하기() 함수를 실행하는데 undefined(비워두면 문제가 생기기 때문에 아무 값이나 집어넣은 것입니다.)에 적용해서 실행해주시고요 파라미터로 어레이를 집어넣어주세요~ 라는 뜻입니다.

//rest, spread구분하기
//1. 함수파라미터 자리에 붙으면 rest,2. 나머지는 spread

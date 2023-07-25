var 예쁜함수 = () => {
  //어쩌구
}

[1, 2, 3, 4].forEach(a => console.log(a))

document.getElementById('버튼').addEventListener('click', (e) => {
  console.log('e.currentTarget', e.currentTarget)
  console.log('this', this)
})
//일반 이벤트리스너에선 this==e.currentTarget
//arrow function 이벤트리스너에선 this==바깥의 this값(여기선 window)

var 오브젝트 = {
  함수: () => {
    console.log('오브젝트.함수', this);
    return this
  }
}
오브젝트.함수()

var 두배만들기 = (x) => { return x * 2 }
console.log('두배만들기', 두배만들기(4));
console.log('두배만들기', 두배만들기(8));

var 두배만들기2 = x => { return x * 2 }
console.log('두배만들기2', 두배만들기2(4));
console.log('두배만들기2', 두배만들기2(8));
//파라미터가 하나라면 소괄호를 생략가능합니다. 


var 두배만들기3 = x => x * 2;

console.log('두배만들기3', 두배만들기3(4));
console.log('두배만들기3', 두배만들기3(8));
//중괄호 안에 return 한줄 뿐이라면 중괄호와 return도 생략가능합니다. 


//arrow function을 쓰면 내부에서 this값을 쓸 때 밖에 있던 this값을 그대로 사용합니다.

var 오브젝트1 = {
  함수: function () { console.log('오브젝트1', this) }
}

오브젝트1.함수()

var 오브젝트11 = {
  함수: () => { console.log('오브젝트11', this) }
}

오브젝트11.함수()

// -----문제답안---------------------------------


var 사람 = {
  name: '손흥민',
  sayHi: function () {
    console.log('안녕 나는 ' + this.name)
  }
}

사람.sayHi(); //안녕 나는 손흥민



var 자료 = {
  data: [1, 2, 3, 4, 5]
};

자료.전부더하기 = function () {
  var 합 = 0;
  this.data.forEach(function (a) {
    합 = 합 + a;
  });
  console.log('자료.전부더하기', 합);
}
자료.전부더하기();


document.getElementById('버튼2').addEventListener('click', function () {
  setTimeout(() => { console.log(this.innerHTML) }, 1000);
});

/*
document.getElementById('버튼2').addEventListener('click', function(){
  var 버튼 = this;
  setTimeout(function(){ console.log(버튼.innerHTML) }, 1000); 
});
*/


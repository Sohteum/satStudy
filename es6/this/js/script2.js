function 기계() {
  this.이름 = 'Kim';
}
var 새오브젝트 = new 기계();
console.log(새오브젝트);

document.getElementById('버튼').addEventListener('click', function (e) {
  console.log(e.currentTarget)
  console.log(this)
  console.log(document.getElementById('버튼'))
});


document.getElementById('버튼2').addEventListener('click', function (e) {
  var 어레이 = [1, 2, 3];
  어레이.forEach(function (a) {
    console.log('a :', a);
    console.log('this', this)
  });
});
//eventlistener내부는 맞지만 그 안에서 function을 하나 더 만났기 때문에 의미가 변합니다. 
//저렇게 쌩으로 있는 콜백함수는 그냥 일반함수랑 똑같기 때문에 window가 출력됩니다. 

var 오브젝트4 = {
  이름들: ['김', '이', '박'],
  함수: function () {
    오브젝트4.이름들.forEach(function () {
      console.log('오브젝트4.함수', this)
    });
  }
}
오브젝트4.함수()
//여기서는 1.전역변수 혹은 2.그냥 디스...이부분 이해안감..그냥 함수안의 디스가 나옴

var 오브젝트5 = {
  이름들: ['김', '이', '박'],
  함수: function () {
    오브젝트5.이름들.forEach(() => {
      console.log('오브젝트5.arrow function', this)
    });
  }
}
오브젝트5.함수()
//여기서 애로펑션을 사용하면 위에 값이 그대로 나옴. 따라서 콘솔로 찍으면 이름들이 나옴
let 변수1 = 2 + 2;

switch (변수1){
  case 3 :
    alert('변수가 3이네요');
    break
  case 4 :
    alert('변수가 4네요');
    break
}

let 변수2 = 2 + 5;

switch (변수2){
  case 3 :
    alert('변수가 3이네요');
    break
  case 4 :
    alert('변수가 4네요');
    break
  default : 
    alert('다 아니네')
}

document.querySelector('#quiz').addEventListener('click', function(e){
  switch (e.target.innerHTML){
    case '와이프':
      alert('와이프를 좋아하시네요');
      break
    case '부모님':
      alert('효자네요');
      break
    case '키우던 개':
      alert('역시 사람보단 동물이 더 낫죠');
      break
  }
});
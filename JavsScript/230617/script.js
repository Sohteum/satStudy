document.querySelector('.check').addEventListener('click', function () {
  const a = document.querySelector('.num').value;
  const number = Number(a)
  const answer = document.querySelector('.answer');

  if (number % 10 === 3 || number % 10 === 6 || number % 10 === 9) {
    console.log('박수'); 
    answer.innerHTML = '박수';
  } else {
    console.log('통과');
    answer.innerHTML = '통과';

  }
})
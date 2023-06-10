const fnEx1 = (param1,param2) => {
  document.querySelector('.ex1 p').innerText = param2.target.value
  console.log(param1)
}

const fnEx2 = (param1, param2) => {
  document.querySelector('.ex3 div').innerText = param2.target.value
  console.log(param1)
}

document.addEventListener('DOMContentLoaded',()=>{

  document.querySelector('.ex1 button').addEventListener('click',(z,c)=>{
    alert(z.target.value)
    console.log(c);
  })

})

// classList.add = addclass
 

/* 
$(window).load(function(){

})
*/
window.addEventListener('load',()=>{

})
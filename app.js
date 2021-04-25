
var x = document.getElementById("HBD"); 
  
function playAudio() { 
  x.play(); 
} 
setInterval(playAudio, 3000);
function pauseAudio() { 
  x.pause(); 
} 
const btn1 = document.querySelector('#btn')
const img = document.getElementById('img')
  const btn = document.querySelector('button')
  const display =document.querySelector('#display')
  btn.addEventListener('click', ()=>{
   display.innerHTML = '<h1 style= "font-size: 50px ;color:red"> Happy Birthday,  Manju ! ,  Mama !,Atthe <br><h2></h2> 25th April <br><h4> Me, Rich ,Caro, Jemima </h4>'
   img.classList.add('swing')

  })
  btn.addEventListener('click' , playAudio)
btn1.addEventListener('click' , pauseAudio)

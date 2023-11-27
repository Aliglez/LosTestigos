const button = document.querySelector('.buton');
const nav = document.querySelector('.nav');

button.addEventListener('click',()=>{
   nav.classList.toggle("active");
})
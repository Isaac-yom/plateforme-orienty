let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let ul = document.querySelector('ul');



menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-close');
    ul.classList.toggle('active');
});




formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});    
  
   


 let loginModalForm = document.querySelector('#signupmodal');
 loginModalForm.addEventListener('submit', function(event){
    event.preventDefault();
     document.location.href = 'main.html'
});

 let loginForm = document.querySelector('#form');
 loginForm.addEventListener('submit', function(event){
     event.preventDefault();
     document.location.href = 'main.html'
 });
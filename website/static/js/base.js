var mobile_nav = document.querySelector('.mobile_nav');
var button = document.querySelector('.toggle-button');
var button_close = document.querySelector('.mobile_nav-item--close');

button.addEventListener('click',function(){
  mobile_nav.classList.add('open');
});

button_close.addEventListener('click',function(){
  mobile_nav.classList.remove('open');
});

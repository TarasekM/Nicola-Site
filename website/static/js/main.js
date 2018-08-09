var body = document.body;
var backdrop = document.querySelector('.backdrop');

var modal_image = document.querySelector('.modal_image');
var modal = document.querySelector('.modal');

var close_button = document.querySelector('.modal_image--close');
var photos = document.querySelectorAll('.img');

var srcs = [];
console.log(body,backdrop,modal_image,close_button)


// backdrop.addEventListener('click',CloseModal);
close_button.addEventListener('click',CloseModal);
modal.addEventListener('click',CloseModal);

for (var i = 0; i< photos.length; i++){

  photos[i].addEventListener("click", function(event){
    var targetElement = event.target || event.srcElement;
    $(modal_image).attr('src', targetElement.src);

    backdrop.classList.add('open-modal');
    modal.classList.add('open-modal');
    body.style.overflow = "hidden";
    close_button.classList.add('open-modal');
  });
}

function CloseModal(){
  backdrop.classList.remove('open-modal');
  modal.classList.remove('open-modal');
  body.style.overflow = "scroll";
  close_button.classList.remove('open-modal');
}

var text = document.querySelector('.omnie_text');

var kontakt = document.querySelector('.kontakt');

$(document).ready(
  Resize
);

$(window).resize(
  Resize
);

function Resize(){
  console.log(document.body.offsetWidth);
  if (document.body.offsetWidth <= 1263){
    kontakt.style.marginTop = text.offsetHeight + 'px';
  }else {
    kontakt.style.marginTop = 5 +'rem';
  }
}

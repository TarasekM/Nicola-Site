var text = document.querySelector('.omnie_text');

var kontakt = document.querySelector('.kontakt');

$(document).ready(
  Resize
);

$(window).resize(
  Resize
);

function Resize(){
  console.log(text.offsetHeight + 'px');
  kontakt.style.marginTop = text.offsetHeight + 'px';
}

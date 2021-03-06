var body = document.body;
var backdrop = document.querySelector('.backdrop');

var modal_image = document.querySelector('.modal_image');
var modal = document.querySelector('.modal');

var close_button = document.querySelector('.modal_image--close');
var photos = document.querySelectorAll('.img');


// Modal Control


backdrop.addEventListener('click',CloseModal);
close_button.addEventListener('click',CloseModal);

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


// Conrol of displayed text content in post
var image_description = document.querySelectorAll('.image-description');
var pub_date = document.getElementsByClassName('image-description_pub-date');

var button;
for (var i = 0; i< image_description.length; i++){
  button = document.createElement('BUTTON');
  button.setAttribute("class","image-description_read-more");
  button.setAttribute('href', "#");
  button.innerHTML = "Czytaj więcej";
  image_description[i].appendChild(button);
  //  if(button.previousElementSibling){
  //
  //   button.parentNode.insertBefore(button,pub_date[i]);
  // }
}

$('.image-description').find('button[href="#"]').on('click', function (e) {
    e.preventDefault();
    this.expand = !this.expand;
    $(this).text(this.expand?"Ukryj":"Czytaj więcej");
    $(this).closest('.image-description').find('.small-content, .expand-content').toggleClass('small-content expand-content');
});

// control of categories

var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            var to_filter = s.options[i].getAttribute('value');
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            filterSelection(to_filter);
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

// Filter Categories

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("image_containter");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "open-modal");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "open-modal");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

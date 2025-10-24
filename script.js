"use strict"

const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer')
const checkbox = document.querySelector('#checkbox');
let menuOpen = false;

window.addEventListener('resize', function(){
  if(body.classList.contains('hamburgerOpen')){
    if(window.innerWidth > 768){
      body.classList.remove('hamburgerOpen');
      if(main) {main.classList.remove('displayNone');}
      if(footer) {footer.classList.remove('displayNone');}
      checkbox.checked = false;
    }
  }
}, false);

checkbox.addEventListener('change', function(){
  if(checkbox.checked) {
    body.classList.add('hamburgerOpen');
    if(main) {main.classList.add('displayNone');}
    if(footer) {footer.classList.add('displayNone');}
  }
  else{
    body.classList.remove('hamburgerOpen');
    if(main) {main.classList.remove('displayNone');}
    if(footer) {footer.classList.remove('displayNone');}
  }
}, false);
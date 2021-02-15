// let header = selector('nav');

// window.addEventListener('scroll', function(){
//   if (!window.matchMedia("(max-width: 768px)").matches) {
//     /* The viewport is not less than, or equal to, 768 pixels wide */
//     header.classList.toggle('sticky', window.scrollY>0);
//   }
// });

selector('.header__bars').addEventListener('click', function(){
  openMenu();
});

selector('.header__overlay').addEventListener('click', function(){
  openMenu();
});

function openMenu(){
  selector('.header').classList.toggle('open');
}

function selector(s){
  return document.querySelector(s);
}

window.onload = function(){
  selector('body').classList.remove('preload');
}

let resizeTimer;
window.addEventListener("resize", () => {
  let width = window.innerWidth;
  if(width <= 768){
    // header.classList.remove('sticky');
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  }
});
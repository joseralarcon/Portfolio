let header = document.querySelector('nav');

window.addEventListener('scroll', function(){
  if (!window.matchMedia("(max-width: 768px)").matches) {
    /* The viewport is not less than, or equal to, 768 pixels wide */
    header.classList.toggle('sticky', window.scrollY>0);
  }
});

selector('.menu').addEventListener('click', function(){
  // this.classList.toggle('open');
  // document.querySelector("nav").style.display = "flex";
  // document.querySelector("nav").style.transform = "rotateY(180deg)";
  selector('header').classList.toggle('open');
  selector('.overlay').classList.toggle('open');
});

selector('.overlay').addEventListener('click', function(){
  selector('header').classList.toggle('open');
  selector('.overlay').classList.toggle('open');
});

function selector(s){
  return document.querySelector(s);
}

window.onload = function(){
  document.querySelector('body').classList.remove('preload');
}

let resizeTimer;
window.addEventListener("resize", () => {
  var width = window.innerWidth;
  if(width <= 768){
    header.classList.remove('sticky');
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  }
});


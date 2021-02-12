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
  console.log(width);
  if(width <= 768){
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  }
});


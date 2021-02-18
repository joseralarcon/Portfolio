let header = selector('nav');

window.addEventListener('scroll', function(){
  if (!window.matchMedia("(max-width: 768px)").matches) {
    /* The viewport is not less than, or equal to, 768 pixels wide */
    header.classList.toggle('sticky', window.scrollY>0);
  }
});

const mediaQueryList = window.matchMedia('(max-width: 768px)');
const headerLinks = document.querySelectorAll('.header__a');

if(mediaQueryList.matches) {
  //Add event listener. Window is less than or equal to 768px on initial.
  addEventLinks();
}

mediaQueryList.addEventListener('change', event => {
  if (event.matches) {
    //Add event listener. Window is less than or equal to 768px on change.
    let resizeTimer;
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);

    addEventLinks();
    header.classList.remove('sticky');
  }else{
    //Remove event listener. Window is above than or equal to 768px on change.;
    removeEventLinks();
    if(window.scrollY>0){
      header.classList.toggle('sticky')
    }
  }
})

selector('.header__bars').addEventListener('click', openMenu);

selector('.header__overlay').addEventListener('click', openMenu);

function addEventLinks(){
  headerLinks.forEach(link => {
    link.addEventListener('click', openMenu);
  });
  banderaListenerHeaderLink = true;
}

function removeEventLinks(){
  headerLinks.forEach(link => {
    link.removeEventListener('click', openMenu);
  });
}

function openMenu(){
  selector('.header').classList.toggle('open');
}

function selector(s){
  return document.querySelector(s);
}

window.onload = function(){
  selector('body').classList.remove('preload');
}

/*About Section tabs*/
function sectionTabs(){
  const aboutSection = selector('.about__section');
  const tabsContainer = document.querySelectorAll('.about__tab-item');

  tabsContainer.forEach(tab => {
    tab.addEventListener('click', (e) => {
      if(!e.target.classList.contains('active')){
        const target = e.target.getAttribute('data-target');
        const removeActive = document.querySelector('.about__tab-item.active');
        removeActive.classList.remove('active');
        e.target.classList.add('active');

        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        aboutSection.querySelector(target).classList.add('active');
      }
    });
  });

}

sectionTabs();
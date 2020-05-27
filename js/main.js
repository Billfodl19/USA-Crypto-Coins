


const toc = document.querySelector('#markdown-toc');

if (toc) { 
toc.insertAdjacentHTML('afterbegin', `
<h2>Table of contents</h2>
`);
console.log("toc is here")
}

const toggleNav = document.querySelector('.toggle-nav')
const navMenu = document.querySelector('.mobile-nav')
const carot = document.querySelector('.carot')
const subMenu = document.querySelector('.mobile-dropdown-nav')

toggleNav.addEventListener("click", startMenu);
carot.addEventListener("click", startSubMenu);

function startMenu() {
  navMenu.classList.toggle('open')
}
function startSubMenu() {
  subMenu.classList.toggle('open')
  this.classList.toggle('open')
}

// hamburger button animation
// when click, give hamburger open
const button = document.getElementById("hamburger-1");
button.addEventListener("click", function(){
    this.classList.toggle("open")
  });


// selecting the three li, the white background, and the nav itself
const triggers = document.querySelectorAll('.mobile-nav-main > li')







// function when mouse enters
function handleEnter() {
  
  // when mouse enters, add the class 'trigger-enter'
  this.classList.add('trigger-enter');
    
  // when the thing that got hovered contains "trigger-enter", add "trigger-enter-active" but after 150s
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  
   
  }








//function when mouse leaves, remove all active classes
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
}




//what function to use for enters and leaves
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));




const heroImage = document.querySelector('#hero_image');


if (heroImage) { 
function myScript() {
  heroImage.classList.add('ready');

}; //myscript

window.addEventListener("load", myScript);
}











function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const sliderImages = document.querySelectorAll('.slide_in');

function checkSlide() {

  sliderImages.forEach(sliderImage => {

    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {

      sliderImage.classList.add('active');

    } else {

      sliderImage.classList.remove('active');

    }
  });
}



window.addEventListener('scroll', debounce(checkSlide));





const myPopUp = document.querySelector('.popup');
const closePopUp = document.querySelector('.thanksid');

function openPop() {
  myPopUp.classList.add('active')
}

// Hey Colin, here you can change the time 3000 = 3 seconds, only change the numer 
setTimeout(openPop, 3000);

closePopUp.addEventListener("click", function() {
  myPopUp.classList.remove('active')
})







const watchMy = document.querySelector('.myfooter');
const watchMy2 = document.querySelector('.watchmy2');

function obCallback(payload) {
  if (payload[0].isIntersecting == true) {
    toc.classList.add('notfixed')
  } else {
    toc.classList.remove('notfixed')
  }
}

const ob = new IntersectionObserver(obCallback);

ob.observe(watchMy);







function tocfunc() {
  if ( (toc.getBoundingClientRect().top) < 0 ) {
    toc.classList.add('fixed');
  } 

};



window.addEventListener('scroll', tocfunc);




function obCallback2(payload) {
  if (payload[0].isIntersecting == true) {
    toc.classList.remove('fixed')
  } 
}

const ob2 = new IntersectionObserver(obCallback2);

ob2.observe(watchMy2);

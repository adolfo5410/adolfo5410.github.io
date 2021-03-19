// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!

$(window).scroll(function(){

    var scrolled = $(document).scrollTop();

    if(scrolled > navHeight){
        $('.container').addClass('animate');
    }else{
            $('container').removeClass('animate');
    }
    if(scrolled > scroll){
        $('container').removeClass('sticky');
    }else{
        $('container').addClass('sticky');
    }
    scroll = $(document).scrollTop();
    }

)
window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".parallax");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * 0.4) + 'px'
  parallax.style.transform = 'translateY('  + coords + ')';
};

var scroll = $(document) .scrollTop();
var navHeight = $('container').outerHeight();

$(document).delegate('.your-button', 'click', function () {
    $('#donate').scrollTo('#fourth'); // Scroll  to target element
    return false;
});

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('carousel__button--right');
const prevButton = document.querySelector('carousel__button--left');
const dotsNav = document.querySelector('carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slidewidth);

//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';

slides.forEach((slide, index) => {
    slides.style.left = slideWidth * index + 'px';
})






dotsNav.addEventListener('click', e => {

    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('current-slide)');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, tagetSlide);
    updateDots(currentDot,targetDot)
    hideShowArrows(slides,prevButton, nextButton, targetIndex)


})

// End of Your Code . Don't delete that line below!!
});
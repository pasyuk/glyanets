// init Swiper:
const slider = new Swiper( '.slider', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.slider__pagination',
    type: 'fraction',
    formatFractionCurrent: function( number ) {
      return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function( number ) {
      return number < 10 ? '0' + number : number;
    }
  },
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev'
  },
  on: {
    init: function( swiper ) {
      setSliderCaption( swiper );
    }
  }
} );
const sliderCaption = slider.el.querySelector( '.slider__caption' );

slider.on( 'realIndexChange', function( swiper ) {
  setSliderCaption( swiper );
  while (sliderCaption.childNodes.length > 2) {
    sliderCaption.firstElementChild.remove();
  }
  sliderCaption.classList.remove( 'animate-next', 'animate-prev' );
} );
slider.on( 'slideNextTransitionStart', function() {
  sliderCaption.classList.remove( 'backward' );
  sliderCaption.classList.add( 'forward' );
  setTimeout( function() {
    sliderCaption.classList.add( 'animate-next' );
  }, 0 );
} );
slider.on( 'slidePrevTransitionStart', function() {
  sliderCaption.classList.remove( 'forward' );
  sliderCaption.classList.add( 'backward' );
  setTimeout( function() {
    sliderCaption.classList.add( 'animate-prev' );
  }, 0 );
} );

function setSliderCaption( swiper ) {
  let sliderCaption = swiper.el.querySelector( '.slider__caption' );
  sliderCaption.innerHTML += swiper.slides[swiper.activeIndex].querySelector( '.slide__caption' ).outerHTML;
}


// Slider - 3 in group.
const slider2 = new Swiper( '.slider2', {
  loop: false,
  autoplay: false,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.slider2 .slider__button-next',
    prevEl: '.slider2 .slider__button-prev',
  },
  // Responsive breakpoints.
  breakpoints: {
    1499: {
      slidesPerView: 3,
    }
  }
} );

$(function() {
//   const header = $("#header");
//   const introH = $("#intro").innerHeight();

//   let scrollOffset = $(window).scrollTopop();


//   // Fixed Header
//   checkScroll(scrollOffset);

//   $(window).on("scroll", function() {
//     scrollOffset = $(this).scrollTopop();

//     checkScroll(scrollOffset);
//   });

//   function checkScroll(scrollOffset) {
//     if (scrollOffset >= introH) {
//       header.addClass("fixed");
//     } else {
//       header.removeClass("fixed");
//     }
//   }


//   // Smooth scroll
//   $("[data-scroll]").on("click", function(event) {
//     event.preventDefault();

//     let $this = $(this),
//       blockId = $this.data("scroll"),
//       blockOffset = $(blockId).offset().top,
//       headerH = $("#header").innerHeight(),
//       scrollOffset = blockOffset - headerH;

//     $("#nav a").removeClass("active");
//     $this.addClass("active");

//     $("#header").toggleClass("active");
//     $("#nav").toggleClass("active");
//     $("#nav_toggle").toggleClass("active");

//     $("html, body").animate(
//       {
//         scrollTopop: scrollOffset
//       },
//       400
//     );
//   });


//   // Menu nav toggle
//   $("#nav_toggle").on("click", function(event) {
//     event.preventDefault();

//     $("#header").toggleClass("active");
//     $("#nav").toggleClass("active");
//     $(this).toggleClass("active");
//   });


//   // accordion
//   $("[data-collapse]").on("click", function(event) {
//     event.preventDefault();

//     let itemId = $(this).data("collapse");

//     $(itemId).toggleClass("active");
//   });

  
  // Review slider
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

const header = document.querySelector('#header');
const navToggle = document.getElementById('nav_toggle');
const nav = document.getElementById('nav');
const accordion = document.getElementById('accordion')

let introHeight = document.querySelector('#intro').offsetHeight;
let scrollTop = window.pageYOffset;

// functions
const checkScroll = (scrollTop) => {
  if (scrollTop >= introHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

const toggleHeaderActiveClasses = () => {
   
}


// Menu nav fixed
checkScroll(scrollTop);

window.addEventListener('scroll', function(event) {
  scrollTop = window.pageYOffset;
  
  checkScroll(scrollTop);
})


// Smooth scroll
header.addEventListener('click', function(event) {
  target = event.target;

  if (!target.matches('[data-scroll]')) return;
  event.preventDefault();

  let activeLink = header.querySelector('.nav__link.active');
  let blockId = target.dataset.scroll;
  let scrollingBlock = document.querySelector(blockId)
  
  if (activeLink) {
    activeLink.classList.remove('active')
  }

  target.classList.add('active')

  scrollingBlock.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  header.classList.remove('active');
  nav.classList.remove('active'); 
  navToggle.classList.remove('active'); 
})



// Burger menu
navToggle.addEventListener('click', function(event) {
  header.classList.toggle('active');
  nav.classList.toggle('active'); 
  navToggle.classList.toggle('active'); 
})


// Accordion
accordion.addEventListener('click', function(event) {
  target = event.target;

  if (!target.matches('[data-collapse]')) return;
  event.preventDefault();

  let itemId = target.dataset.collapse;
  let accordionItem = document.querySelector(itemId);
  let activeItem = accordion.querySelector(`.active`);
  

  if (activeItem && !activeItem.matches(itemId)) {
    activeItem.classList.remove('active');
  }

  accordionItem.classList.toggle('active');
})
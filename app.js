
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Code to hide nav while scrolling
//var prevScrollpos = window.pageYOffset;
//window.onscroll = function() {
//    closeMenu();
//    var currentScrollPos = window.pageYOffset;
//    if (prevScrollpos > currentScrollPos) {
//        document.getElementById("navbar").style.top = "0";
//    } else {
//        document.getElementById("navbar").style.top = "-75px";
//    }
//    prevScrollpos = currentScrollPos;
//}
//end of nav scrolling code


// add options for dark theme
const options = {
  top: '64px', // default: '32px'
  right: 'unset',
  left: 'unset', // Remove the "left" property
  time: '0.5s',
  mixColor: '#100f2c', // Change to the button background color
  backgroundColor: '#fff',  // Change to the button background color
  buttonColorDark: '#100f2c',
  buttonColorLight: '#fff',
  saveInCookies: false,
  label: "🌑",
  autoMatchOsTheme: true
};

  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();


//start of cursor code
const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX ,
    y: e.pageY
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX ,
    y: e.pageY 
  })
}
//end of cursor code



const toggleMenu = () => {
  if (menu.classList.contains('menu--open')){
    TweenMax.to(".menu", .5, {left: '-350px', ease:Ease.easeOut});
    setTimeout(() => {
      menu.classList.toggle('menu--open');
    }, 500);
  } else {
    menu.classList.toggle('menu--open');
    TweenMax.to(".menu", .5, {left: '0', ease:Ease.easeOut});
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector("body .menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".header .menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());

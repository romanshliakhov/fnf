const breakpoint = 992;

const mobileMenu = function() {
  const menu = document.querySelector('.nav__menu');
  const navLi = menu.querySelector('.extended');
  const navExtendedTrigger = menu.querySelector('span');


  const navLiSecond = menu.querySelector('.nav__second-item');
  const navHandler = menu.querySelector('.nav__menu-title');
  const navHandlerSecond = menu.querySelector('.nav__second-title');

  // navLi.addEventListener('click', () => {
  //   navLi.classList.add('active');
  // })

  navExtendedTrigger.addEventListener('click', () => {
    navLi.classList.toggle('active');
    console.log('click');
  })
}

const mobileMenuInit = () => {
  let containerWidth = document.documentElement.clientWidth;

  if (containerWidth <= breakpoint) {
    mobileMenu();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  mobileMenuInit();
});

window.addEventListener("resize", () => {
  mobileMenuInit();
});

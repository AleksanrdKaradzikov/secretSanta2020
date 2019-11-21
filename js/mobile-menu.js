const burg = document.querySelector('.header-navigation-burg'),
      mobileMenu = document.querySelector('.header-navigation-list-mobile');

burg.addEventListener('click', () => {
   burg.classList.toggle('header-navigation-burg__active');
   if(mobileMenu.style.maxHeight) {
     mobileMenu.style.maxHeight = null;
   } else {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
   }
})
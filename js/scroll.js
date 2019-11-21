$(document).ready(function(){
    $('[href^="#"]').on('click', function(ev){
     ev.preventDefault();
     const _href = $(this).attr('href');
     $('html, body').animate({
              scrollTop: $(_href).offset().top + 'px'
     },1200);
});
})
//NAVBAR SCROLL
$(function(){
    var navbar = $('.navbar');

    $(window).scroll(function() {
       if($(window).scrollTop() <= 150) {
         $('nav').removeClass('scrolled');
       }
      else {
        $('nav').addClass('scrolled');
      }
    });
});
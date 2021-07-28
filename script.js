$(function() {

  // $('.humburger').hover({
  //   function() {
  //     $('.hover-menu').removeClass('hover-menu');
  //   },
  //   function() {
  //     $('.hover-menu').addClass('hover-menu');
  //   }
  // });



  $('#page-top').click(function() {
    $('body, html').animate({scrollTop:0}, 400);  
  });

});
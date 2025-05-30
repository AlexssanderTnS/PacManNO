jQuery(document).ready(function(){

  jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 100) {
      jQuery('a[href="#top"]').fadeIn();
    } else {
      jQuery('a[href="#top"]').fadeOut();
    }
  });

  jQuery('a[href="#top"]').click(function(){
    jQuery('html, body').animate({scrollTop : 0},800);
    return false;
  });

});	
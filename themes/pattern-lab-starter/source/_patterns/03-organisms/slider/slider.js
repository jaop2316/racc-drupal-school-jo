(function removeClass($){
  // views_slideshow_singleframe_teaser_section
  $(document).ready(function(){
    $('.views_slideshow_cycle_teaser_section').each(function(){
	  $(this).removeAttr('style');
    });
    //console.log('slider script');
  });

})(jQuery);

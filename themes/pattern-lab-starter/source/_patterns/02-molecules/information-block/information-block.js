function openTab(evt, tabname) {
   // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".box1,.box2,.box3,.box4");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";


    console.log(tabname);
}

(function ($){
  // views_slideshow_singleframe_teaser_section
  $(document).ready(function(){
    $('.views_slideshow_cycle_teaser_section').each(function(){
	  $(this).removeAttr('style');
    console.log($(this));
    });

  });

})(jQuery);

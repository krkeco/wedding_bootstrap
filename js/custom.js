(function($) {
  "use strict";
  // Collapse Navbar
  var logoCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#logo").addClass("logo-shrink");
    } else {
      $("#logo").removeClass("logo-shrink");
    }
  };
  // Collapse now if page is not at top
  logoCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(logoCollapse);


})(jQuery); // End of use strict
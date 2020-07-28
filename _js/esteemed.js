$(document).foundation();

var site_nav = $('.w-nav');

// Add shrink class to header when scrolling down.
$(window)
  .ready(function() {
    if ($(window).scrollTop() >= site_nav.height()) {
      site_nav.addClass('shrink');
    }
  })
  .scroll(function() {
    if ($(window).scrollTop() >= site_nav.height()) {
      site_nav.addClass('shrink');
    }
    else {
      site_nav.removeClass('shrink');
    }
  });

// Hide navbar on mobile on mobile_hidden_navbar layout and show it only on scroll down.
if ($(".page__mobile-nav-hidden").length) {
  $(".w-nav").addClass('not-visible');

  var lastScrollTop = 0;
  $(window).scroll(function(event) {
    var ScrollTop = $(this).scrollTop();

    if (ScrollTop > lastScrollTop){
      $(".w-nav").removeClass('not-visible');
    } else {
      $(".w-nav").addClass('not-visible');
    }

    lastScrollTop = ScrollTop;
  });
}

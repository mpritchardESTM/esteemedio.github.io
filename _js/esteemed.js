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
  })

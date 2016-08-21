'use strict';

const events = require('./api/events.js');
// const app = require('./api/apiurl.js');

$(() => {
  events.addHandlers();
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('a.page-scroll').bind('click', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
  });
});

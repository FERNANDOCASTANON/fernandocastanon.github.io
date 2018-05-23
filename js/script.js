$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });
})
$(document).ready(function() {
  $('#slides').superslides({
    animation:'fade',
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ['Software Engineer.', 'Web Developer.', 'Hacker.', 'Creator.'],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:4,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
              items:4
          }
      }
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      items: 4,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
              items:4
          }
      }
  });



  var skillsTopOffset = $(".skills-section").offset().top;
  var statsTopOffset = $(".stats-section").offset().top;
  var countUpFinish = false;

  $(window).scroll(function(){
    console.log(window.pageYOffset)
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
          easing: 'easeInOut',
          barColor: '#fff',
          trackColor: false,
          scaleColor: false,
          lineWidth: 4,
          size: 152,
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
      });
    }

    if (!countUpFinish && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      $('.counter').each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal);
      })

      countUpFinish = true;
    }
  });
  $('[data-fancybox]').fancybox();
  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'Linear',
      queue: false
    }
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass(".current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'Linear',
        queue: false
      }
    });
    return false;
  });

  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
  });

  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});

jQuery(document).ready(function() {
  "use strict"
  $('.water').ripples({
    dropRadius: 15,
    perturbance: .01,
  });
});

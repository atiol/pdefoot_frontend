(function($){
  $(function(){
    // collapse button
    $('.button-collapse').sideNav();

    // select
    $('select').material_select();

    // team logos slider
    $('.slider1').bxSlider({
      slideWidth: 50,
      minSlides: 4,
      maxSlides: 18,
      slideMargin: 10,
      pager: false
  });

  // vertical slider
  $('.vertical-slider').bxSlider(
    {
      mode: 'vertical',
      slideWidth: 960,
      minSlides: 6,
      maxSlides: 10,
      slideMargin: 10,
      infiniteLoop: false,
      hideControlOnEnd: true,
      pager: false,
      prevText: '<',
      nextText: '>'
    }
  );
  $('.bx-controls-direction').css(
    "margin-top", "10px"
  );
  $('#vslider .bx-controls-direction a.bx-next, #vslider .bx-controls-direction a.bx-prev').css(
    {
      "background-color": "#1C262B",
      "color": "#e2c042", 
      "margin-right": "10px",
      "margin-top": "10px", 
      "padding": "1px 10px", 
      "border-radius": "1px"
    });

  // group slider
  $('.slider2').bxSlider({
    slideWidth: 150,
    minSlides: 1,
    maxSlides: 12,
    slideMargin: 10
  });

  //tooltip
  $('.tooltipped').tooltip({delay: 50});

  }); // end of document ready
})(jQuery);
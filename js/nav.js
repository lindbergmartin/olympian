$(document).ready(function(){
  // generate nav <li> based on [data-name] attr
  $('[data-name]').each(function(i){
    $('.navbar').append('<li data-number="'+(i+1)+'">'+$(this).data('name')+'</li>');
  })

  $(document).scroll(function(){

    var windowTop = $(window).scrollTop();
    var windowBot = windowTop + window.innerHeight;

    var navbarMargin = parseInt($('.navbar').css('marginBottom'));

    var fullMove =
      window.innerHeight     //  window height
    - $('.navbar').height()  // .navbar height
    - navbarMargin*2;        // account for .navbar mb and mt

    $('[data-number]').removeClass('middle');
    $('[data-name]').each(function(i){
      var thisTop = $(this).offset().top;
      var thisBot = thisTop + $(this).height();

      var totallyAbove = thisTop > windowBot;
      var totallyBelow = windowTop > thisBot;

      var partMove = (thisTop - windowBot)/(window.innerHeight+$(this).height())*fullMove ;

      $nav = $('[data-number='+(i+1)+']');

      if (!totallyAbove && !totallyBelow){
        $nav.css('transform', 'translateY('+(partMove)+'px)');
        if (-partMove > fullMove*0.25 && -partMove < fullMove*0.75){
          $nav.addClass('middle');
        }
      } else if (totallyAbove) {
        $nav.css('transform', 'translateY(0px)');
      } else if (totallyBelow) {
        $nav.css('transform', 'translateY('+(-fullMove)+'px)');
      }

    })
  })

  // scroll the nav
  $('[data-number]').on('click touchstart', function(e){
    e.preventDefault();
    e.stopPropagation();

    var number = $(this).data('number');
    var offset = 0;

    $('[data-name]').each(function(i){
      if (i+1 == number){
        offset = $(this).offset().top;
      }
    })

    anime({
      targets: "html, body",
      scrollTop: offset,
      duration: 1500,
      easing: 'easeInOutCubic'
    })

  })

  // scroll the logos
  $('.logo').on('click touchstart', function(e){
    e.preventDefault();
    e.stopPropagation();

    $(this).each(function(){
      var parent = $(this).parent();

      if ( parent.is('#hero') ){
        offset = $('footer').offset().top;
      } else {
        offset = $('#hero').offset().top;
      }
    })

    anime({
      targets: "html, body",
      scrollTop: offset,
      duration: 1500,
      easing: 'easeInOutCubic'
    })
  })
});
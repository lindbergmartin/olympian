$(document).ready(function () {

  // give body class of clip, this gets removed after animation.

  $('body').addClass('clip');

  // wrap each letter in a span
  $('.name').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  var tlHero = anime.timeline({
    easing: 'easeOutExpo',
    complete: function() {
      $('body').removeClass('clip');
    }
  });

  // get width of hero image and set as variable
  var windowWidth = $(document).width();

  tlHero.add({
    targets: '#circle',
    scale: [10, 1],
    delay: 1500,
  });

  tlHero.add({
    targets: '.name-first .letter',
    translateY: [200, 0],
    rotateZ: [10, 0],
    skew: [-10, 0],
    perspective: [10, 0],
    delay: anime.stagger(25),
  });

  tlHero.add({
    targets: '.name-second .letter',
    translateY: [200, 0],
    rotateZ: [10, 0],
    skew: [-10, 0],
    perspective: [10, 0],
    delay: anime.stagger(50),
  }, '-=1000');

  tlHero.add({
    targets: '.hero-img',
    translateX: [-windowWidth, 0],
    duration: 1000,
  }, '-=1000');

  tlHero.add({
    targets: ['nav', '.logo'],
    opacity: [0, 1],
    delay: anime.stagger(200),
    duration: 2000,
    easing: 'easeOutSine',
  }, '-=500');
});
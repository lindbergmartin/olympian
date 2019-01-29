$(document).ready(function () {

  var myDuration = '100%';
  var myEasing = 'easeOutQuad';

  var tlQuoteDrive = anime.timeline({});

  tlQuoteDrive.add({
    targets: '#driven-img',
    translateY: ['100%', 0],
    easing: myEasing
  }, 0);

  tlQuoteDrive.add({
    targets: '.mask-determined',
    maskPositionY: ['-150%', '50%'],
    easing: myEasing
  }, 0);

  var controller = new ScrollMagic.Controller();

  var driven = new ScrollMagic.Scene({
    triggerElement: '#driven',
    offset: '0',
    duration: myDuration,
    reverse: false,
    triggerHook: 1
  })
  .setAnime(tlQuoteDrive)
  // .addIndicators({name: 'driven', colorEnd: 'pink'})
  .addTo(controller);

  var tlQuoteCreative = anime.timeline({});

  tlQuoteCreative.add({
    targets: '#creative-img',
    translateY: ['100%', 0],
    easing: myEasing
  }, 0);

  tlQuoteCreative.add({
    targets: '.mask-creative',
    maskPositionY: ['-150%', '50%'],
    easing: myEasing
  }, 0);

  var controller = new ScrollMagic.Controller();

  var creative = new ScrollMagic.Scene({
    triggerElement: '#creative',
    offset: '0',
    duration: myDuration,
    reverse: false,
    triggerHook: 1
  })
  .setAnime(tlQuoteCreative)
  // .addIndicators({name: 'creative', colorEnd: 'pink'})
  .addTo(controller);

});
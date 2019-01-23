$(document).ready(function(){

  var span = $('#goal-video').find("span");
  var width = span[0].clientWidth;
  var windowWidth = $(window).width();
  var bothWidths = width + windowWidth;

  var goalVid = $("#video-background")[0];

  var tlGoal = anime.timeline({});

  tlGoal.add({
    targets: '.goal-ltr',
    translateX: [-width, windowWidth],
    easing: 'linear'
  }, 0);

  tlGoal.add({
    targets: '.goal-rtl',
    translateX: [width, -bothWidths],
    easing: 'linear'
  }, 0);

  var controller = new ScrollMagic.Controller();

  var goalScene = new ScrollMagic.Scene({
    triggerElement: '#goal-video',
    duration: '150%',
    triggerHook: 0.5
  })
  .setAnime(tlGoal)
  .on("enter", function () {
    goalVid.play();
  })
  .on("leave", function () {
    goalVid.pause();
  })
  // .addIndicators({name: 'goalScene', colorEnd: 'pink'})
  .addTo(controller);
});
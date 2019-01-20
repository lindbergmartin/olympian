$(document).ready(function(){

  var tlStats = anime.timeline({
    autoplay: false
  });

  var stats = {
    games: 0,
    minutes: 0,
    goals: 0,
    assists: 0
  };

  var games = $('#stat_games-played')[0];
  var minutes = $('#stat_minutes-played')[0];
  var goals = $('#stat_goals')[0];
  var assists = $('#stat_assists')[0];

  tlStats.add({
    targets: stats,
    games: 130,
    minutes: 50,
    goals: 70,
    assists: 30,
    round: 1,
    duration: 2000,
    delay: anime.stagger(500),
    easing: 'easeInOutQuart',
    update: function() {
      games.innerHTML = stats.games;
      minutes.innerHTML = stats.minutes;
      goals.innerHTML = stats.goals;
      assists.innerHTML = stats.assists;
    }
  });

  var controller = new ScrollMagic.Controller();

  var statsScene = new ScrollMagic.Scene({
    triggerElement: '#stats',
    triggerHook: 'onCenter',
    reverse: false
  })
  .setAnime(tlStats)
  .addIndicators({name: 'stats', colorEnd: 'pink'})
  .addTo(controller);

});
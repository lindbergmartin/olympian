$(document).ready(function(){

  var container = $(window);
  var spans = $("#goal-video span");

  $(window).resize(function() {
    var height = container.height();
    spans.css({
      "font-size": height / spans.length + "px",
      "line-height": height / spans.length + "px"
    });
  })
  .trigger("resize");

});
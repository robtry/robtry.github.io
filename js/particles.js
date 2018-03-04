document.addEventListener('DOMContentLoaded', function() {
  particleground(document.getElementById('particles'), {
    dotColor: 'rgba(255,255,255,0.35)',
    lineColor: 'rgba(255,255,255,0.35)'
  });
  var intro = document.getElementById('intro-title');
  intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);

$(function() {
  var w = $(window).width(),
    h = $(window).height();

  $('header').width(w);
  $('header').height(h);
  $('canvas').width(w);
  $('canvas').height(h);

  $(window).resize(function() {
    var w = $(window).width(),
      h = $(window).height();

    $('header').width(w);
    $('header').height(h);
    $('canvas').width(w);
    $('canvas').height(h);
  })
})
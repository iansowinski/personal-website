x = x - 1; // x  - number of slides in slideshow
var y = 0; // y - counter for slideshow
$(document).ready(function(){ // Function for 'next' and 'prev' navigation
  $('.next').click(function(){
    if (y<x) {
      $('#'+y).fadeOut(1);
      y = y + 1;
      $('#'+y).fadeIn(1);
    }
    else {
      $('#'+y).fadeOut(1);
      y = 0;
      $('#'+y).fadeIn(1);
    }
  });
  $('.prev').click(function(){
    if (y>0) {
      $('#'+y).fadeOut(1);
      y = y - 1;
      $('#'+y).fadeIn(1);
    }
    else {
      $('#'+y).fadeOut(1);
      y = x;
      $('#'+y).fadeIn(1);
    }
  });
});
$(document).keydown(function(e){ // function for keyboard arrows navigation
  switch (e.which) {
    case 37: //left
    if (y>0) {
      $('#'+y).fadeOut(1);
      y = y - 1;
      $('#'+y).fadeIn(1);
    }
    else {
      $('#'+y).fadeOut(1);
      y = x;
      $('#'+y).fadeIn(1);
    }
      break;
    case 39: //right
    if (y<x) {
      $('#'+y).fadeOut(1);
      y = y + 1;
      $('#'+y).fadeIn(1);
    }
    else {
      $('#'+y).fadeOut(1);
      y = 0;
      $('#'+y).fadeIn(1);
    }
      break;
    default: return
  }
});

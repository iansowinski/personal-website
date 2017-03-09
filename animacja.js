x = x - 1; // x  - number of slides in slideshow
var y = 0; // y - counter for slideshow
$(document).ready(function(){ // Function for 'next' and 'prev' navigation
  $('.next').click(function(){
    if (y<x) {
      $('#'+y).fadeOut("fast", function(){
        y = y + 1;
        $('#'+y).fadeIn("fast");});
    }
    else {
      $('#'+y).fadeOut("fast", function(){
        y = 0;
        $('#'+y).fadeIn("fast");});
    }
  });
  $('.prev').click(function(){
    if (y>0) {
      $('#'+y).fadeOut("fast", function(){
        y = y - 1;
        $('#'+y).fadeIn("fast");});
    }
    else {
      $('#'+y).fadeOut("fast", function(){
        y = x;
        $('#'+y).fadeIn("fast");});
    }
  });
});
$(document).keydown(function(e){ // function for keyboard arrows navigation
  switch (e.which) {
    case 37: //left
    if (y>0) {
      $('#'+y).fadeOut("fast", function(){
        y = y - 1;
        $('#'+y).fadeIn("fast");
      });
    }
    else {
      $('#'+y).fadeOut("fast", function(){
        y = x;
        $('#'+y).fadeIn("fast");
      });
    }
      break;
    case 39: //right
    if (y<x) {
      $('#'+y).fadeOut("fast", function(){
        y = y + 1;
        $('#'+y).fadeIn("fast");
      });
    }
    else {
      $('#'+y).fadeOut("fast", function(){
        y = 0;
        $('#'+y).fadeIn("fast");
      });
    }
      break;
    default: return
  }
});

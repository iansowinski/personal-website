x = x - 1; // x  - number of slides in slideshow
var y = 0; // y - counter for slideshow
$(document).ready(function(){ // Function for 'next' and 'prev' navigation
  $('.next').click(function(){
    if (y<x) {
      $('#'+y).fadeOut("slow", function(){
        y = y + 1;
        $('#'+y).fadeIn("slow");});
    }
    else {
      $('#'+y).fadeOut("slow", function(){
        y = 0;
        $('#'+y).fadeIn("slow");});
    }
  });
  $('.prev').click(function(){
    if (y>0) {
      $('#'+y).fadeOut("slow", function(){
        y = y - 1;
        $('#'+y).fadeIn("slow");});
    }
    else {
      $('#'+y).fadeOut("slow", function(){
        y = x;
        $('#'+y).fadeIn("slow");});
    }
  });
});
$(document).keydown(function(e){ // function for keyboard arrows navigation
  switch (e.which) {
    case 37: //left
    if (y>0) {
      $('#'+y).fadeOut("slow", function(){
        y = y - 1;
        $('#'+y).fadeIn("slow");
      });
    }
    else {
      $('#'+y).fadeOut("slow", function(){
        y = x;
        $('#'+y).fadeIn("slow");
      });
    }
      break;
    case 39: //right
    if (y<x) {
      $('#'+y).fadeOut("slow", function(){
        y = y + 1;
        $('#'+y).fadeIn("slow");
      });
    }
    else {
      $('#'+y).fadeOut("slow", function(){
        y = 0;
        $('#'+y).fadeIn("slow");
      });
    }
      break;
    default: return
  }
});

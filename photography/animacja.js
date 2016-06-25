x = x - 1;
var y = 0;
$(document).ready(function(){
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
$(document).keydown(function(e){
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

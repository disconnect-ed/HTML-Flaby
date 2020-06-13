$(document).ready(function() {
  let menu_link = $('.menu_link');
  let menu = $('.menu');
  let menu_point = $('.menu_point');

  menu_link.click(function() {
    menu_link.toggleClass('menu_link-active');
    menu.toggleClass('menu_inner-active');
  });

  menu_point.click(function() {
    menu_link.toggleClass('menu_link-active');
    menu.toggleClass('menu_inner-active');
  });


})

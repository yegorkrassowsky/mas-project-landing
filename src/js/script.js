$( window ).on('load', function(){
	$('body').removeClass('loading');
});

$(function() {
  new Splide( '.splide', {
    pagination: false,
    rewind: true,
  } ).mount();

  new Splide( '.splide-services', {
    perPage: 3,
    rewind : true,
  } ).mount();

  $('.nav-toggle-open').on('click', function(){
    $(this).parents('.nav-menu').addClass('open')
  });
  $('.nav-toggle-close').on('click', function(){
    $(this).parents('.nav-menu').removeClass('open')
  });
})


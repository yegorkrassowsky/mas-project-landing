$( window ).on('load', function(){
	$('body').removeClass('loading');
});

$(function() {
  new Splide( '#splide-main', {
    pagination: false,
    rewind: true,
  } ).mount();

  new Splide( '#splide-services', {
    perPage: 3,
    perMove: 1,
    rewind: true,
    pagination: false,
    focus: 'center',
    breakpoints: {
      820: {
        perPage: 2,
      },
      540: {
        perPage: 1,
      },
    }
  }).mount();

  $('.nav-toggle-open').on('click', function(){
    $(this).parents('.nav-menu').addClass('open')
  });
  $('.nav-toggle-close').on('click', function(){
    $(this).parents('.nav-menu').removeClass('open')
  });
})


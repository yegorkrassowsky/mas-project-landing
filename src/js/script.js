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

  const splideFeedback = new Splide( '#splide-feedback', {
    type: 'loop',
    arrows: false,
    perPage: 3,
    perMove: 1,
    pagination: false,
    breakpoints: {
      1000: {
        focus: 'center',
      },
      690: {
        perPage: 1,
      },
    }
  });

  function splideFeedbackUpdate(){
    $('.splide-count').text(`${splideFeedback.index+1}/${splideFeedback.length}`);
    const activeSlide = splideFeedback.Components.Elements.slides[splideFeedback.index];
    const newText = $('.feedback-card', activeSlide).data('text');
    $('.splide-text').text(newText);
  }

  splideFeedback.on('mounted', splideFeedbackUpdate);
  splideFeedback.on('active', splideFeedbackUpdate);

  $('#splide-feedback').find('.card-number').each(function(index, el){
    $(el).text((index+1).toString().padStart(2, '0'));
  });

  splideFeedback.mount();

  $('#splide-feedback-arrow-prev').on('click', function(){
    splideFeedback.go('-');
  });

  $('#splide-feedback-arrow-next').on('click', function(){
    splideFeedback.go('+');
  });

  $('.nav-toggle-open').on('click', function(){
    $(this).parents('.nav-menu').addClass('open')
  });
  $('.nav-toggle-close').on('click', function(){
    $(this).parents('.nav-menu').removeClass('open')
  });
})


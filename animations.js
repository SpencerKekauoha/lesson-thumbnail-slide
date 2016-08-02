$(window).scroll(function(){

  var winScroll = $(this).scrollTop();

  if(winScroll > $('.image-flow-container').offset().top - ($(window).height() / 2)) {
      $('.image-flow').each(function(i){
        setTimeout(function(){
          $('.image-flow').eq(i).addClass('is-showing');
        }, 150 * (i+1));
      });
    }

    if(winScroll > $('.fill-header').offset().top - ($(window).height() / 2)) {
        $('.image-flow').each(function(i){
          setTimeout(function(){
            $('.title').eq(i).addClass('is-showing');
          }, 150 * (i+1));
        });
      }
});

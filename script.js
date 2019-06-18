$(function() {
    $('.modal').click(function(event) {
  if(!$(event.target).closest('input,buttom').length) {
    $('.modal').hide();
  }
});
$('.glass').click(function(){
    $('.modal').show();
});
    $(window).ready(function (){
        $('.fadein').each(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
        });
    });
    $(window).scroll(function (){
        $('.back').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
            }
        });
    });
});

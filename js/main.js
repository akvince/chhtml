$('a[href^="#"]').click(function(){
    var section = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(section).offset().top
    }, 'slow');
    return false;
});

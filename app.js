$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
    $('#topBtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    });

   
    $('#topBtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    });
});

$('.navMenu').on('click', 'a', function (event) {
    event.preventDefault();
    const id = $(this).attr('href');
    const top = $(id).offset().top;
    $('.navMenu  a').removeClass('active');
    $(this).addClass('active')
    $('html').animate({
        scrollTop: top
    }, 1500)
})

$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 15) {
        $(".navBar").addClass('navBg');

    } else {
        $(".navBar").removeClass('navBg');
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel({
    rtl: true,
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

$('.link').click(function () {
    let id = $(this).attr("id");
    $("#artImg").attr("src", "/Images/" + id + ".JPG");
    if(!$(this).hasClass('activelink')){
        $('.link').removeClass('activelink')
        $(this).addClass('activelink')
    }
    else{
        $('.link').removeClass('activelink')
    }
})
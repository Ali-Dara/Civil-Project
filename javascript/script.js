$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 15) {
        $(".navBar").addClass('navBg');
        
    } else {
        $(".navBar").removeClass('navBg');
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
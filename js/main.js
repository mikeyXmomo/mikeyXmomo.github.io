// STICKY NAVBAR
$(window).on("scroll", function () {

    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar-default")

    if (bodyScroll > 300) {

        navbar.addClass("nav-scroll");

    } else {

        navbar.removeClass("nav-scroll");
    }
});
// END STICKY NAVBAR

// NAVBAR COLLAPSE
// close navbar-collapse when a  clicked
$(".nav a").on('click', function () {
    $(".navbar-collapse").removeClass("in").addClass("collapse");
});
// END NAVBAR COLLAPSE

// OWL CAROUSEL
$('.blog .owl-carousel').owlCarousel({
    margin: 30,
    loop: true,
    autoplay: true,
    smartSpeed: 500,
    responsiveClass: true,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// END OWL CAROUSEL

// SCROLL IT
$.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: 'swing', // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -10 // offste (in px) for fixed top navigation
});
// END SCROLL IT

// LOADER
$(window).on('load', function () {
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 500);
});
// END LOADER
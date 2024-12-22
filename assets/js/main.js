// Owl-Carousel untuk Recommended
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $(".owl-carousel").on("touchstart", function () {
        $(this).trigger("stop.owl.autoplay");
    });

    $(".owl-carousel").on("touchend", function () {
        $(this).trigger("play.owl.autoplay");
    });

    $(".owl-carousel").on("mouseenter", function () {
        $(this).trigger("stop.owl.autoplay");
    });

    $(".owl-carousel").on("mouseleave", function () {
        $(this).trigger("play.owl.autoplay");
    });
});

// Owl-Carousel untuk Testimoni
document.addEventListener('DOMContentLoaded', function () {
    const owlCarousel = document.querySelector('.testimonial-slider .owl-carousel');

    if (owlCarousel) {
        $(owlCarousel).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }
});

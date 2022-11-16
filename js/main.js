const owl = $(".owl-carousel");
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    items: 1,
    responsive: {
        540: {
            items: 3,
            startPosition: 1,
        },
        1000: {
            items: 3,
            margin: 20,
        },
        1200: {
            items: 3,
            margin: 30,
        },
    },
});
// Go to the next item
$(".slider__btn--next").click(function () {
    owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".slider__btn--prev").click(function () {
    owl.trigger("prev.owl.carousel");
});

// NAV ICON
const menuBtn = document.querySelector(".nav__toggle");
const menuIcon = document.querySelector(".menu-icon");
const navigation = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    menuIcon.classList.toggle("menu-icon-active");
    navigation.classList.toggle("nav--mobile");
    document.body.classList.toggle("no-scroll");
});

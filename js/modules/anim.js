var controller = new ScrollMagic.Controller();

function translateElem(elem, elemX, elemY, elemIndex) {
    $(elem).css({
        "-webkit-transform":
            "translate(" + elemX * (elemIndex + 1) + "px, " + elemY * (elemIndex + 1) + "px)",
        "-ms-transform":
            "translate(" + elemX * (elemIndex + 1) + "px, " + elemY * (elemIndex + 1) + "px)",
        transform:
            "translate(" + elemX * (elemIndex + 1) + "px, " + elemY * (elemIndex + 1) + "px)",
    });
}

var whyItemsTranslate = [];

translateElem($(".banner__img"), 0, 50, 0);

$(".example__wrap.grid-4 .example__item").each(function (index, item) {
    translateElem(item, 0, 50, index);
    whyItemsTranslate[index] = 50 * (index + 1);
});

var whyScene = new ScrollMagic.Scene({
    triggerElement: ".video",
    triggerHook: 0.5,
    duration: window.innerHeight / 2,
})
    .on("progress", function (event) {
        gsap.to($(".video-frame"), {
            y: 50 - 50 * event.progress,
        });

        $(".guide__item").each(function (index, item) {
            gsap.to($(item), {
                y: whyItemsTranslate[index] - whyItemsTranslate[index] * event.progress,
                duration: 0.3,
            });
        });
    })
    .addTo(controller);

var actualCarousel = 0;
var latters = ["preparado", "pronto", ""]
$(function () {
    var list = [];

    $('.slide').each(function (i, obj) {
        var area = $(obj).offset().top - $(window).height() + ($(obj).height() / 2);
        list.push({
            obj: obj,
            showing: $(window).scrollTop() > area
        });
    });

    $(window).scroll(function () {
        list.forEach(function (obj, i) {
            var html = $(obj.obj);
            var area = html.offset().top - $(window).height();
            let emTela = $(window).scrollTop() > area;
            let mostrando = html.hasClass('show');

            if (obj.showing == false && emTela) {
                html.addClass('show');
            } else if (emTela == false) {
                html.removeClass('show');
            }

            list[i].showing = mostrando;
        });
    });
});

function more() {

}

function nextCarousel() {

}

var sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function animateSpan(span, text) {
    new Promise(async function () {

    });
}
$(document).ready(function () {
    var sgBg = $('#singapore-image-slide-bg');
    var sgTitle = $('#singapore-image-slide h2');

    var oxBg = $('#oxford-image-slide-bg');
    var oxTitle = $('#oxford-image-slide h2');

    $(window).on('scroll', function () {
        sgPos = GetPos(sgBg);
        FadeOut(sgBg, sgPos);
        FadeIn(sgTitle, sgPos);

        oxPos = GetPos(oxBg);
        FadeOut(oxBg, oxPos);
        FadeIn(oxTitle, oxPos);
    })
});

// from 0.25 to 0.00, blur should increase and text should fade in
// from 0.00 onwards, it should stay blur

function GetPos(elem) {
    var st = $(this).scrollTop();
    var elemTop = elem.offset().top;
    var wh = $(window).height();
    var pos = (elemTop - st) / wh;
    return pos;
}

function Blur(elem, pos) {
    var amount = 1 - (Math.max(Math.min(pos, 0.25), 0) / 0.25);
    elem.css({ 'filter': 'blur(' + amount * 1 + 'vw)' });
}

function FadeIn(elem, pos) {
    var amount = 1 - (Math.max(Math.min(pos, 0.25), 0) / 0.25);
    elem.css({ 'opacity': amount });
}

function FadeOut(elem, pos) {
    var amount = 0.8 + 0.2 * (Math.max(Math.min(pos, 0.25), 0) / 0.25);
    elem.css({ 'opacity': amount });
}

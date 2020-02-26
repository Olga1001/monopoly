$(document).ready(function () {
    $('.card').each(function() {
        let homeLength = $(this).find('.card-home-img').length;
        if (homeLength <= 1) {
            $(this).find(".card-home-img").removeClass("size");
        } else {
            $(this).find(".card-home-img").addClass("size");
        }
    });
    $('.main-btns .btn').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.player-item').click(function() {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    $('.close').click(function() {
        $(this).closest(".chat").hide();
    });
    if($(".player-item").width() >= (390 * 100 / 1520)){
        $(this).addClass('flex');
    } else {
        $(".player-item").removeClass('flex');
    }
    $('.player-item, .player-item.height').hover(function() {
        $(this).toggleClass('height');
    });

    if($(".players").width() >= 460){
        $(".player-item").addClass('show');
    } else {
        $(".player-item").removeClass('show');
    }
});

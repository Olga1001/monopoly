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

    $('.player-item, .player-item.height').hover(function() {
        $(this).toggleClass('height');
    });

    window.addEventListener('resize', () => {
        let widthPlace = $(".player-item").width() - $(".player-col").width();
        if($(".player-info_container").width() <= widthPlace){
            $(".player-item").addClass('show');
        } else {
            $(".player-item").removeClass('show');
        }
    });

    tippy('.card-price', {
        content: 'Lorem ipsum dolor sit amet ',
        placement: 'top',
        theme: 'bg-medium',
    });
    tippy('.card-bookmark', {
        content: 'Lorem ipsum dolor sit amet ',
        placement: 'bottom-start',
        theme: 'bg-strong',
    });
    tippy('.balls-item', {
        content: 'Lorem ipsum dolor sit amet ',
        placement: 'bottom',
        theme: 'bg-light',
    });
    tippy('.card-img', {
        content: 'Lorem ipsum dolor sit amet ',
        placement: 'right',
        theme: 'bg-light',
    });
});

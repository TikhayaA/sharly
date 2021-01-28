$(document).ready(function() {
    setInterval(() => { 
        let content = $('.wrap-video_content p');
        let indexItem;
        content = Object.values(content);
        content.forEach((element, index) => {
            if ($(element).hasClass("active") === true) {
                indexItem = index;
                $(element).removeClass("active");
            }
        });
        let checkItem = indexItem + 3
        if (checkItem < content.length) {
            content[indexItem+1].classList.add("active");
        } else {
            content[0].classList.add("active");
        }
        
    }, 3000);
    $(".wrap-video_btn-play img").click(function(){
        $('.wrap-video_content').hide();
        $('.wrap-video_btn-play').hide();
        $(".wrap-video_logo").css({
            'transform': "scale(0.65)",
            'opacity': "0.5",
            'top': '-90px',
            'left': '-75px'
        });
        $(".wrap-video_logo__right").animate({
            right: "-2000px"
          }, 1000, function() {
            // Animation complete.
        });
        $(".wrap-video_logo__left").animate({
            left: "-2000px"
          }, 1000, function() {
            // Animation complete.
        });
        
        setTimeout(() => {$('video').trigger('play')}, 2000);
    });
    $('video').click(function() {
        $(this).trigger('pause');
        $(".wrap-video_logo").css({
            'opacity': "1",
        });
        $(".wrap-video_logo__right").animate({
            right: "0px",
          }, 500, function() {
        });
        $(".wrap-video_logo__left").animate({
            left: "0px"
          }, 500, function() {
            $('.wrap-video_btn-play').css({
                'margin-top': '60px'
            });
            $('.wrap-video_btn-play').show();
        });
    });
    $(".checkbox__toggle").click(function(){
        if ($(this).prop("checked") === true) {
            $('.language').toggleClass('language_checked');
        } else {
            $('.language').toggleClass('language_checked');
        }
    });
});
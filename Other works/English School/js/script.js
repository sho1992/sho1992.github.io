$(function() {
// モーダルウインドウ
  $('.modal-open').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.modal-page').fadeIn(360);
    } else {
      $('.modal-page').fadeOut(360);
    }
  });

// ページ内リンク
  $('.modal-item').click(function() {
    $('.modal-open').toggleClass('active');
    $('.modal-page').fadeOut(360);
  });

// 背景画像スライド
  $('.top-slide').bgSwitcher({
    images: ['img/blur_edges.jpg','img/blur_edges-2.jpg','img/blur_edges-3.jpg'],
    interval: 4000,
    loop: true
  });

// スライド
  var window_h = $(window).height();
  $(window).on('scroll',function() {
    var scroll_top = $(window).scrollTop();

    $('.slide-left').each(function() {
      var elem_pos = $(this).offset().top;

      if (scroll_top >= elem_pos - window_h + 150) {
        $(this).addClass('fadein-left');
      }
    });

    $('.slide-right').each(function() {
      var elem_pos = $(this).offset().top;
      if (scroll_top >= elem_pos - window_h + 150) {
        $(this).addClass('fadein-right');
      }
    });

    $('.voice_content').each(function() {
      var scroll_top = $(window).scrollTop();
      var elem_pos = $(this).offset().top;
      if (scroll_top >= elem_pos - window_h + 100) {
        $(this).css({transform: "scale(1)"});
      }
    });
  });

  var bgsc1 = 0;
  var bgsc2 = 0;
// 背景画像アニメーション
    setInterval(function() {
      bgsc1 += -0.3;
      bgsc2 += 0.3;

      $('.animetion').css('background-position', bgsc1 + 'px ' + bgsc2 + 'px');
  });
});

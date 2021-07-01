'use strict';

// スクロール
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html,body').animate({
      'scrollTop': position
    }, 500);
  })

// モーダル表示
  $('#modal-open').click(function() {
    $('#modal-page').slideDown();
  });

// モーダル閉じる
  $('#close-modal').click(function() {
    $('#modal-page').slideUp();
  });

  $('.change-page').click(function() {
    $('#modal-page').slideUp();
  });

// boxテキスト表示、非表示
  $('.content').hover(
    function() {
      $(this).find('.text-none').addClass('text-active');
    },
    function() {
      $(this).find('.text-none').removeClass('text-active');
    }
  );

// faqアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');

    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
    });
// スライド
    function toggleChangeBtn() {
      var slideIndex = $('.slide').index($('.active'));
      $('.change-btn').show();
      if (slideIndex == 0) {
        $('.prev-btn').hide();
      } else if (slideIndex == $('.slide').length - 1) {
        $('.next-btn').hide();
      }
    }

    $('.index-btn').click(function() {
      $('.active').removeClass('active');
      var clikedIndex = $('.index-btn').index($(this));
      $('.slide').eq(clikedIndex).addClass('active');
      toggleChangeBtn();
    });

    $('.change-btn').click(function() {
      var $displaySlide = $('.active');
      $displaySlide.removeClass('active');
      if ($(this).hasClass('next-btn')) {
        $displaySlide.next().addClass('active');
      } else {
        $displaySlide.prev().addClass('active');
      }
      toggleChangeBtn();
    });

    // エラーメッセージ

      $('#form').submit(function() {
        var selectItem = $('#select-form').val();
        var textItem = $('#text-form').val();
        if (textItem == '') {
          $('#error-message').text('理由を記入してください');
        } else {
          $('#error-message').text('');
        }
        $('#output-select').text(selectItem);
        $('#output-text').text(textItem);
        return false;
      });
// ボタン反映
      $('.option-btn').click(function() {
        var optionText = $(this).text();
        var clickedOption = $(this).attr('data-option');

        $('#text-form').val(optionText + 'が好きな理由は、');
        $('#select-form').val(clickedOption);
      });

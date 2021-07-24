
// モーダル関連
$('.modal-open').on('click',function() {
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $('#overlay, .modal-menu').fadeIn();
  } else {
    $('#overlay, .modal-menu').fadeOut();
  }
});

$('#overlay').on('click',function() {
  $('.modal-open').removeClass('active');
  $('#overlay, .modal-menu').fadeOut();
});

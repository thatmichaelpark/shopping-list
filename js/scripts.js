/* to do:
Style Clear button
add static image
*/

$(document).ready(function () {
  $('ul').on('mouseenter', 'li', function (){
    $(this).children().eq(1).addClass('show');
  });
  $('ul').on('mouseleave', 'li', function (){
    $(this).children().eq(1).removeClass('show');
  });
  $('ul').on('click', 'button.delete', function () {
    var li = $(this).parent();
    li.slideUp(500, function () {
      li.remove();
    });
  });
  $('ul').on('click', 'button.check:not(.checked)', function () {
    $(this).addClass('checked');
    $(this).parent().addClass('strikethrough');
  });
  $('ul').on('click', 'button.check.checked', function () {
    $(this).removeClass('checked');
    $(this).parent().removeClass('strikethrough');
  });
  $('button.add').click(function () {
    addItem();
  });
  $('button.clear').click(function () {
    ClearAll();
  });
  $(document).keydown(function (event) {
    if (event.which == 13) {  // Enter
      addItem();
   }
  });
  $(document).keydown(function (event) {
    if (event.which == 46) {  // Delete
      ClearAll();
   }
  });
  function addItem() {
    if ($('input.newitem').val().trim()) {
      $('#list').append('<li><button class="check">&#10004;</button>'+$('input.newitem').val()+'<button class="delete">✖</button></li>');
      $('#list').children().last().slideDown(500);
      $('input.newitem').val('');
      $('input.newitem').focus();
    }
  }
  function ClearAll() {
    $('ul').slideUp(500, function () {
      $('ul').empty().show();
    });
    $('input.newitem').val('');
    $('input.newitem').focus();
  }
});
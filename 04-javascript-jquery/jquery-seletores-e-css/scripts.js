$(function () {
  let azuis = $('.item-azul');
  let vermelhos = $('.item-vermelho');
  let btnAzuis = $('#faca-azul');
  let btnVermelhos = $('#faca-vermelho');
  let btnChange = $('.btn-change');
  let btnRemove = $('.btn-remove');
  let btnToggle = $('.btn-toggle');
  let items = $('h1');

  btnAzuis.click(function () {
    azuis.css('color', 'blue');
    $('body').css('background-color', 'blue');
  });

  btnVermelhos.click(function () {
    vermelhos.css({
      color: 'red',
      backgroundColor: 'black',
    });
    $('body').css('background-color', 'red');
  });

  btnChange.click(function () {
    items.addClass('change-items');
  });

  btnRemove.click(function () {
    items.removeClass('change-items');
  });

  btnToggle.click(function () {
    items.toggleClass('change-items');
  });
});

$(document).ready(() => {
  let win = $(window)
  set_sizes(win)
  $('.greenery img').show();
})


$(window).on('resize', () => {
  set_sizes($(this))
});

const set_sizes = (window) => {
  const $top = $('.greenery-top');
  const $left = $('.greenery-left');
  const $right = $('.greenery-right');
  const calc = (1500 - window.width())

  console.log(window.width())
  if (window.width() < 1500 && window.width() >= 1182) {
    $top.css({ left: -calc/4, width: window.width() + calc/2});

    $left.css({ left: -calc/2, top: -calc/3});
    $right.css({ right: -calc/2, top: -calc/3});
  } else if (window.width() <= 1181 && window.width() >= 560) {
    $top.css({ left: -calc/2, width: window.width() + calc});

    $left.css({ left: -calc/4, top: calc/7 });
    $right.css({ right: -calc/4, top: calc/7 });
  } else if (window.width() <= 559) {
    $top.css({ left: -calc/2, width: window.width() + calc});

    $left.css({ left: -235.25, top: -156.833 });
    $right.css({ right: -235.25, top: -156.833 });
  } else {
    $top.css({ left: 0, width: window.width()});

    $left.css({ left: 0, top: 0 });
    $right.css({ right: 0, top: 0 });
  }
}

$(window).on('pageshow', function () {
  const $slide = $('.slide'),
    $slideGroup = $('.slide-group'),
    $bullet = $('.bullet');

  let slidesTotal = $slide.length - 1,
    current = 0,
    isAutoSliding = true;

  $bullet.first().addClass('current');

  const clickSlide = function () {
    window.clearInterval(autoSlide);
    isAutoSliding = false;

    let slideIndex = $bullet.index($(this));

    updateIndex(slideIndex);
  };

  const updateIndex = function (currentSlide) {
    if (isAutoSliding) {
      if (current === slidesTotal) {
        current = 0;
      } else {
        current++;
      }
    } else {
      current = currentSlide;
    }

    $bullet.removeClass('current');
    $bullet.eq(current).addClass('current');

    transition(current);
  };

  const transition = function (slidePosition) {
    $slideGroup.animate({
      top: '-' + slidePosition + '00%',
    });
  };

  $bullet.on('click', clickSlide);

  const autoSlide = window.setInterval(updateIndex, 5000);
});

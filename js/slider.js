$(function () {
  const $slide = $('.slide'),
    $slideGroup = $('.slide-group'),
    $bullet = $('.bullet');

  let slidesTotal = $slide.length - 1,
    current = 0,
    isAutoSliding = true;

  $bullet.first().addClass('current');

  const clickSlide = (e) => {
    window.clearInterval(autoSlide);
    isAutoSliding = false;

    let clickedBullet = $bullet.filter($(e.target));
    let slideIndex = $bullet.index(clickedBullet);

    updateIndex(slideIndex);
  };

  const updateIndex = (currentSlide) => {
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

  const transition = (slidePosition) => {
    $slideGroup.animate({
      top: '-' + slidePosition + '00%',
    });
  };

  $bullet.on('click', clickSlide);

  const autoSlide = window.setInterval(updateIndex, 5000);
});

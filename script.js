console.log("Portfolio loaded!");

document.querySelectorAll('.project-swiper').forEach(swiperEl => {
  new Swiper(swiperEl, {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true
    },
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev')
    }
  });
});

import Swiper from './swiper-bundle.min.js';

export default function decorate(block) {
  Array.from(block.parentElement.parentElement.parentElement.children).forEach(() => {});
  const slideUrls = [
    'https://www.google.com',
    'https://www.facebook.com',
    'https://www.twitter.com',
  ];

  const swipperWrapper = document.createElement('div');
  swipperWrapper.classList.add('swiper-wrapper');
  Array.from(block.children).forEach((row) => {
    row.classList.add('swiper-slide');
    swipperWrapper.append(row);
  });
  block.append(swipperWrapper);
  const paginationWrapper = document.createElement('div');
  paginationWrapper.classList.add('swiper-pagination');
  block.append(paginationWrapper);

  const prevBtn = document.createElement('div');
  prevBtn.classList.add('swiper-button-prev');
  const nextBtn = document.createElement('div');
  nextBtn.classList.add('swiper-button-next');
  block.append(prevBtn, nextBtn);

  const cobfig = {

    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
      click(swiper) {
        const { clickedIndex } = swiper; // Get the index of the clicked slide
        if (clickedIndex !== undefined && slideUrls[clickedIndex]) {
          window.location.href = slideUrls[clickedIndex]; // Redirect to the corresponding URL
        }
      },
    },
  };

  Swiper(block, cobfig);
}

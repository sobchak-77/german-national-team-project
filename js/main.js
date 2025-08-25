gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    //* оболочка
    wrapper: '.page-wrapper',
    //* то, что будет анимироваться
    content: '.page-content',
  
    smooth: 1.5,
    effects: true,
  });
  
  gsap.fromTo('.header', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      //* trigger - элемент, появляющийся в поле зрения,
      //* при его появлении происходят следующие события..
      trigger: '.header',
      start: 'center',
      end: '820',
      scrub: true
    },
  });
  
  const itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');
  itemsLeft.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -50 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true,
      },
    });
  });
  
  const itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');
  itemsRight.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 50 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-750',
        end: 'top',
        scrub: true,
      },
    });
  });
}
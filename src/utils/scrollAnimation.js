// Scroll animation utility for boxes and cards
let observer = null;

export const initScrollAnimations = () => {
  // Disconnect existing observer if it exists to avoid duplicates
  if (observer) {
    observer.disconnect();
  }
  
  // Target all boxes and cards that should animate
  const animatedElements = document.querySelectorAll(
    '.skills__content, .services__content, .work__card, .about__box, .about__img, .qualification__data, .contact__card'
  );
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-visible');
      } else {
        // Remove visible class when element leaves viewport so it can animate again
        entry.target.classList.remove('scroll-visible');
      }
    });
  }, observerOptions);

  animatedElements.forEach(element => {
    observer.observe(element);
  });
};


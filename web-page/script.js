document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
  
    slides.forEach(slideSection => {
      const slide = slideSection.querySelector('.carousel-slide');
      const nextBtn = slideSection.querySelector('.carousel-btn.next');
      const prevBtn = slideSection.querySelector('.carousel-btn.prev');
      const card = slideSection.querySelector('.card');
  
      if (!slide || !nextBtn || !prevBtn || !card) return;
  
      const cardWidth = card.offsetWidth + 32; // ajuste a margem conforme seu CSS
  
      nextBtn.addEventListener('click', () => {
        slide.scrollBy({ left: cardWidth, behavior: 'smooth' });
      });
  
      prevBtn.addEventListener('click', () => {
        slide.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      });
    });
  });

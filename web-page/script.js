document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slideSection) => {
    const slide = slideSection.querySelector(".carousel-slide");
    const nextBtn = slideSection.querySelector(".carousel-btn.next");
    const prevBtn = slideSection.querySelector(".carousel-btn.prev");
    const card = slideSection.querySelector(".card");

    if (!slide || !nextBtn || !prevBtn || !card) return;

    const cardWidth = card.offsetWidth + 32;

    nextBtn.addEventListener("click", () => {
      slide.scrollBy({ left: cardWidth, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      slide.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const categoriasTrigger = document.querySelector(".categorias");
  const departamentoTrigger = document.querySelector(".nav-departamento");
  const modal = document.querySelector(".dropdown-modal");

  categoriasTrigger.addEventListener("mouseenter", () => {
    modal.classList.add("show-categorias");
    modal.classList.remove("show-departamento");
  });

  departamentoTrigger.addEventListener("mouseenter", () => {
    modal.classList.add("show-departamento");
    modal.classList.remove("show-categorias");
  });

  modal.addEventListener("mouseleave", () => {
    modal.classList.remove("show-categorias", "show-departamento");
  });

  const wrapper = document.querySelector(".categorias-wrapper");
  wrapper.addEventListener("mouseleave", () => {
    modal.classList.remove("show-categorias", "show-departamento");
  });
});
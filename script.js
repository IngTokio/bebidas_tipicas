function initRegionEvents() {
  document.getElementById('region1')?.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = '<h3>Región Andina</h3><p>Bebidas y platos típicos de la Región Andina.</p>';
  });
  document.getElementById('region2')?.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = '<h3>Región Caribe</h3><p>Bebidas y platos típicos de la Región Caribe.</p>';
  });
  document.getElementById('region1')?.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = '<h3>Región Andina</h3><p>Bebidas y platos típicos de la Región Andina.</p>';
  });
  document.getElementById('region1')?.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = '<h3>Región Andina</h3><p>Bebidas y platos típicos de la Región Andina.</p>';
  });
  document.getElementById('region1')?.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = '<h3>Región Andina</h3><p>Bebidas y platos típicos de la Región Andina.</p>';
  });
  document.getElementById('region1')?.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.style.display = 'block';
    content.innerHTML = '<h3>Región Andina</h3><p>Bebidas y platos típicos de la Región Andina.</p>';
  });
  
}

function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i]?.classList.toggle("active", i === index);
    });
  }

  function changeSlide(step) {
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function setSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  if (slides.length > 0) {
    document.querySelector(".nav.prev")?.addEventListener("click", () => changeSlide(-1));
    document.querySelector(".nav.next")?.addEventListener("click", () => changeSlide(1));
    dots.forEach((dot, i) => dot.addEventListener("click", () => setSlide(i)));
    showSlide(currentIndex);
  }
}

window.onload = () => {
  initRegionEvents();
  initSlider();
};

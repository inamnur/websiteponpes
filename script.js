
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentPosition = 0;
const totalImages = 5; // Jumlah total gambar

nextBtn.addEventListener('click', () => {
  currentPosition = (currentPosition + 1) % totalImages;
  slider.style.transform = `translateX(-${currentPosition * (100 / totalImages)}%)`;
});

prevBtn.addEventListener('click', () => {
  currentPosition = (currentPosition - 1 + totalImages) % totalImages;
  slider.style.transform = `translateX(-${currentPosition * (100 / totalImages)}%)`;
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider img");
  let index = 0;
  
  function nextSlide() {
      index = (index + 1) % images.length;
      updateSlider();
  }

  function prevSlide() {
      index = (index - 1 + images.length) % images.length;
      updateSlider();
  }

  function updateSlider() {
      slider.style.transform = `translateX(${-index * 100}%)`;
  }

  document.querySelector(".next-btn").addEventListener("click", nextSlide);
  document.querySelector(".prev-btn").addEventListener("click", prevSlide);

let slideIndex = 0;
function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex].style.display = "block";
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000);
}
document.addEventListener("DOMContentLoaded", showSlides);

});





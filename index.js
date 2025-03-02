const images = document.querySelectorAll(`[data-src]`); 
const showBtn = document.querySelector("#show-btn"); 
showBtn.addEventListener("click", () => {
  images.forEach((img) => {
    observer.observe(img); 
  });
});
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src; 
      observer.unobserve(entry.target); 
    }
  });
});

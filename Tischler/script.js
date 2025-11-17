// --- Fade-in Animation beim Scrollen ---
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeEls.forEach(el => observer.observe(el));

// --- Sanftes Einblenden des Headers ---
window.addEventListener("load", () => {
  const logo = document.querySelector(".logo");
  logo.classList.add("fade-in-top");
});

// --- Glühender Mauszeiger mit Funken (scrollfix & smooth) ---
const cursor = document.querySelector('.glow-cursor');
const sparkContainer = document.querySelector('.spark-container');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

window.addEventListener('mousemove', (e) => {
  // jetzt clientX/Y statt pageX/Y → scrollstabil!
  mouseX = e.clientX;
  mouseY = e.clientY;

  // weniger Funken für Performance
  if (Math.random() < 0.15) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;

    const angle = Math.random() * 2 * Math.PI;
    const distance = 20 + Math.random() * 20;
    spark.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    spark.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

    sparkContainer.appendChild(spark);
    setTimeout(() => spark.remove(), 600);
  }
});

// weiche Bewegung des Cursors per requestAnimationFrame
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;
  cursor.style.transform = `translate(${cursorX - 7}px, ${cursorY - 7}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

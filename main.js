// ========== NAV ACTIVE ==========
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// ========== BACK TO TOP BUTTON ==========
const topBtn = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  topBtn.style.opacity = window.scrollY > 300 ? "1" : "0";
});

// ========== DARK / LIGHT MODE ==========
const modeBtn = document.createElement("button");
modeBtn.className = "theme-btn";
modeBtn.innerHTML = "🌙";
document.body.appendChild(modeBtn);

let isLight = false;

modeBtn.addEventListener("click", () => {
  isLight = !isLight;
  document.body.classList.toggle("light-mode");
  modeBtn.innerHTML = isLight ? "☀️" : "🌙";
});

// ========== SCROLL REVEAL ==========
function revealCards() {
  document.querySelectorAll(".card").forEach((card) => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// ========== SKILL BADGE POP ==========
document.querySelectorAll(".skills-list li").forEach((skill) => {
  skill.addEventListener("click", () => {
    skill.style.transform = "scale(1.15)";
    setTimeout(() => (skill.style.transform = "scale(1)"), 300);
  });
});

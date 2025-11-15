// ========== 1. NAV ACTIVE ON CLICK ==========
var navItems = document.querySelectorAll(".nav-item");

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    for (var j = 0; j < navItems.length; j++) {
      navItems[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// ========== 2. BACK TO TOP BUTTON SHOW/HIDE ==========
var topBtn = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.opacity = "1";
  } else {
    topBtn.style.opacity = "0";
  }
});

// ========== 3. DARK / LIGHT MODE ==========
var modeBtn = document.createElement("button");
modeBtn.innerHTML = "🌙";
modeBtn.style.position = "fixed";
modeBtn.style.top = "1rem";
modeBtn.style.right = "1rem";
modeBtn.style.padding = "8px 12px";
modeBtn.style.borderRadius = "8px";
modeBtn.style.zIndex = "9999";
document.body.appendChild(modeBtn);

var isLight = false;

modeBtn.addEventListener("click", function () {
  if (isLight === false) {
    document.body.classList.add("light-mode");
    modeBtn.innerHTML = "☀️";
    isLight = true;
  } else {
    document.body.classList.remove("light-mode");
    modeBtn.innerHTML = "🌙";
    isLight = false;
  }
});

// ========== 4. REVEAL SECTIONS ON SCROLL ==========
var cards = document.querySelectorAll(".card");

function reveal() {
  for (var i = 0; i < cards.length; i++) {
    var windowHeight = window.innerHeight;
    var cardTop = cards[i].getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      cards[i].style.opacity = "1";
      cards[i].style.transform = "translateY(0)";
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ========== 5. SKILL BADGES CLICK EFFECT ==========
var skills = document.querySelectorAll(".skills-list li");

for (var i = 0; i < skills.length; i++) {
  skills[i].addEventListener("click", function () {
    this.style.transform = "scale(1.15)";
    this.style.transition = "0.3s";

    var that = this;
    setTimeout(function () {
      that.style.transform = "scale(1)";
    }, 300);
  });
}

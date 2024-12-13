function handleSubmit(event) {
  event.preventDefault();
  alert("تم استلام طلبك بنجاح. سنتواصل معك قريباً.");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  const navBackground = document.querySelector(".nav-background");
  if (window.scrollY > 100) {
    navBackground.classList.add("visible");
  } else {
    navBackground.classList.remove("visible");
  }
});

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".service-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease-out";
  observer.observe(card);
});

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav");

mobileNavToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

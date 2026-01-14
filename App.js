document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => io.observe(el));
});

document.getElementById("year").textContent = new Date().getFullYear();

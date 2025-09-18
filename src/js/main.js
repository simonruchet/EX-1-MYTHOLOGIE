// Burger menu
const burgerBtn = document.querySelector("#burger-btn");
const burgerMenu = document.querySelector(".burger-menu");
burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

// Bouton dark mode et light mode
const modeBtn = document.querySelector(".burger-menu-mode");

modeBtn.addEventListener("click", () => {
  const html = document.querySelector("html");
  if (html.getAttribute("data-theme") === "dark") {
    html.setAttribute("data-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
  }
});

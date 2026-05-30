const buttons = document.querySelectorAll(".theme-button");
const savedTheme = localStorage.getItem("namecard-theme") || "light";

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("namecard-theme", theme);
  buttons.forEach((button) => {
    const active = button.dataset.themeOption === theme;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeOption));
});

setTheme(savedTheme);

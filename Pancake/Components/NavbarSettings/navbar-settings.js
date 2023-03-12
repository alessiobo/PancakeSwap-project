const icon_settings = document.querySelector(".navbar-btn-option");
const icon_X = document.querySelector(".nav-settings-icon-x");
const settingsSection = document.querySelector(".nav-settings-section");

const html = document.getElementById("html");
document.addEventListener("DOMContentLoaded", function () {
  icon_settings.addEventListener("click", () => {
    settingsSection.classList.remove("hidden");

    html.style.overflow = "hidden";
  });
});

icon_X.addEventListener("click", () => {
  settingsSection.classList.add("hidden");
  html.style.overflow = "auto";
});

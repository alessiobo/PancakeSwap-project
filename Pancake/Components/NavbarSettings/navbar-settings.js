const icon_settings = document.querySelector(".navbar-btn-option");
const icon_X = document.querySelector(".nav-settings-icon-x");
const settingsSection = document.querySelector(".nav-settings-section");

icon_settings.addEventListener("click", () => {
  settingsSection.classList.remove("hidden");
});

icon_X.addEventListener("click", () => {
  settingsSection.classList.add("hidden");
});

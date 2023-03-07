const toggleBtn = document.querySelector(".click-data");
const toggleSpan = document.querySelector(".mobile-span");
const farmsData = document.querySelector(".farms-data");
const syrupData = document.querySelector(".syrup-data");

function clickToggle() {
  farmsData.classList.toggle("hidden");
  syrupData.classList.toggle("hidden");
  toggleSpan.textContent = farmsData.classList.contains("hidden")
    ? " Syrup Pools"
    : " Farms";
}

toggleBtn.addEventListener("click", clickToggle);
setInterval(clickToggle, 5000);

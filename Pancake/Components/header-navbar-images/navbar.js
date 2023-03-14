const img = document.querySelector(".navbar-img-logo");

function updateImageSrc() {
  if (window.innerWidth < 970) {
    img.src = "../DesignSystem/images/Logo/bunny-color.svg";
  } else {
    img.src = "../DesignSystem/images/Logo/color-black.svg";
  }
}

window.addEventListener("resize", updateImageSrc);

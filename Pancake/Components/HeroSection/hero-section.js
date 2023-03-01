//Crea una copia del DOM di hero-slideBar per poterlo utilizzare quando si resetta il DOM
let initialContent = document.createDocumentFragment();
let myElement = document.getElementById("hero-slideBar");
for (var i = 0; i < myElement.childNodes.length; i++) {
  initialContent.appendChild(myElement.childNodes[i].cloneNode(true));
}

startNewCircle();

intervall();

function intervall() {
  let count = 1;
  setInterval(() => {
    if (count === 1) {
      count++;
      changeSecondBanner();
    } else if (count === 2) {
      count++;
      changeThirdBanner();
    } else if (count === 3) {
      count = 1;
      resetDOM();
    }

    // console.log(count);
  }, 3000);
}
//Resetta appunto il DOM da tutte le modifiche apportate (ad esempio quando cambiamo scheda nel banner)
function resetDOM() {
  myElement.innerHTML = "";
  let clone = initialContent.cloneNode(true);
  myElement.appendChild(clone);

  changeBannerBackground(1);

  startNewCircle();
}

function changeBannerBackground(num) {
  //Gestire errore su caricamento immagine di sfondo del primo banner
  if (num === 0) {
    const bgImg = document.querySelector(".hero-slideBar-content-img");

    bgImg.style.background = `url("./Components/HeroSection/images/hero-slidebar-bg1.webp")`;
    bgImg.style.backgroundRepeat = "no-repeat";
    bgImg.style.backgroundSize = "contain";
  }

  const bgImg = document.querySelector(".hero-slideBar");

  bgImg.style.background = `url("./Components/HeroSection/images/bg-slider-${num}.png")`;
  bgImg.style.backgroundRepeat = "no-repeat";
  bgImg.style.backgroundSize = "cover";
}

function changeBanner(num) {
  const btnSlider1 = document.getElementById("slider1");
  const btnSlider2 = document.getElementById("slider2");
  const btnSlider3 = document.getElementById("slider3");

  const upText = document.querySelector(".hero-slideBar-content").children[0];
  const centralText = document.querySelector(".hero-slideBar-content")
    .children[1];
  const firstBtn = document.querySelector(".hero-slideBar-buttons").children[0];
  const secondBtn = document.querySelector(".hero-slideBar-buttons")
    .children[1];
  const bunnyImg = document.querySelector(".hero-slideBar-img").children[0];
  const bgStars = document.querySelector(".hero-slideBar-content-img");

  upText.innerHTML = `<img style="width: 233px;" src="./Components/HeroSection/images/AptosXPancakeSwap.webp"/>`;
  if (num === 2) {
    centralText.innerHTML = "Hello Aptos Project Teams!";
    firstBtn.style.display = "none";
    secondBtn.style.backgroundColor = "#1fc7d4";
    secondBtn.children[0].children[0].innerHTML = "👋 Get in Touch!";
    secondBtn.children[0].children[0].style.fontSize = "15px";
    secondBtn.children[0].children[0].style.color = "#fff";
    secondBtn.children[0].children[1].children[0].style.filter =
      "invert(100%) sepia(96%) saturate(0%) hue-rotate(81deg) brightness(102%) contrast(109%)";

    bunnyImg.src = "./Components/HeroSection/images/hero-slidebar-bunny-2.webp";

    bunnyImg.classList.remove("hero-slideBar-img-bunny1");
    bunnyImg.classList.add("hero-slideBar-img-bunny2");

    bgStars.classList.remove("hero-slideBar-content-img");

    changeBannerBackground(2);

    btnSlider1.style["background-color"] = "transparent";
    btnSlider2.style["background-color"] = "white";
    btnSlider3.style["background-color"] = "transparent";
  }

  if (num === 3) {
    upText.innerHTML = `Perpetual Futures`;

    centralText.innerHTML = "UP TO 100x LEVERAGE";
    secondBtn.style.display = "none";
    firstBtn.children[0].children[0].innerHTML = "Trade Now";
    firstBtn.style.width = "168px";
    firstBtn.children[0].children[0].style.fontSize = "15px";

    bunnyImg.src = "./Components/HeroSection/images/hero-slidebar-bunny-3.webp";

    bunnyImg.classList.remove("hero-slideBar-img-bunny2");
    bunnyImg.classList.add("hero-slideBar-img-bunny3");

    bgStars.classList.remove("hero-slideBar-content-img");

    changeBannerBackground(3);

    btnSlider1.style["background-color"] = "transparent";
    btnSlider2.style["background-color"] = "transparent";
    btnSlider3.style["background-color"] = "white";
    btnSlider3.style["border-radius"] = "0px 4px 4px 0";
  }
}

function changeSecondBanner() {
  resetDOM();
  changeBanner(2);
}

function changeThirdBanner() {
  resetDOM();
  changeBanner(3);
}
//Funzione che crea nuovo ciclo, predisponendo i bottoni per essere attivati
function startNewCircle() {
  const btnSlider1 = document.getElementById("slider1");
  const btnSlider2 = document.getElementById("slider2");
  const btnSlider3 = document.getElementById("slider3");

  changeBannerBackground(0);
  changeBannerBackground(1);

  btnSlider1.addEventListener("click", () => {
    resetDOM();
  });
  btnSlider2.addEventListener("click", () => {
    changeSecondBanner();
  });
  btnSlider3.addEventListener("click", () => {
    changeThirdBanner();
  });
}
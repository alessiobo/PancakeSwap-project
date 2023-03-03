//Crea una copia del DOM di hero-slideBar per poterlo utilizzare quando si resetta il DOM
let initialContent = document.createDocumentFragment();
let myElement = document.getElementById("hero-slideBar");
for (var i = 0; i < myElement.childNodes.length; i++) {
  initialContent.appendChild(myElement.childNodes[i].cloneNode(true));
}

startNewCircle();

//Resetta appunto il DOM da tutte le modifiche apportate (ad esempio quando cambiamo scheda nel banner)
function resetDOM() {
  myElement.innerHTML = "";
  let clone = initialContent.cloneNode(true);
  myElement.appendChild(clone);

  changeBannerBackground(1);

  startNewCircle();
}

function changeBannerBackground(num) {
  const bgImg = document.querySelector(".hero-slideBar");

  if (num === 1) {
    bgImg.style.background = `radial-gradient(
    104.12% 231.19% at -4.12% -5.83%,
    rgb(0, 87, 174) 0.52%,
    rgb(102, 124, 198) 67.41%,
    rgb(25, 229, 245) 100%)`;
    return;
  }
  if (num === 2) {
    bgImg.style.background =
      "linear-gradient(rgb(0, 191, 165) 0%, rgb(0, 90, 90) 100%)";
    return;
  }
  if (num === 3) {
    bgImg.style.background =
      "-webkit-linear-gradient(top, rgb(118, 69, 217) 0%, rgb(69, 42, 122) 100%)";
    return;
  }
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

    bunnyImg.classList.remove("hero-slideBar-img-bunny1");
    bunnyImg.classList.add("hero-slideBar-img-bunny3");

    //forse qui

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

  changeBannerBackground(1);

  btnSlider1.addEventListener("click", () => {
    resetDOM();
    resetIntervall(1);
  });
  btnSlider2.addEventListener("click", () => {
    changeSecondBanner();
    resetIntervall(2);
  });
  btnSlider3.addEventListener("click", () => {
    changeThirdBanner();
    resetIntervall(3);
  });
}

//LOGICA: Intervallo con Click

//variabile di controllo, se è null non c'è nessun intervallo attivo
var intervallID = null;

//inizia intervallo da (num) che gli abbiamo passato con il click, il banner1 è 1,...

function startIntervall(num) {
  if (!intervallID) {
    let count = num;
    intervallID = setInterval(() => {
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
    }, 6000);
  }
}

function stopIntervall() {
  if (intervallID) {
    clearInterval(intervallID);
    intervallID = null;
  }
}

function resetIntervall(num) {
  stopIntervall();
  startIntervall(num);
}

//Inizia l'intervallo appena caricato il DOM con parametro 1(primo banner)
startIntervall(1);

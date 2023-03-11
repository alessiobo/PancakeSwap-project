const inputChangeMode = document.getElementById("switch-btn");

inputChangeMode.addEventListener("change", () => {
  const mode = inputChangeMode.checked;

  //GLOBAL DARK:
  const btns = document.querySelectorAll("button");

  //
  //HERO_SECTION_DARK-----------------------------------
  const herobg = document.querySelector(".hero-section");
  const herop = document.querySelector(".hero-homepage-text-parag");
  const heroWave = document.getElementById("hero-wave");

  //TWIN_SECTION_DARK-----------------------------------
  const twinbg = document.querySelector(".section3-wrapper");
  const twin3title = document.querySelector(".twin-section-title");
  const twindivider = document.querySelector(".svg-divider");
  const twinbg4 = document.querySelector(".section4");
  const twin4title = document.querySelector(".twin-section2-title");
  const twintabtitle = document.querySelector(".tab-title");
  const twinclick = document.querySelector(".click-btn");
  const twindatap = document.querySelectorAll(".data-paragraph");


  //DARK
  if (mode === true) {
    //GLOBAL DARK:

    btns.forEach((btn) => {
      btn.classList.replace("btn", "btn-dark");
      btn.classList.replace("btn-square", "btn-square-dark");
    });

    //HERO_SECTION_DARK

    const herobg = document.querySelector(".hero-section");
    const herop = document.querySelector(".hero-homepage-text-parag");

    

    herobg.classList.add("hero-section-dark");
    herop.classList.add("hero-homepage-text-parag-dark");
    heroWave.src = "./Components/HeroSection/images/wave-bg-d.svg";

    //TWIN_SECTION_DARK

    const twinbg = document.querySelector(".section3-wrapper");
    const twin3title = document.querySelector(".twin-section-title");
    const twindivider = document.querySelector(".svg-divider");
    const twinbg4 = document.querySelector(".section4");
    const twin4title = document.querySelector(".twin-section2-title");
    const twintabtitle = document.querySelector(".tab-title");
    const twinclick = document.querySelector(".click-btn");
    const twindatap = document.querySelectorAll(".data-paragraph");

    twinbg.classList.add("section3-wrapper-dark");
    twin3title.classList.add("twin-section-title-dark");
    twindivider.classList.add("svg-divider-dark");
    twinbg4.classList.add("section4-dark");
    twin4title.classList.add("twin-section2-title-dark");
    twintabtitle.classList.add("tab-title-dark");
    twinclick.classList.add("click-btn-dark");
    for (let i = 0; i < twindatap.length; i++) {
      twindatap[i].classList.add("data-paragraph-dark");
    }

    //LIGHT
  } else if (mode === false) {
    //GLOBAL LIGHT:
    btns.forEach((btn) => {
      btn.classList.replace("btn-dark", "btn");
      btn.classList.replace("btn-square-dark", "btn-square");
    });

    //HERO_SECTION_LIGHT
    herobg.classList.remove("hero-section-dark");
    herop.classList.remove("hero-homepage-text-parag-dark");
    heroWave.src = "./Components/HeroSection/images/wave-bg.svg";


    //TWIN_SECTION_LIGHT
    twinbg.classList.remove("section3-wrapper-dark");
    twin3title.classList.remove("twin-section-title-dark");
    twindivider.classList.remove("svg-divider-dark");
    twinbg4.classList.remove("section4-dark");
    twin4title.classList.remove("twin-section2-title-dark");
    twintabtitle.classList.remove("tab-title-dark");
    twinclick.classList.remove("click-btn-dark");
    for (let i = 0; i < twindatap.length; i++) {
      twindatap[i].classList.remove("data-paragraph-dark");
    }

  }
});

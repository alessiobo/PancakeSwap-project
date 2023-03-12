const inputChangeMode = document.getElementById("switch-button");

document.addEventListener("DOMContentLoaded", function () {
  inputChangeMode.addEventListener("change", () => {
    const mode = inputChangeMode.checked;

    //GLOBAL DARK:
    const btns = document.querySelectorAll("button");

    //
    //HERO_SECTION_DARK-----------------------------------
    const herobg = document.querySelector(".hero-section");
    const herop = document.querySelector(".hero-homepage-text-parag");
    const heroWave = document.getElementById("hero-wave");
    //ORANGE_SECTION_DARK
    const OrangeSection = document.querySelector(".orange-section");
    const OrangeSectionDark = document.querySelector(".orange-section-dark");

    //CARD_SECTION_DARK-----------------------------------

    const cardSection = document.querySelector(".card-section");
    const cardTitleH2 = document.querySelector(".card-title-h2");

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

      herobg.classList.add("hero-section-dark");
      herop.classList.add("hero-homepage-text-parag-dark");
      heroWave.src = "./Components/HeroSection/images/wave-bg-d.svg";

      //ORANGE_SECTION_DARK
      OrangeSection.classList.add("orange-section-dark");
      OrangeSection.classList.remove("orange-section");

      //CARDS_SECTION_DARK
      cardSection.classList.add("card-section-dark");
      cardTitleH2.classList.add("card-title-h2-dark");

      //TWIN_SECTION_DARK

      //DI troppo perché c'è già su dichiarate//
      // const twinbg = document.querySelector(".section3-wrapper");
      // const twin3title = document.querySelector(".twin-section-title");
      // const twindivider = document.querySelector(".svg-divider");
      // const twinbg4 = document.querySelector(".section4");
      // const twin4title = document.querySelector(".twin-section2-title");
      // const twintabtitle = document.querySelector(".tab-title");
      // const twinclick = document.querySelector(".click-btn");
      // const twindatap = document.querySelectorAll(".data-paragraph");

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

      //CARD_SECTION_LIGHT
      cardSection.classList.remove("card-section-dark");
      cardTitleH2.classList.remove("card-title-h2-dark");

      //ORANGE_SECTION_LIGHT
      OrangeSectionDark.classList.remove("orange-section-dark");
      OrangeSectionDark.classList.add("orange-section");

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
});

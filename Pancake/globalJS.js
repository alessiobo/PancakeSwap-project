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

  //CARD_SECTION_DARK-----------------------------------
  const cardbg = document.querySelector(".card-section");
  const titleh2 = document.querySelector(".card-title-h2");
  const cardp = document.querySelector(".card-mini-p");
  const boldtext = document.querySelector(".bold-text");
  const trecardbg = document.querySelectorAll(".card-all");
  const firsth2 = document.querySelectorAll(".first-h2");
  const cardspan = document.querySelector(".span-cards");

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

    cardbg.classList.add("card-section-dark");
    titleh2.classList.add("title-h2-dark");
    cardp.classList.add("mini-p-dark");
    boldtext.classList.add("bold-text-dark");
    trecardbg.forEach((card) => {
      card.classList.add("card-bg-dark");
    });
    firsth2.forEach((title) => {
      title.classList.add("first-h2-dark");
    });
    cardspan.classList.add("span-cards-dark");

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
    cardbg.classList.remove("card-section-dark");
    titleh2.classList.remove("title-h2-dark");
    cardp.classList.remove("mini-p-dark");
    boldtext.classList.remove("bold-text-dark");
    trecardbg.forEach((card) => {
      card.classList.remove("card-bg-dark");
    });
    firsth2.forEach((title) => {
      title.classList.remove("first-h2-dark");
    });
    cardspan.classList.remove("span-cards-dark");
  }
});

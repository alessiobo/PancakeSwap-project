const inputChangeMode = document.getElementById("switch-button");
const inputChangeMode1 = document.getElementById("switch-button1");

function darkMode(input) {
  const mode = input.checked;

  //GLOBAL DARK:
  const btns = document.querySelectorAll("button");
  const checkBtnPoint = document.querySelectorAll(".checkbox-btn-point");
  const checkBtn = document.querySelectorAll(".checkbox-btn-icon");

  //NAVBAR_SETTINGS_SECTION_DARK
  const settingsbg = document.querySelector(".nav-settings-title");
  const settingsbgcont = document.querySelector(".nav-settings-section-cont");
  const settingtitle = document.querySelector(".nav-settings-title");
  const settingitem = document.querySelectorAll(".nav-settings-list-item");

  //HERO_SECTION_DARK-----------------------------------
  const herobg = document.querySelector(".hero-section");
  const herop = document.querySelector(".hero-homepage-text-parag");
  const heroWave = document.getElementById("hero-wave");
  //ORANGE_SECTION_DARK
  const OrangeSection = document.querySelector(".orange-section");
  const OrangeSectionDark = document.querySelector(".orange-section-dark");

  //BUYCAKE_SECTION_DARK
  const buyCake = document.querySelector(".buyCake-section");
  const buyCakeDiv1 = document.querySelector(".buyCake-div1");
  const buyCakeMini = document.querySelector(".buyCake-mini");
  const bigData = document.querySelectorAll(".buyCake-big-data");

  //CARD_SECTION_DARK-----------------------------------

  // const cardSection = document.querySelector(".card-section");
  // const cardTitleH2 = document.querySelector(".card-title-h2");

  //TWIN_SECTION_DARK-----------------------------------
  const twinbg = document.querySelector(".section3-wrapper");
  const twin3title = document.querySelector(".twin-section-title");
  const twindivider = document.querySelector(".svg-divider");
  const twinbg4 = document.querySelector(".section4");
  const twin4title = document.querySelector(".twin-section2-title");
  const twintabtitle = document.querySelector(".tab-title");
  const twinclick = document.querySelector(".click-btn");
  const twindatap = document.querySelectorAll(".data-paragraph");

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
    checkBtn.forEach((btn) => {
      btn.classList.add("checkbox-btn-icon-dark");
    });
    checkBtnPoint.forEach((btn) => {
      btn.classList.add("checkbox-btn-point-dark");
    });

    //NAVBAR_SETTINGS_SECTION_DARK
    settingsbg.classList.add("nav-settings-title-dark");
    settingsbgcont.classList.add("nav-settings-section-cont-dark");
    settingtitle.classList.add("nav-settings-title-dark");
    settingitem.forEach((item) => {
      item.classList.add("nav-settings-list-item-dark");
    });

    //HERO_SECTION_DARK

    herobg.classList.add("hero-section-dark");
    herop.classList.add("hero-homepage-text-parag-dark");
    heroWave.src = "./Components/HeroSection/images/wave-bg-d.svg";

    //ORANGE_SECTION_DARK
    OrangeSection.classList.add("orange-section-dark");
    OrangeSection.classList.remove("orange-section");

    //BUYCAKE_SECTION_DARK
    buyCake.classList.add("buyCake-section-dark");
    buyCakeDiv1.classList.add("buyCake-div1-dark");
    buyCakeMini.classList.add("buyCake-mini-dark");
    for (let i = 0; i < bigData.length; i++) {
      bigData[i].classList.add("buyCake-big-data-dark");
    }

    //CARDS_SECTION_DARK
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
    checkBtn.forEach((btn) => {
      btn.classList.remove("checkbox-btn-icon-dark");
    });
    checkBtnPoint.forEach((btn) => {
      btn.classList.remove("checkbox-btn-point-dark");
    });

    //NAVBAR_SETTINGS_SECTION_DARK
    settingsbg.classList.remove("nav-settings-title-dark");
    settingsbgcont.classList.remove("nav-settings-section-cont-dark");
    settingtitle.classList.remove("nav-settings-title-dark");
    settingitem.forEach((item) => {
      item.classList.remove("nav-settings-list-item-dark");
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

    //BUYCAKE_SECTION_LIGHT
    buyCake.classList.remove("buyCake-section-dark");
    buyCakeDiv1.classList.remove("buyCake-div1-dark");
    buyCakeMini.classList.remove("buyCake-mini-dark");
    for (let i = 0; i < bigData.length; i++) {
      bigData[i].classList.remove("buyCake-big-data-dark");
    }

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
}

inputChangeMode1.addEventListener("change", () => {
  darkMode(inputChangeMode1);
});

inputChangeMode.addEventListener("change", () => {
  darkMode(inputChangeMode);
});

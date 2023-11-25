//import { langArr } from "./langArray";

// -------------- language switcher ---------------------- //

const langArr = {
  "menu-one" : {
      "ua" : "Відстежити",
      "ru" : "Отследить",
  },
  "menu-two" : {
      "ua" : "Виклик кур'єра",
      "ru" : "Вызов курьера",
  },
  "menu-three" : {
    "ua" : "Послуги",
    "ru" : "Услуги",
  },
  "menu-four" : {
    "ua" : "Кур'єрська доставка",
    "ru" : "Курьерская доставка",
  },
  "menu-five" : {
    "ua" : "Для клієнтів",
    "ru" : "Для клиентов",
  },
  "menu-six" : {
    "ua" : "Вхід",
    "ru" : "Вход",
  },
  "menu-seven" : {
    "ua" : "Вакансії",
    "ru" : "Вакансии",
  },
  "resp-storage" : {
    "ua" : "Відповідальне зберігання",
    "ru" : "Ответственное хранение",
  },
  "sort-assembly" : {
    "ua" : "Сортування та комплектування",
    "ru" : "Сортировка и комплектовка",
  },
  "fulfill" : {
    "ua" : "Фулфілмент",
    "ru" : "Фулфилмент",
  },
  "dip-mail" : {
    "ua" : "Дипломатична пошта",
    "ru" : "Дипломатическая почта",
  },
  "inter-deliv" : {
    "ua" : "Міжнародна доставка",
    "ru" : "Международная доставка",
  },
  "kiyv-deliv" : {
    "ua" : "Доставка по Києву",
    "ru" : "Доставка по Киеву",
  },
  "ukr-deliv" : {
    "ua" : "Доставка по Україні",
    "ru" : "Доставка по Украине",
  },
  "adress-send" : {
    "ua" : "Адресна розсилка",
    "ru" : "Адресная рассылка",
  },
  "add-service" : {
    "ua" : "Додаткові послуги",
    "ru" : "Дополнительные услуги",
  },
  "send-email" : {
    "ua" : "Надіслати лист",
    "ru" : "Написать нам",
  },
  "paym-detail" : {
    "ua" : "Оплата за реквізитами",
    "ru" : "Оплата по реквизитам",
  },
  "quest-answ" : {
    "ua" : "Запитання та відповіді",
    "ru" : "Вопросы и ответы",
  },
  "our-contacts" : {
    "ua" : "Контакти",
    "ru" : "Контакты",
  },
  "rules-proc" : {
    "ua" : "Правила та процедури",
    "ru" : "Правила и процедуры",
  },
  "private-room" : {
    "ua" : "Особистий кабінет",
    "ru" : "Личный кабинет",
  },
  "made-call" : {
    "ua" : "Зробити виклик",
    "ru" : "Сделать вызов",
  },
  "hero-made-call" : {
    "ua" : "Зробіть виклик",
    "ru" : "Сделайте вызов",
  },
  "hero-made-call-and" : {
    "ua" : "Також",
    "ru" : "Также",
  },
  "hero-cour-deliv" : {
    "ua" : "Кур'єрська доставка пошти",
    "ru" : "Курьерская доставка почты",
  },
  "hero-cour-ukr" : {
    "ua" : "По Україні",
    "ru" : "По Украине",
  },
  "hero-stor-serv" : {
    "ua" : "Складські послуги. Фулфілмент",
    "ru" : "Складские услуги. Фулфилмент",
  },
  "hero-inter-deliv" : {
    "ua" : "Міжнародна доставка по світу",
    "ru" : "Международная доставка по миру",
  },
  "hero-inter-deliv-form" : {
    "ua" : "пошти та вантажів",
    "ru" : "почты и грузов",
  },
  "hero-express-serv" : {
    "ua" : "Експрес доставка",
    "ru" : "Экспресс доставка",
  },
  "hero-express-serv-form" : {
    "ua" : "Двері-Двері",
    "ru" : "Дверь-Дверь",
  },
  "hero-express-call" : {
    "ua" : "Виклик в один клік",
    "ru" : "Вызов в один клик",
  },
  "section-clients" : {
    "ua" : "НАШІ КЛІЄНТИ",
    "ru" : "НАШИ КЛИЕНТЫ",
  },
  "section-clients-recomend" : {
    "ua" : "Нас рекомендують",
    "ru" : "Нас рекомендуют",
  },
  "footer-service-centre" : {
    "ua" : "Центр обслуговування",
    "ru" : "Центр обслуживания",
  },
  "footer-about-company" : {
    "ua" : "Про компанію",
    "ru" : "О компании",
  },
  "footer-news-exmoto" : {
    "ua" : "Нове в EXPRESS MOTO",
    "ru" : "Новое в EXPRESS MOTO",
  },
  "footer-official-info" : {
    "ua" : "Офіційна інформація",
    "ru" : "Официальная информация",
  },
  "footer-agr-edo" : {
    "ua" : "Угода про ЕДО",
    "ru" : "Соглашения о ЭДО",
  }
}
console.log('Working script MAIN');

const selectLangEl = document.querySelector('.language-switcher');
let lang = '';
let lsLang = localStorage.getItem("exmoto-lsLang");
if (lsLang) { lang = JSON.parse(localStorage.getItem("exmoto-lsLang")) } else { lang = 'ua' };
const changeLanguageText = (lang) => {
  for (let key in langArr) {
      let elem = document.querySelectorAll('.lng-' + key);
      if (elem.length) {  
        for ( const item of elem ) {
          item.innerHTML = langArr[key][lang]
        }}
    }
}
changeLanguageText(lang);
console.log('lsLang',lsLang, lang);



selectLangEl.addEventListener('change',(evt) =>{
  lang = evt.currentTarget.value;
  console.log('in Listener',lsLang, lang);
  localStorage.setItem("exmoto-lsLang",JSON.stringify(lang))
  changeLanguageText(lang);
})


// ------------------------ mobile menu ------------------
const mobileMenu = document.querySelector("[data-modal]");
const openMenuBtn = document.querySelector("[data-modal-open]");
const closeMenuBtn = document.querySelector("[data-modal-close]");

  const toggleMenu = () => {
    changeLanguageText(lang);
    hiddensMenuItems();
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
// +++++++++++ работа с пунктами мобильного меню (скрыть/показать) +++++++++++//
  const mmOneEl = document.querySelector('#mm-one');
  const mmTwoEl = document.querySelector('#mm-two');
  const mmThreeEl = document.querySelector('#mm-three');
  const mmFourEl = document.querySelector('#mm-four');
  const mmAllBtnEl = document.querySelector('#mmAll-btn');
  const hiddensMenuItems = () => {
    mmOneEl.classList.add('hiddens');
    mmTwoEl.classList.add('hiddens');
    mmThreeEl.classList.add('hiddens');
    mmFourEl.classList.add('hiddens');
  };

  mmAllBtnEl.addEventListener('click', (evt) => {
    hiddensMenuItems();
// ++++++++++ работа с языками укр/рус ++++++++++++++
   const tt = evt.target.dataset.action;
     if (tt) {
     const xx = document.querySelector(`#${tt}`);
     xx.classList.remove('hiddens');
   }
 }); 
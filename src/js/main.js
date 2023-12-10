import  {langArr}  from "./langArray";

// -------------- language switcher ---------------------- //

const selectLangEl = document.querySelector('.language-switcher');

let lang = '';
let lsLang = localStorage.getItem("exmoto-lsLang");
if (lsLang) { lang = JSON.parse(localStorage.getItem("exmoto-lsLang")) } else { lang = 'ua' };
selectLangEl.value=lang;
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
  const mmAllBtnEl = document.querySelector('#mmAll-btn');

  const hiddensMenuItems = () => {
    mmOneEl.classList.add('hiddens');
    mmTwoEl.classList.add('hiddens');
    mmThreeEl.classList.add('hiddens');
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
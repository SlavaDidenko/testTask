import { addBurgerEvent } from "./menu";

const menuSelect = document.querySelector(".menu__select");
const headerColl = document.querySelector(".header__coll");
window.addEventListener("resize", () => {
  updateHeader();
});

const updateHeader = () => {
  const width = window.innerWidth;
  if (width > 1024) {
    headerColl.innerHTML = `
    <div class="header__info">
            <a class="header__info-link" href="tel:+380931232323">+38 (093 ) 123-23-23</a>
            <p class="header__info-text">Mo-Fri 9:00-18:00</p>
          </div>
          <div class="header__checkbox checkbox">
            <input type="checkbox" id="highload1" name="highload1">
            <label for="highload1" class="lb1"></label>
          </div>
          <button class="burger btn-reset">
            <svg width="24" height="18" viewbox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="24" y2="1" stroke="white" stroke-width="2" />
              <line y1="9" x2="24" y2="9" stroke="white" stroke-width="2" />
              <line y1="17" x2="24" y2="17" stroke="white" stroke-width="2" />
            </svg>
          </button>
    `;
    menuSelect.innerHTML = ``;
  } else if (width <= 1024 && width > 768) {
    headerColl.innerHTML = `
          <div class="header__checkbox checkbox">
            <input type="checkbox" id="highload1" name="highload1">
            <label for="highload1" class="lb1"></label>
          </div>
          <button class="burger btn-reset">
            <svg width="24" height="18" viewbox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="24" y2="1" stroke="white" stroke-width="2" />
              <line y1="9" x2="24" y2="9" stroke="white" stroke-width="2" />
              <line y1="17" x2="24" y2="17" stroke="white" stroke-width="2" />
            </svg>
          </button>
    `;
    menuSelect.innerHTML = ``;
  } else if (window.innerWidth <= 768) {
    headerColl.innerHTML = `
          <button class="burger btn-reset">
            <svg width="24" height="18" viewbox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="24" y2="1" stroke="white" stroke-width="2" />
              <line y1="9" x2="24" y2="9" stroke="white" stroke-width="2" />
              <line y1="17" x2="24" y2="17" stroke="white" stroke-width="2" />
            </svg>
          </button>
    `;
    menuSelect.innerHTML = `
    <div class=" checkbox">
      <input type="checkbox" id="highload1" name="highload1">
      <label for="highload1" class="lb1"></label>
    </div>
    `;
  }
  addBurgerEvent();
};

updateHeader();

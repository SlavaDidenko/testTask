const close = document.querySelector(".menu__close-btn");
const menu = document.querySelector(".menu");

export const addBurgerEvent = () => {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    document.querySelector(".menu").classList.add("is-open");
  });
};
addBurgerEvent();

close.addEventListener("click", () => {
  document.querySelector(".menu").classList?.remove("is-open");
});

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".menu__block") &&
    menu.className.includes("is-open") &&
    !e.target.closest(".burger")
  ) {
    document.querySelector(".menu").classList?.remove("is-open");
  }
});

const slideNext = document.querySelector(".hero__slide-next");
const slidePrev = document.querySelector(".hero__slide-prev");

import bg1 from "../img/slide-img1.jpg";
import bg2 from "../img/slide-img2.jpg";
import bg3 from "../img/slide-img3.jpg";

const arrBg = [bg1, bg2, bg3];

let counter = 1;

slideNext.addEventListener("click", () => {
  counter < 3 ? (counter += 1) : (counter = 1);
  setBg(counter);
});

slidePrev.addEventListener("click", () => {
  counter > 1 ? (counter -= 1) : (counter = 3);
  setBg(counter);
});

function setBg(counter) {
  const img = new Image();
  img.src = arrBg[counter - 1];
  console.log(arrBg[counter - 1], document.querySelector(".hero__slide"));
  img.addEventListener("load", () => {
    document.querySelector(".hero__slide").style.background = `url(
      ${arrBg[counter - 1]}
    ) center no-repeat`;
    document.querySelector(".hero__slide-now").textContent = counter;
  });
}

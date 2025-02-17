import Splide from "@splidejs/splide";

const burger = document.getElementById("burger-toggle");
const main = document.getElementById("main");
const dialog = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close-button");
const cardContainer = document.querySelector(".projects__cards-container");

new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper",
  },

  slidesPerView: 3,

  spaceBetween: 30,
});
//new Splide(".splide").mount();

// const slider = new Splide("#slider", {
//   //perPage: 1,
//   gap: "2rem",
//   perMove: "1",
//   breakpoints: {
//     640: {
//       perPage: 1,
//       padding: { top: "2rem", left: "1rem", right: "1rem" },
//       arrows: false,
//     },
//   },
// });
// slider.mount();

const getSrc = (e) => {
  if (e.target.closest(".card")) {
    console.log("getSrc is done");
    console.log(
      e.target.closest(".card").querySelector(".card__img").getAttribute("src")
    );
    return e.target
      .closest(".card")
      .querySelector(".card__img")
      .getAttribute("src");
  }
  return null;
};

const setModal = (src) => {
  const modalImg = document.querySelector(".modal__img");
  modalImg.src = src;
};

const openModalAndBlockScroll = (e) => {
  const src = getSrc(e);
  if (src) {
    setModal(src);
    dialog.showModal();
    document.body.classList.add("scroll-block");
    document.body.classList.add("blur");
  }
};

const returnScroll = () => {
  document.body.classList.remove("scroll-block");
  document.body.classList.remove("blur");
};

const close = () => {
  dialog.close();
  returnScroll();
  document.body.classList.remove("blur");
};

const addOrRemoveBlur = (e) => {
  if (e.target.checked) {
    for (let el of main.children) {
      el.classList.add("blur");
    }
  } else {
    for (let el of main.children) {
      el.classList.remove("blur");
    }
  }
};

const closeByOverlayClick = ({ currentTarget, target }) => {
  const dialog = currentTarget;
  const isOverlayClick = target === dialog;
  if (isOverlayClick) {
    close();
  }
};

const anchors = document.querySelectorAll("a[href*='#']");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = anchor.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

burger.addEventListener("change", addOrRemoveBlur);
cardContainer.addEventListener("click", openModalAndBlockScroll);
closeModal.addEventListener("click", close);
dialog.addEventListener("click", closeByOverlayClick);
dialog.addEventListener("cancel", returnScroll);

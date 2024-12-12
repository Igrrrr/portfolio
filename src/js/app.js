const burger = document.getElementById("burger-toggle");
const img = document.querySelector(".hero__container");
const main = document.getElementById("main");
const dialog = document.querySelector(".modal");
const openModal = document.querySelector(".hero__button");
const closeModal = document.querySelector(".modal__close-button");

const openModalAndBlockScroll = () => {
  dialog.showModal();
  document.body.classList.add("scroll-block");
  document.body.classList.add("blur");
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
openModal.addEventListener("click", openModalAndBlockScroll);
closeModal.addEventListener("click", close);
dialog.addEventListener("click", closeByOverlayClick);
dialog.addEventListener("cancel", returnScroll);

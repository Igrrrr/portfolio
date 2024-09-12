const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");

function isActive() {
  this.classList.toggle("active");
  navigation.classList.toggle("open");
}

burger.addEventListener("click", isActive);

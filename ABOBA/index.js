let dice = Math.trunc(Math.random() * 14) + 1;
document.querySelector(".btn").addEventListener("click", function () {
  dice = Math.trunc(Math.random() * 14) + 1;
  document.querySelector(".img").classList.remove("hidden");
  document.querySelector(".img").src = `img/Unknown${dice}.jpg`;
});

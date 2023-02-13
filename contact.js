const showBtns = document.querySelectorAll(".show");

showBtns.forEach((show) => {
  show.addEventListener("click", () => {
    let panel = show.parentElement.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
      show.childNodes[0].classList.remove("active");
    } else {
      panel.style.display = "flex";
      show.childNodes[0].classList.add("active");
    }
  });
});

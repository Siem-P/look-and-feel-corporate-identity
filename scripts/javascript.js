const navButtons = document.querySelectorAll(".nav-button");
const cardsContent = document.querySelectorAll(".card-heading");

console.log(navButtons.length);
console.log(cardsContent.length);

navButtons.forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.dataset.id;
    const active = document.getElementById(id);

    cardsContent.forEach((content) => content.classList.add("hide-show"));
    active.classList.remove("hide-show");
  });
});

    const date = new Date();
    const datum = date.getFullYear();
    const datumString = "© " + datum + " Vervoerregio Amsterdam";
    document.getElementById("copyright-year").innerHTML = datumString;
    // console.log(datum);



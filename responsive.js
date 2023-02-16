const girdColumns = 9;
const tableHeaders = [
  "name",
  "pseudo",
  "email",
  "telephone",
  "entreprise",
  "fonction",
  "poste",
  "pays",
  "actions",
];

const mainContainer = document.querySelector(".main-content");
const table = document.querySelector(".contacts");
console.log(mainContainer.offsetWidth, table.offsetWidth + 119);

const checkResponsivness = () => {
  window.addEventListener("resize", function (event) {
    if (table.offsetWidth + 119 > mainContainer.offsetWidth) {
      console.log("bigger");
    }
  });
};

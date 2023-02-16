const tableHeaders = [
  ".name",
  ".pseudo",
  ".email",
  ".telephone",
  ".entreprise",
  ".fonction",
  ".poste",
  ".pays",
  "actions",
];

const cssRoot = document.querySelector(":root");
const cssRootValues = getComputedStyle(cssRoot);
const tableContainer = document.querySelector(".contacts");
const table = document.querySelector(".contacts-rows");
console.log(tableContainer.offsetWidth, table.offsetWidth);

const observer = new ResizeObserver((entries) => {
  checkResponsivness();
});
observer.observe(tableContainer);

const checkResponsivness = () => {
  if (table.offsetWidth > tableContainer.offsetWidth) {
    removeColumns();
  }
  if (tableContainer.offsetWidth > table.offsetWidth + 300) {
    addColumns();
  }
};

let addColumns = () => {
  let girdColumns = cssRootValues.getPropertyValue("--grid-columns");
  if (girdColumns >= tableHeaders.length) return;
  if (girdColumns < tableHeaders.length - 1) {
    cssRoot.style.setProperty("--grid-columns", ++girdColumns);
    showItems(tableHeaders[girdColumns - 1]);
  }
};

let removeColumns = () => {
  let girdColumns = cssRootValues.getPropertyValue("--grid-columns");

  let newgrid = girdColumns - 1;
  // console.log(girdColumns, newgrid);
  if (newgrid <= 1) return;
  if (newgrid <= 8) {
    rowDropButton();
    hideItems(tableHeaders[newgrid - 1]);
  } else hideItems(tableHeaders[newgrid]);

  cssRoot.style.setProperty("--grid-columns", newgrid);

  checkResponsivness();
};

const hideItems = (className) => {
  const subClass = `.sub-${className?.substr(1)}`;
  const elementsWithClass = document.querySelectorAll(className);
  const subElementWithClass = subClass
    ? document.querySelectorAll(subClass)
    : [];
  for (let i = 0; i < elementsWithClass.length; i++) {
    elementsWithClass[i].style.display = "none";
  }
  for (let i = 0; i < subElementWithClass.length; i++) {
    subElementWithClass[i].style.display = "block";
  }
};
const showItems = (className) => {
  const elementsWithClass = document.querySelectorAll(className);
  const subElementWithClass = document.querySelectorAll(
    `.sub-${className.substr(1)}`
  );
  for (let i = 0; i < elementsWithClass.length; i++) {
    elementsWithClass[i].style.display = "flex";
  }
};

const rowDropButton = () => {
  const showButtons = document.querySelectorAll(".more");
  showButtons.forEach((btn) => (btn.style.display = "block"));
};

checkResponsivness();

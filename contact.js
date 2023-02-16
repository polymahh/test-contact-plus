// user menu
const userMenuBtn = document.querySelector(".user");
const userMenu = document.querySelector(".user-menu");
userMenuBtn.addEventListener("click", () => {
  userMenu.classList.toggle("open");
});
// contact rows
const cotactContainner = document.querySelector(".contacts-rows");
let addUser = (user) => {
  const name = document.createElement("div");
  name.classList.add("cell", "row", "name");
  name.innerHTML = `<input type="checkbox" name="" id="">
                    <button><img src="${user.image}" alt=""></button>
                    <span>${user.name}</span>`;
  const pseudo = document.createElement("div");
  pseudo.classList.add("cell", "row", "pseudo");
  pseudo.innerHTML = `<span>${user.pseudo}</span>`;
  const email = document.createElement("div");
  email.classList.add("cell", "row", "email");
  email.innerHTML = `<div>
                        <span>${user.email}</span>
                        <button class="emailbtn">
                          <img src="images/contacts/drop-list.svg" alt="">
                          </button>
                      </div>`;
  const phone = document.createElement("div");
  phone.classList.add("cell", "row", "telephone");
  phone.innerHTML = `<div>
                        <span>${user.phone}</span>
                        <button class="emailbtn">
                          <img src="images/contacts/drop-list.svg" alt="">
                        </button>
                      </div>`;
  const entreprise = document.createElement("div");
  entreprise.classList.add("cell", "row", "entreprise");
  entreprise.innerHTML = `<span>${user.entreprise}</span>`;
  const fonction = document.createElement("div");
  fonction.classList.add("cell", "row", "fonction");
  fonction.innerHTML = `<span>${user.fonction}</span>`;
  const poste = document.createElement("div");
  poste.classList.add("cell", "row", "poste");
  poste.innerHTML = `<span>${user.poste}</span>`;
  const pays = document.createElement("div");
  pays.classList.add("cell", "row", "pays");
  pays.innerHTML = `<span>${user.pays}</span>`;
  const actions = document.createElement("div");
  actions.classList.add("cell", "row", "actions");
  actions.innerHTML = `<Button class="action group"><img src="images/contacts/group.svg" alt=""></Button>
                      <Button class="action edit"><img src="images/contacts/edit.svg" alt=""></Button>
                      <Button class="action delete"><img src="images/contacts/delete.svg" alt=""></Button>
                      <Button class="action msg"><img src="images/contacts/msg.svg" alt=""></Button>
                      <Button class="action show more"><img src="images/contacts/arrow-dropdown.svg" alt=""></Button>`;
  const subContact = document.createElement("div");
  subContact.classList.add("sub-contact");
  subContact.innerHTML = `
    <div class="sub sub-pseudo">
        <span class="title">Pseudo:</span>
        <span>${user.pseudo}</span>
    </div>
    <div  class="sub sub-email">
        <span class="title">E-mail:</span>
        <span>${user.email}</span>
    </div>
    <div  class="sub sub-telephone">
        <span class="title">Téléphone:</span>
        <span>${user.phone}</span>
    </div>
    <div  class="sub sub-entreprise">
        <span class="title">Entreprise:</span>
        <span>${user.entreprise}</span>
    </div>
    <div  class="sub sub-fonction">
        <span class="title">Fonction:</span>
        <span>${user.fonction}</span>
    </div>
    <div  class="sub sub-poste">
        <span class="title">Poste:</span>
        <span>${user.poste}</span>
    </div>
    <div  class="sub sub-pays">
        <span class="title">pays:</span>
        <span>${user.pays}</span>
    </div>
  `;

  cotactContainner.append(
    name,
    pseudo,
    email,
    phone,
    entreprise,
    fonction,
    poste,
    pays,
    actions,
    subContact
  );
};

const getbtns = () => {
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
};

// paginattion
const usersPerPage = 9; //number of users per page
const pages = Math.ceil(users.length / usersPerPage);
let currentUsers;
let currentPage = 1;
let pagesNav = document.querySelector(".pagination");

// creating previous button
const prev = document.createElement("button");
prev.classList.add("previous");
prev.innerText = "Previous";
pagesNav.append(prev);

// creating pages buttons
for (let i = 1; i <= pages; i++) {
  const btn = document.createElement("button");
  btn.classList.add("page");
  btn.innerText = i;
  pagesNav.append(btn);
}
// creating next button
const next = document.createElement("button");
next.classList.add("next");
next.innerText = "Next";
pagesNav.append(next);

const pagination = () => {
  const start = currentPage * usersPerPage - usersPerPage;
  const end = currentPage * usersPerPage;
  currentUsers = users.slice(start, end);
  renderUsers();
};

const renderUsers = () => {
  const headerRow = document.querySelectorAll(".head");
  cotactContainner.replaceChildren(...headerRow);
  currentUsers.map((user) => {
    addUser(user);
  });
  getbtns();
};

const pageBtns = document.querySelectorAll(".page");
const prevBtns = document.querySelector(".previous");
const nextBtns = document.querySelector(".next");

const removeActiveBtn = () => {
  pageBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const addActiveBtn = (num) => {
  pageBtns[num - 1].classList.add("active");
};

pageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let num = parseInt(btn.innerText);
    currentPage = num;
    removeActiveBtn();
    addActiveBtn(num);
    pagination();
  });
});

prevBtns.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    removeActiveBtn();
    addActiveBtn(currentPage);
    pagination();
  }
});
nextBtns.addEventListener("click", () => {
  if (currentPage < pages) {
    currentPage++;
    removeActiveBtn();
    addActiveBtn(currentPage);
    pagination();
  }
});

pagination();
addActiveBtn(currentPage);

// sort
const sortBy = (key, isreversed) => {
  if (!isreversed) {
    users.sort((a, b) => (b[key] > a[key] ? 1 : -1));
  } else users.sort((a, b) => (b[key] < a[key] ? 1 : -1));

  pagination();
};

// sort by name
const sortNameBtn = document.querySelector(".sort-name");
let reverseName = false;
sortNameBtn.addEventListener("click", () => {
  reversePseudo = !reversePseudo;
  sortBy("name", reversePseudo);
});

// sort by pseudo
const sortPseudoBtn = document.querySelector(".sort-pseudo");
let reversePseudo = false;
sortPseudoBtn.addEventListener("click", () => {
  reversePseudo = !reversePseudo;
  sortBy("pseudo", reversePseudo);
});
// sort by email
const sortEmailBtn = document.querySelector(".sort-email");
let reverseEmail = false;
sortEmailBtn.addEventListener("click", () => {
  reverseEmail = !reverseEmail;
  sortBy("email", reverseEmail);
});
// sort by entreprise
const sortEntrepriseBtn = document.querySelector(".sort-entreprise");
let reverseEntreprise = false;
sortEntrepriseBtn.addEventListener("click", () => {
  reverseEntreprise = !reverseEntreprise;
  sortBy("entreprise", reverseEntreprise);
});
// sort by Fonction
const sortFonctionBtn = document.querySelector(".sort-fonction");
let reverseFonction = false;
sortFonctionBtn.addEventListener("click", () => {
  reverseFonction = !reverseFonction;
  sortBy("fonction", reverseFonction);
});
// sort by Poste
const sortPosteBtn = document.querySelector(".sort-poste");
let reversePoste = false;
sortPosteBtn.addEventListener("click", () => {
  reversePoste = !reversePoste;
  sortBy("poste", reversePoste);
});
// sort by Pays
const sortPaysBtn = document.querySelector(".sort-pays");
let reversePays = false;
sortPaysBtn.addEventListener("click", () => {
  reversePays = !reversePays;
  sortBy("pays", reversePays);
});

const checkall = document.querySelector(".head.name>input");
checkall.addEventListener("change", () => {
  const checkboxes = document.querySelectorAll(".row.name>input");
  if (checkall.checked) {
    checkboxes.forEach((box) => (box.checked = true));
  } else checkboxes.forEach((box) => (box.checked = false));
});

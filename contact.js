const cotactContainner = document.querySelector(".contacts-row");
let userRows = users.map((user) => {
  const name = document.createElement("div");
  name.classList.add("cell", "row", "name");
  name.innerHTML = `<input type="checkbox" name="" id="">
                    <button><img src="${user.image}" alt=""></button>
                    <span>${user.name}</span>`;
  const pseudo = document.createElement("div");
  pseudo.classList.add("cell", "row", "pseudo");
  pseudo.innerHTML = `<span>${user.name}</span>`;
  const email = document.createElement("div");
  email.classList.add("cell", "row", "email");
  email.innerHTML = `<span>${user.email}</span>`;
  const phone = document.createElement("div");
  phone.classList.add("cell", "row", "telephone");
  phone.innerHTML = `<span>${user.phone}</span>`;
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
        <span>${user.name}</span>
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
});

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

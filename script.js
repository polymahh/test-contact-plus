const menuBtn = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");
const menuNav = document.querySelector(".menu-nav");
const navLinks = document.querySelectorAll(".nav-link");
const questions = document.querySelectorAll(".question");
const postsContainer = document.querySelector(".content");
const pagesNav = document.querySelector(".pagination");

// toggle open and close menu
const togglemenu = () => {
  menuNav.classList.toggle("open-menu");
};
menuBtn.addEventListener("click", togglemenu);
closeMenu.addEventListener("click", togglemenu);

// mage nav link bold when active
const removeActive = () => {
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    link.classList.add("off-link");
  });
};

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    removeActive();
    menuNav.classList.remove("open-menu");
    link.classList.remove("off-link");
    link.classList.add("active-link");
  })
);
// accordion for the questions
questions.forEach((question) => {
  question.addEventListener("click", () => {
    let panel = question.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = `0 18px`;
      question.childNodes[0].classList.remove("active");
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      panel.style.padding = `1rem 18px`;
      question.childNodes[0].classList.add("active");
    }
  });
});
// pagination and showing posts based on page

let cards = posts.map((post) => {
  const card = document.createElement("div");
  const title = document.createElement("h3");
  const date = document.createElement("span");
  const image = document.createElement("img");
  const paragraph = document.createElement("p");
  const more = document.createElement("a");
  const dateicon = document.createElement("span");
  const datetext = document.createElement("p");
  card.classList.add("card");
  title.classList.add("title");
  date.classList.add("date");
  paragraph.classList.add("paragraph");
  more.classList.add("link");
  dateicon.classList.add("date-icon");
  datetext.innerText = post.date;
  date.append(dateicon, datetext);
  title.innerText = post.title;
  image.src = post.image;
  paragraph.innerText = post.preview;
  more.innerText = "Read more ->";

  card.append(title, date, image, paragraph, more);
  return card;
});

console.log(cards);

// creating previous button
const prev = document.createElement("button");
prev.classList.add("previous");
prev.innerText = "Previous";
pagesNav.append(prev);
// creating pages buttons
const pages = Math.ceil(cards.length / 9);
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

const postsRange = 9; //number of posts per page

const pagination = (page) => {
  const start = page * postsRange - postsRange;
  const end = page * postsRange;
  const currentPosts = cards.slice(start, end);
  postsContainer.innerHTML = null;
  postsContainer.append(...currentPosts);
  console.log(currentPosts);
};
let currentPage = 1;
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
    pagination(num);
  });
});

prevBtns.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    removeActiveBtn();
    addActiveBtn(currentPage);
    pagination(currentPage);
  }
});
nextBtns.addEventListener("click", () => {
  if (currentPage < pages) {
    currentPage++;
    removeActiveBtn();
    addActiveBtn(currentPage);
    pagination(currentPage);
  }
});

pagination(currentPage);
addActiveBtn(currentPage);

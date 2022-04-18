// get ids menu from html
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Validate if constant exists then menu show  */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Validate if constant exists then menu hiddren */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*================ MODAL IMAGE ================== */
const images = document.querySelectorAll(".products__content img");
let imgSrc;

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgModal(imgSrc)
  })
})

let imgModal = (src) => {
  const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
  
  const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
  
  const closeBtn = document.createElement("span");
    closeBtn.setAttribute("class", "ri-close-circle-line closeBtn");
    closeBtn.onclick = () => {
      modal.remove();
    };
  
  document.addEventListener("keydown", (e)=> {
    if(e.key === 'Escape') modal.remove()
  })
  modal.append(newImage, closeBtn);
};

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__header, .section__title`, { delay: 600 });
sr.reveal(`.home__footer`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 600, origin: "top" });
sr.reveal(`.video`, { delay: 600 });

sr.reveal(`.products__card, .footer__content`, {
  origin: "top",
  interval: 100,
});

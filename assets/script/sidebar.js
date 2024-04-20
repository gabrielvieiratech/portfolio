let scroll = document.querySelector('.scroll').addEventListener('click', function() {
  scrollTo(0,0)
})


let btn = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
btn.addEventListener("click", function () {
  if (navbar.classList.contains("closeMenu")) {
    clearClasses(navbar);
    navbar.classList.add("openMenu");
  } else {
    clearClasses(navbar);
    navbar.classList.add("closeMenu");
  }
});

function clearClasses(navbar) {
  navbar.classList.remove("openMenu");
  navbar.classList.remove("closeMenu");
}

let navLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    clearClasses(navbar);
    navbar.classList.add("closeMenu");
  });
}

// scrollReveal
ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #header,
  #main,
  #services,
  #projects,
  #footer
`);


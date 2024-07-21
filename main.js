let slideNumber = document.querySelector(".slide-num");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let indicator = document.getElementById("indicator");
let slides = Array.from(document.querySelectorAll(".slider-container img"));
let slidesCount = slides.length;
let firsetSlide = 1;

prevButton.onclick = prevFunction;
nextButton.onclick = nextFunction;

function prevFunction() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    firsetSlide--;
    checker();
  }
}
function nextFunction() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    firsetSlide++;
    checker();
  }
}

let pagnationUl = document.createElement("ul");
pagnationUl.setAttribute("id", "pagntion-ul");
console.log(pagnationUl);

for (let i = 1; i <= slidesCount; i++) {
  paginationLi = document.createElement("li");
  paginationLi.setAttribute("data-index", i);
  paginationLiText = document.createTextNode(i);
  paginationLi.appendChild(paginationLiText);
  pagnationUl.appendChild(paginationLi);
}

indicator.appendChild(pagnationUl);
let pagnationCreatedUl = document.getElementById("pagntion-ul");

// create array for all bullets
let pagnationBullets = Array.from(document.querySelectorAll("#pagntion-ul li"));
// to can click on pagnationbullet and move to anther bullet
for (let i = 0; i < pagnationBullets.length; i++) {
  pagnationBullets[i].onclick = function () {
    firsetSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

checker();
function checker() {
  slideNumber.textContent = `Slide # ${firsetSlide} of ${slidesCount}`;

  // remove all active classes then put actie class according currentslide(firstslide)
  removeActiveClass();
  slides[firsetSlide - 1].classList.add("active");
  pagnationCreatedUl.children[firsetSlide - 1].classList.add("active");

  // check if cuurentslide is first will put disabled class on prev button
  if (firsetSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  // check if cuurentslide is last will put disabled class on next button
  if (firsetSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeActiveClass() {
  slides.forEach(function (img) {
    img.classList.remove("active");
  });
  pagnationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}

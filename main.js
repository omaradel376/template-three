// Select Elements For Our Stats Section
let num = document.querySelectorAll(".stats .num");
let stats = document.querySelector(".stats");
let start = false;

// Function For Stats Section
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
}

// Select Elements For Progress Section
let progress = document.querySelectorAll("#our-skills .content div span");
let progressSection = document.querySelector("#our-skills");
progress.forEach((e) => {
  e.style.width = "0";
  e.style.transition = "2s";
});

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 100) {
    // For Stats Section
    if (!start) {
      num.forEach((el) => {
        startCount(el);
      });
    }
    start = true;
  }
  // For Our Skill Section
  if (window.scrollY >= progressSection.offsetTop - 200) {
    progress.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
};

// Don't Allow To Resize TextArea
let textArea = document.querySelectorAll("textarea");
textArea.forEach((e) => {
  e.style.resize = "none";
});


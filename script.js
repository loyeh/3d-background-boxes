const boxes = document.querySelectorAll(".box");

const magicBtn = document.querySelector(".button");
const container = document.querySelector(".container");
console.log(container.offsetLeft, container.offsetTop, boxes);

function positionFix() {
  boxes.forEach((box, boxIndex) => {
    console.log(
      container.offsetLeft - box.offsetLeft,
      container.offsetTop - box.offsetTop
    );

    box.style.backgroundPosition = `${
      container.offsetLeft - box.offsetLeft
    }px ${container.offsetTop - box.offsetTop}px`;
  });
}

positionFix();
magicBtn.addEventListener("click", () => {
  container.classList.toggle("active");
  setTimeout(positionFix, 2000);
});

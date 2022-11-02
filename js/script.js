const eleGrid = document.querySelector(".grid");
const eleBtnPlay = document.querySelector(".btn-play");

eleBtnPlay.addEventListener("click", function () {
  eleGrid.innerHTML = "";
  let diff = document.querySelector("[name=diff]").value;

  if (diff === "easy") {
    for (let i = 1; i <= 100; i++) {
      const eleSquare = document.createElement("div");
      eleSquare.innerHTML += [i];
      eleSquare.classList.add("square");
      // eleSquare.classList.add("easy");
      eleSquare.style.width = "calc(100% / 10)";
      eleGrid.append(eleSquare);

      eleSquare.addEventListener("click", function () {
        this.classList.toggle("select");
      });
    }
  } else if (diff === "normal") {
    for (let i = 1; i <= 81; i++) {
      const eleSquare = document.createElement("div");
      eleSquare.innerHTML += [i];
      eleSquare.classList.add("square");
      // eleSquare.classList.add("normal");
      eleSquare.style.width = "calc(100% / 9)";
      eleGrid.append(eleSquare);

      eleSquare.addEventListener("click", function () {
        this.classList.toggle("select");
      });
    }
  } else if (diff === "hard") {
    for (let i = 1; i <= 49; i++) {
      const eleSquare = document.createElement("div");
      eleSquare.innerHTML += [i];
      eleSquare.classList.add("square");
      // eleSquare.classList.add("hard");
      eleSquare.style.width = "calc(100% / 7)";
      eleGrid.append(eleSquare);

      eleSquare.addEventListener("click", function () {
        this.classList.toggle("select");
      });
    }
  }
});

// for (let i = 1; i <= 100; i++) {
//   const eleSquare = document.createElement("div");
//   eleSquare.innerHTML += [i];
//   eleSquare.classList.add("square");
//   eleGrid.append(eleSquare);

//   eleSquare.addEventListener("click", function () {
//     this.classList.toggle("select");
//   });
// }

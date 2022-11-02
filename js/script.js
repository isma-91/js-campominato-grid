const eleGrid = document.querySelector(".grid");
let diff = document.querySelector("[name=diff]").value;

for (let i = 1; i <= 100; i++) {
  const eleSquare = document.createElement("div");
  eleSquare.innerHTML += [i];
  eleSquare.classList.add("square");
  eleGrid.append(eleSquare);

  eleSquare.addEventListener("click", function () {
    this.classList.toggle("select");
  });
}

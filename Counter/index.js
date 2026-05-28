let counter = 0;
const countLabel = document.getElementById("counter");

document.getElementById("decrease").onclick = function() {
  counter--;
  countLabel.textContent = counter;
}

document.getElementById("increase").onclick = function() {
  counter++;
  countLabel.textContent = counter;
}

document.getElementById("reset").onclick = function() {
  counter=0;
  countLabel.textContent = counter;
}
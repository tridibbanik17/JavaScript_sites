// interaction with the website
// compute circumference given a radius

const pi = 3.1416;
let radius;
let circumference;
document.getElementById("submit").onclick = function() {
  radius = document.getElementById("userInput").value;
  radius = Number(radius);
  circumference = 2*pi*radius;
  document.getElementById("circumference").textContent = `The circumference of circle with radius ${radius} cm is: ${circumference} cm`;
}
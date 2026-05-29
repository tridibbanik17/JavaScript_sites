const number_of_random_numbers = 3;
const start = 50;
const end = 100;

document.getElementById("intro").textContent = `Number of random numbers: ${number_of_random_numbers}, start: ${start}, end: ${end}`;

document.getElementById("roll").onclick = function() {
  rand_num1 = Math.floor(Math.random() * (end - start)) + start;
  rand_num2 = Math.floor(Math.random() * (end - start)) + start;
  rand_num3 = Math.floor(Math.random() * (end - start)) + start;
  document.getElementById("first").textContent = rand_num1;
  document.getElementById("second").textContent = rand_num2;
  document.getElementById("third").textContent = rand_num3;
}
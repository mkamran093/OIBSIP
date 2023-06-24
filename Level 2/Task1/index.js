const displayElement = document.getElementById("display");
const ansElement = document.getElementById("ans");
var ansValue = 0;

function update() {
  ansValue = eval(displayElement.value);
}

function answer() {
  return ansValue;
}

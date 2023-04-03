const counter = document.getElementById("count");

function addToCounter() {
  var count = Number(localStorage.getItem("count"));
  count += 1;
  localStorage.setItem("count", count);
  counter.innerHTML = count;
}

function subtractFromCounter() {
  var count = Number(localStorage.getItem("count"));
  count -= 1;
  localStorage.setItem("count", count);
  counter.innerHTML = count;
}

function multiplyCounter() {
  var count = Number(localStorage.getItem("count"));
  count *= 10;
  localStorage.setItem("count", count);
  counter.innerHTML = count;
}

function clearCounter() {
  localStorage.clear();
  counter.innerHTML = 0;
}

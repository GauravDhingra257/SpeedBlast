function gottabs(tabs) {
  var msg = { speed: x };
  chrome.tabs.sendMessage(tabs[0].id, msg);
  console.log(tabs);
}
localStorage.getItem("speed");
var x = !(localStorage.getItem("speed") === null)
  ? localStorage.getItem("speed")
  : 1;
var y = document.querySelector("#myRange");
y.value = x * 20;
document.querySelector(".speed").innerHTML = `Speed = ${y.value / 20} x`;
chrome.tabs.query({ active: true, currentWindow: true }, gottabs);
y.addEventListener("input", () => {
  document.querySelector(".speed").innerHTML = `Speed = ${y.value / 20} x`;
  x = y.value / 20;
  localStorage.setItem("speed", x);
  chrome.tabs.query({ active: true, currentWindow: true }, gottabs);
});


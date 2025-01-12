let tack = "";
function addTack() {
  let input = document.getElementById("input-text");
  tack += `
  <li>${input.value}</li>
  `;
  document.getElementById("tack").innerHTML = tack;
  input.value = "";
}
document.getElementById("but").onclick = () => {
  addTack();
};

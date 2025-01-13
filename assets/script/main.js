let tack = "";
if (localStorage.getItem("ta") !== null) {
  tack = localStorage.getItem("ta");
}
function addTack() {
  let input = document.getElementById("input-text");
  tack += `
  <li>${input.value} | ${new Date().toLocaleDateString()}</li>
  `;
  localStorage.setItem("ta", tack);
  input.value = "";
  showTack();
}

function showTack() {
  document.getElementById("tacks").innerHTML = localStorage.getItem("ta");
}

document.getElementById("but").onclick = () => {
  addTack();
};

document.getElementById("moon").onclick = () => {
  if (document.body.classList.contains("moon")) {
    document.body.classList.remove("moon");
  } else {
    document.body.classList.add("moon");
  }
};

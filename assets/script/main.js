let tack = "";
function addTack() {
  let input = document.getElementById("input-text");
  tack += `
  <li>${input.value} | ${new Date().toLocaleDateString()}</li>
  `;
  input.value = "";
  showTack();
}

function showTack() {
  document.getElementById("tacks").innerHTML = tack;
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

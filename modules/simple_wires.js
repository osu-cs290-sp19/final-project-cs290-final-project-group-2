console.log("hey");
document.getElementById("simple-wires").addEventListener("click", display_create_twit);

function display_create_twit() {
  document.getElementById("modal-backdrop").style.display = "block";
  document.getElementById("create-twit-modal").style.display = "block";
}

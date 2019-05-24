console.log("hey");

window.onload = function() {document.getElementById("simple-wires").addEventListener("click", display_create_twit);}

function display_create_twit() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("create-twit-modal").classList.remove("hidden");
}

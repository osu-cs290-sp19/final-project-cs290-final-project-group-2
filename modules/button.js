console.log("hi");
//
// window.onload = function() {
//     document.getElementById("button").addEventListener("click", display_button_module);
//     var theButton = document.getElementById("the-button-modal");
//     theButton.addEventListener("click", test);
//     console.log("event listeners added");
// }

function display_button_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("the-button-modal").classList.remove("hidden");
    console.log("display_button_module called");
}

function testButton(e) {
    console.log("clicked: ", e.target.value);
}

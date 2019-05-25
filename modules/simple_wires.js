console.log("hey");

// window.onload = function() {
//     document.getElementById("simple-wires").addEventListener("click", display_simple_wire_module);
//     var simpleWires = document.getElementById("simple-wires-modal");
//     simpleWires.addEventListener("click", test);
// }

function display_simple_wire_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("simple-wires-modal").classList.remove("hidden");

}

function testWires(e) {
    console.log("clicked: ", e.target.value);
}

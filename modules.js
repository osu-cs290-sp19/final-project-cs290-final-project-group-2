console.log("Value retrieved:", sessionStorage.getItem("bombId"));


window.onload = function() {
    document.getElementById("simple-wires").addEventListener("click", display_simple_wire_module);
    var simpleWires = document.getElementById("simple-wires-modal");
    simpleWires.addEventListener("click", testWires);
    document.getElementById("button").addEventListener("click", display_button_module);
    var theButton = document.getElementById("the-button-modal");
    theButton.addEventListener("click", testButton);
    console.log("event listeners added");
}

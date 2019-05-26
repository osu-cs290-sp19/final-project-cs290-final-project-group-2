console.log("Value retrieved:", sessionStorage.getItem("bombId"));


window.onload = function() {
    // Simple Wires
    document.getElementById("simple-wires").addEventListener("click", display_simple_wire_module);
    document.getElementById("simple-wires-modal").addEventListener("click", check_simple_wires_button);

    //The Button
    document.getElementById("button").addEventListener("click", display_button_module);
    document.getElementById("the-button-modal").addEventListener("click", testButton);
}

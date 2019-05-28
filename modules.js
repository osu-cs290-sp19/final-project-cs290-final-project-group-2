console.log("Value retrieved:", sessionStorage.getItem("bombId"));


window.onload = function() {
    //Simple Wires
    document.getElementById("simple-wires").addEventListener("click", display_simple_wire_module);
    document.getElementById("simple-wires-modal").addEventListener("click", check_simple_wires_button);

    //The Button
    document.getElementById("button").addEventListener("click", display_button_module);
    document.getElementById("the-button-modal").addEventListener("click", check_the_button);

    //Bomb Info
    document.getElementById('bomb-info').addEventListener("click", display_bomb_info_module);
    document.getElementById('bomb-info-modal').addEventListener("click", bomb_info_handler);

    //Passwords
    document.getElementById('passwords').addEventListener("click", display_passwords_module);
    document.getElementById('passwords-modal').addEventListener("click", check_passwords);

}

function display_bomb_info_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("bomb-info-modal").classList.remove("hidden");
}

function bomb_info_handler(e) {
    if (e.target.value === "result") {
        document.getElementById("modal-backdrop").classList.add("hidden");
        document.getElementById("bomb-info-modal").classList.add("hidden");
    }
}

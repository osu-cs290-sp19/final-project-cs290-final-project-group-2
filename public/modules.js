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

    //Morse Code
    /*document.getElementById('morse-code').addEventListener("click", display_morse_code_module);
    document.getElementById('morse-code-modal').addEventListener("click", check_morse_code); */

    //Solved button
    document.getElementById("solved").addEventListener("click", bomb_complete);

    //focuses serial input
    document.getElementById("serial").focus();

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

function get_batteries() {
    var batteryRadios = document.getElementsByName('batteries');
    for (var i = 0; i < batteryRadios.length; i++) {
        if (batteryRadios[i].checked) {
            return batteryRadios[i].value;
        }
    }
}


//bomb info helpers
function get_frk() {
    return document.getElementById('frk').checked;
}

function get_car() {
    return document.getElementById('car').checked;
}

function get_serial() {
    return document.getElementById("serial").value;
}

function get_parity() {
    var serialString = document.getElementById("serial").value;
    if (serialString[serialString.length - 1] % 2 === 0) {
        return "even";
    }
    return "odd";
}

function has_vowel() {
    var serial = get_serial();
    serial = serial.toLowerCase();
    for (var i = 0; i < 5; i++) {
        if (serial[i] === "a" || serial[i] === "e" || serial[i] === "i" || serial[i] === "o" || serial[i] === "u") {
            return true;
        }
    }
    return false;
}

function autotab(current,to) {
    if (current.getAttribute && current.value.length==current.getAttribute("maxlength")) {
        to.focus();
    }
}


//Solved button
function bomb_complete() {
    //this will do something at somepoint test
}

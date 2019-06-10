//global stat variables
var modulesSolved = 0;
var totalWiresCut = 0;
var num_strikes = 0;
var totalStrikesReceived = 0;

//initiallizing event listeners
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
    // document.getElementsByClassName('passwords-input')[0].addEventListener("keyup", live_search);

    //Morse Code
    /*document.getElementById('morse-code').addEventListener("click", display_morse_code_module);
    document.getElementById('morse-code-modal').addEventListener("click", check_morse_code); */

    //Solved button
    document.getElementById("solved").addEventListener("click", bomb_complete);

    //Strike buttons
    document.getElementById("strike-id").addEventListener("click", strike_counter);

    //focuses serial input
    document.getElementById("serial").focus();

    //Simon Says
    document.getElementById("simon-says").addEventListener("click", display_simon_says_module);
    document.getElementById("simon-says-modal").addEventListener("click", start_simon_says);

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

//bomb info helpers
function get_batteries() {
    var batteryRadios = document.getElementsByName('batteries');
    for (var i = 0; i < batteryRadios.length; i++) {
        if (batteryRadios[i].checked) {
            return batteryRadios[i].value;
        }
    }
}

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

function autotab(current, to) {
    if (current.getAttribute && current.value.length == current.getAttribute("maxlength")) {
        to.focus();
    }
}

//Solved button
function bomb_complete() {
    //data packet to update stats
    var data = {
        name: sessionStorage.getItem("username"),
        stats: {
            bombsSolved: 1,
            levelSolved: [sessionStorage.getItem("bombId")],
            modulesSolved: modulesSolved,
            totalWiresCut: totalWiresCut,
            totalStrikesReceived: totalStrikesReceived
        }
    };
    //post request object
    var request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/stats/update', request);

    modulesSolved = totalWiresCut = totalStrikesReceived = 0;
    window.location.href = 'index.html'; //this should be the last line
}

function strike_counter(e) {
    if (e.target.value === "minus" && num_strikes > 0) {
        num_strikes--;
        totalStrikesReceived--;
    } else if (e.target.value === "add" && num_strikes < 2) {
        /*later add MAX_STRIKES - 1 in place of 2*/
        num_strikes++;
        totalStrikesReceived++;
    }
    document.getElementById("strikes").textContent = num_strikes;
}

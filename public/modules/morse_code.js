function display_morse_code_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("morse-code-modal").classList.remove("hidden");
}

function hide_morse_code_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("morse-code-modal").classList.add("hidden");
}

function check_morse_code(e) {
    //TODO
    if(e.target.value === "short" || event.keyCode === 97 || event.keyCode === 49) {
        console.log("short");
    }
    if(e.target.value === "long"|| event.keyCode === 98 || event.keyCode === 50) {
        console.log("long");
    }
    if(e.target.value === "gap" || event.keyCode === 96 || event.keyCode === 48) {
        console.log("gap");
    }
}

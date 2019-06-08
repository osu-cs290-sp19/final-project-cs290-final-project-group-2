function display_simon_says_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("simon-says-modal").classList.remove("hidden");
}

function hide_simon_says_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("simon-says-modal").classList.add("hidden");
}

function start_simon_says(e) {
    var simon_says_value = e.target.value;
    if(simon_says_value === "cancel") {
        hide_simon_says_module();
    }
    if(simon_says_value === "result") {
        //something will go here 
    }
}

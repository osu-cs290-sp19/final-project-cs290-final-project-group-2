function display_passwords_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("passwords-modal").classList.remove("hidden");
}

function hide_passwords_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("passwords-modal").classList.add("hidden");
}

function check_passwords(e) {
    if(e.target.value === "cancel") {
        hide_passwords_module();
    }
    if(e.target.value === "result") {
        console.log("Column 1: ", document.getElementById('column1').value);
        console.log("Column 2: ", document.getElementById('column2').value);
        console.log("Column 3: ", document.getElementById('column3').value);
    }
    
}

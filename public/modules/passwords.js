function display_passwords_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("passwords-modal").classList.remove("hidden");
}

function hide_passwords_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("passwords-modal").classList.add("hidden");
}

var string1 = "";
var string2 = "";
var string3 = "";
var passwords = ["about", "after", "again", "below", "could", "every", "first", "found", "great", "house", "large", "learn", "never", "other", "place", "plant", "right", "small", "sound", "spell", "still", "study", "their", "there", "these", "thing", "think", "three", "water", "where", "which", "world", "would", "write"];
var p1 = [];
var p2 = [];
var p3 = [];

function clear_all_password_arrays() {
    p1 = [];
    p2 = [];
    p3 = [];
    string1 = "";
    string2 = "";
    string3 = "";
}

function clear_password_input() {
    document.getElementById('column1').value = "";
    document.getElementById('column2').value = "";
    document.getElementById('column3').value = "";
}

function print_the_password() {
    for(var i = 0; i < p3.length; i++) {
        console.log(p3[i]);
    }
}

function find_password() {
    for(var i = 0; i < string1.length; i++) {
        for(var j = 0; j < passwords.length; j++) {
            if(string1[i] === passwords[j][0]) {
                p1.push(passwords[j]);
            }
        }
    }
    for(var i = 0; i < string2.length; i++) {
        for(var j = 0; j < p1.length; j++) {
            if(string2[i] === p1[j][1]) {
                p2.push(p1[j]);
            }
        }
    }
    for(var i = 0; i < string3.length; i++) {
        for(var j = 0; j < p2.length; j++) {
            if(string3[i] === p2[j][2]) {
                p3.push(p2[j]);
            }
        }
    }
    print_the_password();
}

function check_passwords(e) {
    //checks if the user hits cancel
    if(e.target.value === "cancel") {
        hide_passwords_module();
        clear_password_input();
        clear_all_password_arrays();
    }

    //checks if the user hits result
    if(e.target.value === "result") {
        string1 = document.getElementById('column1').value;
        string2 = document.getElementById('column2').value;
        string3 = document.getElementById('column3').value;
        if(string1.length === 6 && string2.length === 6 && string3.length === 6) {
            find_password();
        } else {
            alert("You may have not entered enough letters per input box, there must be 6 per box");
        }
    }
}

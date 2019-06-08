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
    if(simon_says_value === "red" || simon_says_value === "blue" || simon_says_value === "green" || simon_says_value === "yellow") {
        find_the_flash(e);
    }
}

function find_the_flash(e) {
    if(has_vowel() /*&& strikes === 0*/) {
        if(e.target.value === "red") {
            console.log("blue");
        } else if (e.target.value === "blue") {
            console.log("red");
        } else if (e.target.value === "green") {
            console.log("yellow");
        } else if (e.target.value === "yellow") {
            console.log("green");
        }
    } else if (has_vowel() /*&& strikes === 1*/) {
        if (e.target.value === "red") {
            console.log("yellow");
        } else if (e.target.value === "blue") {
            console.log("green");
        } else if (e.target.value === "green") {
            console.log("blue");
        } else if (e.target.value === "yellow") {
            console.log("red");
        }
    } else if (has_vowel() /*&& strikes === 2*/) {
        if (e.target.value === "red") {
            console.log("green");
        } else if (e.target.value === "blue") {
            console.log("red");
        } else if (e.target.value === "green") {
            console.log("yellow");
        } else if (e.target.value === "yellow") {
            console.log("blue");
        }
    } else if (!has_vowel() /*&& strikes === 0*/) {
        if (e.target.value === "red") {
            console.log("blue");
        } else if (e.target.value === "blue") {
            console.log("yellow");
        } else if (e.target.value === "green") {
            console.log("green");
        } else if (e.target.value === "yellow") {
            console.log("red");
        }
    } else if (!has_vowel() /*&& strikes === 1*/) {
        if (e.target.value === "red") {
            console.log("red");
        } else if (e.target.value === "blue") {
            console.log("blue");
        } else if (e.target.value === "green") {
            console.log("yellow");
        } else if (e.target.value === "yellow") {
            console.log("green");
        }
    } else if (!has_vowel() /*&& strikes === 2*/) {
        if (e.target.value === "red") {
            console.log("yellow");
        } else if (e.target.value === "blue") {
            console.log("green");
        } else if (e.target.value === "green") {
            console.log("blue");
        } else if (e.target.value === "yellow") {
            console.log("red");
        }
    }
}

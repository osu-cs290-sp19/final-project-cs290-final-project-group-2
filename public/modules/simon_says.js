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
            show_simon_says_results("blue");
        } else if (e.target.value === "blue") {
            show_simon_says_results("red");
        } else if (e.target.value === "green") {
            show_simon_says_results("yellow");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("green");
        }
    } else if (has_vowel() /*&& strikes === 1*/) {
        if (e.target.value === "red") {
            show_simon_says_results("yellow");
        } else if (e.target.value === "blue") {
            show_simon_says_results("green");
        } else if (e.target.value === "green") {
            show_simon_says_results("blue");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("red");
        }
    } else if (has_vowel() /*&& strikes === 2*/) {
        if (e.target.value === "red") {
            show_simon_says_results("green");
        } else if (e.target.value === "blue") {
            show_simon_says_results("red");
        } else if (e.target.value === "green") {
            show_simon_says_results("yellow");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("blue");
        }
    } else if (!has_vowel() /*&& strikes === 0*/) {
        if (e.target.value === "red") {
            show_simon_says_results("blue");
        } else if (e.target.value === "blue") {
            show_simon_says_results("yellow");
        } else if (e.target.value === "green") {
            show_simon_says_results("green");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("red");
        }
    } else if (!has_vowel() /*&& strikes === 1*/) {
        if (e.target.value === "red") {
            show_simon_says_results("red");
        } else if (e.target.value === "blue") {
            show_simon_says_results("blue");
        } else if (e.target.value === "green") {
            show_simon_says_results("yellow");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("green");
        }
    } else if (!has_vowel() /*&& strikes === 2*/) {
        if (e.target.value === "red") {
            show_simon_says_results("yellow");
        } else if (e.target.value === "blue") {
            show_simon_says_results("green");
        } else if (e.target.value === "green") {
            show_simon_says_results("blue");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("red");
        }
    }
}

function show_simon_says_results(string) {
    var simonSaysBody = document.getElementsByClassName("simon-says-container")[0];

    var simonSayResults = document.createElement("p");
    simonSayResults.textContent = string;
    simonSayResults.classList.add("simon-says-result");
    simonSaysBody.appendChild(simonSayResults);
}

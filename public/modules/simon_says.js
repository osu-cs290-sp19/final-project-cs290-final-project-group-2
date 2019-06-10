var numSimonResults = 0;

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
        remove_simon_says_results();
        numSimonResults = 0;
    }
    if(simon_says_value === "red" || simon_says_value === "blue" || simon_says_value === "green" || simon_says_value === "yellow") {
        find_the_flash(e);
    }
    if (simon_says_value === "done" && numSimonResults > 2) {
        hide_simon_says_module();
        remove_simon_says_results();
        modulesSolved++;
        numSimonResults = 0;
    }
}

function find_the_flash(e) {
    if(has_vowel() /*&& strikes === 0*/) {
        if(e.target.value === "red") {
            show_simon_says_results("Blue");
        } else if (e.target.value === "blue") {
            show_simon_says_results("Red");
        } else if (e.target.value === "green") {
            show_simon_says_results("Yellow");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("Green");
        }
    } else if (has_vowel() /*&& strikes === 1*/) {
        if (e.target.value === "red") {
            show_simon_says_results("Yellow");
        } else if (e.target.value === "blue") {
            show_simon_says_results("Green");
        } else if (e.target.value === "green") {
            show_simon_says_results("Blue");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("Red");
        }
    } else if (has_vowel() /*&& strikes === 2*/) {
        if (e.target.value === "red") {
            show_simon_says_results("Green");
        } else if (e.target.value === "blue") {
            show_simon_says_results("Red");
        } else if (e.target.value === "green") {
            show_simon_says_results("Yellow");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("Blue");
        }
    } else if (!has_vowel() /*&& strikes === 0*/) {
        if (e.target.value === "red") {
            show_simon_says_results("Blue");
        } else if (e.target.value === "blue") {
            show_simon_says_results("Yellow");
        } else if (e.target.value === "green") {
            show_simon_says_results("Green");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("Red");
        }
    } else if (!has_vowel() /*&& strikes === 1*/) {
        if (e.target.value === "red") {
            show_simon_says_results("Red");
        } else if (e.target.value === "blue") {
            show_simon_says_results("Blue");
        } else if (e.target.value === "green") {
            show_simon_says_results("Yellow");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("Green");
        }
    } else if (!has_vowel() /*&& strikes === 2*/) {
        if (e.target.value === "red") {
            show_simon_says_results("Yellow");
        } else if (e.target.value === "blue") {
            show_simon_says_results("Green");
        } else if (e.target.value === "green") {
            show_simon_says_results("Blue");
        } else if (e.target.value === "yellow") {
            show_simon_says_results("Red");
        }
    }
}

function show_simon_says_results(string) {
    numSimonResults++;
    if(numSimonResults < 6) {
        var simonSaysBody = document.getElementsByClassName("simon-says-container")[0];

        var simonSayResults = document.createElement("p");
        simonSayResults.textContent = string;
        simonSayResults.classList.add("simon-says-result");
        simonSaysBody.appendChild(simonSayResults);
    }
}

function remove_simon_says_results() {
    if(document.getElementsByClassName("simon-says-result")) {
        var simonSaysBody = document.getElementsByClassName("simon-says-result");
        for (var i = 0; i < simonSaysBody.length; i++) {
            simonSaysBody[i].remove();
            remove_simon_says_results();
        }
    }
}

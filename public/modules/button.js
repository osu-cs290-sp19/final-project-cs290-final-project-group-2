function display_button_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("the-button-modal").classList.remove("hidden");
}

function hide_button_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("the-button-modal").classList.add("hidden");
}

var color = "color";
var word = "word";

function check_color_strip() {
    var modalBody = document.getElementsByClassName("the-button-result")[0];

    var simpleWiresResults = document.createElement("p");
    simpleWiresResults.classList.add("simple-wires-result");
    simpleWiresResults.textContent = "Release the button when the countdown timer has the corresponding number in any position";

    var buttonImg = document.createElement("img");
    buttonImg.setAttribute("src", "assets/color_strip.png");
    buttonImg.classList.add("color-strip-img");

    modalBody.appendChild(simpleWiresResults);
    modalBody.appendChild(buttonImg);
}


function the_button_results() {
    if (color === "blue" && word === "abort") {
        check_color_strip();
    } else if (get_batteries() > 1 && word === "detonate") {
        show_the_button_results("Press and immediately release the button");
    } else if (color === "white" && get_car()) {
        check_color_strip();
    } else if (get_batteries() > 2 && get_frk()) {
        show_the_button_results("Press and immediately release the button");
    } else if (color === "yellow") {
        check_color_strip();
    } else if (color === "red" && word === "hold") {
        show_the_button_results("Press and immediately release the button");
    } else {
        check_color_strip();
    }
}

function check_the_button(e) {
    //sets color and word variables depending what the user selects
    var temp = e.target.value;
    if (temp === "red" || temp === "blue" || temp === "yellow" || temp === "white") {
        color = temp;
    }
    if (temp === "abort" || temp === "detonate" || temp === "hold" || temp === "press") {
        word = temp;
    }

    //checks if results button what pressed
    if (temp === "result") {
        remove_the_button_results()
        if (color !== "color" && word !== "word") {
            the_button_results()
            clear_radios();
            modulesSolved++;
            console.log(modulesSolved);
        } else {
            alert("You must choose a color and word");
        }
    }

    //Check if the cancel button or the X was pressed
    if (temp === "cancel") {
        hide_button_module();
        clear_radios();
        remove_the_button_results();
    }
}

function clear_radios() {
    if (document.querySelector('input[name="color"]:checked')) {
        document.querySelector('input[name="color"]:checked').checked = false;
    }
    if (document.querySelector('input[name="text"]:checked')) {
        document.querySelector('input[name="text"]:checked').checked = false;
    }
    color = "color";
    word = "word";
}

//showing results to the screen
function show_the_button_results(string) {
    var modalBody = document.getElementsByClassName("the-button-result")[0];

    var simpleWiresResults = document.createElement("p");
    simpleWiresResults.classList.add("simple-wires-result");
    simpleWiresResults.textContent = string;

    modalBody.appendChild(simpleWiresResults);
}

function remove_the_button_results() {
    if (document.getElementsByClassName("simple-wires-result")[0]) {
        document.getElementsByClassName("simple-wires-result")[0].remove();
    }
    if (document.getElementsByClassName("color-strip-img")[0]) {
        document.getElementsByClassName("color-strip-img")[0].remove();
    }
}

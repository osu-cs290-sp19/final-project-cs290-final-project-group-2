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
    //this function will ask the user to press and hold the button and
    //ask them what color the strip is. Then will check what the user selected
    //and display the # in the timer that the button should be released
}

function the_button_results() {
    if(color === "blue" && word === "abort") {
        check_color_strip();
    } else if(/*batteries > 1 &&*/ word === "detonate") {
        console.log("press and immediately release the button");
    } else if(color === "white" /*&& CAR === 1*/) {
        check_color_strip();
    } /*else if(/*batteries > 2 && FRK === 1) {
        console.log("press and immediately release the button");
    }*/ else if(color === "yellow") {
        check_color_strip();
    } else if(color === "red" && word === "hold") {
        console.log("press and immediately release the button");
    } else {
        check_color_strip();
    }
}

function check_the_button(e) {
    //sets color and word variables depending what the user selects
    var temp = e.target.value;
    if(temp === "red" || temp ==="blue" || temp === "yellow" || temp === "white") {
        color = temp;
    }
    if(temp === "abort" || temp === "detonate" || temp === "hold" || temp === "press") {
        word = temp;
    }

    //checks if results button what pressed
    if(temp === "result") {
        if(color !== "color" && word !== "word") {
            the_button_results()
        } else {
            alert("You must choose a color and word");
        }
    }

    //Check if the cancel button or the X was pressed
    if (temp === "cancel") {
        hide_button_module();
        document.querySelector('input[name="color"]:checked').checked = false;
        document.querySelector('input[name="text"]:checked').checked = false;
        color = "color";
        word = "word";
    }
}

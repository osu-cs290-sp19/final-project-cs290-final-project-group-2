function display_memory_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("memory-modal").classList.remove("hidden");
}

function hide_memory_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("memory-modal").classList.add("hidden");
}

var positions = [];
var labels = [];

function run_stages(e) {
    if(e.target.value === "display-submit") {
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        stage_1();
    }
}

function stage_1() {
    var display = document.getElementById("memory-display").value;
    console.log(display);
    if (display === "1" || display === "2") {
        console.log("Press the button in the second position");
        positions.push("2");
        labels.push(get_label());
    } else if (display === "3") {
        console.log("Press the button in the third position");
        positions.push("3");
        labels.push(get_label());
    } else if (display === "4") {
        console.log("Press the button in the fourth position");
        positions.push("4");
        labels.push(get_label());
    } else {
        console.log("Valid display not entered");
    }
}

function stage_2() {
    var display = document.getElementById("memory-display").value;
    if (display === "1") {
        console.log("Press the button labeled 4");
        labels.push("4");
        positions.push(get_position());
    } else if (display === "2" || display === "4") {
        console.log("Press the button in position ", positions[0]);
        positions.push(positions[0]);
        labels.push(get_label());
    } else if (display === "3") {
        console.log("Press the button in the first position");
        positions.push("1");
        labels.push(get_label());
    } else {
        console.log("Valid display not entered");
    }
}

function stage_3() {
    var display = document.getElementById("memory-display").value;
    if (display === "1") {
        console.log("Press the button labeled ", labels[1]);
        labels.push(labels[1]);
        positions.push(get_position());
    } else if (display === "2") {
        console.log("Press the button labeled ", labels[0]);
        labels.push(labels[0]);
        positions.push(get_position());
    } else if (display === "3") {
        console.log("Press the button in the third position");
        positions.push("3");
        labels.push(get_label());
    } else if (display === "4") {
        console.log("Press the button labeled 4");
        labels.push("4");
        positions.push(get_position());
    } else {
        console.log("Valid display not entered");
    }
}

function stage_4() {
    var display = document.getElementById("memory-display").value;
    if (display === "1") {
        console.log("Press the button in position ", positions[0]);
        positions.push(positions[0]);
        labels.push(get_label());
    } else if (display === "2") {
        console.log("Press the button in the first position");
        positions.push("1");
        labels.push(get_label());
    } else if (display === "3" || display === "4") {
        console.log("Press the button in position ", positions[1]);
        positions.push(positions[1]);
        labels.push(get_label());
    } else {
        console.log("Valid display not entered");
    }
}

function stage_5() {
    var display = document.getElementById("memory-display").value;
    if (display === "1") {
        console.log("Press the button labeled ", labels[0]);
    } else if (display === "2") {
        console.log("Press the button labeled ", labels[1]);
    } else if (display === "3") {
        console.log("Press the button labeled ", labels[3]);
    } else if (display === "4") {
        console.log("Press the button labeled ", labels[2]);
    }
}

// function get_label() {
//     var modalBody = document.getElementsByClassName("prompt-container")[0];
//
//     var labelInputDiv = document.createElement("div");
//     labelInputDiv.classList.add("display-input");
//     modalBody.appendChild(labelInputDiv);
//
//     var labelInputText = document.createElement("p");
//     labelInputText.textContent = "Enter label";
//     labelInputDiv.appendChild(labelInputText);
//
//     var labelInputBox = document.createElement("input");
//     labelInputBox.setAttribute("type", "text");
//     labelInputBox.setAttribute("id", "memory-label");
//     labelInputBox.setAttribute("maxlength", "1");
//     labelInputDiv.appendChild(labelInputBox);
//
//     var labelInputButton = document.createElement("button");
//     labelInputButton.setAttribute("type", "button");
//     labelInputButton.setAttribute("value", "label-submit");
//     labelInputButton.classList.add("simple-button");
//     labelInputButton.classList.add("ktane-red");
//     labelInputButton.textContent = "Submit";
//     labelInputDiv.appendChild(labelInputButton);
//
//     console.log(labelInputDiv);
// }

function get_label() {
    document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    if(document.getElementById("memory-label").value){
        console.log(document.getElementById("memory-label").value);
        return document.getElementById("memory-label").value;
    }
}

function get_position() {
    //TODO
}

function show_memory_results(string) {
    var modalBody = document.getElementsByClassName("prompt-container")[0];

    var memoryResults = document.createElement("p");
    memoryResults.textContent = string;

    modalBody.appendChild(memoryResults);
}

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

// document.getElementById("display-submit").addEventListener("click", function() {
//     if(document.getElementById("memory-position").value)
//         console.log("display submit pressed");
//
// });
//
// document.getElementById("label-submit").addEventListener("click", function() {
//     if(document.getElementById("memory-label").value)
//         labels.push(document.getElementById("memory-display").value);
//     run_the_next_stage();
// });
//
// document.getElementById("position-submit").addEventListener("click", function() {
//     if(document.getElementById("memory-position").value)
//         positions.push(document.getElementById("memory-position").value);
//     run_the_next_stage();
// });




//calls the stage that is next
function run_the_next_stage() {
    if(labels.length === 0) {
        stage_1();
    } else if(labels.length === 1) {
        clear_memory_results()
        stage_2();
    } else if(labels.length === 2) {
        clear_memory_results()
        stage_3();
    } else if(labels.length === 3) {
        clear_memory_results()
        stage_4();
    } else if(labels.length === 4) {
        clear_memory_results()
        stage_5();
    }
}



function run_stages(e) {
    if(e.target.value === "display-submit") {
        // document.getElementsByClassName("display-input")[0].classList.add("hidden");
        run_the_next_stage();
    }
}

function clear_all_inputs() {
    document.getElementById("memory-display").value = "";
    document.getElementById("memory-label").value = "";
    document.getElementById("memory-position").value = "";
}

function stage_1() {
    var display = document.getElementById("memory-display").value;
    if (display === "1" || display === "2") {
        show_memory_results("Press the button in the second position");
        positions.push("2");
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    } else if (display === "3") {
        show_memory_results("Press the button in the third position");
        positions.push("3");
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    } else if (display === "4") {
        show_memory_results("Press the button in the fourth position");
        positions.push("4");
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    } else {
        console.log("Valid display not entered");
    }
}

function stage_2() {
    var display = document.getElementById("memory-display").value;
    if (display === "1") {
        show_memory_results("Press the button labeled 4");
        labels.push("4");
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("position-input")[0].classList.remove("hidden");
    } else if (display === "2" || display === "4") {
        show_memory_results("Press the button in position " + positions[0]);
        positions.push(positions[0]);
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    } else if (display === "3") {
        show_memory_results("Press the button in the first position");
        positions.push("1");
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    } else {
        console.log("Valid display not entered");
    }
}

function stage_3() {
    var display = document.getElementById("memory-display").value;
    if (display === "1") {
        show_memory_results("Press the button labeled " + labels[1]);
        labels.push(labels[1]);
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("position-input")[0].classList.remove("hidden");
    } else if (display === "2") {
        show_memory_results("Press the button labeled " + labels[0]);
        labels.push(labels[0]);
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("position-input")[0].classList.remove("hidden");
    } else if (display === "3") {
        show_memory_results("Press the button in the third position");
        positions.push("3");
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    } else if (display === "4") {
        show_memory_results("Press the button labeled 4");
        labels.push("4");
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("position-input")[0].classList.remove("hidden");
    } else {
        console.log("Valid display not entered");
    }
}

function stage_4() {
    var display = document.getElementById("memory-display").value;
    if (display === "1") {
        show_memory_results("Press the button in position " + positions[0]);
        positions.push(positions[0]);
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    } else if (display === "2") {
        show_memory_results("Press the button in the first position");
        positions.push("1");
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    } else if (display === "3" || display === "4") {
        show_memory_results("Press the button in position " + positions[1]);
        positions.push(positions[1]);
        document.getElementsByClassName("display-input")[0].classList.add("hidden");
        document.getElementsByClassName("label-input")[0].classList.remove("hidden");
    } else {
        console.log("Valid display not entered");
    }
}

function stage_5() {
    var display = document.getElementById("memory-display").value;
    if (display === "1") {
        show_memory_results("Press the button labeled " + labels[0]);
    } else if (display === "2") {
        show_memory_results("Press the button labeled " + labels[1]);
    } else if (display === "3") {
        show_memory_results("Press the button labeled " + labels[3]);
    } else if (display === "4") {
        show_memory_results("Press the button labeled " + labels[2]);
    }
}


function show_memory_results(string) {
    var modalBody = document.getElementsByClassName("prompt-container")[0];

    var memoryResults = document.createElement("p");
    memoryResults.classList.add("memory-result");
    memoryResults.textContent = string;

    modalBody.appendChild(memoryResults);
}

function clear_memory_results() {
    if(document.getElementsByClassName("memory-result")[0]) {
        document.getElementsByClassName("memory-result")[0].remove();
    }
}

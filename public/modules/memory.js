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

function stage_1() {
    if (display === 1 || display === 2) {
        console.log("Press the button in the second position");
        positions.push(2);
        labels.push(get_label());
    } else if (display === 3) {
        console.log("Press the button in the third position");
        positions.push(3);
        labels.push(get_label());
    } else if (display === 4) {
        console.log("Press the button in the fourth position");
        positions.push(4);
        labels.push(get_label());
    } else {
        console.log("Valid display not entered");
    }
}

function stage_2() {
    if (display === 1) {
        console.log("Press the button labeled 4");
        labels.push(4);
        positions.push(get_position());
    } else if (display === 2 || display === 4) {
        console.log("Press the button in position ", positions[0]);
        positions.push(positions[0]);
        labels.push(get_label());
    } else if (display === 3) {
        console.log("Press the button in the first position");
        positions.push(1);
        labels.push(get_label());
    } else {
        console.log("Valid display not entered");
    }
}

function stage_3() {
    if (display === 1) {
        console.log("Press the button labeled ", labels[1]);
        labels.push(labels[1]);
        positions.push(get_position());
    } else if (display === 2) {
        console.log("Press the button labeled ", labels[0]);
        labels.push(labels[0]);
        positions.push(get_position());
    } else if (display === 3) {
        console.log("Press the button in the third position");
        positions.push(3);
        labels.push(get_label());
    } else if (display === 4) {
        console.log("Press the button labeled 4");
        labels.push(4);
        positions.push(get_position());
    } else {
        console.log("Valid display not entered");
    }
}

function stage_4() {
    if (display === 1) {
        console.log("Press the button in position ", positions[0]);
        positions.push(positions[0]);
        labels.push(get_label());
    } else if (display === 2) {
        console.log("Press the button in the first position");
        positions.push(1);
        labels.push(get_label());
    } else if (display === 3 || display === 4) {
        console.log("Press the button in position ", positions[1]);
        positions.push(positions[1]);
        labels.push(get_label());
    } else {
        console.log("Valid display not entered");
    }
}

function stage_5() {
    if (display === 1) {
        console.log("Press the button labeled ", labels[0]);
    } else if (display === 2) {
        console.log("Press the button labeled ", labels[1]);
    } else if (display === 3) {
        console.log("Press the button labeled ", labels[3]);
    } else if (display === 4) {
        console.log("Press the button labeled ", labels[2]);
    }
}

function get_label() {
    //TODO
}

function get_position() {
    //TODO
}

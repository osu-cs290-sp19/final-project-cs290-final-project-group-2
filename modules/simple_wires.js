function display_simple_wire_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("simple-wires-modal").classList.remove("hidden");
}

function hide_simple_wire_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("simple-wires-modal").classList.add("hidden");
}

var simpleWiresArray = new Array(6);
var num_of_wires = 0, num_red_wires = 0, num_blue_wires = 0, num_yellow_wires = 0, num_black_wires = 0, num_white_wires = 0;

function clear_simple_wires_array() {
    //This will clear all of the elements in the array
    simpleWiresArray = new Array(6);
}

function undo_simple_wires_array() {
    //remove the element at the end of the array
}

function add_to_simple_wires_array(value) {
    for(var i = 0; i < simpleWiresArray.length; i++) {
        if(typeof simpleWiresArray[i] === 'undefined') {
            simpleWiresArray[i] = value;
            num_of_wires++;
            return;
        }
    }
}

function print_array() {
    for(var i = 0; i < simpleWiresArray.length; i++) {
        console.log(simpleWiresArray[i]);
    }
}

function count_each_color() {
    for(var i = 0; i < simpleWiresArray.length; i++) {
        if(simpleWiresArray[i] === "red") {
            num_red_wires++;
        } else if(simpleWiresArray[i] === "blue") {
            num_blue_wires++;
        } else if(simpleWiresArray[i] === "yellow") {
            num_yellow_wires++;
        } else if(simpleWiresArray[i] === "black") {
            num_black_wires++;
        } else if(simpleWiresArray[i] === "white") {
            num_white_wires++;
        }
    }
}

function results() {
    //Tells the user which wire to cut
    count_each_color();
    if(num_of_wires === 3) {
        if(num_red_wires === 0) {
            console.log("cut the second wire");
        } else if(simpleWiresArray[num_of_wires-1] === "white") {
            console.log("cut the last wire");
        } else if(num_blue_wires > 1) {
            console.log("cut the last blue wire");
        } else {
            console.log("cut the last wire");
        }
    } else if(num_of_wires === 4) {
        if(num_red_wires > 1 /*&& last digit of the serial number is odd*/) {
            console.log("cut the last red wire");
        } else if(simpleWiresArray[num_of_wires-1] === "yellow") {
            console.log("cut the first wire");
        } else if(num_blue_wires === 1) {
            console.log("cut the first wire");
        } else if(num_yellow_wires > 1) {
            console.log("cut the last wire");
        } else {
            console.log("cut the second wire");
        }
    } else if(num_of_wires === 5) {
        if(simpleWiresArray[num_of_wires-1] === "black" /*&& last digit of the serial number is odd*/) {
            console.log("cut the fourth wire");
        } else if(num_red_wires === 1 && num_yellow_wires > 1) {
            console.log("cut the first wire");
        } else if(num_black_wires === 0) {
            console.log("cut the second wire");
        } else {
            console.log("cut the first wire");
        }
    } else if(num_of_wires === 6) {
        if(num_yellow_wires === 0 /*&& last digit of the serial number is odd*/) {
            console.log("cut the third wire");
        } else if(num_yellow_wires === 1 && num_white_wires > 1) {
            console.log("cut the fourth wire");
        } else if(num_red_wires === 0) {
            console.log("cut the last wire");
        } else {
            console.log("cut the fourth wire");
        }
    }
}

function check_simple_wires_button(e) {
    //Check which color button was pressed
    if(e.target.value === "red") {
        add_to_simple_wires_array(e.target.value);
    } else if(e.target.value === "blue") {
        add_to_simple_wires_array(e.target.value);
    } else if(e.target.value === "yellow") {
        add_to_simple_wires_array(e.target.value);
    } else if(e.target.value === "black") {
        add_to_simple_wires_array(e.target.value);
    } else if(e.target.value === "white") {
        add_to_simple_wires_array(e.target.value);
    }

    //Check if the result button was pressed
    if(e.target.value === "result") {
        if(num_of_wires > 2 && num_of_wires < 7) {
            results();
        } else {
            alert("Either not enough wires selected or to many selected");
        }
    }

    //Check if the cancel button or the X was pressed
    if(e.target.value === "cancel") {
        clear_simple_wires_array();
        hide_simple_wire_module();
        num_of_wires = 0; num_red_wires = 0; num_blue_wires = 0; num_yellow_wires = 0; num_black_wires = 0; num_white_wires = 0;
    }

    //Check of the undo button was pressed
    if(e.target.value === "undo") {
        undo_simple_wires_array();
    }

    print_array();
}

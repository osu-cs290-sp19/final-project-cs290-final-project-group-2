function display_simple_wire_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("simple-wires-modal").classList.remove("hidden");
}

function hide_simple_wire_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("simple-wires-modal").classList.add("hidden");
}

var simpleWiresArray = [];
var num_of_wires = 0, num_red_wires = 0, num_blue_wires = 0, num_yellow_wires = 0, num_black_wires = 0, num_white_wires = 0;

function reset_all_num_wires() {
    num_of_wires = 0, num_red_wires = 0, num_blue_wires = 0, num_yellow_wires = 0, num_black_wires = 0, num_white_wires = 0;
}

function clear_simple_wires_array() {
    //This will clear all of the elements in the array
    simpleWiresArray = [];
}

function undo_simple_wires_array() {
    //remove the element at the end of the array
    if(simpleWiresArray.length > 0) {
        simpleWiresArray.pop();
    } else {
        alert("Can not undo any any more because there are not more wires to undo");
    }
}

function add_to_simple_wires_array(value) {
    simpleWiresArray.push(value);
    num_of_wires++;
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

function simple_wire_results() {
    //Tells the user which wire to cut
    count_each_color();
    if(num_of_wires === 3) {
        if(num_red_wires === 0) {
            // console.log("cut the second wire");
            show_simple_wire_results("cut the second wire");
        } else if(simpleWiresArray[num_of_wires-1] === "white") {
            console.log("cut the last wire");
        } else if(num_blue_wires > 1) {
            console.log("cut the last blue wire");
        } else {
            console.log("cut the last wire");
        }
    } else if(num_of_wires === 4) {
        if(num_red_wires > 1 && get_parity() === "odd") {
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
        if(simpleWiresArray[num_of_wires-1] === "black" && get_parity() === "odd") {
            console.log("cut the fourth wire");
        } else if(num_red_wires === 1 && num_yellow_wires > 1) {
            console.log("cut the first wire");
        } else if(num_black_wires === 0) {
            console.log("cut the second wire");
        } else {
            console.log("cut the first wire");
        }
    } else if(num_of_wires === 6) {
        if(num_yellow_wires === 0 && get_parity() === "odd") {
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
        show_simple_wires_chosen("red-simple-wire");
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
            simple_wire_results();
            clear_simple_wires_array();
            reset_all_num_wires();
        } else {
            alert("Either not enough wires selected or to many selected");
        }
    }

    //Check if the cancel button or the X was pressed
    if(e.target.value === "cancel") {
        clear_simple_wires_array();
        hide_simple_wire_module();
        reset_all_num_wires();
        document.getElementsByClassName("simple-wires-result")[0].remove();
    }

    //Check of the undo button was pressed
    if(e.target.value === "undo") {
        undo_simple_wires_array();
    }

    print_array();
}

//showing stuff to the screen


function show_simple_wire_results(string) {
    var modalBody = document.getElementsByClassName("modal-body")[1];

    var simpleWiresResults = document.createElement("p");
    simpleWiresResults.classList.add("simple-wires-result");
    simpleWiresResults.textContent = string;
    console.log(modalBody);

    modalBody.appendChild(simpleWiresResults);
}

function show_simple_wires_chosen(string) {
    var wireContainer = document.getElementById("wire-container");

    var simpleWireDiv = document.createElement("div");
    simpleWireDiv.classList.add(string);
    wireContainer.appendChild(simpleWireDiv);
    console.log(simpleWireDiv);
}

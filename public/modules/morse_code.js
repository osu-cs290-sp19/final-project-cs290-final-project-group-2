function display_morse_code_module() {
    document.getElementById("modal-backdrop").classList.remove("hidden");
    document.getElementById("morse-code-modal").classList.remove("hidden");
}

function hide_morse_code_module() {
    document.getElementById("modal-backdrop").classList.add("hidden");
    document.getElementById("morse-code-modal").classList.add("hidden");
}

var all_morse_words = ["shell", "halls", "slick", "trick", "boxes", "leaks", "strobe", "bistro", "flick", "bombs", "break", "brick", "steak", "sting", "vector", "beats"];
var user_morse_words = [];
var dot_dash = [];
var string = "";
var morse_number = "";

function check_morse_code(e) {
    //TODO
    if(e.target.value === "dot") {
        dot_dash.push("dot");
    }
    if(e.target.value === "dash") {
        dot_dash.push("dash");
    }
    if(e.target.value === "gap") {
        check_dot_dash();
    }
    if(e.target.value === "result") {
        fill_user_array();
        set_number();
        show_morse_code_results();
    }
}

function check_dot_dash() {
    var x = dot_dash.length;
    find_the_letter(x);
    dot_dash = [];
}

function find_the_letter(x) {
    if(x === 1) {
        if(dot_dash[0] === "dot")
            string += "e";
        else if(dot_dash[0] === "dash")
            string += "t";
    }
    if(x === 2) {
        if(dot_dash[0] === "dot" && dot_dash[1] === "dash")
            string += "a";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot")
            string += "i";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash")
            string += "m";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot")
            string += "n";
    }
    if(x === 3) {
        if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dot")
            string += "d";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash" && dot_dash[2] === "dot")
            string += "g";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dash")
            string += "k";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash" && dot_dash[2] === "dash")
            string += "o";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dot")
            string += "r";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dot")
            string += "s";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dash")
            string += "u";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dash")
            string += "w";

    }
    if(x === 4) {
        if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dot" && dot_dash[3] === "dot")
            string += "b";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dash" && dot_dash[3] === "dot")
            string += "c"
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dash" && dot_dash[3] === "dot")
            string += "f";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dot" && dot_dash[3] === "dot")
            string += "h";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dash" && dot_dash[3] === "dash")
            string += "j";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dot" && dot_dash[3] === "dot")
            string += "l";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dash" && dot_dash[2] === "dash" && dot_dash[3] === "dot")
            string += "p";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash" && dot_dash[2] === "dot" && dot_dash[3] === "dash")
            string += "q";
        else if(dot_dash[0] === "dot" && dot_dash[1] === "dot" && dot_dash[2] === "dot" && dot_dash[3] === "dash")
            string += "v";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dot" && dot_dash[3] === "dash")
            string += "x";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dot" && dot_dash[2] === "dash" && dot_dash[3] === "dash")
            string += "y";
        else if(dot_dash[0] === "dash" && dot_dash[1] === "dash" && dot_dash[2] === "dot" && dot_dash[3] === "dot")
            string += "z";
    }
}

function fill_user_array() {
    if(string === "shell" || string === "hells" || string === "ellsh" || string === "llshe" || string === "lshel")
        user_morse_words.push("shell");
    else if(string === "halls" || string === "allsh" || string === "llsha" || string === "lshal" || string === "shall")
        user_morse_words.push("halls");
    else if(string === "slick" || string === "licks" || string === "icksl" || string === "cksli" || string === "kslic")
        user_morse_words.push("slick");
    else if(string === "trick" || string === "rickt" || string === "icktr" ||  string === "cktri" || string === "ktric")
        user_morse_words.push("trick");
    else if(string === "boxes" || string === "oxesb" || string === "xesbo" || string === "esbox" || string === "sboxe")
        user_morse_words.push("boxes");
    else if(string === "leaks" || string === "eaksl" || string === "aksle" || string === "kslea" || string === "sleak")
        user_morse_words.push("leaks");
    else if(string === "strobe" || string === "trobes" || string === "robest" || string === "obestr" || string === "bestro" || string === "estrob")
        user_morse_words.push("strobe");
    else if(string === "bistro" || string === "istrob" || string === "strobi" || string === "trobis" || string === "robist" || string === "obistr")
        user_morse_words.push("bistro");
    else if(string === "flick" || string === "lickf" || string === "ickfl" || string === "ckfli" || string === "kflic")
        user_morse_words.push("flick");
    else if(string === "bombs" || string === "ombsb" || string === "mbsbo" || string === "bsbom" || string === "sbomb")
        user_morse_words.push("bombs");
    else if(string === "break" || string === "reakb" || string === "eakbr" || string === "akbre" || string === "kbrea")
        user_morse_words.push("break");
    else if(string === "brick" || string === "rickb" || string === "ickbr" || string === "ckbri" || string === "kbric")
        user_morse_words.push("brick");
    else if(string === "steak" || string === "teaks" || string === "eakst" || string === "akste" || string === "kstea")
        user_morse_words.push("steak");
    else if(string === "sting" || string === "tings" || string === "ingst" || string === "ngsti" || string === "gstin")
        user_morse_words.push("sting");
    else if(string === "vector" || string === "ectorv" || string === "ctorve" || string === "torvec" || string === "orvect" || string === "rvecto")
        user_morse_words.push("vector");
    else if(string === "beats" || string === "eatsb" || string === "atsbe" || string === "tsbea" || string === "sbeat")
        user_morse_words.push("beats");
}

function set_number() {
    if(user_morse_words[0] === "shell")
        morse_number = "3.505 MHz";
    else if(user_morse_words[0] === "halls")
        morse_number = "3.515 MHz";
    else if(user_morse_words[0] === "slick")
        morse_number = "3.522 MHz";
    else if(user_morse_words[0] === "trick")
        morse_number = "3.532 MHz";
    else if(user_morse_words[0] === "boxes")
        morse_number = "3.535 MHz";
    else if(user_morse_words[0] === "leaks")
        morse_number = "3.542 MHz";
    else if(user_morse_words[0] === "strobe")
        morse_number = "3.545 MHz";
    else if(user_morse_words[0] === "bistro")
        morse_number = "3.552 MHz";
    else if(user_morse_words[0] === "flick")
        morse_number = "3.555 MHz";
    else if(user_morse_words[0] === "bombs")
        morse_number = "3.565 MHz";
    else if(user_morse_words[0] === "break")
        morse_number = "3.572 MHz";
    else if(user_morse_words[0] === "brick")
        morse_number = "3.575 MHz";
    else if(user_morse_words[0] === "steak")
        morse_number = "3.582 MHz";
    else if(user_morse_words[0] === "sting")
        morse_number = "3.592 MHz";
    else if(user_morse_words[0] === "vector")
        morse_number = "3.595 MHz";
    else if(user_morse_words[0] === "beats")
        morse_number = "3.600 MHz";

}

function show_morse_code_results() {
    var morseContainer = document.getElementsByClassName("morse-code-container")[0];

    var morseResults = document.createElement("p");
    morseResults.classList.add("morse-result");
    morseResults.textContent = user_morse_words[0] + morse_number;
    morseContainer.appendChild(morseResults);
}

var solveButton = document.getElementById("solveButton");
solveButton.onclick = function() {
    checkLevels()
};

var loginButton = document.getElementById("navbar-user-button");
loginButton.onclick = function() {
    get_user()
};

var loginEnter = document.getElementById("navbar-user-input");
loginEnter.onkeyup = function() {
    enter_key();
};

//checks multiple levels selected
function checkLevels() {
    var selectCount = 0;
    var bombId = "";
    for (var i = 0; i < document.getElementsByTagName("select").length; i++) {
        var option = document.getElementsByTagName("select")[i].value;
        //console.log(option);
        if (option === "select")
            selectCount++;
        else
            bombId = option;
    }
    if (selectCount === 6) {
        console.log("BombID: ", bombId);
        sessionStorage.setItem("bombId", bombId);
        window.location.href = 'modules.html';
    } else
        alert("Choose exactly 1 bomb");
}

function get_user() {
    var username = document.getElementById('navbar-user-input').value;
    alert("Welcome " + username + "! You are now signed in.");
    sessionStorage.setItem("username", username);
    console.log(username);
}

function enter_key() {
    if (event.keyCode === 13) {
        var username = document.getElementById('navbar-user-input').value;
        alert("Welcome " + username + "! You are now signed in.");
        sessionStorage.setItem("username", username);
        console.log(username);
    }
}

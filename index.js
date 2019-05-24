var solveButton = document.getElementById("solveButton");
solveButton.onclick = function() {printOptions()};

function printOptions() {
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
    if(selectCount === 6) {
        console.log("BombID: ", bombId);
        sessionStorage.setItem("bombId", bombId);
        window.location.href = 'modules.html';
    } else
        alert("Choose exactly 1 bomb");
}

//sessionStorage.setItem("storedVal", 69);

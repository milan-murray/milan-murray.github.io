let darkMode = true

function changeToLightMode() {
    console.log("Dark mode: " + darkMode);
    if (darkMode == true) {
        document.getElementById("nav").className = "navbar navbar-expand-lg bg-light navbar-light";
        document.getElementById("body").className = "card bg-light my-2";
        document.getElementsByClassName("text-light text-center")[0].className = "text-dark text-center";
        document.getElementsByClassName("text-light text-center")[0].className = "text-dark text-center";
        let lightTextFields = document.getElementsByClassName("text-light").length;
        for (i = 0; i < lightTextFields; i++) {
            document.getElementsByClassName("text-light")[0].className = "text-dark";
        }
        console.log("Light mode applied.");
        darkMode = false;
    }
}

function changeToDarkMode() {
    console.log("Dark mode: " + darkMode);
    if (darkMode == false) {
        document.getElementById("nav").className = "navbar navbar-expand-lg bg-dark navbar-dark";
        document.getElementById("body").className = "card bg-dark my-2";
        document.getElementsByClassName("text-dark text-center")[0].className = "text-light text-center";
        document.getElementsByClassName("text-dark text-center")[0].className = "text-light text-center";
        let darkTextFields = document.getElementsByClassName("text-dark").length;
        for (i = 0; i < darkTextFields; i++) {
            document.getElementsByClassName("text-dark")[0].className = "text-light";
        }
        console.log("Dark mode applied.");
        darkMode = true;
    }
}

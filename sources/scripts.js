let darkMode = true;
let tableVisable = false;

function changeToLightMode() {
    console.log("Dark mode: " + darkMode);
    if (darkMode == true) {
        // document.getElementById("nav").className = "navbar navbar-expand-lg bg-light navbar-light";
        document.getElementById("card").className = "card bg-light my-3";
        document.getElementsByClassName("text-light text-center")[0].className = "text-dark text-center";
        document.getElementsByClassName("text-light text-center")[0].className = "text-dark text-center";
        // document.getElementById("scroll_to_top_btn").className = "btn btn-dark btn-sm ml-auto m-3 fixed-bottom";
        document.getElementsByTagName("table")[0].className = "table table-striped table-bordered";
        document.getElementsByTagName("button")[2].className = "btn btn-dark btn-sm float-right";
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
        // document.getElementById("nav").className = "navbar navbar-expand-lg bg-dark navbar-dark";
        document.getElementById("card").className = "card bg-dark my-3";
        document.getElementsByClassName("text-dark text-center")[0].className = "text-light text-center";
        document.getElementsByClassName("text-dark text-center")[0].className = "text-light text-center";
        // document.getElementById("scroll_to_top_btn").className = "btn btn-light btn-sm ml-auto m-3 fixed-bottom";
        document.getElementsByTagName("table")[0].className = "table table-dark table-striped table-bordered";
        document.getElementsByTagName("button")[2].className = "btn btn-light btn-sm float-right";
        let darkTextFields = document.getElementsByClassName("text-dark").length;
        for (i = 0; i < darkTextFields; i++) {
            document.getElementsByClassName("text-dark")[0].className = "text-light";
        }
        console.log("Dark mode applied.");
        darkMode = true;
    }
}

function toggleTableDisplay()  {
    if (tableVisable == false) {
      document.getElementsByTagName("table")[0].style.display = "";
      tableVisable = true;
    } else {
      document.getElementsByTagName("table")[0].style.display = "none";
      tableVisable = false;
    }
}

/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("scroll_to_top_btn").style.display = "block";
  } else {
    document.getElementById("scroll_to_top_btn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
*/
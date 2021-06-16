let darkMode = true;
let tableVisable = false;

/* --- --- --- --- --- --- --- --- Light Mode --- --- --- --- --- --- --- --- */

function changeToLightMode() {
    console.log("Dark mode: " + darkMode);
    if (darkMode == true) {
        // Update all the cards
        let lightCardCount = document.getElementsByClassName("card bg-dark my-3 h-100").length;
        for (i = 0; i < lightCardCount; i++) {
            document.getElementsByClassName("card bg-dark my-3 h-100")[0].className = "card bg-light my-3 h-100";
        }

        // Update the centered text
        document.getElementsByClassName("text-light text-center")[0].className = "text-dark text-center";
        document.getElementsByClassName("text-light text-center")[0].className = "text-dark text-center";

        // Update all the skill progress bar
        let progressBarCount = document.getElementsByClassName("progress_bar_darkmode").length;
        for (i = 0; i < progressBarCount; i++) {
            document.getElementsByClassName("progress_bar_darkmode")[0].className = "progress_bar_lightmode"
        }

        // Update all the full% skill progress bar
        let progressBarFullCount = document.getElementsByClassName("full_progress_darkmode").length;
        for (i = 0; i < progressBarFullCount; i++) {
            document.getElementsByClassName("full_progress_darkmode")[0].className = "full_progress_lightmode"
        }

        // Update all the ninety% skill progress bar
        let progressBarNinetyCount = document.getElementsByClassName("ninety_per_progress_darkmode").length;
        for (i = 0; i < progressBarNinetyCount; i++) {
            document.getElementsByClassName("ninety_per_progress_darkmode")[0].className = "ninety_per_progress_lightmode"
        }

        // Update all the quarter_to% skill progress bar
        let progressBarQuarterToCount = document.getElementsByClassName("quarter_to_progress_darkmode").length;
        for (i = 0; i < progressBarQuarterToCount; i++) {
            document.getElementsByClassName("quarter_to_progress_darkmode")[0].className = "quarter_to_progress_lightmode"
        }

        // Update all the half% skill progress bar
        let progressBarHalfCount = document.getElementsByClassName("half_progress_darkmode").length;
        for (i = 0; i < progressBarHalfCount; i++) {
            document.getElementsByClassName("half_progress_darkmode")[0].className = "half_progress_lightmode"
        }

        // Update all the quarter% skill progress bar
        let progressBarQuarterCount = document.getElementsByClassName("quarter_progress_darkmode").length;
        for (i = 0; i < progressBarQuarterCount; i++) {
            document.getElementsByClassName("quarter_progress_darkmode")[0].className = "quarter_progress_lightmode"
        }

        // Update the results table
        document.getElementsByTagName("table")[0].className = "table table-striped table-bordered";

        // Update the result toggle button
        document.getElementsByTagName("button")[2].className = "btn btn-dark btn-sm float-right";
        // Update the download button
        document.getElementsByTagName('button')[3].className = "btn btn-light fixed-bottom ml-auto mr-3 mb-2 border border-dark"
        
        // Update all text
        let lightTextCount = document.getElementsByClassName("text-light").length;
        for (i = 0; i < lightTextCount; i++) {
            if (document.getElementsByClassName("text-light")[0].className == "text-light indent") {
                document.getElementsByClassName("text-light")[0].className = "text-dark indent";
            } else {
                document.getElementsByClassName("text-light")[0].className = "text-dark";
            }
        }
        console.log("Light mode applied.");
        darkMode = false;
    }
}

/* --- --- --- --- --- --- --- --- Dark Mode --- --- --- --- --- --- --- --- */
function changeToDarkMode() {
    console.log("Dark mode: " + darkMode);
    if (darkMode == false) {
        // Update all the cards
        let darkCardCount = document.getElementsByClassName("card bg-light my-3 h-100").length;
        for (i = 0; i < darkCardCount; i++) {
            document.getElementsByClassName("card bg-light my-3 h-100")[0].className = "card bg-dark my-3 h-100";
        }

        // Update the centered text
        document.getElementsByClassName("text-dark text-center")[0].className = "text-light text-center";
        document.getElementsByClassName("text-dark text-center")[0].className = "text-light text-center";

        // Update all the skill progress bar
        let progressBarCount = document.getElementsByClassName("progress_bar_lightmode").length;
        for (i = 0; i < progressBarCount; i++) {
            document.getElementsByClassName("progress_bar_lightmode")[0].className = "progress_bar_darkmode"
        }

        // Update all the full% skill progress bar
        let progressBarFullCount = document.getElementsByClassName("full_progress_lightmode").length;
        for (i = 0; i < progressBarFullCount; i++) {
            document.getElementsByClassName("full_progress_lightmode")[0].className = "full_progress_darkmode"
        }

        // Update all the ninety% skill progress bar
        let progressBarNinetyCount = document.getElementsByClassName("ninety_per_progress_lightmode").length;
        for (i = 0; i < progressBarNinetyCount; i++) {
            document.getElementsByClassName("ninety_per_progress_lightmode")[0].className = "ninety_per_progress_darkmode"
        }

        // Update all the quarter_to% skill progress bar
        let progressBarQuarterToCount = document.getElementsByClassName("quarter_to_progress_lightmode").length;
        for (i = 0; i < progressBarQuarterToCount; i++) {
            document.getElementsByClassName("quarter_to_progress_lightmode")[0].className = "quarter_to_progress_darkmode"
        }

        // Update all the half% skill progress bar
        let progressBarHalfToCount = document.getElementsByClassName("half_progress_lightmode").length;
        for (i = 0; i < progressBarHalfToCount; i++) {
            document.getElementsByClassName("half_progress_lightmode")[0].className = "half_progress_darkmode"
        }

        // Update all the quarter% skill progress bar
        let progressBarQuarterCount = document.getElementsByClassName("quarter_progress_lightmode").length;
        for (i = 0; i < progressBarQuarterCount; i++) {
            document.getElementsByClassName("quarter_progress_lightmode")[0].className = "quarter_progress_darkmode"
        }

        // Update the results table
        document.getElementsByTagName("table")[0].className = "table table-dark table-striped table-bordered";

        // Update the result toggle button
        document.getElementsByTagName("button")[2].className = "btn btn-light btn-sm float-right";
        // Update the download button
        document.getElementsByTagName('button')[3].className = "btn btn-dark fixed-bottom ml-auto mr-3 mb-2 border border-light"
        
        // Update all text
        let darkTextFields = document.getElementsByClassName("text-dark").length;
        for (i = 0; i < darkTextFields; i++) {
            if (document.getElementsByClassName("text-dark")[0].className == "text-dark indent") {
                document.getElementsByClassName("text-dark")[0].className = "text-light indent";
            } else {
                document.getElementsByClassName("text-dark")[0].className = "text-light";
            }
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

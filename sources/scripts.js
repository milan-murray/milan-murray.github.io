let darkMode = false;
// let tableVisable = false;

/* --- --- --- --- --- --- --- --- Light Mode --- --- --- --- --- --- --- --- */

function changeToLightMode() {
	console.log("Dark mode: " + darkMode);
	if (darkMode) {
		// Set backgroud to dark
		document.getElementsByTagName("body")[0].className = "bg-dark";

		// Update all the cards
		let lightCardCount = document.getElementsByClassName("card bg-dark my-3 h-100").length;
		for (i = 0; i < lightCardCount; i++) {
			document.getElementsByClassName("card bg-dark my-3 h-100")[0].className = "card bg-light my-3 h-100";
		}

		// Update the centered text
		let centeredTextCount = document.getElementsByClassName("text-light text-center").length;
		for (i = 0; i < centeredTextCount; i++) {
			document.getElementsByClassName("text-light text-center")[0].className = "text-dark text-center";
		}

		// Update the results table
		// document.getElementsByTagName("table")[0].className = "table table-light text-dark table-striped table-bordered rounded";
		// Update the result toggle button
		// document.getElementsByTagName("button")[2].className = "btn btn-dark btn-sm float-end";
		
		// Update the download button
		document.getElementsByTagName('button')[2].className = "btn btn-dark fixed-bottom border border-light download-btn"

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
		// Set backgroud to grey
		document.getElementsByTagName("body")[0].className = "bg-secondary";
		
		// Update all the cards
		let darkCardCount = document.getElementsByClassName("card bg-light my-3 h-100").length;
		for (i = 0; i < darkCardCount; i++) {
			document.getElementsByClassName("card bg-light my-3 h-100")[0].className = "card bg-dark my-3 h-100";
		}

		// Update the centered text
		let centeredTextCount = document.getElementsByClassName("text-dark text-center").length;
		for (i = 0; i < centeredTextCount; i++) {
			document.getElementsByClassName("text-dark text-center")[0].className = "text-light text-center";
		}

		// Update the results table
		// document.getElementsByTagName("table")[0].className = "table table-dark text-light table-striped table-bordered rounded";
		// Update the result toggle button
		// document.getElementsByTagName("button")[2].className = "btn btn-light btn-sm float-end";
		
		// Update the download button
		document.getElementsByTagName('button')[2].className = "btn btn-light fixed-bottom border border-dark download-btn"

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

// function toggleTableDisplay() {
// 	if (tableVisable == false) {
// 		document.getElementsByTagName("table")[0].style.display = "";
// 		tableVisable = true;
// 	} else {
// 		document.getElementsByTagName("table")[0].style.display = "none";
// 		tableVisable = false;
// 	}
// }

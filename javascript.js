// function editNodeText(id, newText) {
// 	var node = document.getElementById(id);
// 	while(node.firstChild)
// 		node.removeChild(node.firstChild);
// 	node.appendChild(document.createTextNode(newText));
// }

// function addExclamation {
// 	var text = document.getElementById("exciteBox").value
// 	text = text + "!!!"
//  	document.getElementById('resultText').innerHTML = "Hello";

// }

function addExclamation() {
		document.getElementById('resultText').innerHTML = document.getElementById("exciteBox").value + "!";
	}
function myFunction(name)
		{
		document.getElementById("resultText").innerHTML = "Welcome " + name;
		}
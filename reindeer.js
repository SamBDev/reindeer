var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

var loopCount = Math.min(colors.length, reindeer.length)
var newElement, newTextNode, currentColor, currentReindeer;

for (var i = 0; i < loopCount; i++) {
	currentColor = colors[i];
	currentReindeer = reindeer[i];

	newTextNode = document.createTextNode(`${currentColor} ${currentReindeer}`);
	newElement = document.createElement("p");
	newElement.appendChild(newTextNode);
	hohohoElement.appendChild(newElement);
}
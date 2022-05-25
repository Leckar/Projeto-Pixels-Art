const colorPalettes = document.getElementsByClassName("color");
function randomColorGenerator() {
	const numberArray = [];
	for (let i = 1; i < 4; i += 1) {
		const randomNumber = Math.round(Math.random() * 255);
		numberArray.push(randomNumber);
	}
	return `rgb(${numberArray[0]}, ${numberArray[1]}, ${numberArray[2]})`;
}
window.onload = function() {
	for (let i = 1; i < 4; i += 1) {
		const randomRgbValues = randomColorGenerator();
		colorPalettes[i].style.backgroundColor = randomRgbValues;
	}
}

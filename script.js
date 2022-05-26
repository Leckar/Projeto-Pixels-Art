//Gerador de cores aleatórias para as paletas;
const colorPalettes = document.querySelectorAll('.color');
function randomRGBNumber() {
	return Math.round(Math.random() * 230);
}
function randomRGBColor() {
	return `rgb(${randomRGBNumber()}, ${randomRGBNumber()}, ${randomRGBNumber()})`;
}
function paletteColorSetter() {
	const paletteSize = colorPalettes.length;
	for (let i = 0; i < paletteSize; i += 1) {
		if (i < 1) {
			colorPalettes[i].style.backgroundColor = 'black';
		} else {
			colorPalettes[i].style.backgroundColor = randomRGBColor();
		}
	}
}
//Gerador do board;
const pixelBoard = document.getElementById('pixel-board');
function boardCell() {
	const newDiv = document.createElement('div');
	newDiv.classList.add('pixel');
	return newDiv;
}
function boardRows(sideSize) {
	const newRow = document.createElement('div');
	newRow.classList.add('row');
	pixelBoard.appendChild(newRow);
	for (let i = 0; i < sideSize; i += 1) {
		const newLine = boardCell();
		newRow.appendChild(newLine);
	}
}
function boardBuilder(sideSize) {
	for (let i = 0; i < sideSize; i += 1) {
		boardRows(sideSize);
	}
}

//Função que carrega todos os elementos quando a página carrega;
window.onload = () => {
	paletteColorSetter();
	boardBuilder(5);
}
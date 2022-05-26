const colorPalettes = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const pixelBoard = document.getElementById('pixel-board');

//Gerador de cores aleatórias para as paletas;
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

//Função que muda a cor selecionada;
function colorSelector(event) {
	const selected = document.querySelector('.selected');
	selected.classList.remove('selected');
	event.target.classList.add('selected');
}
function colorListener() {
	for (let i = 0; i < colorPalettes.length; i += 1) {
		colorPalettes[i].addEventListener('click', colorSelector);
	}
}

//Função que muda a cor do "pixel";
function colorChange(event) {
	const newColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
	event.target.style.backgroundColor = newColor;
}

//Gerador do board;
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
function boardEraser() {
	pixelBoard.children.splice(0);
}
function boardReset() {
	boardEraser();
	boardBuilder(5);
}
//Função que ativa o listener dos pixeis;
function pixelHunting() {
	for (let i = 0; i < pixels.length; i += 1) {
		pixels[i].addEventListener('click', colorChange);
	}
}
//Função que carrega todos os elementos quando a página carrega;
window.onload = () => {
	paletteColorSetter();
	colorListener();
	boardBuilder(5);
	pixelHunting();
}

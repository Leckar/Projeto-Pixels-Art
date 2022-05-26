//Variáveis necessárias para o funcionamento do código;
const colorPalettes = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
let pixelBoard = document.getElementById('pixel-board');
const boardClearButton = document.getElementById('clear-board');
const boardSizeInput = document.getElementById('board-size');
const boardSizeGenerator = document.getElementById('generate-board');
const divRows =  document.getElementsByClassName('row');
let sizeValue = 5;
//Gerador dos valores aleatórios do rgb;
function randomRGBNumber() {
	return Math.round(Math.random() * 230);
}
//Gerador do rgb com números aleatórios;
function randomRGBColor() {
	return `rgb(${randomRGBNumber()}, ${randomRGBNumber()}, ${randomRGBNumber()})`;
}
//Função que atribui as cores às paletas;
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
// Função que muda a cor do "pixel";
function colorChange(event) {
	const newColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
	event.target.style.backgroundColor = newColor;
}
//Gerador dos pixels individuais;
function boardCell() {
	const newDiv = document.createElement('div');
	newDiv.classList.add('pixel');
	return newDiv;
}
//Função que cria as linhas e ancora os pixels;
function boardRows(sideSize) {
	const newRow = document.createElement('div');
	newRow.classList.add('row');
	pixelBoard.appendChild(newRow);
	for (let i = 0; i < sideSize; i += 1) {
		const newCell = boardCell();
		newRow.appendChild(newCell);
	}
}
//Função que cria o board;
function boardBuilder(sideSize) {
	for (let i = 0; i < sideSize; i += 1) {
		boardRows(sideSize);
	}
}
//Função que verifica a validez do valor do input;
function validityCheck(inputValue) {
	if (!inputValue) {
		return false;
	}
	return true;
}
//Função que limita o valor do board;
function boardSizeLimiter(inputValue) {
	if (inputValue >= 50) {
		return 50;
	} else if (inputValue <= 5) {
		return 5;
	}
	return inputValue;
}
//Função que deleta o board;
function boardKiller() {
	const main = document.querySelector('body').children[1];
	main.removeChild(pixelBoard);
	pixelBoard = document.createElement('section');
	pixelBoard.setAttribute('id', 'pixel-board');
	main.appendChild(pixelBoard);
}
//Função que refaz o board;
function generateNewBoard(value) {
	if (!validityCheck(value)) {
		return alert('Board inválido!')
	}
	sizeValue = boardSizeLimiter(value);
	boardBuilder(sizeValue);
}
//Função que para o eventListener dos pixels;
function processKiller() {
	const iterations = pixels.length - 1;
	for (let i = iterations; i >= 0; i -= 1) {
		pixels[i].removeEventListener('click', colorChange);
	}
}
//Função que recria o board e os listeners dos pixels;
function boardCreator() {
	let value = boardSizeInput.value;
	generateNewBoard(value)
	pixelPainting()
}
//Função que interrompe os listeners e deleta o board;
function boardDeletion() {
	processKiller()
	boardKiller()
}
//Função que reseta as cores dos pixels;
function colorReset() {
	for (let i = 0; i < pixels.length; i += 1) {
		pixels[i].style.backgroundColor = 'white';
	}
}
//Listener do botão "Limpar";
function boardReset() {
	boardClearButton.addEventListener('click', colorReset);
}
//Função que ativa o listener dos pixeis;
function pixelPainting() {
	for (let i = 0; i < pixels.length; i += 1) {
		pixels[i].addEventListener('click', colorChange);
	}
}

//Função que ativa o listener do VQV;
function boardButtonListener() {
	boardSizeGenerator.addEventListener('click', function() {
		boardDeletion()
		boardCreator()
	})
}
//Função que carrega todos os elementos quando a página carrega;
window.onload = () => {
	paletteColorSetter();
	colorListener();
	boardBuilder(5);
	pixelPainting();
	boardReset();
	boardButtonListener()
}

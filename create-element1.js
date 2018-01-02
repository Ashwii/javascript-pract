'use strict';
var players = ["dhoni","virat","Rohit"];
var fruits = ["Banana","Apple","papaya"];

function createNewElement(name){
	return document.createElement(name);
}
function createNewLIElement(text){
	const liElem = createNewElement('LI');
	liElem.innerHTML = text;
	return liElem;
}
function addElementToBody(elem){
	document.body.appendChild(elem);
}
function addToPlayerList(elem){
	playerList.appendChild(elem);
}
function addToFruitList(elem){
	fruitList.appendChild(elem);
}
const playerList = createNewElement('UL');
const fruitList = createNewElement('UL');
addElementToBody(playerList);
addElementToBody(fruitList);
players.map(createNewLIElement).forEach(addToPlayerList);
fruits.map(createNewLIElement).forEach(addToFruitList);


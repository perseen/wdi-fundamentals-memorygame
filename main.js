
const cards = [
{
 rank: "queen",
 suit: "hearts",
 cardImage: "images/queen-of-hearts.png"
},
{
 rank: "queen",
 suit: "diamonds",
 cardImage: "images/queen-of-diamonds.png"
},
{
 rank: "king",
 suit: "hearts",
 cardImage: "images/king-of-hearts.png"
},
{
 rank: "king",
 suit: "diamonds",
 cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = [];

var checkForMatch = function () {
	let cardsInPlay = this.setAttribute('src', cards[cardsId].cardImage)
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}

};

var flipCard = function () {
	let cardsId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardsId].rank);
	console.log("User flipped " + cards[cardsId].rank);	
	console.log(cards[cardsId].cardImage);
	console.log(cards[cardsId].suit);
};


checkForMatch ();

function createBoard() {
	for ( let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', [i]);
		cardElement.addEventListener('click', flipCard);
		documents.getElementById.('game-board').appendChild(cardElement);

	}

};

createBoard();











// esercizio 5

function Bingo() {
	var random = 1 + Math.round(Math.random()*9);
	this.guess = function(n) { return n===random; };
}
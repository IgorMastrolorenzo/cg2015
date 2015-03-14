
// esercizio 6

function randomPrec(){
	var num = []
	for (n = Math.round(Math.random()*100); n >= 0; n--) {
		num.push(n);
	}
	return num.reverse();
}
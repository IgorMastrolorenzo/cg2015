
// esercizio 12

function random(){return 1 + (Math.round(Math.random() * 999))}

function div(){

	var x = random();
	var y = random();

	var limit = Math.min(x,y);
	var div = 1;

	for (i=2; i<=limit && div === 1; i++) {
		if (x%i===0 && y%i===0)
			div = i;
	}

	if (div === 1)
		return ["nessun divisore comune maggiore di 1", x, y];
	else 
		return [div, x, y];
}
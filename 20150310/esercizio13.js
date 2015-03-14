
// esercizio 13

function random(){return 1 + (Math.round(Math.random() * 999))}

function MCD(x,y){

	var limit = Math.min(x,y);
	var div = 1;

	for (i=2; i<=limit; i++) {
		if (x%i===0 && y%i===0)
			div = i;
	}

	return div;
}

function mcm(){

	var x = random();
	var y = random();

	return [(x*y)/MCD(x,y), x, y];
}



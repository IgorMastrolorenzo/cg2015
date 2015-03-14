
// esercizio 9

function random() { return Math.round(Math.random()*100)};

function maxRndN(){

	var n = random();
	var max = random();

	for (i=n-1; i>0; i--){
		max = Math.max(max, random());
	}

	return max;

}

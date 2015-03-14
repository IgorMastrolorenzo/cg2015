
// esercizio 10

function random (min,max){ return min + (Math.round(Math.random() * max))};

function sumDigits(){

	var n = random(1000, 8999) + "";
	var somma = 0;

	for(i=0; i<n.length; i++){
		somma += (n.charAt(i) - 0);
	}
	
	return [somma,n];
	
	}
}
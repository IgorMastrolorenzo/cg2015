
// esercizio 11

function random (min,max){ return min + (Math.round(Math.random() * max))};

function sumDigits2(){

	var n = random(1000, 8999) + "";
	var somma = 0;

	for(i=0; i<n.length-1; i++){
		somma += (n.charAt(i) - 0);
	}
	
	return [somma,n];
	
	}
}

// esercizio 7

function oddRand() {

	var n = Math.round(Math.random()*100);

	if (n < 40){
		return [];
	}
	else {
		var num = [];
		for (i=40; i<=n; i++){
			if (i%2 === 0)
				num.push(i);
		}
		return num;
	}
}

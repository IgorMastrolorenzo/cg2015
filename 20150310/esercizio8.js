
// esercizio 8

function oddRand2() {

	var n = Math.round(Math.random()*100);

	if (n < 40){
		var num = []
		for(i=40; i>=n; i--){
			num.push(i);
		}
		return num;
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
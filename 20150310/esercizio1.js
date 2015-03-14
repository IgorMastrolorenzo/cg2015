
// esercizio 1.a

function pushn(n){
	var arr = []
	for (i = 1; i <= n; i++){
		arr.push(i);
	}
	return arr;
}


// esercizio 1.b

var filterOdd = pushn(10).filter(function(item, index, array){
	return item % 2 === 0;
});


// esercizio 1.c

var doubleAll = filterOdd.map(function(item, index, array){
	return item * 2;
});


// esercizio 1.d

var onlyBy4 = doubleAll.filter(function(item, index, array){
	return item % 4 === 0;
});


// esercizio 1.e

var summAll = onlyBy4.reduce(function(prev, curr, index, array){
	return prev + curr;
});
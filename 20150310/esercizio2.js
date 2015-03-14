
// esercizio 2.a

function pushNRandom(n){
	var array = [];
	for(i=0; i<10; i++){
		array.push(Math.round(Math.random()*10));
	}
	return array;
}


// esercizio 2.b

var onlyOdd = pushNRandom(10).filter(function(item, index, array){
	return item % 2 !== 0;
});
var onlyOdd = pushNRandom(10).filter(function(item, index, array){
	return item % 2 !== 0;
});


//esercizio 2.c

var compare = function(value1, value2){
	return value1 - value2;
};

var sortOdd = onlyOdd.sort(compare);
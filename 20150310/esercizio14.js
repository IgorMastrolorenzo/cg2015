
// esercizio 14

function random(){return 1 + (Math.round(Math.random() * 99))}

function av3dev(){

	var x = random();
	var y = random();

	var media = (x+y)/2;
	var ds = Math.sqrt(((Math.pow(x-media,2)) + (Math.pow(y-media,2)))/4);

	return [x, y, media, ds];
}
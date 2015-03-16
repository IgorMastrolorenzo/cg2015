// esercizio 8

function Point2D(){
	this.x = Math.random()*9;
	this.y = Math.random()*9;
}

// esercizio 8.a/8.b

function Edge(){
	this.v1 = new Point2D();
	this.v2 = new Point2D();
}

Edge.prototype.length = 
function(){ 
	
	var x1 = this.v1.x;
	var y1 = this.v1.y;
	var x2 = this.v2.x;
	var y2 = this.v2.y;

	return Math.sqrt((Math.pow(x2-x1,2)) + (Math.pow(y2-y1,2)));
}; 




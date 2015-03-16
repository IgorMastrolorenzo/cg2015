
// esercizio 9

function Point2D(){
	this.x = Math.random()*9;
	this.y = Math.random()*9;
}

function Edge(v1, v2){
	this.v1 = v1;
	this.v2 = v2;
}

Edge.prototype.length = 
function() { 
	
	var x1 = this.v1.x;
	var y1 = this.v1.y;
	var x2 = this.v2.x;
	var y2 = this.v2.y;

	return Math.sqrt((Math.pow(x2-x1,2)) + (Math.pow(y2-y1,2)));
};

function Triangle(){
	var v1 = new Point2D();
	var v2 = new Point2D();
	var v3 = new Point2D();
	this.l1 = new Edge(v1, v2);
	this.l2 = new Edge(v2, v3);
	this.l3 = new Edge(v1, v3);
} 

Triangle.prototype.perimeter = function() { return (this.l1.length() + this.l2.length() + this.l3.length()) };
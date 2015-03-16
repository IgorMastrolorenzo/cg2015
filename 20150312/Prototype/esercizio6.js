
// eserczio 6

(function() {

  function Album(name, author){
  	var played = 0;
  	this.name = name;
  	this.author = author;
  	this.played = function() { return played; };
  	this.play = function(){ played+=1;
  							return "Playing " + this.name; };
  }

  function MusicBox(){
  	var allAlbum = [];
  	this.addAlbum = function(album){ allAlbum.push(album); };
  	this.favoriteAlbum = function(){if (allAlbum === [])
  										return "Empty";
  									else {
  										var a = allAlbum[0];

  										for(i=0; i<allAlbum.length; i++)
  											if (a.played()<allAlbum[i].played())
  												a = allAlbum[i];

  										return a.name + " - " + a.author;
  									}
  									};
  }

  var box = new MusicBox();
  var a1 = new Album("The Who", "Tommy");
  var a2 = new Album("Tom Waits", "Closing Time");
  var a3 = new Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());
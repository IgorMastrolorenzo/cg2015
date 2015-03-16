
// esercizio 7

(function () {

  function Photo(name){
  	var allTags = [];
  	this.name = name;
  	this.tag = function(tag) { allTags.push(tag); };
  	this.showTags = function() {
  								var s = "";
  								
  								for(i=0; i<allTags.length; i++){
  									if (i !== allTags.length -1)
  										s += allTags[i] + ", ";
  									else 
  										s += allTags[i] + "."; 
  								}

  								return s;
  								};
  }

  function PhotoAlbum(){
  	var pictures = [];
  	this.addPicture = function(p) { pictures.push(p); };
  	this.showPictures = function(name) { };

  }

  var album = PhotoAlbum();
  var p;

  p = Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");    
}());
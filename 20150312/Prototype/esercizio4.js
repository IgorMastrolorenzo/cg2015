
// esercizio 4

(function () {

  var person = { 
    buy: function(car){ return "I'm Rich"; }
  };  

  var  car = { 
    drive: function() { return "Vrum Vrum"; }, 
    price: 1001
  }; 

  // print Vrum Vrum
  car.drive();

  // print I'm rich
  if ( car.price > 1000 ) {
    person.buy(car);
  }
}());



(function () {
  var employees = [new function Employer(){this.hello = function(){ return "I work at IBM"; };}, new function Employer(){this.hello = function(){ return "I work at IBM"; };} ];

  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }
}());
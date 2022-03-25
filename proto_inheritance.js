function MovingObject() { 
}

MovingObject.prototype.liftOff = function() {
  console.log("Rabbit's foot");
};

function Ship() { }
function Asteroid() { }

Function.prototype.inherits = function(superClass) {
  function Surrogate() { }
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inheritz = function(superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
}


Ship.inheritz(MovingObject);
Asteroid.inheritz(MovingObject);

let ship = new Ship();
ship.liftOff();

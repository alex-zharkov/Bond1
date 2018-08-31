function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.func = function () {
  console.log(this);
};


function RoadTransport(category) {
  Vehicle.call(this,'road transport');
  this.category = category;
}
RoadTransport.prototype = Object.create(Vehicle.prototype);

RoadTransport.prototype.func = function () {
  console.log(this);
};

function Avtobus(type) {
  RoadTransport.call(this,'Avtobus');
  this.type = type;
}

Avtobus.prototype = Object.create(RoadTransport.prototype);

Avtobus.prototype.func = function () {
  console.log(this);
};


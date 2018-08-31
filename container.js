function Container(myId, myClass) {
  this.id = myId;
  this.class = myClass;
}

Container.prototype.render = function () {
  var div = document.createElement('div');
  div.className = this.class;
  div.id = this.id;

  return div;
};


Container.prototype.remove = function () {
  document.getElementById(this.id).remove();
};

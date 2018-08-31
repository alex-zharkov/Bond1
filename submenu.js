function Submenu(myId, myClass, items) {
  Menu.call(this, myId, myClass);

  // this.id = myId;
  // this.class = myClass;
  this.items = items;
}

Submenu.prototype = Object.create(Menu.prototype);




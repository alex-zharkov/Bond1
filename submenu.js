function SubMenu(myId, myClass, items) {
  Menu.call(this, myId, myClass);
  this.items = items;
}

SubMenu.prototype = Object.create(Menu.prototype);




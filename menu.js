function Menu(myId, myClass, items) {
  Container.call(this, myId, myClass);
  this.items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {
  var ul = document.createElement('ul');
  ul.className = this.class;
  ul.id = this.id;
  var li = document.createElement('li');

  this.items.forEach(function (item) {
    if (item instanceof Container) {
      ul.appendChild(item.render());
    }
    if (item instanceof Submenu){
      li.appendChild(item.render());
    }
  });
  return ul;
};
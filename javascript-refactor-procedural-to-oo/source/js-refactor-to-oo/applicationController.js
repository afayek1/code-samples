$(document).ready(function() {
  new Controller().initialize();
});

function Controller(){
  this._view = new View();
};

Controller.prototype.getView = function(){
  return this._view;
}

Controller.prototype.initialize = function() {
  this.getView().getAddRollButton().on('click', this.getView().addDie);
  this.getView().getRollButton().on('click', this.getView().rollDie)
};


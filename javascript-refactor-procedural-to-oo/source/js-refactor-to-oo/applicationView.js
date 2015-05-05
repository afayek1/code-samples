function View(){};

View.prototype.getAddRollButton = function() {
  return $('#roller button.add');
}

View.prototype.getRollButton = function() {
  return $('#roller button.roll');
}

View.prototype.addDie = function() {
  console.log("WAT")
  $('.dice').append('<div class="die">0</div>');
}

View.prototype.rollDie = function() {
  $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  });
}
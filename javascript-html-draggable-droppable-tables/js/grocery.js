window.onload = function() {
  var view = new View();
  var controller = new Controller(view);
  // Allows list to accept items.
  controller.makeDraggable();
  // Makes items in the store draggable.
  controller.makeDroppable();
}



function View(){
  this.grocerySelector = "grocery_list";
  this.storeSelector = "store_list";
  this.totalCostSelector = "total_cost";
  this.itemSelector = "item"
}

View.prototype = {
  getGroceryStoreItems: function () {
    return document.getElementsByClassName(this.itemSelector);
  },

  getGroceryList: function () {
    return document.getElementById(this.grocerySelector);
  },

  getStore: function () {
    return document.getElementById(this.storeSelector);
  },

  getTotalCostSelector: function () {
    return document.getElementById(this.totalCostSelector);
  },

  getTotal: function(table) {
    var groceryTotal = 0;
    var tableRows = table.tBodies[0].rows;
    for(var i=0; i<tableRows.length; i++){
      groceryTotal += parseFloat(tableRows[i].cells[1].innerHTML);
    }
    return groceryTotal.toFixed(2);
  },

  setTotal: function () {
   this.getTotalCostSelector().innerHTML = this.getTotal(this.getGroceryList());
  }
}



function Controller(view){
  this.view = view;
}

Controller.prototype = {
  // TODO: Implement draggable/droppable with VanillaJS and use view object's selectors

  makeDraggable: function() {
    $(".item").draggable({
      helper: "clone",
    }).sortable({});
  },

  makeDroppable: function(){
    var that = this;
    $("#grocery_list").droppable({
      accept: $( ".item" ),
      drop: function(event, ui) {
        $item = ui.draggable.clone();
        $item.appendTo(this);
        console.log(this);
        that.view.setTotal();
      }
    })
  },
};
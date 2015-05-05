var Money = {
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.10,
  NICKEL: 0.05,
};



function Item(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}

Item.prototype = {
  constructor: Items,
  addStock: function(numAdded) {
    this.stock += numAdded;
  }
};



function MoneySlot() {
  this.totalCash = 0;
}

MoneySlot.prototype = {
  constructor: MoneySlot,
  insert: function(amount) {
    if (Money.FIVE) return this.totalCash += 5;
    if (Money.ONE) return totalCash += 1.00;
    if (Money.QUARTER) return totalCash += 0.25;
    if (Money.DIME) return totalCash += 0.10;
    if (Money.NICKEL) return totalCash += 0.05;
  },

  getTotal: function() {
    return this.totalCash;
  },

  cancel: function() {
  }
};



function VendingMachine() {
  this.totalMoneyIn = 0;
  this.stock = {};
  this.moneySlot = new MoneySlot();
}

VendingMachine.prototype = {
  constructor: VendingMachine,
  
  dispense: function() {
    while(true) {
      if (totalMoneyIn > this.price && this.stock > 0) {
        console.log("Enoy your " + this.name);
        this.stock-=1;
        break;
      } else if (this.stock<=0) {
        console.log("Sorry we're out of " + this.name);
      } else {
        console.log("Please put in more money");
      }
    }
  }
};


// EXAMPLE

// Create items
var snickers = new Items ("Snickers", 0.99, 10);
var bbqChips = new Items ("BBQ Lays", 1.49, 4);
var water = new Items ("Dasani", 0.49, 1);

// Create vending machine
var VendingMachine = new VendingMachine();

// Add money to vending machine
VendingMachine.moneySlot.insert(Money.FIVE);
console.log("The total money in the machine now: ", VendingMachine.moneySlot.getTotal());
water.addStock(5);

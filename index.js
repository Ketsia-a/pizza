function order(size, crust, topping = []) {
    this.crust = crust;
    this.size = size;
    this.name = topping;
}

function compute(form) {

    var sizeprice = parseInt(document.getSelection('this.size'), value)
    var crustprice = parseInt(document.getSelection('this.crust'), value)

    var toppingprice = []
    var onep = 1000;
    var twop = 500;
    var threep = 1500;
    var fourp = 700;
    var fivep = 1200;

    for (var i = 0; i < this.topping.length; y++) {
        if (this.toppings[i] === "one") {
            toppingprice.push(onep);
        }
    }
    for (i = 0; i < this.topping.length; y++) {
        if (this.topping[i] === "two") {
            toppingprice.push(twop);
        }
    }
    for (i = 0; i < this.toppings.length; y++) {
        if (this.topping[i] === "three") {
            toppingprice.push(threep);
        }
    }
    for (i = 0; i < this.topping.length; y++) {
        if (this.topping[i] === "four") {
            toppingprice.push(fourp);
        }
    }
    for (i = 0; i < this.topping.length; y++) {
        if (this.toppings[i] === "five") {
            toppingprice.push(fivep);
        }
    }
    var topsum = toppingprice.reduce(function(a, b) {
        return a + b;
    }, 0);

    var Total = sizeprice + crustprice + topsum;

}
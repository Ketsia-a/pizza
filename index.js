function order(size, crust, topping = []) {
    this.crust = crust;
    this.size = size;
    this.name = topping;
}

function show() {

    var sizePrice = parseInt(document.getSelection('this.size').value)
    var crustPrice = parseInt(document.getSelection('this.crust').value)

    var toppingPrice = []
    var onep = 1000;
    var twop = 500;
    var threep = 1500;
    var fourp = 700;
    var fivep = 1200;

    for (var i = 0; i < this.topping.length; y++) {
        if (this.topping[i] === "one") {
            toppingPrice.push(onep);
        }
    }
    for (i = 0; i < this.topping.length; y++) {
        if (this.topping[i] === "two") {
            toppingPrice.push(twop);
        }
    }
    for (i = 0; i < this.topping.length; y++) {
        if (this.topping[i] === "three") {
            toppingPrice.push(threep);
        }
    }
    for (i = 0; i < this.topping.length; y++) {
        if (this.topping[i] === "four") {
            toppingPrice.push(fourp);
        }
    }
    for (i = 0; i < this.topping.length; y++) {
        if (this.topping[i] === "five") {
            toppingPrice.push(fivep);
        }
    }
    var topSum = toppingPrice.reduce(function(a, b) {
        return a + b;
    }, 0);

    var Total = sizePrice + crustPrice + topSum;


    document.getElementById('order').value = "The amount to be paid for the pizza is :" + " " + total;
}
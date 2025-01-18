/* const cart = [
 {name: "Apple", price: 1, quantity: 10},
 {name: "Banana", price: 3, quantity: 5},
 {name: "Milk", price: 10, quantity: 2},
] */

const cart = [
    {name: "Sushi", price: 20, quantity: 4},
    {name: "Burger Max", price: 30, quantity: 1},
   ]

function calculateCartTotal(cart) {
    var total = cart.reduce (function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

if (total>100) {
    total = total * 0.9
}
return total;
}

console.log(calculateCartTotal(cart));

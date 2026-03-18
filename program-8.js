// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:  
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output: 
// total value for "price": 1850
// total value for "quantity": 6
arr = [
    {
        product: "Laptop",
        price: 1000,
        quantity: 2,
    },
    {
        product: "Phone",
        price: 600,
        quantity: 3,
    },
    {
        product: "Monitor",
        price: 250,
        quantity: 1,
    },
]
function calculateTotalValue(arr) {
    let totalPrice = 0;
    let totalQuantity = 0;
    for (let i = 0; i < arr.length; i++) {
        totalPrice += arr[i].price;
        totalQuantity += arr[i].quantity;
    }
    return { totalPrice, totalQuantity };
}
console.log(calculateTotalValue(arr));

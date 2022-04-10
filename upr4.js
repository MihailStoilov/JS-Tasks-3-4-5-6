let sum = 0;
let products = [
  { product: "Shirt", price: 10 },
  { product: "Laptop", price: 2400 },
  { product: "Bike", price: 450 },
  { product: "Chair", price: 150 },
  { product: "Phone", price: 1500 },
  { product: "Shoes", price: 60 },
  { product: "Car", price: 25000 },
  { product: "Coffe Machine", price: 500 }
];

products.forEach(function (el) {
  if (el.price > 0 && el.price <= 100) {
    console.log(`Product: ${el.product}, Category: Cheap`);
  } else if (el.price > 100 && el.price <= 500) {
    console.log(`Product: ${el.product}, Category: Normal price`);
  } else if (el.price > 500 && el.price <= 3000) {
    console.log(`Product: ${el.product}, Category: Expensive`);
  } else if (el.price > 3000) {
    console.log(`Product: ${el.product}, Category: Extremely expensive`);
  }
  sum += el.price;
})

console.log(`The sum of all products price is: ${sum}`);
// create customer  records
let customers = [
  {
    name: "jamilya one",
    email: "jamilya@cat.com",
    purchases: ["Laptop", "Headphones", "Coffee Mug"]
  },
  {
    name: "jamilya two ",
    email: "jamilya@dog.com",
    purchases: ["Smartphone", "Wireless Charger"]
  },
  {
    name: "jamilya three",
    email: "jamilya@bat,com",
    purchases: ["Desk Chair", "Notebook", "Pen Set", "Water Bottle"]
  }
];
console.log("Step 2:", customers);

// add new customer
customers.push({ name: "jamilya four", email: "jamilya@red.com", purchases: ["Tablet", "Stylus Pen"] });

console.log("Step 3:", customers);

// remove first customer
customers.shift();

console.log("Step 3.:", customers);
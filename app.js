const response = await fetch('http://localhost:3000/clients');

const clients = await response.json();

console.log(clients);
console.log(typeof clients);
console.log(Array.isArray(clients));

const products = [
  { name: "Product 1", price: "$20", image: "https://via.placeholder.com/300x200?text=Product+1" },
  { name: "Product 2", price: "$35", image: "https://via.placeholder.com/300x200?text=Product+2" },
  { name: "Product 3", price: "$50", image: "https://via.placeholder.com/300x200?text=Product+3" }
];

const productGrid = document.getElementById("product-grid");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.price}</p>
  `;
  productGrid.appendChild(div);
});
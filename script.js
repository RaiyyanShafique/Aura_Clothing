const products = [
  { name: "Casual TShirt", price: "500", image: "images/tshirt1.jpg." },
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

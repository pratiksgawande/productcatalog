// Product data
const products = [
    { name: 'Smartphone', category: 'electronics', price: '$299' },
    { name: 'Laptop', category: 'electronics', price: '$799' },
    { name: 'T-Shirt', category: 'clothing', price: '$19' },
    { name: 'Sofa', category: 'home', price: '$399' },
    { name: 'Microwave', category: 'home', price: '$99' },
    { name: 'Jeans', category: 'clothing', price: '$49' }
];

// Function to display products
function displayProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ${product.price}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Display all products by default
displayProducts(products);

// Filter products based on selected category
document.getElementById('category-filter').addEventListener('change', function() {
    const selectedCategory = this.value;

    if (selectedCategory === 'all') {
        displayProducts(products); // Display all products
    } else {
        const filteredProducts = products.filter(product => product.category === selectedCategory);
        displayProducts(filteredProducts); // Display filtered products
    }
});

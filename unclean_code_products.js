// Cleaned-up JavaScript file for handling product transactions
const products = [
    { id: 1, name: 'Laptop', cost: 999 },
    { id: 2, name: 'Smartphone', cost: 599 },
    { id: 3, name: 'Headphones', cost: 199 },
  ];
  
  // Function to retrieve a product by its ID
  function getProductById(productId) {
    for (const product of products) {
      if (product.id === productId) {
        return product;
      }
    }
    return null; // Return null if the product is not found
  }
  
  // Function to add a new product to the list
  function addProduct(name, cost) {
    const maxId = products.reduce((max, product) => (product.id > max ? product.id : max), 0);
    products.push({ id: maxId + 1, name: name, cost: cost });
  }
  
  // Function to list all products with their prices
  function listProducts() {
    products.forEach(product => {
      console.log(`${product.name} costs ${product.cost}€`);
    });
  }
  
  // Example usage
  const product = getProductById(2);
  console.log(product);
  addProduct('Tablet', 399);
  listProducts();
  


  // Cleaned-up and formatted JavaScript file for handling product transactions
  const productss = [
    { id: 1, name: 'Laptop', cost: 999 },
    { id: 2, name: 'Smartphone', cost: 599 },
    { id: 3, name: 'Headphones', cost: 199 },
  ];
  
  // Function to retrieve a product by its ID
  function getProductById(productId) {
    for (const product of products) {
      if (product.id === productId) {
        return product;
      }
    }
    return null; // Return null if the product is not found
  }
  
  // Function to add a new product to the list
  function addProduct(name, cost) {
    const maxId = products.reduce((max, product) => (product.id > max ? product.id : max), 0);
    products.push({ id: maxId + 1, name: name, cost: cost });
  }
  
  // Function to list all products with their prices
  function listProducts() {
    products.forEach(product => {
      console.log(`${product.name} costs ${product.cost}€`);
    });
  }
  
  // Example usage
  const productt = getProductById(2);
  console.log(product);
  
  addProduct('Tablet', 399);
  listProducts();
  
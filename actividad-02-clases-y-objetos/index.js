const ProductManager = require("./ProductManager");

// Creamos una instancia de ProductManager
const manager = new ProductManager();

// Prueba de agregar productos
manager.addProduct({
    id: 1,
    name: "Teclado",
    description: "Teclado Mecánico",
    price: 25000,
    stock: 25
});

manager.addProduct({
    id: 2,
    name: "Mouse",
    description: "Mouse inalámbrico",
    price: 15000,
    stock: 40
});

// Intento de agregar un producto con datos incompletos
manager.addProduct({
    id: 3,
    name: "Monitor",
    description: "",
    price: 50000,
    stock: 10
});

// Mostramos todos los productos
console.log("Lista de productos:", manager.getProducts());

// Buscamos un producto por ID
console.log("Producto con ID 1:", manager.getProductById(1));

// Buscamos un producto que no existe
console.log("Producto con ID 99:", manager.getProductById(99));

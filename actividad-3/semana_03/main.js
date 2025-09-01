const ProductManager = require('./productManager');

const manager = new ProductManager();

// Limpiar productos para pruebas (opcional)
const fs = require('fs');
fs.writeFileSync('products.json', '[]');

// 1. Agregamos dos productos
manager.addProduct({
  name: 'Teclado dos',
  description: 'Teclado Mecánico',
  price: 25000,
  stock: 25
});

manager.addProduct({
  name: 'Mouse',
  description: 'Mouse inalámbrico',
  price: 15000,
  stock: 20
});

// 2. Obtenemos y mostramos los productos actuales
console.log("Productos actuales:");
let productos = manager.getProducts();
console.log(productos);

// 3. Actualizamos el segundo producto
const idMouse = productos[1]?.id;
if (idMouse) {
  manager.updateProductById(idMouse, {
    price: 18000,
    stock: 15
  });

  console.log(`Producto actualizado (ID: ${idMouse}):`);
  console.log(manager.getProductById(idMouse));
}

// 4. Eliminamos el primer producto
const idTeclado = productos[0]?.id;
if (idTeclado) {
  manager.deleteProductById(idTeclado);
  console.log(`Producto eliminado (ID: ${idTeclado})`);
}

// 5. Mostramos el estado final del JSON
console.log("Productos finales:");
console.log(manager.getProducts());

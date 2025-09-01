const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class ProductManager {
  constructor(filePath = 'products.json') {
    this.filePath = path.resolve(__dirname, filePath);
    this.products = this.loadProducts();
  }

  loadProducts() {
    try {
      if (fs.existsSync(this.filePath)) {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return [];
    }
  }

  saveProducts() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
    } catch (error) {
      console.error("Error al guardar el archivo:", error);
    }
  }

  addProduct(product) {
    if (
      !product.name ||
      !product.description ||
      product.price === undefined ||
      product.stock === undefined
    ) {
      console.log('Todos los campos son obligatorios');
      return;
    }

    const newProduct = {
      ...product,
      id: uuidv4()
    };

    this.products.push(newProduct);
    this.saveProducts();
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.log("Not found");
      return null;
    }
    return product;
  }

  deleteProductById(id) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      console.log("Not found");
      return;
    }

    this.products.splice(index, 1);
    this.saveProducts();
    console.log(`Producto con id ${id} eliminado correctamente.`);
  }

  updateProductById(id, updatedData) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      console.log("Not found");
      return {};
    }

    this.products[index] = { ...this.products[index], ...updatedData };
    this.saveProducts();
    console.log(`Producto con id ${id} actualizado correctamente.`);
    return this.products[index];
  }
}

module.exports = ProductManager;

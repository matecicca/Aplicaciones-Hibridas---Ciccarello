class ProductManager {
    constructor() {
        // Lista inicial de productos vacía
        this.products = [];
    }

    // Método para agregar un producto
    addProduct(product) {
        const { id, name, description, price, stock } = product;

        // Validador de que todos los campos sean obligatorios
        if (!id || !name || !description || price == null || stock == null) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        // Validdor que no haya productos con el mismo id
        const idExists = this.products.some(p => p.id === id);
        if (idExists) {
            console.log(`Ya existe un producto con el id ${id}`);
            return;
        }

        // Agregamos producto al arreglo
        this.products.push(product);
        console.log(`Producto agregado: ${name}`);
    }

    // Método para obtener todos los productos
    getProducts() {
        return this.products;
    }

    // Método para buscar un producto por ID
    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.log("No encontrado");
            return null;
        }
        return product;
    }
}

// Exportar con CommonJS
module.exports = ProductManager;

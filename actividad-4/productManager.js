// ProductManager.js (ESM)
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class ProductManager {
  constructor(filePath = 'products.json') {
    this.filePath = path.resolve(__dirname, filePath);
  }

  async ensureFile() {
    try {
      await fs.access(this.filePath);
    } catch {
      await fs.writeFile(this.filePath, '[]', 'utf-8');
    }
  }

  async readAll() {
    await this.ensureFile();
    const raw = await fs.readFile(this.filePath, 'utf-8');
    return JSON.parse(raw);
  }

  async write(products) {
    await fs.writeFile(this.filePath, JSON.stringify(products, null, 2), 'utf-8');
  }

  async getProducts() {
    return this.readAll();
  }

  async getProductById(id) {
    const products = await this.readAll();

    // Soporta IDs numéricos o string: compara de forma flexible
    return (
      products.find(p => String(p.id) === String(id)) ||
      null
    );
  }

  // Métodos extra por si luego los necesitás:
  async addProduct({ name, description, price, stock }) {
    if (!name || !description || typeof price !== 'number' || typeof stock !== 'number') {
      throw new Error('Todos los campos son obligatorios y con tipo correcto');
    }
    const products = await this.readAll();
    const nextId = products.length ? Math.max(...products.map(p => Number(p.id))) + 1 : 1;
    const newProduct = {
      id: nextId,
      name,
      description,
      price,
      stock,
      createdAt: new Date().toISOString()
    };
    products.push(newProduct);
    await this.write(products);
    return newProduct;
  }

  async updateProductById(id, patch) {
    const products = await this.readAll();
    const idx = products.findIndex(p => String(p.id) === String(id));
    if (idx === -1) return null;
    products[idx] = { ...products[idx], ...patch, updatedAt: new Date().toISOString() };
    await this.write(products);
    return products[idx];
  }

  async deleteProductById(id) {
    const products = await this.readAll();
    const next = products.filter(p => String(p.id) !== String(id));
    if (next.length === products.length) return false;
    await this.write(next);
    return true;
  }
}

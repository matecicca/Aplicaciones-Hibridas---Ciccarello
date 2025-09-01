// server.js (ESM)
import express from 'express';
import chalk from 'chalk';
import ProductManager from './productManager.js';

const app = express();
const PORT = 8080;
const productModel = new ProductManager();

// Middleware opcional si luego agregás POST/PUT
app.use(express.json());

app.get('/', (_req, res) => {
  console.log(chalk.blue('GET /'));
  res.send('Home');
});

// Lista completa
app.get('/api/productos', async (_req, res) => {
  try {
    const list = await productModel.getProducts();
    console.log(chalk.blue(`GET /productos -> ${list.length} items`));
    res.json(list);
  } catch (err) {
    console.error(chalk.red('Error en GET /productos:'), err);
    res.status(500).json({ error: 'Error interno al obtener productos' });
  }
});

// Un producto por ID (desde el JSON)
app.get('/api/productos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await productModel.getProductById(id);
    if (!item) {
      console.log(chalk.yellow(`GET /productos/${id} -> 404`));
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    console.log(chalk.blue(`GET /productos/${id} -> OK`));
    res.json(item);
  } catch (err) {
    console.error(chalk.red(`Error en GET /productos/${req.params.id}:`), err);
    res.status(500).json({ error: 'Error interno al obtener el producto' });
  }
});

app.listen(PORT, () => {
  console.log(chalk.green(`Servidor escuchando en http://localhost:${PORT}`));
});

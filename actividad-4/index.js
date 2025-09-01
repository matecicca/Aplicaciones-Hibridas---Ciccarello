import ProductManager from './productManager.js';

const pm = new ProductManager(); 

// Helper para mostrar títulos en consola
const title = (t) => console.log(`\n=== ${t} ===`);

try {
  // 1) Semilla de datos si el JSON está vacío
  let all = await pm.getProducts();
  if (!Array.isArray(all) || all.length === 0) {
    title('Sembrando productos de ejemplo (JSON estaba vacío)');
    await pm.addProduct({
      name: 'Teclado',
      description: 'Teclado mecánico',
      price: 25000,
      stock: 25
    });
    await pm.addProduct({
      name: 'Mouse',
      description: 'Mouse óptico',
      price: 12000,
      stock: 10
    });
  }

  // Listamos todos los productos
  title('getProducts() → lista completa');
  all = await pm.getProducts();
  console.log(all);

  // 3) Tomamos un ID existente (el primero de la lista)
  const idPrueba = all?.[0]?.id ?? 1;

  // 4) Buscamos un producto por ID existente
  title(`getProductById(${idPrueba}) → debería existir`);
  const found = await pm.getProductById(idPrueba);
  console.log(found);

  // 5) Buscamos un producto por ID inexistente
  title('getProductById(9999) → debería NO existir');
  const notFound = await pm.getProductById(9999);
  console.log(notFound); // null

  title('Pruebas finalizadas');
} catch (err) {
  console.error('Error ejecutando las pruebas de ProductManager:', err);
  process.exit(1);
}

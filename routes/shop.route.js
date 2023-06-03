// Importando el enrutador de express
import { Router } from 'express';
// Importando Action funcion del controlador products
import { getProducts } from '../controllers/products.controller.js'

// Creando una instancia del enrutador de express
const router = Router();

// Importando productos
import { products } from './admin.routes.js';
import httpsStatus from 'http-status'

// GET /
router.get('/', getProducts);

// GET /about
router.get('/about', (req, res) => {
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

// La ruta raíz entra en todo tipo de petición
router.get(["/", "/home"], (_, res) => {
  console.log(`📔 Inventario de productos: ${JSON.stringify(products)}`);
  console.log("📒 Sirviendo recurso: 'shop.html'");
  res.render('shop', {shop: 'active', docTitle:"Tienda", products});
});

router.use((req, res)=>{
  res.sendFile(path.resolve('views','notfound.html'));
});
export default router;
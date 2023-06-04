// Importando el enrutador de express
import { Router } from 'express';

// Importando productos
import { products } from './admin.routes.js';

// Creando una instancia del enrutador de express
const router = Router();

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

router.use((req, res)=>{
  res.sendFile(path.resolve('views','notfound.html'));
});
export default router;
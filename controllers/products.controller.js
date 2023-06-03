// GET /admin/add-product
export const getAddProduct = function (req, res, next) {
    // Servimos el formulario
    console.log("📢 Sirviendo formulario...");
    res.render('add-product', {
      addProduct: `active`, 
      viewStyle: '/css/add-product.css',
      docTitle:"Add Product"});
  }
// GET /
export const getProducts = (req, res)=>{
    // Mostrando productos en memoria
    console.log("📢 Sirviendo la ruta '/'");
    res.render('shop', { 
      shop: 'active', 
      docTitle:"Shop",
      viewStyle: '/css/product.css',
      isProductsListEmpty: products.length === 0,
      products
    });
  }
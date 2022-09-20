const ProductController = require('../controllers/Product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
}

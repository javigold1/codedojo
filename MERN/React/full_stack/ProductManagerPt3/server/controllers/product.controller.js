const { Product } = require('../models/product.model')


module.exports.index = (req, res) => {
  res.json({ message: "Hello World" });
}


module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title,
    price,
    description
  })
    .then(product => res.json(product))
    .catch(err => res.json(err));
};


module.exports.getAllProducts = (req, res) => {
  Product.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err));
};


module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params._id })
    .then(prod => res.json(prod))
    .catch(err => res.json(err));
};


module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params._id }, req.body, { runValidators: true })
    .then( () => res.json({msg: "Update successful"}))
    .catch(err => res.json(err));
};


module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({_id: req.params._id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
};
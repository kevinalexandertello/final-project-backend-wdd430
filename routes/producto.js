//Product Routes
const express = require('express');
const router = express.Router();
const productoController = require ('../controllers/productoController');

//api/products
router.post('/' , productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id' , productoController.actualizarProductos);
router.get('/:id' , productoController.obtenerProducto);
router.delete('/:id' , productoController.eliminarProducto);

module.exports = router;
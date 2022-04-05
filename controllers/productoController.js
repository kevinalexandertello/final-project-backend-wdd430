//Product Routes
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const Producto = require('../models/Producto');

exports.crearProducto = async (req, res) => {
    try{
        let producto;
        //Creating the product
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    }catch (error){
        console.log(error);
        res.status(500).send('An error ocurred');
    }
}
exports.obtenerProductos = async (req, res) => {
    try{

        const productos = await Producto.find();
        res.json(productos)

    } catch(error){
        console.log(error);
        res.status(500).send('An error ocurred');
    }
}
exports.actualizarProductos = async(req, res) => {
    try{

        const { nombre, categoria, ubicacion, precio} = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'Product does not exist'})
        
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id:req.params.id}, producto, {new: true })
        res.json(producto);

    } catch(error){
        console.log(error);
        res.status(500).send('An error ocurred');
    }
}

exports.obtenerProducto = async(req, res) => {
    try{

        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'Product does not exist'})
        
        }

       
        res.json(producto);

    } catch(error){
        console.log(error);
        res.status(500).send('An error ocurred');
    }
}

exports.eliminarProducto = async(req, res) => {
    try{

        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'Product does not exist'})
        
        }

       await Producto.findOneAndRemove({ _id:req.params.id})
        res.json({ msg: 'Product deleted'});

    } catch(error){
        console.log(error);
        res.status(500).send('An error ocurred');
    }
}
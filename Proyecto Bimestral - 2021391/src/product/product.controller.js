'use strict'

import { checkUpdateProduct } from '../utils/validator.js'
import Product from './product.model.js'

export const test = (req, res)=>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const create = async (req, res) => {
    try {
        let data = req.body
        let product = new Product(data)
        await product.save()
        return res.send({message: `Product with the name ${product.name} created successfully`})
    } catch (err) {
        console.log(err)
        return res.status(500).send({message: 'Error to create the product'})
    }
}

export const getProduct = async (req, res) => {
    try {
        let { id } = req.body
        let product = await Product.find(
            {_id: id}
        )
        return res.send({product})
     } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error fetching product'})
    }
}

export const getProducts = async (req, res) => {
    try {
        let products = await Product.find()
        return res.send({products})
     } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error fetching products'})
    }
}

export const update = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let update = checkUpdateProduct(data, id)
        if(!update) return res.status(400).send({message: 'Have submitted some data that cannot be updated or missing data'})
        let updatedProduct = await Product.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updatedProduct) return res.status(404).send({message: 'Product not found and not updated'})
        return res.send({message: 'Updated product', updatedProduct})
    } catch (err) {
        console.error(err)
        if(err.keyValue.name) return res.status(400).send({message: `Name of product ${err.keyValue.name} is already taken`})
        return res.status(500).send({message: 'Error updating product'})
    }
}

export const deleteP = async (req, res) => {
    try{
        let { id } = req.params
        let deletedProduct = await Product.findOneAndDelete({_id: id}) 
        if(!deletedProduct) return res.status(404).send({message: 'Product not found and not deleted'})
        return res.send({message: `Product with name ${deletedProduct.name} deleted successfully`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting product'})
    }
}
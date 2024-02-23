'use strict'

import { checkUpdateCategorie } from '../utils/validator.js'
import Categorie from './categorie.model.js'

export const test = (req, res)=>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const create = async (req, res) => {
    try {
        let data = req.body
        let categorie = new Categorie(data)
        await categorie.save()
        return res.send({message: `Categorie with the name ${categorie.name} created successfully`})
    } catch (err) {
        console.log(err)
        return res.status(500).send({message: 'Error to create the categorie'})
    }
}

export const getCategories = async (req, res) => {
    try {
        let categories = await Categorie.find()
        return res.send({categories})
     } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error fetching categories'})
    }
}

export const getCategorie = async (req, res) => {
    try {
        let { id } = req.body
        let categorie = await Categorie.find(
            {_id: id}
        )
        return res.send({categorie})
     } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error fetching categorie'})
    }
}

export const update = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let update = checkUpdateCategorie(data, id)
        if(!update) return res.status(400).send({message: 'Have submitted some data that cannot be updated or missing data'})
        let updatedCategorie = await Categorie.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updatedCategorie) return res.status(404).send({message: 'Categorie not found and not updated'})
        return res.send({message: 'Updated categorie', updatedCategorie})
    } catch (err) {
        console.error(err)
        if(err.keyValue.name) return res.status(400).send({message: `Name of categorie ${err.keyValue.name} is already taken`})
        return res.status(500).send({message: 'Error updating categorie'})
    }
}

export const deleteC = async (req, res) => {
    try{
        let { id } = req.params
        let deletedCategorie = await Categorie.findOneAndDelete({_id: id}) 
        if(!deletedCategorie) return res.status(404).send({message: 'Categorie not found and not deleted'})
        return res.send({message: `Categorie with name ${deletedCategorie.name} deleted successfully`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting categorie'})
    }
}
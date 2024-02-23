'use strict'

import Invoice from './invoice.model.js'

export const test = (req, res)=>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const create = async (req, res) => {
    try {
        let data = req.body
        let invoice = new Invoice(data)
        await invoice.save()
        return res.send({message: `Invoice with number ${invoice.envoicenumber} created successfully`})
    } catch (err) {
        console.log(err)
        return res.status(500).send({message: 'Error to create the categorie'})
    }
}

export const getInvoices = async (req, res) => {
    try {
        let invoices = await Invoice.find()
        return res.send({invoices})
     } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error fetching invoices'})
    }
}


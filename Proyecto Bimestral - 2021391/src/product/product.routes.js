import express from "express"
import { create, deleteP, getProduct, getProducts, test, update } from "./product.controller.js"
import { isUserRole, validateJwt } from "../middlewares/validate-jwt.js"

const api = express.Router()

api.get('/test', test)
api.post('/create', [validateJwt, isUserRole], create)
api.get('/get', getProducts)
api.post('/search', getProduct)
api.put('/update/:id', [validateJwt, isUserRole], update)
api.delete('/delete/:id', [validateJwt, isUserRole], deleteP)

export default api
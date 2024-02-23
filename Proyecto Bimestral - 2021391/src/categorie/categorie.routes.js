import express from 'express'
import { create, deleteC, getCategorie, getCategories, test, update } from './categorie.controller.js'
import { isUserRole, validateJwt } from '../middlewares/validate-jwt.js';

const api = express.Router();

api.get('/test', test)
api.post('/create', [validateJwt, isUserRole], create)
api.get('/get', getCategories)
api.post('/search', getCategorie)
api.put('/update/:id', [validateJwt, isUserRole], update)
api.delete('/delete/:id', [validateJwt, isUserRole], deleteC)

export default api
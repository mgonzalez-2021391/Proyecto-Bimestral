import express from 'express'
import { test, register, login, update, deleteU, registerAdmin } from './user.controller.js';
import { isUserRole, validateJwt } from '../middlewares/validate-jwt.js';

const api = express.Router();

api.get('/test', test)
api.post('/register', register)
api.post('/registerAdmin', [validateJwt, isUserRole], registerAdmin)
api.post('/login', login)
api.put('/update/:id', [validateJwt, isUserRole], update)
api.delete('/delete/:id', [validateJwt, isUserRole], deleteU)

export default api
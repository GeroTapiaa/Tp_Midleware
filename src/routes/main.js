const router = require('express').Router();
const {index, contacto ,about ,servicio, admin, login} = require('../controllers/mainController');

const adminChek = require('../middleware/admin')
router
    .get('/' , index)
    .get('/contacto' , contacto)
    .get('/service' , servicio)
    .get('/about' , about)
    .get('/admin' ,adminChek, admin)
    .get('/login' , login)





module.exports = router
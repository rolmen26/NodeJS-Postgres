const {Router} = require('express');
const router = Router();

const {  crearCliente } = require('../controllers/index.controller');

router.post('/cliente', crearCliente);

module.exports = router;
/*
    Ruta: /api/todo
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getSearch } = require('../controllers//busquedasController');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

/* GET: Ruta | Controlador */
router.get( '/:busqueda', validarJWT, getSearch );

module.exports = router;
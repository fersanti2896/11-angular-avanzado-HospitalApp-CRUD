/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getHospitals, postHospital, putHospital, deleteHospital } = require('../controllers/hospitalesController');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

/* GET: Ruta | Controlador */
router.get( '/', getHospitals );

/* POST: Ruta | Middlewere | Controlador */
router.post( '/', [], postHospital );

/* PUT: Ruta | Controlador */
router.put( '/:id', [], putHospital );

/* DELETE: Ruta */
router.delete( '/:id', deleteHospital );

module.exports = router;
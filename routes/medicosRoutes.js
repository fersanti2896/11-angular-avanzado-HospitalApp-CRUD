/*
    Ruta: /api/medicos
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getPhysicians, postPhysician, putPhysician, deletePhysician } = require('../controllers/medicosController');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

/* GET: Ruta | Controlador */
router.get( '/', getPhysicians );

/* POST: Ruta | Middlewere | Controlador */
router.post( '/', [], postPhysician );

/* PUT: Ruta | Controlador */
router.put( '/:id', [], putPhysician );

/* DELETE: Ruta */
router.delete( '/:id', deletePhysician );

module.exports = router;
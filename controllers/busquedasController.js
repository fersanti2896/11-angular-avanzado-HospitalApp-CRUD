const { response } = require("express");
const Hospital = require("../models/hospital");
const Medico = require("../models/medico");
const Usuario = require('../models/usuario');

const getSearch = async(req, res = response) => {
    const busqueda = req.params.busqueda;  
    const regex = new RegExp( busqueda, 'i' );

    const [ usuarios, medicos, hospitales ] = await Promise.all([
        Usuario.find({ nombre: regex }),
        Medico.find({ nombre: regex })
                    .populate('usuario', 'nombre')
                    .populate('hospital', 'nombre'),
        Hospital.find({ nombre: regex })
                      .populate('usuario', 'nombre email')
    ]);

    res.status(200).json({ 
        ok: true,
        usuarios,
        medicos,
        hospitales
    });
}

module.exports = {
    getSearch
}
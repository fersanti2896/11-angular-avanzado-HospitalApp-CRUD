const { response } = require("express");

const getHospitals = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Get Hospitales'
    });
}

const postHospital = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Crear Hospital'
    });
}

const putHospital = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Actualizar Hospital'
    });
}

const deleteHospital = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Eliminar Hospital'
    });
}

module.exports = {
    getHospitals,
    postHospital,
    putHospital,
    deleteHospital
}
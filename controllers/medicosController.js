const { response } = require("express");

const getPhysicians = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Get Médicos'
    });
}

const postPhysician = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Crear Médico'
    });
}

const putPhysician = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Actualizar Médico'
    });
}

const deletePhysician = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Eliminar Médico'
    });
}

module.exports = {
    getPhysicians,
    postPhysician,
    putPhysician,
    deletePhysician
}
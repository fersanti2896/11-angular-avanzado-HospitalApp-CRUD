const { response } = require("express");
const Medico = require('../models/medico');

const getPhysicians = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Get Médicos'
    });
}

const postPhysician = async(req, res = response) => {
    const uid = req.uid;
    const medico = new Medico({
        usuario: uid,
        ...req.body
    })

    try {
        const medicoDB = await medico.save()

        res.status(200).json({
            ok: true,
            medico: medicoDB
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, revisar logs!'
        })
    }

    
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
const { response } = require("express");

const getSearch = (req, res = response) => {
    const busqueda = req.params.busqueda;    

    res.status(200).json({ 
        ok: true,
        msg: 'Get Busqueda',
        busqueda
    });
}

module.exports = {
    getSearch
}
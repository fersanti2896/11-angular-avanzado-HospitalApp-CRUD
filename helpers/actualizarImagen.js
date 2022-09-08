
const fs = require('fs');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');
const Usuario = require('../models/usuario');

const actualizarImagen = async( tipo, id, nombreArchivo ) => {
    switch( tipo ) {
        case 'medicos':
            const medico = await Medico.findById(id);

            if( !medico ) {
                console.log('No se encontró el médico por el id')
                return false;
            }

            const pathViejo = `./uploads/medicos/${ medico.img }`;

            if( fs.existsSync( pathViejo ) ) {
                /* Se borra la imagen anterior */
                fs.unlinkSync( pathViejo );
            }

            medico.img = nombreArchivo;
            await medico.save();

            return true;
            break;
        case 'hospitales':
            break;   
        case 'usuarios':
            break;
        default:
            break;
    }
}

module.exports = {
    actualizarImagen
}
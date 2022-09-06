
/* Modelo de Mongoose */
const { Schema, model } = require('mongoose');

const MedicoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    }
}, { collection: 'medicos' });

/* Es para efectos visuales, no afecta la BD */
MedicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();

    return object;
});

module.exports = model('Medico', MedicoSchema);
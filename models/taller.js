import mongoose from 'mongoose';

const tallerSchema = mongoose.Schema({
    descripcion: String,
    nombre: String,
    fecha: {
        type: String,
        default: null,
    },
    URL: {
        type: String,
        default: "http://res.cloudinary.com/demo/image/upload/couple.jpg",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

let tallerModelo = mongoose.model('tallerModelo', tallerSchema);

export default tallerModelo;
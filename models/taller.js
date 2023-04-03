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

let tallerModel = mongoose.model('tallerModel', tallerSchema);

export default tallerModel;
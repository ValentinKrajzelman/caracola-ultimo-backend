import mongoose from 'mongoose';

const noticiaSchema = mongoose.Schema({
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

let noticiaModelo = mongoose.model('noticiaModelo', noticiaSchema);

export default noticiaModelo;
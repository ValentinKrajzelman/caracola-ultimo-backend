import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

const eventoSchema = mongoose.Schema({
    descripcion: String,
    nombre: String,
    fecha: {
        type: String,
        default:  new Date(),
    },
    URL: {
        type: String,
        default: "http://res.cloudinary.com/demo/image/upload/couple.jpg",
    },
    URLthumbnail: {
        type: String,
        default: "http://res.cloudinary.com/demo/image/upload/couple.jpg",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

let eventoModel = mongoose.model('eventoModel', eventoSchema);

export default eventoModel;
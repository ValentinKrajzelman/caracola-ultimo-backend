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
        default: "/imgDefault.jpg",
    },
    URLthumbnail: {
        type: String,
        default: "/imgDefaultThumbnail.jpg",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

let eventoModel = mongoose.model('eventoModel', eventoSchema);

export default eventoModel;
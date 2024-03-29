import express from 'express';
import mongoose from 'mongoose';

import eventoModel from '../models/evento.js';

const router = express.Router();

export const getEventos = async (req, res) => {
    try {
        const eventos = await eventoModel.find();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEventos = async (req, res) => {

    const { descripcion, nombre, fecha, URL, URLthumbnail } = req.body;
    const newEvento = new eventoModel({ descripcion, nombre, fecha, URL , URLthumbnail});

    try {
        await newEvento.save();
        res.status(200).json(newEvento);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getEvento = async (req, res) => {
    const { id } = req.params;

    try {
        const evento = await eventoModel.find({ _id: id });
        res.status(200).json(evento);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateEventos = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ` + id);
    const { nombre, descripcion, fecha, URL, URLthumbnail } = req.body;
    const eventoUpdate = { nombre, descripcion, fecha, URL, URLthumbnail, _id: id };
    
    try {
        await eventoModel.findByIdAndUpdate(id, eventoUpdate, { new: true });
        res.status(200).json(eventoUpdate);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteEventos = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ` + id);

    try {
        await eventoModel.findByIdAndRemove(id);
        res.status(200).json("Post " + id + " removed successfully");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;
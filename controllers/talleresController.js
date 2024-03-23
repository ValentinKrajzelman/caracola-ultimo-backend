import express from 'express';
import mongoose from 'mongoose';

import tallerModelo from '../models/taller.js';

const router = express.Router();

export const getTalleres = async (req, res) => {
    try {
        const tallers = await tallerModelo.find();
        res.status(200).json(tallers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTalleres = async (req, res) => {

    const { descripcion, nombre, fecha, URL, URLthumbnail } = req.body;
    const newtaller = new tallerModelo({ descripcion, nombre, fecha, URL, URLthumbnail });

    try {
        await newtaller.save();
        res.status(200).json(newtaller);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTaller = async (req, res) => {
    const { id } = req.params;

    try {
        const taller = await tallerModelo.find({ _id: id });
        res.status(200).json(taller);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateTalleres = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ` + id);
    const { nombre, descripcion, fecha, URL, URLthumbnail } = req.body;
    const tallerUpdate = { nombre, descripcion, fecha, URL, URLthumbnail, _id: id };

    try {
        await tallerModelo.findByIdAndUpdate(id, tallerUpdate, { new: true });
        res.status(200).json(tallerUpdate);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteTalleres = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ` + id);

    try {
        await tallerModelo.findByIdAndRemove(id);
        res.status(200).json("Post " + id + " removed successfully");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;
import express from 'express';
import mongoose from 'mongoose';

import noticiaModelo from '../models/noticia.js';

const router = express.Router();

export const getNoticias = async (req, res) => {
    try {
        const noticias = await noticiaModelo.find();
        res.status(200).json(noticias);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createNoticias = async (req, res) => {

    const { descripcion, nombre, fecha, URL } = req.body;
    const newnoticia = new noticiaModelo({ descripcion, nombre, fecha, URL });

    try {
        await newnoticia.save();
        res.status(200).json(newnoticia);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getNoticia = async (req, res) => {
    const { id } = req.params;

    try {
        const noticia = await noticiaModelo.find({ _id: id });
        res.status(200).json(noticia);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateNoticias = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ` + id);
    const { nombre, descripcion, fecha, URL, selectedFile } = req.body;
    const noticiaUpdate = { nombre, descripcion, fecha, URL, selectedFile, _id: id };

    try {
        await noticiaModelo.findByIdAndUpdate(id, noticiaUpdate, { new: true });
        res.status(200).json(noticiaUpdate);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteNoticias = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ` + id);

    try {
        await noticiaModelo.findByIdAndRemove(id);
        res.status(200).json("Post " + id + " removed successfully");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;
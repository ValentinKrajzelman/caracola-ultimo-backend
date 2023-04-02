import * as dotenv from 'dotenv' 
dotenv.config()

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import {v2} from 'cloudinary';

import postRoutes from './routes/eventosRoutes.js';
// import postRoutes from './routes/noticiasRoutes.js';
// import postRoutes from './routes/talleresRoutes.js';

const app = express();

v2.config({
  cloud_name: process.env.CLOUND_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET,
  secure: true,
})

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://valentinkrajzelman:x6MYYndOxAtpJEwC@dbmemorias.acfpnm5.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
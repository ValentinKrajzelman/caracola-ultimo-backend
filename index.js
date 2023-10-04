import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import eventosRoutes from "./routes/eventosRoutes.js";
import noticiasRoutes from "./routes/noticiasRoutes.js";
import talleresRoutes from "./routes/talleresRoutes.js";

const app = express();

// aca se toma el req en json y se crea el req.body que consumimos en los controllers
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/eventos", eventosRoutes);
app.use("/noticias", noticiasRoutes);
app.use("/talleres", talleresRoutes);

app.get("/", async (req, res) => {
  return res.status(200).json({
    msg: "Ok",
    data,
  });
});

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);

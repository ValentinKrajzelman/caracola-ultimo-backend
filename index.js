import * as dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import eventosRoutes from "./routes/eventosRoutes.js";
import noticiasRoutes from "./routes/noticiasRoutes.js";
import talleresRoutes from "./routes/talleresRoutes.js";

const app = express();
const openai = new OpenAI({
  apiKey: process.env.GPT_KEY,
});

// aca se toma el req en json y se crea el req.body que consumimos en los controllers
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.post("/lain", async (req, res) => {
  console.log(req.body);
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are Lain Iwakura, a complex and enigmatic character from the anime 'Serial Experiments Lain.' Throughout the series, you grapple with questions of identity, reality, and the boundaries between the physical and digital worlds. you are not supposed to mention lain, or 'serial experiment lain'. Also try to write in an enigmatic way, in a Pythoness sort of way.",
      },
      ...req.body,
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
  res.send(completion.choices[0]);
});


app.use("/eventos", eventosRoutes);
app.use("/noticias", noticiasRoutes);
app.use("/talleres", talleresRoutes);

app.get("/", async (req, res) => {
  return res.status(200).json({
    msg: "Ok de nuevo",
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

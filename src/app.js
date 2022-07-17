import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";

import cargoRoutes from './routes/cargo.routes'
import personasRoutes from './routes/persona.routes'
import detalle_itemRoutes from './routes/detalle_item.routes'
import empresaRoutes from './routes/empresa.routes'
import empresa_cargoRoutes from './routes/empresa_cargo.routes'
import estudianteRoutes from './routes/estudiante.routes'
import evaluadorRoutes from './routes/evaluador.routes'
import gradoRoutes from './routes/grado.routes'
import item_notaRoutes from './routes/item_nota.routes'
import itemRoutes from './routes/item.routes'
import nivelRoutes from './routes/nivel.routes'
import notaRoutes from './routes/nota.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'


const app = express();
createRoles();
// Settings
app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API Practicas PreProfesionales",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});


app.use('/api/cargo', cargoRoutes)
app.use('/api/persona', personasRoutes)
app.use('/api/detalle_item', detalle_itemRoutes)
app.use('/api/empresa', empresaRoutes)
app.use('/api/empresa_cargo', empresa_cargoRoutes)
app.use('/api/estudiante', estudianteRoutes)
app.use('/api/evaluador', evaluadorRoutes)
app.use('/api/grado', gradoRoutes)
app.use('/api/item_nota', item_notaRoutes)
app.use('/api/item', itemRoutes)
app.use('/api/nivel', nivelRoutes)
app.use('/api/nota', notaRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

export default app;

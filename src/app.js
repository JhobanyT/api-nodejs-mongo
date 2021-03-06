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
import userRoutes from './routes/user.routes'
import solicitudRoutes from './routes/solicitud.routes'
import inicioRoutes from './routes/inicio.routes'
import practicaRoutes from './routes/practica.routes'
import finalRoutes from './routes/final.routes'
import documentoRoutes from './routes/documento.routes'
import detalle_inicioRoutes from './routes/detalle_inicio.routes'
import visitaRoutes from './routes/visita.routes'
import estadoRoutes from './routes/estado.routes'
import cors from 'cors'

const app = express();
createRoles();
// Settings
app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(cors());
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
app.use('/api/user', userRoutes)
app.use('/api/solicitud', solicitudRoutes)
app.use('/api/inicio', inicioRoutes)
app.use('/api/practica', practicaRoutes)
app.use('/api/final', finalRoutes)
app.use('/api/documento', documentoRoutes)
app.use('/api/detalle_inicio', detalle_inicioRoutes)
app.use('/api/visita', visitaRoutes)
app.use('/api/estado', estadoRoutes)
export default app;

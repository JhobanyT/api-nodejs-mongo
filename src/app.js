import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";

import personasRoutes from './routes/persona.routes'
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

app.use('/api/personas', personasRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

export default app;

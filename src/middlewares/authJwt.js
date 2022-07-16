import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["token-space"];

  //console.log(token)

    if (!token) return res.status(403).json({ message: "No se proporcionó token" });

    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });

    next();
  }catch (error){
      return res.status(401).json({message: 'No autorizado'})
  }

};



export const isEstudiante = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "estudiante") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Estudiante Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};




export const isSecretaria = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "secretaria") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Secretaria Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};




export const isEvaluador = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "evaluador") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Evaluador Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};




export const isCoordinador = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "coordinador") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Coordinador Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};



export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};
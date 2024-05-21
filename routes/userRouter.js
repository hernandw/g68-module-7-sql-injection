import express from "express";
import { home } from '../controllers/userController.js'

const router = express.Router();

router.get('/', home)

router.get("/login", (req, res) => {
  res.send("Login de usuarios");
});

router.get("/register", (req, res) => {
  res.send("Registro de Usuarios ");
});

export default router;

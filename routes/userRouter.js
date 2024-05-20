import express from "express";
import path from "path";
const __dirname = path.resolve();
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

router.get("/login", (req, res) => {
  res.send("Login de usuarios");
});

router.get("/register", (req, res) => {
  res.send("Registro de Usuarios ");
});

export default router;

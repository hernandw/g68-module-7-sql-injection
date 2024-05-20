import express from "express";
const router = express.Router();

router.get("/products", (req, res) => {
    res.send("mostrando todos los productos");
});

export default router
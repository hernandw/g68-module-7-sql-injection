import express from "express";
import { getProducts, getProductById } from "../model/queries.js";
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const resultado = await getProducts();

    res.send(resultado);
  } catch (error) {
    console.log(error);
  }
});



router.post("/product", async (req, res) => {
  try {
    const { id } = req.body;

    const respuesta = await getProductById(id);
    res.send(respuesta);
  } catch (error) {
    console.log(error);
  }
});

export default router;

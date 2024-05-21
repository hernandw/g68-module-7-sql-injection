import express from "express";
import { getProducts, getProductById } from "../model/queries.js";
const router = express.Router();

router.get("/products", async (req, res) => {
  const resultado = await getProducts();

  res.send(resultado);
});

router.post("/product", async (req, res) => {
  const { id } = req.body;

  const respuesta = await getProductById(id);
  res.send(respuesta);
  try {
  } catch (error) {
    console.log(error);
  }
});

export default router;

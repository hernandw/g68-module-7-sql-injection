import express from "express";
import { getProducts } from "../model/queries.js";
const router = express.Router();

router.get("/products", async (req, res) => {
  const resultado = await getProducts();

  res.send(resultado);
});

export default router;

import express from "express";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
const app = express();
const PORT = process.env.PORT || 3000;


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);
app.use("/", productRouter);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);

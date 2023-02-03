import express from "express";
import {
  deleteProduct,
  getallData,
  postData,
  updateProduct,
} from "../Controller/Controllers.js";
const Router = express.Router();
Router.post("/post", postData);
Router.get("/products", getallData);
Router.delete("/remove/:id", deleteProduct);
Router.patch("/update/:id", updateProduct);

export default Router;

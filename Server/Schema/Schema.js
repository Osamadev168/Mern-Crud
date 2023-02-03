import mongoose, { Schema } from "mongoose";
const bdSchema = mongoose.Schema({
  productname: {
    type: String,
  },
  Price: {
    type: String,
  },
  Quantity: {
    type: String,
  },
});

const model = mongoose.model("products", bdSchema);
export default model;

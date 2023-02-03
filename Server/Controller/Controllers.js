import model from "../Schema/Schema.js";

export const postData = async (req, res) => {
  const { productname, Price, Quantity } = req.body;
  const product = {
    productname,
    Price,
    Quantity,
  };
  const data = new model(product);
  try {
    await data.save();
    return res.status(200).json("Data saved!");
  } catch (e) {
    console.log(e);
  }
};
export const getallData = async (req, res) => {
  try {
    const getData = await model.find({});
    res.status(200).json(getData);
  } catch (e) {
    console.log(e);
  }
};
export const deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    const getData = await model.deleteOne({ _id: id });
    res.status(200).json(getData);
  } catch (e) {
    console.log(e);
  }
};
export const updateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    const { productname, Price, Quantity } = req.body;
    var myquery = { _id: id };
    var newvalues = {
      $set: { productname: productname, Price: Price, Quantity: Quantity },
    };
    const getData = await model.updateOne(myquery, newvalues);
    res.status(200).json(getData);
  } catch (e) {
    console.log(e);
  }
};

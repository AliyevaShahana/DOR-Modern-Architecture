const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    // category: { type: String, required: true },
    // media: {
    //   imageMain: { type: String, required: true },
    //   video: { type: String, required: true },
    //   videoPhoto: { type: String, required: true },
    //   imageOne: { type: String, required: true },
    //   imageTwo: { type: String, required: true },
    // },
    description: { type: String, required: true },
    // details: {
    //   brand: { type: String, required: true },
    //   collection: { type: String, required: true },
    //   color: { type: String, required: true },
    //   materials: { type: String, required: true },
    // },
    imgUrl: { type: String, required: true },
  },
  { timestamps: true }
);
const Products = mongoose.model("Products", productSchema);

module.exports = Products;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ["mens", "womens", "unisex"],
    required: true,
  },
  category: { type: String, required: true },
  style: { type: String, required: true },
  price: { type: Number, required: true },
  slug: { type: String, required: true },
  color: { type: String, required: true },
  images: { type: [String], required: true },
  sizes: {
    type: [
      {
        size: {
          type: String,
          enum: [
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
          ],
          required: true,
        },
        stock: { type: Number, required: true },
      },
    ],
    required: true,
  },
  featureImage: { type: String, required: true },
  productFeatures: { type: [String], required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);

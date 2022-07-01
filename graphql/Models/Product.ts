import mongoose from "mongoose";

export interface Product {
  gender: string;
  category: string;
  style: string;
  price: number;
  color: string;
  mainImg: string;
  altImg: string[];
  sizes: {
    size:
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "XS"
      | "S"
      | "M"
      | "L"
      | "XL"
      | "XXL";
    stock: number;
  }[];
}

const productSchema = new mongoose.Schema<Product>({
  gender: {
    type: String,
    enum: ["mens", "womens", "unisex"],
    required: true,
  },
  category: { type: String, required: true },
  style: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  mainImg: { type: String, required: true },
  altImg: { type: [String], required: true },
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
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);

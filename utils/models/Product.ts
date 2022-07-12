import mongoose from "mongoose";

export interface ProductType {
  gender: "mens" | "womens" | "unisex";
  category: string;
  style: string;
  price: number;
  slug: string;
  color: string;
  images: string[];
  sizes: {
    size: string;
    stock: number;
  }[];
  featureImage: string;
  productFeatures: string[];
  description: string;
}

const productSchema = new mongoose.Schema<ProductType>({
  gender: {
    type: String,
    enum: ["mens", "womens", "unisex"],
    required: true,
  },
  category: { type: String, required: true },
  style: { type: String, required: true },
  price: { type: Number, required: true },
  slug: { type: String, required: true, unique: true },
  color: { type: String, required: true },
  images: { type: [String], required: true },
  sizes: {
    type: [
      {
        size: {
          type: String,
          enum: [
            "4",
            "5",
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

export default (mongoose.models.Product as mongoose.Model<
  ProductType,
  {},
  {},
  {},
  any
>) || mongoose.model<ProductType>("Product", productSchema);

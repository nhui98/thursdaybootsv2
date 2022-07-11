import mongoose from "mongoose";
import { ProductType } from "../models/Product";

export interface ContextType {
  Product: mongoose.Model<ProductType, {}, {}, {}, any>;
}

export interface getProductArgType {
  id: mongoose.Types.ObjectId;
}

export interface getFilteredProductsArgType {
  gender: string;
  category: string;
  style: string;
}

export interface addProductArgType {
  input: ProductType;
}

export interface addProductsArgType {
  input: ProductType[];
}

import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { ProductType } from "../models/Product";
import { UserType } from "../models/User";

export interface ContextType {
  Product: mongoose.Model<ProductType, {}, {}, {}, any>;
  User: mongoose.Model<UserType, {}, {}, {}, any>;
  req: NextApiRequest;
  res: NextApiResponse;
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

export interface getUserArgType {
  id: mongoose.Types.ObjectId;
}

export interface signinArgType {
  input: {
    email: string;
    password: string;
  };
}

export interface signupArgType {
  input: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

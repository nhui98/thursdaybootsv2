import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dbConnect from "../dbConnect";
import { setCookieJwt } from "../setCookieJwt";
import type {
  ContextType,
  getUserArgType,
  signinArgType,
  signupArgType,
} from "./resolver.types";

export const resolvers = {
  Query: {
    async getUser(parent: any, { id }: getUserArgType, { User }: ContextType) {
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      await dbConnect();
      return await User.findById({ id });
    },
    async getUsers(parent: any, args: any, { User }: ContextType) {
      await dbConnect();
      return await User.find();
    },
  },
  Mutation: {
    async signIn(
      parent: any,
      { input }: signinArgType,
      { User, res }: ContextType
    ) {
      const { email, password } = input;

      try {
        await dbConnect();

        const user = await User.findOne({ email });
        if (!user) throw new Error("User not found.");

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Password incorrect");

        setCookieJwt(user.id, user.email, res);

        return { user: user, error: false, message: null };
      } catch (error) {
        return { error: true, message: error };
      }
    },
    async signUp(
      parent: any,
      { input }: signupArgType,
      { User, res }: ContextType
    ) {
      const { firstName, lastName, email, password } = input;
      const salt = bcrypt.genSaltSync();

      try {
        await dbConnect();
        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Error("User with email already exists");

        const newUser = await new User({
          firstName,
          lastName,
          email,
          password: bcrypt.hashSync(password, salt),
        }).save();

        setCookieJwt(newUser.id, newUser.email, res);

        return { user: newUser, error: false, message: null };
      } catch (error) {
        return { error: true, message: error };
      }
    },
  },
};

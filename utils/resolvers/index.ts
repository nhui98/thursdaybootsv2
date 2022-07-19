import { merge } from "lodash";
import { resolvers as productResolvers } from "./product";
import { resolvers as userResolvers } from "./user";

export const resolvers = merge(productResolvers, userResolvers);

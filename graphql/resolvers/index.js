import { merge } from "lodash";
import { resolvers as productResolvers } from "./product";

export const resolvers = merge(productResolvers);

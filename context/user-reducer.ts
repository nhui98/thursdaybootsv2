import { Action, State } from "./user.types";

export function userReducer(state: State, action: Action) {
  const { user, shippingAddress } = action.payload;

  switch (action.type) {
    case "UPDATE": {
      const returnObject = {
        user: { ...user },
        shippingAddress: { ...shippingAddress },
      };

      localStorage.setItem("user", JSON.stringify(returnObject));

      return returnObject;
    }
    default: {
      return { ...state };
    }
  }
}

import {
  addBasketItem,
  clearBasket,
  hydrate,
  removeBasketItem,
  updateDeliveryAddress,
  updateShippingMethod,
  updateUser,
} from "./appReducerFn";
import { Action, State } from "./appTypes";

export function appReducer(state: State, action: Action) {
  switch (action.type) {
    case "HYDRATE": {
      return hydrate(action.payload);
    }
    case "ADD_BASKET_ITEM": {
      return addBasketItem(state, action.payload);
    }
    case "REMOVE_BASKET_ITEM": {
      return removeBasketItem(state, action.payload);
    }
    case "CLEAR_BASKET": {
      return clearBasket(state);
    }
    case "UPDATE_USER": {
      return updateUser(state, action.payload);
    }
    case "UPDATE_DELIVERY_ADDRESS": {
      return updateDeliveryAddress(state, action.payload);
    }
    case "UPDATE_SHIPPING_METHOD": {
      return updateShippingMethod(state, action.payload);
    }
    default: {
      return { ...state };
    }
  }
}

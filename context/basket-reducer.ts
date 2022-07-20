import type { Action, State } from "./basket.types";

export function basketReducer(state: State, action: Action) {
  const { basket, totalPrice } = state;

  switch (action.type) {
    case "ADD": {
      const { payload } = action;
      const { quantity, price, slug, size } = payload;

      const itemExistsInBasket = basket.find(
        (item) => item.slug === slug && item.size === size
      );

      if (!itemExistsInBasket) {
        const returnObject = {
          basket: [...basket, payload],
          totalPrice: totalPrice + price * quantity,
        };

        localStorage.setItem("basket", JSON.stringify(returnObject));

        return returnObject;
      }

      const returnObject = {
        basket: basket.map((item) =>
          item === itemExistsInBasket
            ? {
                ...item,
                quantity: item.quantity + quantity,
                price: item.price + price * quantity,
              }
            : item
        ),
        totalPrice: totalPrice + price * quantity,
      };

      localStorage.setItem("basket", JSON.stringify(returnObject));

      return returnObject;
    }
    case "REMOVE": {
      const { payload } = action;
      const { slug, size } = payload;

      const itemInBasket = basket.find(
        (item) => item.slug === slug && item.size === size
      );

      if (!itemInBasket) return { ...state };

      const returnObject = {
        basket: basket.filter((item) => item !== itemInBasket),
        totalPrice: totalPrice - itemInBasket.price,
      };

      localStorage.setItem("basket", JSON.stringify(returnObject));

      return returnObject;
    }
    case "HYDRATE": {
      const { payload } = action;

      return {
        ...payload,
      };
    }
    default: {
      return { ...state };
    }
  }
}
